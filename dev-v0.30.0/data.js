window.BENCHMARK_DATA = {
  "lastUpdate": 1792101093576,
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
      }
    ]
  }
}