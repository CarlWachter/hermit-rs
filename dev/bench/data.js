window.BENCHMARK_DATA = {
  "lastUpdate": 1723413954633,
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
      },
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
        "date": 1723380683281,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001813192,
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
            "value": 69.97683416322756,
            "unit": "%",
            "range": 0.24636028750897387,
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
            "value": 5965.069671693935,
            "unit": "Ticks",
            "range": 41.25028173024733,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 5965.069671693935,
            "unit": "Ticks",
            "range": 41.25028173024733,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1799.5844597210337,
            "unit": "Ticks",
            "range": 9.348945714419196,
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
            "value": 71.64999999999999,
            "unit": "ns",
            "range": 13.409977628616687,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 106,
            "unit": "ns",
            "range": 13.023056476879765,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18469.357835946976,
            "unit": "Mbit/s",
            "range": 493.5239166687409,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 857429.3333333335,
            "unit": "ns",
            "range": 15446.983337280526,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1168725.3333333333,
            "unit": "ns",
            "range": 316097.51969219174,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 536.6117631359023,
            "unit": "Mbit/s",
            "range": 175.38235625105,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 55978.666666666664,
            "unit": "ns",
            "range": 12961.681098101777,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 169984,
            "unit": "ns",
            "range": 58574.23215032357,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723381319145,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001960733,
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
            "value": 69.97520188292833,
            "unit": "%",
            "range": 0.24770695088918374,
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
            "value": 5997.459481570362,
            "unit": "Ticks",
            "range": 67.21242673290702,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 5997.459481570362,
            "unit": "Ticks",
            "range": 67.21242673290702,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1793.0772713374968,
            "unit": "Ticks",
            "range": 16.91639250489641,
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
            "value": 74.05,
            "unit": "ns",
            "range": 13.481376042526223,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 106.59999999999998,
            "unit": "ns",
            "range": 11.416654501210063,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18902.681920438794,
            "unit": "Mbit/s",
            "range": 747.9993153461809,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 835584,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 944810.6666666667,
            "unit": "ns",
            "range": 67331.83934976248,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 510.3605388428338,
            "unit": "Mbit/s",
            "range": 193.43581727224492,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 57343.99999999999,
            "unit": "ns",
            "range": 15484.649775395847,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 279893.3333333333,
            "unit": "ns",
            "range": 95553.82658074047,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723381961385,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001821541,
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
            "value": 69.98997051706309,
            "unit": "%",
            "range": 0.2609078105267635,
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
            "value": 6026.267020954889,
            "unit": "Ticks",
            "range": 106.31378642666515,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6026.267020954889,
            "unit": "Ticks",
            "range": 106.31378642666515,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1796.9977690506455,
            "unit": "Ticks",
            "range": 15.171713749284795,
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
            "value": 71.8,
            "unit": "ns",
            "range": 15.509996776273038,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 111.35,
            "unit": "ns",
            "range": 12.65414951705566,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 19882.54264529779,
            "unit": "Mbit/s",
            "range": 939.660591210817,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 835584,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 879274.6666666667,
            "unit": "ns",
            "range": 15446.983337280526,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 388.3013121823916,
            "unit": "Mbit/s",
            "range": 7.938845377784442,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 55978.666666666664,
            "unit": "ns",
            "range": 12961.681098101777,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 281258.6666666667,
            "unit": "ns",
            "range": 96601.55467808075,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723382593847,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.002083634,
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
            "value": 69.90183698263726,
            "unit": "%",
            "range": 0.24850664736462502,
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
            "value": 5991.428432306982,
            "unit": "Ticks",
            "range": 119.59267474693964,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 5991.428432306982,
            "unit": "Ticks",
            "range": 119.59267474693964,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1793.5025439362144,
            "unit": "Ticks",
            "range": 14.693014693776428,
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
            "value": 69.49999999999999,
            "unit": "ns",
            "range": 14.430869689661813,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 109.7,
            "unit": "ns",
            "range": 9.829038610159184,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 19141.80549158705,
            "unit": "Mbit/s",
            "range": 742.9853095656299,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 835584,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 857429.3333333335,
            "unit": "ns",
            "range": 15446.983337280526,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 398.01858487583945,
            "unit": "Mbit/s",
            "range": 7.282998909277478,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 68949.33333333333,
            "unit": "ns",
            "range": 1930.8729171600658,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 854698.6666666667,
            "unit": "ns",
            "range": 925105.7784063879,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723383228400,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001951202,
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
            "value": 70.0290404276602,
            "unit": "%",
            "range": 0.21110103942666678,
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
            "value": 5998.253012360585,
            "unit": "Ticks",
            "range": 98.80633793413855,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 5998.253012360585,
            "unit": "Ticks",
            "range": 98.80633793413855,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1787.0320767484698,
            "unit": "Ticks",
            "range": 12.92982017527741,
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
            "value": 67.25,
            "unit": "ns",
            "range": 12.453413186753261,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 109.55,
            "unit": "ns",
            "range": 13.81475660299522,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18885.403804240275,
            "unit": "Mbit/s",
            "range": 91.98287407432083,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 846506.6666666667,
            "unit": "ns",
            "range": 15446.983337280526,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 933888,
            "unit": "ns",
            "range": 53509.91992767945,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 387.37486924907364,
            "unit": "Mbit/s",
            "range": 12.440247094294953,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 59050.666666666664,
            "unit": "ns",
            "range": 15057.404586743654,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 195242.66666666666,
            "unit": "ns",
            "range": 13923.722618450698,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723383868768,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001715991,
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
            "value": 69.91739670831518,
            "unit": "%",
            "range": 0.26300720736022115,
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
            "value": 6053.936852661935,
            "unit": "Ticks",
            "range": 104.85586255926705,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6053.936852661935,
            "unit": "Ticks",
            "range": 104.85586255926705,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1813.8627493769206,
            "unit": "Ticks",
            "range": 12.525866515911229,
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
            "value": 70.85,
            "unit": "ns",
            "range": 15.248852415837725,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 110.85000000000001,
            "unit": "ns",
            "range": 10.49892851675827,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 19256.89629944782,
            "unit": "Mbit/s",
            "range": 403.62122292165566,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 846506.6666666667,
            "unit": "ns",
            "range": 15446.983337280526,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1660245.3333333335,
            "unit": "ns",
            "range": 818690.1168758678,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 626.6741135806066,
            "unit": "Mbit/s",
            "range": 189.06308625507506,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 53930.666666666664,
            "unit": "ns",
            "range": 12240.500788593396,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 238250.6666666667,
            "unit": "ns",
            "range": 139447.93082565104,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723384498471,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001794122,
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
            "value": 70.00815298383358,
            "unit": "%",
            "range": 0.224560248820623,
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
            "value": 6042.927259550103,
            "unit": "Ticks",
            "range": 115.55434238410507,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6042.927259550103,
            "unit": "Ticks",
            "range": 115.55434238410507,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1806.9661567949563,
            "unit": "Ticks",
            "range": 14.555881117416893,
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
            "value": 69.24999999999999,
            "unit": "ns",
            "range": 14.949498319341686,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 108.75000000000001,
            "unit": "ns",
            "range": 14.313891853720287,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 20022.175582000375,
            "unit": "Mbit/s",
            "range": 670.3308505733461,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 813738.6666666665,
            "unit": "ns",
            "range": 15446.983337280526,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 857429.3333333334,
            "unit": "ns",
            "range": 15446.983337280526,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 395.6724864560965,
            "unit": "Mbit/s",
            "range": 9.118948259007094,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 66560,
            "unit": "ns",
            "range": 4655.166019237839,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 225280,
            "unit": "ns",
            "range": 35393.4852009048,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723385138109,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001832022,
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
            "value": 70.03183190715177,
            "unit": "%",
            "range": 0.2596842118538945,
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
            "value": 6069.912281926899,
            "unit": "Ticks",
            "range": 99.9288211651516,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6069.912281926899,
            "unit": "Ticks",
            "range": 99.9288211651516,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1814.4963912497162,
            "unit": "Ticks",
            "range": 10.938552261722615,
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
            "value": 67.6,
            "unit": "ns",
            "range": 16.65653025092561,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 114.25,
            "unit": "ns",
            "range": 17.099342092606953,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18656.303703320176,
            "unit": "Mbit/s",
            "range": 449.96973899013614,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 846506.6666666667,
            "unit": "ns",
            "range": 15446.983337280526,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1004885.3333333333,
            "unit": "ns",
            "range": 60322.39830186536,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 516.9627133401426,
            "unit": "Mbit/s",
            "range": 186.34176731105268,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 57344,
            "unit": "ns",
            "range": 16447.875485910026,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 320853.3333333333,
            "unit": "ns",
            "range": 94612.77294084322,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723385763068,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.002242005,
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
            "value": 70.03484119734803,
            "unit": "%",
            "range": 0.2694773852839134,
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
            "value": 6027.982370507567,
            "unit": "Ticks",
            "range": 136.0166550673483,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6027.982370507567,
            "unit": "Ticks",
            "range": 136.0166550673483,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1806.754651149198,
            "unit": "Ticks",
            "range": 14.827519315170127,
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
            "value": 69.10000000000001,
            "unit": "ns",
            "range": 11.84440796325422,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 106.35000000000001,
            "unit": "ns",
            "range": 8.03912308650639,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18655.663798990838,
            "unit": "Mbit/s",
            "range": 431.6099002872025,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 835584,
            "unit": "ns",
            "range": 26754.959963839727,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 993962.6666666667,
            "unit": "ns",
            "range": 91058.62383224459,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 408.1280861384049,
            "unit": "Mbit/s",
            "range": 0.8781038288341502,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 59050.666666666664,
            "unit": "ns",
            "range": 15057.404586743654,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 293546.6666666666,
            "unit": "ns",
            "range": 85417.9420548686,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723386404758,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.002078633,
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
            "value": 70.01489277471758,
            "unit": "%",
            "range": 0.18671153681382854,
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
            "value": 6052.551180400514,
            "unit": "Ticks",
            "range": 113.50643767858708,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6052.551180400514,
            "unit": "Ticks",
            "range": 113.50643767858708,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1829.4622244342313,
            "unit": "Ticks",
            "range": 54.137593486423064,
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
            "value": 76.75000000000001,
            "unit": "ns",
            "range": 15.648881749185787,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 110.99999999999999,
            "unit": "ns",
            "range": 13.63084736911099,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18854.182744934827,
            "unit": "Mbit/s",
            "range": 119.26328613353054,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 857429.3333333335,
            "unit": "ns",
            "range": 15446.983337280526,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1059498.6666666665,
            "unit": "ns",
            "range": 201255.87617314985,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 520.6810572780522,
            "unit": "Mbit/s",
            "range": 165.74320089013156,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 65877.33333333333,
            "unit": "ns",
            "range": 2413.591146450082,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 604842.6666666666,
            "unit": "ns",
            "range": 523074.1503823547,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723387032748,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001895521,
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
            "value": 70.00492247451905,
            "unit": "%",
            "range": 0.2427855879024048,
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
            "value": 6054.309279468541,
            "unit": "Ticks",
            "range": 140.59041324685248,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6054.309279468541,
            "unit": "Ticks",
            "range": 140.59041324685248,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1815.4397265974005,
            "unit": "Ticks",
            "range": 12.730331275069188,
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
            "value": 71.70000000000002,
            "unit": "ns",
            "range": 14.748220231607611,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 103.80000000000001,
            "unit": "ns",
            "range": 8.053570636680353,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18709.640142068103,
            "unit": "Mbit/s",
            "range": 468.10995235554583,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 835584,
            "unit": "ns",
            "range": 26754.959963839727,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 868352,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 375.19634420427826,
            "unit": "Mbit/s",
            "range": 5.834067085353021,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 46421.33333333333,
            "unit": "ns",
            "range": 17860.57448373061,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 367274.6666666667,
            "unit": "ns",
            "range": 83296.52383836647,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723387679058,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001836852,
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
            "value": 70.0573723560953,
            "unit": "%",
            "range": 0.3010380951895737,
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
            "value": 6030.17230841554,
            "unit": "Ticks",
            "range": 89.97123591296751,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6030.17230841554,
            "unit": "Ticks",
            "range": 89.97123591296751,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1814.0415009664796,
            "unit": "Ticks",
            "range": 10.005940234519374,
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
            "value": 77.20000000000002,
            "unit": "ns",
            "range": 16.234531098864544,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 113.60000000000001,
            "unit": "ns",
            "range": 14.381933110677437,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 19340.41073720176,
            "unit": "Mbit/s",
            "range": 553.6550798685334,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 824661.3333333333,
            "unit": "ns",
            "range": 15446.983337280526,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 912042.6666666667,
            "unit": "ns",
            "range": 86005.16333853967,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 507.7472665730869,
            "unit": "Mbit/s",
            "range": 167.9553764867337,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 65877.33333333333,
            "unit": "ns",
            "range": 5566.978194875764,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 187050.66666666666,
            "unit": "ns",
            "range": 40317.81016981067,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723388321796,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001734691,
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
            "value": 70.05538991377587,
            "unit": "%",
            "range": 0.21937114648585562,
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
            "value": 5987.55824452849,
            "unit": "Ticks",
            "range": 69.87161216878116,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 5987.55824452849,
            "unit": "Ticks",
            "range": 69.87161216878116,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1808.9935047633674,
            "unit": "Ticks",
            "range": 12.983225345004806,
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
            "value": 71.25,
            "unit": "ns",
            "range": 11.6870654999448,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 115.90000000000002,
            "unit": "ns",
            "range": 13.296240070034836,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18536.843859442793,
            "unit": "Mbit/s",
            "range": 643.545005808441,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 857429.3333333333,
            "unit": "ns",
            "range": 30893.966674561052,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 922965.3333333333,
            "unit": "ns",
            "range": 81737.75283320567,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 382.03175832267993,
            "unit": "Mbit/s",
            "range": 35.24111343406706,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 55296,
            "unit": "ns",
            "range": 13814.51526474961,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 281258.6666666666,
            "unit": "ns",
            "range": 77017.38715092558,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723388960894,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001900663,
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
            "value": 69.97824051975445,
            "unit": "%",
            "range": 0.20546586529607874,
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
            "value": 6075.328086601059,
            "unit": "Ticks",
            "range": 102.38276585318086,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6075.328086601059,
            "unit": "Ticks",
            "range": 102.38276585318086,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1817.3818619742826,
            "unit": "Ticks",
            "range": 14.74229954080834,
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
            "value": 71.8,
            "unit": "ns",
            "range": 14.783774890061062,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 114.9,
            "unit": "ns",
            "range": 16.232375057273657,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18618.695307366685,
            "unit": "Mbit/s",
            "range": 235.695842268999,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 835584,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 901120,
            "unit": "ns",
            "range": 26754.959963839727,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 513.7653119653039,
            "unit": "Mbit/s",
            "range": 141.26028376569786,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 56320,
            "unit": "ns",
            "range": 15929.701566570542,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 160426.66666666666,
            "unit": "ns",
            "range": 36341.98297041897,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723389600910,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001776081,
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
            "value": 69.94526245911602,
            "unit": "%",
            "range": 0.16781392498328568,
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
            "value": 5958.040837436381,
            "unit": "Ticks",
            "range": 54.629392131334725,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 5958.040837436381,
            "unit": "Ticks",
            "range": 54.629392131334725,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1812.4249096570145,
            "unit": "Ticks",
            "range": 17.230111647740646,
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
            "value": 73.35000000000001,
            "unit": "ns",
            "range": 15.2652382883465,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 113.24999999999999,
            "unit": "ns",
            "range": 16.145819892467525,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18980.18698875773,
            "unit": "Mbit/s",
            "range": 308.989892126087,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 835584,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 879274.6666666667,
            "unit": "ns",
            "range": 15446.983337280526,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 513.0537251452113,
            "unit": "Mbit/s",
            "range": 173.08097275008384,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 55978.666666666664,
            "unit": "ns",
            "range": 12961.681098101777,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 215722.6666666667,
            "unit": "ns",
            "range": 64010.69421762446,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723390234565,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001878521,
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
            "value": 69.94655733770749,
            "unit": "%",
            "range": 0.2236932006899567,
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
            "value": 6041.615691682154,
            "unit": "Ticks",
            "range": 102.06413504983375,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6041.615691682154,
            "unit": "Ticks",
            "range": 102.06413504983375,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1815.1084428991396,
            "unit": "Ticks",
            "range": 14.32728419033812,
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
            "value": 71.50000000000001,
            "unit": "ns",
            "range": 15.104635050208927,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 109.80000000000001,
            "unit": "ns",
            "range": 13.533661736573736,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18356.686695034656,
            "unit": "Mbit/s",
            "range": 458.2373709669876,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 857429.3333333335,
            "unit": "ns",
            "range": 15446.983337280526,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1540096,
            "unit": "ns",
            "range": 903648.5252309107,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 509.3740875874523,
            "unit": "Mbit/s",
            "range": 188.76995080561193,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 59733.33333333333,
            "unit": "ns",
            "range": 17222.964308026523,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 786431.9999999999,
            "unit": "ns",
            "range": 579609.3280684844,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723390873959,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001801012,
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
            "value": 70.05008415256913,
            "unit": "%",
            "range": 0.27074719312714973,
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
            "value": 6029.8585693668065,
            "unit": "Ticks",
            "range": 88.35748215913702,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6029.8585693668065,
            "unit": "Ticks",
            "range": 88.35748215913702,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1824.098886334386,
            "unit": "Ticks",
            "range": 43.100156837657,
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
            "value": 74.85000000000002,
            "unit": "ns",
            "range": 15.219313387929164,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 111.75000000000001,
            "unit": "ns",
            "range": 17.186840896453308,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18161.969297778774,
            "unit": "Mbit/s",
            "range": 521.836769450206,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 868352,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1212416,
            "unit": "ns",
            "range": 92681.90002368316,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 511.3514378309579,
            "unit": "Mbit/s",
            "range": 186.64493738635156,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 47786.666666666664,
            "unit": "ns",
            "range": 16895.138025150576,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 315392,
            "unit": "ns",
            "range": 52560.900245968645,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723391502824,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001819874,
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
            "value": 70.01836737964913,
            "unit": "%",
            "range": 0.1548924441003787,
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
            "value": 6063.2730072504,
            "unit": "Ticks",
            "range": 112.78522663323027,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6063.2730072504,
            "unit": "Ticks",
            "range": 112.78522663323027,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1812.643701555978,
            "unit": "Ticks",
            "range": 13.317846934701912,
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
            "value": 71.74999999999999,
            "unit": "ns",
            "range": 13.018736497832654,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 107.2,
            "unit": "ns",
            "range": 12.71062547634852,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18438.30207251678,
            "unit": "Mbit/s",
            "range": 268.0228108579378,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 846506.6666666667,
            "unit": "ns",
            "range": 15446.983337280526,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1064960,
            "unit": "ns",
            "range": 127613.0257092381,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 386.8179626467822,
            "unit": "Mbit/s",
            "range": 8.43994185512878,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 70656,
            "unit": "ns",
            "range": 4655.166019237839,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 203434.66666666663,
            "unit": "ns",
            "range": 16832.95983744062,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723392143374,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001793272,
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
            "value": 69.99702071066527,
            "unit": "%",
            "range": 0.16924995550813654,
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
            "value": 5966.587937486512,
            "unit": "Ticks",
            "range": 38.79731983028586,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 5966.587937486512,
            "unit": "Ticks",
            "range": 38.79731983028586,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1824.3632939560966,
            "unit": "Ticks",
            "range": 14.304909500850604,
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
            "value": 69.89999999999999,
            "unit": "ns",
            "range": 13.475533384619697,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 110.65000000000002,
            "unit": "ns",
            "range": 16.562834902274428,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 17942.35579081371,
            "unit": "Mbit/s",
            "range": 436.98736263329937,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 868352,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1010346.6666666667,
            "unit": "ns",
            "range": 100405.39169232342,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 406.9866896913006,
            "unit": "Mbit/s",
            "range": 17.690421844200465,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 64853.33333333333,
            "unit": "ns",
            "range": 2104.1199796800774,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 1556480,
            "unit": "ns",
            "range": 1957907.9943191065,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723393339658,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001771353,
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
            "value": 70.0649009552375,
            "unit": "%",
            "range": 0.2308222277248647,
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
            "value": 6042.434015804691,
            "unit": "Ticks",
            "range": 124.0228821361458,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6042.434015804691,
            "unit": "Ticks",
            "range": 124.0228821361458,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1809.462192985785,
            "unit": "Ticks",
            "range": 10.725043651887468,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 25.999999999999982,
            "unit": "ns",
            "range": 1.7763568394002505e-14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 71.82,
            "unit": "ns",
            "range": 16.519915254019917,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 110.36000000000004,
            "unit": "ns",
            "range": 13.525915865478389,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18995.13725120797,
            "unit": "Mbit/s",
            "range": 484.0565857628394,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 829030.3999999999,
            "unit": "ns",
            "range": 32105.95195660767,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1690828.8,
            "unit": "ns",
            "range": 917819.9227522576,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 471.2742743056216,
            "unit": "Mbit/s",
            "range": 155.61217414825467,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 56524.799999999996,
            "unit": "ns",
            "range": 15290.20944787873,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 206848,
            "unit": "ns",
            "range": 112083.80498894566,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723402823531,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001815664,
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
            "value": 69.96176538714877,
            "unit": "%",
            "range": 0.21394874528122376,
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
            "value": 6012.476823429157,
            "unit": "Ticks",
            "range": 115.20273585405681,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6012.476823429157,
            "unit": "Ticks",
            "range": 115.20273585405681,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1809.9411474346634,
            "unit": "Ticks",
            "range": 14.234064671313448,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 25.999999999999982,
            "unit": "ns",
            "range": 1.7763568394002505e-14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 74.52,
            "unit": "ns",
            "range": 16.55444351224166,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 112.46000000000005,
            "unit": "ns",
            "range": 12.578092065174276,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18621.202410898917,
            "unit": "Mbit/s",
            "range": 923.8775790635169,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 842137.5999999999,
            "unit": "ns",
            "range": 13107.199999999999,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1287782.4,
            "unit": "ns",
            "range": 703909.7258193269,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 510.8873633283182,
            "unit": "Mbit/s",
            "range": 164.27832142784206,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 62259.2,
            "unit": "ns",
            "range": 13729.239664307708,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 172441.6,
            "unit": "ns",
            "range": 44652.03634147048,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723412220873,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001676338,
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
            "value": 69.97194330729329,
            "unit": "%",
            "range": 0.1667111807773079,
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
            "value": 5971.160544371354,
            "unit": "Ticks",
            "range": 34.54386709427554,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 5971.160544371354,
            "unit": "Ticks",
            "range": 34.54386709427554,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1809.9406995396355,
            "unit": "Ticks",
            "range": 8.561106327891427,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 25.999999999999982,
            "unit": "ns",
            "range": 1.7763568394002505e-14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 68.6,
            "unit": "ns",
            "range": 13.779695207079147,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 114.16000000000007,
            "unit": "ns",
            "range": 13.534193732912204,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 19163.377549791334,
            "unit": "Mbit/s",
            "range": 356.2647957506223,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 842137.5999999999,
            "unit": "ns",
            "range": 13107.199999999999,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1402470.4,
            "unit": "ns",
            "range": 720195.6161359495,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 398.6428454864008,
            "unit": "Mbit/s",
            "range": 11.703446370555001,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 52019.2,
            "unit": "ns",
            "range": 14076.182755278505,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 252313.59999999998,
            "unit": "ns",
            "range": 130901.64929992288,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      },
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
        "date": 1723413953856,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.00182034,
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
            "value": 70.02299637055586,
            "unit": "%",
            "range": 0.1915791280058767,
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
            "value": 6072.238140064612,
            "unit": "Ticks",
            "range": 124.67534904760029,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6072.238140064612,
            "unit": "Ticks",
            "range": 124.67534904760029,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1803.9557405057385,
            "unit": "Ticks",
            "range": 13.666802704407587,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 25.999999999999982,
            "unit": "ns",
            "range": 1.7763568394002505e-14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 71.25999999999999,
            "unit": "ns",
            "range": 14.732019549267507,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 110.11999999999998,
            "unit": "ns",
            "range": 14.913939787996998,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18553.82555363759,
            "unit": "Mbit/s",
            "range": 382.46958122256075,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 848691.2,
            "unit": "ns",
            "range": 16052.975978303835,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1245184,
            "unit": "ns",
            "range": 531710.6565221351,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 467.592095358665,
            "unit": "Mbit/s",
            "range": 115.88621022332862,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 57343.99999999999,
            "unit": "ns",
            "range": 15956.009927296987,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 311296,
            "unit": "ns",
            "range": 81714.94335799298,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      }
    ]
  }
}