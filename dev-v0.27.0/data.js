window.BENCHMARK_DATA = {
  "lastUpdate": 1788362956264,
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
      }
    ]
  }
}