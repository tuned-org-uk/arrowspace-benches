window.BENCHMARK_DATA = {
  "lastUpdate": 1787481621642,
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
          "id": "62107e9923b055373885d0fee63e68833adeb1c3",
          "message": "feat: cve bench mimicking the pyarrowspace CVE-search corpus at 300Kx384",
          "timestamp": "2026-08-21T19:00:28+01:00",
          "tree_id": "63be3b2cd987700a3553750a1da54ed2bbefe202",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/62107e9923b055373885d0fee63e68833adeb1c3"
        },
        "date": 1787346930121,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 27312577,
            "range": "± 1250914",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 83214831,
            "range": "± 2662857",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 202780494,
            "range": "± 4085620",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 578759309,
            "range": "± 7178497",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 768176041198,
            "range": "± 2073008099",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 639421471,
            "range": "± 999037",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 230081176,
            "range": "± 613449",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 1992848,
            "range": "± 41238",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 340575874,
            "range": "± 558658",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1316642,
            "range": "± 1480",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4392,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5000,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 912621621,
            "range": "± 4651419",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 158751957871,
            "range": "± 34870136",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 16201584059,
            "range": "± 96026507",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 30957551,
            "range": "± 130015",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 11673379,
            "range": "± 20115",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 156160,
            "range": "± 1756",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 30950102,
            "range": "± 66576",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 11954855,
            "range": "± 23195",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 153915,
            "range": "± 1304",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 17509201,
            "range": "± 443273",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 68952,
            "range": "± 734",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 515,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 572,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 4903734,
            "range": "± 26539",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1012029699,
            "range": "± 3096117",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 271772,
            "range": "± 10766",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 173922,
            "range": "± 1623",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 67567,
            "range": "± 1219",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 271909,
            "range": "± 8031",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 190023,
            "range": "± 2289",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 69148,
            "range": "± 1515",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 199021,
            "range": "± 4149",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 66527,
            "range": "± 1137",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 527,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 588,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 268955,
            "range": "± 11801",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 6412848,
            "range": "± 82174",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 4931550,
            "range": "± 31304",
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
          "id": "62107e9923b055373885d0fee63e68833adeb1c3",
          "message": "feat: cve bench mimicking the pyarrowspace CVE-search corpus at 300Kx384",
          "timestamp": "2026-08-21T18:00:28Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/62107e9923b055373885d0fee63e68833adeb1c3"
        },
        "date": 1787397197761,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 27998312,
            "range": "± 933851",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 82504495,
            "range": "± 3059674",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 205359200,
            "range": "± 7425441",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 611834156,
            "range": "± 13188355",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 838311114659,
            "range": "± 15593274994",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 738679439,
            "range": "± 5137242",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 288472691,
            "range": "± 4994551",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2102473,
            "range": "± 19140",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 509117475,
            "range": "± 2491002",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1712553,
            "range": "± 23742",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3890,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4152,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 738555777,
            "range": "± 7273529",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 208823115390,
            "range": "± 3726951837",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 19296905099,
            "range": "± 183447785",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 27409897,
            "range": "± 197103",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 10905753,
            "range": "± 127766",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 173177,
            "range": "± 2861",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 27448253,
            "range": "± 431454",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 11015258,
            "range": "± 187256",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 171125,
            "range": "± 2253",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 16440029,
            "range": "± 233565",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 75834,
            "range": "± 1073",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 417,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 443,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 3882872,
            "range": "± 29325",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1347473799,
            "range": "± 19486087",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 253949,
            "range": "± 7560",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 185066,
            "range": "± 1923",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 77011,
            "range": "± 1931",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 253145,
            "range": "± 8066",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 195133,
            "range": "± 1858",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 76790,
            "range": "± 1780",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 194021,
            "range": "± 3627",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 74421,
            "range": "± 2091",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 469,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 502,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 342325,
            "range": "± 17731",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8634797,
            "range": "± 394473",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 4202657,
            "range": "± 201083",
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
          "id": "62107e9923b055373885d0fee63e68833adeb1c3",
          "message": "feat: cve bench mimicking the pyarrowspace CVE-search corpus at 300Kx384",
          "timestamp": "2026-08-21T18:00:28Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/62107e9923b055373885d0fee63e68833adeb1c3"
        },
        "date": 1787481620824,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 24063548,
            "range": "± 807175",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 65409130,
            "range": "± 3357184",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 179096842,
            "range": "± 7425199",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 477382519,
            "range": "± 16876596",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 710416912192,
            "range": "± 2029988367",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 742897670,
            "range": "± 25402365",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 274992830,
            "range": "± 5362726",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 1710021,
            "range": "± 35663",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 505856359,
            "range": "± 810665",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1358191,
            "range": "± 3033",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3505,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3446,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 609598194,
            "range": "± 1981379",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 169236019986,
            "range": "± 911092549",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13242854575,
            "range": "± 174266538",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 23658975,
            "range": "± 21750",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 9600112,
            "range": "± 21958",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 174288,
            "range": "± 5423",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 23793155,
            "range": "± 33231",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 9728975,
            "range": "± 24712",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 176584,
            "range": "± 8788",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 14759219,
            "range": "± 22593",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 65242,
            "range": "± 1593",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 396,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 418,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 3581872,
            "range": "± 18118",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1172665671,
            "range": "± 4750884",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 216403,
            "range": "± 6728",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 166617,
            "range": "± 2068",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 62659,
            "range": "± 2035",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 216411,
            "range": "± 7712",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 184149,
            "range": "± 5897",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 62605,
            "range": "± 2381",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 167706,
            "range": "± 6829",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 65494,
            "range": "± 3147",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 395,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 418,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 271474,
            "range": "± 12220",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 6873393,
            "range": "± 91232",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 3516051,
            "range": "± 123423",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}