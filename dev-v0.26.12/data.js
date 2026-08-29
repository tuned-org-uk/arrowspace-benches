window.BENCHMARK_DATA = {
  "lastUpdate": 1788028964528,
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
        "date": 1787749464646,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42561305,
            "range": "± 1792199",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 126729557,
            "range": "± 2783564",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 273953349,
            "range": "± 4450962",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 840651307,
            "range": "± 11122195",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1222833620128,
            "range": "± 1454905690",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 794795401,
            "range": "± 579330",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 289853492,
            "range": "± 1383260",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3432642,
            "range": "± 139013",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 413848470,
            "range": "± 161142",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2202562,
            "range": "± 12903",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3808,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4512,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 469859351,
            "range": "± 3170444",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 288748989244,
            "range": "± 274611478",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 26446336852,
            "range": "± 191855176",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39781470,
            "range": "± 476797",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15377339,
            "range": "± 111681",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 204426,
            "range": "± 6913",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39392961,
            "range": "± 597018",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15506856,
            "range": "± 111884",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 220246,
            "range": "± 22782",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22854115,
            "range": "± 373952",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 100175,
            "range": "± 784",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 528,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 586,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 2665784,
            "range": "± 10548",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1738226632,
            "range": "± 12282103",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 366383,
            "range": "± 9252",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 244642,
            "range": "± 2454",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 102545,
            "range": "± 1255",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 365994,
            "range": "± 11167",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 266620,
            "range": "± 2656",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 103225,
            "range": "± 1921",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 266403,
            "range": "± 10889",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 100649,
            "range": "± 1266",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 542,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 607,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 416867,
            "range": "± 11633",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 11066467,
            "range": "± 167324",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2726538,
            "range": "± 227752",
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
        "date": 1787758867826,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 28479292,
            "range": "± 1590110",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 75504062,
            "range": "± 1456488",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 186158272,
            "range": "± 6059285",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 530303020,
            "range": "± 18651189",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 797678882032,
            "range": "± 3594506840",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 555368003,
            "range": "± 10869375",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 174520112,
            "range": "± 5472018",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2153277,
            "range": "± 29999",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 251354943,
            "range": "± 8137071",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1576659,
            "range": "± 1840",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3765,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3951,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 292078095,
            "range": "± 1259450",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 212339793859,
            "range": "± 1094847081",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 17128593207,
            "range": "± 224717974",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 26001105,
            "range": "± 140004",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 8939037,
            "range": "± 19238",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 172746,
            "range": "± 2681",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 25999772,
            "range": "± 319783",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 9169481,
            "range": "± 21318",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 167980,
            "range": "± 7121",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 15812315,
            "range": "± 218357",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 73220,
            "range": "± 3575",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 355,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 370,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1710287,
            "range": "± 22584",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1388763070,
            "range": "± 31945189",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 217965,
            "range": "± 5520",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 177652,
            "range": "± 3614",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 74007,
            "range": "± 1599",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 216942,
            "range": "± 5597",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 193185,
            "range": "± 3449",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 74131,
            "range": "± 1978",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 175407,
            "range": "± 5792",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 75431,
            "range": "± 2091",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 336,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 348,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 288332,
            "range": "± 16154",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8933606,
            "range": "± 280703",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1726048,
            "range": "± 53706",
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
          "id": "709ca278fff3be02a71a5a73c2f0e122dd2660c1",
          "message": "bench(criterion): record v0.26.14 results [skip ci]",
          "timestamp": "2026-08-26T16:53:26Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/709ca278fff3be02a71a5a73c2f0e122dd2660c1"
        },
        "date": 1787868793848,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 32267756,
            "range": "± 1271149",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 95788958,
            "range": "± 2081732",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 208130342,
            "range": "± 3241288",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 641019084,
            "range": "± 7714197",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 956939106204,
            "range": "± 2867096649",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 640883677,
            "range": "± 14684413",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 236336656,
            "range": "± 776158",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2369240,
            "range": "± 21767",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 365540618,
            "range": "± 4347778",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1670702,
            "range": "± 1527",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3640,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4193,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 359985607,
            "range": "± 4833662",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 210371210698,
            "range": "± 1120026378",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 20926862087,
            "range": "± 106620031",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 31774971,
            "range": "± 39660",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 12107136,
            "range": "± 54379",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 170213,
            "range": "± 2305",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 31729550,
            "range": "± 73099",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 12351514,
            "range": "± 80271",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 175655,
            "range": "± 2624",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 19066900,
            "range": "± 32702",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 82186,
            "range": "± 688",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 395,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 456,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 2115810,
            "range": "± 16109",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1455160451,
            "range": "± 34112761",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 280626,
            "range": "± 6827",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 185369,
            "range": "± 4121",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 80028,
            "range": "± 904",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 280018,
            "range": "± 5916",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 203291,
            "range": "± 1432",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 79955,
            "range": "± 1284",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 203621,
            "range": "± 7978",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 79050,
            "range": "± 981",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 343,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 392,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 319387,
            "range": "± 8986",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8556171,
            "range": "± 133720",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2129308,
            "range": "± 35774",
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
          "id": "0d1d770626eff8b1e6cfa2233b410be498df5cc3",
          "message": "ci(iai): add deterministic iai-callgrind instruction-count gate\n\nMirror the smartcore-benches iai setup: Linux-only iai-callgrind benches\ncovering the build/search/spectral hot paths at the small end of the\ncriterion grid, an iai CI job (valgrind + runner install, NDJSON -> JSON\nconversion via scripts/iai_to_benchmark_action.py, customSmallerIsBetter\nchart, 120% fail-on-alert gate posting a status check back to\narrowspace-rs), and AGENTS.md docs for the runner binary and NDJSON\nsemantics.\n\nCriterion wall-clock is noisy on shared runners (20-60% variance); the\ndeterministic instruction-count gate is the regression signal that can\nfail a merge.",
          "timestamp": "2026-08-29T00:00:47Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/0d1d770626eff8b1e6cfa2233b410be498df5cc3"
        },
        "date": 1787963022989,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 41442094,
            "range": "± 1920818",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 122093857,
            "range": "± 2583813",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 266583277,
            "range": "± 4921249",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 826813274,
            "range": "± 10987850",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1187661616562,
            "range": "± 1983528006",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 741622360,
            "range": "± 9599006",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 269617593,
            "range": "± 764148",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3533186,
            "range": "± 45116",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 385002884,
            "range": "± 7217840",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2181060,
            "range": "± 21659",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3745,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4432,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 460179542,
            "range": "± 7485985",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 271569274092,
            "range": "± 115878467",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 28447805030,
            "range": "± 249830403",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39075436,
            "range": "± 118127",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15639262,
            "range": "± 87290",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 400889,
            "range": "± 27821",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39095113,
            "range": "± 435442",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15651668,
            "range": "± 200762",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 347229,
            "range": "± 22782",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 23230259,
            "range": "± 59670",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 118672,
            "range": "± 1594",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 496,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 556,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 3053882,
            "range": "± 51544",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 2011815955,
            "range": "± 5157710",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 408986,
            "range": "± 27190",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 322276,
            "range": "± 23916",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 134444,
            "range": "± 9572",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 407458,
            "range": "± 24671",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 330453,
            "range": "± 23879",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 129321,
            "range": "± 9293",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 316597,
            "range": "± 35098",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 126319,
            "range": "± 9769",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 417,
            "range": "± 2",
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
            "value": 475011,
            "range": "± 105350",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 13039576,
            "range": "± 519761",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2861334,
            "range": "± 669201",
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
          "id": "0d1d770626eff8b1e6cfa2233b410be498df5cc3",
          "message": "ci(iai): add deterministic iai-callgrind instruction-count gate\n\nMirror the smartcore-benches iai setup: Linux-only iai-callgrind benches\ncovering the build/search/spectral hot paths at the small end of the\ncriterion grid, an iai CI job (valgrind + runner install, NDJSON -> JSON\nconversion via scripts/iai_to_benchmark_action.py, customSmallerIsBetter\nchart, 120% fail-on-alert gate posting a status check back to\narrowspace-rs), and AGENTS.md docs for the runner binary and NDJSON\nsemantics.\n\nCriterion wall-clock is noisy on shared runners (20-60% variance); the\ndeterministic instruction-count gate is the regression signal that can\nfail a merge.",
          "timestamp": "2026-08-29T01:01:55+01:00",
          "tree_id": "b74cefcca44b3fc79b549c8a7cd49b16ae12b51d",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/0d1d770626eff8b1e6cfa2233b410be498df5cc3"
        },
        "date": 1787974080138,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 28206952,
            "range": "± 1091445",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 76039287,
            "range": "± 4884468",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 184685358,
            "range": "± 12144467",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 522896420,
            "range": "± 23399380",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 765947152807,
            "range": "± 3469224299",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 552437958,
            "range": "± 1404382",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 173589721,
            "range": "± 4774753",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2037007,
            "range": "± 114678",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 247399009,
            "range": "± 2463460",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1556867,
            "range": "± 1519",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3124,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3735,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 288946227,
            "range": "± 520310",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 201564665920,
            "range": "± 936265695",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 18220537082,
            "range": "± 341829239",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 26594819,
            "range": "± 813400",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 9329138,
            "range": "± 34849",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 183961,
            "range": "± 5323",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 27524061,
            "range": "± 194135",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 9523768,
            "range": "± 47195",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 190547,
            "range": "± 8498",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 16957727,
            "range": "± 980948",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 75109,
            "range": "± 1135",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 319,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 343,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1775147,
            "range": "± 10855",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1496472369,
            "range": "± 34997953",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 260147,
            "range": "± 19346",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 177470,
            "range": "± 2023",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 71286,
            "range": "± 1639",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 259012,
            "range": "± 15844",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 200131,
            "range": "± 6849",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 71733,
            "range": "± 4870",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 175856,
            "range": "± 6577",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 72201,
            "range": "± 2256",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 287,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 299,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 302600,
            "range": "± 17851",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 9169666,
            "range": "± 527013",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1799106,
            "range": "± 171149",
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
          "id": "0d1d770626eff8b1e6cfa2233b410be498df5cc3",
          "message": "ci(iai): add deterministic iai-callgrind instruction-count gate\n\nMirror the smartcore-benches iai setup: Linux-only iai-callgrind benches\ncovering the build/search/spectral hot paths at the small end of the\ncriterion grid, an iai CI job (valgrind + runner install, NDJSON -> JSON\nconversion via scripts/iai_to_benchmark_action.py, customSmallerIsBetter\nchart, 120% fail-on-alert gate posting a status check back to\narrowspace-rs), and AGENTS.md docs for the runner binary and NDJSON\nsemantics.\n\nCriterion wall-clock is noisy on shared runners (20-60% variance); the\ndeterministic instruction-count gate is the regression signal that can\nfail a merge.",
          "timestamp": "2026-08-29T00:00:47Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/0d1d770626eff8b1e6cfa2233b410be498df5cc3"
        },
        "date": 1788028963462,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 46171704,
            "range": "± 2222420",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 136072654,
            "range": "± 2389734",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 309758195,
            "range": "± 4219518",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 913012366,
            "range": "± 9422282",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1287695345738,
            "range": "± 914794986",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 795759333,
            "range": "± 877534",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 302688548,
            "range": "± 460881",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3210554,
            "range": "± 40907",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 375414158,
            "range": "± 178230",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 2209340,
            "range": "± 7733",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4107,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4863,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 497998720,
            "range": "± 1590187",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 351935838275,
            "range": "± 1004935817",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 28320688863,
            "range": "± 137942825",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39778348,
            "range": "± 61610",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 16105229,
            "range": "± 31214",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 256226,
            "range": "± 8962",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39628637,
            "range": "± 96851",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 16368511,
            "range": "± 56300",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 257446,
            "range": "± 9429",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22660824,
            "range": "± 41420",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 100912,
            "range": "± 1489",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 485,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 565,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 2901960,
            "range": "± 13094",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 2382214669,
            "range": "± 5478334",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 344104,
            "range": "± 8216",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 244234,
            "range": "± 1713",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 103534,
            "range": "± 1036",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 340374,
            "range": "± 7755",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 256142,
            "range": "± 2594",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 104025,
            "range": "± 1192",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 241991,
            "range": "± 4813",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 99965,
            "range": "± 2455",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 468,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 538,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 508437,
            "range": "± 12408",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 15128826,
            "range": "± 197802",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 2948610,
            "range": "± 97094",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}