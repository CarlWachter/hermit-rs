window.BENCHMARK_DATA = {
  "lastUpdate": 1719150587566,
  "repoUrl": "https://github.com/CarlWachter/hermit-rs",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "carlwachter@web.de",
            "name": "CarlWachter",
            "username": "CarlWachter"
          },
          "committer": {
            "email": "carlwachter@web.de",
            "name": "CarlWachter",
            "username": "CarlWachter"
          },
          "distinct": true,
          "id": "9854aadd6abe863b7d996d0a1efa18a1d6649146",
          "message": "feat(groups): Grouping of benchmarks",
          "timestamp": "2024-06-23T15:47:59+02:00",
          "tree_id": "994faab229fadc2bc2e16bb60e6a65e2fe365764",
          "url": "https://github.com/CarlWachter/hermit-rs/commit/9854aadd6abe863b7d996d0a1efa18a1d6649146"
        },
        "date": 1719150586623,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Sleep-Timing",
            "value": 100,
            "unit": "ms",
            "group": "Demo"
          },
          {
            "name": "Pi-Calculation-Sequential",
            "value": 0,
            "unit": "ms",
            "group": "Demo"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 3,
            "unit": "ms",
            "group": "Demo"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 15649000,
            "unit": "ns",
            "group": "Demo"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 17641000,
            "unit": "ns",
            "group": "Demo"
          },
          {
            "name": "Matmul-par z-order",
            "value": 12984000,
            "unit": "ns",
            "group": "Demo"
          },
          {
            "name": "Matmul-par strassen",
            "value": 13781000,
            "unit": "ns",
            "group": "Demo"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.3586722119531731,
            "unit": "x",
            "group": "Demo"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 120,
            "unit": "ms",
            "group": "Demo"
          },
          {
            "name": "startup",
            "value": 0.343138151,
            "unit": "s",
            "group": "General"
          },
          {
            "name": "Size rusty_demo",
            "value": 37549984,
            "unit": "bytes",
            "group": "File Size"
          }
        ]
      }
    ]
  }
}