// Deterministic instruction-count benchmark for `ArrowSpaceBuilder::build`.
// Linux-only (requires Valgrind). The criterion analogue is `benches/build.rs`.
// Two grid corners are used: iai runs each input once under Valgrind (slow),
// and instruction counts are machine-independent, so the small grid still
// catches a regression that would scale to the full criterion grid.
#[cfg(target_os = "linux")]
use arrowspace::builder::ArrowSpaceBuilder;
#[cfg(target_os = "linux")]
use iai_callgrind::{library_benchmark, library_benchmark_group, main};
#[cfg(target_os = "linux")]
mod common;
#[cfg(target_os = "linux")]
use common::clustered_rows;

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
#[library_benchmark]
fn bench_build_200_x_16() {
    let rows = clustered_rows(200, 16, 8);
    let (aspace, gl) = builder().build(rows);
    std::hint::black_box((aspace.lambdas().len(), gl.nnz()));
}

#[cfg(target_os = "linux")]
#[library_benchmark]
fn bench_build_500_x_64() {
    let rows = clustered_rows(500, 64, 8);
    let (aspace, gl) = builder().build(rows);
    std::hint::black_box((aspace.lambdas().len(), gl.nnz()));
}

#[cfg(target_os = "linux")]
library_benchmark_group!(
    name = build;
    benchmarks = bench_build_200_x_16, bench_build_500_x_64
);

#[cfg(target_os = "linux")]
main!(library_benchmark_groups = build);

#[cfg(not(target_os = "linux"))]
fn main() {
    eprintln!("iai-callgrind benches are Linux-only (Valgrind). Skipping on this platform.");
}
