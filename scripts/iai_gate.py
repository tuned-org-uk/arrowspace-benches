#!/usr/bin/env python3
"""Deterministic iai instruction-count gate, decoupled from gh-pages publishing.

The ``Store + chart iai benchmark history`` step publishes trend history to
``gh-pages`` through ``benchmark-action/github-action-benchmark``. That path
resolves the triggering git ref through the GitHub API and breaks when the ref
no longer exists — for example a PR branch deleted while a dispatched run is
still executing ("No commit found for SHA: refs/heads/..."). A merge-blocking
gate must not depend on publish machinery, so this script does the gate
locally: pure JSON comparison against a committed baseline, no network, no
API.

Baseline contract:

  - ``benches-results/iai-baseline.json`` holds the array of
    ``{"name", "unit": "Instructions", "value"}`` entries that the gate
    compares against. It is committed deliberately: refresh it when the
    instruction counts move for an accepted reason (arrowspace release,
    dependency refresh, bench edit) with ``--write-baseline``.
  - ``--threshold`` is the allowed growth factor (default 1.2 = the previous
    120% rule). Smaller is better; improvements never fail the gate.
  - A benchmark present in the current run but missing from the baseline
    fails the gate with ``new entry`` (baseline must be refreshed first); a
    baseline entry silently missing from the current run is reported as a
    warning so removing a bench requires a deliberate baseline refresh.

Inputs (positional, in order):
  current_path    JSON array as produced by iai_to_benchmark_action.py.
  baseline_path   JSON array in the same shape (the committed baseline).

Flags:
  --threshold F   Fail when current > baseline * F (default 1.2).
  --write-baseline
                  Copy current to baseline_path instead of gating. For the
                  workflow's refresh path; also usable locally.

Self-test (no files needed):

  uv run --no-project python scripts/iai_gate.py --self-test /tmp/ars-iai-gate-test
"""

from __future__ import annotations

import argparse
import json
import math
import shutil
import sys
import tempfile
from pathlib import Path

DEFAULT_THRESHOLD = 1.2


def load_entries(path: Path) -> dict[str, float]:
    data = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(data, list):
        raise ValueError(f"{path}: expected a JSON array, got {type(data).__name__}")
    entries: dict[str, float] = {}
    for item in data:
        name = item.get("name")
        value = item.get("value")
        if not isinstance(name, str) or not isinstance(value, (int, float)):
            raise ValueError(f"{path}: entry missing 'name'/'value': {item!r}")
        if math.isnan(value) or value < 0:
            raise ValueError(f"{path}: non-finite or negative value for {name}: {value!r}")
        entries[name] = float(value)
    if not entries:
        raise ValueError(f"{path}: no entries")
    return entries


def gate(current: dict[str, float], baseline: dict[str, float], threshold: float) -> list[str]:
    failures: list[str] = []
    for name, now in sorted(current.items()):
        if name not in baseline:
            failures.append(f"{name}: new entry (refresh the baseline)")
            continue
        was = baseline[name]
        if now > was * threshold:
            failures.append(
                f"{name}: {int(now)} > {int(was)} x {threshold} "
                f"(+{(now / was - 1) * 100:.1f}%)"
            )
    return failures


def self_test(root: Path) -> None:
    root.mkdir(parents=True, exist_ok=True)
    ok = [
        {"name": "a", "unit": "Instructions", "value": 100},
        {"name": "b", "unit": "Instructions", "value": 100},
    ]
    regressed = [
        {"name": "a", "unit": "Instructions", "value": 100},
        {"name": "b", "unit": "Instructions", "value": 121},  # > 100 * 1.2
    ]
    improved = [
        {"name": "a", "unit": "Instructions", "value": 50},
        {"name": "b", "unit": "Instructions", "value": 100},
    ]
    added = [
        {"name": "a", "unit": "Instructions", "value": 100},
        {"name": "b", "unit": "Instructions", "value": 100},
        {"name": "c", "unit": "Instructions", "value": 1},
    ]
    removed = [{"name": "a", "unit": "Instructions", "value": 100}]

    def write(name: str, entries: list[dict]) -> Path:
        p = root / name
        p.write_text(json.dumps(entries), encoding="utf-8")
        return p

    base = write("baseline.json", ok)
    assert gate(load_entries(write("cur_ok.json", ok)), load_entries(base), 1.2) == []
    assert len(gate(load_entries(write("cur_reg.json", regressed)), load_entries(base), 1.2)) == 1
    assert gate(load_entries(write("cur_imp.json", improved)), load_entries(base), 1.2) == []
    assert len(gate(load_entries(write("cur_add.json", added)), load_entries(base), 1.2)) == 1
    assert len(gate(load_entries(write("cur_rem.json", removed)), load_entries(base), 1.2)) == 0

    # 120 is exactly 100 * 1.2 -> allowed (fail only on strictly greater).
    exact = [{"name": "a", "unit": "Instructions", "value": 120}]
    assert gate(load_entries(write("cur_exact.json", exact)), load_entries(base), 1.2) == []

    # --write-baseline copies verbatim.
    cur = write("cur_wb.json", ok)
    dest = root / "wb_dest.json"
    shutil.copyfile(base, dest)
    assert gate(load_entries(cur), load_entries(dest), 1.2) == []
    print("self-test ok")


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("current", nargs="?", type=Path, help="current run's JSON array")
    parser.add_argument("baseline", nargs="?", type=Path, help="committed baseline JSON array")
    parser.add_argument(
        "--threshold",
        type=float,
        default=DEFAULT_THRESHOLD,
        help=f"allowed growth factor (default {DEFAULT_THRESHOLD})",
    )
    parser.add_argument(
        "--write-baseline",
        action="store_true",
        help="copy current to baseline instead of gating",
    )
    parser.add_argument(
        "--self-test",
        type=Path,
        metavar="DIR",
        help="run the built-in self-test in DIR and exit",
    )
    args = parser.parse_args(argv)

    if args.self_test:
        self_test(args.self_test)
        return 0

    if not args.current or not args.baseline:
        parser.error("current and baseline paths are required unless --self-test")

    try:
        current = load_entries(args.current)
        baseline = load_entries(args.baseline)
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        print(f"::error::{exc}")
        return 2

    if args.write_baseline:
        args.baseline.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(args.current, args.baseline)
        print(f"::notice::baseline refreshed from {args.current} ({len(current)} entries)")
        return 0

    for name in sorted(set(baseline) - set(current)):
        print(f"::warning::{name}: in baseline but not in this run (refresh the baseline)")

    failures = gate(current, baseline, args.threshold)
    if failures:
        for line in failures:
            print(f"::error::instruction-count regression: {line}")
        return 1
    print(f"::notice::iai gate passed ({len(current)} entries, threshold x{args.threshold})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
