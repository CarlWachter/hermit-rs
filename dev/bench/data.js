window.BENCHMARK_DATA = {
  "lastUpdate": 1723379949651,
  "repoUrl": "https://github.com/CarlWachter/hermit-rs",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Martin Kröning",
            "username": "mkroening",
            "email": "mkroening@posteo.net"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cbcf65a591eed712c8dd12af24cebd7f73882be1",
          "message": "Merge pull request #1300 from hermit-os/split-fix\n\nfix(virtqueue/split): fix off-by-one error",
          "timestamp": "2024-06-29T10:01:25Z",
          "url": "https://github.com/hermit-os/kernel/commit/cbcf65a591eed712c8dd12af24cebd7f73882be1"
        },
        "date": 1723379948168,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.00170486,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "Allocation success",
            "value": 100,
            "unit": "%",
            "range": 0,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Deallocation success",
            "value": 70.0058911991047,
            "unit": "%",
            "range": 0.2173548348000294,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Pre-fail Allocations",
            "value": 100,
            "unit": "%",
            "range": 0,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time",
            "value": 5998.673495999222,
            "unit": "Ticks",
            "range": 80.47389038768297,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 5998.673495999222,
            "unit": "Ticks",
            "range": 80.47389038768297,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1796.1590107130926,
            "unit": "Ticks",
            "range": 13.368577651707849,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.000000000000007,
            "unit": "ns",
            "range": 7.105427357601002e-15,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 72.25,
            "unit": "ns",
            "range": 13.018736497832654,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 117.10000000000001,
            "unit": "ns",
            "range": 17.273968854898403,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18635.983054722827,
            "unit": "Mbit/s",
            "range": 1736.4269766704856,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 879274.6666666665,
            "unit": "ns",
            "range": 86005.16333853967,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1447253.3333333335,
            "unit": "ns",
            "range": 698495.7797731415,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 519.9078961504854,
            "unit": "Mbit/s",
            "range": 172.14966341583562,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 47104,
            "unit": "ns",
            "range": 14505.662710357865,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 350890.6666666666,
            "unit": "ns",
            "range": 85417.9420548686,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      }
    ]
  }
}