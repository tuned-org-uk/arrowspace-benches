window.BENCHMARK_DATA = {
  "lastUpdate": 1788320478508,
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
          "id": "ad188509a36ea182511dfd7862e8c6a05c29ed4a",
          "message": "fix(benches): migrate to try_prepare_query_item / try_search_lambda_aware twins deprecated in arrowspace 0.27",
          "timestamp": "2026-09-02T01:23:22+01:00",
          "tree_id": "a799db91722e999e9df21ccff8b0afd9944385dc",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ad188509a36ea182511dfd7862e8c6a05c29ed4a"
        },
        "date": 1788320477555,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 29030966,
            "range": "± 639203",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 77053105,
            "range": "± 4236432",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 187899841,
            "range": "± 8154295",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 534549697,
            "range": "± 17581380",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 766851395708,
            "range": "± 3930706050",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 592211787,
            "range": "± 13844375",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 205636700,
            "range": "± 2538699",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 1786587,
            "range": "± 83318",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 386066944,
            "range": "± 10458009",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1318636,
            "range": "± 2423",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 2868,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3186,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 110436118,
            "range": "± 5231975",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 168183377653,
            "range": "± 718166638",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 17293297179,
            "range": "± 186861129",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 25642502,
            "range": "± 833930",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 9777412,
            "range": "± 502257",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 182228,
            "range": "± 6716",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 22683477,
            "range": "± 711941",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 9416433,
            "range": "± 174693",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 182109,
            "range": "± 4980",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 13300136,
            "range": "± 73431",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 65829,
            "range": "± 649",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 249,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 315,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 675935,
            "range": "± 25886",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1127036942,
            "range": "± 16243986",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 213621,
            "range": "± 7430",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 168633,
            "range": "± 2201",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 66422,
            "range": "± 4592",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 211117,
            "range": "± 6328",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 184023,
            "range": "± 6305",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 62663,
            "range": "± 3553",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 166688,
            "range": "± 7348",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 61226,
            "range": "± 1689",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 256,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 315,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 273809,
            "range": "± 36290",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 6710213,
            "range": "± 273885",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 755208,
            "range": "± 46911",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}