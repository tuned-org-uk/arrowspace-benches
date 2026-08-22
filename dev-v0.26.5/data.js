window.BENCHMARK_DATA = {
  "lastUpdate": 1787401186627,
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
          "id": "d1c213e1edc869e3d1a05c73ea09981a5d72c298",
          "message": "feat: compare arrowspace 0.26.0 / 0.26.5 / latest with cross-version page",
          "timestamp": "2026-08-21T17:18:34+01:00",
          "tree_id": "9d99d38d11dae8973db2ed78dd9ee3b4ffc6607d",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/d1c213e1edc869e3d1a05c73ea09981a5d72c298"
        },
        "date": 1787329489797,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 24121101,
            "range": "± 1195143",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 77391345,
            "range": "± 2754857",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 155515857,
            "range": "± 5593691",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 513125348,
            "range": "± 9852071",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 193143,
            "range": "± 21409",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 131800,
            "range": "± 2601",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 63769,
            "range": "± 1593",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 192268,
            "range": "± 7688",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 145128,
            "range": "± 3235",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 62355,
            "range": "± 1467",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 154546,
            "range": "± 5044",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 64024,
            "range": "± 3925",
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
            "value": 331,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 247871,
            "range": "± 9198",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 6763853,
            "range": "± 287004",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 3762901,
            "range": "± 253113",
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
          "id": "23060daa0eb5e5996877be052c4014b4830903fe",
          "message": "bench(criterion): record v0.26.5 results [skip ci]",
          "timestamp": "2026-08-21T16:24:53Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/23060daa0eb5e5996877be052c4014b4830903fe"
        },
        "date": 1787329546991,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 31313598,
            "range": "± 853361",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 93164096,
            "range": "± 2874675",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 200149973,
            "range": "± 3387793",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 619508382,
            "range": "± 8713705",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 283432,
            "range": "± 8152",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 184606,
            "range": "± 1556",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 81643,
            "range": "± 851",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 280892,
            "range": "± 5723",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 201232,
            "range": "± 5899",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 80979,
            "range": "± 1063",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 204122,
            "range": "± 3457",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 79627,
            "range": "± 1845",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 511,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 586,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 332659,
            "range": "± 11122",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8876493,
            "range": "± 217415",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 4950074,
            "range": "± 368568",
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
          "id": "79692c335448eba6327e243f6f81bef42e944524",
          "message": "fix(ci): build compare page to distinct path before gh-pages checkout",
          "timestamp": "2026-08-21T17:34:57+01:00",
          "tree_id": "898a4c5a5cf1f69fc468d1898cf21769c8657763",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/79692c335448eba6327e243f6f81bef42e944524"
        },
        "date": 1787330550734,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 40124212,
            "range": "± 1710493",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 120189333,
            "range": "± 2835027",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 257561101,
            "range": "± 4341407",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 790087096,
            "range": "± 9877275",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 366548,
            "range": "± 8436",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 239411,
            "range": "± 4128",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 103359,
            "range": "± 1416",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 364638,
            "range": "± 10117",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 260494,
            "range": "± 4470",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 104585,
            "range": "± 1347",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 267586,
            "range": "± 13651",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 102376,
            "range": "± 2899",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 675,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 755,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 414436,
            "range": "± 12573",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 11448241,
            "range": "± 166769",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 6354706,
            "range": "± 107322",
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
          "id": "79692c335448eba6327e243f6f81bef42e944524",
          "message": "fix(ci): build compare page to distinct path before gh-pages checkout",
          "timestamp": "2026-08-21T16:34:19Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/79692c335448eba6327e243f6f81bef42e944524"
        },
        "date": 1787330567277,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 40229370,
            "range": "± 2528802",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 120480004,
            "range": "± 2903637",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 259458862,
            "range": "± 4505833",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 797464014,
            "range": "± 10129700",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 368759,
            "range": "± 6146",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 241295,
            "range": "± 6286",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 104886,
            "range": "± 2058",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 367502,
            "range": "± 7560",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 261954,
            "range": "± 2500",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 104679,
            "range": "± 1693",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 266048,
            "range": "± 8653",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 102295,
            "range": "± 2207",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 670,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 749,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 434752,
            "range": "± 16229",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 11426237,
            "range": "± 265646",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 6363552,
            "range": "± 48681",
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
          "id": "62107e9923b055373885d0fee63e68833adeb1c3",
          "message": "feat: cve bench mimicking the pyarrowspace CVE-search corpus at 300Kx384",
          "timestamp": "2026-08-21T19:00:28+01:00",
          "tree_id": "63be3b2cd987700a3553750a1da54ed2bbefe202",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/62107e9923b055373885d0fee63e68833adeb1c3"
        },
        "date": 1787352249364,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 41625423,
            "range": "± 1857316",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 124275405,
            "range": "± 3171786",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 272862577,
            "range": "± 4502000",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 855608737,
            "range": "± 13462375",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1085805399509,
            "range": "± 4301762127",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 806894473,
            "range": "± 53767156",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 317104879,
            "range": "± 4223778",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3567193,
            "range": "± 44647",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 598431551,
            "range": "± 65542099",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2129590,
            "range": "± 7509",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 5270,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5951,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 1097874125,
            "range": "± 8270817",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 278399716680,
            "range": "± 97944749",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 20570042868,
            "range": "± 138899029",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 40670579,
            "range": "± 172148",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15735412,
            "range": "± 154356",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 296567,
            "range": "± 11141",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 40850290,
            "range": "± 371027",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 16008252,
            "range": "± 53806",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 313482,
            "range": "± 20547",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 23841621,
            "range": "± 341534",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 108569,
            "range": "± 791",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 644,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 699,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 6071655,
            "range": "± 45637",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 2020283950,
            "range": "± 19277086",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 392688,
            "range": "± 40827",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 257433,
            "range": "± 4184",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 114780,
            "range": "± 2448",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 384206,
            "range": "± 12180",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 267229,
            "range": "± 6958",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 114074,
            "range": "± 2138",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 291486,
            "range": "± 12283",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 109725,
            "range": "± 2100",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 600,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 676,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 470221,
            "range": "± 17919",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 12876375,
            "range": "± 93972",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 6211627,
            "range": "± 471016",
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
          "id": "62107e9923b055373885d0fee63e68833adeb1c3",
          "message": "feat: cve bench mimicking the pyarrowspace CVE-search corpus at 300Kx384",
          "timestamp": "2026-08-21T18:00:28Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/62107e9923b055373885d0fee63e68833adeb1c3"
        },
        "date": 1787401186057,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 40305474,
            "range": "± 940697",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 121224563,
            "range": "± 2932719",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 257796454,
            "range": "± 4250204",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 791733072,
            "range": "± 9953151",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1103118423259,
            "range": "± 2029684678",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 832582887,
            "range": "± 14878432",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 302272206,
            "range": "± 5993525",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3385310,
            "range": "± 29840",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 444853964,
            "range": "± 16502162",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2156960,
            "range": "± 16475",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 5616,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 6311,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 1189906282,
            "range": "± 8678875",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 271532953032,
            "range": "± 208938496",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 19656612319,
            "range": "± 242143289",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 41313813,
            "range": "± 277328",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15309964,
            "range": "± 21410",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 225320,
            "range": "± 6934",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 40094933,
            "range": "± 1012712",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15647116,
            "range": "± 30158",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 244648,
            "range": "± 8061",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 23682087,
            "range": "± 774726",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 108834,
            "range": "± 1310",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 658,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 734,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 6319272,
            "range": "± 45116",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1928158619,
            "range": "± 34516587",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 383843,
            "range": "± 16294",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 257137,
            "range": "± 2761",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 110889,
            "range": "± 1059",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 382990,
            "range": "± 13820",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 272832,
            "range": "± 3139",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 111166,
            "range": "± 1444",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 288424,
            "range": "± 7050",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 109358,
            "range": "± 1355",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 654,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 731,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 432962,
            "range": "± 13138",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 12117888,
            "range": "± 102353",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 6388582,
            "range": "± 104956",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}