# AGENTS.md

Agent-focused guidance for working on the `arrowspace-benches` benchmark harness.

Always use ASD-STE100 Simplified Technical English

## Project basics

- **What this repo is**: Criterion benchmark harness for [arrowspace-rs](https://github.com/tuned-org-uk/arrowspace-rs). It is *not* arrowspace itself; it pulls a published arrowspace release from crates.io (latest `0.28.x`) and measures the library's three hot paths: index build, query-time search, and spectral primitives.
- **Language / edition**: Rust 2024 (MSRV 1.85), mirroring arrowspace-rs's toolchain.
- **Repository**: https://github.com/tuned-org-uk/arrowspace-benches
- **Default branch**: `main`. There is no `development` branch here.
- **License**: Apache-2.0.
- **Sibling repo**: `arrowspace-rs` lives alongside this one; follow its AGENTS.md for algorithm-side conventions.

## Build and run benches

```bash
# Compile-check every bench without running timed loops (portable gate):
cargo bench --no-run

# Run a single criterion bench (fast, small grid) locally:
cargo bench --bench build

# Run the full criterion suite (minutes):
cargo bench
```

### Local arrowspace-rs checkout

The `arrowspace` dep resolves from crates.io by default. To bench a local checkout, temporarily swap the dep line in `Cargo.toml`:

```toml
# Default (crates.io):
arrowspace = ">=0.26.14"
# Local checkout:
# arrowspace = { path = "../arrowspace-rs" }
```

**API drift warning**: the local tree is often ahead of the published release (e.g. 0.26.11 locally vs 0.26.10 on crates.io). Verify every import against `~/.cargo/registry/src/*/arrowspace-<version>/` before using an API seen only in the local tree — `compute_taumode_lambdas_parallel` is an associated function on `TauMode`, not a free function, and that distinction already cost one compile cycle.

## The eps trap (IMPORTANT)

Default graph parameter `eps=1.0` leaves uniform-ish synthetic data with an **empty feature graph**: `nnz == dim`, all per-item lambdas degenerate at exactly 0.0. The build succeeds; every query then panics with `DegenerateLambda`. All harness builders pass `with_lambda_graph(1.5, 6, 3, 2.0, None)`.

Before trusting any benchmark result on new data generation or builder parameters:

```bash
cargo run --release --example graph_sanity
```

For the production-scale distribution (`benches/scale.rs`), use the scale probe instead — it times one full-size build too:

```bash
cargo run --release --example scale_probe
```

A healthy row has `nnz >> dim` and `zeros ≤ 1`. Search benches sample queries from indexed rows whose prepared lambda is non-degenerate — out-of-distribution random queries can panic in `prepare_query_item`.

## Lint and format (enforced in CI)

```bash
cargo fmt --all -- --check
cargo clippy -Dwarnings
```

A pre-commit hook (`.githooks/pre-commit`) mirrors the `lint.yml` gate locally. Install it after a fresh clone:

```bash
git config core.hooksPath .githooks
```

Bypass with `git commit --no-verify` when intentionally committing mid-edit.

## CI workflow (`.github/workflows/bench.yml`)

Triggers: push to `main`, `repository_dispatch` from arrowspace-rs (`event_type: arrowspace-release-published`, fired at release publication), a nightly cron (`0 7 * * *`), and manual `workflow_dispatch`.

| Job | Runner | Tool | Role |
|---|---|---|---|
| `criterion` (×4 matrix legs) | ubuntu-latest | criterion (wall-clock) | One leg per compared version: `latest` (crates.io 0.28.x), pinned `0.28.0`, pinned `0.27.0`, pinned `0.26.14`. Advisory, 200% threshold. |
| `iai` | ubuntu-latest | iai-callgrind (instruction count) | Deterministic gate. 120% alert threshold, `fail-on-alert: true`. Runs `latest` only (no matrix pinning). Posts a `success`/`failure` status check back to arrowspace-rs. |
| `compare` | ubuntu-latest | stdlib Python | After all legs: renders the cross-version table to gh-pages root via `scripts/make_compare_page.py`. |

### Cross-version API rule (IMPORTANT)

Bench code must compile against **every** matrix pin. Before using an arrowspace API, grep it in the oldest pin's source (`~/.cargo/registry/src/*/arrowspace-0.26.14/`). Version gap: `try_prepare_query_item` / `try_search_lambda_aware` are missing from pre-0.26.12 releases. The benches call the `try_` twins with `.expect()` at the call site — sound because query pools are pre-filtered to non-degenerate stored lambdas (present and signature-identical in 0.26.14 / 0.27.0 / 0.28.0 sources). The panicking twins `prepare_query_item` / `search_lambda_aware` are deprecated since 0.27 and denied by CI's warning gate.

To change which versions are compared, edit the `matrix.version` list in bench.yml and the matching chart dirs + `compare` job arguments; keep the oldest pin compiling.

### Results persistence

- Trend charts + JSON history → `gh-pages`: criterion `dev/`, `dev-v0.28.0/`, `dev-v0.27.0/`, `dev-v0.26.14/`; iai-callgrind `iai-dev/`.
- Cross-version comparison page → `gh-pages/index.html` (published by the `compare` job).
- Per-version criterion snapshots → `benches-results/v<arrowspace>/criterion.json` (idempotent; committed to `main`; any leg can be first to record a version).

## iai-callgrind — the runner binary (IMPORTANT)

`iai-callgrind` 0.14 split the runtime into a **separate `iai-callgrind-runner` binary** that is *not* auto-installed by `cargo bench`. `cargo install iai-callgrind` installs the **library crate** only; the runner is its own published crate `iai-callgrind-runner` (see `Cargo.lock`). Symptom when the runner is missing:

```
iai-callgrind: Error: Failed to run benchmarks: No such file or directory (os error 2).
Is iai-callgrind-runner installed and iai-callgrind-runner in your $PATH?
```

`cargo bench --no-run` compiles the bench crate but does **not** install the runner. Bench binaries then exec `iai-callgrind-runner` from `$PATH` at run time and fail immediately — no callgrind run happens, no JSON is produced. Fix locally / in CI:

```bash
# Install the runner at the version Cargo.lock pins (must match the lib dep).
cargo install iai-callgrind-runner --version 0.14.2 --locked
# Or point the env var at a known binary path:
export IAI_CALLGRIND_RUNNER=/path/to/iai-callgrind-runner
```

Valgrind itself also needs installing on Linux: `sudo apt-get update && sudo apt-get install -y valgrind`.

### iai-callgrind `--output-format=json` semantics (IMPORTANT)

`iai-callgrind` 0.14's `--output-format=json` prints one **`BenchmarkSummary` object per benchmark line** on stdout (NDJSON — one JSON document per line; *not* a JSON array). The instruction count lives at **`callgrind_summary.callgrind_run.total.summary.Ir.metrics`** (*not* `events.Ir.metrics` — `events` is per-segment). `metrics` is an `EitherOrBoth_for_uint64`:

- `{"Left": n}` — new-only (first run, no prior baseline on disk)
- `{"Right": o}` — old-only (degenerate; the new run produced nothing)
- `{"Both": [n, o]}` — new `n` and old `o`; project `n` = `Both[0]` for the current value

`benchmark-action/github-action-benchmark@v1` has **no `iai-callgrind` tool key**, so the `iai` CI job maps iai output through `tool: customSmallerIsBetter`, which expects a JSON **array** of entries shaped `{"name", "unit", "value"}`. The NDJSON→array conversion is done by `scripts/iai_to_benchmark_action.py` (stdlib-only; run its `--self-test` locally with `uv run --no-project python scripts/iai_to_benchmark_action.py --self-test /tmp/ars-iai-test`). It projects each summary's `module_path` (or `function_name`) → `name`, `Ir` `Left`/`Both[0]` → `value`, and fixes `unit: "Instructions"`. Instruction counts are deterministic and smaller-is-better, so a tight `120%` alert threshold is safe on GitHub-hosted runners.

### Required secrets

| Secret | Used by | Purpose |
|---|---|---|
| `BENCHES_STATUS_PAT` | `Post status check back to arrowspace-rs` step | Fine-grained PAT with `commit_status:write` on `tuned-org-uk/arrowspace-rs`. |

### gh-pages branch must exist (IMPORTANT)

`benchmark-action@v1` with `auto-push: true` + `gh-pages-branch: gh-pages` fails hard if the branch doesn't exist:

```
fatal: couldn't find remote ref gh-pages
Error: The process '/usr/bin/git' failed with exit code 128
```

Create an orphan branch after the first push:

```bash
git checkout --orphan gh-pages
git rm -rf --cached .
git clean -fdx
git commit --allow-empty -m "gh-pages: initial orphan branch for benchmark-action history [skip ci]"
git push origin gh-pages
git checkout main
```

### Re-running failed jobs (IMPORTANT)

Re-running a failed job reuses the **workflow file pinned to the triggering SHA**, so re-running an old run whose SHA predates a fix will re-fail the same way. To validate a fix, trigger a **fresh** `workflow_dispatch` from the new tip:

```bash
gh workflow run bench.yml --repo tuned-org-uk/arrowspace-benches --ref main
```

## Benchmark inventory

| Bench | Hot path | Grid |
|---|---|---|
| `build` | `ArrowSpaceBuilder::build` | n ∈ {200, 500} × d ∈ {16, 64} |
| `search` | `try_search_lambda_aware`, `search_lambda_aware_hybrid`, `search_linear_sorted`, `range_search`, `try_prepare_query_item` | n=500 × d=64, k ∈ {10, 50} |
| `spectral` | `multiply_vector`, `rayleigh_quotient`, `TauMode::compute_taumode_lambdas_parallel`, `build_spectral_laplacian` | n=500 × d=64 |
| `scale` | Full hot-path set at production scale | n=80_000 × d=64, k ∈ {10, 50} |
| `cve` | CVE-search mimic of the pyarrowspace corpus: full hot-path set | n=300_000 × d=384, k=20 |

The `scale` bench caps criterion at `sample_size(10)` + short warm-up/measurement to keep CI bounded; the "unable to complete 10 samples" notice for `scale/build` is expected (one build ≈ 4 s locally). `examples/scale_probe.rs` times one full-size build and prints graph health before trusting a `scale` result.

The `cve` bench uses the graph parameters from `pyarrowspace/tests/test_8_CVE_db_sweep.py` (`eps=1.31, k=25, topk=15, p=2.0, sigma=0.535`) on clustered 384-feature data mimicking MiniLM embeddings. It is the long pole in CI: one build ≈ 190 s locally (several times that on runners), so the whole `cve` leg takes ~40-60 min; matrix legs run in parallel. `examples/cve_probe.rs` validates graph health for this distribution.

All datasets come from `benches/common/mod.rs`, seeded with **3407**. Changing the seed invalidates every recorded baseline.

### Deterministic gate (iai-callgrind, Linux-only)

`iai_build`, `iai_search`, `iai_spectral` mirror the `build`/`search`/`spectral` criterion benches at the small end of the grid (Valgrind is ~50x slower than native), one group per bench crate. Index build and query preparation run inside each measured function (iai has no per-bench setup exclusion), so a query or spectral bench's count tracks build + primitive; the delta against the matching `iai_build` case isolates the query/primitive cost. iai requires Valgrind, so these benches have a `#[cfg(not(target_os = "linux"))] fn main()` stub to keep `cargo bench --no-run` a portable gate.

- `iai_build`: `ArrowSpaceBuilder::build` at 200×16 and 500×64.
- `iai_search`: all five query paths at 500×64, k=10.
- `iai_spectral`: `multiply_vector`, `rayleigh_quotient`, `compute_taumode_lambdas_parallel` (200×16), `build_spectral_laplacian` (500×64).

Follow the same eps-trap and query-pool rules as the criterion benches: `eps=1.5` via `with_lambda_graph`, queries sampled from indexed rows with non-degenerate stored lambdas.

## Python tooling

Scripts under `scripts/` are stdlib-only and run with the CI's system
python3. Locally, use [`uv`](https://docs.astral.sh/uv/) so no system
interpreter is polluted:

```bash
uv run --no-project python scripts/make_compare_page.py \
  --self-test /tmp/ars-compare-test
```

## Code conventions

- Follow arrowspace-rs conventions: edition 2024, no `unsafe`, `#[expect]` over `#[allow]`.
- Dependency versions mirror arrowspace-rs's Cargo.toml so cargo unifies a single copy of each crate across the graph.
- No comments in generated bench code unless they encode a non-obvious constraint (the eps-trap comments are the canonical example).
