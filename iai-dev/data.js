window.BENCHMARK_DATA = {
  "lastUpdate": 1788607462598,
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
        "date": 1788267833840,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 30554726,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 376291263,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 378760521,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 376306195,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 376303110,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 378225127,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 376329341,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 376207547,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 376209032,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 30575466,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 376802373,
            "unit": "Instructions"
          }
        ]
      },
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
          "id": "ad188509a36ea182511dfd7862e8c6a05c29ed4a",
          "message": "fix(benches): migrate to try_prepare_query_item / try_search_lambda_aware twins deprecated in arrowspace 0.27",
          "timestamp": "2026-09-02T01:23:22+01:00",
          "tree_id": "a799db91722e999e9df21ccff8b0afd9944385dc",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ad188509a36ea182511dfd7862e8c6a05c29ed4a"
        },
        "date": 1788311306482,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 29998178,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 371782104,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 374263879,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 371798418,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 371795328,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 373637252,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 371788052,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 371696160,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 371696610,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 30006393,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 372286486,
            "unit": "Instructions"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "01fec2ba7a72ebf05c02b084c0b84b64726059a4",
          "message": "bench(criterion): record v0.27.0 results [skip ci]",
          "timestamp": "2026-09-02T05:28:07Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/01fec2ba7a72ebf05c02b084c0b84b64726059a4"
        },
        "date": 1788352818891,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 30534484,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 376095905,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 378593335,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 376110687,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 376143670,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 377972479,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 376135561,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 376012362,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 376012820,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 30542856,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 376609535,
            "unit": "Instructions"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "27a748421a6f902b6bab847120c6552a6b456b2d",
          "message": "bench(criterion): record v0.27.3 results [skip ci]",
          "timestamp": "2026-09-02T17:16:31Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/27a748421a6f902b6bab847120c6552a6b456b2d"
        },
        "date": 1788439007641,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 30534469,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 376014336,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 378608808,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 376137499,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 376190408,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 377976046,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 376128834,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 376044443,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 376014496,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 30542935,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 376524197,
            "unit": "Instructions"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "27a748421a6f902b6bab847120c6552a6b456b2d",
          "message": "bench(criterion): record v0.27.3 results [skip ci]",
          "timestamp": "2026-09-02T17:16:31Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/27a748421a6f902b6bab847120c6552a6b456b2d"
        },
        "date": 1788526168123,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 30534495,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 376095891,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 378568768,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 376141614,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 376107459,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 377944557,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 376102684,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 376044009,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 376048933,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 30544530,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 376605770,
            "unit": "Instructions"
          }
        ]
      },
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
          "id": "63641baeae247938667babf41b919172574139ab",
          "message": "ci: matrix adds v0.28.0 pin, drops v0.26.12; arrowspace req floored to >=0.26.14",
          "timestamp": "2026-09-04T15:45:47+01:00",
          "tree_id": "5fbb98c49dd698574dcac21dd716761d223d6718",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/63641baeae247938667babf41b919172574139ab"
        },
        "date": 1788533763485,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 9805256,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61040799,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 63591448,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61133339,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 61168648,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 62949362,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61102990,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61037997,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61036048,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 9811624,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 61552994,
            "unit": "Instructions"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "0dd514dfd9bb14003f4c27f26b0b0cc98d00562c",
          "message": "bench(criterion): record v0.28.0 results [skip ci]",
          "timestamp": "2026-09-04T18:04:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/0dd514dfd9bb14003f4c27f26b0b0cc98d00562c"
        },
        "date": 1788607461766,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 9820198,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61041113,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 63591984,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61136024,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 61168648,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 62968145,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61124523,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61040800,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61038518,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 9813312,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 61584299,
            "unit": "Instructions"
          }
        ]
      }
    ]
  }
}