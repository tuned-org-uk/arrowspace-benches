// Deterministic instruction-count benchmark for the query-time hot paths.
// Linux-only (requires Valgrind). The criterion analogue is
// `benches/search.rs`. Index build and query preparation run inside each
// measured function (iai has no per-bench setup exclusion), so counts track
// build + query; the `iai_build` bench isolates the build half, and the
// delta between a query bench and the build bench is the query cost.
#[cfg(target_os = "linux")]
use arrowspace::builder::ArrowSpaceBuilder;
#[cfg(target_os = "linux")]
use arrowspace::core::{ArrowItem, ArrowSpace};
#[cfg(target_os = "linux")]
use arrowspace::graph::GraphLaplacian;
#[cfg(target_os = "linux")]
use iai_callgrind::{library_benchmark, library_benchmark_group, main};
#[cfg(target_os = "linux")]
mod common;
#[cfg(target_os = "linux")]
use common::clustered_rows;

#[cfg(target_os = "linux")]
const N: usize = 500;
#[cfg(target_os = "linux")]
const D: usize = 64;
#[cfg(target_os = "linux")]
const QUERY_POOL: usize = 20;
#[cfg(target_os = "linux")]
const K: usize = 10;
#[cfg(target_os = "linux")]
const ALPHA: f64 = 0.5;
#[cfg(target_os = "linux")]
const RANGE_EPS: f64 = 0.05;

/// Default eps=1.0 leaves this data distribution with an empty feature
/// graph (nnz == dim, all lambdas degenerate); eps=1.5 yields a connected
/// graph and non-degenerate lambdas.
#[cfg(target_os = "linux")]
fn builder() -> ArrowSpaceBuilder {
    ArrowSpaceBuilder::new()
        .with_lambda_graph(1.5, 6, 3, 2.0, None)
        .with_seed(common::SEED)
}

#[cfg(target_os = "linux")]
struct Index {
    aspace: ArrowSpace,
    gl: GraphLaplacian,
    queries: Vec<Vec<f64>>,
}

#[cfg(target_os = "linux")]
fn build_index() -> Index {
    let rows = clustered_rows(N, D, 8);
    let (aspace, gl) = builder().build(rows);
    // Sample queries from the indexed rows: out-of-distribution random
    // vectors can map to no subcentroid and yield a degenerate (~0)
    // lambda, which makes prepare_query_item panic. Rows whose stored
    // lambda is degenerate are dropped from the pool.
    let stride = aspace.lambdas().len() / QUERY_POOL;
    let queries: Vec<Vec<f64>> = (0..QUERY_POOL)
        .map(|i| i * stride)
        .filter(|&i| aspace.lambdas()[i].abs() > 1e-12)
        .map(|i| aspace.get_item(i).item)
        .collect();
    assert!(!queries.is_empty(), "no query with non-degenerate lambda");
    Index {
        aspace,
        gl,
        queries,
    }
}

#[cfg(target_os = "linux")]
fn prepared_query(idx: &Index) -> ArrowItem {
    let q = &idx.queries[0];
    let lambda = idx
        .aspace
        .try_prepare_query_item(q, &idx.gl)
        .expect("query pool rows are non-degenerate");
    ArrowItem::new(q, lambda)
}

#[cfg(target_os = "linux")]
#[library_benchmark]
fn bench_search_lambda_aware_k10() {
    let idx = build_index();
    let q = prepared_query(&idx);
    let hits = idx
        .aspace
        .try_search_lambda_aware(&q, K, ALPHA)
        .expect("query is prepared and non-degenerate");
    std::hint::black_box(hits.len());
}

#[cfg(target_os = "linux")]
#[library_benchmark]
fn bench_search_hybrid_k10() {
    let idx = build_index();
    let q = prepared_query(&idx);
    let hits = idx.aspace.search_lambda_aware_hybrid(&q, K, ALPHA);
    std::hint::black_box(hits.len());
}

#[cfg(target_os = "linux")]
#[library_benchmark]
fn bench_search_linear_sorted_k10() {
    let idx = build_index();
    let hits = idx.aspace.search_linear_sorted(&idx.queries[0], &idx.gl, K);
    std::hint::black_box(hits.len());
}

#[cfg(target_os = "linux")]
#[library_benchmark]
fn bench_search_range() {
    let idx = build_index();
    let q = prepared_query(&idx);
    let hits = idx.aspace.range_search(&q, &idx.gl, RANGE_EPS);
    std::hint::black_box(hits.len());
}

#[cfg(target_os = "linux")]
#[library_benchmark]
fn bench_search_prepare_query_item() {
    let idx = build_index();
    let lambda = idx
        .aspace
        .try_prepare_query_item(&idx.queries[0], &idx.gl)
        .expect("query pool rows are non-degenerate");
    std::hint::black_box(lambda);
}

#[cfg(target_os = "linux")]
library_benchmark_group!(
    name = search;
    benchmarks =
        bench_search_lambda_aware_k10,
        bench_search_hybrid_k10,
        bench_search_linear_sorted_k10,
        bench_search_range,
        bench_search_prepare_query_item
);

#[cfg(target_os = "linux")]
main!(library_benchmark_groups = search);

#[cfg(not(target_os = "linux"))]
fn main() {
    eprintln!("iai-callgrind benches are Linux-only (Valgrind). Skipping on this platform.");
}
