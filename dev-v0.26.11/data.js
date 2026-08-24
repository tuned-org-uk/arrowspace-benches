window.BENCHMARK_DATA = {
  "lastUpdate": 1787571793000,
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
      }
    ]
  }
}