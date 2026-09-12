window.BENCHMARK_DATA = {
  "lastUpdate": 1789229037055,
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
          "id": "27a748421a6f902b6bab847120c6552a6b456b2d",
          "message": "bench(criterion): record v0.27.3 results [skip ci]",
          "timestamp": "2026-09-02T17:16:31Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/27a748421a6f902b6bab847120c6552a6b456b2d"
        },
        "date": 1788453736849,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 43159330,
            "range": "± 2835041",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 126117651,
            "range": "± 2438861",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 280540451,
            "range": "± 4075885",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 871834574,
            "range": "± 10336291",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1145637117578,
            "range": "± 2450623578",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 818613454,
            "range": "± 651774",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 313111833,
            "range": "± 4481163",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2534566,
            "range": "± 129178",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 569161440,
            "range": "± 53863479",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1681643,
            "range": "± 6341",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4431,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5113,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 157351396,
            "range": "± 2720290",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 204614794678,
            "range": "± 126373795",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 25362099934,
            "range": "± 137970530",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 37558184,
            "range": "± 143331",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 14248397,
            "range": "± 71174",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 195651,
            "range": "± 6172",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 38041808,
            "range": "± 179608",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 14431258,
            "range": "± 17795",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 203228,
            "range": "± 4146",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 21583746,
            "range": "± 149027",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 91412,
            "range": "± 985",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 369,
            "range": "± 0",
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
            "value": 998005,
            "range": "± 12027",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1339634682,
            "range": "± 2681703",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 340778,
            "range": "± 16417",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 226495,
            "range": "± 2317",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 96594,
            "range": "± 1799",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 330906,
            "range": "± 11617",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 245900,
            "range": "± 2535",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 96653,
            "range": "± 1418",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 244873,
            "range": "± 11308",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 93280,
            "range": "± 2016",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 369,
            "range": "± 0",
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
            "value": 359484,
            "range": "± 24368",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8849559,
            "range": "± 181465",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1080070,
            "range": "± 44560",
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
          "id": "63641baeae247938667babf41b919172574139ab",
          "message": "ci: matrix adds v0.28.0 pin, drops v0.26.12; arrowspace req floored to >=0.26.14",
          "timestamp": "2026-09-04T14:45:36Z",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/63641baeae247938667babf41b919172574139ab"
        },
        "date": 1788540287324,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42740409,
            "range": "± 996933",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 127344795,
            "range": "± 2372882",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 276115158,
            "range": "± 3697505",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 843080230,
            "range": "± 9882136",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1141359557851,
            "range": "± 1739018238",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 813700131,
            "range": "± 1066582",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 291018917,
            "range": "± 1148540",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2483331,
            "range": "± 9675",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 431551574,
            "range": "± 479759",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1711338,
            "range": "± 2241",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4682,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5396,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 152194358,
            "range": "± 477497",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 205657048636,
            "range": "± 56586839",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 26254972168,
            "range": "± 368788231",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 39441894,
            "range": "± 133161",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15161644,
            "range": "± 40090",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 191234,
            "range": "± 1785",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 39165703,
            "range": "± 37538",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15307564,
            "range": "± 53055",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 189816,
            "range": "± 969",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 22155559,
            "range": "± 337277",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 83658,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 379,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 451,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1064691,
            "range": "± 21610",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1225916165,
            "range": "± 3002573",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 342096,
            "range": "± 8563",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 219079,
            "range": "± 2873",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 85378,
            "range": "± 862",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 345482,
            "range": "± 9155",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 239948,
            "range": "± 5748",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 82454,
            "range": "± 667",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 244550,
            "range": "± 5581",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 83675,
            "range": "± 1330",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 398,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 459,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 331716,
            "range": "± 15484",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 7919972,
            "range": "± 138907",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1069802,
            "range": "± 44713",
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
          "id": "63641baeae247938667babf41b919172574139ab",
          "message": "ci: matrix adds v0.28.0 pin, drops v0.26.12; arrowspace req floored to >=0.26.14",
          "timestamp": "2026-09-04T15:45:47+01:00",
          "tree_id": "5fbb98c49dd698574dcac21dd716761d223d6718",
          "url": "https://github.com/tuned-org-uk/arrowspace-benches/commit/63641baeae247938667babf41b919172574139ab"
        },
        "date": 1788549501520,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 43206272,
            "range": "± 1105512",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 126567381,
            "range": "± 2555641",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 280845128,
            "range": "± 4207187",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 875185939,
            "range": "± 11968313",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1084646832631,
            "range": "± 5923712083",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 778605497,
            "range": "± 43729030",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 295505028,
            "range": "± 3196629",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2884842,
            "range": "± 58673",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 427198037,
            "range": "± 434365",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1712448,
            "range": "± 8274",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4372,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5077,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 143236368,
            "range": "± 3724512",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 203752856840,
            "range": "± 432853912",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 27771683317,
            "range": "± 191369579",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 41636153,
            "range": "± 1995596",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15429808,
            "range": "± 52879",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 196297,
            "range": "± 8205",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 37466420,
            "range": "± 387284",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15745842,
            "range": "± 65879",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 194816,
            "range": "± 6876",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 21558378,
            "range": "± 168982",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 91490,
            "range": "± 912",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 363,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 434,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1053479,
            "range": "± 22819",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1363364989,
            "range": "± 19290250",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 351743,
            "range": "± 9969",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 225469,
            "range": "± 4139",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 96721,
            "range": "± 2068",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 345650,
            "range": "± 6373",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 244060,
            "range": "± 3949",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 97062,
            "range": "± 2288",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 248403,
            "range": "± 8974",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 91629,
            "range": "± 2025",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 371,
            "range": "± 8",
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
            "value": 353563,
            "range": "± 28051",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8842720,
            "range": "± 79449",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1078675,
            "range": "± 36951",
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
        "date": 1788623775397,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 43203088,
            "range": "± 1060850",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 125876328,
            "range": "± 2761316",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 279153879,
            "range": "± 4608305",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 859729022,
            "range": "± 10254282",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1154919769892,
            "range": "± 1346686019",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 786007450,
            "range": "± 40932618",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 300506867,
            "range": "± 4042712",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2600009,
            "range": "± 57316",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 425897342,
            "range": "± 629046",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1699213,
            "range": "± 11397",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4424,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5126,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 156691947,
            "range": "± 499515",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 204145338760,
            "range": "± 132285646",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 25877291755,
            "range": "± 509040534",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 41721794,
            "range": "± 95056",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 17715515,
            "range": "± 57520",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 224098,
            "range": "± 21061",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 41772314,
            "range": "± 78739",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 17908699,
            "range": "± 63091",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 231948,
            "range": "± 7914",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 24708570,
            "range": "± 1006465",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 88580,
            "range": "± 632",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 356,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 426,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 975551,
            "range": "± 14053",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1332765628,
            "range": "± 7736558",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 333327,
            "range": "± 13198",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 224756,
            "range": "± 4438",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 94134,
            "range": "± 2331",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 333309,
            "range": "± 10264",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 240960,
            "range": "± 4939",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 93890,
            "range": "± 2531",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 245842,
            "range": "± 10039",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 88918,
            "range": "± 1586",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 383,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 443,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 358469,
            "range": "± 18789",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8871135,
            "range": "± 89802",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1015239,
            "range": "± 47766",
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
        "date": 1788710761608,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42647679,
            "range": "± 1826026",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 124490715,
            "range": "± 3271932",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 275876927,
            "range": "± 4752357",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 849953283,
            "range": "± 22787986",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1097541425413,
            "range": "± 4951254639",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 735828394,
            "range": "± 38859269",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 271218022,
            "range": "± 2488303",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2634914,
            "range": "± 106020",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 387205881,
            "range": "± 36045659",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1711680,
            "range": "± 12295",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4385,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5069,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 145045733,
            "range": "± 1880938",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 193307905530,
            "range": "± 85788616",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 28488220667,
            "range": "± 219874028",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 42278383,
            "range": "± 244083",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 17152596,
            "range": "± 86015",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 194141,
            "range": "± 4429",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 42256997,
            "range": "± 899005",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 17356842,
            "range": "± 143357",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 191209,
            "range": "± 4040",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 29170280,
            "range": "± 45585",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 89093,
            "range": "± 1169",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 426,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 484,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1044088,
            "range": "± 12293",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1348056765,
            "range": "± 1639713",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 333636,
            "range": "± 12893",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 224778,
            "range": "± 3338",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 97009,
            "range": "± 2305",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 336204,
            "range": "± 12009",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 244508,
            "range": "± 4279",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 96495,
            "range": "± 2847",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 241508,
            "range": "± 12426",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 91733,
            "range": "± 2250",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 440,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 501,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 353874,
            "range": "± 17528",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8851886,
            "range": "± 97249",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 995964,
            "range": "± 64548",
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
        "date": 1788804476599,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42060379,
            "range": "± 834699",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 122461108,
            "range": "± 3237047",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 269655164,
            "range": "± 3972679",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 813982217,
            "range": "± 11196641",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1159603063048,
            "range": "± 2865855113",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 799398681,
            "range": "± 377561",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 284315793,
            "range": "± 627076",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2957315,
            "range": "± 39875",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 415379769,
            "range": "± 711402",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1710451,
            "range": "± 2292",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4699,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5407,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 152260410,
            "range": "± 301588",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 204850295448,
            "range": "± 60697816",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 26115179041,
            "range": "± 221186128",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 41444727,
            "range": "± 261078",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15659543,
            "range": "± 26630",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 197700,
            "range": "± 1666",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 41249764,
            "range": "± 127959",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15947077,
            "range": "± 34932",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 197034,
            "range": "± 1422",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 24928839,
            "range": "± 96796",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 83262,
            "range": "± 883",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 457,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 534,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1049031,
            "range": "± 26766",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1224744987,
            "range": "± 2580894",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 343141,
            "range": "± 9155",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 222076,
            "range": "± 2286",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 83444,
            "range": "± 1040",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 344774,
            "range": "± 8774",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 240682,
            "range": "± 7327",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 86218,
            "range": "± 901",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 246956,
            "range": "± 7662",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 84308,
            "range": "± 3008",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 472,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 543,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 335441,
            "range": "± 13196",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 7913993,
            "range": "± 72503",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1047787,
            "range": "± 62475",
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
        "date": 1788885276035,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42698621,
            "range": "± 1762128",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 123848200,
            "range": "± 2666685",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 273889893,
            "range": "± 4926728",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 846049466,
            "range": "± 12241995",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1099161414997,
            "range": "± 2985604230",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 818937373,
            "range": "± 29689980",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 272224352,
            "range": "± 4197508",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3098815,
            "range": "± 20208",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 462048811,
            "range": "± 34062166",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1721136,
            "range": "± 9827",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4431,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5087,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 143890245,
            "range": "± 684958",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 193839658236,
            "range": "± 88040459",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 27632054282,
            "range": "± 218983047",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 42789063,
            "range": "± 287612",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 16054763,
            "range": "± 129890",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 200390,
            "range": "± 6976",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 42743417,
            "range": "± 193401",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 16278608,
            "range": "± 103559",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 193137,
            "range": "± 6572",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 24653528,
            "range": "± 56196",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 90233,
            "range": "± 611",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 427,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 485,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1049130,
            "range": "± 8603",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1348880985,
            "range": "± 1931934",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 333544,
            "range": "± 10097",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 228073,
            "range": "± 4049",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 95391,
            "range": "± 3014",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 332076,
            "range": "± 10497",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 249368,
            "range": "± 2631",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 95532,
            "range": "± 2508",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 237221,
            "range": "± 8844",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 91738,
            "range": "± 1877",
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
            "value": 501,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 352582,
            "range": "± 15057",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8874032,
            "range": "± 73812",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1007853,
            "range": "± 45356",
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
        "date": 1788973153507,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 42941221,
            "range": "± 1704053",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 127747647,
            "range": "± 2905627",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 277553935,
            "range": "± 5184939",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 846087883,
            "range": "± 12774702",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1160866605492,
            "range": "± 2781149096",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 798275006,
            "range": "± 1966635",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 286155699,
            "range": "± 727702",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2956123,
            "range": "± 43306",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 419661648,
            "range": "± 976496",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1711681,
            "range": "± 3394",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4736,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5432,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 152361697,
            "range": "± 221469",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 205138896679,
            "range": "± 75524771",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 26323773178,
            "range": "± 226830880",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 41529505,
            "range": "± 44222",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 15739677,
            "range": "± 38610",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 217973,
            "range": "± 17127",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 41411743,
            "range": "± 158754",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 15989937,
            "range": "± 91332",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 219988,
            "range": "± 24423",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 25018722,
            "range": "± 285390",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 84645,
            "range": "± 2155",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 442,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 517,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1074236,
            "range": "± 21432",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1224901212,
            "range": "± 19756650",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 346404,
            "range": "± 12964",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 227190,
            "range": "± 6194",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 90204,
            "range": "± 1277",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 354188,
            "range": "± 14956",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 246855,
            "range": "± 6172",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 90438,
            "range": "± 4249",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 253695,
            "range": "± 9728",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 88910,
            "range": "± 1846",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 467,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 529,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 330597,
            "range": "± 33216",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 7939270,
            "range": "± 88974",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 1061858,
            "range": "± 37496",
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
        "date": 1789055380882,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 33235388,
            "range": "± 705850",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 98257108,
            "range": "± 2128015",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 214305335,
            "range": "± 2894514",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 657245085,
            "range": "± 8893626",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 898766850702,
            "range": "± 1774174585",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 618843261,
            "range": "± 789494",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 219633148,
            "range": "± 1322098",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 1984649,
            "range": "± 29597",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 324201136,
            "range": "± 1002810",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1319994,
            "range": "± 2239",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 3629,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 4186,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 118003285,
            "range": "± 231538",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 158974074172,
            "range": "± 46582806",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 20488600642,
            "range": "± 352780825",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 31948700,
            "range": "± 35180",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 12256111,
            "range": "± 65524",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 151018,
            "range": "± 2157",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 31923446,
            "range": "± 188767",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 12477402,
            "range": "± 74715",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 151304,
            "range": "± 1203",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 19549677,
            "range": "± 92748",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 63907,
            "range": "± 838",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 351,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 399,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 799197,
            "range": "± 4526",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 950155853,
            "range": "± 1247431",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 289435,
            "range": "± 6515",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 189872,
            "range": "± 3600",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 70118,
            "range": "± 870",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 289107,
            "range": "± 5314",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 193282,
            "range": "± 2554",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 70142,
            "range": "± 934",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 208970,
            "range": "± 7148",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 68842,
            "range": "± 960",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 360,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 411,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 257469,
            "range": "± 8694",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 6138663,
            "range": "± 80960",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 820192,
            "range": "± 28639",
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
        "date": 1789144670741,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 43132537,
            "range": "± 1995113",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 126985139,
            "range": "± 2687711",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 281587073,
            "range": "± 6297428",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 876613241,
            "range": "± 10490512",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1100640122430,
            "range": "± 2766624440",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 816284774,
            "range": "± 28576855",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 273376789,
            "range": "± 2227671",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 2600058,
            "range": "± 61248",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 461139103,
            "range": "± 31332744",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1710490,
            "range": "± 8937",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4413,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5114,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 142391614,
            "range": "± 888563",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 193818277269,
            "range": "± 100266392",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 28167824852,
            "range": "± 100397454",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 41909235,
            "range": "± 353619",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 16086896,
            "range": "± 52560",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 195520,
            "range": "± 4741",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 42393081,
            "range": "± 310106",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 16330751,
            "range": "± 26374",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 186814,
            "range": "± 2699",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 24925018,
            "range": "± 162182",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 88685,
            "range": "± 1040",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 434,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 488,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1041078,
            "range": "± 16454",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1344308630,
            "range": "± 2305014",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 355132,
            "range": "± 7087",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 235473,
            "range": "± 3507",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 97246,
            "range": "± 2256",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 358157,
            "range": "± 9399",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 249903,
            "range": "± 1936",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 98353,
            "range": "± 2450",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 253793,
            "range": "± 8598",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 93137,
            "range": "± 2161",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 442,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 513,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 354845,
            "range": "± 16215",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8838125,
            "range": "± 108531",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 991592,
            "range": "± 33935",
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
        "date": 1789229035968,
        "tool": "cargo",
        "benches": [
          {
            "name": "build/builder/200x16",
            "value": 43004238,
            "range": "± 1091208",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/200x64",
            "value": 123769371,
            "range": "± 2912795",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x16",
            "value": 274845589,
            "range": "± 5082851",
            "unit": "ns/iter"
          },
          {
            "name": "build/builder/500x64",
            "value": 842209588,
            "range": "± 10749478",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build/300000x384",
            "value": 1099439428465,
            "range": "± 2097881241",
            "unit": "ns/iter"
          },
          {
            "name": "cve/lambda_aware/20",
            "value": 767980968,
            "range": "± 41117621",
            "unit": "ns/iter"
          },
          {
            "name": "cve/hybrid/20",
            "value": 297185667,
            "range": "± 2416203",
            "unit": "ns/iter"
          },
          {
            "name": "cve/linear_sorted/20",
            "value": 3069274,
            "range": "± 83605",
            "unit": "ns/iter"
          },
          {
            "name": "cve/range_search",
            "value": 461960925,
            "range": "± 1616649",
            "unit": "ns/iter"
          },
          {
            "name": "cve/prepare_query_item",
            "value": 1716100,
            "range": "± 10805",
            "unit": "ns/iter"
          },
          {
            "name": "cve/multiply_vector",
            "value": 4393,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "cve/rayleigh_quotient",
            "value": 5038,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "cve/build_spectral_laplacian/300000x384",
            "value": 144563292,
            "range": "± 8822347",
            "unit": "ns/iter"
          },
          {
            "name": "cve/taumode_lambdas_parallel/300000x384",
            "value": 193579559259,
            "range": "± 82762057",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build/80000x64",
            "value": 28004828914,
            "range": "± 393454307",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/10",
            "value": 42260914,
            "range": "± 186563",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/10",
            "value": 16114619,
            "range": "± 93578",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/10",
            "value": 190697,
            "range": "± 3713",
            "unit": "ns/iter"
          },
          {
            "name": "scale/lambda_aware/50",
            "value": 42263515,
            "range": "± 172939",
            "unit": "ns/iter"
          },
          {
            "name": "scale/hybrid/50",
            "value": 16410934,
            "range": "± 94532",
            "unit": "ns/iter"
          },
          {
            "name": "scale/linear_sorted/50",
            "value": 189953,
            "range": "± 4605",
            "unit": "ns/iter"
          },
          {
            "name": "scale/range_search",
            "value": 24521541,
            "range": "± 107223",
            "unit": "ns/iter"
          },
          {
            "name": "scale/prepare_query_item",
            "value": 88990,
            "range": "± 1054",
            "unit": "ns/iter"
          },
          {
            "name": "scale/multiply_vector",
            "value": 427,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/rayleigh_quotient",
            "value": 497,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scale/build_spectral_laplacian/80000x64",
            "value": 1040584,
            "range": "± 21645",
            "unit": "ns/iter"
          },
          {
            "name": "scale/taumode_lambdas_parallel/80000x64",
            "value": 1342021977,
            "range": "± 12112736",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/10",
            "value": 362462,
            "range": "± 16004",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/10",
            "value": 229871,
            "range": "± 2563",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/10",
            "value": 97707,
            "range": "± 2439",
            "unit": "ns/iter"
          },
          {
            "name": "search/lambda_aware/50",
            "value": 365536,
            "range": "± 14822",
            "unit": "ns/iter"
          },
          {
            "name": "search/hybrid/50",
            "value": 247045,
            "range": "± 3343",
            "unit": "ns/iter"
          },
          {
            "name": "search/linear_sorted/50",
            "value": 98050,
            "range": "± 2076",
            "unit": "ns/iter"
          },
          {
            "name": "search/range_search",
            "value": 255833,
            "range": "± 12765",
            "unit": "ns/iter"
          },
          {
            "name": "search/prepare_query_item",
            "value": 92583,
            "range": "± 1782",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/multiply_vector",
            "value": 441,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/rayleigh_quotient",
            "value": 501,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/200x16",
            "value": 358984,
            "range": "± 18606",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/taumode_lambdas_parallel/500x64",
            "value": 8862193,
            "range": "± 164667",
            "unit": "ns/iter"
          },
          {
            "name": "spectral/build_spectral_laplacian",
            "value": 981944,
            "range": "± 81195",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}