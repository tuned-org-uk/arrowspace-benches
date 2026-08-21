window.BENCHMARK_DATA = {
  "lastUpdate": 1787330600020,
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
          "id": "5545061da47c7ff26b0234d17458d2ef4445fba4",
          "message": "bench(criterion): record v0.26.0 results [skip ci]",
          "timestamp": "2026-08-21T16:26:44Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/5545061da47c7ff26b0234d17458d2ef4445fba4"
        },
        "date": 1787329614015,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 35225632,
            "range": "± 1656829",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 104693354,
            "range": "± 2654236",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 260693555,
            "range": "± 5270433",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 748971697,
            "range": "± 9606260",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 360673,
            "range": "± 8692",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 229813,
            "range": "± 11075",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 94749,
            "range": "± 2176",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 360397,
            "range": "± 6589",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 245942,
            "range": "± 1758",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 95091,
            "range": "± 2298",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 260459,
            "range": "± 9609",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 91021,
            "range": "± 2646",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 616,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 681,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 376845,
            "range": "± 15537",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8993757,
            "range": "± 286588",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 6150943,
            "range": "± 126729",
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
          "id": "79692c335448eba6327e243f6f81bef42e944524",
          "message": "fix(ci): build compare page to distinct path before gh-pages checkout",
          "timestamp": "2026-08-21T17:34:57+01:00",
          "tree_id": "898a4c5a5cf1f69fc468d1898cf21769c8657763",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/79692c335448eba6327e243f6f81bef42e944524"
        },
        "date": 1787330543901,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 35488637,
            "range": "± 1611727",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 107656778,
            "range": "± 3783340",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 261480748,
            "range": "± 4475973",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 748174924,
            "range": "± 9617047",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 348681,
            "range": "± 8414",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 224514,
            "range": "± 5580",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 87533,
            "range": "± 1585",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 347937,
            "range": "± 9618",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 245608,
            "range": "± 3134",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 86395,
            "range": "± 1184",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 253718,
            "range": "± 15005",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 82897,
            "range": "± 2882",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 653,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 732,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 346169,
            "range": "± 13866",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8272845,
            "range": "± 133238",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 6430912,
            "range": "± 79296",
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
          "id": "79692c335448eba6327e243f6f81bef42e944524",
          "message": "fix(ci): build compare page to distinct path before gh-pages checkout",
          "timestamp": "2026-08-21T16:34:19Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/79692c335448eba6327e243f6f81bef42e944524"
        },
        "date": 1787330599241,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 40627998,
            "range": "± 2649433",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 117130163,
            "range": "± 5007405",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 303595287,
            "range": "± 5850256",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 842780686,
            "range": "± 11802597",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 372741,
            "range": "± 25891",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 231654,
            "range": "± 5846",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 88800,
            "range": "± 3252",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 362964,
            "range": "± 35488",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 246212,
            "range": "± 16544",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 88486,
            "range": "± 6490",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 256669,
            "range": "± 20799",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 85866,
            "range": "± 5667",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 695,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 789,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 433316,
            "range": "± 65736",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 11360129,
            "range": "± 417682",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 5289283,
            "range": "± 217627",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}