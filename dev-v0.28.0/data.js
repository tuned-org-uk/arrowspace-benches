window.BENCHMARK_DATA = {
  "lastUpdate": 1788545455002,
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
          "id": "63641baeae247938667babf41b919172574139ab",
          "message": "ci: matrix adds v0.28.0 pin, drops v0.26.12; arrowspace req floored to >=0.26.14",
          "timestamp": "2026-09-04T15:45:47+01:00",
          "tree_id": "5fbb98c49dd698574dcac21dd716761d223d6718",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/63641baeae247938667babf41b919172574139ab"
        },
        "date": 1788545454405,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 14981785,
            "range": "± 801146",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 43082132,
            "range": "± 561048",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 73033592,
            "range": "± 2774418",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 194305391,
            "range": "± 3214922",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 781713369301,
            "range": "± 14657561451",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 792416559,
            "range": "± 596011",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 280802605,
            "range": "± 751427",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2523318,
            "range": "± 64774",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 413801911,
            "range": "± 828344",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1706340,
            "range": "± 15253",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4618,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5327,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 146747230,
            "range": "± 234654",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 202727438810,
            "range": "± 82932566",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13216683600,
            "range": "± 122605267",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39134716,
            "range": "± 25226",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15038241,
            "range": "± 79998",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 193605,
            "range": "± 1494",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39199119,
            "range": "± 26107",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15380595,
            "range": "± 33556",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 193827,
            "range": "± 2398",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22049457,
            "range": "± 21807",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 84562,
            "range": "± 655",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 398,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 470,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1081908,
            "range": "± 22026",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1238362783,
            "range": "± 3258841",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 351663,
            "range": "± 13554",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 231905,
            "range": "± 4133",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 89742,
            "range": "± 2747",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 352530,
            "range": "± 14068",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 252009,
            "range": "± 13852",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 91076,
            "range": "± 4530",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 263323,
            "range": "± 14585",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 91754,
            "range": "± 4756",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 402,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 469,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 325782,
            "range": "± 9069",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 7986751,
            "range": "± 302121",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1215311,
            "range": "± 102391",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}