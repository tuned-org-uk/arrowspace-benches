use arrowspace::builder::ArrowSpaceBuilder;
use arrowspace::clustering::ClusteringHeuristic;
use criterion::{BenchmarkId, Criterion, criterion_group, criterion_main};
use rand::prelude::*;
use rayon::prelude::*;
use smartcore::linalg::basic::arrays::Array2;
use smartcore::linalg::basic::matrix::DenseMatrix;
use std::hint::black_box;
use std::time::Duration;

mod common;
use common::SEED;

const F: usize = 384;
const N_CVE: usize = 335_462;

/// The baseline is a verbatim copy of the sort-based Two-NN selection that
/// arrowspace-rs removed in #199 (per-sample distance vector + full sort,
/// Rayon across samples). It exists here only as the comparison reference;
/// the candidate side must call the real library method so the bench tracks
/// shipped code, not a copy of it.
fn baseline_sort_reference(rows: &DenseMatrix<f64>, n: usize, f: usize, base_seed: u64) -> usize {
    if n < 10 {
        return f.min(2);
    }
    let sample_size = n.min(500);
    let mut rng = StdRng::seed_from_u64(base_seed.wrapping_add(1));
    let mut indices: Vec<usize> = (0..n).collect();
    indices.shuffle(&mut rng);
    let sample_indices = &indices[..sample_size];

    let ratios: Vec<f64> = sample_indices
        .par_iter()
        .filter_map(|&i| {
            let row_i = rows.get_row(i);
            let mut dists: Vec<(usize, f64)> = (0..n)
                .filter(|&j| j != i)
                .map(|j| {
                    let d2: f64 = row_i
                        .iterator(0)
                        .zip(rows.get_row(j).iterator(0))
                        .map(|(a, b)| (*a - *b).powi(2))
                        .sum();
                    (j, d2.sqrt())
                })
                .collect();
            dists.sort_by(|a, b| a.1.partial_cmp(&b.1).unwrap());
            if dists.len() >= 2 {
                let d1 = dists[0].1;
                let d2 = dists[1].1;
                if d1 > 1e-12 {
                    return Some(d2 / d1);
                }
            }
            None
        })
        .collect();

    if ratios.is_empty() {
        return f.min(3);
    }
    let mean_ratio: f64 = ratios.iter().sum::<f64>() / ratios.len() as f64;
    let id = if mean_ratio > 1.001 {
        1.0 / mean_ratio.ln()
    } else {
        f as f64
    };
    (id.round() as usize).clamp(1, f)
}

/// Flat single-allocation fixture: from_2d_vec would hold the row vectors
/// and the matrix simultaneously (~2 GB at CVE scale); DenseMatrix::new
/// moves the buffer in without a copy.
fn uniform_fixture(n: usize) -> DenseMatrix<f64> {
    let mut rng = StdRng::seed_from_u64(SEED);
    let flat: Vec<f64> = (0..n * F).map(|_| rng.random_range(-1.0..1.0)).collect();
    DenseMatrix::new(n, F, flat, true).unwrap()
}

fn bench_twonn(c: &mut Criterion) {
    let builder = ArrowSpaceBuilder::new();

    for &(label, n, samples) in &[
        ("n2000", 2_000usize, 30usize),
        ("n16000", 16_000, 30),
        ("n335k", N_CVE, 10),
    ] {
        let dm = uniform_fixture(n);

        // Both selection strategies must produce the identical estimate on
        // every fixture; a timing comparison of unequal results is void.
        assert_eq!(
            builder.estimate_intrinsic_dimension(&dm, n, F, SEED),
            baseline_sort_reference(&dm, n, F, SEED),
            "fixture {label}: estimate and sort-based reference diverge"
        );

        let mut group = c.benchmark_group(format!("twonn_selection/{label}"));
        if samples < 30 {
            group.sample_size(samples);
            group.warm_up_time(Duration::from_secs(1));
            group.measurement_time(Duration::from_secs(120));
        }

        group.bench_with_input(
            BenchmarkId::new("estimate_intrinsic_dimension", "baseline_sort"),
            &dm,
            |b, dm| {
                b.iter(|| black_box(baseline_sort_reference(black_box(dm), n, F, SEED)));
            },
        );
        group.bench_with_input(
            BenchmarkId::new("estimate_intrinsic_dimension", "library"),
            &dm,
            |b, dm| {
                b.iter(|| {
                    black_box(black_box(&builder).estimate_intrinsic_dimension(
                        black_box(dm),
                        n,
                        F,
                        SEED,
                    ))
                })
            },
        );

        group.finish();
    }
}

criterion_group!(benches, bench_twonn);
criterion_main!(benches);
