window.BENCHMARK_DATA = {
  "lastUpdate": 1792843355093,
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
        "date": 1788695119347,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 9805465,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61041053,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 63588118,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61136034,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 61163769,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 62967861,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61103048,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61038091,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61014293,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 9811653,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 61531836,
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
        "date": 1788787992615,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10274247,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61872226,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64448923,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61996440,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 61996501,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63829250,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61987398,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61903152,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61902223,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10280470,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62421596,
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1788869650886,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10274291,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61876421,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64427369,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 62023572,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 62057633,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63827764,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61958219,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61868909,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61863504,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10267617,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62444650,
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1788956646395,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10274291,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61900932,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64452307,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61961236,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 62057633,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63856748,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61987571,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61894404,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61898511,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10280530,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62416397,
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789042710504,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10274273,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61901311,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64452329,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61996320,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 62052274,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63828294,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61992484,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61898169,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61926467,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10280522,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62382123,
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789129020248,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10261067,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61876306,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64482317,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61999717,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 62023531,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63826487,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61987398,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61897934,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61864140,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10270634,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62416081,
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789213375313,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10274273,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61901723,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64452156,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61996232,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 62052678,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63827416,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61992484,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61873881,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61903602,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10280478,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62421501,
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789303537346,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10274498,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61901913,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64453823,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61961592,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 61965079,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63827764,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61992484,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61894044,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61875812,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10267617,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62416232,
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789394186972,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10262945,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61904980,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64453823,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61996248,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 62025729,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63824078,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61992484,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61898117,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61898244,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10267617,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62416029,
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789476189054,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10264392,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61901311,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64417633,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61961684,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 62052373,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63820384,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61987549,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61863241,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61898567,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10267256,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62416232,
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789562442896,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10264392,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61901122,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64417633,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61961314,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 62057633,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63828111,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61987549,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61873881,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61863504,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10267617,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62417120,
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789648804816,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10274267,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61876357,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64417920,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 62001294,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 61964324,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63799105,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61987610,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61863057,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61902220,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10280417,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62387646,
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789733960815,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10274294,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61901340,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64452116,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61961592,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 61991745,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63827767,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61991055,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61895007,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61898787,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10280357,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62416488,
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789819127679,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10261409,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61901314,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64480094,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61995890,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 62023534,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63820677,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61952878,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61897224,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61903605,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10267620,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62392493,
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789906668660,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10261455,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61901376,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64447488,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61996144,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 61972098,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63827597,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61988743,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61898111,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61898720,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10280389,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62392855,
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789999021392,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10261443,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61901252,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64423007,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 62001309,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 62023663,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63827758,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61987579,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61874038,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61898674,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10265665,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62419047,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790080793383,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10279596,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61900345,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64452186,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61961349,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 61961090,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63827758,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61963069,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61898336,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61898786,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10267688,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62425618,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790167661801,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10274622,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61902585,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64452337,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61971771,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 62052708,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63827758,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61989095,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61873988,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61899260,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10280488,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62449397,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790254115768,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10261443,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61897418,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64427833,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61961782,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 62052708,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63827758,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61952612,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61898224,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61874488,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10267688,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62420094,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790340566820,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10267564,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61898124,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64428793,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61998278,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 62052403,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63832346,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61987454,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61899038,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61863611,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10273794,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62448521,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790425096697,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10274328,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61901063,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64452337,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61996392,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 62052708,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63832717,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61987428,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61898224,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61926522,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10270653,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62420453,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790514196760,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10274290,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61898214,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64427399,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61971303,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 62057663,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63803486,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61987428,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61898336,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61898891,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10270653,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62449650,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790608720662,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10252159,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61918859,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64442547,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61986534,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 61990294,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63819301,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61977940,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61884428,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61888954,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10273233,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62444358,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790690299110,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10263301,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61888392,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64446997,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 62013071,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 62008317,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63847103,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61977865,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61890115,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61860097,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10273745,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62439381,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790775506491,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10254128,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 61920698,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 64447633,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 61986512,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 62048024,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 63814588,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 61953484,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 61888504,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 61888954,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10260380,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 62439677,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790865034124,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10430285,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 63556706,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 66119045,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 63569775,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 63654905,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 65556546,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 63590228,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 63503260,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 63497761,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10436031,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 64061000,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790949169370,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10425068,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 63528456,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 66205809,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 63605368,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 63605257,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 65537972,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 63596505,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 63494132,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 63530843,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10424676,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 64088635,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1791030722842,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10418991,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 63506655,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 66119045,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 63605406,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 63683492,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 65563196,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 63618576,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 63467615,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 63503551,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10425357,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 64088635,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1791119801955,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10417317,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 63505603,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 66119045,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 63632916,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 63654905,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 65540759,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 63560818,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 63525452,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 63499885,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10424735,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 64066837,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1791215577323,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10418936,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 63557270,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 66158692,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 63628548,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 63605257,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 65563196,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 63596154,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 63503260,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 63503810,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10424735,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 64066424,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1791295664425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10432163,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 63528456,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 66148556,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 63627566,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 63654905,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 65564980,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 63596237,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 63525616,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 63526002,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10424735,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 64066837,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1791383281066,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10437431,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 63533597,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 66177952,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 63632504,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 63596626,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 65566498,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 63618576,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 63522002,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 63553465,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10424735,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 64055226,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1791470262598,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10428470,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 63528397,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 66177998,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 63599504,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 63684533,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 65567726,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 63618576,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 63531036,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 63526002,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10424735,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 64089447,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1791555910359,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10419086,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 63528441,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 66148542,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 63599291,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 63683492,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 65539465,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 63619829,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 63494412,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 63502635,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10424658,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 64066730,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1791639353934,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10418936,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 63505864,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 66172210,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 63605350,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 63593301,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 65563196,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 63618576,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 63525452,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 63526002,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10437837,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 64066730,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1791727231506,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10425068,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 63502100,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 66176763,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 63628251,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 63683492,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 65556546,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 63596505,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 63528470,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 63497714,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10424735,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 64066837,
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1791823650078,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10409658,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 63504146,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 66162992,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 63601538,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 63631629,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 65521372,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 63572337,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 63501360,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 63479554,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10415304,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 64063976,
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
          "id": "3ec8ef9ed2ddcadc38819e5c4b20e3922131b78f",
          "message": "bench(criterion): record v0.29.0 results [skip ci]",
          "timestamp": "2026-10-12T20:24:40Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/3ec8ef9ed2ddcadc38819e5c4b20e3922131b78f"
        },
        "date": 1791903896208,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10422348,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 63504146,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 66152742,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 63632095,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 63631629,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 65539425,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 63594565,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 63467676,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 63472482,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10414867,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 64041831,
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
          "id": "88c3a9baa0021dee92c5a0a214ae59c9d7fd869c",
          "message": "ci: add CODEOWNERS with @Mec-iS as default owner",
          "timestamp": "2026-10-14T06:28:33+01:00",
          "tree_id": "5c8aac6d36f00f5b9ebf3e08ca0911b8398d93de",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/88c3a9baa0021dee92c5a0a214ae59c9d7fd869c"
        },
        "date": 1791956490789,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10424134,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 63504146,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 66152792,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 63601231,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 63659376,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 65539425,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 63572337,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 63501360,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 63479554,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10414867,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 64041818,
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
          "id": "88c3a9baa0021dee92c5a0a214ae59c9d7fd869c",
          "message": "ci: add CODEOWNERS with @Mec-iS as default owner",
          "timestamp": "2026-10-14T05:28:33Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/88c3a9baa0021dee92c5a0a214ae59c9d7fd869c"
        },
        "date": 1791982191196,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10407882,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 63479023,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 66121039,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 63662392,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 63630509,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 65571713,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 63595086,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 63528659,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 63501746,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10424490,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 64005826,
            "unit": "Instructions"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tunedconsulting@gmail.com",
            "name": "Lorenzo",
            "username": "Mec-iS"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab8e1fa90dee365a3a3e683d2843de4bcc07fa73",
          "message": "Merge pull request #2 from tuned-org-uk/bench/199-twonn-selection\n\nbench: Two-NN selection strategies at CVE scale (arrowspace-rs #199)",
          "timestamp": "2026-10-15T01:41:00+09:00",
          "tree_id": "de4b1fed04c271428a4a832866a74d617f928344",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ab8e1fa90dee365a3a3e683d2843de4bcc07fa73"
        },
        "date": 1791996515406,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10409367,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 63506343,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 66152792,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 63601632,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 63636854,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 65512629,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 63572337,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 63478662,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 63499442,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10415165,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 64063902,
            "unit": "Instructions"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lorenzo",
            "username": "Mec-iS",
            "email": "tunedconsulting@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ab8e1fa90dee365a3a3e683d2843de4bcc07fa73",
          "message": "Merge pull request #2 from tuned-org-uk/bench/199-twonn-selection\n\nbench: Two-NN selection strategies at CVE scale (arrowspace-rs #199)",
          "timestamp": "2026-10-14T16:41:00Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ab8e1fa90dee365a3a3e683d2843de4bcc07fa73"
        },
        "date": 1792068173037,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 10422316,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 63504202,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 66163232,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 63601490,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 63630037,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 65539425,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 63595597,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 63487987,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 63479554,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 10415114,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 64041898,
            "unit": "Instructions"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tunedconsulting@gmail.com",
            "name": "Lorenzo",
            "username": "Mec-iS"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3e4ab4f0fe9df62ed277af58df123eb26c56345",
          "message": "Merge pull request #3 from tuned-org-uk/bench/v0.30.0-dispersion-gate\n\nbench: dispersion A/B + twonn in matrix, v0.30.0 leg, iai gate decoupled",
          "timestamp": "2026-10-16T02:37:00+09:00",
          "tree_id": "27553ba19e4ba32d7f6217fae20dd9b3eeffeba0",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/f3e4ab4f0fe9df62ed277af58df123eb26c56345"
        },
        "date": 1792086305345,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 9769396,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 60703040,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 63373720,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 60851945,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 60856181,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 62729939,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 60845177,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 60695575,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 60696125,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 9772450,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 61263700,
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
          "id": "fa16b862cccc7deda006a49660001c46df161740",
          "message": "bench(criterion): record v0.30.0 results [skip ci]",
          "timestamp": "2026-10-15T21:51:35Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/fa16b862cccc7deda006a49660001c46df161740"
        },
        "date": 1792153324750,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 9768821,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 60700453,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 63347325,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 60851959,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 60854167,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 62734093,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 60845165,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 60695654,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 60724847,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 9771920,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 61263721,
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
          "id": "fa16b862cccc7deda006a49660001c46df161740",
          "message": "bench(criterion): record v0.30.0 results [skip ci]",
          "timestamp": "2026-10-15T21:51:35Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/fa16b862cccc7deda006a49660001c46df161740"
        },
        "date": 1792237204401,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 9769005,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 60703136,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 63347398,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 60851933,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 60880606,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 62770617,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 60843074,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 60695619,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 60696203,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 9771904,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 61259683,
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
          "id": "fa16b862cccc7deda006a49660001c46df161740",
          "message": "bench(criterion): record v0.30.0 results [skip ci]",
          "timestamp": "2026-10-15T21:51:35Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/fa16b862cccc7deda006a49660001c46df161740"
        },
        "date": 1792325246375,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 9783430,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 60724902,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 63375874,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 60852051,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 60882014,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 62741855,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 60845139,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 60695546,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 60700453,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 9772917,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 61263893,
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
          "id": "122e1c399d7eecd18cbc984e47acd4fe425380b4",
          "message": "fix(dispersion): bound CSR/CSC lambda check at 2 ULP instead of bit equality\n\narrowspace 0.28.x orders the Rayleigh quotient's f64 addition by thread\nschedule (par_bridge + rayon grouped sums), so two back-to-back\ncompute_synthetic_lambda calls drift by ~1 ULP and the bit-equality\nassert panicked the v0.28.0 matrix leg (exit 101) after ~2h of green\nbenches. #170 determinism (0.29+) makes the calls bit-identical, so the\nbound is 0 there; a real fast-path divergence is orders of magnitude\nabove the bound, keeping the gate meaningful.",
          "timestamp": "2026-10-19T06:51:37+01:00",
          "tree_id": "4437e78e13ec870e20dab09ac80d0aa972a17b84",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/122e1c399d7eecd18cbc984e47acd4fe425380b4"
        },
        "date": 1792389621507,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 9769323,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 60698754,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 63347982,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 60852049,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 60854230,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 62729927,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 60845139,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 60695596,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 60724745,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 9772126,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 61259683,
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
          "id": "05260a1d61d9f00725940432875c1e3acdb5ef6b",
          "message": "bench(cve): gate >100s/iter cases behind CVE_HEAVY; bound criterion job at 350m\n\nThe 0.29.0 leg hit the 360-minute runner wall on 2026-10-18 after\npassing in 3h36m the day before. cve/taumode_lambdas_parallel measured\n128.9s/iter on that leg and cve/build is worse; with criterion's\n10-sample floor the three heavy cases (build, build_spectral_laplacian,\ntaumode_lambdas_parallel) add >1h per leg, so a 1.7x slow-runner day\nbreaches 6h. The runner ceiling is a hard limit — the only lever is\nnominal wall time.\n\nCVE_HEAVY=1 now rides only on the latest leg (nominal ~2.3h) and on\npinned legs when workflow_dispatch carries cve_heavy=true. Pinned legs\ndrop to ~2.2h nominal; a 1.7x slowdown lands near 3.8h. Case names and\norder are unchanged when heavy runs, so chart continuity is kept.\ntimeout-minutes: 350 contains a runaway leg with a clear failure instead\nof the runner killing the job mid-push.",
          "timestamp": "2026-10-19T07:14:50+01:00",
          "tree_id": "87f50ad230c6b506c219c1d80bfe37147a28e7d1",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/05260a1d61d9f00725940432875c1e3acdb5ef6b"
        },
        "date": 1792391197006,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 9769005,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 60698754,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 63345548,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 60882256,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 60851614,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 62765223,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 60875766,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 60693764,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 60726892,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 9771904,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 61289307,
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
          "id": "c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61",
          "message": "ci(compare): publish with gaps when a leg's artifact is missing\n\nA criterion leg that panics or slow-times-out uploads no criterion.json,\nand the old !failure() guard plus parse_bencher's hard exit made the\ncompare job fail on the missing file — so a partial leg took the\ncomparison page down with it. compare now runs on always() && !cancelled()\nand make_compare_page.py drops missing/unreadable inputs with a\n::warning:: per leg, rendering the surviving columns with gap markers\n(the render already drew those for benches missing from one column).\nExit 1 only when no input is usable at all.\n\nDrive-by: CHART_LINKS pointed at dead dev-v0.26.x chart dirs; now lists\nthe four live ones.",
          "timestamp": "2026-10-19T07:47:58+01:00",
          "tree_id": "cea27bdc3acefb73fe598929dc989354bb16f651",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61"
        },
        "date": 1792393161589,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 9769005,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 60698763,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 63347398,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 60852284,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 60854238,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 62734066,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 60846002,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 60697545,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 60698829,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 9772044,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 61258811,
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
          "id": "c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61",
          "message": "ci(compare): publish with gaps when a leg's artifact is missing\n\nA criterion leg that panics or slow-times-out uploads no criterion.json,\nand the old !failure() guard plus parse_bencher's hard exit made the\ncompare job fail on the missing file — so a partial leg took the\ncomparison page down with it. compare now runs on always() && !cancelled()\nand make_compare_page.py drops missing/unreadable inputs with a\n::warning:: per leg, rendering the surviving columns with gap markers\n(the render already drew those for benches missing from one column).\nExit 1 only when no input is usable at all.\n\nDrive-by: CHART_LINKS pointed at dead dev-v0.26.x chart dirs; now lists\nthe four live ones.",
          "timestamp": "2026-10-19T06:47:58Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61"
        },
        "date": 1792420738813,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 9769323,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 60698754,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 63382993,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 60853007,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 60883831,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 62729854,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 60875561,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 60695596,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 60726428,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 9787985,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 61263709,
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
          "id": "c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61",
          "message": "ci(compare): publish with gaps when a leg's artifact is missing\n\nA criterion leg that panics or slow-times-out uploads no criterion.json,\nand the old !failure() guard plus parse_bencher's hard exit made the\ncompare job fail on the missing file — so a partial leg took the\ncomparison page down with it. compare now runs on always() && !cancelled()\nand make_compare_page.py drops missing/unreadable inputs with a\n::warning:: per leg, rendering the surviving columns with gap markers\n(the render already drew those for benches missing from one column).\nExit 1 only when no input is usable at all.\n\nDrive-by: CHART_LINKS pointed at dead dev-v0.26.x chart dirs; now lists\nthe four live ones.",
          "timestamp": "2026-10-19T06:47:58Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61"
        },
        "date": 1792500097577,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 8386488,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 59575365,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 62033465,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 59663356,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 59665174,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 61449510,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 59696644,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 59611700,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 59612046,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 8880785,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 60128285,
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
          "id": "c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61",
          "message": "ci(compare): publish with gaps when a leg's artifact is missing\n\nA criterion leg that panics or slow-times-out uploads no criterion.json,\nand the old !failure() guard plus parse_bencher's hard exit made the\ncompare job fail on the missing file — so a partial leg took the\ncomparison page down with it. compare now runs on always() && !cancelled()\nand make_compare_page.py drops missing/unreadable inputs with a\n::warning:: per leg, rendering the surviving columns with gap markers\n(the render already drew those for benches missing from one column).\nExit 1 only when no input is usable at all.\n\nDrive-by: CHART_LINKS pointed at dead dev-v0.26.x chart dirs; now lists\nthe four live ones.",
          "timestamp": "2026-10-19T06:47:58Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61"
        },
        "date": 1792587477468,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 8364109,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 59576532,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 62032686,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 59664287,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 59665174,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 61407019,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 59657961,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 59569913,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 59610253,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 8880176,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 60166582,
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
          "id": "c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61",
          "message": "ci(compare): publish with gaps when a leg's artifact is missing\n\nA criterion leg that panics or slow-times-out uploads no criterion.json,\nand the old !failure() guard plus parse_bencher's hard exit made the\ncompare job fail on the missing file — so a partial leg took the\ncomparison page down with it. compare now runs on always() && !cancelled()\nand make_compare_page.py drops missing/unreadable inputs with a\n::warning:: per leg, rendering the surviving columns with gap markers\n(the render already drew those for benches missing from one column).\nExit 1 only when no input is usable at all.\n\nDrive-by: CHART_LINKS pointed at dead dev-v0.26.x chart dirs; now lists\nthe four live ones.",
          "timestamp": "2026-10-19T06:47:58Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61"
        },
        "date": 1792673998975,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 8386957,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 59576197,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 62032436,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 59703377,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 59665174,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 61447879,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 59657305,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 59611602,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 59571069,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 8903294,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 60125838,
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
          "id": "c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61",
          "message": "ci(compare): publish with gaps when a leg's artifact is missing\n\nA criterion leg that panics or slow-times-out uploads no criterion.json,\nand the old !failure() guard plus parse_bencher's hard exit made the\ncompare job fail on the missing file — so a partial leg took the\ncomparison page down with it. compare now runs on always() && !cancelled()\nand make_compare_page.py drops missing/unreadable inputs with a\n::warning:: per leg, rendering the surviving columns with gap markers\n(the render already drew those for benches missing from one column).\nExit 1 only when no input is usable at all.\n\nDrive-by: CHART_LINKS pointed at dead dev-v0.26.x chart dirs; now lists\nthe four live ones.",
          "timestamp": "2026-10-19T06:47:58Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61"
        },
        "date": 1792758909167,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 8364472,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 59618081,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 61990338,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 59704042,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 59706218,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 61448466,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 59655912,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 59569966,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 59612152,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 8902738,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 60166668,
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
          "id": "c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61",
          "message": "ci(compare): publish with gaps when a leg's artifact is missing\n\nA criterion leg that panics or slow-times-out uploads no criterion.json,\nand the old !failure() guard plus parse_bencher's hard exit made the\ncompare job fail on the missing file — so a partial leg took the\ncomparison page down with it. compare now runs on always() && !cancelled()\nand make_compare_page.py drops missing/unreadable inputs with a\n::warning:: per leg, rendering the surviving columns with gap markers\n(the render already drew those for benches missing from one column).\nExit 1 only when no input is usable at all.\n\nDrive-by: CHART_LINKS pointed at dead dev-v0.26.x chart dirs; now lists\nthe four live ones.",
          "timestamp": "2026-10-19T06:47:58Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61"
        },
        "date": 1792843354257,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "iai_build::build::bench_build_200_x_16",
            "value": 8365144,
            "unit": "Instructions"
          },
          {
            "name": "iai_build::build::bench_build_500_x_64",
            "value": 59576697,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_lambda_aware_k10",
            "value": 61992779,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_hybrid_k10",
            "value": 59663250,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_linear_sorted_k10",
            "value": 59666179,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_range",
            "value": 61407019,
            "unit": "Instructions"
          },
          {
            "name": "iai_search::search::bench_search_prepare_query_item",
            "value": 59657792,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_multiply_vector",
            "value": 59570741,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_rayleigh_quotient",
            "value": 59571172,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_taumode_200_x_16",
            "value": 8880611,
            "unit": "Instructions"
          },
          {
            "name": "iai_spectral::spectral::bench_spectral_build_laplacian_500_x_64",
            "value": 60125948,
            "unit": "Instructions"
          }
        ]
      }
    ]
  }
}