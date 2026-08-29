window.BENCHMARK_DATA = {
  "lastUpdate": 1787964731659,
  "repoUrl": "https://github.com/tuned-org-uk/arrowspace-benches",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tunedconsulting@gmail.com",
            "name": "Lorenzo (Mec-iS)",
            "username": "Mec-iS"
          },
          "committer": {
            "email": "tunedconsulting@gmail.com",
            "name": "Lorenzo (Mec-iS)",
            "username": "Mec-iS"
          },
          "distinct": true,
          "id": "0d1d770626eff8b1e6cfa2233b410be498df5cc3",
          "message": "ci(iai): add deterministic iai-callgrind instruction-count gate\n\nMirror the smartcore-benches iai setup: Linux-only iai-callgrind benches\ncovering the build/search/spectral hot paths at the small end of the\ncriterion grid, an iai CI job (valgrind + runner install, NDJSON -> JSON\nconversion via scripts/iai_to_benchmark_action.py, customSmallerIsBetter\nchart, 120% fail-on-alert gate posting a status check back to\narrowspace-rs), and AGENTS.md docs for the runner binary and NDJSON\nsemantics.\n\nCriterion wall-clock is noisy on shared runners (20-60% variance); the\ndeterministic instruction-count gate is the regression signal that can\nfail a merge.",
          "timestamp": "2026-08-29T01:01:55+01:00",
          "tree_id": "b74cefcca44b3fc79b549c8a7cd49b16ae12b51d",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/0d1d770626eff8b1e6cfa2233b410be498df5cc3"
        },
        "date": 1787964730690,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 30555851,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 376326960,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 378791222,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 376306802,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 376299366,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 378294377,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 376360540,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 376207723,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 376241110,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 30564238,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 376748924,
            "unit": "Instructions"
          }
        ]
      }
    ]
  }
}