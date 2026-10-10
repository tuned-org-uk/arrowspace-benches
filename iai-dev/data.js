window.BENCHMARK_DATA = {
  "lastUpdate": 1791639355045,
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
      }
    ]
  }
}