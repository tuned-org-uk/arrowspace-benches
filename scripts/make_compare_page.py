#!/usr/bin/env python3
"""Render a cross-version benchmark comparison page from bencher-format files.

Input: one criterion.json per arrowspace version, as produced by
`cargo bench -- --output-format bencher` (one line per benchmark:
`test <name> ... bench: <value> ns/iter (+/- <delta>)`).

Output: a static index.html with one row per benchmark, one column per
version, and a ratio against the baseline (first) version. Published at
the gh-pages root by the `compare` job in .github/workflows/bench.yml.

Stdlib-only. Self-test:

    python3 scripts/make_compare_page.py --self-test /tmp/ars-compare-test
"""

from __future__ import annotations

import argparse
import html
import re
import sys
from pathlib import Path

BENCH_LINE = re.compile(
    r"^test\s+(?P<name>.+?)\s+\.\.\.\s+bench:\s+"
    r"(?P<value>[\d,]+)\s+ns/iter(?:\s+\(\+/-\s+(?P<delta>[\d,]+)\))?"
)

CHART_LINKS = [
    ("latest", "dev/"),
    ("v0.30.0", "dev-v0.30.0/"),
    ("v0.29.0", "dev-v0.29.0/"),
    ("v0.28.0", "dev-v0.28.0/"),
]

CSS = """
:root { color-scheme: light dark; }
body { font-family: -apple-system, 'Segoe UI', sans-serif;
       margin: 2rem auto; max-width: 72rem; padding: 0 1rem; }
h1 { font-size: 1.4rem; } h2 { font-size: 1.05rem; margin-top: 2rem; }
table { border-collapse: collapse; width: 100%; font-size: 0.88rem; }
th, td { border-bottom: 1px solid #8884; padding: 0.35rem 0.7rem;
         text-align: right; white-space: nowrap; }
th:first-child, td:first-child { text-align: left;
                                 font-family: ui-monospace, monospace; }
thead th { border-bottom: 2px solid #8886; }
td.ratio { font-family: ui-monospace, monospace; }
.regression { color: #d9534f; } .improvement { color: #2e9e5b; }
.muted { opacity: 0.55; }
nav a { margin-right: 1.2rem; }
footer { margin-top: 2rem; font-size: 0.8rem; }
"""


def parse_bencher(path: Path) -> dict[str, tuple[int, int]]:
    """Return {bench_name: (ns_per_iter, delta_ns)} from a bencher file."""
    results: dict[str, tuple[int, int]] = {}
    for lineno, line in enumerate(path.read_text().splitlines(), start=1):
        m = BENCH_LINE.match(line.strip())
        if not m:
            continue
        value = int(m["value"].replace(",", ""))
        delta = int(m["delta"].replace(",", "")) if m["delta"] else 0
        results[m["name"]] = (value, delta)
    if not results:
        raise ValueError(f"{path}: no bencher lines found")
    return results


def load_series(
    pairs: list[str],
) -> tuple[list[str], list[dict[str, tuple[int, int]]]]:
    """Parse LABEL=PATH pairs, dropping inputs that are missing or empty.

    A criterion leg that timed out or panicked uploads no artifact; the
    page must still render from the surviving columns, with gap markers
    where a bench has no data. Emits a GitHub Actions warning per dropped
    input so the degradation is visible in the run log.
    """
    labels: list[str] = []
    series: list[dict[str, tuple[int, int]]] = []
    for pair in pairs:
        label, sep, path = pair.partition("=")
        if not sep or not path:
            raise SystemExit(f"bad series spec {pair!r}: expected LABEL=PATH")
        p = Path(path)
        try:
            data = parse_bencher(p)
        except (OSError, ValueError) as exc:
            print(
                f"::warning::dropped comparison input {label!r}: {exc}",
                file=sys.stderr,
            )
            continue
        labels.append(label)
        series.append(data)
    return labels, series


def fmt_ns(ns: int) -> str:
    if ns >= 1_000_000:
        return f"{ns / 1_000_000:.2f} ms"
    if ns >= 1_000:
        return f"{ns / 1_000:.2f} us"
    return f"{ns} ns"


def fmt_ratio(ratio: float) -> str:
    cls = ""
    if ratio >= 1.20:
        cls = " class='ratio regression'"
    elif ratio <= 0.80:
        cls = " class='ratio improvement'"
    else:
        cls = " class='ratio'"
    return f"<td{cls}>x{ratio:.2f}</td>"


def render(
    labels: list[str], series: list[dict[str, tuple[int, int]]]
) -> str:
    baseline = labels[0]
    base_data = series[0]
    names = sorted(set().union(*(s.keys() for s in series)))

    head = "".join(f"<th>{html.escape(l)}</th>" for l in labels)
    head += "".join(
        f"<th>{html.escape(l)} / {html.escape(baseline)}</th>"
        for l in labels[1:]
    )

    rows = []
    for name in names:
        cells = []
        for data in series:
            if name in data:
                v, d = data[name]
                cells.append(f"<td title='+/- {fmt_ns(d)}'>{fmt_ns(v)}</td>")
            else:
                cells.append("<td class='muted'>&mdash;</td>")
        base_v = base_data.get(name, (None,))[0]
        for data in series[1:]:
            v = data.get(name, (None,))[0]
            if v and base_v:
                cells.append(fmt_ratio(v / base_v))
            else:
                cells.append("<td class='ratio muted'>&mdash;</td>")
        rows.append(
            f"<tr><td>{html.escape(name)}</td>{''.join(cells)}</tr>"
        )

    nav = " ".join(
        f"<a href='{href}'>{html.escape(label)} trend</a>"
        for label, href in CHART_LINKS
    )
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>arrowspace-benches &mdash; cross-version comparison</title>
<style>{CSS}</style>
</head>
<body>
<h1>arrowspace-benches &mdash; cross-version comparison</h1>
<nav>{nav}</nav>
<h2>Wall-clock ns/iter, lower is better ({html.escape(baseline)} = baseline)</h2>
<table>
<thead><tr><th>Benchmark</th>{head}</tr></thead>
<tbody>{''.join(rows)}
</tbody>
</table>
<footer>Generated by <code>scripts/make_compare_page.py</code> from
criterion bencher output on GitHub-hosted runners; expect 20&ndash;60%
run-to-run noise. Per-release snapshots live under
<code>benches-results/</code> on <code>main</code>.</footer>
</body>
</html>
"""


def self_test(tmp: Path) -> None:
    tmp.mkdir(parents=True, exist_ok=True)
    old = tmp / "old.json"
    new = tmp / "new.json"
    old.write_text(
        "test build/builder/200x16 ... bench:  12,000,000 ns/iter (+/- 100,000)\n"
        "test search/hybrid/50 ... bench:  200,000 ns/iter (+/- 5,000)\n"
        "test only-in-old ... bench:  1 ns/iter\n"
    )
    new.write_text(
        "test build/builder/200x16 ... bench:  10,862,656 ns/iter (+/- 484,025)\n"
        "test search/hybrid/50 ... bench:  178,000 ns/iter (+/- 4,000)\n"
        "test only-in-new ... bench:  999 ns/iter\n"
    )
    got_old = parse_bencher(old)
    assert got_old["build/builder/200x16"] == (12_000_000, 100_000), got_old
    assert got_old["only-in-old"] == (1, 0)
    page = render(["latest", "vX"], [parse_bencher(new), got_old])
    assert "build/builder/200x16" in page
    assert "x1.10" in page, "expected 12000000/10862656 ratio x1.10"
    assert "x1.12" in page, "expected 200000/178000 ratio x1.12"
    assert "&mdash;" in page, "expected gap markers for missing benches"
    assert "only-in-new" in page and "only-in-old" in page

    # A leg that died uploads no artifact: its input file is absent and the
    # column must be dropped, not crash the render.
    missing = tmp / "does-not-exist.json"
    got_labels, got_series = load_series([f"vA={new}", f"vB={missing}"])
    assert got_labels == ["vA"], got_labels
    assert len(got_series) == 1
    page = render(got_labels, got_series)
    assert "build/builder/200x16" in page
    assert "x1.10" not in page, "single column must render no ratios"

    print(f"self-test OK ({tmp})")


def main(argv: list[str]) -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--out", default="index.html", help="output HTML path")
    ap.add_argument(
        "series",
        nargs="*",
        metavar="LABEL=PATH",
        help="first pair is the baseline version",
    )
    ap.add_argument(
        "--self-test",
        type=Path,
        metavar="DIR",
        help="write fixtures to DIR, verify, exit",
    )
    args = ap.parse_args(argv)

    if args.self_test:
        self_test(args.self_test)
        return 0

    if len(args.series) < 2:
        ap.error("need at least two LABEL=PATH pairs")

    labels, series = load_series(args.series)
    if not series:
        print(
            "::error::no usable criterion inputs — nothing to render",
            file=sys.stderr,
        )
        return 1

    page = render(labels, series)
    Path(args.out).write_text(page)
    print(
        f"wrote {args.out} ({len(series)}/{len(args.series)} versions,"
        f" baseline={labels[0]})"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
