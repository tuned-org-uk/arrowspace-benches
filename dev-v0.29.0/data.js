window.BENCHMARK_DATA = {
  "lastUpdate": 1793292853813,
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
        "date": 1792430537869,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 15908174,
            "range": "± 144821",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 45917779,
            "range": "± 811502",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 76399919,
            "range": "± 1204569",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 203851956,
            "range": "± 3357756",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 797994440,
            "range": "± 4092705",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 293119335,
            "range": "± 1086348",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3786334,
            "range": "± 34819",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 417967662,
            "range": "± 206943",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2662275,
            "range": "± 4006",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 7849,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 8565,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 2569977,
            "range": "± 6318",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 2803503,
            "range": "± 11652",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 328964632,
            "range": "± 1495870",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 13912781083,
            "range": "± 45991544",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39597783,
            "range": "± 71342",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15115376,
            "range": "± 29733",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 286445,
            "range": "± 10150",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 40949933,
            "range": "± 308520",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 16098773,
            "range": "± 93022",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 292673,
            "range": "± 11862",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 23716420,
            "range": "± 65915",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 103860,
            "range": "± 1382",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 386,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 460,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1020323,
            "range": "± 14880",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1780506365,
            "range": "± 19838565",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 369413,
            "range": "± 8191",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 247110,
            "range": "± 2678",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 107501,
            "range": "± 1393",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 369229,
            "range": "± 11530",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 267903,
            "range": "± 4045",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 106773,
            "range": "± 2398",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 266157,
            "range": "± 7602",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 103873,
            "range": "± 1579",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 404,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 472,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 406085,
            "range": "± 11372",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 10992058,
            "range": "± 130352",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1082234,
            "range": "± 44771",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1120216444,
            "range": "± 4455908",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1118025720,
            "range": "± 3827423",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 9861792514,
            "range": "± 40999254",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 9853704871,
            "range": "± 62058253",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 279194469336,
            "range": "± 1548689502",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 278764426003,
            "range": "± 1705559924",
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
        "date": 1792510351119,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 14407826,
            "range": "± 1704769",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 45047050,
            "range": "± 789632",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 68552759,
            "range": "± 1575216",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 198861299,
            "range": "± 4038283",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 739480123,
            "range": "± 10823777",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 269293493,
            "range": "± 3816455",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3850471,
            "range": "± 48833",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 414823337,
            "range": "± 5793948",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2611649,
            "range": "± 12434",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 8188,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 8842,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 2501321,
            "range": "± 17293",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 2750223,
            "range": "± 22675",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 327948885,
            "range": "± 16431475",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 14303507864,
            "range": "± 499275564",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 37680019,
            "range": "± 409660",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14327136,
            "range": "± 103379",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 315291,
            "range": "± 13016",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37866792,
            "range": "± 257361",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14669758,
            "range": "± 28196",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 311829,
            "range": "± 5677",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 21866273,
            "range": "± 248330",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 101358,
            "range": "± 521",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 375,
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
            "value": 980849,
            "range": "± 12674",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1951618016,
            "range": "± 12323782",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 377232,
            "range": "± 8487",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 225476,
            "range": "± 1224",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 102163,
            "range": "± 10840",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 384940,
            "range": "± 8486",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 245187,
            "range": "± 2469",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 102719,
            "range": "± 1246",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 293030,
            "range": "± 8038",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 100057,
            "range": "± 1013",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 382,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 442,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 407825,
            "range": "± 18974",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 12871509,
            "range": "± 121863",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1106155,
            "range": "± 96365",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1055340981,
            "range": "± 43241143",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1054924417,
            "range": "± 29918797",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 9476606126,
            "range": "± 180831189",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 9477290346,
            "range": "± 178887088",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 282961972826,
            "range": "± 2312635808",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 281553613794,
            "range": "± 1565741676",
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
        "date": 1792597246841,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 14247159,
            "range": "± 303245",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 45110886,
            "range": "± 672887",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 68309881,
            "range": "± 1542737",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 198354339,
            "range": "± 11858830",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 765853393,
            "range": "± 1200281",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 277102594,
            "range": "± 2032953",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3696859,
            "range": "± 62768",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 416427280,
            "range": "± 572727",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2603785,
            "range": "± 179500",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 7946,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 8648,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 2489712,
            "range": "± 21600",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 2727878,
            "range": "± 29283",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 328001309,
            "range": "± 16139867",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 14307160826,
            "range": "± 420719231",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 36931194,
            "range": "± 38693",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14336371,
            "range": "± 40610",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 280817,
            "range": "± 2668",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37016257,
            "range": "± 201811",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14655679,
            "range": "± 42382",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 278622,
            "range": "± 4893",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22039547,
            "range": "± 245716",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 101306,
            "range": "± 511",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 370,
            "range": "± 1",
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
            "value": 999899,
            "range": "± 13983",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1948278210,
            "range": "± 3611169",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 364447,
            "range": "± 13371",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 226170,
            "range": "± 2908",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 102742,
            "range": "± 1388",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 364687,
            "range": "± 6394",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 245539,
            "range": "± 2662",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 102483,
            "range": "± 1618",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 276056,
            "range": "± 14636",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 97892,
            "range": "± 798",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 382,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 441,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 405562,
            "range": "± 16500",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 12888500,
            "range": "± 772264",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1086659,
            "range": "± 52614",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1051618766,
            "range": "± 38805697",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1051125323,
            "range": "± 35647822",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 9463028131,
            "range": "± 159895619",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 9459188231,
            "range": "± 161205895",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 274815304529,
            "range": "± 2298057398",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 272809753339,
            "range": "± 1396934895",
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
        "date": 1792683997567,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 14374844,
            "range": "± 812565",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 45160594,
            "range": "± 579596",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 68484448,
            "range": "± 1164414",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 199535449,
            "range": "± 3652487",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 740365320,
            "range": "± 11064326",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 273682460,
            "range": "± 1118878",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 4090108,
            "range": "± 80256",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 415026714,
            "range": "± 5123177",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2594101,
            "range": "± 12632",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 7848,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 8486,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 2518617,
            "range": "± 23126",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 2763811,
            "range": "± 34269",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 327214442,
            "range": "± 16275211",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 14366048850,
            "range": "± 206611545",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 37485758,
            "range": "± 1174334",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14510487,
            "range": "± 168701",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 337493,
            "range": "± 27188",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 38099829,
            "range": "± 1045905",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14821968,
            "range": "± 51957",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 427803,
            "range": "± 38638",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 24891679,
            "range": "± 2047356",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 101169,
            "range": "± 860",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 374,
            "range": "± 0",
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
            "value": 980049,
            "range": "± 9753",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1973603486,
            "range": "± 13682506",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 368637,
            "range": "± 6111",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 228790,
            "range": "± 3968",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 103670,
            "range": "± 1614",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 368588,
            "range": "± 7097",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 246571,
            "range": "± 4648",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 103069,
            "range": "± 1149",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 280048,
            "range": "± 6271",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 100957,
            "range": "± 2777",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 381,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 441,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 407051,
            "range": "± 9497",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 12903068,
            "range": "± 851094",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1100222,
            "range": "± 60973",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1102552269,
            "range": "± 46499255",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1093990549,
            "range": "± 44053080",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 9618938212,
            "range": "± 180612644",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 9626472641,
            "range": "± 187376389",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 279410323953,
            "range": "± 2282457883",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 278272415292,
            "range": "± 2619471257",
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
        "date": 1792768823201,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 13847889,
            "range": "± 835011",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 44023706,
            "range": "± 784111",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 66733308,
            "range": "± 1323053",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 195168591,
            "range": "± 3768674",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 807832064,
            "range": "± 7864770",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 287882145,
            "range": "± 859902",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 4088766,
            "range": "± 49707",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 425609160,
            "range": "± 303962",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2682206,
            "range": "± 3928",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 6296,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 7003,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 2691939,
            "range": "± 110100",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 2807501,
            "range": "± 7072",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 337562701,
            "range": "± 4453543",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 14503699819,
            "range": "± 215793652",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 38500939,
            "range": "± 365542",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15526481,
            "range": "± 65924",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 288112,
            "range": "± 8254",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 38926213,
            "range": "± 445897",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15763486,
            "range": "± 22662",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 285461,
            "range": "± 5307",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22446516,
            "range": "± 492280",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 96049,
            "range": "± 570",
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
            "value": 442,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1033350,
            "range": "± 16967",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1715280195,
            "range": "± 13105605",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 364680,
            "range": "± 2464",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 228605,
            "range": "± 2901",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 99209,
            "range": "± 2092",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 364811,
            "range": "± 3989",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 246207,
            "range": "± 3382",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 98353,
            "range": "± 1452",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 272230,
            "range": "± 3305",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 95133,
            "range": "± 1196",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 391,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 449,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 396164,
            "range": "± 26147",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 10958907,
            "range": "± 220066",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1062415,
            "range": "± 48476",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1138356308,
            "range": "± 15951102",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1143893386,
            "range": "± 14723354",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 9924087183,
            "range": "± 48459860",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 9934883397,
            "range": "± 41137826",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 265986403937,
            "range": "± 3163758183",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 266080104091,
            "range": "± 2344990474",
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
        "date": 1792851320107,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 10724984,
            "range": "± 120511",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 34001919,
            "range": "± 513095",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 51854317,
            "range": "± 1113465",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 151059533,
            "range": "± 2662832",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 628242899,
            "range": "± 203915",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 225234110,
            "range": "± 2518593",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2981347,
            "range": "± 19744",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 330431072,
            "range": "± 4752687",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2075355,
            "range": "± 4100",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4958,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5517,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 1989968,
            "range": "± 3359",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 2175693,
            "range": "± 3154",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 256632550,
            "range": "± 2872595",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 11155972558,
            "range": "± 124708181",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 30989928,
            "range": "± 33307",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 11495514,
            "range": "± 18818",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 235514,
            "range": "± 5899",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 30944060,
            "range": "± 17852",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 11811039,
            "range": "± 34576",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 233556,
            "range": "± 4376",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 18421027,
            "range": "± 335056",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 75761,
            "range": "± 737",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 300,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 347,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 798270,
            "range": "± 4927",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1394343629,
            "range": "± 26722156",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 283447,
            "range": "± 4084",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 178153,
            "range": "± 2058",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 77416,
            "range": "± 1130",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 282845,
            "range": "± 4337",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 193822,
            "range": "± 2227",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 77288,
            "range": "± 952",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 209431,
            "range": "± 3264",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 75725,
            "range": "± 1238",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 349,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 392,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 304311,
            "range": "± 5370",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8483936,
            "range": "± 157587",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 823317,
            "range": "± 25613",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 872983006,
            "range": "± 4326748",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 873290586,
            "range": "± 6486566",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 7848324931,
            "range": "± 30784059",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 7857658461,
            "range": "± 25272241",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 222034700999,
            "range": "± 2485782731",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 222689869926,
            "range": "± 4377839427",
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
        "date": 1792936776940,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 8459243,
            "range": "± 425991",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 27529866,
            "range": "± 543692",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 42173794,
            "range": "± 1340440",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 122406289,
            "range": "± 7387657",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 399836596,
            "range": "± 15753094",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 146521924,
            "range": "± 3009181",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2706840,
            "range": "± 71159",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 223674275,
            "range": "± 7043428",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1671701,
            "range": "± 33028",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3213,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3408,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 1658582,
            "range": "± 35383",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 1831040,
            "range": "± 41416",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 203058642,
            "range": "± 4252632",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 8789242745,
            "range": "± 347056586",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 20086722,
            "range": "± 374704",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 8392557,
            "range": "± 199584",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 210487,
            "range": "± 15384",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 21551987,
            "range": "± 534823",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 8633414,
            "range": "± 89592",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 195092,
            "range": "± 10755",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 12696805,
            "range": "± 445439",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 63363,
            "range": "± 838",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 203,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 214,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 616512,
            "range": "± 11595",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1195275276,
            "range": "± 21404073",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 201892,
            "range": "± 7315",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 135791,
            "range": "± 2211",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 64476,
            "range": "± 1847",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 198099,
            "range": "± 5636",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 147760,
            "range": "± 3470",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 64609,
            "range": "± 3698",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 162093,
            "range": "± 7235",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 63858,
            "range": "± 3934",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 200,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 205,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 228320,
            "range": "± 5764",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 7383633,
            "range": "± 162558",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 626213,
            "range": "± 41773",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 678955940,
            "range": "± 11684307",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 665200999,
            "range": "± 13986391",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 5500127116,
            "range": "± 121347608",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 5523493770,
            "range": "± 113993503",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 137111115541,
            "range": "± 1997040641",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 137522523372,
            "range": "± 3835516172",
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
        "date": 1793033589645,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 13867590,
            "range": "± 457258",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 43905227,
            "range": "± 729713",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 66716794,
            "range": "± 1335794",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 194710348,
            "range": "± 4402561",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 807255197,
            "range": "± 4638789",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 288376785,
            "range": "± 643566",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3974487,
            "range": "± 78737",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 423790275,
            "range": "± 1944159",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2675074,
            "range": "± 45754",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 6335,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 7043,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 2559132,
            "range": "± 107316",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 2811728,
            "range": "± 15325",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 323420572,
            "range": "± 3862152",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 14463624087,
            "range": "± 176199218",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39964512,
            "range": "± 33755",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15050542,
            "range": "± 69332",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 283974,
            "range": "± 8919",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39993958,
            "range": "± 24620",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15380640,
            "range": "± 32216",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 280992,
            "range": "± 12131",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 23887581,
            "range": "± 420410",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 96505,
            "range": "± 586",
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
            "value": 442,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1018780,
            "range": "± 17551",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1812371074,
            "range": "± 46194164",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 366512,
            "range": "± 7098",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 231225,
            "range": "± 2099",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 99503,
            "range": "± 2507",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 365082,
            "range": "± 3676",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 247985,
            "range": "± 2201",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 99797,
            "range": "± 1372",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 271831,
            "range": "± 2620",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 97082,
            "range": "± 1895",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 449,
            "range": "± 12",
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
            "value": 398016,
            "range": "± 8428",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 11046460,
            "range": "± 348445",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1068635,
            "range": "± 44313",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1117102504,
            "range": "± 9341754",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1116322067,
            "range": "± 9621545",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 9978904185,
            "range": "± 39354067",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 9960300193,
            "range": "± 39095039",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 268858838495,
            "range": "± 1836181648",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 267095192826,
            "range": "± 4034288931",
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
        "date": 1793116693784,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 14406801,
            "range": "± 975131",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 45045167,
            "range": "± 517833",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 68586831,
            "range": "± 1374720",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 199911572,
            "range": "± 4160317",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 864886532,
            "range": "± 44979742",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 301522797,
            "range": "± 3317160",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3788426,
            "range": "± 62378",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 524076297,
            "range": "± 30745678",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2594383,
            "range": "± 8099",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 6886,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 7581,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 2473104,
            "range": "± 39777",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 2702056,
            "range": "± 26427",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 317516053,
            "range": "± 16310711",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 15576188099,
            "range": "± 1041899646",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39165114,
            "range": "± 406166",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15571110,
            "range": "± 88810",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 270833,
            "range": "± 6830",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 38919805,
            "range": "± 262283",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15812815,
            "range": "± 108166",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 330689,
            "range": "± 59792",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 24964015,
            "range": "± 2100017",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 103601,
            "range": "± 810",
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
            "value": 437,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1055311,
            "range": "± 10231",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 2026613325,
            "range": "± 107267556",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 367121,
            "range": "± 16780",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 230788,
            "range": "± 2792",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 104132,
            "range": "± 1252",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 368635,
            "range": "± 14915",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 247597,
            "range": "± 2441",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 104398,
            "range": "± 10845",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 280572,
            "range": "± 9883",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 101438,
            "range": "± 1175",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 427,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 487,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 403611,
            "range": "± 8119",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 12729653,
            "range": "± 871326",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1030779,
            "range": "± 48216",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1205398200,
            "range": "± 38977169",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1197874262,
            "range": "± 44844044",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 10155257767,
            "range": "± 163237427",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 10138686287,
            "range": "± 162567331",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 271680926192,
            "range": "± 1690458979",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 271953355883,
            "range": "± 1929430095",
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
        "date": 1793206841531,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 14220275,
            "range": "± 270696",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 45226083,
            "range": "± 3844893",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 68614143,
            "range": "± 1377601",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 199461163,
            "range": "± 3719838",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 766091359,
            "range": "± 31591563",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 292892674,
            "range": "± 2621642",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3954631,
            "range": "± 56102",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 429712075,
            "range": "± 21206245",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2585909,
            "range": "± 6126",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 6827,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 7725,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 2475140,
            "range": "± 23179",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 2714901,
            "range": "± 30162",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 318285705,
            "range": "± 16794211",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 15598838867,
            "range": "± 421559241",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 38756175,
            "range": "± 248888",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15782472,
            "range": "± 162381",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 276154,
            "range": "± 39103",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 38976979,
            "range": "± 384227",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15847585,
            "range": "± 140245",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 281111,
            "range": "± 5550",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 23784240,
            "range": "± 399152",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 104900,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 372,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 432,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1046809,
            "range": "± 14419",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 2020433822,
            "range": "± 14285975",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 369810,
            "range": "± 8360",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 231238,
            "range": "± 1713",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 108993,
            "range": "± 1319",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 370893,
            "range": "± 13439",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 249389,
            "range": "± 2020",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 107976,
            "range": "± 1331",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 282956,
            "range": "± 10321",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 105617,
            "range": "± 1062",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 427,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 492,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 407154,
            "range": "± 9826",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 12704094,
            "range": "± 101351",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1025486,
            "range": "± 73567",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1186865040,
            "range": "± 37071728",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1185545281,
            "range": "± 39885107",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 10168680587,
            "range": "± 160067835",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 10153592344,
            "range": "± 167253466",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 302732475625,
            "range": "± 2243592713",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 300988091732,
            "range": "± 1478187550",
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
        "date": 1793292852190,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 13842854,
            "range": "± 761076",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 43940156,
            "range": "± 545046",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 67003304,
            "range": "± 1455103",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 194667659,
            "range": "± 3774342",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 809577474,
            "range": "± 887916",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 293119433,
            "range": "± 967884",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3873981,
            "range": "± 114695",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 424631831,
            "range": "± 291216",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2676680,
            "range": "± 2499",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 6382,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 7086,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/sparse_csr_path",
            "value": 2557784,
            "range": "± 9863",
            "unit": "ns/iter"
          },
          {
            "name": "dispersion/compute_synthetic_lambda/dense_lookup_path",
            "value": 2811641,
            "range": "± 5015",
            "unit": "ns/iter"
          },
          {
            "name": "taumode_readout/300x384_topk15",
            "value": 323522497,
            "range": "± 1257892",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 14374763554,
            "range": "± 306247048",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39866591,
            "range": "± 24062",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 16844444,
            "range": "± 363677",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 295711,
            "range": "± 5414",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39804434,
            "range": "± 49416",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 17238966,
            "range": "± 40447",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 289354,
            "range": "± 3322",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 23732310,
            "range": "± 24874",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 98030,
            "range": "± 636",
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
            "value": 446,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1038953,
            "range": "± 13304",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1742430226,
            "range": "± 60151078",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 366039,
            "range": "± 7161",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 228494,
            "range": "± 2220",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 99599,
            "range": "± 1591",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 366049,
            "range": "± 4099",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 248446,
            "range": "± 2780",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 100709,
            "range": "± 2278",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 274320,
            "range": "± 3007",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 98314,
            "range": "± 1109",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 447,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 503,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 391691,
            "range": "± 9626",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 10952102,
            "range": "± 403443",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1060683,
            "range": "± 33052",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/baseline_sort",
            "value": 1121209895,
            "range": "± 8678057",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n2000/estimate_intrinsic_dimension/library",
            "value": 1121167995,
            "range": "± 9860131",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/baseline_sort",
            "value": 10135996192,
            "range": "± 38047343",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n16000/estimate_intrinsic_dimension/library",
            "value": 10136757410,
            "range": "± 45173882",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/baseline_sort",
            "value": 272388287572,
            "range": "± 2223256736",
            "unit": "ns/iter"
          },
          {
            "name": "twonn_selection/n335k/estimate_intrinsic_dimension/library",
            "value": 274814145121,
            "range": "± 2050943502",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}