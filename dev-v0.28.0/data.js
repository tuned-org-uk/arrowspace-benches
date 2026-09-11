window.BENCHMARK_DATA = {
  "lastUpdate": 1789139876856,
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
        "date": 1788706464809,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 15315763,
            "range": "± 798412",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 44487960,
            "range": "± 611502",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 75339252,
            "range": "± 1363596",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 202519246,
            "range": "± 4810405",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 763324880688,
            "range": "± 2299653757",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 740061893,
            "range": "± 1554950",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 272151642,
            "range": "± 1024940",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2924515,
            "range": "± 67316",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 390556767,
            "range": "± 17966532",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1680588,
            "range": "± 8090",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3576,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4245,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 173144549,
            "range": "± 2225307",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 201764604051,
            "range": "± 222095744",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 14906550444,
            "range": "± 286856944",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 38195105,
            "range": "± 559762",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14280959,
            "range": "± 33935",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 280835,
            "range": "± 6503",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37981815,
            "range": "± 231468",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14361820,
            "range": "± 101140",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 284145,
            "range": "± 7819",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22837662,
            "range": "± 456457",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 92385,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 359,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 430,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1120788,
            "range": "± 21260",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1448936914,
            "range": "± 6817377",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 339067,
            "range": "± 14930",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 237873,
            "range": "± 7470",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 97025,
            "range": "± 1945",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 339194,
            "range": "± 13213",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 253360,
            "range": "± 3930",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 97787,
            "range": "± 2474",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 252051,
            "range": "± 17503",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 91984,
            "range": "± 2631",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 467,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 506,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 340537,
            "range": "± 9653",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8870106,
            "range": "± 203536",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1083098,
            "range": "± 35863",
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
        "date": 1788799499520,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 14997119,
            "range": "± 799562",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 43288499,
            "range": "± 748969",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 73258802,
            "range": "± 1271928",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 195615690,
            "range": "± 3063829",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 771474389064,
            "range": "± 1035865687",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 797520844,
            "range": "± 979695",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 284981286,
            "range": "± 1109403",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2640995,
            "range": "± 59653",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 421389586,
            "range": "± 862496",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1705901,
            "range": "± 6748",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3732,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4437,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 168343917,
            "range": "± 323408",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 209007563833,
            "range": "± 1405499677",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13705994246,
            "range": "± 38610594",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39233536,
            "range": "± 123270",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14722776,
            "range": "± 17690",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 189515,
            "range": "± 1846",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39184220,
            "range": "± 141811",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15004238,
            "range": "± 22392",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 187767,
            "range": "± 3404",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22022562,
            "range": "± 113133",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 88486,
            "range": "± 841",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 383,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 458,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1102764,
            "range": "± 19862",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1246050547,
            "range": "± 8837917",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 351399,
            "range": "± 10212",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 226492,
            "range": "± 1800",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 89614,
            "range": "± 1492",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 352176,
            "range": "± 10324",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 245233,
            "range": "± 2648",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 88101,
            "range": "± 1473",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 256977,
            "range": "± 10081",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 88230,
            "range": "± 1384",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 463,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 534,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 328658,
            "range": "± 10248",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 7973646,
            "range": "± 77173",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1041234,
            "range": "± 42304",
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
        "date": 1788881193318,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 14506625,
            "range": "± 861583",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 41786915,
            "range": "± 551565",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 69599473,
            "range": "± 1722195",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 189063776,
            "range": "± 3666188",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 750459771974,
            "range": "± 1661737578",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 605977098,
            "range": "± 2727807",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 231899620,
            "range": "± 2430907",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3049965,
            "range": "± 13352",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 324036710,
            "range": "± 8560176",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1950079,
            "range": "± 7045",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3057,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3781,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 160793045,
            "range": "± 1695337",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 240573863190,
            "range": "± 805080051",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13318957668,
            "range": "± 72250506",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 29641938,
            "range": "± 553960",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 11956290,
            "range": "± 142899",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 205076,
            "range": "± 8547",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 29846867,
            "range": "± 185900",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 12105604,
            "range": "± 67354",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 209191,
            "range": "± 9331",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 18038502,
            "range": "± 1305209",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 86658,
            "range": "± 1306",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 323,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 352,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1050245,
            "range": "± 8772",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1522832273,
            "range": "± 14823455",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 290642,
            "range": "± 7591",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 217131,
            "range": "± 4416",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 88928,
            "range": "± 1121",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 293704,
            "range": "± 5653",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 232654,
            "range": "± 3143",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 88808,
            "range": "± 2109",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 239607,
            "range": "± 7179",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 87731,
            "range": "± 2993",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 452,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 483,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 384666,
            "range": "± 12679",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9798760,
            "range": "± 157728",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1083869,
            "range": "± 51261",
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
        "date": 1788967501918,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 15246729,
            "range": "± 915739",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 44035468,
            "range": "± 795863",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 74536524,
            "range": "± 1501467",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 199004771,
            "range": "± 3316855",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 724282820806,
            "range": "± 2395380740",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 740882126,
            "range": "± 8189042",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 272196078,
            "range": "± 2043704",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2983613,
            "range": "± 79563",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 383044932,
            "range": "± 7837829",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1697996,
            "range": "± 14391",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4355,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5029,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 141355595,
            "range": "± 316123",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 200424433361,
            "range": "± 176609159",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 14946047234,
            "range": "± 555256620",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 37926790,
            "range": "± 157571",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14593589,
            "range": "± 62759",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 447515,
            "range": "± 44039",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37923352,
            "range": "± 157527",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14841167,
            "range": "± 65936",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 461172,
            "range": "± 58982",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 21871033,
            "range": "± 166260",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 94881,
            "range": "± 1501",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 377,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 447,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1133380,
            "range": "± 22733",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1458758909,
            "range": "± 5028739",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 374665,
            "range": "± 14744",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 238814,
            "range": "± 8470",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 97474,
            "range": "± 3952",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 377530,
            "range": "± 20797",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 255915,
            "range": "± 12548",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 99111,
            "range": "± 3904",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 276900,
            "range": "± 15820",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 94598,
            "range": "± 5381",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 436,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 506,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 344547,
            "range": "± 17607",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8936249,
            "range": "± 321458",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1137848,
            "range": "± 101463",
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
        "date": 1789053549280,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 15205611,
            "range": "± 932800",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 44010732,
            "range": "± 683221",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 74823527,
            "range": "± 1500189",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 198824879,
            "range": "± 3530692",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 724310364016,
            "range": "± 3937666703",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 742388364,
            "range": "± 6219073",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 268312793,
            "range": "± 880538",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3220762,
            "range": "± 180708",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 384897482,
            "range": "± 9567843",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1695155,
            "range": "± 5292",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4252,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4937,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 145602373,
            "range": "± 7644152",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 199899794065,
            "range": "± 73202955",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 14915762768,
            "range": "± 328723466",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 42309534,
            "range": "± 1999068",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15158562,
            "range": "± 274223",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 256448,
            "range": "± 20584",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 38237889,
            "range": "± 1972780",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15708313,
            "range": "± 206417",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 201725,
            "range": "± 16539",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 24910836,
            "range": "± 2153305",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 94293,
            "range": "± 921",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 364,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1124510,
            "range": "± 19074",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1454505739,
            "range": "± 3782080",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 360895,
            "range": "± 35230",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 237571,
            "range": "± 3377",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 97973,
            "range": "± 2411",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 352084,
            "range": "± 13332",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 253796,
            "range": "± 3383",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 98224,
            "range": "± 2463",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 248557,
            "range": "± 10283",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 93653,
            "range": "± 2334",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 437,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 503,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 340796,
            "range": "± 9570",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8888624,
            "range": "± 201763",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1076509,
            "range": "± 51055",
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
        "date": 1789139876318,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 15313903,
            "range": "± 944622",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 44147878,
            "range": "± 830161",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 74655368,
            "range": "± 1458191",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 201451379,
            "range": "± 4597031",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 727438603529,
            "range": "± 2291421534",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 751392282,
            "range": "± 21370969",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 271737053,
            "range": "± 1587241",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2879338,
            "range": "± 93993",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 388004241,
            "range": "± 7089862",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1693187,
            "range": "± 3150",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4286,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4972,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 141541269,
            "range": "± 1291862",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 201465895291,
            "range": "± 61756515",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 14912887322,
            "range": "± 453744690",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 37432000,
            "range": "± 441535",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14510023,
            "range": "± 176013",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 211455,
            "range": "± 4950",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37417137,
            "range": "± 22911",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14783466,
            "range": "± 274987",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 215839,
            "range": "± 5981",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 21703472,
            "range": "± 52245",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 94135,
            "range": "± 850",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 361,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 433,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1113444,
            "range": "± 21545",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1458342612,
            "range": "± 11651839",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 348634,
            "range": "± 21453",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 233113,
            "range": "± 3329",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 98287,
            "range": "± 2092",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 348193,
            "range": "± 11179",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 253375,
            "range": "± 4093",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 97637,
            "range": "± 2223",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 248807,
            "range": "± 15096",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 91573,
            "range": "± 1948",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 436,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 523,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 335963,
            "range": "± 9091",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8985675,
            "range": "± 200407",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1076707,
            "range": "± 81671",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}