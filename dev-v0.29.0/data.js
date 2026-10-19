window.BENCHMARK_DATA = {
  "lastUpdate": 1792401184517,
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
          "id": "88c3a9baa0021dee92c5a0a214ae59c9d7fd869c",
          "message": "ci: add CODEOWNERS with @Mec-iS as default owner",
          "timestamp": "2026-10-14T06:28:33+01:00",
          "tree_id": "5c8aac6d36f00f5b9ebf3e08ca0911b8398d93de",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/88c3a9baa0021dee92c5a0a214ae59c9d7fd869c"
        },
        "date": 1791970362144,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 16812479,
            "range": "± 1058709",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 48957957,
            "range": "± 586810",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 80027464,
            "range": "± 2406247",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 215681093,
            "range": "± 3489766",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 881978043555,
            "range": "± 1075686136",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 851752367,
            "range": "± 5013104",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 288450648,
            "range": "± 2000342",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3787380,
            "range": "± 135554",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 491711743,
            "range": "± 32126796",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2673501,
            "range": "± 11788",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 8111,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 8799,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 164034589,
            "range": "± 1968955",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 303529653401,
            "range": "± 432346087",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 15413133952,
            "range": "± 53999729",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39137013,
            "range": "± 1448448",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14560563,
            "range": "± 42747",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 287089,
            "range": "± 27727",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37928945,
            "range": "± 1273923",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14921504,
            "range": "± 62825",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 366165,
            "range": "± 53474",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 25852339,
            "range": "± 513946",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 108744,
            "range": "± 822",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 374,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 445,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1053145,
            "range": "± 24618",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 2013911142,
            "range": "± 11167116",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 371444,
            "range": "± 7186",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 261386,
            "range": "± 3633",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 118642,
            "range": "± 2188",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 372755,
            "range": "± 7598",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 282802,
            "range": "± 3163",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 117814,
            "range": "± 3109",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 274304,
            "range": "± 6572",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 111350,
            "range": "± 2556",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 442,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 500,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 406273,
            "range": "± 9766",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 12541094,
            "range": "± 330788",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1191229,
            "range": "± 94908",
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
        "date": 1791993537248,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 12690054,
            "range": "± 147363",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 37144804,
            "range": "± 458636",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 60810444,
            "range": "± 1007974",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 163416427,
            "range": "± 2960516",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 700417187654,
            "range": "± 678046277",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 633981925,
            "range": "± 6352648",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 228357203,
            "range": "± 375832",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3210622,
            "range": "± 62878",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 334710909,
            "range": "± 986928",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2058966,
            "range": "± 9926",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 6101,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 6685,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 122905902,
            "range": "± 376320",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 252232315710,
            "range": "± 238597438",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 11164703903,
            "range": "± 92066086",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 30662593,
            "range": "± 97910",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 11771555,
            "range": "± 61719",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 262481,
            "range": "± 15843",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 30603369,
            "range": "± 638628",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 12193976,
            "range": "± 258115",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 281518,
            "range": "± 26596",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 17342985,
            "range": "± 263464",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 78257,
            "range": "± 579",
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
            "value": 368,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 817832,
            "range": "± 12266",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1354533477,
            "range": "± 16579087",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 291246,
            "range": "± 8826",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 193069,
            "range": "± 1112",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 83684,
            "range": "± 914",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 292550,
            "range": "± 5277",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 210535,
            "range": "± 2623",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 83269,
            "range": "± 890",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 211347,
            "range": "± 9279",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 81496,
            "range": "± 1869",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 357,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 413,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 317168,
            "range": "± 6738",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8698006,
            "range": "± 95700",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 828801,
            "range": "± 51386",
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
        "date": 1792008614654,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 13758635,
            "range": "± 743220",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 40169735,
            "range": "± 1276958",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 61847230,
            "range": "± 2078357",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 172151094,
            "range": "± 5227305",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 735004899602,
            "range": "± 37731053026",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 548502692,
            "range": "± 2163791",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 193205106,
            "range": "± 2467820",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2880736,
            "range": "± 20937",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 317483592,
            "range": "± 3315449",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2400618,
            "range": "± 124046",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 6153,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 6559,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 127841540,
            "range": "± 2038455",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 286107966069,
            "range": "± 1819664748",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 10502394773,
            "range": "± 51891793",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 25995844,
            "range": "± 127266",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 9998440,
            "range": "± 20166",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 238870,
            "range": "± 3850",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 25965128,
            "range": "± 123999",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 10438338,
            "range": "± 42097",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 238869,
            "range": "± 1487",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 15177224,
            "range": "± 41538",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 78298,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 269,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 311,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 738476,
            "range": "± 5242",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1584542640,
            "range": "± 1463294",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 260044,
            "range": "± 15946",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 199351,
            "range": "± 2916",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 84323,
            "range": "± 2636",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 258038,
            "range": "± 3281",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 214275,
            "range": "± 2356",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 84295,
            "range": "± 1781",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 199937,
            "range": "± 2131",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 81575,
            "range": "± 3007",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 376,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 402,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 357802,
            "range": "± 11780",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 10924249,
            "range": "± 498424",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 823960,
            "range": "± 67379",
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
        "date": 1792082114035,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 17046061,
            "range": "± 1063518",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 49263889,
            "range": "± 1217975",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 81374226,
            "range": "± 1957611",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 218580321,
            "range": "± 3798112",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 888265513672,
            "range": "± 5712283881",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 855513748,
            "range": "± 1766061",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 286321977,
            "range": "± 1289455",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3844695,
            "range": "± 101214",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 498786432,
            "range": "± 1252652",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2646506,
            "range": "± 9766",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 7911,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 8586,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 165026818,
            "range": "± 2142831",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 303038971652,
            "range": "± 274156762",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13952067866,
            "range": "± 20878202",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 38319824,
            "range": "± 72395",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14437094,
            "range": "± 31364",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 394304,
            "range": "± 38941",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 38413973,
            "range": "± 430323",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14762491,
            "range": "± 343497",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 354839,
            "range": "± 23245",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22036784,
            "range": "± 236715",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 107151,
            "range": "± 837",
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
            "value": 440,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1001780,
            "range": "± 10525",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1961063655,
            "range": "± 25231614",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 368688,
            "range": "± 6772",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 257208,
            "range": "± 2195",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 116596,
            "range": "± 2585",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 369968,
            "range": "± 5078",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 277074,
            "range": "± 3845",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 116829,
            "range": "± 2293",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 279215,
            "range": "± 7520",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 111477,
            "range": "± 2429",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 443,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 514,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 416836,
            "range": "± 11406",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 12740129,
            "range": "± 176971",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1048456,
            "range": "± 68942",
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
        "date": 1792249518094,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 9269320,
            "range": "± 406852",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 28984031,
            "range": "± 397350",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 45296346,
            "range": "± 798101",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 129291682,
            "range": "± 2702803",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 520704978422,
            "range": "± 8352151379",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 404951056,
            "range": "± 20851033",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 148775015,
            "range": "± 881232",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2255303,
            "range": "± 146855",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 224023452,
            "range": "± 978436",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1640149,
            "range": "± 19542",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3135,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3382,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 79241626,
            "range": "± 622811",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 196650142309,
            "range": "± 2792223106",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 1589788,
            "range": "± 48031",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 1807528,
            "range": "± 76526",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 194174415,
            "range": "± 5089740",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 8203940075,
            "range": "± 131763517",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 20331738,
            "range": "± 229677",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 8361123,
            "range": "± 64534",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 131216,
            "range": "± 5754",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 20848525,
            "range": "± 2076805",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 8371372,
            "range": "± 468912",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 128264,
            "range": "± 4934",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 13693797,
            "range": "± 1367589",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 66026,
            "range": "± 926",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 212,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 230,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 541282,
            "range": "± 4834",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1197850755,
            "range": "± 18666207",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 194067,
            "range": "± 15351",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 137117,
            "range": "± 2505",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 67207,
            "range": "± 1904",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 197525,
            "range": "± 4032",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 148623,
            "range": "± 2613",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 67300,
            "range": "± 1142",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 156381,
            "range": "± 4877",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 63617,
            "range": "± 1152",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 220,
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
            "value": 237738,
            "range": "± 5153",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 7706486,
            "range": "± 167355",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 603204,
            "range": "± 38128",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 562908410,
            "range": "± 9654022",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 559483804,
            "range": "± 12125859",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 4625758697,
            "range": "± 80818389",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 4624750510,
            "range": "± 114817774",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 120267541223,
            "range": "± 3893505647",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 122924802308,
            "range": "± 5892957636",
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
        "date": 1792401183800,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 12655115,
            "range": "± 122428",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 36851070,
            "range": "± 476400",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 60394852,
            "range": "± 1001190",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 162590248,
            "range": "± 2863907",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 632481183,
            "range": "± 5167123",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 227467718,
            "range": "± 430022",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2873911,
            "range": "± 6506",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 337052827,
            "range": "± 413971",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2066791,
            "range": "± 5025",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 6070,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 6634,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 1981058,
            "range": "± 68097",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 2167391,
            "range": "± 6496",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 250192276,
            "range": "± 1347106",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 10741259116,
            "range": "± 33547574",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 31341324,
            "range": "± 15209",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 11742469,
            "range": "± 105535",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 234001,
            "range": "± 3209",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 31389751,
            "range": "± 18375",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 12032399,
            "range": "± 23089",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 233697,
            "range": "± 2822",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 17651945,
            "range": "± 74647",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 78401,
            "range": "± 851",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 316,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 365,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 805768,
            "range": "± 12003",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1354055551,
            "range": "± 5039650",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 283973,
            "range": "± 4100",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 190114,
            "range": "± 1044",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 79261,
            "range": "± 797",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 281606,
            "range": "± 4084",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 207070,
            "range": "± 1898",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 77597,
            "range": "± 984",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 206548,
            "range": "± 4262",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 77600,
            "range": "± 1047",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 364,
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
            "value": 312594,
            "range": "± 5132",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8504220,
            "range": "± 72241",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 831854,
            "range": "± 48660",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 862268774,
            "range": "± 3263024",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 861790999,
            "range": "± 2491924",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 7820395017,
            "range": "± 19030803",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 7829074667,
            "range": "± 18003164",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 235223285104,
            "range": "± 3090986428",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 235506796207,
            "range": "± 1475656772",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}