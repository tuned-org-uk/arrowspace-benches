use arrowspace::builder::ArrowSpaceBuilder;
use arrowspace::core::{ArrowItem, ArrowSpace};
use arrowspace::graph::GraphLaplacian;
use criterion::{BenchmarkId, Criterion, criterion_group, criterion_main};
use std::hint::black_box;

mod common;
use common::clustered_rows;

/// Default eps=1.0 leaves this data distribution with an empty feature
/// graph (nnz == dim, all lambdas degenerate); eps=1.5 yields a connected
/// graph and non-degenerate lambdas.
fn builder() -> ArrowSpaceBuilder {
    ArrowSpaceBuilder::new()
        .with_lambda_graph(1.5, 6, 3, 2.0, None)
        .with_seed(common::SEED)
}

const N: usize = 500;
const D: usize = 64;
const QUERY_POOL: usize = 20;
const KS: &[usize] = &[10, 50];
const ALPHA: f64 = 0.5;
const RANGE_EPS: f64 = 0.05;

struct Index {
    aspace: ArrowSpace,
    gl: GraphLaplacian,
    queries: Vec<Vec<f64>>,
}

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

fn prepared_query(idx: &Index, i: usize) -> ArrowItem {
    let q = &idx.queries[i % idx.queries.len()];
    let lambda = idx
        .aspace
        .try_prepare_query_item(q, &idx.gl)
        .expect("query pool rows are non-degenerate");
    ArrowItem::new(q, lambda)
}

fn bench_search(c: &mut Criterion) {
    let idx = build_index();
    let mut group = c.benchmark_group("search");

    for k in KS {
        group.bench_with_input(BenchmarkId::new("lambda_aware", k), k, |b, &k| {
            let mut i = 0usize;
            b.iter(|| {
                let q = prepared_query(&idx, i);
                i += 1;
                black_box(
                    idx.aspace
                        .try_search_lambda_aware(black_box(&q), k, ALPHA)
                        .expect("query is prepared and non-degenerate"),
                );
            });
        });

        group.bench_with_input(BenchmarkId::new("hybrid", k), k, |b, &k| {
            let mut i = 0usize;
            b.iter(|| {
                let q = prepared_query(&idx, i);
                i += 1;
                black_box(
                    idx.aspace
                        .search_lambda_aware_hybrid(black_box(&q), k, ALPHA),
                );
            });
        });

        group.bench_with_input(BenchmarkId::new("linear_sorted", k), k, |b, &k| {
            let mut i = 0usize;
            b.iter(|| {
                let q = &idx.queries[i % QUERY_POOL];
                i += 1;
                black_box(idx.aspace.search_linear_sorted(black_box(q), &idx.gl, k));
            });
        });
    }

    group.bench_function("range_search", |b| {
        let mut i = 0usize;
        b.iter(|| {
            let q = prepared_query(&idx, i);
            i += 1;
            black_box(idx.aspace.range_search(black_box(&q), &idx.gl, RANGE_EPS));
        });
    });

    // Label kept for chart continuity; measures the fallible try_ twin
    // (panicking prepare_query_item is deprecated since arrowspace 0.27).
    group.bench_function("prepare_query_item", |b| {
        let mut i = 0usize;
        b.iter(|| {
            let q = &idx.queries[i % QUERY_POOL];
            i += 1;
            black_box(
                idx.aspace
                    .try_prepare_query_item(black_box(q), &idx.gl)
                    .expect("query pool rows are non-degenerate"),
            );
        });
    });

    group.finish();
}

criterion_group!(benches, bench_search);
criterion_main!(benches);
