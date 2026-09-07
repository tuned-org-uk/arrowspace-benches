window.BENCHMARK_DATA = {
  "lastUpdate": 1788799500109,
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
      }
    ]
  }
}