window.BENCHMARK_DATA = {
  "lastUpdate": 1788367483518,
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
          "id": "ad188509a36ea182511dfd7862e8c6a05c29ed4a",
          "message": "fix(benches): migrate to try_prepare_query_item / try_search_lambda_aware twins deprecated in arrowspace 0.27",
          "timestamp": "2026-09-02T01:23:22+01:00",
          "tree_id": "a799db91722e999e9df21ccff8b0afd9944385dc",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/ad188509a36ea182511dfd7862e8c6a05c29ed4a"
        },
        "date": 1788320477555,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 29030966,
            "range": "± 639203",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 77053105,
            "range": "± 4236432",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 187899841,
            "range": "± 8154295",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 534549697,
            "range": "± 17581380",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 766851395708,
            "range": "± 3930706050",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 592211787,
            "range": "± 13844375",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 205636700,
            "range": "± 2538699",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 1786587,
            "range": "± 83318",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 386066944,
            "range": "± 10458009",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1318636,
            "range": "± 2423",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 2868,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 3186,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 110436118,
            "range": "± 5231975",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 168183377653,
            "range": "± 718166638",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 17293297179,
            "range": "± 186861129",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 25642502,
            "range": "± 833930",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 9777412,
            "range": "± 502257",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 182228,
            "range": "± 6716",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 22683477,
            "range": "± 711941",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 9416433,
            "range": "± 174693",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 182109,
            "range": "± 4980",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 13300136,
            "range": "± 73431",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 65829,
            "range": "± 649",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 249,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 315,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 675935,
            "range": "± 25886",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1127036942,
            "range": "± 16243986",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 213621,
            "range": "± 7430",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 168633,
            "range": "± 2201",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 66422,
            "range": "± 4592",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 211117,
            "range": "± 6328",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 184023,
            "range": "± 6305",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 62663,
            "range": "± 3553",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 166688,
            "range": "± 7348",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 61226,
            "range": "± 1689",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 256,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 315,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 273809,
            "range": "± 36290",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 6710213,
            "range": "± 273885",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 755208,
            "range": "± 46911",
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
          "id": "01fec2ba7a72ebf05c02b084c0b84b64726059a4",
          "message": "bench(criterion): record v0.27.0 results [skip ci]",
          "timestamp": "2026-09-02T05:28:07Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/01fec2ba7a72ebf05c02b084c0b84b64726059a4"
        },
        "date": 1788367482485,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 43197144,
            "range": "± 1096403",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 126440084,
            "range": "± 3300983",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 280471793,
            "range": "± 4892441",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 877169541,
            "range": "± 13672761",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1150687867274,
            "range": "± 4357157952",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 782831551,
            "range": "± 15783236",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 292273502,
            "range": "± 6915995",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2663288,
            "range": "± 53535",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 428787044,
            "range": "± 3540848",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1693194,
            "range": "± 9038",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4372,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5051,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 157611991,
            "range": "± 523024",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 204095229214,
            "range": "± 262388258",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 25688668612,
            "range": "± 198685891",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 37768069,
            "range": "± 114403",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14380048,
            "range": "± 43926",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 207188,
            "range": "± 9324",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37946580,
            "range": "± 279213",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14572880,
            "range": "± 23110",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 200575,
            "range": "± 6571",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 21462698,
            "range": "± 29564",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 91365,
            "range": "± 726",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 357,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 427,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 997638,
            "range": "± 11543",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1336151724,
            "range": "± 2699186",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 331997,
            "range": "± 10446",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 227008,
            "range": "± 2333",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 96513,
            "range": "± 1346",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 340041,
            "range": "± 9861",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 248215,
            "range": "± 2281",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 96274,
            "range": "± 1503",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 238065,
            "range": "± 8741",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 93129,
            "range": "± 1851",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 369,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 428,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 355516,
            "range": "± 20792",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8839408,
            "range": "± 104064",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1077528,
            "range": "± 52973",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}