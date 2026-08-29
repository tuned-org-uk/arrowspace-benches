// Deterministic instruction-count benchmark for the spectral primitives.
// Linux-only (requires Valgrind). The criterion analogue is
// `benches/spectral.rs`. Laplacian construction runs inside each measured
// function (iai has no per-bench setup exclusion), so counts track build +
// primitive; the `iai_build` bench isolates the build half.
#[cfg(target_os = "linux")]
use arrowspace::builder::ArrowSpaceBuilder;
#[cfg(target_os = "linux")]
use arrowspace::core::ArrowSpace;
#[cfg(target_os = "linux")]
use arrowspace::graph::{GraphFactory, GraphLaplacian};
#[cfg(target_os = "linux")]
use arrowspace::search::taumode::TauMode;
#[cfg(target_os = "linux")]
use iai_callgrind::{library_benchmark, library_benchmark_group, main};
#[cfg(target_os = "linux")]
mod common;
#[cfg(target_os = "linux")]
use common::{SEED, clustered_rows};
#[cfg(target_os = "linux")]
use rand::prelude::*;
#[cfg(target_os = "linux")]
use rand_chacha::ChaCha8Rng;

#[cfg(target_os = "linux")]
const N: usize = 500;
#[cfg(target_os = "linux")]
const D: usize = 64;

#[cfg(target_os = "linux")]
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

#[cfg(target_os = "linux")]
fn probe_vector(d: usize) -> Vec<f64> {
    let mut rng = ChaCha8Rng::seed_from_u64(SEED + 2);
    (0..d).map(|_| rng.random::<f64>()).collect()
}

#[cfg(target_os = "linux")]
#[library_benchmark]
fn bench_spectral_multiply_vector() {
    let (_aspace, gl) = build_pair(N, D);
    let x = probe_vector(gl.shape().1);
    let y = gl.multiply_vector(&x);
    std::hint::black_box(y.len());
}

#[cfg(target_os = "linux")]
#[library_benchmark]
fn bench_spectral_rayleigh_quotient() {
    let (_aspace, gl) = build_pair(N, D);
    let x = probe_vector(gl.shape().1);
    std::hint::black_box(gl.rayleigh_quotient(&x));
}

#[cfg(target_os = "linux")]
#[library_benchmark]
fn bench_spectral_taumode_200_x_16() {
    let (mut aspace, gl) = build_pair(200, 16);
    TauMode::compute_taumode_lambdas_parallel(&mut aspace, &gl, TauMode::Median);
    std::hint::black_box(aspace.lambdas().len());
}

#[cfg(target_os = "linux")]
#[library_benchmark]
fn bench_spectral_build_laplacian_500_x_64() {
    let (mut aspace, gl) = build_pair(N, D);
    GraphFactory::build_spectral_laplacian(&mut aspace, &gl);
    std::hint::black_box(gl.nnz());
}

#[cfg(target_os = "linux")]
library_benchmark_group!(
    name = spectral;
    benchmarks =
        bench_spectral_multiply_vector,
        bench_spectral_rayleigh_quotient,
        bench_spectral_taumode_200_x_16,
        bench_spectral_build_laplacian_500_x_64
);

#[cfg(target_os = "linux")]
main!(library_benchmark_groups = spectral);

#[cfg(not(target_os = "linux"))]
fn main() {
    eprintln!("iai-callgrind benches are Linux-only (Valgrind). Skipping on this platform.");
}
