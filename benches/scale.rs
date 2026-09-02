use arrowspace::builder::ArrowSpaceBuilder;
use arrowspace::core::ArrowItem;
use arrowspace::graph::GraphFactory;
use arrowspace::search::taumode::TauMode;
use criterion::{BatchSize, BenchmarkId, Criterion, criterion_group, criterion_main};
use rand::prelude::*;
use rand_chacha::ChaCha8Rng;
use std::hint::black_box;
use std::time::Duration;

mod common;
use common::{SEED, clustered_rows};

const N: usize = 80_000;
const D: usize = 64;
const QUERY_POOL: usize = 20;
const KS: &[usize] = &[10, 50];
const ALPHA: f64 = 0.5;
const RANGE_EPS: f64 = 0.05;

/// Default eps=1.0 leaves this data distribution with an empty feature
/// graph (nnz == dim, all lambdas degenerate); eps=1.5 yields a connected
/// graph and non-degenerate lambdas.
fn builder() -> ArrowSpaceBuilder {
    ArrowSpaceBuilder::new()
        .with_lambda_graph(1.5, 6, 3, 2.0, None)
        .with_seed(SEED)
}

fn probe_vector(d: usize) -> Vec<f64> {
    let mut rng = ChaCha8Rng::seed_from_u64(SEED + 2);
    (0..d).map(|_| rng.random::<f64>()).collect()
}

fn bench_scale(c: &mut Criterion) {
    let rows = clustered_rows(N, D, 8);
    let (mut aspace, gl) = builder().build(rows.clone());
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
    let x = probe_vector(gl.shape().1);

    let mut group = c.benchmark_group("scale");
    group.sample_size(10);
    group.warm_up_time(Duration::from_secs(1));
    group.measurement_time(Duration::from_secs(5));

    group.bench_with_input(
        BenchmarkId::new("build", format!("{}x{}", N, D)),
        &rows,
        |b, rows| {
            b.iter_batched(
                || rows.clone(),
                |rows| {
                    let (aspace, gl) = builder().build(rows);
                    black_box((aspace.lambdas().len(), gl.nnz()));
                },
                BatchSize::LargeInput,
            );
        },
    );

    for k in KS {
        group.bench_with_input(BenchmarkId::new("lambda_aware", k), k, |b, &k| {
            let mut i = 0usize;
            b.iter(|| {
                let q = &queries[i % queries.len()];
                let lambda = aspace
                    .try_prepare_query_item(q, &gl)
                    .expect("query pool rows are non-degenerate");
                let item = ArrowItem::new(q, lambda);
                i += 1;
                black_box(
                    aspace
                        .try_search_lambda_aware(black_box(&item), k, ALPHA)
                        .expect("query is prepared and non-degenerate"),
                );
            });
        });

        group.bench_with_input(BenchmarkId::new("hybrid", k), k, |b, &k| {
            let mut i = 0usize;
            b.iter(|| {
                let q = &queries[i % queries.len()];
                let lambda = aspace
                    .try_prepare_query_item(q, &gl)
                    .expect("query pool rows are non-degenerate");
                let item = ArrowItem::new(q, lambda);
                i += 1;
                black_box(aspace.search_lambda_aware_hybrid(black_box(&item), k, ALPHA));
            });
        });

        group.bench_with_input(BenchmarkId::new("linear_sorted", k), k, |b, &k| {
            let mut i = 0usize;
            b.iter(|| {
                let q = &queries[i % queries.len()];
                i += 1;
                black_box(aspace.search_linear_sorted(black_box(q), &gl, k));
            });
        });
    }

    group.bench_function("range_search", |b| {
        let mut i = 0usize;
        b.iter(|| {
            let q = &queries[i % queries.len()];
            let lambda = aspace
                .try_prepare_query_item(q, &gl)
                .expect("query pool rows are non-degenerate");
            let item = ArrowItem::new(q, lambda);
            i += 1;
            black_box(aspace.range_search(black_box(&item), &gl, RANGE_EPS));
        });
    });

    // Label kept for chart continuity; measures the fallible try_ twin
    // (panicking prepare_query_item is deprecated since arrowspace 0.27).
    group.bench_function("prepare_query_item", |b| {
        let mut i = 0usize;
        b.iter(|| {
            let q = &queries[i % queries.len()];
            i += 1;
            black_box(
                aspace
                    .try_prepare_query_item(black_box(q), &gl)
                    .expect("query pool rows are non-degenerate"),
            );
        });
    });

    group.bench_function("multiply_vector", |b| {
        b.iter(|| black_box(gl.multiply_vector(black_box(&x))));
    });

    group.bench_function("rayleigh_quotient", |b| {
        b.iter(|| black_box(gl.rayleigh_quotient(black_box(&x))));
    });

    // Both primitives overwrite their outputs in place (update_lambdas /
    // aspace.signals), so they bench on the fixed index without a
    // per-iteration rebuild.
    group.bench_function(
        BenchmarkId::new("build_spectral_laplacian", format!("{}x{}", N, D)),
        |b| {
            b.iter(|| {
                GraphFactory::build_spectral_laplacian(black_box(&mut aspace), black_box(&gl));
            });
        },
    );

    group.bench_function(
        BenchmarkId::new("taumode_lambdas_parallel", format!("{}x{}", N, D)),
        |b| {
            b.iter(|| {
                TauMode::compute_taumode_lambdas_parallel(
                    black_box(&mut aspace),
                    black_box(&gl),
                    TauMode::Median,
                );
            });
        },
    );

    group.finish();
}

criterion_group!(benches, bench_scale);
criterion_main!(benches);
