window.BENCHMARK_DATA = {
  "lastUpdate": 1792853102695,
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
        "date": 1789223351834,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 12325192,
            "range": "± 144218",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 35491166,
            "range": "± 399989",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 58683737,
            "range": "± 1163518",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 160131201,
            "range": "± 3229148",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 650038062907,
            "range": "± 2998794768",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 515493679,
            "range": "± 2589977",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 187649138,
            "range": "± 1452023",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2057557,
            "range": "± 54506",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 273478128,
            "range": "± 7355789",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1673874,
            "range": "± 23261",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3167,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3178,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 139807800,
            "range": "± 961867",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 208420523084,
            "range": "± 2080406793",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 11605158050,
            "range": "± 268829814",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 25963617,
            "range": "± 135009",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 9853242,
            "range": "± 97146",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 174342,
            "range": "± 3119",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 25793911,
            "range": "± 135402",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 10193634,
            "range": "± 34738",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 173925,
            "range": "± 4348",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 15077557,
            "range": "± 58564",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 74258,
            "range": "± 614",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 287,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 313,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 905797,
            "range": "± 8319",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1293445349,
            "range": "± 8972664",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 245928,
            "range": "± 6706",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 186172,
            "range": "± 2401",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 75263,
            "range": "± 2024",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 245641,
            "range": "± 5522",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 198876,
            "range": "± 2894",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 75432,
            "range": "± 1949",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 184092,
            "range": "± 5501",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 74238,
            "range": "± 1227",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 381,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 405,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 325755,
            "range": "± 11060",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8220043,
            "range": "± 140152",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 928521,
            "range": "± 54768",
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
        "date": 1789314490749,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 15134630,
            "range": "± 138910",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 43484032,
            "range": "± 1232605",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 73554371,
            "range": "± 1605785",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 196823846,
            "range": "± 3042472",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 730566711112,
            "range": "± 1300331038",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 819603893,
            "range": "± 42737936",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 338227727,
            "range": "± 3290408",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2837020,
            "range": "± 142109",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 530256623,
            "range": "± 49407859",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1708207,
            "range": "± 10545",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3735,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4380,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 152354559,
            "range": "± 219359",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 191287063609,
            "range": "± 117829824",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13935976655,
            "range": "± 108424067",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 37680469,
            "range": "± 199232",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14254668,
            "range": "± 13904",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 224534,
            "range": "± 4381",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37734657,
            "range": "± 423760",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14347255,
            "range": "± 28185",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 228500,
            "range": "± 5273",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 21708168,
            "range": "± 581219",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 90616,
            "range": "± 594",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 368,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 441,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1034997,
            "range": "± 20427",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1374911375,
            "range": "± 6898218",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 351239,
            "range": "± 9685",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 229432,
            "range": "± 2858",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 97615,
            "range": "± 1834",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 343883,
            "range": "± 9367",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 241828,
            "range": "± 3932",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 96963,
            "range": "± 1930",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 245910,
            "range": "± 9212",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 92243,
            "range": "± 1815",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 436,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 501,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 341780,
            "range": "± 17873",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8863845,
            "range": "± 81815",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1063421,
            "range": "± 70140",
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
        "date": 1789405011991,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 15113616,
            "range": "± 126603",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 43592203,
            "range": "± 482306",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 73942553,
            "range": "± 1412734",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 196967194,
            "range": "± 3636608",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 730402937271,
            "range": "± 1226887381",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 811771653,
            "range": "± 290564",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 322427159,
            "range": "± 4602705",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2523971,
            "range": "± 53028",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 463444343,
            "range": "± 154645",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1707514,
            "range": "± 9245",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3626,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4310,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 169027930,
            "range": "± 304825",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 190796938541,
            "range": "± 365828488",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13887673511,
            "range": "± 121754958",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 37970858,
            "range": "± 124244",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14183376,
            "range": "± 54140",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 225473,
            "range": "± 6344",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37862502,
            "range": "± 157571",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14313026,
            "range": "± 74427",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 219878,
            "range": "± 2876",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 21799483,
            "range": "± 323181",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 91690,
            "range": "± 594",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 387,
            "range": "± 3",
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
            "value": 1025249,
            "range": "± 20142",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1404179845,
            "range": "± 2533806",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 348342,
            "range": "± 14745",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 225921,
            "range": "± 3232",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 98223,
            "range": "± 2973",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 348900,
            "range": "± 9314",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 247445,
            "range": "± 2631",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 97777,
            "range": "± 2823",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 242740,
            "range": "± 8868",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 92300,
            "range": "± 2190",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 438,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 502,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 343503,
            "range": "± 11216",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8859784,
            "range": "± 134811",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1057641,
            "range": "± 45083",
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
        "date": 1789487108817,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 14430595,
            "range": "± 246596",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 41880774,
            "range": "± 574066",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 66838199,
            "range": "± 1036302",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 184540932,
            "range": "± 3425351",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 705349022925,
            "range": "± 1502736612",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 575193518,
            "range": "± 854930",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 214340546,
            "range": "± 1236761",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2262934,
            "range": "± 28683",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 302556469,
            "range": "± 719731",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1795804,
            "range": "± 2209",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3406,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3655,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 141924820,
            "range": "± 1337919",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 230301508912,
            "range": "± 201721070",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 12197177787,
            "range": "± 44886461",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 27282755,
            "range": "± 46673",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 10947802,
            "range": "± 20629",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 183172,
            "range": "± 1655",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 27327446,
            "range": "± 31949",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 11232547,
            "range": "± 34072",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 182976,
            "range": "± 4423",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 16976829,
            "range": "± 75186",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 81649,
            "range": "± 464",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 310,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 341,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 943029,
            "range": "± 7506",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1440692286,
            "range": "± 4746481",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 289307,
            "range": "± 8367",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 213139,
            "range": "± 1564",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 85957,
            "range": "± 1029",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 286158,
            "range": "± 6743",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 230761,
            "range": "± 3685",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 85558,
            "range": "± 448",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 236859,
            "range": "± 6693",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 83598,
            "range": "± 1004",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 436,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 467,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 355470,
            "range": "± 12206",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9354569,
            "range": "± 123585",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1028691,
            "range": "± 38746",
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
        "date": 1789573204936,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 15359038,
            "range": "± 895114",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 44424686,
            "range": "± 556475",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 74834764,
            "range": "± 1458912",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 198391693,
            "range": "± 3562904",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 728408788606,
            "range": "± 1432794368",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 790654463,
            "range": "± 16159022",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 275167362,
            "range": "± 1813747",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2915664,
            "range": "± 73132",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 406848944,
            "range": "± 20474033",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1700236,
            "range": "± 8978",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3558,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4252,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 152572299,
            "range": "± 415748",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 189514391804,
            "range": "± 78386025",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13968560748,
            "range": "± 119921241",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 38375072,
            "range": "± 77434",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14247706,
            "range": "± 32356",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 214788,
            "range": "± 6279",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39132471,
            "range": "± 91900",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14384838,
            "range": "± 27232",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 221619,
            "range": "± 4675",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 21946905,
            "range": "± 139144",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 92793,
            "range": "± 885",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 385,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 444,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1025388,
            "range": "± 7448",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1378188047,
            "range": "± 8338190",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 352637,
            "range": "± 10015",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 244900,
            "range": "± 3348",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 97775,
            "range": "± 2386",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 354864,
            "range": "± 10131",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 261773,
            "range": "± 3430",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 98035,
            "range": "± 2281",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 265119,
            "range": "± 10909",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 94675,
            "range": "± 2593",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 436,
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
            "value": 343981,
            "range": "± 11081",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8909375,
            "range": "± 230480",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1083258,
            "range": "± 54050",
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
        "date": 1789659694125,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 15008445,
            "range": "± 437760",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 42718268,
            "range": "± 1298491",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 72901015,
            "range": "± 1343194",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 190103544,
            "range": "± 3559024",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 736420197124,
            "range": "± 1042502581",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 782814909,
            "range": "± 19908145",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 271933450,
            "range": "± 2183842",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3091698,
            "range": "± 94417",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 427768511,
            "range": "± 17853221",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1701189,
            "range": "± 16133",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3677,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4357,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 154016740,
            "range": "± 994884",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 191910171097,
            "range": "± 95815672",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 14080533002,
            "range": "± 503529717",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 37770777,
            "range": "± 83952",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14614329,
            "range": "± 110940",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 337879,
            "range": "± 31273",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37784700,
            "range": "± 64345",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14851092,
            "range": "± 41877",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 310130,
            "range": "± 21334",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 21775073,
            "range": "± 42573",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 92410,
            "range": "± 1497",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 392,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 462,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1033406,
            "range": "± 10977",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1381461266,
            "range": "± 3152670",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 344707,
            "range": "± 20890",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 239024,
            "range": "± 5083",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 97623,
            "range": "± 1924",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 346316,
            "range": "± 17951",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 258818,
            "range": "± 6220",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 97634,
            "range": "± 2120",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 246495,
            "range": "± 10124",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 92542,
            "range": "± 2310",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 388,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 454,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 344379,
            "range": "± 11305",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9321465,
            "range": "± 139838",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1039743,
            "range": "± 83463",
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
        "date": 1789744844691,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 15057143,
            "range": "± 948497",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 42940320,
            "range": "± 588866",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 72155323,
            "range": "± 1363388",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 190525846,
            "range": "± 3691286",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 737953860591,
            "range": "± 1019251546",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 736765400,
            "range": "± 14467778",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 276083943,
            "range": "± 754562",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2875203,
            "range": "± 59309",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 384748032,
            "range": "± 12306983",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1705599,
            "range": "± 7914",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3719,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4363,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 152640518,
            "range": "± 3461206",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 192195757993,
            "range": "± 90005865",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13619564934,
            "range": "± 57215250",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 38564591,
            "range": "± 1938528",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14806978,
            "range": "± 98438",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 285052,
            "range": "± 6020",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37678699,
            "range": "± 398502",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14982272,
            "range": "± 73836",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 285161,
            "range": "± 7428",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 21634388,
            "range": "± 1275343",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 91463,
            "range": "± 775",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 397,
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
            "value": 1022140,
            "range": "± 16592",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1389372921,
            "range": "± 23811355",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 338020,
            "range": "± 13222",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 228238,
            "range": "± 4016",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 95720,
            "range": "± 2517",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 338656,
            "range": "± 17135",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 249097,
            "range": "± 10968",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 97015,
            "range": "± 2400",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 247939,
            "range": "± 13993",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 92134,
            "range": "± 2161",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 389,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 450,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 338709,
            "range": "± 13182",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9220381,
            "range": "± 187501",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1006574,
            "range": "± 39191",
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
        "date": 1789830350077,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 14957117,
            "range": "± 933395",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 42702390,
            "range": "± 528273",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 72394848,
            "range": "± 1379856",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 189670418,
            "range": "± 4619617",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 752777097072,
            "range": "± 2379902735",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 819280425,
            "range": "± 634759",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 312375370,
            "range": "± 2642154",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2494439,
            "range": "± 23428",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 460262933,
            "range": "± 1470391",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1685574,
            "range": "± 10803",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4301,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4940,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 133239956,
            "range": "± 288739",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 189215737387,
            "range": "± 64196421",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13949023177,
            "range": "± 33732721",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 37564033,
            "range": "± 302530",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14253945,
            "range": "± 13716",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 183240,
            "range": "± 3251",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37452889,
            "range": "± 614198",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14359180,
            "range": "± 22553",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 187024,
            "range": "± 3826",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22701122,
            "range": "± 644006",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 90885,
            "range": "± 605",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 370,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 437,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1024838,
            "range": "± 14912",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1377203464,
            "range": "± 2165364",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 330286,
            "range": "± 18301",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 225677,
            "range": "± 3768",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 96699,
            "range": "± 1958",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 328419,
            "range": "± 8942",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 243517,
            "range": "± 5222",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 96619,
            "range": "± 2080",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 238476,
            "range": "± 14911",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 92274,
            "range": "± 1958",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 385,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 449,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 343002,
            "range": "± 15040",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9196352,
            "range": "± 109814",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1016377,
            "range": "± 41235",
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
        "date": 1789914443715,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 10791518,
            "range": "± 218008",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 27962517,
            "range": "± 792384",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 48656539,
            "range": "± 3287872",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 120117737,
            "range": "± 5086220",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 506542399771,
            "range": "± 2832078218",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 537251506,
            "range": "± 11403126",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 177979535,
            "range": "± 2819515",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 1763441,
            "range": "± 36362",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 288679209,
            "range": "± 4252824",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1314236,
            "range": "± 40362",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3541,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3819,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 99797165,
            "range": "± 1077333",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 167364431255,
            "range": "± 1297942718",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 8672533441,
            "range": "± 255520923",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 24805452,
            "range": "± 527158",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 9321066,
            "range": "± 283625",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 179177,
            "range": "± 4578",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 24428069,
            "range": "± 734729",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 9317315,
            "range": "± 110748",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 177474,
            "range": "± 3584",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 13832707,
            "range": "± 873439",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 62006,
            "range": "± 1516",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 247,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 263,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 702650,
            "range": "± 29319",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1033339888,
            "range": "± 3137243",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 227615,
            "range": "± 12024",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 173571,
            "range": "± 4435",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 65546,
            "range": "± 4239",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 221410,
            "range": "± 10950",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 186443,
            "range": "± 6671",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 65616,
            "range": "± 2424",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 177447,
            "range": "± 10587",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 69642,
            "range": "± 4077",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 244,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 264,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 263774,
            "range": "± 12813",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 6700730,
            "range": "± 78731",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 711221,
            "range": "± 51893",
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
        "date": 1790009518232,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 13590303,
            "range": "± 381806",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 38183362,
            "range": "± 1183534",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 60980742,
            "range": "± 2186142",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 163275942,
            "range": "± 7163494",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 682860255324,
            "range": "± 10881219386",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 604993301,
            "range": "± 6754102",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 219647273,
            "range": "± 2706711",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2616335,
            "range": "± 109375",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 308912907,
            "range": "± 10422711",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1849972,
            "range": "± 26037",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3276,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3545,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 144091660,
            "range": "± 2410772",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 217643541784,
            "range": "± 6890067021",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 11968558298,
            "range": "± 253467825",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 28709751,
            "range": "± 473423",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 10495603,
            "range": "± 293897",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 189403,
            "range": "± 3492",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 29068618,
            "range": "± 640375",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 10885791,
            "range": "± 219249",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 191791,
            "range": "± 3226",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 16527565,
            "range": "± 163448",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 78813,
            "range": "± 1080",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 297,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 316,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 929375,
            "range": "± 14914",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1392414438,
            "range": "± 59357244",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 281073,
            "range": "± 7767",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 204894,
            "range": "± 4354",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 82472,
            "range": "± 2838",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 274713,
            "range": "± 9465",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 219222,
            "range": "± 5202",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 81068,
            "range": "± 2845",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 205874,
            "range": "± 6721",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 79312,
            "range": "± 2154",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 308,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 333,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 346033,
            "range": "± 25977",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8692477,
            "range": "± 404757",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 842828,
            "range": "± 74279",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790087660297,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 8811222,
            "range": "± 138676",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 26887145,
            "range": "± 810421",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 43216300,
            "range": "± 1252590",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 121034851,
            "range": "± 3246621",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 468666641387,
            "range": "± 4935901380",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 388334582,
            "range": "± 14172986",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 146793821,
            "range": "± 2637486",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2033559,
            "range": "± 198050",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 211144554,
            "range": "± 1915481",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1069245,
            "range": "± 27894",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 1888,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 2189,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 85417946,
            "range": "± 1180454",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 133107903718,
            "range": "± 3067576798",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 8310495058,
            "range": "± 204587923",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 21357831,
            "range": "± 535362",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 7746562,
            "range": "± 168253",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 96379,
            "range": "± 1184",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 22304768,
            "range": "± 752028",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 8008914,
            "range": "± 86521",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 97240,
            "range": "± 1962",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 12971679,
            "range": "± 548870",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 50071,
            "range": "± 2584",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 229,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 245,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 585424,
            "range": "± 8560",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 805331618,
            "range": "± 11487428",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 192047,
            "range": "± 4745",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 119765,
            "range": "± 2043",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 50875,
            "range": "± 855",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 189090,
            "range": "± 4379",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 134486,
            "range": "± 8086",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 50246,
            "range": "± 1239",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 141886,
            "range": "± 4828",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 50077,
            "range": "± 1155",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 214,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 237,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 196334,
            "range": "± 7475",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 5242807,
            "range": "± 131478",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 579657,
            "range": "± 26178",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790178663964,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 14976098,
            "range": "± 818323",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 42861092,
            "range": "± 929689",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 72635222,
            "range": "± 1292284",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 190136921,
            "range": "± 3576018",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 733490207393,
            "range": "± 1305884155",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 781175068,
            "range": "± 17856743",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 271392240,
            "range": "± 4447693",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3001164,
            "range": "± 140187",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 421886778,
            "range": "± 20458545",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1701157,
            "range": "± 10292",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3716,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4437,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 152370758,
            "range": "± 1012435",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 191807442790,
            "range": "± 95656125",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 14500492563,
            "range": "± 38360545",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 38213240,
            "range": "± 92169",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14432521,
            "range": "± 121636",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 243632,
            "range": "± 6802",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 38127788,
            "range": "± 64825",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14481373,
            "range": "± 24357",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 239285,
            "range": "± 5669",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22814770,
            "range": "± 820439",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 91078,
            "range": "± 997",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 362,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 433,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1020002,
            "range": "± 17039",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1388331829,
            "range": "± 14912098",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 340716,
            "range": "± 14160",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 222812,
            "range": "± 3826",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 95372,
            "range": "± 1900",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 342152,
            "range": "± 9128",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 241008,
            "range": "± 6233",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 95439,
            "range": "± 1735",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 243445,
            "range": "± 10945",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 90628,
            "range": "± 1643",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 384,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 448,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 335606,
            "range": "± 9596",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9169599,
            "range": "± 103291",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1010610,
            "range": "± 78141",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790265046443,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 14988792,
            "range": "± 327624",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 42907105,
            "range": "± 606043",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 72627764,
            "range": "± 1497717",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 190552311,
            "range": "± 6668510",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 742732259567,
            "range": "± 1126154248",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 783996743,
            "range": "± 16836348",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 268118588,
            "range": "± 671821",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3343500,
            "range": "± 149866",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 386731486,
            "range": "± 17838244",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1724344,
            "range": "± 12865",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3689,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4443,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 153325722,
            "range": "± 1627029",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 191982583214,
            "range": "± 113525404",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 12667068734,
            "range": "± 143708291",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 38902054,
            "range": "± 429976",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14256415,
            "range": "± 65449",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 203107,
            "range": "± 10188",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 38384458,
            "range": "± 91403",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14419862,
            "range": "± 22904",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 205155,
            "range": "± 8607",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 21985386,
            "range": "± 555203",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 90223,
            "range": "± 922",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 466,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 533,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 948917,
            "range": "± 9896",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1339409587,
            "range": "± 4702226",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 335073,
            "range": "± 15699",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 222179,
            "range": "± 3472",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 95181,
            "range": "± 2196",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 347880,
            "range": "± 14706",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 246250,
            "range": "± 4580",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 95580,
            "range": "± 1984",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 262637,
            "range": "± 11951",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 91751,
            "range": "± 2042",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 387,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 448,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 341566,
            "range": "± 19935",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9370454,
            "range": "± 90095",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1095778,
            "range": "± 69594",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790347545616,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 9150014,
            "range": "± 139310",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 27684900,
            "range": "± 894133",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 44583590,
            "range": "± 1169652",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 125112949,
            "range": "± 6446111",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 469528152896,
            "range": "± 7165989806",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 418359135,
            "range": "± 6451168",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 143958602,
            "range": "± 1932760",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 1892000,
            "range": "± 82873",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 228127921,
            "range": "± 12641769",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1096289,
            "range": "± 8503",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 1950,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 2229,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 79736547,
            "range": "± 1464275",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 133465357674,
            "range": "± 3350947332",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 8502905229,
            "range": "± 164278783",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 21963023,
            "range": "± 369362",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 8311356,
            "range": "± 61176",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 137229,
            "range": "± 9102",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 22174650,
            "range": "± 304832",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 8863342,
            "range": "± 29737",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 133802,
            "range": "± 19807",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 13140372,
            "range": "± 878690",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 55743,
            "range": "± 1525",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 231,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 250,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 597726,
            "range": "± 9432",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 867340964,
            "range": "± 9048821",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 190595,
            "range": "± 8524",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 130618,
            "range": "± 1991",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 53294,
            "range": "± 1648",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 199192,
            "range": "± 5073",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 143556,
            "range": "± 3063",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 55599,
            "range": "± 814",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 150330,
            "range": "± 5017",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 52867,
            "range": "± 5759",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 233,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 277,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 210909,
            "range": "± 6478",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 5537552,
            "range": "± 106177",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 681858,
            "range": "± 48515",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790436173916,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 15003084,
            "range": "± 883391",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 42990293,
            "range": "± 403435",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 72846348,
            "range": "± 1232772",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 189934321,
            "range": "± 3937293",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 754190255028,
            "range": "± 1642963168",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 733657602,
            "range": "± 25669540",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 266735945,
            "range": "± 1033456",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2920830,
            "range": "± 97141",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 391404554,
            "range": "± 15820107",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1689389,
            "range": "± 9877",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4348,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5036,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 133434627,
            "range": "± 206399",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 191576254365,
            "range": "± 229148308",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 14076870200,
            "range": "± 32657732",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 37573333,
            "range": "± 51308",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14360471,
            "range": "± 48120",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 286714,
            "range": "± 16557",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37609463,
            "range": "± 68374",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14450829,
            "range": "± 33930",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 300445,
            "range": "± 16131",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 21607658,
            "range": "± 120249",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 92074,
            "range": "± 411",
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
            "value": 465,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1024727,
            "range": "± 17590",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1397713340,
            "range": "± 6472218",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 340313,
            "range": "± 11023",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 233213,
            "range": "± 2134",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 93256,
            "range": "± 1289",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 336675,
            "range": "± 13136",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 254975,
            "range": "± 2644",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 93156,
            "range": "± 1127",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 247111,
            "range": "± 12399",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 90495,
            "range": "± 1736",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 386,
            "range": "± 1",
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
            "value": 337802,
            "range": "± 8745",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9173233,
            "range": "± 110585",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1018238,
            "range": "± 56825",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790524250608,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 11764561,
            "range": "± 874038",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 33314441,
            "range": "± 563311",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 54271172,
            "range": "± 1147347",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 145546801,
            "range": "± 5207475",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 657436896252,
            "range": "± 6701891628",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 507950851,
            "range": "± 9866109",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 185844506,
            "range": "± 3279983",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2291920,
            "range": "± 67420",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 273056350,
            "range": "± 7929132",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1621218,
            "range": "± 21863",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3527,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3942,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 97306917,
            "range": "± 1182264",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 205141783723,
            "range": "± 1318022253",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 10963971079,
            "range": "± 471749685",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 26495256,
            "range": "± 3126535",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 9912916,
            "range": "± 66841",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 242573,
            "range": "± 3907",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 26406024,
            "range": "± 294786",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 10254067,
            "range": "± 107996",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 242107,
            "range": "± 2827",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 15248167,
            "range": "± 142428",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 75154,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 279,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 327,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 865682,
            "range": "± 9441",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1296605372,
            "range": "± 9679091",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 261936,
            "range": "± 9175",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 190073,
            "range": "± 4240",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 75363,
            "range": "± 2050",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 263669,
            "range": "± 7000",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 204650,
            "range": "± 4233",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 76606,
            "range": "± 2061",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 205319,
            "range": "± 5782",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 74805,
            "range": "± 1465",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 292,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 321,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 337179,
            "range": "± 13863",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8283017,
            "range": "± 205221",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 784803,
            "range": "± 46932",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790619998360,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 14998661,
            "range": "± 827515",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 43393169,
            "range": "± 657280",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 73487136,
            "range": "± 1204834",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 196285504,
            "range": "± 5856670",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 760005608730,
            "range": "± 1424997112",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 793025748,
            "range": "± 3038927",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 279871481,
            "range": "± 3248969",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3019713,
            "range": "± 72519",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 413670265,
            "range": "± 1754812",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1689229,
            "range": "± 2042",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3689,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4428,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 161232290,
            "range": "± 5270204",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 202435576768,
            "range": "± 124936682",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13326980665,
            "range": "± 168480013",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39293150,
            "range": "± 50035",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14922751,
            "range": "± 67502",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 215762,
            "range": "± 3130",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39258588,
            "range": "± 49524",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15253269,
            "range": "± 175632",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 212582,
            "range": "± 5067",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22041582,
            "range": "± 43192",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 81430,
            "range": "± 1377",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 385,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 459,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1056332,
            "range": "± 22867",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1235318350,
            "range": "± 1565530",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 343789,
            "range": "± 8207",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 220673,
            "range": "± 4630",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 84083,
            "range": "± 1464",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 344012,
            "range": "± 6851",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 239270,
            "range": "± 5437",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 85453,
            "range": "± 1263",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 246495,
            "range": "± 5906",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 83965,
            "range": "± 2606",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 402,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 472,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 330350,
            "range": "± 10405",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 7982467,
            "range": "± 78972",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1015806,
            "range": "± 32229",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790701632880,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 15018330,
            "range": "± 819989",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 42952173,
            "range": "± 453394",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 73983213,
            "range": "± 1639052",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 192935377,
            "range": "± 2537159",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 749455996114,
            "range": "± 1017768305",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 739898106,
            "range": "± 4855204",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 269022951,
            "range": "± 3719058",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2473077,
            "range": "± 41333",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 382851275,
            "range": "± 14398366",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1699459,
            "range": "± 12307",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3684,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4411,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 152129907,
            "range": "± 547558",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 190084259810,
            "range": "± 81812232",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 14162653556,
            "range": "± 76325215",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 38963064,
            "range": "± 147500",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14634312,
            "range": "± 84730",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 205598,
            "range": "± 4434",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 38991284,
            "range": "± 92006",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14841061,
            "range": "± 25056",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 206024,
            "range": "± 3726",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 21960783,
            "range": "± 365802",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 91211,
            "range": "± 875",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 381,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 441,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1024579,
            "range": "± 7927",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1378987565,
            "range": "± 21918579",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 325609,
            "range": "± 12435",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 224485,
            "range": "± 3216",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 95018,
            "range": "± 1912",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 327163,
            "range": "± 7982",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 242716,
            "range": "± 2443",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 95231,
            "range": "± 3252",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 234933,
            "range": "± 8990",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 89096,
            "range": "± 2342",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 386,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 448,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 343091,
            "range": "± 10556",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9161161,
            "range": "± 71557",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1014285,
            "range": "± 41955",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790786845567,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 13979776,
            "range": "± 749013",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 39902854,
            "range": "± 729417",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 66187330,
            "range": "± 1245970",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 178423330,
            "range": "± 3004222",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 739424242535,
            "range": "± 3217167083",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 569953935,
            "range": "± 3856137",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 211254807,
            "range": "± 2351012",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2424167,
            "range": "± 41381",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 303851081,
            "range": "± 770063",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1801625,
            "range": "± 5965",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3035,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3613,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 138651788,
            "range": "± 1865643",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 232883989194,
            "range": "± 1327850965",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 12858321102,
            "range": "± 155079643",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 30375064,
            "range": "± 317337",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 11481753,
            "range": "± 44505",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 213117,
            "range": "± 2036",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 30579047,
            "range": "± 202872",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 11676576,
            "range": "± 68076",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 211073,
            "range": "± 3494",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 20176029,
            "range": "± 134984",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 82382,
            "range": "± 607",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 339,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 365,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 979507,
            "range": "± 4353",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1485127687,
            "range": "± 4324068",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 278217,
            "range": "± 7787",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 207754,
            "range": "± 3513",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 86027,
            "range": "± 1625",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 277659,
            "range": "± 5584",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 224796,
            "range": "± 3563",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 86339,
            "range": "± 1326",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 223731,
            "range": "± 5124",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 83292,
            "range": "± 2576",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 338,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 371,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 372651,
            "range": "± 12663",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9389664,
            "range": "± 144483",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 897600,
            "range": "± 59245",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790872985310,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 11259464,
            "range": "± 558569",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 29351555,
            "range": "± 1348623",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 51713496,
            "range": "± 1085434",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 126745529,
            "range": "± 6018113",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 524057619479,
            "range": "± 2362535680",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 583938698,
            "range": "± 6661689",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 203190118,
            "range": "± 1187942",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 1810850,
            "range": "± 63799",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 372911142,
            "range": "± 5675425",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1321270,
            "range": "± 51856",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3025,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3336,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 110323648,
            "range": "± 5907146",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 167229007207,
            "range": "± 882673584",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 9199983521,
            "range": "± 306275298",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 22659448,
            "range": "± 138922",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 9186130,
            "range": "± 29833",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 168727,
            "range": "± 3414",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 26018094,
            "range": "± 1558081",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 9464749,
            "range": "± 24306",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 169404,
            "range": "± 3209",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 13978568,
            "range": "± 474288",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 61571,
            "range": "± 3117",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 274,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 299,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 727995,
            "range": "± 6576",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1026786520,
            "range": "± 2578293",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 231831,
            "range": "± 13599",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 174148,
            "range": "± 3147",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 61175,
            "range": "± 1624",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 240362,
            "range": "± 16902",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 190074,
            "range": "± 4051",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 61891,
            "range": "± 4250",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 163499,
            "range": "± 5875",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 66212,
            "range": "± 4950",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 289,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 314,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 267791,
            "range": "± 17805",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 6730577,
            "range": "± 296658",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 700592,
            "range": "± 39102",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1790958016183,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 12394321,
            "range": "± 204005",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 35134404,
            "range": "± 373503",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 59574106,
            "range": "± 1055293",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 157155532,
            "range": "± 2430184",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 606181507589,
            "range": "± 995279707",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 630550341,
            "range": "± 1247447",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 222790040,
            "range": "± 578362",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2187500,
            "range": "± 85640",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 333038380,
            "range": "± 890333",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1318657,
            "range": "± 2183",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3628,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4185,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 130146758,
            "range": "± 306869",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 156973381228,
            "range": "± 58318626",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 10439213736,
            "range": "± 54187911",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 30655008,
            "range": "± 32279",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 11500554,
            "range": "± 18038",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 172887,
            "range": "± 7105",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 30655009,
            "range": "± 560125",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 11789059,
            "range": "± 27902",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 199054,
            "range": "± 16580",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 17245731,
            "range": "± 132616",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 66142,
            "range": "± 1393",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 360,
            "range": "± 10",
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
            "value": 850519,
            "range": "± 12095",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 964169809,
            "range": "± 6156880",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 270445,
            "range": "± 6605",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 177084,
            "range": "± 5542",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 68458,
            "range": "± 558",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 272772,
            "range": "± 19807",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 191991,
            "range": "± 2236",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 67248,
            "range": "± 491",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 196410,
            "range": "± 7759",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 66949,
            "range": "± 889",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 359,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 413,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 253001,
            "range": "± 7449",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 6197801,
            "range": "± 68256",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 820925,
            "range": "± 26859",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1791042188268,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 15983429,
            "range": "± 768527",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 44580957,
            "range": "± 426034",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 76071444,
            "range": "± 2305084",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 197580994,
            "range": "± 3620947",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 785478934746,
            "range": "± 1551924493",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 785083325,
            "range": "± 3893007",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 296517454,
            "range": "± 4435082",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2636824,
            "range": "± 44875",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 425908748,
            "range": "± 622765",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1696620,
            "range": "± 10309",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4299,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4969,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 171139935,
            "range": "± 1308241",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 191662902067,
            "range": "± 1011324259",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13319337859,
            "range": "± 46178983",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 38636331,
            "range": "± 231589",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14867080,
            "range": "± 216174",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 195398,
            "range": "± 5825",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 38576397,
            "range": "± 378126",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14958309,
            "range": "± 32741",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 192351,
            "range": "± 1983",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22333718,
            "range": "± 331642",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 93018,
            "range": "± 865",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 438,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 528,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 997857,
            "range": "± 5760",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1436541391,
            "range": "± 23922686",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 336595,
            "range": "± 11655",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 236120,
            "range": "± 3169",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 96487,
            "range": "± 2171",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 335260,
            "range": "± 11439",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 257058,
            "range": "± 6650",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 96098,
            "range": "± 2082",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 239681,
            "range": "± 14179",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 91163,
            "range": "± 1514",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 437,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 504,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 343502,
            "range": "± 9979",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9417655,
            "range": "± 122327",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1153645,
            "range": "± 114447",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1791131305497,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 16078264,
            "range": "± 954265",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 44717370,
            "range": "± 459536",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 77168542,
            "range": "± 1386738",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 199321422,
            "range": "± 3120193",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 789047796359,
            "range": "± 841980127",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 781545727,
            "range": "± 10028427",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 300027389,
            "range": "± 3623568",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2702121,
            "range": "± 96496",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 424373045,
            "range": "± 12139595",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1695311,
            "range": "± 7505",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4274,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4967,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 171098160,
            "range": "± 459622",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 191291067294,
            "range": "± 64860883",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13363550356,
            "range": "± 107779181",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 37800722,
            "range": "± 232271",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14645717,
            "range": "± 81724",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 418234,
            "range": "± 33904",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 38609695,
            "range": "± 236632",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14923740,
            "range": "± 53933",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 316092,
            "range": "± 56313",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22804978,
            "range": "± 349180",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 93724,
            "range": "± 658",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 437,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 507,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 997624,
            "range": "± 15329",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1446153210,
            "range": "± 1521164",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 345314,
            "range": "± 11804",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 232554,
            "range": "± 3435",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 97363,
            "range": "± 2325",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 353159,
            "range": "± 17180",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 247981,
            "range": "± 3073",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 97931,
            "range": "± 2026",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 253416,
            "range": "± 12472",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 92252,
            "range": "± 1997",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 434,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 507,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 349286,
            "range": "± 9207",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9425094,
            "range": "± 211519",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1159142,
            "range": "± 54020",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1791227098233,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 16130820,
            "range": "± 946059",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 44946527,
            "range": "± 823071",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 76811324,
            "range": "± 2150522",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 198335027,
            "range": "± 4452396",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 788788225799,
            "range": "± 1246103864",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 785962023,
            "range": "± 1331894",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 296645462,
            "range": "± 4751795",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2832274,
            "range": "± 420192",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 430645645,
            "range": "± 10872866",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1707728,
            "range": "± 7792",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4310,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5027,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 171069783,
            "range": "± 312673",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 192602325230,
            "range": "± 127197360",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13277202535,
            "range": "± 33227594",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 38201712,
            "range": "± 77670",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14750344,
            "range": "± 170751",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 216959,
            "range": "± 4556",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 40490184,
            "range": "± 584254",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14850279,
            "range": "± 92518",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 219315,
            "range": "± 4006",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22402969,
            "range": "± 336375",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 94951,
            "range": "± 1252",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 454,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 524,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 997932,
            "range": "± 9506",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1440239276,
            "range": "± 4587478",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 350864,
            "range": "± 18562",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 231592,
            "range": "± 4357",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 97407,
            "range": "± 2428",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 338181,
            "range": "± 14581",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 255310,
            "range": "± 2484",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 97843,
            "range": "± 2523",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 252226,
            "range": "± 13307",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 93344,
            "range": "± 2251",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 435,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 503,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 347880,
            "range": "± 7381",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9357174,
            "range": "± 102239",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1173907,
            "range": "± 50257",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1791307167578,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 16408241,
            "range": "± 864924",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 45892708,
            "range": "± 608583",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 78447638,
            "range": "± 1604657",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 204104003,
            "range": "± 4085469",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 762787501241,
            "range": "± 1751701818",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 892903983,
            "range": "± 35413316",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 304848928,
            "range": "± 2363924",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3170785,
            "range": "± 51423",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 534385751,
            "range": "± 16398059",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1702078,
            "range": "± 10351",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3686,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4965,
            "range": "± 560",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 168273518,
            "range": "± 334381",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 190882210573,
            "range": "± 91763119",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13433268574,
            "range": "± 176705522",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 37892319,
            "range": "± 179135",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14939976,
            "range": "± 27185",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 250547,
            "range": "± 24862",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37830278,
            "range": "± 292415",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14946171,
            "range": "± 62386",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 335187,
            "range": "± 31078",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22172458,
            "range": "± 278212",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 93583,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 445,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 517,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1000323,
            "range": "± 9440",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1428378586,
            "range": "± 18035985",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 363250,
            "range": "± 17828",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 242190,
            "range": "± 4285",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 97406,
            "range": "± 1835",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 366133,
            "range": "± 16520",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 257457,
            "range": "± 5290",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 97508,
            "range": "± 3415",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 270944,
            "range": "± 13505",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 91889,
            "range": "± 1733",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 438,
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
            "value": 351929,
            "range": "± 7937",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9450168,
            "range": "± 291259",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1161856,
            "range": "± 48654",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1791481770625,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 15955299,
            "range": "± 855183",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 45082209,
            "range": "± 490493",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 77062488,
            "range": "± 2332501",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 201765956,
            "range": "± 3550239",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 764981962744,
            "range": "± 795499867",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 794514638,
            "range": "± 3648357",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 289176985,
            "range": "± 1268114",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2708060,
            "range": "± 138324",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 421965266,
            "range": "± 322633",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1701746,
            "range": "± 2018",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4587,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5299,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 152859554,
            "range": "± 220906",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 208930359583,
            "range": "± 183076632",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13304727603,
            "range": "± 55959391",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39199620,
            "range": "± 320542",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14824082,
            "range": "± 47619",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 253654,
            "range": "± 4209",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39230094,
            "range": "± 32601",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15129543,
            "range": "± 56416",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 291686,
            "range": "± 15115",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22275115,
            "range": "± 23372",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 85323,
            "range": "± 2037",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 416,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 492,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1029419,
            "range": "± 17638",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1232267565,
            "range": "± 3772867",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 344162,
            "range": "± 7511",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 230077,
            "range": "± 4617",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 84852,
            "range": "± 1207",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 346641,
            "range": "± 8497",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 245466,
            "range": "± 4618",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 86421,
            "range": "± 1399",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 255301,
            "range": "± 10420",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 84335,
            "range": "± 1572",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 462,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 531,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 329172,
            "range": "± 9189",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8007790,
            "range": "± 81700",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1058466,
            "range": "± 28153",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1791567115462,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 16408037,
            "range": "± 636335",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 45879179,
            "range": "± 495344",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 78709602,
            "range": "± 2777055",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 206814590,
            "range": "± 3804762",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 751540922719,
            "range": "± 1338690683",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 752613931,
            "range": "± 31872344",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 283309938,
            "range": "± 2884887",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2699988,
            "range": "± 99449",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 460493144,
            "range": "± 18803328",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1683766,
            "range": "± 9708",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4305,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4997,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 142215327,
            "range": "± 707072",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 202021593308,
            "range": "± 149577319",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13320293512,
            "range": "± 29265819",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 38085105,
            "range": "± 135583",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14756609,
            "range": "± 47756",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 316240,
            "range": "± 6948",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 38203244,
            "range": "± 103345",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14948083,
            "range": "± 28993",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 665996,
            "range": "± 130650",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 23269870,
            "range": "± 257189",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 91888,
            "range": "± 967",
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
            "value": 462,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 973222,
            "range": "± 10953",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1438543429,
            "range": "± 3182782",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 341610,
            "range": "± 16974",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 235267,
            "range": "± 2114",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 95391,
            "range": "± 2246",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 335751,
            "range": "± 11748",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 252477,
            "range": "± 5014",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 94935,
            "range": "± 2100",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 244703,
            "range": "± 12643",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 89356,
            "range": "± 1628",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 437,
            "range": "± 4",
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
            "value": 340008,
            "range": "± 9407",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9298319,
            "range": "± 159019",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1058522,
            "range": "± 54034",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1791646286406,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 9440171,
            "range": "± 432268",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 27742414,
            "range": "± 520192",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 45558228,
            "range": "± 795192",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 123168115,
            "range": "± 3336698",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 471714301405,
            "range": "± 6089566211",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 375810752,
            "range": "± 8646833",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 140848968,
            "range": "± 381066",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 1955785,
            "range": "± 38144",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 268820948,
            "range": "± 12197111",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1024416,
            "range": "± 8094",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 1894,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 2160,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 87243898,
            "range": "± 751448",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 130878991286,
            "range": "± 2350072924",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 8268540371,
            "range": "± 683392008",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 20187933,
            "range": "± 262256",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 8331683,
            "range": "± 106173",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 116367,
            "range": "± 2772",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 20406207,
            "range": "± 387917",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 8417088,
            "range": "± 127560",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 115155,
            "range": "± 1977",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 12467535,
            "range": "± 299649",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 54369,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 214,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 237,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 575405,
            "range": "± 13330",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 819797596,
            "range": "± 9103052",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 184200,
            "range": "± 5616",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 126681,
            "range": "± 7163",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 54938,
            "range": "± 2124",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 182498,
            "range": "± 4023",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 140112,
            "range": "± 1427",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 55466,
            "range": "± 21742",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 151526,
            "range": "± 4575",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 55045,
            "range": "± 738",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 224,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 239,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 200590,
            "range": "± 5482",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 5388076,
            "range": "± 113943",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 680047,
            "range": "± 53062",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1791735206940,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 11288342,
            "range": "± 124981",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 29297062,
            "range": "± 668500",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 52202529,
            "range": "± 3127265",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 126343023,
            "range": "± 2177588",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 512181645487,
            "range": "± 3646847664",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 570228161,
            "range": "± 21117606",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 184690659,
            "range": "± 6202515",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2058876,
            "range": "± 86722",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 273778442,
            "range": "± 9662736",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1360141,
            "range": "± 48421",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3723,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3980,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 94312238,
            "range": "± 3641857",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 169087912652,
            "range": "± 1283348122",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 9498254268,
            "range": "± 681957924",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 24373623,
            "range": "± 813444",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 9614189,
            "range": "± 169958",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 185574,
            "range": "± 4553",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 27107132,
            "range": "± 772433",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 9875473,
            "range": "± 151453",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 182582,
            "range": "± 5046",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 15177519,
            "range": "± 297139",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 62269,
            "range": "± 1220",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 307,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 322,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 755888,
            "range": "± 8243",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1047951083,
            "range": "± 11870123",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 218995,
            "range": "± 13252",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 168959,
            "range": "± 6687",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 60618,
            "range": "± 1642",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 215347,
            "range": "± 12633",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 188075,
            "range": "± 6244",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 61121,
            "range": "± 1583",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 166294,
            "range": "± 7970",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 62631,
            "range": "± 3673",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 292,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 316,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 261490,
            "range": "± 14798",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 6766878,
            "range": "± 164038",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 728951,
            "range": "± 33349",
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
          "id": "ee8a4a9b7521ccf4641beea5e8984aea3f1e062d",
          "message": "bench(criterion): record v0.28.2 results [skip ci]",
          "timestamp": "2026-09-21T17:10:12Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ee8a4a9b7521ccf4641beea5e8984aea3f1e062d"
        },
        "date": 1791835063320,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 16061188,
            "range": "± 949380",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 45095897,
            "range": "± 951064",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 76950169,
            "range": "± 2365162",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 202742166,
            "range": "± 3526059",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 780674494530,
            "range": "± 6782180195",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 781920369,
            "range": "± 1986784",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 298536539,
            "range": "± 1313533",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2695274,
            "range": "± 69291",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 425295691,
            "range": "± 639013",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1727439,
            "range": "± 19841",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4375,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5059,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 191530944,
            "range": "± 6538112",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 192916364652,
            "range": "± 68787526",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13380762730,
            "range": "± 116800501",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 44412793,
            "range": "± 1180045",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 16178512,
            "range": "± 55287",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 190785,
            "range": "± 5657",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 44929133,
            "range": "± 1716796",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 16445958,
            "range": "± 280282",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 198462,
            "range": "± 5206",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 24624615,
            "range": "± 50691",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 94381,
            "range": "± 989",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 441,
            "range": "± 0",
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
            "value": 998759,
            "range": "± 7826",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1445936674,
            "range": "± 24389481",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 359677,
            "range": "± 16309",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 233330,
            "range": "± 2809",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 96989,
            "range": "± 2704",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 342831,
            "range": "± 13145",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 251904,
            "range": "± 3136",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 97773,
            "range": "± 2202",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 256045,
            "range": "± 9240",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 91572,
            "range": "± 1685",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 387,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 454,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 334668,
            "range": "± 8949",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8855219,
            "range": "± 262155",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1014493,
            "range": "± 30925",
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
          "id": "3ec8ef9ed2ddcadc38819e5c4b20e3922131b78f",
          "message": "bench(criterion): record v0.29.0 results [skip ci]",
          "timestamp": "2026-10-12T20:24:40Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/3ec8ef9ed2ddcadc38819e5c4b20e3922131b78f"
        },
        "date": 1791915401967,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 16148224,
            "range": "± 899800",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 45279389,
            "range": "± 465419",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 77548755,
            "range": "± 2864489",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 203620373,
            "range": "± 3898749",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 789820608763,
            "range": "± 1235299317",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 789034695,
            "range": "± 41509280",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 307567377,
            "range": "± 1896665",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3034294,
            "range": "± 85723",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 523833138,
            "range": "± 49545631",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1706024,
            "range": "± 11284",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4387,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5069,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 171738633,
            "range": "± 4719319",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 192913710022,
            "range": "± 55355962",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13421501670,
            "range": "± 126293633",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 40213736,
            "range": "± 130993",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 16992958,
            "range": "± 308416",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 303399,
            "range": "± 11582",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 40214268,
            "range": "± 1542785",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 16957858,
            "range": "± 289376",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 291451,
            "range": "± 9601",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 29257988,
            "range": "± 661691",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 93887,
            "range": "± 846",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 442,
            "range": "± 6",
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
            "value": 994266,
            "range": "± 9231",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1443762776,
            "range": "± 3853200",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 349391,
            "range": "± 13590",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 238603,
            "range": "± 3863",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 98071,
            "range": "± 2122",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 348145,
            "range": "± 10861",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 255043,
            "range": "± 3465",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 96597,
            "range": "± 1637",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 251833,
            "range": "± 11654",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 91514,
            "range": "± 1579",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 387,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 454,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 336290,
            "range": "± 7872",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8857430,
            "range": "± 82844",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1020998,
            "range": "± 45622",
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
          "id": "88c3a9baa0021dee92c5a0a214ae59c9d7fd869c",
          "message": "ci: add CODEOWNERS with @Mec-iS as default owner",
          "timestamp": "2026-10-14T06:28:33+01:00",
          "tree_id": "5c8aac6d36f00f5b9ebf3e08ca0911b8398d93de",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/88c3a9baa0021dee92c5a0a214ae59c9d7fd869c"
        },
        "date": 1791967639002,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 16098250,
            "range": "± 817591",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 45341083,
            "range": "± 514160",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 77627177,
            "range": "± 2483803",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 202323136,
            "range": "± 5498765",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 750135816917,
            "range": "± 1477806144",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 782703940,
            "range": "± 39229039",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 305168955,
            "range": "± 2690763",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2830315,
            "range": "± 112300",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 431047037,
            "range": "± 14959013",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1688184,
            "range": "± 10662",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4278,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4964,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 141742033,
            "range": "± 1056732",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 202796944581,
            "range": "± 71437310",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13400022886,
            "range": "± 74497885",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39234418,
            "range": "± 191637",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15646379,
            "range": "± 40134",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 233223,
            "range": "± 19114",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39245294,
            "range": "± 130624",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15840097,
            "range": "± 43980",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 226550,
            "range": "± 5695",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 23332193,
            "range": "± 321749",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 95306,
            "range": "± 1030",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 430,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 500,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 993432,
            "range": "± 7345",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1451945196,
            "range": "± 3658635",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 335417,
            "range": "± 9591",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 226769,
            "range": "± 3457",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 98295,
            "range": "± 2183",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 335394,
            "range": "± 11881",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 252527,
            "range": "± 4359",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 97948,
            "range": "± 2503",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 242842,
            "range": "± 8904",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 93377,
            "range": "± 2442",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 387,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 454,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 336904,
            "range": "± 13261",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8857703,
            "range": "± 99200",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1021282,
            "range": "± 50595",
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
          "id": "88c3a9baa0021dee92c5a0a214ae59c9d7fd869c",
          "message": "ci: add CODEOWNERS with @Mec-iS as default owner",
          "timestamp": "2026-10-14T05:28:33Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/88c3a9baa0021dee92c5a0a214ae59c9d7fd869c"
        },
        "date": 1791993639617,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 16062428,
            "range": "± 1224861",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 44982516,
            "range": "± 478533",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 76896836,
            "range": "± 1548343",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 201713496,
            "range": "± 3772806",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 751609652400,
            "range": "± 2420478504",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 778841065,
            "range": "± 32240611",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 303917877,
            "range": "± 968712",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2773565,
            "range": "± 147951",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 423624977,
            "range": "± 32983653",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1693156,
            "range": "± 14527",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4420,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5117,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 141763533,
            "range": "± 190269",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 201559734406,
            "range": "± 74581580",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13341116175,
            "range": "± 35310583",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39284229,
            "range": "± 340142",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15565879,
            "range": "± 32760",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 189133,
            "range": "± 4119",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39352093,
            "range": "± 938942",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15809768,
            "range": "± 45838",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 189734,
            "range": "± 4914",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 23284943,
            "range": "± 122270",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 93312,
            "range": "± 609",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 428,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 499,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 982337,
            "range": "± 15795",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1439819353,
            "range": "± 32106394",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 341474,
            "range": "± 7686",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 226327,
            "range": "± 3550",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 96665,
            "range": "± 1773",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 341789,
            "range": "± 7876",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 247254,
            "range": "± 3185",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 97753,
            "range": "± 1789",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 248512,
            "range": "± 12309",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 91624,
            "range": "± 1916",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 386,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 454,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 334467,
            "range": "± 10484",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8935061,
            "range": "± 272862",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1147091,
            "range": "± 56870",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tunedconsulting@gmail.com",
            "name": "Lorenzo",
            "username": "Mec-iS"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab8e1fa90dee365a3a3e683d2843de4bcc07fa73",
          "message": "Merge pull request #2 from tuned-org-uk/bench/199-twonn-selection\n\nbench: Two-NN selection strategies at CVE scale (arrowspace-rs #199)",
          "timestamp": "2026-10-15T01:41:00+09:00",
          "tree_id": "de4b1fed04c271428a4a832866a74d617f928344",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ab8e1fa90dee365a3a3e683d2843de4bcc07fa73"
        },
        "date": 1792003809537,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 9364907,
            "range": "± 139271",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 27303974,
            "range": "± 472304",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 45559305,
            "range": "± 571029",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 123112885,
            "range": "± 2689496",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 486274003130,
            "range": "± 2328906189",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 395525530,
            "range": "± 3384984",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 146297954,
            "range": "± 4690392",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 1937299,
            "range": "± 77188",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 221863144,
            "range": "± 5838352",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1118240,
            "range": "± 18341",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 1961,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 2285,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 94189310,
            "range": "± 2000617",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 132785562097,
            "range": "± 1840849964",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 8467701856,
            "range": "± 118294824",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 22488106,
            "range": "± 337213",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 9535855,
            "range": "± 161267",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 111106,
            "range": "± 2707",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 23043999,
            "range": "± 722184",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 8957244,
            "range": "± 178054",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 105692,
            "range": "± 2463",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 14497589,
            "range": "± 469376",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 54821,
            "range": "± 1032",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 212,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 228,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 538494,
            "range": "± 13324",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 806293838,
            "range": "± 5447239",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 180268,
            "range": "± 10570",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 120958,
            "range": "± 3011",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 51689,
            "range": "± 2146",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 185810,
            "range": "± 7143",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 136919,
            "range": "± 5617",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 50695,
            "range": "± 1407",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 152157,
            "range": "± 3977",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 48354,
            "range": "± 780",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 214,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 232,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 192257,
            "range": "± 11075",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 5314132,
            "range": "± 116959",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 606982,
            "range": "± 41735",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lorenzo",
            "username": "Mec-iS",
            "email": "tunedconsulting@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ab8e1fa90dee365a3a3e683d2843de4bcc07fa73",
          "message": "Merge pull request #2 from tuned-org-uk/bench/199-twonn-selection\n\nbench: Two-NN selection strategies at CVE scale (arrowspace-rs #199)",
          "timestamp": "2026-10-14T16:41:00Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ab8e1fa90dee365a3a3e683d2843de4bcc07fa73"
        },
        "date": 1792079669492,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 16097670,
            "range": "± 166426",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 45359588,
            "range": "± 571632",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 77840351,
            "range": "± 1963106",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 203291141,
            "range": "± 3266566",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 791349864301,
            "range": "± 931228593",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 794341316,
            "range": "± 17529825",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 286789541,
            "range": "± 3150768",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3184308,
            "range": "± 113334",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 459866799,
            "range": "± 3466205",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1695234,
            "range": "± 16626",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4288,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4989,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 171714323,
            "range": "± 477804",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 190888871748,
            "range": "± 54897248",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13413009369,
            "range": "± 133222440",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 43216978,
            "range": "± 1564456",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 16053260,
            "range": "± 114576",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 280522,
            "range": "± 22121",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 43198835,
            "range": "± 1640720",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 16381259,
            "range": "± 101026",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 280816,
            "range": "± 18775",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 27491696,
            "range": "± 1085984",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 94315,
            "range": "± 846",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 438,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 509,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 989641,
            "range": "± 10410",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1516730114,
            "range": "± 26442933",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 349567,
            "range": "± 11891",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 226918,
            "range": "± 5442",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 97703,
            "range": "± 2042",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 345333,
            "range": "± 15475",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 245949,
            "range": "± 11488",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 98369,
            "range": "± 2357",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 248661,
            "range": "± 11108",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 92905,
            "range": "± 1755",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 387,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 454,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 337468,
            "range": "± 16007",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8903644,
            "range": "± 125735",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1035029,
            "range": "± 59985",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tunedconsulting@gmail.com",
            "name": "Lorenzo",
            "username": "Mec-iS"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3e4ab4f0fe9df62ed277af58df123eb26c56345",
          "message": "Merge pull request #3 from tuned-org-uk/bench/v0.30.0-dispersion-gate\n\nbench: dispersion A/B + twonn in matrix, v0.30.0 leg, iai gate decoupled",
          "timestamp": "2026-10-16T02:37:00+09:00",
          "tree_id": "27553ba19e4ba32d7f6217fae20dd9b3eeffeba0",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/f3e4ab4f0fe9df62ed277af58df123eb26c56345"
        },
        "date": 1792105638857,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 16009899,
            "range": "± 953549",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 44979523,
            "range": "± 1287181",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 77382304,
            "range": "± 1644614",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 202355618,
            "range": "± 3614492",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 740995498895,
            "range": "± 1003741425",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 819658744,
            "range": "± 1163380",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 327852099,
            "range": "± 4436711",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3527227,
            "range": "± 91846",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 574445327,
            "range": "± 43100500",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1698539,
            "range": "± 5761",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3721,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4400,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 141688409,
            "range": "± 1862307",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 201490274401,
            "range": "± 461065001",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 1565431,
            "range": "± 28953",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 1812525,
            "range": "± 44786",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 200428582,
            "range": "± 979848",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13429183915,
            "range": "± 182585439",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39976474,
            "range": "± 942302",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15669877,
            "range": "± 22882",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 256455,
            "range": "± 22382",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 40049463,
            "range": "± 1132710",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15907803,
            "range": "± 30197",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 248342,
            "range": "± 19773",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 24358565,
            "range": "± 1167145",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 94408,
            "range": "± 759",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 433,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 503,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 985920,
            "range": "± 10337",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1432250524,
            "range": "± 16034096",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 356350,
            "range": "± 16042",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 233348,
            "range": "± 4691",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 100023,
            "range": "± 2349",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 351484,
            "range": "± 13143",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 252545,
            "range": "± 8360",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 99435,
            "range": "± 2324",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 259823,
            "range": "± 11369",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 93619,
            "range": "± 1575",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 387,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 455,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 339076,
            "range": "± 10714",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8848516,
            "range": "± 127380",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1026164,
            "range": "± 52657",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1151371155,
            "range": "± 9745432",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1178191543,
            "range": "± 17606083",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 9706643754,
            "range": "± 57592660",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 9670561922,
            "range": "± 46735010",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 243522458884,
            "range": "± 1844891872",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 242709755818,
            "range": "± 3144400695",
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
          "id": "fa16b862cccc7deda006a49660001c46df161740",
          "message": "bench(criterion): record v0.30.0 results [skip ci]",
          "timestamp": "2026-10-15T21:51:35Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/fa16b862cccc7deda006a49660001c46df161740"
        },
        "date": 1792172483189,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 15920959,
            "range": "± 825547",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 44706841,
            "range": "± 552896",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 76299650,
            "range": "± 1443865",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 198420016,
            "range": "± 3132266",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 741128667721,
            "range": "± 1382054706",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 813359649,
            "range": "± 22557858",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 277326668,
            "range": "± 2341995",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2635713,
            "range": "± 84972",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 448934566,
            "range": "± 23740493",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1697248,
            "range": "± 7128",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3782,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4449,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 141342863,
            "range": "± 315743",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 199771484145,
            "range": "± 68698734",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 1598437,
            "range": "± 32868",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 1853211,
            "range": "± 55858",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 189436891,
            "range": "± 970415",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 14487352240,
            "range": "± 29218972",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 37748591,
            "range": "± 175099",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14759356,
            "range": "± 34647",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 266570,
            "range": "± 2848",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37849759,
            "range": "± 124078",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14864393,
            "range": "± 47826",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 264484,
            "range": "± 3576",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 21979606,
            "range": "± 984428",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 90335,
            "range": "± 1076",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 496,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1122689,
            "range": "± 31331",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1349863371,
            "range": "± 21252935",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 340488,
            "range": "± 9596",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 227028,
            "range": "± 3982",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 95595,
            "range": "± 2224",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 337688,
            "range": "± 9319",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 241865,
            "range": "± 4103",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 95174,
            "range": "± 2045",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 259947,
            "range": "± 9951",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 89474,
            "range": "± 1424",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 441,
            "range": "± 1",
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
            "value": 343396,
            "range": "± 12778",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9278895,
            "range": "± 90768",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1142517,
            "range": "± 76407",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1175191617,
            "range": "± 9078907",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1177871212,
            "range": "± 9504194",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 9952099585,
            "range": "± 39429694",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 9951891941,
            "range": "± 35876126",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 240463569596,
            "range": "± 787476541",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 239777440734,
            "range": "± 1101785176",
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
          "id": "c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61",
          "message": "ci(compare): publish with gaps when a leg's artifact is missing\n\nA criterion leg that panics or slow-times-out uploads no criterion.json,\nand the old !failure() guard plus parse_bencher's hard exit made the\ncompare job fail on the missing file — so a partial leg took the\ncomparison page down with it. compare now runs on always() && !cancelled()\nand make_compare_page.py drops missing/unreadable inputs with a\n::warning:: per leg, rendering the surviving columns with gap markers\n(the render already drew those for benches missing from one column).\nExit 1 only when no input is usable at all.\n\nDrive-by: CHART_LINKS pointed at dead dev-v0.26.x chart dirs; now lists\nthe four live ones.",
          "timestamp": "2026-10-19T07:47:58+01:00",
          "tree_id": "cea27bdc3acefb73fe598929dc989354bb16f651",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61"
        },
        "date": 1792401576122,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 16010140,
            "range": "± 1003376",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 44980098,
            "range": "± 664951",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 76854143,
            "range": "± 1503171",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 201599621,
            "range": "± 3934077",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 770429709,
            "range": "± 11801003",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 278090827,
            "range": "± 737206",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3079859,
            "range": "± 101907",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 424080360,
            "range": "± 9954067",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1701809,
            "range": "± 13811",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3753,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4476,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 1586621,
            "range": "± 34316",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 1834132,
            "range": "± 34504",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 200359241,
            "range": "± 1183318",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 14386044945,
            "range": "± 134103659",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 37758960,
            "range": "± 900057",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14725743,
            "range": "± 30300",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 214046,
            "range": "± 4734",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37712067,
            "range": "± 64003",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14792648,
            "range": "± 36548",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 208888,
            "range": "± 3505",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 21883707,
            "range": "± 95757",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 91259,
            "range": "± 661",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 444,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 515,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1098651,
            "range": "± 29788",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1380375487,
            "range": "± 29262230",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 335657,
            "range": "± 9794",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 228639,
            "range": "± 3618",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 98054,
            "range": "± 2755",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 336755,
            "range": "± 9768",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 246680,
            "range": "± 3418",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 98491,
            "range": "± 2346",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 247405,
            "range": "± 9813",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 92539,
            "range": "± 2433",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 441,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 505,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 346744,
            "range": "± 9704",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9562683,
            "range": "± 171605",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1141679,
            "range": "± 48872",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1038536352,
            "range": "± 17392091",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1056358603,
            "range": "± 19221859",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 9043258541,
            "range": "± 97697609",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 9111443247,
            "range": "± 73225393",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 231853734950,
            "range": "± 4151111255",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 231984102023,
            "range": "± 2018717276",
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
          "id": "c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61",
          "message": "ci(compare): publish with gaps when a leg's artifact is missing\n\nA criterion leg that panics or slow-times-out uploads no criterion.json,\nand the old !failure() guard plus parse_bencher's hard exit made the\ncompare job fail on the missing file — so a partial leg took the\ncomparison page down with it. compare now runs on always() && !cancelled()\nand make_compare_page.py drops missing/unreadable inputs with a\n::warning:: per leg, rendering the surviving columns with gap markers\n(the render already drew those for benches missing from one column).\nExit 1 only when no input is usable at all.\n\nDrive-by: CHART_LINKS pointed at dead dev-v0.26.x chart dirs; now lists\nthe four live ones.",
          "timestamp": "2026-10-19T06:47:58Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61"
        },
        "date": 1792429153338,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 16012902,
            "range": "± 443596",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 44795698,
            "range": "± 495138",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 76457538,
            "range": "± 1350917",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 198677293,
            "range": "± 3219976",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 859127842,
            "range": "± 51984590",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 285110769,
            "range": "± 724883",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3606184,
            "range": "± 77232",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 500803623,
            "range": "± 6712654",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1681508,
            "range": "± 9099",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4289,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4959,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 1605075,
            "range": "± 22608",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 1836163,
            "range": "± 43908",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 189754430,
            "range": "± 2722186",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13391823409,
            "range": "± 69925949",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 37781918,
            "range": "± 206044",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14564057,
            "range": "± 34178",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 314283,
            "range": "± 30845",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37838139,
            "range": "± 298637",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14676087,
            "range": "± 37310",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 271266,
            "range": "± 10085",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22420229,
            "range": "± 463545",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 94935,
            "range": "± 1281",
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
            "value": 503,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 997860,
            "range": "± 11724",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1440402097,
            "range": "± 15866454",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 335946,
            "range": "± 8472",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 231204,
            "range": "± 2903",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 97148,
            "range": "± 2583",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 337636,
            "range": "± 6658",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 252523,
            "range": "± 3559",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 97942,
            "range": "± 2523",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 248689,
            "range": "± 7438",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 94828,
            "range": "± 2582",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 436,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 506,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 353744,
            "range": "± 7112",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9503408,
            "range": "± 121616",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1168475,
            "range": "± 54064",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1082180181,
            "range": "± 14649794",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1066509741,
            "range": "± 19279434",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 9058569480,
            "range": "± 51298762",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 9097922926,
            "range": "± 48441644",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 236237718223,
            "range": "± 3650636344",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 230750610734,
            "range": "± 2251223507",
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
          "id": "c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61",
          "message": "ci(compare): publish with gaps when a leg's artifact is missing\n\nA criterion leg that panics or slow-times-out uploads no criterion.json,\nand the old !failure() guard plus parse_bencher's hard exit made the\ncompare job fail on the missing file — so a partial leg took the\ncomparison page down with it. compare now runs on always() && !cancelled()\nand make_compare_page.py drops missing/unreadable inputs with a\n::warning:: per leg, rendering the surviving columns with gap markers\n(the render already drew those for benches missing from one column).\nExit 1 only when no input is usable at all.\n\nDrive-by: CHART_LINKS pointed at dead dev-v0.26.x chart dirs; now lists\nthe four live ones.",
          "timestamp": "2026-10-19T06:47:58Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61"
        },
        "date": 1792505118559,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 8277840,
            "range": "± 343359",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 26258758,
            "range": "± 855033",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 42554109,
            "range": "± 952074",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 124389030,
            "range": "± 6148966",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 421853674,
            "range": "± 4397449",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 156880495,
            "range": "± 1353731",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 1903597,
            "range": "± 69637",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 217689528,
            "range": "± 7687089",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1110910,
            "range": "± 9070",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 1956,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 2300,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 1055556,
            "range": "± 17799",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 1240545,
            "range": "± 11885",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 134821059,
            "range": "± 1308139",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 8635754019,
            "range": "± 458471052",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 19789366,
            "range": "± 919755",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 7697676,
            "range": "± 64788",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 126473,
            "range": "± 2574",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 19850517,
            "range": "± 300031",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 7839062,
            "range": "± 63319",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 127385,
            "range": "± 2094",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 12191477,
            "range": "± 720452",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 51996,
            "range": "± 872",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 211,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 219,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 578767,
            "range": "± 29571",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 820039526,
            "range": "± 6564760",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 193455,
            "range": "± 10713",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 122230,
            "range": "± 2968",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 52218,
            "range": "± 1482",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 195680,
            "range": "± 14707",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 132535,
            "range": "± 4918",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 52167,
            "range": "± 1984",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 151530,
            "range": "± 5528",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 51786,
            "range": "± 901",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 208,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 217,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 196986,
            "range": "± 6334",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 5332891,
            "range": "± 103218",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 644994,
            "range": "± 33256",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 583052164,
            "range": "± 7432114",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 578320819,
            "range": "± 4620871",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 5118295049,
            "range": "± 56955009",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 5072125445,
            "range": "± 57442980",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 129523529217,
            "range": "± 3117308165",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 131192081411,
            "range": "± 2493386396",
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
          "id": "c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61",
          "message": "ci(compare): publish with gaps when a leg's artifact is missing\n\nA criterion leg that panics or slow-times-out uploads no criterion.json,\nand the old !failure() guard plus parse_bencher's hard exit made the\ncompare job fail on the missing file — so a partial leg took the\ncomparison page down with it. compare now runs on always() && !cancelled()\nand make_compare_page.py drops missing/unreadable inputs with a\n::warning:: per leg, rendering the surviving columns with gap markers\n(the render already drew those for benches missing from one column).\nExit 1 only when no input is usable at all.\n\nDrive-by: CHART_LINKS pointed at dead dev-v0.26.x chart dirs; now lists\nthe four live ones.",
          "timestamp": "2026-10-19T06:47:58Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61"
        },
        "date": 1792600771613,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 12836981,
            "range": "± 175214",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 38786262,
            "range": "± 687353",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 59632597,
            "range": "± 2439317",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 170420743,
            "range": "± 7385610",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 645604033,
            "range": "± 3542451",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 224899374,
            "range": "± 3599744",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2678637,
            "range": "± 21167",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 362797515,
            "range": "± 2691716",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1918065,
            "range": "± 9307",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3804,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4243,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 1774445,
            "range": "± 24246",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 2299705,
            "range": "± 36690",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 232292502,
            "range": "± 2330247",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 12035178842,
            "range": "± 1193055567",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 28587494,
            "range": "± 113379",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 10732835,
            "range": "± 40774",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 225083,
            "range": "± 4857",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 28358489,
            "range": "± 96714",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 10999579,
            "range": "± 31521",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 225957,
            "range": "± 5456",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 17728720,
            "range": "± 1051207",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 79147,
            "range": "± 698",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 364,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 365,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 893680,
            "range": "± 7889",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1493781348,
            "range": "± 17677376",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 275881,
            "range": "± 4521",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 187619,
            "range": "± 2040",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 82921,
            "range": "± 702",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 271918,
            "range": "± 3884",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 204054,
            "range": "± 2095",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 82591,
            "range": "± 885",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 216983,
            "range": "± 3843",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 80261,
            "range": "± 862",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 397,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 400,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 364292,
            "range": "± 12541",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9543916,
            "range": "± 270766",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1090926,
            "range": "± 50308",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1088898647,
            "range": "± 26360307",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1064617923,
            "range": "± 21021951",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 11740620543,
            "range": "± 103258504",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 11775333352,
            "range": "± 110649304",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 404105735498,
            "range": "± 6412552104",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 411036844223,
            "range": "± 8751695042",
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
          "id": "c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61",
          "message": "ci(compare): publish with gaps when a leg's artifact is missing\n\nA criterion leg that panics or slow-times-out uploads no criterion.json,\nand the old !failure() guard plus parse_bencher's hard exit made the\ncompare job fail on the missing file — so a partial leg took the\ncomparison page down with it. compare now runs on always() && !cancelled()\nand make_compare_page.py drops missing/unreadable inputs with a\n::warning:: per leg, rendering the surviving columns with gap markers\n(the render already drew those for benches missing from one column).\nExit 1 only when no input is usable at all.\n\nDrive-by: CHART_LINKS pointed at dead dev-v0.26.x chart dirs; now lists\nthe four live ones.",
          "timestamp": "2026-10-19T06:47:58Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61"
        },
        "date": 1792683977181,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 14014243,
            "range": "± 891451",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 42864157,
            "range": "± 503796",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 66746812,
            "range": "± 1174004",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 191048180,
            "range": "± 11371115",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 840042135,
            "range": "± 41837449",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 280503198,
            "range": "± 591241",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3215512,
            "range": "± 85215",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 489706834,
            "range": "± 3405884",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1667911,
            "range": "± 7491",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4370,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5062,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 1582494,
            "range": "± 90383",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 1821248,
            "range": "± 24709",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 189409018,
            "range": "± 5314515",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13654069976,
            "range": "± 160494929",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 36934283,
            "range": "± 208788",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 13570237,
            "range": "± 35670",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 292991,
            "range": "± 8642",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 36774323,
            "range": "± 341767",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 13758900,
            "range": "± 1325862",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 271984,
            "range": "± 10237",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 21756609,
            "range": "± 604869",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 87412,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 434,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 490,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 997333,
            "range": "± 5559",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1424303919,
            "range": "± 2264679",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 341602,
            "range": "± 6240",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 208579,
            "range": "± 3203",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 89883,
            "range": "± 1621",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 340544,
            "range": "± 7595",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 222425,
            "range": "± 1741",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 88789,
            "range": "± 5850",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 252887,
            "range": "± 7152",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 86649,
            "range": "± 1105",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 428,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 489,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 339907,
            "range": "± 11326",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9438416,
            "range": "± 637080",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1167092,
            "range": "± 47452",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1085980401,
            "range": "± 50675718",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1072689645,
            "range": "± 40925922",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 9560370406,
            "range": "± 175642672",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 9586023038,
            "range": "± 189292087",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 285527842309,
            "range": "± 2496203992",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 282347496433,
            "range": "± 2722044459",
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
          "id": "c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61",
          "message": "ci(compare): publish with gaps when a leg's artifact is missing\n\nA criterion leg that panics or slow-times-out uploads no criterion.json,\nand the old !failure() guard plus parse_bencher's hard exit made the\ncompare job fail on the missing file — so a partial leg took the\ncomparison page down with it. compare now runs on always() && !cancelled()\nand make_compare_page.py drops missing/unreadable inputs with a\n::warning:: per leg, rendering the surviving columns with gap markers\n(the render already drew those for benches missing from one column).\nExit 1 only when no input is usable at all.\n\nDrive-by: CHART_LINKS pointed at dead dev-v0.26.x chart dirs; now lists\nthe four live ones.",
          "timestamp": "2026-10-19T06:47:58Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61"
        },
        "date": 1792772318827,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 12692430,
            "range": "± 853558",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 38977303,
            "range": "± 1287519",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 59746377,
            "range": "± 1740301",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 170917493,
            "range": "± 8213363",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 602446582,
            "range": "± 4836026",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 224239822,
            "range": "± 1591931",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2578374,
            "range": "± 21767",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 327952392,
            "range": "± 2454500",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1860548,
            "range": "± 19075",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3215,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3963,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 1797857,
            "range": "± 49278",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 2038895,
            "range": "± 35037",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 231426290,
            "range": "± 3752919",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 12138000761,
            "range": "± 1190850998",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 30277574,
            "range": "± 216121",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 10639453,
            "range": "± 80248",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 237928,
            "range": "± 6792",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 30216255,
            "range": "± 146859",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 11273142,
            "range": "± 67994",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 240393,
            "range": "± 3706",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 17920154,
            "range": "± 86158",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 79906,
            "range": "± 469",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 358,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 373,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 878826,
            "range": "± 7757",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1490232072,
            "range": "± 7806203",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 292068,
            "range": "± 6835",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 201856,
            "range": "± 6185",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 82837,
            "range": "± 1364",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 294259,
            "range": "± 9034",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 208967,
            "range": "± 2948",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 83473,
            "range": "± 1257",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 221413,
            "range": "± 3792",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 79599,
            "range": "± 1042",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 431,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 439,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 355722,
            "range": "± 11721",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9453532,
            "range": "± 201499",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1053360,
            "range": "± 77040",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1073613217,
            "range": "± 14004662",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1067334986,
            "range": "± 19541913",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 11520466770,
            "range": "± 135829809",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 11488679973,
            "range": "± 83937854",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 404141787114,
            "range": "± 6462273909",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 408096969074,
            "range": "± 6401158814",
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
          "id": "c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61",
          "message": "ci(compare): publish with gaps when a leg's artifact is missing\n\nA criterion leg that panics or slow-times-out uploads no criterion.json,\nand the old !failure() guard plus parse_bencher's hard exit made the\ncompare job fail on the missing file — so a partial leg took the\ncomparison page down with it. compare now runs on always() && !cancelled()\nand make_compare_page.py drops missing/unreadable inputs with a\n::warning:: per leg, rendering the surviving columns with gap markers\n(the render already drew those for benches missing from one column).\nExit 1 only when no input is usable at all.\n\nDrive-by: CHART_LINKS pointed at dead dev-v0.26.x chart dirs; now lists\nthe four live ones.",
          "timestamp": "2026-10-19T06:47:58Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/c0e69f5f7c51bfa699d3c52cd7d038ff9ccfaf61"
        },
        "date": 1792853101710,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 14294877,
            "range": "± 777492",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 43910811,
            "range": "± 3733458",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 67997537,
            "range": "± 1480190",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 193866946,
            "range": "± 3005022",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 764972310,
            "range": "± 14003206",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 268602371,
            "range": "± 755095",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2601352,
            "range": "± 42498",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 413725763,
            "range": "± 7380063",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1664024,
            "range": "± 98726",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3534,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4218,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 1565123,
            "range": "± 9405",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 1807722,
            "range": "± 23156",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 201068758,
            "range": "± 12561661",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13580527440,
            "range": "± 523330741",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 37968611,
            "range": "± 972484",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 13781747,
            "range": "± 1427276",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 240159,
            "range": "± 3504",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 38519154,
            "range": "± 642633",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 13917921,
            "range": "± 36560",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 239605,
            "range": "± 4011",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 23312106,
            "range": "± 552937",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 88182,
            "range": "± 687",
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
            "value": 498,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 996615,
            "range": "± 5760",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1442417968,
            "range": "± 21917804",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 338671,
            "range": "± 3913",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 203112,
            "range": "± 1738",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 86892,
            "range": "± 1422",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 338426,
            "range": "± 5109",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 215150,
            "range": "± 4248",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 86768,
            "range": "± 1151",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 250896,
            "range": "± 4973",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 84134,
            "range": "± 1116",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 427,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 488,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 339730,
            "range": "± 16731",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9401809,
            "range": "± 59155",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1145873,
            "range": "± 81771",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1181576632,
            "range": "± 39098168",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1179864021,
            "range": "± 36395042",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 10098248842,
            "range": "± 151272794",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 10084446933,
            "range": "± 156784610",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 266262070763,
            "range": "± 2914734653",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 271273020650,
            "range": "± 1461122272",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}