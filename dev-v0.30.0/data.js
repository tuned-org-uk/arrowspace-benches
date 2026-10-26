window.BENCHMARK_DATA = {
  "lastUpdate": 1793033363141,
  "repoUrl": "https://github.com/tuned-org-uk/arrowspace-benches",
  "entries": {
    "Benchmark": [
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
        "date": 1792101093057,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 15298217,
            "range": "± 1087035",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 41075638,
            "range": "± 665124",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 74263928,
            "range": "± 2316468",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 190429962,
            "range": "± 4133287",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 568175172755,
            "range": "± 982030264",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 849069071,
            "range": "± 24861467",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 281561276,
            "range": "± 1451467",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 1156434,
            "range": "± 57516",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 491836719,
            "range": "± 2128680",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 112928,
            "range": "± 775",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 7916,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 8599,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 164782878,
            "range": "± 685325",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 7445160397,
            "range": "± 13947435",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 101104,
            "range": "± 2300",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 2358467,
            "range": "± 32579",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 7773795,
            "range": "± 40336",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 11782128595,
            "range": "± 32169656",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 40052411,
            "range": "± 426548",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14952393,
            "range": "± 243774",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 192102,
            "range": "± 2399",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 42572244,
            "range": "± 2041915",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15315191,
            "range": "± 489250",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 242182,
            "range": "± 36664",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 27625537,
            "range": "± 2167221",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 13200,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 512,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1057203,
            "range": "± 10465",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 136859109,
            "range": "± 1612563",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 308192,
            "range": "± 8764",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 146553,
            "range": "± 2247",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 14334,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 307570,
            "range": "± 10116",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 163541,
            "range": "± 2091",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 14462,
            "range": "± 802",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 219438,
            "range": "± 7926",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 13098,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 443,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 498,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 187993,
            "range": "± 5873",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 964010,
            "range": "± 28197",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1104312,
            "range": "± 43338",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1136820402,
            "range": "± 8193491",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1127541128,
            "range": "± 18822429",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 9527829510,
            "range": "± 43152373",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 9494531638,
            "range": "± 38198722",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 226345114651,
            "range": "± 948061489",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 236009728970,
            "range": "± 1288690126",
            "unit": "ns/iter"
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
        "date": 1792168015468,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 15239452,
            "range": "± 148527",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 40661479,
            "range": "± 405003",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 72905756,
            "range": "± 1229971",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 188142909,
            "range": "± 3106938",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 553663241794,
            "range": "± 538218192",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 853633532,
            "range": "± 13512147",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 304071701,
            "range": "± 1782297",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 1469120,
            "range": "± 58255",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 495360913,
            "range": "± 17138784",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 114950,
            "range": "± 1328",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 7923,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 8631,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 162694268,
            "range": "± 1391597",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 7485328714,
            "range": "± 94737732",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 103792,
            "range": "± 2419",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 2443290,
            "range": "± 36953",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 8014240,
            "range": "± 43604",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 10857216904,
            "range": "± 81395677",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 40478700,
            "range": "± 1864846",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 16907372,
            "range": "± 313391",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 250464,
            "range": "± 10935",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 44811020,
            "range": "± 1492624",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 17235748,
            "range": "± 214410",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 270330,
            "range": "± 16914",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 29393668,
            "range": "± 1494800",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 13384,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 386,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 457,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 998328,
            "range": "± 8273",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 137383856,
            "range": "± 634949",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 317545,
            "range": "± 7120",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 145384,
            "range": "± 2255",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 14559,
            "range": "± 581",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 319203,
            "range": "± 8182",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 162148,
            "range": "± 4096",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 14596,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 223352,
            "range": "± 8853",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 13283,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 376,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 442,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 194521,
            "range": "± 6737",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 957086,
            "range": "± 59031",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1055695,
            "range": "± 178866",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1236252592,
            "range": "± 12518136",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1189722396,
            "range": "± 23447676",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 9954875429,
            "range": "± 41409169",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 9615320123,
            "range": "± 58885957",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 243507956011,
            "range": "± 2149365966",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 236395622801,
            "range": "± 2026586281",
            "unit": "ns/iter"
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
        "date": 1792249351752,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 11492391,
            "range": "± 534883",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 31230284,
            "range": "± 300549",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 55738363,
            "range": "± 982602",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 144203646,
            "range": "± 2143686",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 416664802623,
            "range": "± 647035317",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 629541159,
            "range": "± 5705316",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 225575895,
            "range": "± 604298",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 953660,
            "range": "± 147187",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 332562911,
            "range": "± 390597",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 82263,
            "range": "± 1062",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4960,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5538,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 124774264,
            "range": "± 363382",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 5416672497,
            "range": "± 4390380",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 71373,
            "range": "± 1101",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 1819017,
            "range": "± 10535",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 5322589,
            "range": "± 41540",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 8538468634,
            "range": "± 196548413",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 30252834,
            "range": "± 18159",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 11479926,
            "range": "± 33474",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 126387,
            "range": "± 3598",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 30259957,
            "range": "± 15032",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 11843425,
            "range": "± 34334",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 120350,
            "range": "± 1142",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 17021010,
            "range": "± 33360",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 10767,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 339,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 399,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 793991,
            "range": "± 8061",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 101767455,
            "range": "± 375280",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 233983,
            "range": "± 3784",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 114553,
            "range": "± 3141",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 11531,
            "range": "± 418",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 233308,
            "range": "± 3300",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 130003,
            "range": "± 1495",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 11550,
            "range": "± 354",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 161491,
            "range": "± 3936",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 10446,
            "range": "± 424",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 314,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 370,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 147917,
            "range": "± 5578",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 729084,
            "range": "± 36615",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 831406,
            "range": "± 40707",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 859683096,
            "range": "± 4584064",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 858961388,
            "range": "± 3398394",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 7705333483,
            "range": "± 21862417",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 7729744431,
            "range": "± 31063410",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 219315034349,
            "range": "± 1479771696",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 234689609589,
            "range": "± 1849059074",
            "unit": "ns/iter"
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
        "date": 1792337559636,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 11421466,
            "range": "± 85917",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 31178568,
            "range": "± 738911",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 55444638,
            "range": "± 1019855",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 144041725,
            "range": "± 2263566",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 418894929986,
            "range": "± 2076985929",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 629805445,
            "range": "± 480481",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 228730647,
            "range": "± 1182710",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 774869,
            "range": "± 18986",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 332182058,
            "range": "± 284566",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 82817,
            "range": "± 1296",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4964,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5545,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 123160006,
            "range": "± 1265308",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 5431516568,
            "range": "± 156642669",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 74012,
            "range": "± 1048",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 1819221,
            "range": "± 10214",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 5325104,
            "range": "± 28843",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 8552996488,
            "range": "± 47215769",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 30700985,
            "range": "± 84656",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 11529157,
            "range": "± 19634",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 142187,
            "range": "± 3768",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 30342485,
            "range": "± 20119",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 11808176,
            "range": "± 17972",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 143605,
            "range": "± 2330",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 17046543,
            "range": "± 123257",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 10743,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 298,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 372,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 805595,
            "range": "± 7166",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 101509671,
            "range": "± 349068",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 233359,
            "range": "± 6638",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 117120,
            "range": "± 4040",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 11371,
            "range": "± 354",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 233952,
            "range": "± 3711",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 129910,
            "range": "± 2642",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 11608,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 162390,
            "range": "± 4287",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 10573,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 314,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 368,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 146073,
            "range": "± 4307",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 726836,
            "range": "± 27917",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 822124,
            "range": "± 47321",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 855756648,
            "range": "± 4727981",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 853006924,
            "range": "± 6388604",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 7601190773,
            "range": "± 25440696",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 7743351315,
            "range": "± 22745757",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 221025524276,
            "range": "± 1152673461",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 233452225430,
            "range": "± 846106853",
            "unit": "ns/iter"
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
        "date": 1792403946462,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 17032712,
            "range": "± 250730",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 44527645,
            "range": "± 622097",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 83733329,
            "range": "± 1812002",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 208456532,
            "range": "± 3724146",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 796252272,
            "range": "± 1041085",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 321707658,
            "range": "± 1499753",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 674042,
            "range": "± 19765",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 373882597,
            "range": "± 816407",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 100016,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 7774,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 8564,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 82476,
            "range": "± 2266",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 2694776,
            "range": "± 15216",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 8753192,
            "range": "± 56390",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 12766506732,
            "range": "± 63774759",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 38080014,
            "range": "± 112533",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 16761815,
            "range": "± 17793",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 177278,
            "range": "± 1753",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 38063958,
            "range": "± 86757",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 17095915,
            "range": "± 31367",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 181489,
            "range": "± 1680",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 20512796,
            "range": "± 92722",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 11683,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 418,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 499,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1130298,
            "range": "± 4299",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 163302033,
            "range": "± 837332",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 277566,
            "range": "± 13046",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 156499,
            "range": "± 2341",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 13228,
            "range": "± 396",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 278381,
            "range": "± 5830",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 181756,
            "range": "± 4187",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 13286,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 176880,
            "range": "± 5847",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 11669,
            "range": "± 1205",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 407,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 484,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 209143,
            "range": "± 9751",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 1111782,
            "range": "± 25530",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1192673,
            "range": "± 28357",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1268744190,
            "range": "± 9033367",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1231312144,
            "range": "± 2690237",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 10615447946,
            "range": "± 36097942",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 10176132326,
            "range": "± 39945898",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 332989966004,
            "range": "± 5540971382",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 319474071592,
            "range": "± 5815284819",
            "unit": "ns/iter"
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
        "date": 1792429267269,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 15680583,
            "range": "± 913855",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 42605197,
            "range": "± 1107788",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 75387232,
            "range": "± 1135353",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 196494371,
            "range": "± 3665877",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 793118584,
            "range": "± 21939433",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 281596012,
            "range": "± 1104617",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 1375660,
            "range": "± 38055",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 454131412,
            "range": "± 9475389",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 117613,
            "range": "± 744",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 7895,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 8582,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 96641,
            "range": "± 2042",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 2347574,
            "range": "± 52204",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 7317556,
            "range": "± 105843",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 12068390716,
            "range": "± 31895371",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 43874583,
            "range": "± 774941",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 16043189,
            "range": "± 97886",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 251509,
            "range": "± 21925",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 41009503,
            "range": "± 1106285",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 16330171,
            "range": "± 120328",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 252196,
            "range": "± 22198",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 25965375,
            "range": "± 211633",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 13216,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 443,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 514,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1061221,
            "range": "± 9208",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 132836755,
            "range": "± 764504",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 312305,
            "range": "± 7234",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 150851,
            "range": "± 2898",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 14732,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 317910,
            "range": "± 5330",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 163063,
            "range": "± 5538",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 14811,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 218700,
            "range": "± 6533",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 13247,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 381,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 447,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 194644,
            "range": "± 7967",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 980476,
            "range": "± 68164",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1041595,
            "range": "± 51355",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1192201689,
            "range": "± 14310219",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1150187256,
            "range": "± 15620881",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 9977683535,
            "range": "± 39017816",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 9585917839,
            "range": "± 50429823",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 243667867058,
            "range": "± 2545991415",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 236956181847,
            "range": "± 2115018872",
            "unit": "ns/iter"
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
        "date": 1792508028012,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 10085439,
            "range": "± 469503",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 30211516,
            "range": "± 441601",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 48806012,
            "range": "± 732270",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 138570310,
            "range": "± 3346235",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 616382608,
            "range": "± 227718",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 220882629,
            "range": "± 695932",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 1272749,
            "range": "± 37469",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 314322900,
            "range": "± 1848558",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 75644,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 6119,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 6674,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 62352,
            "range": "± 534",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 1821430,
            "range": "± 10993",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 4969775,
            "range": "± 21143",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 8864511145,
            "range": "± 315193596",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 29079766,
            "range": "± 139147",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 10883458,
            "range": "± 39182",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 145260,
            "range": "± 5902",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 29093710,
            "range": "± 207815",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 11222956,
            "range": "± 63640",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 150104,
            "range": "± 7876",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 16123242,
            "range": "± 444896",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 10981,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 358,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 402,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 799557,
            "range": "± 8081",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 101673587,
            "range": "± 1572862",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 223521,
            "range": "± 3567",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 106896,
            "range": "± 5254",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 11734,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 221492,
            "range": "± 4132",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 120161,
            "range": "± 1045",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 11715,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 155506,
            "range": "± 4771",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 10453,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 304,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 349,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 143985,
            "range": "± 4888",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 719973,
            "range": "± 38237",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 827440,
            "range": "± 38072",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 867557234,
            "range": "± 8553333",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 856458141,
            "range": "± 7745760",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 7905516652,
            "range": "± 31587988",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 7893704458,
            "range": "± 34982865",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 224214202706,
            "range": "± 1945636864",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 226603723927,
            "range": "± 3533004510",
            "unit": "ns/iter"
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
        "date": 1792596871344,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 13652408,
            "range": "± 297891",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 40200341,
            "range": "± 473870",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 65050892,
            "range": "± 1413335",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 184692083,
            "range": "± 4980925",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 726681081,
            "range": "± 20586516",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 275530255,
            "range": "± 26370624",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 1203388,
            "range": "± 47474",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 433135765,
            "range": "± 16660812",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 106717,
            "range": "± 1432",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 7861,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 8497,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 90832,
            "range": "± 939",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 2322643,
            "range": "± 137756",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 7262884,
            "range": "± 42145",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 12398531878,
            "range": "± 251686768",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 38070792,
            "range": "± 1093033",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14750524,
            "range": "± 80311",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 215011,
            "range": "± 37763",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39121903,
            "range": "± 1362345",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15106274,
            "range": "± 32565",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 189154,
            "range": "± 5999",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 24925215,
            "range": "± 877282",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 12596,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 438,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 498,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1050424,
            "range": "± 4946",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 132774820,
            "range": "± 15587543",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 287880,
            "range": "± 8608",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 136076,
            "range": "± 961",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 14439,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 288264,
            "range": "± 6962",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 151527,
            "range": "± 8161",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 14451,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 202888,
            "range": "± 6773",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 12868,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 381,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 442,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 181765,
            "range": "± 6344",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 961556,
            "range": "± 52695",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1022790,
            "range": "± 52033",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1187179812,
            "range": "± 38784500",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1138401396,
            "range": "± 39075681",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 10081024329,
            "range": "± 168773263",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 9761381172,
            "range": "± 175564393",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 270405963998,
            "range": "± 2751587080",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 265812402399,
            "range": "± 1921054456",
            "unit": "ns/iter"
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
        "date": 1792679164747,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 8013782,
            "range": "± 358328",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 25191802,
            "range": "± 655028",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 39688834,
            "range": "± 894683",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 115260042,
            "range": "± 6121948",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 423654347,
            "range": "± 12509574",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 144685040,
            "range": "± 1368979",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 1007825,
            "range": "± 53226",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 206700950,
            "range": "± 940068",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 62229,
            "range": "± 1106",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3444,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3699,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 47020,
            "range": "± 1063",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 1714622,
            "range": "± 229373",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 3903355,
            "range": "± 48694",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 7034224932,
            "range": "± 595565262",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 22426550,
            "range": "± 668729",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 8346922,
            "range": "± 177728",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 97515,
            "range": "± 3496",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 21493095,
            "range": "± 489403",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 8506560,
            "range": "± 726430",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 101043,
            "range": "± 5531",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 13278441,
            "range": "± 506873",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 8853,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 210,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 216,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 625145,
            "range": "± 34207",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 76227381,
            "range": "± 716221",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 161845,
            "range": "± 5022",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 78706,
            "range": "± 749",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 9726,
            "range": "± 483",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 164751,
            "range": "± 8125",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 89759,
            "range": "± 1986",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 9561,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 120846,
            "range": "± 10951",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 8530,
            "range": "± 557",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 211,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 212,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 107983,
            "range": "± 9786",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 527918,
            "range": "± 33164",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 643573,
            "range": "± 49210",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 695296029,
            "range": "± 7406620",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 642351150,
            "range": "± 16119294",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 5773829410,
            "range": "± 74748849",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 5189247660,
            "range": "± 97454054",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 151580755004,
            "range": "± 2331207360",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 142705975729,
            "range": "± 3776289564",
            "unit": "ns/iter"
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
        "date": 1792763835917,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 8219133,
            "range": "± 388311",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 25128593,
            "range": "± 803347",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 39139245,
            "range": "± 1349863",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 115753697,
            "range": "± 5957575",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 412978328,
            "range": "± 8199198",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 151556914,
            "range": "± 1698806",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 710188,
            "range": "± 23753",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 219355459,
            "range": "± 4622164",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 58800,
            "range": "± 3488",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3244,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3651,
            "range": "± 584",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 44376,
            "range": "± 1289",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 1551068,
            "range": "± 44581",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 3761644,
            "range": "± 69967",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 6906179596,
            "range": "± 651075070",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 20784845,
            "range": "± 893255",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 8400192,
            "range": "± 900901",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 92680,
            "range": "± 2622",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 20183283,
            "range": "± 763156",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 9744035,
            "range": "± 148296",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 92744,
            "range": "± 1890",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 13236800,
            "range": "± 434972",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 8225,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 209,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 211,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 618082,
            "range": "± 10503",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 76257687,
            "range": "± 839532",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 164785,
            "range": "± 6874",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 78432,
            "range": "± 1371",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 9527,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 158567,
            "range": "± 4952",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 90829,
            "range": "± 1556",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 9513,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 120597,
            "range": "± 4836",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 8567,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 204,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 211,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 105701,
            "range": "± 7881",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 520536,
            "range": "± 25763",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 588339,
            "range": "± 33898",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 605879634,
            "range": "± 12716399",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 572309995,
            "range": "± 10982434",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 5222429122,
            "range": "± 84427933",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 5170869950,
            "range": "± 100278405",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 134631119011,
            "range": "± 3271941949",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 130604557126,
            "range": "± 5089866774",
            "unit": "ns/iter"
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
        "date": 1792847994891,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 8394808,
            "range": "± 450256",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 26041277,
            "range": "± 896134",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 41234196,
            "range": "± 972770",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 118990932,
            "range": "± 4655560",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 411182309,
            "range": "± 14620814",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 155967929,
            "range": "± 3095182",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 1137398,
            "range": "± 47672",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 237436699,
            "range": "± 8283898",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 62784,
            "range": "± 2829",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3312,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3641,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 47536,
            "range": "± 1026",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 1654505,
            "range": "± 58340",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 4012447,
            "range": "± 34263",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 7145039927,
            "range": "± 647180162",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 22486332,
            "range": "± 179249",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 8892668,
            "range": "± 234565",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 166258,
            "range": "± 23673",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 22379235,
            "range": "± 538153",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 9108494,
            "range": "± 117395",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 168459,
            "range": "± 26663",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 14295804,
            "range": "± 261123",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 9024,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 219,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 225,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 612076,
            "range": "± 3091",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 79655747,
            "range": "± 997112",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 164022,
            "range": "± 4625",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 87001,
            "range": "± 1866",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 10080,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 165267,
            "range": "± 7099",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 93055,
            "range": "± 1410",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 9970,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 122274,
            "range": "± 6401",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 9062,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 222,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 225,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 115095,
            "range": "± 7060",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 561635,
            "range": "± 28797",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 660333,
            "range": "± 81075",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 640774621,
            "range": "± 14100937",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 615345442,
            "range": "± 12356480",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 5353731271,
            "range": "± 85431159",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 5389965646,
            "range": "± 69043167",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 126259171934,
            "range": "± 1951329234",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 125628680239,
            "range": "± 1100759963",
            "unit": "ns/iter"
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
        "date": 1792936219875,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 8153595,
            "range": "± 125848",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 25400360,
            "range": "± 756805",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 40727803,
            "range": "± 1090176",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 116063289,
            "range": "± 5568091",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 386508835,
            "range": "± 2847037",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 146512109,
            "range": "± 2627158",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 865058,
            "range": "± 16144",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 217920837,
            "range": "± 5179321",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 59446,
            "range": "± 1005",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3109,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3387,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 43629,
            "range": "± 1665",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 1550808,
            "range": "± 31239",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 3848777,
            "range": "± 82598",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 6710211078,
            "range": "± 752522754",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 20109148,
            "range": "± 668942",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 8416771,
            "range": "± 134045",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 89003,
            "range": "± 1647",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 20657981,
            "range": "± 689599",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 8415581,
            "range": "± 156600",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 88543,
            "range": "± 1697",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 15737265,
            "range": "± 1200530",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 8536,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 206,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 213,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 562413,
            "range": "± 9555",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 75379801,
            "range": "± 2263803",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 156357,
            "range": "± 6051",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 78104,
            "range": "± 1728",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 9408,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 154040,
            "range": "± 3240",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 85553,
            "range": "± 2104",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 9115,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 110838,
            "range": "± 3539",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 8322,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 202,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 205,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 104179,
            "range": "± 3971",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 513233,
            "range": "± 31602",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 595331,
            "range": "± 45555",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 589531551,
            "range": "± 13507008",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 559357715,
            "range": "± 11947859",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 5152499859,
            "range": "± 74422216",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 5174243045,
            "range": "± 48330241",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 127817730704,
            "range": "± 1880275909",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 129698818617,
            "range": "± 1882129567",
            "unit": "ns/iter"
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
        "date": 1793033362349,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 14011904,
            "range": "± 821383",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 41240223,
            "range": "± 3617356",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 66854287,
            "range": "± 1537886",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 189813114,
            "range": "± 4072653",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 860407935,
            "range": "± 46655891",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 294106495,
            "range": "± 3271610",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 1171135,
            "range": "± 98955",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 415401887,
            "range": "± 51045194",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 110210,
            "range": "± 704",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 6915,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 7588,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 90108,
            "range": "± 1232",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 2317472,
            "range": "± 18763",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 7268637,
            "range": "± 767228",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 12050254662,
            "range": "± 1017908104",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 43646438,
            "range": "± 1746936",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15491638,
            "range": "± 202180",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 210296,
            "range": "± 15469",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 43686506,
            "range": "± 1439571",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15780837,
            "range": "± 111385",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 215270,
            "range": "± 10252",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 29236781,
            "range": "± 51535",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 12788,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 493,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1047748,
            "range": "± 15256",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 134907506,
            "range": "± 1444327",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 288343,
            "range": "± 4894",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 136943,
            "range": "± 1713",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 14418,
            "range": "± 959",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 287494,
            "range": "± 5420",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 152558,
            "range": "± 3447",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 14413,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 205363,
            "range": "± 4318",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 12907,
            "range": "± 799",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 376,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 434,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 181269,
            "range": "± 6266",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 945474,
            "range": "± 111606",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1020479,
            "range": "± 48768",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1150787421,
            "range": "± 42199173",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1050669627,
            "range": "± 38155784",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 10034421965,
            "range": "± 165695468",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 9420208749,
            "range": "± 183789725",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 272444517573,
            "range": "± 2556655878",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 280655102812,
            "range": "± 1898196707",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}