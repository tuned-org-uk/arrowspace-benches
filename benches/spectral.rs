use arrowspace::builder::ArrowSpaceBuilder;
use arrowspace::core::ArrowSpace;
use arrowspace::graph::{GraphFactory, GraphLaplacian};
use arrowspace::search::taumode::TauMode;
use criterion::{BatchSize, BenchmarkId, Criterion, criterion_group, criterion_main};
use rand::prelude::*;
use rand_chacha::ChaCha8Rng;
use std::hint::black_box;

mod common;
use common::{SEED, clustered_rows};

const N: usize = 500;
const D: usize = 64;

fn build_pair(n: usize, d: usize) -> (ArrowSpace, GraphLaplacian) {
    let rows = clustered_rows(n, d, 8);
    // Default eps=1.0 leaves this data distribution with an empty feature
    // graph (nnz == dim, all lambdas degenerate); eps=1.5 yields a
    // connected graph and non-degenerate lambdas.
    ArrowSpaceBuilder::new()
        .with_lambda_graph(1.5, 6, 3, 2.0, None)
        .with_seed(SEED)
        .build(rows)
}

fn probe_vector(d: usize) -> Vec<f64> {
    let mut rng = ChaCha8Rng::seed_from_u64(SEED + 2);
    (0..d).map(|_| rng.random::<f64>()).collect()
}

fn bench_spectral(c: &mut Criterion) {
    let (_aspace, gl) = build_pair(N, D);
    let x = probe_vector(gl.shape().1);

    let mut group = c.benchmark_group("spectral");

    group.bench_function("multiply_vector", |b| {
        b.iter(|| black_box(gl.multiply_vector(black_box(&x))));
    });

    group.bench_function("rayleigh_quotient", |b| {
        b.iter(|| black_box(gl.rayleigh_quotient(black_box(&x))));
    });

    for &(n, d) in &[(200usize, 16usize), (N, D)] {
        group.bench_with_input(
            BenchmarkId::new("taumode_lambdas_parallel", format!("{}x{}", n, d)),
            &(n, d),
            |b, &(n, d)| {
                b.iter_batched(
                    || build_pair(n, d),
                    |(mut aspace, gl)| {
                        TauMode::compute_taumode_lambdas_parallel(
                            black_box(&mut aspace),
                            black_box(&gl),
                            TauMode::Median,
                        );
                        black_box(aspace.lambdas().len());
                    },
                    BatchSize::LargeInput,
                );
            },
        );
    }

    group.bench_function("build_spectral_laplacian", |b| {
        b.iter_batched(
            || build_pair(N, D),
            |(mut aspace, gl)| {
                GraphFactory::build_spectral_laplacian(black_box(&mut aspace), black_box(&gl));
            },
            BatchSize::LargeInput,
        );
    });

    group.finish();
}

criterion_group!(benches, bench_spectral);
criterion_main!(benches);
