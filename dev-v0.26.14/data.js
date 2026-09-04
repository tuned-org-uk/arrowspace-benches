window.BENCHMARK_DATA = {
  "lastUpdate": 1788549502142,
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
      }
    ]
  }
}