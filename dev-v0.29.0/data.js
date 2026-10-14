window.BENCHMARK_DATA = {
  "lastUpdate": 1792008615971,
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
      }
    ]
  }
}