window.BENCHMARK_DATA = {
  "lastUpdate": 1787510758173,
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
      }
    ]
  }
}