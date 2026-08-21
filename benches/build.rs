use arrowspace::builder::ArrowSpaceBuilder;
use criterion::{BatchSize, BenchmarkId, Criterion, criterion_group, criterion_main};
use std::hint::black_box;

mod common;
use common::clustered_rows;

const GRIDS: &[(usize, usize)] = &[(200, 16), (200, 64), (500, 16), (500, 64)];

/// Default eps=1.0 leaves this data distribution with an empty feature
/// graph (nnz == dim, all lambdas degenerate); eps=1.5 yields a connected
/// graph and non-degenerate lambdas.
fn builder() -> ArrowSpaceBuilder {
    ArrowSpaceBuilder::new()
        .with_lambda_graph(1.5, 6, 3, 2.0, None)
        .with_seed(common::SEED)
}

fn bench_build(c: &mut Criterion) {
    let mut group = c.benchmark_group("build");
    for &(n, d) in GRIDS {
        let rows = clustered_rows(n, d, 8);
        group.bench_with_input(
            BenchmarkId::new("builder", format!("{}x{}", n, d)),
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
    }
    group.finish();
}

criterion_group!(benches, bench_build);
criterion_main!(benches);
