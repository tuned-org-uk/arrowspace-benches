window.BENCHMARK_DATA = {
  "lastUpdate": 1789053928420,
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
      }
    ]
  }
}