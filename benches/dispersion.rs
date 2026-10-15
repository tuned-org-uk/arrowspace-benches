use arrowspace::builder::ArrowSpaceBuilder;
use arrowspace::core::ArrowSpace;
use arrowspace::graph::GraphLaplacian;
use arrowspace::search::taumode::{TauMode, TauMode as TM};
use criterion::{BenchmarkId, Criterion, criterion_group, criterion_main};
use rand::prelude::*;
use rand_chacha::ChaCha8Rng;
use sprs::CsMat;
use std::hint::black_box;

mod common;
use common::{SEED, clustered_rows};

const N: usize = 300;
const F: usize = 384;
const TAU: f64 = 0.5;

fn build_pair() -> (ArrowSpace, GraphLaplacian) {
    let rows = clustered_rows(N, F, 8);
    // eps=1.5 keeps this distribution's feature graph non-empty (eps trap);
    // topk=15 mirrors the CVE graph parameters (~16 nnz per feature row).
    ArrowSpaceBuilder::new()
        .with_lambda_graph(1.5, 25, 15, 2.0, None)
        .with_seed(SEED)
        .build(rows)
}

fn bench_dispersion(c: &mut Criterion) {
    let (_aspace, gl) = build_pair();
    let item: Vec<f64> = {
        let mut rng = ChaCha8Rng::seed_from_u64(SEED + 2);
        (0..F).map(|_| rng.random::<f64>()).collect()
    };

    // The A/B lives inside one binary: the library's canonical-CSR path is
    // the #200 fast path, the CSC input routes to the dense per-pair
    // lookup fallback — which is the pre-#200 implementation kept verbatim.
    // Same arithmetic, same results; only entry reachability differs.
    let csr: &CsMat<f64> = &gl.matrix;
    let csc = csr.to_csc();

    let a = TM::compute_synthetic_lambda(&item, None, csr, TAU);
    let b = TM::compute_synthetic_lambda(&item, None, &csc, TAU);
    assert_eq!(a.to_bits(), b.to_bits(), "CSR and CSC lambda bits diverge");
    assert!(
        a > 0.0,
        "empty/edgeless graph: lambda={a} — check the eps trap"
    );

    let mut group = c.benchmark_group("dispersion");
    group.bench_with_input(
        BenchmarkId::new("compute_synthetic_lambda", "sparse_csr_path"),
        csr,
        |b, graph| {
            b.iter(|| {
                black_box(TM::compute_synthetic_lambda(
                    black_box(&item),
                    None,
                    black_box(graph),
                    TAU,
                ))
            })
        },
    );
    group.bench_with_input(
        BenchmarkId::new("compute_synthetic_lambda", "dense_lookup_path"),
        &csc,
        |b, graph| {
            b.iter(|| {
                black_box(TM::compute_synthetic_lambda(
                    black_box(&item),
                    None,
                    black_box(graph),
                    TAU,
                ))
            })
        },
    );
    group.finish();

    let (mut aspace2, gl2) = build_pair();
    c.bench_function("taumode_readout/300x384_topk15", |b| {
        b.iter(|| {
            TM::compute_taumode_lambdas_parallel(
                black_box(&mut aspace2),
                black_box(&gl2),
                black_box(TauMode::Median),
            );
            black_box(&aspace2.lambdas());
        })
    });
}

criterion_group!(benches, bench_dispersion);
criterion_main!(benches);
