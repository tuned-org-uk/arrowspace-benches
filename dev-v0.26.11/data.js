window.BENCHMARK_DATA = {
  "lastUpdate": 1788284459409,
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
          "id": "94f8bbf64d80e777cfbaf707d8080cfc08349853",
          "message": "ci: compare pins v0.26.12 / v0.26.11, drop v0.26.5 / v0.26.0",
          "timestamp": "2026-08-23T15:00:06+01:00",
          "tree_id": "8de1d4954acff4eb4919c89ea4fe9934b76e1087",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/94f8bbf64d80e777cfbaf707d8080cfc08349853"
        },
        "date": 1787510585600,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42673110,
            "range": "± 1714411",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 126108937,
            "range": "± 3056395",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 275924955,
            "range": "± 4449381",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 850118760,
            "range": "± 10788918",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1145187047777,
            "range": "± 1391561061",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 736197009,
            "range": "± 2123918",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 291877253,
            "range": "± 4189773",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2453516,
            "range": "± 22269",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 421560749,
            "range": "± 8932798",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1699455,
            "range": "± 7836",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4444,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5085,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 468844361,
            "range": "± 19794161",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 204232948745,
            "range": "± 256447367",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 25109868861,
            "range": "± 228502795",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39143705,
            "range": "± 79559",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15340191,
            "range": "± 139700",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 230081,
            "range": "± 5269",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39150578,
            "range": "± 84339",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15570408,
            "range": "± 81960",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 225336,
            "range": "± 7032",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22804306,
            "range": "± 26891",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 92878,
            "range": "± 714",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 411,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 479,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 2564931,
            "range": "± 9200",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1419282278,
            "range": "± 4256987",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 352175,
            "range": "± 9257",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 235915,
            "range": "± 4627",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 98817,
            "range": "± 3485",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 355681,
            "range": "± 10738",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 257137,
            "range": "± 3289",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 99264,
            "range": "± 3245",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 251184,
            "range": "± 8543",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 95122,
            "range": "± 2878",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 418,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 489,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 368620,
            "range": "± 19552",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9155156,
            "range": "± 176974",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2883840,
            "range": "± 39868",
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
          "id": "82ac2183d9723dad34651044e487088e7080c291",
          "message": "bench(criterion): record v0.26.12 results [skip ci]",
          "timestamp": "2026-08-23T18:34:06Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/82ac2183d9723dad34651044e487088e7080c291"
        },
        "date": 1787571792050,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 32551940,
            "range": "± 1011657",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 96605233,
            "range": "± 2178659",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 208415524,
            "range": "± 3063974",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 636360154,
            "range": "± 7407806",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 901882232139,
            "range": "± 1893751882",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 618279779,
            "range": "± 6090231",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 216805682,
            "range": "± 1347911",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2125581,
            "range": "± 82595",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 317844173,
            "range": "± 422896",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1325489,
            "range": "± 2291",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3612,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4198,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 364240909,
            "range": "± 5080545",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 161784528245,
            "range": "± 98854465",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 20631442344,
            "range": "± 155030634",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 30384581,
            "range": "± 23622",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 11549257,
            "range": "± 51216",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 155888,
            "range": "± 2054",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 30388868,
            "range": "± 16356",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 11734591,
            "range": "± 75381",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 154228,
            "range": "± 1182",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 17118908,
            "range": "± 21624",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 68199,
            "range": "± 541",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 328,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 380,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 2139810,
            "range": "± 8450",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 978687417,
            "range": "± 1781668",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 269814,
            "range": "± 4359",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 172800,
            "range": "± 1380",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 66718,
            "range": "± 917",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 270882,
            "range": "± 19592",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 188838,
            "range": "± 2110",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 64767,
            "range": "± 708",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 196620,
            "range": "± 3938",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 66289,
            "range": "± 1432",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 344,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 393,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 265132,
            "range": "± 12529",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 6286600,
            "range": "± 105367",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2191470,
            "range": "± 53507",
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
          "id": "43c1855d81092b05fa1cae63da04222f97bdb529",
          "message": "bench(criterion): record v0.26.13 results [skip ci]",
          "timestamp": "2026-08-24T18:07:51Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/43c1855d81092b05fa1cae63da04222f97bdb529"
        },
        "date": 1787599897362,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42880230,
            "range": "± 1587615",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 125496273,
            "range": "± 2416995",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 276551696,
            "range": "± 4165840",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 849743925,
            "range": "± 9366773",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1130006972170,
            "range": "± 11556208044",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 681609199,
            "range": "± 5003322",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 249168725,
            "range": "± 1602640",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2138328,
            "range": "± 16706",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 396135996,
            "range": "± 1150101",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1591490,
            "range": "± 14470",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4080,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4737,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 440037086,
            "range": "± 4131783",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 191369901677,
            "range": "± 760349196",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 26766974973,
            "range": "± 282424228",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 34774286,
            "range": "± 220593",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 13271002,
            "range": "± 77910",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 188153,
            "range": "± 4255",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 35401252,
            "range": "± 399787",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 13453697,
            "range": "± 280362",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 189704,
            "range": "± 5577",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 20126511,
            "range": "± 176666",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 87495,
            "range": "± 868",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 368,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 436,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 2639860,
            "range": "± 15048",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1382497398,
            "range": "± 7086517",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 318586,
            "range": "± 10011",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 212998,
            "range": "± 3521",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 91040,
            "range": "± 2529",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 315523,
            "range": "± 8801",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 230611,
            "range": "± 4445",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 90874,
            "range": "± 2646",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 230726,
            "range": "± 12304",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 85790,
            "range": "± 2631",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 396,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 449,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 344514,
            "range": "± 25194",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8932139,
            "range": "± 233604",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2535443,
            "range": "± 69302",
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
          "id": "43c1855d81092b05fa1cae63da04222f97bdb529",
          "message": "bench(criterion): record v0.26.13 results [skip ci]",
          "timestamp": "2026-08-24T18:07:51Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/43c1855d81092b05fa1cae63da04222f97bdb529"
        },
        "date": 1787661434987,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 41761453,
            "range": "± 1804924",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 123076965,
            "range": "± 2708129",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 269825085,
            "range": "± 3331182",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 815974463,
            "range": "± 10425185",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1164407145983,
            "range": "± 3144145981",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 797971284,
            "range": "± 964894",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 285690271,
            "range": "± 999898",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3148134,
            "range": "± 96374",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 417039419,
            "range": "± 17970897",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1738401,
            "range": "± 24897",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4726,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5409,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 486576380,
            "range": "± 6445054",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 208607936636,
            "range": "± 4748421133",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 26165181779,
            "range": "± 134300730",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39219606,
            "range": "± 51264",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14917910,
            "range": "± 61568",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 196216,
            "range": "± 4332",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39213293,
            "range": "± 211318",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15097475,
            "range": "± 60304",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 194313,
            "range": "± 4215",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22113567,
            "range": "± 47994",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 87340,
            "range": "± 990",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 412,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 485,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 2758672,
            "range": "± 36195",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1258793560,
            "range": "± 2621377",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 346207,
            "range": "± 12248",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 229639,
            "range": "± 3961",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 91183,
            "range": "± 1802",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 352924,
            "range": "± 11182",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 251104,
            "range": "± 2523",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 91540,
            "range": "± 1436",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 259710,
            "range": "± 6071",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 89731,
            "range": "± 1006",
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
            "value": 505,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 337372,
            "range": "± 13328",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8110935,
            "range": "± 101118",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2894296,
            "range": "± 51535",
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
          "id": "43c1855d81092b05fa1cae63da04222f97bdb529",
          "message": "bench(criterion): record v0.26.13 results [skip ci]",
          "timestamp": "2026-08-24T18:07:51Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/43c1855d81092b05fa1cae63da04222f97bdb529"
        },
        "date": 1787749423217,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42509246,
            "range": "± 2023405",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 126489941,
            "range": "± 3387703",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 274560407,
            "range": "± 5722839",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 844216360,
            "range": "± 28887192",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1222299349013,
            "range": "± 2186426503",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 797166827,
            "range": "± 6535545",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 290347622,
            "range": "± 829768",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3164518,
            "range": "± 122101",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 415372280,
            "range": "± 4676611",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2165308,
            "range": "± 7032",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3782,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4479,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 471463687,
            "range": "± 3765223",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 287008526602,
            "range": "± 137970562",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 26231532239,
            "range": "± 268671546",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39137853,
            "range": "± 174547",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15207873,
            "range": "± 193530",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 201972,
            "range": "± 3265",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39068510,
            "range": "± 135515",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15544725,
            "range": "± 119444",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 198590,
            "range": "± 8405",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22096651,
            "range": "± 54252",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 100703,
            "range": "± 1044",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 526,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 597,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 2665565,
            "range": "± 13093",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1790666814,
            "range": "± 20682986",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 363629,
            "range": "± 7917",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 238564,
            "range": "± 1953",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 105911,
            "range": "± 1451",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 363767,
            "range": "± 8927",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 259000,
            "range": "± 2726",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 105974,
            "range": "± 1262",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 262032,
            "range": "± 9394",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 104186,
            "range": "± 2365",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 531,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 620,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 408811,
            "range": "± 20963",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 11055428,
            "range": "± 114946",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2734639,
            "range": "± 50412",
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
          "id": "709ca278fff3be02a71a5a73c2f0e122dd2660c1",
          "message": "bench(criterion): record v0.26.14 results [skip ci]",
          "timestamp": "2026-08-26T16:53:26Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/709ca278fff3be02a71a5a73c2f0e122dd2660c1"
        },
        "date": 1787765214851,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42325464,
            "range": "± 1621485",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 126859401,
            "range": "± 2602266",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 273548011,
            "range": "± 4225137",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 838713443,
            "range": "± 11003233",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1238961168210,
            "range": "± 2603963022",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 793909697,
            "range": "± 1469926",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 285263119,
            "range": "± 2978549",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3323544,
            "range": "± 66089",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 421028696,
            "range": "± 1800388",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2200796,
            "range": "± 10054",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3745,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4442,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 473445466,
            "range": "± 4029286",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 286927449277,
            "range": "± 79767707",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 25967575196,
            "range": "± 121121280",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 41186927,
            "range": "± 58720",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15770409,
            "range": "± 96538",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 204251,
            "range": "± 829",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 41170769,
            "range": "± 549110",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 16049754,
            "range": "± 20833",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 202945,
            "range": "± 1133",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 24852815,
            "range": "± 784916",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 100705,
            "range": "± 838",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 525,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 587,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 2748496,
            "range": "± 20329",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1749213863,
            "range": "± 17754832",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 362896,
            "range": "± 9625",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 238350,
            "range": "± 2354",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 102346,
            "range": "± 3773",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 362702,
            "range": "± 5984",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 260492,
            "range": "± 2993",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 102664,
            "range": "± 1701",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 261935,
            "range": "± 8038",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 100687,
            "range": "± 1506",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 539,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 607,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 410752,
            "range": "± 13181",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 11071294,
            "range": "± 87301",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2731551,
            "range": "± 47738",
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
          "id": "709ca278fff3be02a71a5a73c2f0e122dd2660c1",
          "message": "bench(criterion): record v0.26.14 results [skip ci]",
          "timestamp": "2026-08-26T16:53:26Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/709ca278fff3be02a71a5a73c2f0e122dd2660c1"
        },
        "date": 1787874479178,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 47277328,
            "range": "± 2663366",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 138032251,
            "range": "± 4680507",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 309412894,
            "range": "± 7182385",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 912337124,
            "range": "± 18253385",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1282076640400,
            "range": "± 1531955985",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 796470267,
            "range": "± 12396828",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 300026377,
            "range": "± 1508206",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3372325,
            "range": "± 87577",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 379287288,
            "range": "± 1949613",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2302432,
            "range": "± 28854",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4148,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4902,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 558344478,
            "range": "± 8842885",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 351235322675,
            "range": "± 102249579",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 28422026466,
            "range": "± 164004677",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39746609,
            "range": "± 60888",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 16240160,
            "range": "± 54614",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 250599,
            "range": "± 36213",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39895498,
            "range": "± 120218",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 16458272,
            "range": "± 23411",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 263646,
            "range": "± 35906",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22390909,
            "range": "± 590011",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 97109,
            "range": "± 1567",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 480,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 573,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 2925834,
            "range": "± 78627",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 2367332574,
            "range": "± 5110791",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 373793,
            "range": "± 47032",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 245435,
            "range": "± 14779",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 105104,
            "range": "± 5037",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 377883,
            "range": "± 36198",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 258694,
            "range": "± 6557",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 105597,
            "range": "± 4379",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 250211,
            "range": "± 30781",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 99201,
            "range": "± 12666",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 470,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 535,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 506326,
            "range": "± 36794",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 15325453,
            "range": "± 638711",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 3040561,
            "range": "± 680340",
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
          "id": "0d1d770626eff8b1e6cfa2233b410be498df5cc3",
          "message": "ci(iai): add deterministic iai-callgrind instruction-count gate\n\nMirror the smartcore-benches iai setup: Linux-only iai-callgrind benches\ncovering the build/search/spectral hot paths at the small end of the\ncriterion grid, an iai CI job (valgrind + runner install, NDJSON -> JSON\nconversion via scripts/iai_to_benchmark_action.py, customSmallerIsBetter\nchart, 120% fail-on-alert gate posting a status check back to\narrowspace-rs), and AGENTS.md docs for the runner binary and NDJSON\nsemantics.\n\nCriterion wall-clock is noisy on shared runners (20-60% variance); the\ndeterministic instruction-count gate is the regression signal that can\nfail a merge.",
          "timestamp": "2026-08-29T00:00:47Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/0d1d770626eff8b1e6cfa2233b410be498df5cc3"
        },
        "date": 1787963539597,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 41390564,
            "range": "± 1849799",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 124292079,
            "range": "± 2465313",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 270197914,
            "range": "± 4189005",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 819444667,
            "range": "± 9937377",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1232159363822,
            "range": "± 12332119116",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 855240285,
            "range": "± 12108201",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 304645116,
            "range": "± 1212986",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2938841,
            "range": "± 19246",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 472590535,
            "range": "± 10328414",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2147839,
            "range": "± 14001",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4707,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5393,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 467873543,
            "range": "± 5805812",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 271896747582,
            "range": "± 463706435",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 26511546716,
            "range": "± 178283021",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 41163323,
            "range": "± 25260",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15696029,
            "range": "± 34079",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 206831,
            "range": "± 1906",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 41144903,
            "range": "± 36040",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15974058,
            "range": "± 237166",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 208912,
            "range": "± 2531",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 24709721,
            "range": "± 46727",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 104295,
            "range": "± 556",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 533,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 590,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 3075234,
            "range": "± 34609",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1928683020,
            "range": "± 37965050",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 366352,
            "range": "± 11364",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 243876,
            "range": "± 1725",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 103477,
            "range": "± 1666",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 366817,
            "range": "± 8441",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 264436,
            "range": "± 3729",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 103649,
            "range": "± 2143",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 269424,
            "range": "± 9217",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 101624,
            "range": "± 1438",
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
            "value": 505,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 409507,
            "range": "± 11787",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 11080170,
            "range": "± 96366",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2754190,
            "range": "± 44759",
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
          "id": "0d1d770626eff8b1e6cfa2233b410be498df5cc3",
          "message": "ci(iai): add deterministic iai-callgrind instruction-count gate\n\nMirror the smartcore-benches iai setup: Linux-only iai-callgrind benches\ncovering the build/search/spectral hot paths at the small end of the\ncriterion grid, an iai CI job (valgrind + runner install, NDJSON -> JSON\nconversion via scripts/iai_to_benchmark_action.py, customSmallerIsBetter\nchart, 120% fail-on-alert gate posting a status check back to\narrowspace-rs), and AGENTS.md docs for the runner binary and NDJSON\nsemantics.\n\nCriterion wall-clock is noisy on shared runners (20-60% variance); the\ndeterministic instruction-count gate is the regression signal that can\nfail a merge.",
          "timestamp": "2026-08-29T01:01:55+01:00",
          "tree_id": "b74cefcca44b3fc79b549c8a7cd49b16ae12b51d",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/0d1d770626eff8b1e6cfa2233b410be498df5cc3"
        },
        "date": 1787976466544,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 32334293,
            "range": "± 849764",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 95974749,
            "range": "± 2488196",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 208899565,
            "range": "± 3350293",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 642044168,
            "range": "± 7353265",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 952361228912,
            "range": "± 1728934833",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 659324120,
            "range": "± 12377946",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 237312285,
            "range": "± 467614",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2579130,
            "range": "± 108841",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 367587641,
            "range": "± 2000682",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1662084,
            "range": "± 2601",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3635,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4189,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 360760402,
            "range": "± 6505357",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 210601635520,
            "range": "± 483494966",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 20618748446,
            "range": "± 161921156",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 32018294,
            "range": "± 32193",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 12178598,
            "range": "± 21741",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 170323,
            "range": "± 2260",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 32038209,
            "range": "± 17963",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 12385004,
            "range": "± 34628",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 170022,
            "range": "± 1511",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 19578535,
            "range": "± 2652446",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 81130,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 405,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 453,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 2126348,
            "range": "± 16517",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1447378552,
            "range": "± 5637571",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 287128,
            "range": "± 6953",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 191099,
            "range": "± 1451",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 83320,
            "range": "± 923",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 287648,
            "range": "± 6034",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 206790,
            "range": "± 4506",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 82881,
            "range": "± 1358",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 213953,
            "range": "± 6916",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 81864,
            "range": "± 1088",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 344,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 395,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 320374,
            "range": "± 10456",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8577690,
            "range": "± 95885",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2144786,
            "range": "± 34547",
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
          "id": "0d1d770626eff8b1e6cfa2233b410be498df5cc3",
          "message": "ci(iai): add deterministic iai-callgrind instruction-count gate\n\nMirror the smartcore-benches iai setup: Linux-only iai-callgrind benches\ncovering the build/search/spectral hot paths at the small end of the\ncriterion grid, an iai CI job (valgrind + runner install, NDJSON -> JSON\nconversion via scripts/iai_to_benchmark_action.py, customSmallerIsBetter\nchart, 120% fail-on-alert gate posting a status check back to\narrowspace-rs), and AGENTS.md docs for the runner binary and NDJSON\nsemantics.\n\nCriterion wall-clock is noisy on shared runners (20-60% variance); the\ndeterministic instruction-count gate is the regression signal that can\nfail a merge.",
          "timestamp": "2026-08-29T00:00:47Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/0d1d770626eff8b1e6cfa2233b410be498df5cc3"
        },
        "date": 1788027280521,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42552483,
            "range": "± 3247922",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 127246417,
            "range": "± 2357683",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 282371155,
            "range": "± 4048871",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 881203126,
            "range": "± 11433723",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1217986308482,
            "range": "± 1914748953",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 789678870,
            "range": "± 8953279",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 296156646,
            "range": "± 2843214",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3066394,
            "range": "± 90543",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 426893531,
            "range": "± 19500758",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2104417,
            "range": "± 5070",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4462,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5985,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 472566444,
            "range": "± 2332124",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 276816183996,
            "range": "± 94759604",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 28480047062,
            "range": "± 173148677",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 42602448,
            "range": "± 233579",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 16834381,
            "range": "± 228815",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 218659,
            "range": "± 4525",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 42558785,
            "range": "± 453824",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 17439847,
            "range": "± 39496",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 211855,
            "range": "± 4938",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 25919709,
            "range": "± 2104112",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 113703,
            "range": "± 643",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 475,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 546,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 2788757,
            "range": "± 42796",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 2145754843,
            "range": "± 36392750",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 373694,
            "range": "± 10087",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 252034,
            "range": "± 4198",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 117401,
            "range": "± 2478",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 365848,
            "range": "± 8000",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 282529,
            "range": "± 5487",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 117092,
            "range": "± 3166",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 274148,
            "range": "± 9494",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 114978,
            "range": "± 1677",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 421,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 480,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 441680,
            "range": "± 16274",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 13062892,
            "range": "± 411074",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2728460,
            "range": "± 168231",
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
          "id": "0d1d770626eff8b1e6cfa2233b410be498df5cc3",
          "message": "ci(iai): add deterministic iai-callgrind instruction-count gate\n\nMirror the smartcore-benches iai setup: Linux-only iai-callgrind benches\ncovering the build/search/spectral hot paths at the small end of the\ncriterion grid, an iai CI job (valgrind + runner install, NDJSON -> JSON\nconversion via scripts/iai_to_benchmark_action.py, customSmallerIsBetter\nchart, 120% fail-on-alert gate posting a status check back to\narrowspace-rs), and AGENTS.md docs for the runner binary and NDJSON\nsemantics.\n\nCriterion wall-clock is noisy on shared runners (20-60% variance); the\ndeterministic instruction-count gate is the regression signal that can\nfail a merge.",
          "timestamp": "2026-08-29T00:00:47Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/0d1d770626eff8b1e6cfa2233b410be498df5cc3"
        },
        "date": 1788112227965,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42699535,
            "range": "± 2008538",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 126470384,
            "range": "± 3431840",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 280562806,
            "range": "± 4008134",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 874278131,
            "range": "± 10181037",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1212786790024,
            "range": "± 2252110751",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 784211342,
            "range": "± 46971428",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 311862352,
            "range": "± 3718885",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3163147,
            "range": "± 72769",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 428987686,
            "range": "± 11206580",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2116942,
            "range": "± 8594",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4467,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5193,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 472169592,
            "range": "± 944028",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 276659863009,
            "range": "± 122482010",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 28067705373,
            "range": "± 227803969",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 41691469,
            "range": "± 133796",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 17001332,
            "range": "± 333819",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 300624,
            "range": "± 31684",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 41696454,
            "range": "± 176452",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 17226863,
            "range": "± 180971",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 215104,
            "range": "± 14402",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 24889990,
            "range": "± 34451",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 113456,
            "range": "± 856",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 479,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 552,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 2801533,
            "range": "± 10621",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 2176850322,
            "range": "± 4171042",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 371425,
            "range": "± 12957",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 257433,
            "range": "± 2673",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 120515,
            "range": "± 2091",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 375204,
            "range": "± 9251",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 277238,
            "range": "± 4058",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 120592,
            "range": "± 2669",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 276159,
            "range": "± 9676",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 116678,
            "range": "± 2098",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 417,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 482,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 445922,
            "range": "± 17059",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 13075593,
            "range": "± 398162",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2702848,
            "range": "± 77498",
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
          "id": "0d1d770626eff8b1e6cfa2233b410be498df5cc3",
          "message": "ci(iai): add deterministic iai-callgrind instruction-count gate\n\nMirror the smartcore-benches iai setup: Linux-only iai-callgrind benches\ncovering the build/search/spectral hot paths at the small end of the\ncriterion grid, an iai CI job (valgrind + runner install, NDJSON -> JSON\nconversion via scripts/iai_to_benchmark_action.py, customSmallerIsBetter\nchart, 120% fail-on-alert gate posting a status check back to\narrowspace-rs), and AGENTS.md docs for the runner binary and NDJSON\nsemantics.\n\nCriterion wall-clock is noisy on shared runners (20-60% variance); the\ndeterministic instruction-count gate is the regression signal that can\nfail a merge.",
          "timestamp": "2026-08-29T00:00:47Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/0d1d770626eff8b1e6cfa2233b410be498df5cc3"
        },
        "date": 1788206963554,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42775997,
            "range": "± 980587",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 126933751,
            "range": "± 3679422",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 281681210,
            "range": "± 4696462",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 876933275,
            "range": "± 13391203",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1229815271750,
            "range": "± 1295019101",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 780835073,
            "range": "± 1039274",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 299428343,
            "range": "± 3847565",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2834609,
            "range": "± 36144",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 425201869,
            "range": "± 2391942",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2120487,
            "range": "± 14349",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4417,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5059,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 469160338,
            "range": "± 630627",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 276098790454,
            "range": "± 83579859",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 27388373170,
            "range": "± 373668854",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 41076255,
            "range": "± 40294",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 16427462,
            "range": "± 221906",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 214239,
            "range": "± 3172",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 41184068,
            "range": "± 246021",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 16749642,
            "range": "± 148815",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 222392,
            "range": "± 8155",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 24548757,
            "range": "± 114145",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 112937,
            "range": "± 1122",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 488,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 559,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 2800368,
            "range": "± 56361",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 2136688863,
            "range": "± 29291745",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 395359,
            "range": "± 20776",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 262254,
            "range": "± 21532",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 122111,
            "range": "± 5875",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 391473,
            "range": "± 16822",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 282314,
            "range": "± 15358",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 125742,
            "range": "± 6447",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 295024,
            "range": "± 9894",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 117513,
            "range": "± 5377",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 418,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 481,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 454409,
            "range": "± 19285",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 13097242,
            "range": "± 113830",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2808414,
            "range": "± 160136",
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
          "id": "0d1d770626eff8b1e6cfa2233b410be498df5cc3",
          "message": "ci(iai): add deterministic iai-callgrind instruction-count gate\n\nMirror the smartcore-benches iai setup: Linux-only iai-callgrind benches\ncovering the build/search/spectral hot paths at the small end of the\ncriterion grid, an iai CI job (valgrind + runner install, NDJSON -> JSON\nconversion via scripts/iai_to_benchmark_action.py, customSmallerIsBetter\nchart, 120% fail-on-alert gate posting a status check back to\narrowspace-rs), and AGENTS.md docs for the runner binary and NDJSON\nsemantics.\n\nCriterion wall-clock is noisy on shared runners (20-60% variance); the\ndeterministic instruction-count gate is the regression signal that can\nfail a merge.",
          "timestamp": "2026-08-29T00:00:47Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/0d1d770626eff8b1e6cfa2233b410be498df5cc3"
        },
        "date": 1788284458305,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42553750,
            "range": "± 2229469",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 127054915,
            "range": "± 3738688",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 281343128,
            "range": "± 4214691",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 878994181,
            "range": "± 12686681",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1232125684510,
            "range": "± 3372118699",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 786232933,
            "range": "± 20419274",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 303777415,
            "range": "± 2569426",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3044475,
            "range": "± 76827",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 430914396,
            "range": "± 15849016",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2116426,
            "range": "± 15530",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4455,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5158,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 480593700,
            "range": "± 4705927",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 276195010543,
            "range": "± 59587513",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 28271741555,
            "range": "± 213601439",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 42082185,
            "range": "± 102396",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 16470217,
            "range": "± 132413",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 218776,
            "range": "± 6372",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 41995845,
            "range": "± 135211",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 16904216,
            "range": "± 150464",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 217008,
            "range": "± 4185",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 29116873,
            "range": "± 1843062",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 112748,
            "range": "± 950",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 494,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 563,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 2801364,
            "range": "± 66779",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 2130768778,
            "range": "± 18715181",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 369580,
            "range": "± 12084",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 255481,
            "range": "± 2889",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 120092,
            "range": "± 1527",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 363162,
            "range": "± 13803",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 274583,
            "range": "± 6741",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 120286,
            "range": "± 2970",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 267189,
            "range": "± 10887",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 115085,
            "range": "± 1973",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 418,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 482,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 445119,
            "range": "± 14706",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 13034993,
            "range": "± 101048",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2669503,
            "range": "± 41782",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}