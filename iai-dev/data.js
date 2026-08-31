window.BENCHMARK_DATA = {
  "lastUpdate": 1788190775611,
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
      },
      {
        "commit": {
          "author": {
            "name": "Lorenzo (Mec-iS)",
            "username": "Mec-iS",
            "email": "tunedconsulting@gmail.com"
          },
          "committer": {
            "name": "Lorenzo (Mec-iS)",
            "username": "Mec-iS",
            "email": "tunedconsulting@gmail.com"
          },
          "id": "0d1d770626eff8b1e6cfa2233b410be498df5cc3",
          "message": "ci(iai): add deterministic iai-callgrind instruction-count gate\n\nMirror the smartcore-benches iai setup: Linux-only iai-callgrind benches\ncovering the build/search/spectral hot paths at the small end of the\ncriterion grid, an iai CI job (valgrind + runner install, NDJSON -> JSON\nconversion via scripts/iai_to_benchmark_action.py, customSmallerIsBetter\nchart, 120% fail-on-alert gate posting a status check back to\narrowspace-rs), and AGENTS.md docs for the runner binary and NDJSON\nsemantics.\n\nCriterion wall-clock is noisy on shared runners (20-60% variance); the\ndeterministic instruction-count gate is the regression signal that can\nfail a merge.",
          "timestamp": "2026-08-29T00:00:47Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/0d1d770626eff8b1e6cfa2233b410be498df5cc3"
        },
        "date": 1788011343179,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 30566947,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 376240798,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 378764055,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 376305726,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 376299585,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 378220481,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 376297337,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 376207758,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 376208007,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 30564033,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 376749792,
            "unit": "Instructions"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lorenzo (Mec-iS)",
            "username": "Mec-iS",
            "email": "tunedconsulting@gmail.com"
          },
          "committer": {
            "name": "Lorenzo (Mec-iS)",
            "username": "Mec-iS",
            "email": "tunedconsulting@gmail.com"
          },
          "id": "0d1d770626eff8b1e6cfa2233b410be498df5cc3",
          "message": "ci(iai): add deterministic iai-callgrind instruction-count gate\n\nMirror the smartcore-benches iai setup: Linux-only iai-callgrind benches\ncovering the build/search/spectral hot paths at the small end of the\ncriterion grid, an iai CI job (valgrind + runner install, NDJSON -> JSON\nconversion via scripts/iai_to_benchmark_action.py, customSmallerIsBetter\nchart, 120% fail-on-alert gate posting a status check back to\narrowspace-rs), and AGENTS.md docs for the runner binary and NDJSON\nsemantics.\n\nCriterion wall-clock is noisy on shared runners (20-60% variance); the\ndeterministic instruction-count gate is the regression signal that can\nfail a merge.",
          "timestamp": "2026-08-29T00:00:47Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/0d1d770626eff8b1e6cfa2233b410be498df5cc3"
        },
        "date": 1788095652367,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 30568798,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 376291331,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 378768767,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 376337297,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 376299504,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 378220451,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 376361167,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 376208582,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 376238522,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 30562360,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 376722370,
            "unit": "Instructions"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lorenzo (Mec-iS)",
            "username": "Mec-iS",
            "email": "tunedconsulting@gmail.com"
          },
          "committer": {
            "name": "Lorenzo (Mec-iS)",
            "username": "Mec-iS",
            "email": "tunedconsulting@gmail.com"
          },
          "id": "0d1d770626eff8b1e6cfa2233b410be498df5cc3",
          "message": "ci(iai): add deterministic iai-callgrind instruction-count gate\n\nMirror the smartcore-benches iai setup: Linux-only iai-callgrind benches\ncovering the build/search/spectral hot paths at the small end of the\ncriterion grid, an iai CI job (valgrind + runner install, NDJSON -> JSON\nconversion via scripts/iai_to_benchmark_action.py, customSmallerIsBetter\nchart, 120% fail-on-alert gate posting a status check back to\narrowspace-rs), and AGENTS.md docs for the runner binary and NDJSON\nsemantics.\n\nCriterion wall-clock is noisy on shared runners (20-60% variance); the\ndeterministic instruction-count gate is the regression signal that can\nfail a merge.",
          "timestamp": "2026-08-29T00:00:47Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/0d1d770626eff8b1e6cfa2233b410be498df5cc3"
        },
        "date": 1788190775074,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 30567016,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 376210202,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 378759783,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 376306335,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 376391734,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 378182024,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 376332008,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 376204385,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 376212908,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 30564033,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 376725253,
            "unit": "Instructions"
          }
        ]
      }
    ]
  }
}