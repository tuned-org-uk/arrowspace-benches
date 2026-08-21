//! Graph sanity probe: builds an ArrowSpace index on synthetic clustered
//! data and reports whether the feature graph is connected and the
//! per-item lambdas non-degenerate.
//!
//! The default `eps=1.0` leaves uniform-ish data with an empty feature
//! graph (nnz == dim, all lambdas 0.0) — an index that builds but cannot
//! search. Run this before trusting any benchmark or application result
//! on a new data distribution:
//!
//! ```text
//! cargo run --release --example graph_sanity
//! ```

use arrowspace::builder::ArrowSpaceBuilder;
use rand::prelude::*;
use rand_chacha::ChaCha8Rng;

const SEED: u64 = 3407;

fn clustered_rows(n: usize, d: usize, clusters: usize) -> Vec<Vec<f64>> {
    let mut rng = ChaCha8Rng::seed_from_u64(SEED);
    let centers: Vec<Vec<f64>> = (0..clusters)
        .map(|_| (0..d).map(|_| rng.random::<f64>()).collect())
        .collect();
    (0..n)
        .map(|_| {
            let c = &centers[rng.random_range(0..clusters)];
            c.iter()
                .map(|&x| (x + (rng.random::<f64>() - 0.5) * 0.1).clamp(0.0, 1.0))
                .collect()
        })
        .collect()
}

fn report(tag: &str, n: usize, d: usize, b: ArrowSpaceBuilder) {
    let rows = clustered_rows(n, d, 8);
    let (aspace, gl) = b.with_seed(SEED).build(rows);
    let lams = aspace.lambdas();
    let zeros = lams.iter().filter(|&&l| l.abs() < 1e-12).count();
    println!(
        "{tag:>28} | shape={:?} nnz={:<5} zeros={zeros}/{len}",
        gl.shape(),
        gl.nnz(),
        len = lams.len()
    );
}

fn main() {
    for (n, d) in [(200usize, 16usize), (500, 64)] {
        report(&format!("default {n}x{d}"), n, d, ArrowSpaceBuilder::new());
        report(
            &format!("eps=1.5 {n}x{d}"),
            n,
            d,
            ArrowSpaceBuilder::new().with_lambda_graph(1.5, 6, 3, 2.0, None),
        );
        report(
            &format!("eps=2.0 k=10 {n}x{d}"),
            n,
            d,
            ArrowSpaceBuilder::new().with_lambda_graph(2.0, 10, 3, 2.0, None),
        );
    }
}
