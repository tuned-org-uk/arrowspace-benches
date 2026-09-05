window.BENCHMARK_DATA = {
  "lastUpdate": 1788618872512,
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
        "date": 1788618871407,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 14925162,
            "range": "± 154631",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 43094810,
            "range": "± 389952",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 72922670,
            "range": "± 1031101",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 193781201,
            "range": "± 3656838",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 780587073916,
            "range": "± 1536647080",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 798834374,
            "range": "± 5484204",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 290021419,
            "range": "± 5196132",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2869737,
            "range": "± 124627",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 414662177,
            "range": "± 2833296",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1692683,
            "range": "± 6061",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4560,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5271,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 147329317,
            "range": "± 791447",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 201557018661,
            "range": "± 79097324",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13146820692,
            "range": "± 57687095",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39269843,
            "range": "± 149391",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14559053,
            "range": "± 32584",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 254851,
            "range": "± 15736",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39318934,
            "range": "± 44282",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14903142,
            "range": "± 142540",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 235272,
            "range": "± 3806",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22174048,
            "range": "± 135832",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 88259,
            "range": "± 800",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 455,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 530,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 993462,
            "range": "± 5052",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1245679603,
            "range": "± 6447091",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 343887,
            "range": "± 10440",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 229892,
            "range": "± 3332",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 90881,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 343662,
            "range": "± 9890",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 249292,
            "range": "± 2362",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 90969,
            "range": "± 3246",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 257342,
            "range": "± 9513",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 89146,
            "range": "± 1223",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 463,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 533,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 323311,
            "range": "± 8121",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8010120,
            "range": "± 115148",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1045341,
            "range": "± 43859",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}