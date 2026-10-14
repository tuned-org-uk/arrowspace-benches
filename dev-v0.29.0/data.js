window.BENCHMARK_DATA = {
  "lastUpdate": 1791970362674,
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
          "id": "88c3a9baa0021dee92c5a0a214ae59c9d7fd869c",
          "message": "ci: add CODEOWNERS with @Mec-iS as default owner",
          "timestamp": "2026-10-14T06:28:33+01:00",
          "tree_id": "5c8aac6d36f00f5b9ebf3e08ca0911b8398d93de",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/88c3a9baa0021dee92c5a0a214ae59c9d7fd869c"
        },
        "date": 1791970362144,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 16812479,
            "range": "± 1058709",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 48957957,
            "range": "± 586810",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 80027464,
            "range": "± 2406247",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 215681093,
            "range": "± 3489766",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 881978043555,
            "range": "± 1075686136",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 851752367,
            "range": "± 5013104",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 288450648,
            "range": "± 2000342",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3787380,
            "range": "± 135554",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 491711743,
            "range": "± 32126796",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2673501,
            "range": "± 11788",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 8111,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 8799,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 164034589,
            "range": "± 1968955",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 303529653401,
            "range": "± 432346087",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 15413133952,
            "range": "± 53999729",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39137013,
            "range": "± 1448448",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14560563,
            "range": "± 42747",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 287089,
            "range": "± 27727",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37928945,
            "range": "± 1273923",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14921504,
            "range": "± 62825",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 366165,
            "range": "± 53474",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 25852339,
            "range": "± 513946",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 108744,
            "range": "± 822",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 374,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 445,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1053145,
            "range": "± 24618",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 2013911142,
            "range": "± 11167116",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 371444,
            "range": "± 7186",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 261386,
            "range": "± 3633",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 118642,
            "range": "± 2188",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 372755,
            "range": "± 7598",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 282802,
            "range": "± 3163",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 117814,
            "range": "± 3109",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 274304,
            "range": "± 6572",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 111350,
            "range": "± 2556",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 442,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 500,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 406273,
            "range": "± 9766",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 12541094,
            "range": "± 330788",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1191229,
            "range": "± 94908",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}