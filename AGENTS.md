# AGENTS.md

Agent-focused guidance for working on the `arrowspace-benches` benchmark harness.

Always use ASD-STE100 Simplified Technical English

## Project basics

- **What this repo is**: Criterion benchmark harness for [arrowspace-rs](https://github.com/tuned-org-uk/arrowspace-rs). It is *not* arrowspace itself; it pulls a published arrowspace release from crates.io (latest `0.26.x`) and measures the library's three hot paths: index build, query-time search, and spectral primitives.
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
arrowspace = "0.26"
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
| `criterion` (×3 matrix legs) | ubuntu-latest | criterion (wall-clock) | One leg per compared version: `latest` (crates.io 0.26.x), pinned `0.26.5`, pinned `0.26.0`. Advisory, 200% threshold. |
| `compare` | ubuntu-latest | stdlib Python | After all legs: renders the cross-version table to gh-pages root via `scripts/make_compare_page.py`. |

### Cross-version API rule (IMPORTANT)

Bench code must compile against **every** matrix pin. Before using an arrowspace API, grep it in the oldest pin's source (`~/.cargo/registry/src/*/arrowspace-0.26.0/`). Known gap: `try_prepare_query_item` exists only from 0.26.5 — search benches filter degenerate queries via stored lambdas (`aspace.lambdas()[i].abs() > 1e-12`) instead.

To change which versions are compared, edit the `matrix.version` list in bench.yml and the matching chart dirs + `compare` job arguments; keep the oldest pin compiling.

### Results persistence

- Trend charts + JSON history → `gh-pages`, one dir per leg: `dev/`, `dev-v0.26.5/`, `dev-v0.26.0/`.
- Cross-version comparison page → `gh-pages/index.html` (published by the `compare` job).
- Per-version criterion snapshots → `benches-results/v<arrowspace>/criterion.json` (idempotent; committed to `main`; any leg can be first to record a version).

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
| `search` | `search_lambda_aware`, `search_lambda_aware_hybrid`, `search_linear_sorted`, `range_search`, `prepare_query_item` | n=500 × d=64, k ∈ {10, 50} |
| `spectral` | `multiply_vector`, `rayleigh_quotient`, `TauMode::compute_taumode_lambdas_parallel`, `build_spectral_laplacian` | n=500 × d=64 |
| `scale` | Full hot-path set at production scale | n=80_000 × d=64, k ∈ {10, 50} |
| `cve` | CVE-search mimic of the pyarrowspace corpus: full hot-path set | n=300_000 × d=384, k=20 |

The `scale` bench caps criterion at `sample_size(10)` + short warm-up/measurement to keep CI bounded; the "unable to complete 10 samples" notice for `scale/build` is expected (one build ≈ 4 s locally). `examples/scale_probe.rs` times one full-size build and prints graph health before trusting a `scale` result.

The `cve` bench uses the graph parameters from `pyarrowspace/tests/test_8_CVE_db_sweep.py` (`eps=1.31, k=25, topk=15, p=2.0, sigma=0.535`) on clustered 384-feature data mimicking MiniLM embeddings. It is the long pole in CI: one build ≈ 190 s locally (several times that on runners), so the whole `cve` leg takes ~40-60 min; matrix legs run in parallel. `examples/cve_probe.rs` validates graph health for this distribution.

All datasets come from `benches/common/mod.rs`, seeded with **3407**. Changing the seed invalidates every recorded baseline.

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
