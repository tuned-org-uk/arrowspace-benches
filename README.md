# arrowspace-benches

[![lint](https://github.com/tuned-org-uk/arrowspace-benches/actions/workflows/lint.yml/badge.svg)](https://github.com/tuned-org-uk/arrowspace-benches/actions/workflows/lint.yml)

**Benchmark harness for [arrowspace-rs](https://github.com/tuned-org-uk/arrowspace-rs)** — spectral vector search using graph Laplacian eigenstructure.

Covers the three hot paths of the library — index build, query-time search, and spectral primitives — across three published `arrowspace` versions per run (latest plus two pinned releases), with a side-by-side comparison page.

> **Live results:** 📊 [cross-version comparison](https://tuned-org-uk.github.io/arrowspace-benches/) · ⏱️ [latest trend chart](https://tuned-org-uk.github.io/arrowspace-benches/dev/) — see [Results](#results) for how to read them.

## Local run

```bash
# Compile-check every bench without running the timed loops:
cargo bench --no-run

# Run a single criterion bench (fast, small grid) locally:
cargo bench --bench build

# Run the full criterion suite (minutes):
cargo bench
```

The `arrowspace` dependency resolves from crates.io (latest 0.26.x) by default — `cargo bench` pulls the published release. To bench a local arrowspace-rs checkout instead, temporarily swap the dep line in `Cargo.toml`:

```toml
# Default (crates.io):
arrowspace = "0.26"
# Local checkout:
# arrowspace = { path = "../arrowspace-rs" }
```

## Benchmarks

All datasets are synthetic clustered vectors in $[0,1]^d$, generated deterministically from seed 3407 (`benches/common/mod.rs`). Change that seed and every recorded baseline breaks.

| Bench | Hot path | Grid |
|---|---|---|
| `build` | `ArrowSpaceBuilder::build` — kNN feature graph + Laplacian + λτ synthesis | n ∈ {200, 500} × d ∈ {16, 64} |
| `search` | `search_lambda_aware`, `search_lambda_aware_hybrid`, `search_linear_sorted`, `range_search`, `prepare_query_item` | n=500 × d=64, k ∈ {10, 50}, α=0.5 |
| `spectral` | `GraphLaplacian::multiply_vector`, `rayleigh_quotient`, `TauMode::compute_taumode_lambdas_parallel`, `GraphFactory::build_spectral_laplacian` | n=500 × d=64 |
| `scale` | Full hot-path set at production scale: build, all search ops, spectral primitives | n=80_000 × d=64, k ∈ {10, 50}, α=0.5 |
| `cve` | CVE-search mimic of the pyarrowspace corpus: full hot-path set | n=300_000 × d=384, k=20, α=0.5 |

The `scale` bench runs each group with `sample_size(10)` and capped warm-up/measurement times to keep CI bounded; criterion prints an expected "unable to complete 10 samples" notice for `scale/build` (one iteration ≈ 4 s). `scale_probe` (`cargo run --release --example scale_probe`) times one full-size build and prints graph health stats before you trust any `scale` result.

The `cve` bench mimics the CVE-search database benchmark from pyarrowspace and the JOSS paper: CVE records 2018-2025 embedded with an all-MiniLM-L6-v2 fine-tune become clustered 384-feature vectors, searched with the reference graph parameters from `pyarrowspace/tests/test_8_CVE_db_sweep.py` (`eps=1.31, k=25, topk=15, p=2.0, sigma=0.535`) and k=20 results. One index build ≈ 190 s on a fast laptop, so the `cve` leg is the long pole in CI (~40-60 min). Validate this distribution with `cve_probe` (`cargo run --release --example cve_probe`).

### The eps trap (read before adding benches)

The default graph parameter `eps=1.0` leaves uniform-ish data with an **empty feature graph** (`nnz == dim`, all per-item lambdas degenerate at 0.0). An index built this way "succeeds" but cannot search: every query panics with `DegenerateLambda`. All harness builders therefore pass `with_lambda_graph(1.5, 6, 3, 2.0, None)`.

Run the sanity probe when touching data generation or builder parameters:

```bash
cargo run --release --example graph_sanity
```

It prints graph nnz and degenerate-lambda counts per configuration; a healthy row has `nnz >> dim` and `zeros ≤ 1`.

Queries for search benches are sampled from indexed rows whose prepared lambda is non-degenerate — out-of-distribution random queries can map to no subcentroid and panic in `prepare_query_item`.

## CI

`.github/workflows/bench.yml` runs on push to this repo's `main`, on `repository_dispatch` from arrowspace-rs (`event_type: arrowspace-release-published`, fired when a release is published), on a nightly cron, and on manual `workflow_dispatch`.

The `criterion` job runs one matrix leg per compared arrowspace version:

| Leg | arrowspace resolution | Trend chart dir |
|---|---|---|
| `latest` | crates.io, latest 0.26.x | `dev/` |
| `v0.26.5` | pinned via `cargo update --precise 0.26.5` | `dev-v0.26.5/` |
| `v0.26.0` | pinned via `cargo update --precise 0.26.0` | `dev-v0.26.0/` |

Each leg is advisory (200% alert threshold — wall-clock numbers are noisy on shared runners). A fourth `compare` job runs after all legs and publishes the cross-version table at the gh-pages root.

**Cross-version API rule**: bench code must compile against every matrix pin. Do not use APIs absent from the oldest pin — `try_prepare_query_item`, for example, exists only from 0.26.5, so search benches filter degenerate queries via stored lambdas instead.

| Job | Runner | Tool | Role |
|---|---|---|---|
| `criterion` (×3 legs) | ubuntu-latest | criterion (wall-clock) | Advisory per version. Posts a comment but does not fail the job. |
| `compare` | ubuntu-latest | stdlib Python | Renders `index.html` from the three legs' bencher output; pushes to gh-pages root. |

`arrowspace` is resolved from crates.io on every run, so the recorded history tracks the published release. The dispatch payload carries the release commit SHA only for the status-check step, not for checkout.

### Dispatch contract (arrowspace-rs → benches)

Add to arrowspace-rs's release workflow:

```yaml
- name: Trigger benches
  uses: peter-evans/repository-dispatch@v3
  with:
    token: ${{ secrets.BENCHES_DISPATCH_PAT }}
    repository: tuned-org-uk/arrowspace-benches
    event-type: arrowspace-release-published
    client-payload: |
      {
        "sha": "${{ github.sha }}",
        "ref": "${{ github.ref_name }}",
        "actor": "${{ github.actor }}",
        "version": "${{ github.event.release.tag_name }}"
      }
```

### Required secrets

| Secret | Used by | Purpose |
|---|---|---|
| `BENCHES_STATUS_PAT` | `Post status check back to arrowspace-rs` step | Fine-grained PAT with `commit_status:write` on `tuned-org-uk/arrowspace-rs`. |

### gh-pages branch must exist

`benchmark-action@v1` with `auto-push: true` fails hard if the `gh-pages` branch doesn't exist. Create it once after the first push:

```bash
git checkout --orphan gh-pages
git rm -rf --cached .
git clean -fdx
git commit --allow-empty -m "gh-pages: initial orphan branch for benchmark-action history [skip ci]"
git push origin gh-pages
git checkout main
```

## Results

Four places to read results, each answering a different question.

### 1. Cross-version comparison (gh-pages root)

<https://tuned-org-uk.github.io/arrowspace-benches/> — one row per benchmark, one column per arrowspace version, wall-clock ns/iter plus a ratio against the latest release. This answers "did release N get faster or slower than release M?" in one glance. Ratios ≥ ×1.20 render red, ≤ ×0.80 green.

### 2. Per-version trend charts (gh-pages)

`dev/`, `dev-v0.26.5/`, `dev-v0.26.0/` each plot wall-clock ns/iter per bench over time for that version line. Use them to answer "is the latest release drifting slower over time?". Wall-clock numbers on shared runners carry 20–60% variance — treat small movements as noise.

### 3. Per-version criterion snapshots (`benches-results/`)

The `criterion` job records one frozen `criterion.json` per published arrowspace version, committed to `main`: `benches-results/v0.26.10/criterion.json`. This is the point-in-time record of "what the published release measured". See [`benches-results/README.md`](benches-results/README.md) for the storage contract.

### 4. Raw JSON artifacts (per CI run)

Each leg uploads its bencher output as an artifact (`criterion-json-latest`, `criterion-json-v0.26.5`, `criterion-json-v0.26.0`):

```bash
gh run download <run-id> --repo tuned-org-uk/arrowspace-benches -n criterion-json-latest -D ./crit-out
```

## Contributing

A pre-commit hook (`.githooks/pre-commit`) mirrors the `lint.yml` gate locally — it runs `cargo fmt --check` and `cargo clippy -Dwarnings` before each commit. Install it after a fresh clone:

```bash
git config core.hooksPath .githooks
```

Bypass with `git commit --no-verify` when intentionally committing mid-edit.

Conventions: edition 2024, no `unsafe`, `#[expect]` over `#[allow]`, no comments in bench code unless they encode a non-obvious constraint (the eps-trap comments are the canonical example). Dependency versions mirror arrowspace-rs's Cargo.toml so cargo unifies a single copy of each crate across the graph.
