window.BENCHMARK_DATA = {
  "lastUpdate": 1787660455132,
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
          "id": "94f8bbf64d80e777cfbaf707d8080cfc08349853",
          "message": "ci: compare pins v0.26.12 / v0.26.11, drop v0.26.5 / v0.26.0",
          "timestamp": "2026-08-23T15:00:06+01:00",
          "tree_id": "8de1d4954acff4eb4919c89ea4fe9934b76e1087",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/94f8bbf64d80e777cfbaf707d8080cfc08349853"
        },
        "date": 1787510757633,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 41927526,
            "range": "± 1912787",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 123847188,
            "range": "± 2573868",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 272490474,
            "range": "± 4012521",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 826619854,
            "range": "± 11274531",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1154202435641,
            "range": "± 3627639639",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 795882895,
            "range": "± 1348075",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 280364015,
            "range": "± 1305699",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2883699,
            "range": "± 20786",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 413470938,
            "range": "± 251026",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1713471,
            "range": "± 2623",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3828,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4530,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 460742284,
            "range": "± 831344",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 210928157794,
            "range": "± 53845995",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 25380907542,
            "range": "± 292284069",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39169824,
            "range": "± 41952",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14611160,
            "range": "± 28408",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 210871,
            "range": "± 6051",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39139828,
            "range": "± 49297",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14917110,
            "range": "± 32148",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 219693,
            "range": "± 4131",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22139991,
            "range": "± 23576",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 85767,
            "range": "± 1671",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 431,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 494,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 2741072,
            "range": "± 20239",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1264646515,
            "range": "± 44434550",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 351697,
            "range": "± 9709",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 227441,
            "range": "± 2226",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 86696,
            "range": "± 1072",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 346169,
            "range": "± 10006",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 256291,
            "range": "± 4600",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 87942,
            "range": "± 1045",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 255927,
            "range": "± 8551",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 84875,
            "range": "± 1271",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 443,
            "range": "± 1",
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
            "value": 339750,
            "range": "± 12888",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8097186,
            "range": "± 103595",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2875164,
            "range": "± 87498",
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
          "id": "82ac2183d9723dad34651044e487088e7080c291",
          "message": "bench(criterion): record v0.26.12 results [skip ci]",
          "timestamp": "2026-08-23T18:34:06Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/82ac2183d9723dad34651044e487088e7080c291"
        },
        "date": 1787574979748,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 38420612,
            "range": "± 1482134",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 114461682,
            "range": "± 2588200",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 254636643,
            "range": "± 4377752",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 803579691,
            "range": "± 10522999",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1080626271047,
            "range": "± 1679708310",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 605707900,
            "range": "± 5179222",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 230666218,
            "range": "± 3274399",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2549040,
            "range": "± 56316",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 322423784,
            "range": "± 1744724",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1935824,
            "range": "± 5164",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3149,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3768,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 422898515,
            "range": "± 7490627",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 243489753410,
            "range": "± 271871649",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 25396269870,
            "range": "± 168121597",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 32383526,
            "range": "± 793436",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 12509669,
            "range": "± 173773",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 227002,
            "range": "± 6629",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 32732548,
            "range": "± 523834",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 12944200,
            "range": "± 155652",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 229749,
            "range": "± 5024",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22379231,
            "range": "± 365168",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 88339,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 432,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 473,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 2554277,
            "range": "± 24300",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1565868111,
            "range": "± 1854086",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 292803,
            "range": "± 4165",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 215617,
            "range": "± 1732",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 90143,
            "range": "± 1010",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 290954,
            "range": "± 3796",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 234842,
            "range": "± 7306",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 89982,
            "range": "± 1154",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 235782,
            "range": "± 5871",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 87990,
            "range": "± 762",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 372,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 400,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 401492,
            "range": "± 15783",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 10119796,
            "range": "± 189807",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2803823,
            "range": "± 69809",
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
          "id": "43c1855d81092b05fa1cae63da04222f97bdb529",
          "message": "bench(criterion): record v0.26.13 results [skip ci]",
          "timestamp": "2026-08-24T18:07:51Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/43c1855d81092b05fa1cae63da04222f97bdb529"
        },
        "date": 1787599675659,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42540494,
            "range": "± 1642258",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 125488334,
            "range": "± 2732446",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 282627161,
            "range": "± 3845446",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 868882791,
            "range": "± 12034714",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1095610913876,
            "range": "± 3021530170",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 737898082,
            "range": "± 5022839",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 270856903,
            "range": "± 1332589",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2602119,
            "range": "± 26930",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 381581604,
            "range": "± 3101975",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1700777,
            "range": "± 7513",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3726,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4490,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 449619423,
            "range": "± 1644672",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 204469241195,
            "range": "± 177249739",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 26263299448,
            "range": "± 249220922",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 40606403,
            "range": "± 1997927",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15745185,
            "range": "± 269367",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 197086,
            "range": "± 4904",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39979439,
            "range": "± 461077",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 16268555,
            "range": "± 334373",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 197392,
            "range": "± 5883",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 25754449,
            "range": "± 1427301",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 92483,
            "range": "± 592",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 488,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 545,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 2826326,
            "range": "± 8866",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1415284119,
            "range": "± 5329842",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 338759,
            "range": "± 8356",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 233356,
            "range": "± 2553",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 97841,
            "range": "± 3460",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 342329,
            "range": "± 11203",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 252794,
            "range": "± 4405",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 97729,
            "range": "± 2360",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 258542,
            "range": "± 9965",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 93369,
            "range": "± 1943",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 419,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 477,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 369695,
            "range": "± 18917",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9679270,
            "range": "± 177924",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2836048,
            "range": "± 114935",
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
          "id": "43c1855d81092b05fa1cae63da04222f97bdb529",
          "message": "bench(criterion): record v0.26.13 results [skip ci]",
          "timestamp": "2026-08-24T18:07:51Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/43c1855d81092b05fa1cae63da04222f97bdb529"
        },
        "date": 1787660454050,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 43078617,
            "range": "± 1206159",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 126098369,
            "range": "± 2636188",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 281334166,
            "range": "± 4390567",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 875057162,
            "range": "± 12621720",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1096483214281,
            "range": "± 803701418",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 748468409,
            "range": "± 7688116",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 274215218,
            "range": "± 939876",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2522536,
            "range": "± 33528",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 386551514,
            "range": "± 8725108",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1697816,
            "range": "± 8927",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3770,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4418,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 451424246,
            "range": "± 1228008",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 203727970839,
            "range": "± 100945717",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 27031651825,
            "range": "± 199592057",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 38030692,
            "range": "± 420978",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14186374,
            "range": "± 33159",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 199515,
            "range": "± 5264",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 38209638,
            "range": "± 487045",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14310226,
            "range": "± 48347",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 200588,
            "range": "± 3802",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 23054795,
            "range": "± 420129",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 93128,
            "range": "± 630",
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
            "value": 467,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 2766375,
            "range": "± 23711",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1478035252,
            "range": "± 3938493",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 334699,
            "range": "± 16961",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 227278,
            "range": "± 2735",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 96504,
            "range": "± 1909",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 335445,
            "range": "± 7808",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 240543,
            "range": "± 2424",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 97072,
            "range": "± 1815",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 236607,
            "range": "± 7359",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 92182,
            "range": "± 2117",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 420,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 479,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 369053,
            "range": "± 18944",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9647739,
            "range": "± 132366",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2831646,
            "range": "± 50282",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}