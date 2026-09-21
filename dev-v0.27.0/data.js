window.BENCHMARK_DATA = {
  "lastUpdate": 1790010588446,
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
        "date": 1788327611923,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 41142536,
            "range": "± 853938",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 123502852,
            "range": "± 3155721",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 265771941,
            "range": "± 3790497",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 812278900,
            "range": "± 10124541",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1219356607993,
            "range": "± 1070614666",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 854747923,
            "range": "± 1566284",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 305653808,
            "range": "± 964759",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2923439,
            "range": "± 11798",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 477686128,
            "range": "± 2780508",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2144972,
            "range": "± 3268",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3853,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4557,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 153469302,
            "range": "± 1756971",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 306641296574,
            "range": "± 8875742298",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 26649757654,
            "range": "± 251193085",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39174262,
            "range": "± 82553",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14757583,
            "range": "± 144545",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 364312,
            "range": "± 20311",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39163169,
            "range": "± 80447",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15105079,
            "range": "± 72919",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 362161,
            "range": "± 29533",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22084375,
            "range": "± 67043",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 115779,
            "range": "± 3942",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 396,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 467,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1043616,
            "range": "± 27143",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1863848965,
            "range": "± 97494035",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 381900,
            "range": "± 12049",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 265871,
            "range": "± 18794",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 116766,
            "range": "± 6023",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 377844,
            "range": "± 30390",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 270214,
            "range": "± 13974",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 113036,
            "range": "± 6267",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 277762,
            "range": "± 13097",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 103634,
            "range": "± 1092",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 466,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 538,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 408436,
            "range": "± 12226",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 10914537,
            "range": "± 203678",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1078739,
            "range": "± 44724",
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
          "id": "01fec2ba7a72ebf05c02b084c0b84b64726059a4",
          "message": "bench(criterion): record v0.27.0 results [skip ci]",
          "timestamp": "2026-09-02T05:28:07Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/01fec2ba7a72ebf05c02b084c0b84b64726059a4"
        },
        "date": 1788362954996,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 28129697,
            "range": "± 2148330",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 75292513,
            "range": "± 1736059",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 182394375,
            "range": "± 2705860",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 528747459,
            "range": "± 21747068",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 797221782996,
            "range": "± 3845877761",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 627429130,
            "range": "± 20644864",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 204702241,
            "range": "± 9109708",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2040362,
            "range": "± 162433",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 373826997,
            "range": "± 2104800",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1553558,
            "range": "± 48415",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3537,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3717,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 96046507,
            "range": "± 429563",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 201533223738,
            "range": "± 1276710580",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 17821336358,
            "range": "± 508319485",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 25616568,
            "range": "± 1042626",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 9298496,
            "range": "± 145966",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 190163,
            "range": "± 6586",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 25592712,
            "range": "± 898443",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 9374574,
            "range": "± 315754",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 195857,
            "range": "± 4342",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 14430684,
            "range": "± 504185",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 70179,
            "range": "± 2709",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 242,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 245,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 692667,
            "range": "± 25702",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1313604612,
            "range": "± 19081845",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 229895,
            "range": "± 11722",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 180684,
            "range": "± 13844",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 72414,
            "range": "± 10422",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 228465,
            "range": "± 15068",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 199493,
            "range": "± 5591",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 72687,
            "range": "± 4943",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 176686,
            "range": "± 3903",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 70442,
            "range": "± 4280",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 289,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 309,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 302540,
            "range": "± 21204",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8486249,
            "range": "± 572942",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 760477,
            "range": "± 46936",
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
          "id": "27a748421a6f902b6bab847120c6552a6b456b2d",
          "message": "bench(criterion): record v0.27.3 results [skip ci]",
          "timestamp": "2026-09-02T17:16:31Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/27a748421a6f902b6bab847120c6552a6b456b2d"
        },
        "date": 1788455266722,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 41318648,
            "range": "± 1527707",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 122604541,
            "range": "± 2410247",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 267482703,
            "range": "± 3603972",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 814685146,
            "range": "± 11098440",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1205656119269,
            "range": "± 1299961542",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 853617942,
            "range": "± 8679193",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 305714998,
            "range": "± 1649833",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3179987,
            "range": "± 44788",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 472921542,
            "range": "± 5674329",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2145877,
            "range": "± 19991",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3747,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4481,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 153915870,
            "range": "± 1481105",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 273570891553,
            "range": "± 2236827196",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 26650205417,
            "range": "± 277691363",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39611013,
            "range": "± 676634",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14621369,
            "range": "± 50523",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 229540,
            "range": "± 12824",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39568912,
            "range": "± 229760",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14901742,
            "range": "± 466763",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 232378,
            "range": "± 11835",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22216267,
            "range": "± 128312",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 100810,
            "range": "± 1035",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 390,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 463,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1000038,
            "range": "± 11496",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1785614960,
            "range": "± 27332018",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 367994,
            "range": "± 7816",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 242199,
            "range": "± 5653",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 104041,
            "range": "± 3176",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 371528,
            "range": "± 8760",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 261181,
            "range": "± 1755",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 104184,
            "range": "± 2573",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 274237,
            "range": "± 10066",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 103000,
            "range": "± 3676",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 466,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 527,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 405235,
            "range": "± 12323",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 10916958,
            "range": "± 206784",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1074577,
            "range": "± 51311",
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
          "id": "63641baeae247938667babf41b919172574139ab",
          "message": "ci: matrix adds v0.28.0 pin, drops v0.26.12; arrowspace req floored to >=0.26.14",
          "timestamp": "2026-09-04T14:45:36Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/63641baeae247938667babf41b919172574139ab"
        },
        "date": 1788541790529,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 40984284,
            "range": "± 935877",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 121953573,
            "range": "± 2267678",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 265177972,
            "range": "± 3785378",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 813074253,
            "range": "± 11165711",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1192114381917,
            "range": "± 2675524851",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 798249987,
            "range": "± 2936813",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 285494770,
            "range": "± 2224500",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3218961,
            "range": "± 62531",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 421256550,
            "range": "± 5698407",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2177497,
            "range": "± 9957",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4687,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5395,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 153271896,
            "range": "± 280857",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 287503071887,
            "range": "± 85294563",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 26530198705,
            "range": "± 300868355",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39761850,
            "range": "± 240293",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 16296532,
            "range": "± 79446",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 304092,
            "range": "± 27239",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39878061,
            "range": "± 753032",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 16568437,
            "range": "± 131785",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 252436,
            "range": "± 20101",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 25021073,
            "range": "± 930798",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 100690,
            "range": "± 1678",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 392,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 468,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1018584,
            "range": "± 10386",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1707613897,
            "range": "± 39258673",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 363411,
            "range": "± 8610",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 238927,
            "range": "± 2598",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 104228,
            "range": "± 5667",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 363133,
            "range": "± 10736",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 259590,
            "range": "± 2260",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 104791,
            "range": "± 1301",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 262443,
            "range": "± 7390",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 102380,
            "range": "± 1738",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 466,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 545,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 408950,
            "range": "± 28992",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 10914969,
            "range": "± 122093",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1088054,
            "range": "± 33769",
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
          "id": "63641baeae247938667babf41b919172574139ab",
          "message": "ci: matrix adds v0.28.0 pin, drops v0.26.12; arrowspace req floored to >=0.26.14",
          "timestamp": "2026-09-04T15:45:47+01:00",
          "tree_id": "5fbb98c49dd698574dcac21dd716761d223d6718",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/63641baeae247938667babf41b919172574139ab"
        },
        "date": 1788551368179,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 41827041,
            "range": "± 1810317",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 125152042,
            "range": "± 2475128",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 272080864,
            "range": "± 4138060",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 844614577,
            "range": "± 11225764",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1163545458590,
            "range": "± 4689076855",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 738797218,
            "range": "± 11615016",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 272654049,
            "range": "± 1435448",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2939610,
            "range": "± 40694",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 379776774,
            "range": "± 5288747",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2169927,
            "range": "± 18465",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4473,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5148,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 145689724,
            "range": "± 2222890",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 289727274594,
            "range": "± 124979180",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 28585713545,
            "range": "± 211140889",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39543547,
            "range": "± 1854418",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 16159694,
            "range": "± 101946",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 218343,
            "range": "± 5333",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39548651,
            "range": "± 51591",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 16376928,
            "range": "± 125191",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 220468,
            "range": "± 6602",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 27474442,
            "range": "± 1878314",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 109920,
            "range": "± 1071",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 356,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 426,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1000413,
            "range": "± 10107",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1977381250,
            "range": "± 6539194",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 356443,
            "range": "± 10070",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 242100,
            "range": "± 3473",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 114609,
            "range": "± 3690",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 349681,
            "range": "± 9782",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 262163,
            "range": "± 4749",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 113793,
            "range": "± 2395",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 255557,
            "range": "± 7534",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 109805,
            "range": "± 2252",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 442,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 511,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 432180,
            "range": "± 18903",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 12262923,
            "range": "± 98548",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1027405,
            "range": "± 40346",
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
          "id": "0dd514dfd9bb14003f4c27f26b0b0cc98d00562c",
          "message": "bench(criterion): record v0.28.0 results [skip ci]",
          "timestamp": "2026-09-04T18:04:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/0dd514dfd9bb14003f4c27f26b0b0cc98d00562c"
        },
        "date": 1788624681101,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42243872,
            "range": "± 1263179",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 124923467,
            "range": "± 2662203",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 272704259,
            "range": "± 3859094",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 851786191,
            "range": "± 13733049",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1150307740618,
            "range": "± 2951775197",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 737518559,
            "range": "± 8519491",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 264291485,
            "range": "± 953613",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3155237,
            "range": "± 69532",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 384875727,
            "range": "± 18679053",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2164564,
            "range": "± 15069",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4440,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5148,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 144688721,
            "range": "± 376746",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 289496810404,
            "range": "± 86328985",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 27711485420,
            "range": "± 244570630",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39482272,
            "range": "± 174782",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15053742,
            "range": "± 82644",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 231314,
            "range": "± 9326",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39687354,
            "range": "± 249057",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15311818,
            "range": "± 62658",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 225768,
            "range": "± 6580",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 23498114,
            "range": "± 129874",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 109469,
            "range": "± 958",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 348,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 419,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1048368,
            "range": "± 14180",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1986665054,
            "range": "± 4175683",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 360335,
            "range": "± 9391",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 243168,
            "range": "± 2548",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 116515,
            "range": "± 2652",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 363701,
            "range": "± 7330",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 262468,
            "range": "± 2394",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 114990,
            "range": "± 2586",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 273368,
            "range": "± 9995",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 111782,
            "range": "± 2622",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 448,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 506,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 427700,
            "range": "± 17465",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 12264106,
            "range": "± 93001",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1041510,
            "range": "± 65541",
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
          "id": "0dd514dfd9bb14003f4c27f26b0b0cc98d00562c",
          "message": "bench(criterion): record v0.28.0 results [skip ci]",
          "timestamp": "2026-09-04T18:04:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/0dd514dfd9bb14003f4c27f26b0b0cc98d00562c"
        },
        "date": 1788713471328,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42707623,
            "range": "± 1858365",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 127238994,
            "range": "± 2629031",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 278848842,
            "range": "± 6744380",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 872599799,
            "range": "± 11042232",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1226834517117,
            "range": "± 1841317249",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 825709769,
            "range": "± 22844470",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 327071494,
            "range": "± 2793372",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3613786,
            "range": "± 87364",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 486462933,
            "range": "± 30829205",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2214944,
            "range": "± 11643",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4437,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5121,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 153469337,
            "range": "± 816992",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 296011032821,
            "range": "± 122846796",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 28649664862,
            "range": "± 235169476",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 37619987,
            "range": "± 442391",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14562206,
            "range": "± 62082",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 255842,
            "range": "± 20761",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37583951,
            "range": "± 602756",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14832180,
            "range": "± 109344",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 296854,
            "range": "± 18778",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22198415,
            "range": "± 143587",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 105828,
            "range": "± 1159",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 358,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 430,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1085593,
            "range": "± 13262",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1894622992,
            "range": "± 7410571",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 392437,
            "range": "± 13228",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 253259,
            "range": "± 2576",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 114640,
            "range": "± 2541",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 393181,
            "range": "± 9303",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 272823,
            "range": "± 3742",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 113777,
            "range": "± 2371",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 296845,
            "range": "± 12001",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 109487,
            "range": "± 2268",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 448,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 501,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 436398,
            "range": "± 24022",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 12160979,
            "range": "± 145288",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1109456,
            "range": "± 46143",
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1788806487329,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42279299,
            "range": "± 1149594",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 125860030,
            "range": "± 3288375",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 275079953,
            "range": "± 4637159",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 864526947,
            "range": "± 10766363",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1239337242617,
            "range": "± 4631123746",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 913052121,
            "range": "± 54281597",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 336965256,
            "range": "± 1841684",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2887549,
            "range": "± 30858",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 464334885,
            "range": "± 635119",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2192330,
            "range": "± 25630",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4383,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5063,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 150872917,
            "range": "± 741504",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 295497414525,
            "range": "± 68943352",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 28779968846,
            "range": "± 219208131",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 38553490,
            "range": "± 48975",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15552526,
            "range": "± 99468",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 418404,
            "range": "± 41680",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 38612414,
            "range": "± 93289",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15712403,
            "range": "± 117952",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 409445,
            "range": "± 66060",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 25437984,
            "range": "± 2276414",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 104892,
            "range": "± 918",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 360,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 429,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1070964,
            "range": "± 19809",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1896399774,
            "range": "± 9036541",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 368234,
            "range": "± 10561",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 250218,
            "range": "± 3393",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 113227,
            "range": "± 1774",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 381763,
            "range": "± 12038",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 274999,
            "range": "± 6848",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 114605,
            "range": "± 2173",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 272691,
            "range": "± 9822",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 108719,
            "range": "± 1912",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 449,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 502,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 439520,
            "range": "± 19712",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 12196502,
            "range": "± 91453",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1146765,
            "range": "± 41299",
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1788888010388,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42277342,
            "range": "± 1137906",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 126895747,
            "range": "± 3170261",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 279152964,
            "range": "± 4745198",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 878113535,
            "range": "± 13665474",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1230703551542,
            "range": "± 2855573853",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 820739111,
            "range": "± 45077732",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 320876556,
            "range": "± 6530214",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3409679,
            "range": "± 55982",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 570484983,
            "range": "± 44102489",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2199986,
            "range": "± 10186",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4409,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5110,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 152222872,
            "range": "± 999241",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 295711673391,
            "range": "± 110844583",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 28920110199,
            "range": "± 484157305",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 38272531,
            "range": "± 373129",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14497961,
            "range": "± 38592",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 208466,
            "range": "± 6094",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 38255672,
            "range": "± 75018",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14715184,
            "range": "± 45208",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 208127,
            "range": "± 7745",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 21583967,
            "range": "± 42655",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 106985,
            "range": "± 1246",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 371,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 445,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1052116,
            "range": "± 17816",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1893409274,
            "range": "± 3218525",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 372053,
            "range": "± 16910",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 263893,
            "range": "± 4764",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 114709,
            "range": "± 2363",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 379945,
            "range": "± 18348",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 287517,
            "range": "± 4329",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 114553,
            "range": "± 2535",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 285492,
            "range": "± 12440",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 109392,
            "range": "± 2380",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 449,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 502,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 430111,
            "range": "± 17367",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 12189255,
            "range": "± 117254",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1106967,
            "range": "± 39724",
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1788974309833,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 41981881,
            "range": "± 1044650",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 125516240,
            "range": "± 2921513",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 270476642,
            "range": "± 3903025",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 831606033,
            "range": "± 10959605",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1194869123160,
            "range": "± 2594851572",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 827925998,
            "range": "± 547305",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 284604420,
            "range": "± 3504399",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3077911,
            "range": "± 63018",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 414208338,
            "range": "± 442675",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2144538,
            "range": "± 2193",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3760,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4485,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 155752160,
            "range": "± 2810291",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 273000757889,
            "range": "± 1586357959",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 26145910983,
            "range": "± 234800404",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39139750,
            "range": "± 189874",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14592443,
            "range": "± 18306",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 209156,
            "range": "± 3027",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39127749,
            "range": "± 22378",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14894551,
            "range": "± 35102",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 212444,
            "range": "± 3950",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 24964242,
            "range": "± 1256485",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 103953,
            "range": "± 644",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 455,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 530,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1036763,
            "range": "± 13768",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1870502820,
            "range": "± 67727673",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 378503,
            "range": "± 10214",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 246621,
            "range": "± 2116",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 101840,
            "range": "± 1360",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 381811,
            "range": "± 12526",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 267210,
            "range": "± 1957",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 101598,
            "range": "± 1106",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 283191,
            "range": "± 9959",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 99922,
            "range": "± 2547",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 466,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 528,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 406914,
            "range": "± 11043",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 11010736,
            "range": "± 131561",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1097383,
            "range": "± 39239",
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789053927236,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 26693405,
            "range": "± 1150606",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 87975488,
            "range": "± 2040983",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 175981879,
            "range": "± 3628945",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 595125986,
            "range": "± 10121611",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 770139106699,
            "range": "± 3532495714",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 401024750,
            "range": "± 11344656",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 148522857,
            "range": "± 1681693",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2418352,
            "range": "± 36989",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 241125873,
            "range": "± 15959455",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1388801,
            "range": "± 7374",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 1920,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 2237,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 85960497,
            "range": "± 657650",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 171454647047,
            "range": "± 433728727",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 17025864269,
            "range": "± 92750991",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 20772539,
            "range": "± 354005",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 8159204,
            "range": "± 64823",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 132202,
            "range": "± 2098",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 20803776,
            "range": "± 348156",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 8550177,
            "range": "± 284982",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 159001,
            "range": "± 17473",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 12797430,
            "range": "± 333927",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 71542,
            "range": "± 2511",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 223,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 235,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 598716,
            "range": "± 5368",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1287756405,
            "range": "± 8003261",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 217928,
            "range": "± 11499",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 148042,
            "range": "± 4550",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 71160,
            "range": "± 1841",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 217682,
            "range": "± 4875",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 159639,
            "range": "± 4326",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 70561,
            "range": "± 866",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 172232,
            "range": "± 4843",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 68218,
            "range": "± 2366",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 224,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 243,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 258152,
            "range": "± 10905",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 7642167,
            "range": "± 159071",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 681773,
            "range": "± 60178",
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789146373947,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42432332,
            "range": "± 1924094",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 126244878,
            "range": "± 2829610",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 276275301,
            "range": "± 4125302",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 865469768,
            "range": "± 9645545",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1182708760080,
            "range": "± 2741029878",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 743026579,
            "range": "± 8569978",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 270237042,
            "range": "± 2119799",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3486284,
            "range": "± 42614",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 396396927,
            "range": "± 1101714",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2119946,
            "range": "± 6035",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3812,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4492,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 161971545,
            "range": "± 1764927",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 260390429615,
            "range": "± 97701715",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 27009003659,
            "range": "± 212409182",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 38612820,
            "range": "± 458246",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14312583,
            "range": "± 20625",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 239707,
            "range": "± 5207",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39494403,
            "range": "± 120142",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14444289,
            "range": "± 65429",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 245038,
            "range": "± 6285",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22413451,
            "range": "± 746778",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 111096,
            "range": "± 689",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 429,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 487,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1042775,
            "range": "± 12948",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 2056206544,
            "range": "± 4590327",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 386033,
            "range": "± 17214",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 255312,
            "range": "± 4703",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 113532,
            "range": "± 2019",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 376540,
            "range": "± 7531",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 273665,
            "range": "± 10623",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 113575,
            "range": "± 2061",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 280382,
            "range": "± 10429",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 108668,
            "range": "± 2307",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 449,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 502,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 430037,
            "range": "± 20368",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 12165496,
            "range": "± 179336",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1105870,
            "range": "± 45662",
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789231009315,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 41848665,
            "range": "± 1971897",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 125426226,
            "range": "± 2899323",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 270886312,
            "range": "± 3984558",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 838768195,
            "range": "± 10262173",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1193715683672,
            "range": "± 1334196926",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 798165089,
            "range": "± 3045810",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 282418742,
            "range": "± 1604989",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3776613,
            "range": "± 155120",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 415223454,
            "range": "± 328617",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2303673,
            "range": "± 30109",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3767,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4475,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 155917568,
            "range": "± 2321986",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 271200642604,
            "range": "± 1304694105",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 26265433116,
            "range": "± 535387299",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39570009,
            "range": "± 111949",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15211324,
            "range": "± 120875",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 308588,
            "range": "± 48762",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39581694,
            "range": "± 57410",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15509120,
            "range": "± 241354",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 340356,
            "range": "± 34490",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 23066296,
            "range": "± 41797",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 125887,
            "range": "± 6639",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 438,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 511,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1101338,
            "range": "± 45874",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1852963782,
            "range": "± 63195066",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 401425,
            "range": "± 53626",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 305217,
            "range": "± 52611",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 126337,
            "range": "± 14632",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 415884,
            "range": "± 30901",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 273328,
            "range": "± 26171",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 113781,
            "range": "± 14240",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 294579,
            "range": "± 22842",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 118180,
            "range": "± 13480",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 465,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 528,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 411013,
            "range": "± 49055",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 10942613,
            "range": "± 532417",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1112420,
            "range": "± 628749",
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789321106857,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42658264,
            "range": "± 1939643",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 126791307,
            "range": "± 3314011",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 277613206,
            "range": "± 8237127",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 877295035,
            "range": "± 11239436",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1169353840301,
            "range": "± 2053240628",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 785514059,
            "range": "± 13563885",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 294059024,
            "range": "± 3071842",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3351071,
            "range": "± 38454",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 540393559,
            "range": "± 55452930",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2115782,
            "range": "± 36039",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4395,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5116,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 148293367,
            "range": "± 902357",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 276285594350,
            "range": "± 89914912",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 26494518995,
            "range": "± 302636703",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 43419500,
            "range": "± 2219618",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 16101250,
            "range": "± 93452",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 336513,
            "range": "± 25334",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 40326448,
            "range": "± 39115",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 16153000,
            "range": "± 158054",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 353147,
            "range": "± 13314",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 23119292,
            "range": "± 1458820",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 109068,
            "range": "± 653",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 427,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 486,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 958681,
            "range": "± 9527",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1955436088,
            "range": "± 20477848",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 365904,
            "range": "± 8046",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 254416,
            "range": "± 3216",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 114182,
            "range": "± 2405",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 368150,
            "range": "± 14516",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 275649,
            "range": "± 2544",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 113943,
            "range": "± 2181",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 276730,
            "range": "± 8738",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 108344,
            "range": "± 1646",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 461,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 513,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 433225,
            "range": "± 16381",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 12184373,
            "range": "± 103851",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1095319,
            "range": "± 55396",
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789409381761,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 36287586,
            "range": "± 1601222",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 114088979,
            "range": "± 2544923",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 239841205,
            "range": "± 4748010",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 810008998,
            "range": "± 14507628",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1010413323825,
            "range": "± 18322275641",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 578686781,
            "range": "± 7214851",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 214721972,
            "range": "± 2461927",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2542330,
            "range": "± 43983",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 354229493,
            "range": "± 2153163",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2007725,
            "range": "± 41578",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3725,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4090,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 125460238,
            "range": "± 2961555",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 251679946854,
            "range": "± 3858062604",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 23172366952,
            "range": "± 234169604",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 28518442,
            "range": "± 124378",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 10342750,
            "range": "± 75558",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 190070,
            "range": "± 2756",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 28470052,
            "range": "± 238712",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 10597748,
            "range": "± 63957",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 192317,
            "range": "± 3887",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 18343573,
            "range": "± 107190",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 84626,
            "range": "± 667",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 349,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 372,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 795428,
            "range": "± 9865",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1665069740,
            "range": "± 7930757",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 283142,
            "range": "± 4775",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 201937,
            "range": "± 2774",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 87440,
            "range": "± 1304",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 283609,
            "range": "± 3996",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 214318,
            "range": "± 2345",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 88122,
            "range": "± 1866",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 223869,
            "range": "± 5246",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 86244,
            "range": "± 1788",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 384,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 406,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 391438,
            "range": "± 20753",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 10570530,
            "range": "± 266261",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 908947,
            "range": "± 79466",
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789493508028,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42240203,
            "range": "± 2116024",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 125810241,
            "range": "± 2482365",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 279473155,
            "range": "± 6029532",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 876512364,
            "range": "± 19175421",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1162506678002,
            "range": "± 6446127801",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 816941520,
            "range": "± 24140670",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 314831203,
            "range": "± 6656812",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3079804,
            "range": "± 37897",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 462618161,
            "range": "± 1536874",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2114902,
            "range": "± 9039",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4377,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5083,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 145725812,
            "range": "± 1201161",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 276400150120,
            "range": "± 73188140",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 26369784367,
            "range": "± 223358580",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 40297792,
            "range": "± 1534199",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15103308,
            "range": "± 156491",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 251354,
            "range": "± 21088",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 40081876,
            "range": "± 339374",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15356882,
            "range": "± 165658",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 239964,
            "range": "± 9306",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 27557525,
            "range": "± 1533490",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 107480,
            "range": "± 1426",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 429,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 487,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 982751,
            "range": "± 18907",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1940345079,
            "range": "± 24610631",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 357291,
            "range": "± 6616",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 238663,
            "range": "± 3650",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 113266,
            "range": "± 3778",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 356096,
            "range": "± 7426",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 255906,
            "range": "± 2649",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 114754,
            "range": "± 2228",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 261218,
            "range": "± 7140",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 110451,
            "range": "± 2413",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 453,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 504,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 433992,
            "range": "± 18631",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 12353326,
            "range": "± 79821",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1122565,
            "range": "± 72936",
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789580108503,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42026410,
            "range": "± 1634847",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 125167216,
            "range": "± 2701436",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 270473674,
            "range": "± 3739129",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 833895477,
            "range": "± 10007761",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1196801734655,
            "range": "± 1976372869",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 864067231,
            "range": "± 1234659",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 306266737,
            "range": "± 682053",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2987111,
            "range": "± 46147",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 472296341,
            "range": "± 719425",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2142947,
            "range": "± 4086",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4682,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5379,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 155155013,
            "range": "± 720417",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 271955626661,
            "range": "± 1236725817",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 26083048699,
            "range": "± 182594254",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 40165136,
            "range": "± 915188",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15204336,
            "range": "± 30097",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 208870,
            "range": "± 2665",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 41247230,
            "range": "± 930139",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15470523,
            "range": "± 73215",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 210306,
            "range": "± 2483",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 24779317,
            "range": "± 809753",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 99962,
            "range": "± 751",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 436,
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
            "value": 1029496,
            "range": "± 9408",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1734546359,
            "range": "± 13060786",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 361055,
            "range": "± 8681",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 235929,
            "range": "± 2161",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 100466,
            "range": "± 1141",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 366276,
            "range": "± 7561",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 257105,
            "range": "± 3313",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 105161,
            "range": "± 2412",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 256695,
            "range": "± 7545",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 101717,
            "range": "± 2181",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 468,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 531,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 403009,
            "range": "± 13229",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 10905266,
            "range": "± 145653",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1096239,
            "range": "± 35059",
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789660253322,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 28303617,
            "range": "± 1038613",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 76017623,
            "range": "± 3046131",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 183927672,
            "range": "± 6524672",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 528959341,
            "range": "± 18877540",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 759778652948,
            "range": "± 2907516946",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 546287404,
            "range": "± 6878970",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 191734016,
            "range": "± 5111506",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2041676,
            "range": "± 96150",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 329425520,
            "range": "± 10273731",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1600350,
            "range": "± 29131",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3241,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3460,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 96811114,
            "range": "± 1895453",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 202751579810,
            "range": "± 1007824830",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 17307644922,
            "range": "± 244540165",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 23821468,
            "range": "± 939624",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 9093637,
            "range": "± 27101",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 172990,
            "range": "± 3291",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 26411888,
            "range": "± 1744053",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 9379466,
            "range": "± 555198",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 182932,
            "range": "± 5661",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 13701516,
            "range": "± 447228",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 70842,
            "range": "± 2924",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 240,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 261,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 661392,
            "range": "± 11027",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1395913110,
            "range": "± 48758977",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 234426,
            "range": "± 9770",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 182215,
            "range": "± 5998",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 69445,
            "range": "± 2079",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 234161,
            "range": "± 14958",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 212194,
            "range": "± 8502",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 69894,
            "range": "± 3575",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 193438,
            "range": "± 12586",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 70945,
            "range": "± 4321",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 277,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 284,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 298320,
            "range": "± 21688",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8626552,
            "range": "± 474299",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 728898,
            "range": "± 46934",
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789746828815,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 31793109,
            "range": "± 783034",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 83440042,
            "range": "± 3321475",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 204386578,
            "range": "± 6392986",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 599741136,
            "range": "± 14698110",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 855811062340,
            "range": "± 11643916814",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 628832761,
            "range": "± 8884972",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 216641220,
            "range": "± 3197990",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2588631,
            "range": "± 79817",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 396211608,
            "range": "± 5126123",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1828704,
            "range": "± 14253",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3895,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4166,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 112336320,
            "range": "± 3868361",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 226310176666,
            "range": "± 2984122811",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 19720859953,
            "range": "± 365969710",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 29746553,
            "range": "± 160411",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 10477097,
            "range": "± 114297",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 207665,
            "range": "± 5166",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 29804724,
            "range": "± 140995",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 10753867,
            "range": "± 132453",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 207412,
            "range": "± 4624",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 16933707,
            "range": "± 175594",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 83224,
            "range": "± 1255",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 258,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 285,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 749104,
            "range": "± 8957",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1581895392,
            "range": "± 14543047",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 273219,
            "range": "± 7109",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 205732,
            "range": "± 6198",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 85648,
            "range": "± 2083",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 272786,
            "range": "± 8576",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 224736,
            "range": "± 8198",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 84685,
            "range": "± 1866",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 213127,
            "range": "± 7053",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 82516,
            "range": "± 2393",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 299,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 321,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 354561,
            "range": "± 41158",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 10064596,
            "range": "± 248867",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 833280,
            "range": "± 32787",
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789836559461,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42187483,
            "range": "± 988276",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 126828400,
            "range": "± 2807288",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 279278225,
            "range": "± 3737640",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 880385146,
            "range": "± 11116860",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1157819973692,
            "range": "± 1699019424",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 743602346,
            "range": "± 10738931",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 265773436,
            "range": "± 2478393",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2939512,
            "range": "± 65803",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 381438008,
            "range": "± 3683722",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2121602,
            "range": "± 10382",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4415,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5094,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 151397169,
            "range": "± 2001792",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 277746656668,
            "range": "± 387498256",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 25246770563,
            "range": "± 84145742",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 38177422,
            "range": "± 39150",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14429040,
            "range": "± 34687",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 224576,
            "range": "± 5592",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 38076254,
            "range": "± 102190",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14583338,
            "range": "± 34378",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 221444,
            "range": "± 7531",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 21526643,
            "range": "± 37469",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 107188,
            "range": "± 1070",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 352,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 424,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 965289,
            "range": "± 15237",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1984563811,
            "range": "± 10433682",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 372512,
            "range": "± 10907",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 249251,
            "range": "± 6121",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 110645,
            "range": "± 2267",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 379799,
            "range": "± 10595",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 271244,
            "range": "± 3009",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 110920,
            "range": "± 2647",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 272175,
            "range": "± 13530",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 104765,
            "range": "± 2388",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 378,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 443,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 429366,
            "range": "± 16248",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 12587500,
            "range": "± 298599",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1016298,
            "range": "± 37277",
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1789917654729,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 26171557,
            "range": "± 868943",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 83146014,
            "range": "± 3348113",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 165259591,
            "range": "± 4253918",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 555776680,
            "range": "± 11809060",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 759175083812,
            "range": "± 11540128537",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 438403944,
            "range": "± 8083270",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 171093179,
            "range": "± 3065259",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2177682,
            "range": "± 47766",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 234793218,
            "range": "± 2016846",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1336120,
            "range": "± 17965",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 1953,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 2136,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 85325219,
            "range": "± 1092803",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 167057991304,
            "range": "± 2221892900",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 17358765122,
            "range": "± 417418561",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 22023143,
            "range": "± 690179",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 7999215,
            "range": "± 89714",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 113455,
            "range": "± 8906",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 20726397,
            "range": "± 246456",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 8105023,
            "range": "± 108038",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 113621,
            "range": "± 2712",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 12030737,
            "range": "± 338069",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 65406,
            "range": "± 1372",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 223,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 226,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 561965,
            "range": "± 7708",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1188926179,
            "range": "± 10811540",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 200750,
            "range": "± 5207",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 143365,
            "range": "± 2347",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 64685,
            "range": "± 3694",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 202428,
            "range": "± 18605",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 153797,
            "range": "± 3093",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 64137,
            "range": "± 1732",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 165614,
            "range": "± 5189",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 63924,
            "range": "± 3240",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 212,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 225,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 246068,
            "range": "± 18427",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 7444921,
            "range": "± 291045",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 623838,
            "range": "± 40755",
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
          "id": "ee1fc16fef25c6acf2ce93fe714e09d9192033be",
          "message": "bench(criterion): record v0.28.1 results [skip ci]",
          "timestamp": "2026-09-07T16:39:55Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee1fc16fef25c6acf2ce93fe714e09d9192033be"
        },
        "date": 1790010587514,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 28846947,
            "range": "± 1432669",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 76890338,
            "range": "± 3255088",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 188688288,
            "range": "± 8877176",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 532837979,
            "range": "± 15791359",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 763956115414,
            "range": "± 5644098895",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 594564268,
            "range": "± 4698419",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 200605235,
            "range": "± 6153745",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2213343,
            "range": "± 134009",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 365496878,
            "range": "± 4844989",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1622146,
            "range": "± 58383",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3221,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3539,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 101372698,
            "range": "± 2964221",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 201693861768,
            "range": "± 1280773618",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 17608095004,
            "range": "± 359790164",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 26131278,
            "range": "± 608324",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 9381828,
            "range": "± 84430",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 174384,
            "range": "± 5906",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 26124676,
            "range": "± 783812",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 9586043,
            "range": "± 303778",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 176330,
            "range": "± 3793",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 14666543,
            "range": "± 320454",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 73102,
            "range": "± 3699",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 306,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 345,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 697062,
            "range": "± 5671",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1330737396,
            "range": "± 36777000",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 234698,
            "range": "± 13576",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 183385,
            "range": "± 9739",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 74454,
            "range": "± 4107",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 237540,
            "range": "± 7534",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 200513,
            "range": "± 6470",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 72505,
            "range": "± 2217",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 177553,
            "range": "± 5088",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 70890,
            "range": "± 3512",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 255,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 260,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 319194,
            "range": "± 29654",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8737706,
            "range": "± 341884",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 735478,
            "range": "± 54690",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}