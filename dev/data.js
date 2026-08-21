window.BENCHMARK_DATA = {
  "lastUpdate": 1787328312996,
  "repoUrl": "https://github.com/tuned-org-uk/arrowspace-benches",
  "entries": {
    "Benchmark": [
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
          "id": "85361ffb43fa212d36db4d56b5cd85fbddb8108b",
          "message": "ci: grant contents:write for gh-pages and snapshot pushes",
          "timestamp": "2026-08-21T15:56:51Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/85361ffb43fa212d36db4d56b5cd85fbddb8108b"
        },
        "date": 1787328311998,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 37140487,
            "range": "± 1587761",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 111451477,
            "range": "± 2351673",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 241100944,
            "range": "± 4564282",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 750885232,
            "range": "± 42201839",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 309044,
            "range": "± 12052",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 212999,
            "range": "± 5047",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 88003,
            "range": "± 1769",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 310421,
            "range": "± 7428",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 230397,
            "range": "± 7111",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 90009,
            "range": "± 1635",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 232079,
            "range": "± 7746",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 88323,
            "range": "± 1139",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 591,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 617,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 379340,
            "range": "± 172699",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 10050614,
            "range": "± 302500",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 4095164,
            "range": "± 129122",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}