window.BENCHMARK_DATA = {
  "lastUpdate": 1792429268303,
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
      }
    ]
  }
}