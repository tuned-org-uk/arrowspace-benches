#![allow(dead_code)]

use rand::prelude::*;
use rand_chacha::ChaCha8Rng;

/// Deterministic seed for every dataset this harness generates.
/// Change it and every recorded baseline breaks.
pub const SEED: u64 = 3407;

/// `n` rows of `d` features in [0, 1], drawn around `clusters` random
/// centroids with uniform jitter. Clustered data keeps the kNN graph
/// connected and the per-item lambdas non-degenerate — pure uniform
/// noise can produce an empty neighbourhood graph at small eps.
pub fn clustered_rows(n: usize, d: usize, clusters: usize) -> Vec<Vec<f64>> {
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
