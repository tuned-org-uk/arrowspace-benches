window.BENCHMARK_DATA = {
  "lastUpdate": 1787329602611,
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
          "id": "d1c213e1edc869e3d1a05c73ea09981a5d72c298",
          "message": "feat: compare arrowspace 0.26.0 / 0.26.5 / latest with cross-version page",
          "timestamp": "2026-08-21T17:18:34+01:00",
          "tree_id": "9d99d38d11dae8973db2ed78dd9ee3b4ffc6607d",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/d1c213e1edc869e3d1a05c73ea09981a5d72c298"
        },
        "date": 1787329601824,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 35587674,
            "range": "± 1602134",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 107358347,
            "range": "± 2709550",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 261112222,
            "range": "± 5784414",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 747835502,
            "range": "± 9677534",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 346545,
            "range": "± 9598",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 225564,
            "range": "± 3263",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 87337,
            "range": "± 6622",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 343903,
            "range": "± 9222",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 244400,
            "range": "± 5393",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 88298,
            "range": "± 965",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 254252,
            "range": "± 7117",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 86423,
            "range": "± 1093",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 654,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 725,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 354016,
            "range": "± 15912",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8303311,
            "range": "± 78782",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 6360997,
            "range": "± 41566",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}