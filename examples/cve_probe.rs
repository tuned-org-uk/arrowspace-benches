//! CVE-search sanity probe: mimics the pyarrowspace CVE-search benchmark
//! corpus (CVE records 2018-2025 embedded with an all-MiniLM-L6-v2
//! fine-tune, 384 features) at 300_000 items, using the graph parameters
//! from `pyarrowspace/tests/test_8_CVE_db_sweep.py`
//! (eps=1.31, k=25, topk=15, p=2.0, sigma=0.535).
//!
//! Run this before trusting any `cve` benchmark result:
//!
//! ```text
//! cargo run --release --example cve_probe
//! ```

use arrowspace::builder::ArrowSpaceBuilder;
use rand::prelude::*;
use rand_chacha::ChaCha8Rng;
use std::time::Instant;

const SEED: u64 = 3407;
const N: usize = 300_000;
const D: usize = 384;
const CLUSTERS: usize = 128;

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

fn report(tag: &str, b: ArrowSpaceBuilder) {
    let rows = clustered_rows(N, D, CLUSTERS);
    let start = Instant::now();
    let (aspace, gl) = b.with_seed(SEED).build(rows);
    let build = start.elapsed();
    let lams = aspace.lambdas();
    let zeros = lams.iter().filter(|&&l| l.abs() < 1e-12).count();
    println!(
        "{tag:>28} | shape={:?} nnz={:<7} zeros={zeros}/{len} build={build:?}",
        gl.shape(),
        gl.nnz(),
        len = lams.len()
    );
}

fn main() {
    report(
        &format!("eps=1.31 k=25 {N}x{D}"),
        ArrowSpaceBuilder::new().with_lambda_graph(1.31, 25, 15, 2.0, Some(0.535)),
    );
}
