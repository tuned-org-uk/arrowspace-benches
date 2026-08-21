//! Scale sanity probe: one ArrowSpace build at production size
//! (80_000x64) plus graph health stats and wall-clock build time.
//!
//! The default `eps=1.0` leaves uniform-ish data with an empty feature
//! graph (nnz == dim, all lambdas 0.0) — an index that builds but cannot
//! search. Run this before trusting any `scale` benchmark result:
//!
//! ```text
//! cargo run --release --example scale_probe
//! ```

use arrowspace::builder::ArrowSpaceBuilder;
use rand::prelude::*;
use rand_chacha::ChaCha8Rng;
use std::time::Instant;

const SEED: u64 = 3407;
const N: usize = 80_000;
const D: usize = 64;

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

fn main() {
    let rows = clustered_rows(N, D, 8);
    let start = Instant::now();
    let (aspace, gl) = ArrowSpaceBuilder::new()
        .with_lambda_graph(1.5, 6, 3, 2.0, None)
        .with_seed(SEED)
        .build(rows);
    let build = start.elapsed();
    let lams = aspace.lambdas();
    let zeros = lams.iter().filter(|&&l| l.abs() < 1e-12).count();
    println!(
        "{:>28} | shape={:?} nnz={:<7} zeros={zeros}/{len} build={build:?}",
        format!("eps=1.5 {N}x{D}"),
        gl.shape(),
        gl.nnz(),
        len = lams.len()
    );
}
