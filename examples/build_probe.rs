//! Build-time probe: repeated ArrowSpace builds at one size with
//! graph-health stats and per-run wall-clock times. Fills the gap between
//! the `scale` (80kx64) and `cve` (300kx384) benches, which have no
//! recorded baseline at 10_500x384.
//!
//! ```text
//! cargo run --release --example build_probe -- [n] [d] [runs]
//! ```

use arrowspace::builder::ArrowSpaceBuilder;
use rand::prelude::*;
use rand_chacha::ChaCha8Rng;
use std::time::Instant;

const SEED: u64 = 3407;
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

fn stats(times: &[f64]) -> (f64, f64, f64, f64) {
    let n = times.len() as f64;
    let mean = times.iter().sum::<f64>() / n;
    let var = times.iter().map(|t| (t - mean).powi(2)).sum::<f64>() / n;
    let mut sorted = times.to_vec();
    sorted.sort_by(|a, b| a.total_cmp(b));
    let median = sorted[sorted.len() / 2];
    (mean, var.sqrt(), sorted[0], median)
}

fn run_config(tag: &str, rows: &[Vec<f64>], runs: usize, make_builder: fn() -> ArrowSpaceBuilder) {
    let mut times = Vec::with_capacity(runs);
    let mut health = (0usize, 0usize);
    for i in 0..runs {
        let input = rows.to_vec();
        let start = Instant::now();
        let (aspace, gl) = make_builder().with_seed(SEED).build(input);
        times.push(start.elapsed().as_secs_f64());
        let lams = aspace.lambdas();
        health = (gl.nnz(), lams.iter().filter(|&&l| l.abs() < 1e-12).count());
        println!("{tag:>34} | run {i:>2}: {:>8.3}s", times[i]);
    }
    let lams_len = rows.len();
    let (mean, std, min, median) = stats(&times);
    println!(
        "{tag:>34} | shape=({n}, {d}) nnz={nnz} zeros={zeros}/{len}",
        n = rows.len(),
        d = rows[0].len(),
        nnz = health.0,
        zeros = health.1,
        len = lams_len,
    );
    println!(
        "{tag:>34} | mean={mean:.3}s std={std:.3}s min={min:.3}s median={median:.3}s over {runs} runs",
    );
}

fn main() {
    let mut args = std::env::args().skip(1);
    let n: usize = args.next().and_then(|a| a.parse().ok()).unwrap_or(10_500);
    let d: usize = args.next().and_then(|a| a.parse().ok()).unwrap_or(384);
    let runs: usize = args.next().and_then(|a| a.parse().ok()).unwrap_or(6);

    let rows = clustered_rows(n, d, CLUSTERS);
    println!("build probe: n={n} d={d} clusters={CLUSTERS} seed={SEED} runs={runs} (cold first)");

    run_config("eps=1.5 k=6 topk=3", &rows, runs, || {
        ArrowSpaceBuilder::new().with_lambda_graph(1.5, 6, 3, 2.0, None)
    });
    run_config("eps=1.31 k=25 topk=15 sig=0.535", &rows, runs, || {
        ArrowSpaceBuilder::new().with_lambda_graph(1.31, 25, 15, 2.0, Some(0.535))
    });
}
