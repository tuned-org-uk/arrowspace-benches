window.BENCHMARK_DATA = {
  "lastUpdate": 1787329548102,
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
        "date": 1787329489797,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 24121101,
            "range": "± 1195143",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 77391345,
            "range": "± 2754857",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 155515857,
            "range": "± 5593691",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 513125348,
            "range": "± 9852071",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 193143,
            "range": "± 21409",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 131800,
            "range": "± 2601",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 63769,
            "range": "± 1593",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 192268,
            "range": "± 7688",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 145128,
            "range": "± 3235",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 62355,
            "range": "± 1467",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 154546,
            "range": "± 5044",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 64024,
            "range": "± 3925",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 308,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 331,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 247871,
            "range": "± 9198",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 6763853,
            "range": "± 287004",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 3762901,
            "range": "± 253113",
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
          "id": "23060daa0eb5e5996877be052c4014b4830903fe",
          "message": "bench(criterion): record v0.26.5 results [skip ci]",
          "timestamp": "2026-08-21T16:24:53Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/23060daa0eb5e5996877be052c4014b4830903fe"
        },
        "date": 1787329546991,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 31313598,
            "range": "± 853361",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 93164096,
            "range": "± 2874675",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 200149973,
            "range": "± 3387793",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 619508382,
            "range": "± 8713705",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 283432,
            "range": "± 8152",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 184606,
            "range": "± 1556",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 81643,
            "range": "± 851",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 280892,
            "range": "± 5723",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 201232,
            "range": "± 5899",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 80979,
            "range": "± 1063",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 204122,
            "range": "± 3457",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 79627,
            "range": "± 1845",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 511,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 586,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 332659,
            "range": "± 11122",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8876493,
            "range": "± 217415",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 4950074,
            "range": "± 368568",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}