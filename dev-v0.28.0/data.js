window.BENCHMARK_DATA = {
  "lastUpdate": 1789830351096,
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
      }
    ]
  }
}