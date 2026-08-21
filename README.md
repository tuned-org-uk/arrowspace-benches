# arrowspace-benches

[![lint](https://github.com/tuned-org-uk/arrowspace-benches/actions/workflows/lint.yml/badge.svg)](https://github.com/tuned-org-uk/arrowspace-benches/actions/workflows/lint.yml)

**Benchmark harness for [arrowspace-rs](https://github.com/tuned-org-uk/arrowspace-rs)** — spectral vector search using graph Laplacian eigenstructure.

Covers the three hot paths of the library — index build, query-time search, and spectral primitives — and wires CI to run them on every published `arrowspace` release.

> **Live trend charts:** ⏱️ [criterion (wall-clock)](https://tuned-org-uk.github.io/arrowspace-benches/dev/) — see [Results](#results) for how to read them.

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

| Job | Runner | Tool | Role |
|---|---|---|---|
| `criterion` | ubuntu-latest | criterion (wall-clock) | Advisory. 200% alert threshold — noisy on shared runners, posts a comment but does not fail the job. |

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

Three places to read results, each answering a different question.

### 1. Live trend chart (gh-pages)

<https://tuned-org-uk.github.io/arrowspace-benches/dev/> plots wall-clock ns/iter per bench over time, one series per benchmark name (`build/builder/500x64`, `search/hybrid/50`, …). Wall-clock numbers on shared runners carry 20–60% variance — treat small movements as noise.

### 2. Per-version criterion snapshots (`benches-results/`)

The `criterion` job records one frozen `criterion.json` per published arrowspace version, committed to `main`: `benches-results/v0.26.10/criterion.json`. This is the point-in-time record of "what the published release measured" — use it to diff two releases against each other rather than tracking the rolling trend. See [`benches-results/README.md`](benches-results/README.md) for the storage contract.

### 3. Raw JSON artifacts (per CI run)

Each run uploads `criterion-json` → `bench-output/criterion.json` (bencher format):

```bash
gh run download <run-id> --repo tuned-org-uk/arrowspace-benches -n criterion-json -D ./crit-out
```

## Contributing

A pre-commit hook (`.githooks/pre-commit`) mirrors the `lint.yml` gate locally — it runs `cargo fmt --check` and `cargo clippy -Dwarnings` before each commit. Install it after a fresh clone:

```bash
git config core.hooksPath .githooks
```

Bypass with `git commit --no-verify` when intentionally committing mid-edit.

Conventions: edition 2024, no `unsafe`, `#[expect]` over `#[allow]`, no comments in bench code unless they encode a non-obvious constraint (the eps-trap comments are the canonical example). Dependency versions mirror arrowspace-rs's Cargo.toml so cargo unifies a single copy of each crate across the graph.
