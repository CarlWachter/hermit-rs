window.BENCHMARK_DATA = {
  "lastUpdate": 1723471381444,
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
        "date": 1723415356414,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001780901,
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
            "value": 70.0595733221095,
            "unit": "%",
            "range": 0.20936358944817862,
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
            "value": 6005.7147014920265,
            "unit": "Ticks",
            "range": 93.33545702974209,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6005.7147014920265,
            "unit": "Ticks",
            "range": 93.33545702974209,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1821.1246702768253,
            "unit": "Ticks",
            "range": 10.232670710321345,
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
            "value": 69.28000000000002,
            "unit": "ns",
            "range": 14.00434218376572,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 112.94000000000001,
            "unit": "ns",
            "range": 13.928976990432572,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18628.62388773852,
            "unit": "Mbit/s",
            "range": 1242.3966968412265,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 835584,
            "unit": "ns",
            "range": 29308.590194685243,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1569587.2,
            "unit": "ns",
            "range": 843443.4824414497,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 390.22014889232616,
            "unit": "Mbit/s",
            "range": 18.91713123587374,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 62259.2,
            "unit": "ns",
            "range": 14150.479601766156,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 286310.39999999997,
            "unit": "ns",
            "range": 154915.46357623566,
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
        "date": 1723416653864,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001767912,
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
            "value": 69.99934948644099,
            "unit": "%",
            "range": 0.24347481636135265,
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
            "value": 6117.166992765389,
            "unit": "Ticks",
            "range": 97.18175554196219,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6117.166992765389,
            "unit": "Ticks",
            "range": 97.18175554196219,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1845.0253582769055,
            "unit": "Ticks",
            "range": 11.356455280821558,
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
            "value": 72.44000000000001,
            "unit": "ns",
            "range": 15.409295895659868,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 109.73999999999998,
            "unit": "ns",
            "range": 10.954104253657624,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 19398.555172123055,
            "unit": "Mbit/s",
            "range": 370.37181857949804,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 842137.6000000001,
            "unit": "ns",
            "range": 24521.3258499617,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1497497.6,
            "unit": "ns",
            "range": 603109.260663638,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 449.4966224491694,
            "unit": "Mbit/s",
            "range": 146.58555213937956,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 57753.6,
            "unit": "ns",
            "range": 15470.196709803015,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 267059.2,
            "unit": "ns",
            "range": 85738.58502774582,
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
        "date": 1723417952163,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.00171988,
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
            "value": 69.99643934941514,
            "unit": "%",
            "range": 0.2304046770138456,
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
            "value": 6071.126358705655,
            "unit": "Ticks",
            "range": 113.67018612899939,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6071.126358705655,
            "unit": "Ticks",
            "range": 113.67018612899939,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1868.2347826159291,
            "unit": "Ticks",
            "range": 12.05123110232801,
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
            "value": 72.41999999999997,
            "unit": "ns",
            "range": 16.82746564399999,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 110.72000000000003,
            "unit": "ns",
            "range": 14.542406953458565,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18841.650072470755,
            "unit": "Mbit/s",
            "range": 321.48206337565694,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 855244.8,
            "unit": "ns",
            "range": 16052.975978303835,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1002700.8,
            "unit": "ns",
            "range": 125805.22439771729,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 384.8951199429938,
            "unit": "Mbit/s",
            "range": 15.712838228521635,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 55910.4,
            "unit": "ns",
            "range": 13026.954357792154,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 138854.4,
            "unit": "ns",
            "range": 35173.17028418109,
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
        "date": 1723419137577,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001832622,
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
            "value": 70.03775907239523,
            "unit": "%",
            "range": 0.2524052512239476,
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
            "value": 5995.002285760075,
            "unit": "Ticks",
            "range": 87.15676038257472,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 5995.002285760075,
            "unit": "Ticks",
            "range": 87.15676038257472,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1830.942671794174,
            "unit": "Ticks",
            "range": 17.26761865100057,
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
            "value": 67.91999999999999,
            "unit": "ns",
            "range": 13.708158154909068,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 109.54000000000002,
            "unit": "ns",
            "range": 11.424902625405611,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18670.57638990581,
            "unit": "Mbit/s",
            "range": 628.9462615124422,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 855244.8,
            "unit": "ns",
            "range": 33416.93428428167,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1363148.8,
            "unit": "ns",
            "range": 626494.6818169807,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 454.3369282826284,
            "unit": "Mbit/s",
            "range": 150.08454617382242,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 43417.6,
            "unit": "ns",
            "range": 12109.205912858199,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 217088,
            "unit": "ns",
            "range": 115235.26571323555,
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
        "date": 1723420339362,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001702531,
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
            "value": 70.01839125205636,
            "unit": "%",
            "range": 0.20646231077119628,
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
            "value": 6093.204399594694,
            "unit": "Ticks",
            "range": 111.7361007925433,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6093.204399594694,
            "unit": "Ticks",
            "range": 111.7361007925433,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1841.330229770571,
            "unit": "Ticks",
            "range": 14.36459957559429,
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
            "value": 67.46,
            "unit": "ns",
            "range": 12.351858159807374,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 113.77999999999999,
            "unit": "ns",
            "range": 12.538405002232142,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18977.201559840327,
            "unit": "Mbit/s",
            "range": 449.37806319893735,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 861798.4,
            "unit": "ns",
            "range": 32105.951956607674,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1628569.5999999999,
            "unit": "ns",
            "range": 813583.9752742429,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 450.6634616856084,
            "unit": "Mbit/s",
            "range": 152.5148166484061,
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
            "value": 317849.6,
            "unit": "ns",
            "range": 106451.88009161697,
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
        "date": 1723421540575,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001800841,
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
            "value": 70.06658671703832,
            "unit": "%",
            "range": 0.24387889837592253,
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
            "value": 6063.199247298093,
            "unit": "Ticks",
            "range": 105.00814679834812,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6063.199247298093,
            "unit": "Ticks",
            "range": 105.00814679834812,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1839.8457368778327,
            "unit": "Ticks",
            "range": 18.726420742944978,
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
            "value": 73.36,
            "unit": "ns",
            "range": 15.359374987283825,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 112.32000000000002,
            "unit": "ns",
            "range": 13.142967701398339,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18481.783214388826,
            "unit": "Mbit/s",
            "range": 531.4862437625075,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 861798.4,
            "unit": "ns",
            "range": 13107.199999999999,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1336934.4,
            "unit": "ns",
            "range": 806891.6237021177,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 433.3097382012952,
            "unit": "Mbit/s",
            "range": 106.3644147230021,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 70246.40000000001,
            "unit": "ns",
            "range": 3864.158671690385,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 176128,
            "unit": "ns",
            "range": 25905.378592099365,
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
        "date": 1723422722395,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.00181848,
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
            "value": 70.04013534469895,
            "unit": "%",
            "range": 0.25053482486317796,
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
            "value": 6058.120590588988,
            "unit": "Ticks",
            "range": 112.40297396109797,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6058.120590588988,
            "unit": "Ticks",
            "range": 112.40297396109797,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1838.6249354829554,
            "unit": "Ticks",
            "range": 16.54316110248067,
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
            "value": 67.30000000000001,
            "unit": "ns",
            "range": 13.6106575888162,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 108.74000000000001,
            "unit": "ns",
            "range": 11.267315563167651,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18800.989805163445,
            "unit": "Mbit/s",
            "range": 236.1596281738758,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 861798.4,
            "unit": "ns",
            "range": 13107.199999999999,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 920780.8,
            "unit": "ns",
            "range": 67473.4416919724,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 486.29853402751564,
            "unit": "Mbit/s",
            "range": 145.04966434490723,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 62464,
            "unit": "ns",
            "range": 14452.554763777925,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 240844.80000000002,
            "unit": "ns",
            "range": 105432.02659989042,
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
        "date": 1723423899541,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.002120213,
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
            "value": 70.08709700813176,
            "unit": "%",
            "range": 0.2120399765726223,
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
            "value": 6005.78989194898,
            "unit": "Ticks",
            "range": 101.83424504568707,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6005.78989194898,
            "unit": "Ticks",
            "range": 101.83424504568707,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1834.515730038063,
            "unit": "Ticks",
            "range": 10.501763310689112,
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
            "value": 68.91999999999999,
            "unit": "ns",
            "range": 15.074269468203092,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 109.06,
            "unit": "ns",
            "range": 14.652521967224617,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18890.607188239843,
            "unit": "Mbit/s",
            "range": 495.81118905739845,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 861798.4,
            "unit": "ns",
            "range": 32105.95195660767,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1422131.2,
            "unit": "ns",
            "range": 783518.442956999,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 620.3061067677204,
            "unit": "Mbit/s",
            "range": 171.7376719133115,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 54272,
            "unit": "ns",
            "range": 15091.41170334969,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 497664,
            "unit": "ns",
            "range": 529839.4095240557,
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
        "date": 1723425093480,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001749971,
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
            "value": 70.03817676713103,
            "unit": "%",
            "range": 0.24018967025166232,
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
            "value": 6083.448024561474,
            "unit": "Ticks",
            "range": 108.03562432459496,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6083.448024561474,
            "unit": "Ticks",
            "range": 108.03562432459496,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1866.7419652481474,
            "unit": "Ticks",
            "range": 43.439641682334766,
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
            "value": 69.24,
            "unit": "ns",
            "range": 15.33304927273111,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 109.92,
            "unit": "ns",
            "range": 12.716666229794662,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18525.165256897548,
            "unit": "Mbit/s",
            "range": 776.1049884156557,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 848691.2000000001,
            "unit": "ns",
            "range": 16052.975978303835,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 969932.7999999999,
            "unit": "ns",
            "range": 89379.1875693665,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 478.9571642353915,
            "unit": "Mbit/s",
            "range": 116.58164388877124,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 65126.399999999994,
            "unit": "ns",
            "range": 16263.23492543842,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 308838.4,
            "unit": "ns",
            "range": 151554.21403788152,
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
        "date": 1723426299430,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001821623,
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
            "value": 69.96299260890882,
            "unit": "%",
            "range": 0.25970476067344617,
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
            "value": 6038.683620103238,
            "unit": "Ticks",
            "range": 108.09837896829394,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6038.683620103238,
            "unit": "Ticks",
            "range": 108.09837896829394,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1853.3083302543084,
            "unit": "Ticks",
            "range": 21.259708896723634,
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
            "value": 76.09999999999998,
            "unit": "ns",
            "range": 14.546820958546236,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 111.42000000000002,
            "unit": "ns",
            "range": 16.256801653461853,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18588.90948700508,
            "unit": "Mbit/s",
            "range": 454.8183842002777,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 842137.6000000001,
            "unit": "ns",
            "range": 13107.2,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1464729.5999999999,
            "unit": "ns",
            "range": 753920.4016026094,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 564.9052448245848,
            "unit": "Mbit/s",
            "range": 164.9999680453323,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 63283.2,
            "unit": "ns",
            "range": 12829.048638149283,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 217907.19999999998,
            "unit": "ns",
            "range": 43068.422317981414,
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
        "date": 1723427509767,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001843885,
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
            "value": 69.96481720143021,
            "unit": "%",
            "range": 0.2701744931580341,
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
            "value": 6068.900094411777,
            "unit": "Ticks",
            "range": 106.7532744492135,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6068.900094411777,
            "unit": "Ticks",
            "range": 106.7532744492135,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1819.7285029041946,
            "unit": "Ticks",
            "range": 15.215745822702244,
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
            "value": 69.80000000000001,
            "unit": "ns",
            "range": 15.238110119040353,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 115.46000000000002,
            "unit": "ns",
            "range": 15.061487310355513,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 19215.84739251182,
            "unit": "Mbit/s",
            "range": 175.85098592647358,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 861798.3999999999,
            "unit": "ns",
            "range": 13107.2,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1307443.2,
            "unit": "ns",
            "range": 641399.5965444319,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 415.8033055248202,
            "unit": "Mbit/s",
            "range": 57.798738360961046,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 58163.2,
            "unit": "ns",
            "range": 16554.63147762583,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 228147.2,
            "unit": "ns",
            "range": 104761.55601440826,
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
        "date": 1723428709557,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.00181393,
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
            "value": 70.06936267109695,
            "unit": "%",
            "range": 0.2563606533444457,
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
            "value": 6068.625527514612,
            "unit": "Ticks",
            "range": 118.60428231531216,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6068.625527514612,
            "unit": "Ticks",
            "range": 118.60428231531216,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1824.8857412721325,
            "unit": "Ticks",
            "range": 20.189175160838108,
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
            "value": 67.67999999999998,
            "unit": "ns",
            "range": 14.163954250137916,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 114.14000000000004,
            "unit": "ns",
            "range": 10.550848307126778,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18519.377820295245,
            "unit": "Mbit/s",
            "range": 744.4568820583667,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 829030.3999999999,
            "unit": "ns",
            "range": 24521.3258499617,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1022361.6,
            "unit": "ns",
            "range": 203478.46257881937,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 385.50469427780854,
            "unit": "Mbit/s",
            "range": 10.507017078716787,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 61849.59999999999,
            "unit": "ns",
            "range": 12195.491783441945,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 251494.40000000002,
            "unit": "ns",
            "range": 98868.98973004629,
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
        "date": 1723429908792,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001708772,
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
            "value": 70.05488809446527,
            "unit": "%",
            "range": 0.22197277000822727,
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
            "value": 5990.51305897885,
            "unit": "Ticks",
            "range": 101.6356400007145,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 5990.51305897885,
            "unit": "Ticks",
            "range": 101.6356400007145,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1807.6353552748392,
            "unit": "Ticks",
            "range": 48.52842250253873,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 25.979999999999983,
            "unit": "ns",
            "range": 0.14000000000000007,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 71.32000000000001,
            "unit": "ns",
            "range": 15.514431990891579,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 111.49999999999996,
            "unit": "ns",
            "range": 10.425449630591478,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18712.07100023601,
            "unit": "Mbit/s",
            "range": 455.558951009769,
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
            "value": 1746534.4,
            "unit": "ns",
            "range": 830499.1258662709,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 377.84352131705987,
            "unit": "Mbit/s",
            "range": 8.525001211271732,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 56115.2,
            "unit": "ns",
            "range": 15802.811780186461,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 229785.59999999998,
            "unit": "ns",
            "range": 103251.70281908187,
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
        "date": 1723431097108,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001835989,
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
            "value": 70.0253281600629,
            "unit": "%",
            "range": 0.27202169622823164,
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
            "value": 6055.466572724544,
            "unit": "Ticks",
            "range": 105.28058441265577,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6055.466572724544,
            "unit": "Ticks",
            "range": 105.28058441265577,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1799.758133220685,
            "unit": "Ticks",
            "range": 13.460032743827531,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 25.979999999999983,
            "unit": "ns",
            "range": 0.14000000000000007,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 67.80000000000001,
            "unit": "ns",
            "range": 16.32421514192949,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 110.86000000000004,
            "unit": "ns",
            "range": 11.67049270596576,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 19166.492044920557,
            "unit": "Mbit/s",
            "range": 486.5886395877696,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 868352,
            "unit": "ns",
            "range": 20724.30287367949,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1268121.5999999999,
            "unit": "ns",
            "range": 514634.9757914244,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 478.3033134284237,
            "unit": "Mbit/s",
            "range": 153.4506458697248,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 47103.99999999999,
            "unit": "ns",
            "range": 12657.899225384914,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 314572.8,
            "unit": "ns",
            "range": 127789.94861005305,
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
        "date": 1723432284827,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001801941,
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
            "value": 69.99887488691476,
            "unit": "%",
            "range": 0.19422753461435988,
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
            "value": 6094.567356699201,
            "unit": "Ticks",
            "range": 102.60244661290787,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6094.567356699201,
            "unit": "Ticks",
            "range": 102.60244661290787,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1814.977559363337,
            "unit": "Ticks",
            "range": 25.420067272050407,
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
            "value": 64.17999999999998,
            "unit": "ns",
            "range": 13.948032119263274,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 111.83999999999996,
            "unit": "ns",
            "range": 9.596582725116267,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 17723.23481205782,
            "unit": "Mbit/s",
            "range": 1849.766105493534,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 855244.8,
            "unit": "ns",
            "range": 16052.975978303835,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1372979.2,
            "unit": "ns",
            "range": 685423.2252214394,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 462.59802833469786,
            "unit": "Mbit/s",
            "range": 166.752307681504,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 43827.2,
            "unit": "ns",
            "range": 13956.485150638751,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 359628.8,
            "unit": "ns",
            "range": 84198.45837638596,
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
        "date": 1723433482122,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.002009696,
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
            "value": 70.05092242972842,
            "unit": "%",
            "range": 0.267323936986768,
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
            "value": 6106.39157123653,
            "unit": "Ticks",
            "range": 98.61849910000747,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6106.39157123653,
            "unit": "Ticks",
            "range": 98.61849910000747,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1819.2968692502154,
            "unit": "Ticks",
            "range": 16.35601896558357,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 25.979999999999983,
            "unit": "ns",
            "range": 0.14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 68.84000000000002,
            "unit": "ns",
            "range": 14.967110609599972,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 112.75999999999996,
            "unit": "ns",
            "range": 11.064465644575884,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18691.12936759006,
            "unit": "Mbit/s",
            "range": 801.4009345823546,
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
            "value": 950272,
            "unit": "ns",
            "range": 89138.5971260486,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 395.2746984512828,
            "unit": "Mbit/s",
            "range": 25.981789435030734,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 54272,
            "unit": "ns",
            "range": 14292.046907283786,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 246169.59999999998,
            "unit": "ns",
            "range": 125610.36985472178,
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
        "date": 1723435678980,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001717592,
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
            "value": 70.036395138912,
            "unit": "%",
            "range": 0.23663871078275064,
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
            "value": 5979.951297360513,
            "unit": "Ticks",
            "range": 52.219047422015116,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 5979.951297360513,
            "unit": "Ticks",
            "range": 52.219047422015116,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1817.3533999593285,
            "unit": "Ticks",
            "range": 10.819943514064866,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 25.990000000000048,
            "unit": "ns",
            "range": 0.0994987437106618,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 69.13000000000001,
            "unit": "ns",
            "range": 14.739508132905927,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 108.40999999999998,
            "unit": "ns",
            "range": 11.040919345779137,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18777.20946705859,
            "unit": "Mbit/s",
            "range": 560.3905547006951,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 835584,
            "unit": "ns",
            "range": 25381.98365770493,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1446707.1999999997,
            "unit": "ns",
            "range": 822047.5054940316,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 393.3357516337382,
            "unit": "Mbit/s",
            "range": 28.29413858950815,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 65126.40000000001,
            "unit": "ns",
            "range": 15327.196972701824,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 258457.59999999998,
            "unit": "ns",
            "range": 82113.30792411178,
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
        "date": 1723437905314,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001665852,
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
            "value": 70.0193145535835,
            "unit": "%",
            "range": 0.22123823576275164,
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
            "value": 6096.2039627948325,
            "unit": "Ticks",
            "range": 109.40650176993546,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6096.2039627948325,
            "unit": "Ticks",
            "range": 109.40650176993546,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1772.8414547136383,
            "unit": "Ticks",
            "range": 13.12870271111056,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.00000000000005,
            "unit": "ns",
            "range": 4.973799150320701e-14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 69.84000000000003,
            "unit": "ns",
            "range": 15.33213618515046,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 112.77000000000001,
            "unit": "ns",
            "range": 11.090405763541746,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 19139.86521364107,
            "unit": "Mbit/s",
            "range": 420.14311526107645,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 842137.6,
            "unit": "ns",
            "range": 19660.8,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 922419.2,
            "unit": "ns",
            "range": 89753.8190527846,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 393.4855286778012,
            "unit": "Mbit/s",
            "range": 18.91939894933492,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 64921.59999999999,
            "unit": "ns",
            "range": 15044.08999707194,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 244940.8,
            "unit": "ns",
            "range": 83939.0232928642,
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
        "date": 1723440189543,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001919783,
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
            "value": 69.9838362081733,
            "unit": "%",
            "range": 0.24395277950181601,
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
            "value": 6038.700753112349,
            "unit": "Ticks",
            "range": 112.35903105693076,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6038.700753112349,
            "unit": "Ticks",
            "range": 112.35903105693076,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1778.655607322619,
            "unit": "Ticks",
            "range": 19.04735595640518,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.00000000000005,
            "unit": "ns",
            "range": 4.973799150320701e-14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 74.73,
            "unit": "ns",
            "range": 15.23670239914136,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 110.96999999999998,
            "unit": "ns",
            "range": 9.159099300695457,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 19280.13805752859,
            "unit": "Mbit/s",
            "range": 785.7875354998167,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 832307.2,
            "unit": "ns",
            "range": 22937.6,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1268121.6,
            "unit": "ns",
            "range": 785824.1917888758,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 450.4509274993,
            "unit": "Mbit/s",
            "range": 132.62691051938478,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 49152,
            "unit": "ns",
            "range": 15962.580242554774,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 320512,
            "unit": "ns",
            "range": 116348.21203954962,
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
        "date": 1723442415290,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001727282,
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
            "value": 70.00141114234263,
            "unit": "%",
            "range": 0.23406379327480206,
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
            "value": 6069.257817171339,
            "unit": "Ticks",
            "range": 107.13078853682579,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6069.257817171339,
            "unit": "Ticks",
            "range": 107.13078853682579,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1777.8225250706673,
            "unit": "Ticks",
            "range": 40.21752172702734,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.00000000000005,
            "unit": "ns",
            "range": 4.973799150320701e-14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 70.71999999999998,
            "unit": "ns",
            "range": 15.579525024852325,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 111.99999999999997,
            "unit": "ns",
            "range": 10.81572928655299,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18967.91167230424,
            "unit": "Mbit/s",
            "range": 936.120367237935,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 806092.8,
            "unit": "ns",
            "range": 17646.108040018342,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1464729.6,
            "unit": "ns",
            "range": 1271955.6716844498,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 508.3279172400586,
            "unit": "Mbit/s",
            "range": 160.95174235394254,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 53145.600000000006,
            "unit": "ns",
            "range": 17088.532126546153,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 309862.4000000001,
            "unit": "ns",
            "range": 115809.10332715645,
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
        "date": 1723444648714,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.00185405,
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
            "value": 70.01177749266093,
            "unit": "%",
            "range": 0.24496134070668207,
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
            "value": 6003.627986385747,
            "unit": "Ticks",
            "range": 103.17531828966341,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6003.627986385747,
            "unit": "Ticks",
            "range": 103.17531828966341,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1781.6699258684862,
            "unit": "Ticks",
            "range": 20.559741021009362,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.00000000000005,
            "unit": "ns",
            "range": 4.973799150320701e-14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 70.72000000000001,
            "unit": "ns",
            "range": 15.295149557948104,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 114.10999999999996,
            "unit": "ns",
            "range": 10.193031933629952,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18881.04886575338,
            "unit": "Mbit/s",
            "range": 659.4973710064797,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 835584.0000000001,
            "unit": "ns",
            "range": 1.1641532182693481e-10,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1425408,
            "unit": "ns",
            "range": 874543.4816149509,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 460.72292306471644,
            "unit": "Mbit/s",
            "range": 161.78605763113845,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 59084.8,
            "unit": "ns",
            "range": 16397.114751077395,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 212172.80000000002,
            "unit": "ns",
            "range": 90946.8815307045,
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
        "date": 1723446887521,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001679041,
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
            "value": 69.95253293742644,
            "unit": "%",
            "range": 0.23706664443557715,
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
            "value": 6076.302322877612,
            "unit": "Ticks",
            "range": 98.6814423498083,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6076.302322877612,
            "unit": "Ticks",
            "range": 98.6814423498083,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1796.4842343439607,
            "unit": "Ticks",
            "range": 32.60992780960698,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.00000000000005,
            "unit": "ns",
            "range": 4.973799150320701e-14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 70.89999999999998,
            "unit": "ns",
            "range": 15.566952174398173,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 112.21,
            "unit": "ns",
            "range": 10.989353939154016,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 19060.23534595871,
            "unit": "Mbit/s",
            "range": 795.2522330757805,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 842137.6,
            "unit": "ns",
            "range": 65207.49667821944,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1784217.6,
            "unit": "ns",
            "range": 935509.1837295025,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 476.9740424977017,
            "unit": "Mbit/s",
            "range": 160.79488416681426,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 58214.4,
            "unit": "ns",
            "range": 16031.487736326906,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 223436.8,
            "unit": "ns",
            "range": 100266.07259965855,
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
        "date": 1723449110512,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001749226,
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
            "value": 70.02003576741244,
            "unit": "%",
            "range": 0.21480620895448674,
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
            "value": 6038.748713818795,
            "unit": "Ticks",
            "range": 104.34307055702828,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6038.748713818795,
            "unit": "Ticks",
            "range": 104.34307055702828,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1798.5782478664394,
            "unit": "Ticks",
            "range": 74.38671276598734,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 25.990000000000048,
            "unit": "ns",
            "range": 0.09949874371066189,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 72.41999999999999,
            "unit": "ns",
            "range": 14.44242361932373,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 110.98,
            "unit": "ns",
            "range": 11.471686885545646,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 19031.127464864036,
            "unit": "Mbit/s",
            "range": 707.7381360236366,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 835584,
            "unit": "ns",
            "range": 25381.98365770493,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 932249.5999999999,
            "unit": "ns",
            "range": 102173.65063381067,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 468.2283389660841,
            "unit": "Mbit/s",
            "range": 155.5856982956716,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 57344.00000000001,
            "unit": "ns",
            "range": 16875.818249791624,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 331776,
            "unit": "ns",
            "range": 111978.97676974906,
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
        "date": 1723451339986,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001728275,
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
            "value": 69.98685746864534,
            "unit": "%",
            "range": 0.21991696846124048,
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
            "value": 6095.021097930397,
            "unit": "Ticks",
            "range": 111.12711617112207,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6095.021097930397,
            "unit": "Ticks",
            "range": 111.12711617112207,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1776.5591557732541,
            "unit": "Ticks",
            "range": 14.235194213180046,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 25.990000000000048,
            "unit": "ns",
            "range": 0.09949874371066184,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 73.12,
            "unit": "ns",
            "range": 15.158680681378572,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 111.35000000000001,
            "unit": "ns",
            "range": 10.209187039132942,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 19072.509692760934,
            "unit": "Mbit/s",
            "range": 647.7819730289585,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 822476.7999999999,
            "unit": "ns",
            "range": 26214.4,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1051852.8,
            "unit": "ns",
            "range": 421282.3116260164,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 497.5521927380163,
            "unit": "Mbit/s",
            "range": 173.4661186295176,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 61030.4,
            "unit": "ns",
            "range": 16029.443628523104,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 254361.59999999998,
            "unit": "ns",
            "range": 107178.31881047584,
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
        "date": 1723453565313,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001838282,
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
            "value": 70.0045076769485,
            "unit": "%",
            "range": 0.20400480332542023,
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
            "value": 6026.809292686438,
            "unit": "Ticks",
            "range": 108.98786092314738,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6026.809292686438,
            "unit": "Ticks",
            "range": 108.98786092314738,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1785.7341594456043,
            "unit": "Ticks",
            "range": 12.659634291428999,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.00000000000005,
            "unit": "ns",
            "range": 4.973799150320701e-14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 72.23,
            "unit": "ns",
            "range": 15.201878173436333,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 111.53000000000002,
            "unit": "ns",
            "range": 10.082117833074555,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18757.738271368937,
            "unit": "Mbit/s",
            "range": 441.8317128538887,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 832307.1999999998,
            "unit": "ns",
            "range": 22937.6,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1096089.5999999999,
            "unit": "ns",
            "range": 578726.3896666886,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 526.9539072639506,
            "unit": "Mbit/s",
            "range": 171.72975897355573,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 55091.2,
            "unit": "ns",
            "range": 14929.344076683343,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 392601.60000000003,
            "unit": "ns",
            "range": 416807.0460333414,
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
        "date": 1723455786463,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001695069,
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
            "value": 69.99419032958046,
            "unit": "%",
            "range": 0.24774316523476023,
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
            "value": 6036.494262486377,
            "unit": "Ticks",
            "range": 118.4971095297076,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6036.494262486377,
            "unit": "Ticks",
            "range": 118.4971095297076,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1788.2586523170385,
            "unit": "Ticks",
            "range": 12.285671274485777,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.00000000000005,
            "unit": "ns",
            "range": 4.973799150320701e-14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 70.51000000000002,
            "unit": "ns",
            "range": 16.233604036072826,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 110.93999999999997,
            "unit": "ns",
            "range": 10.613971923836996,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 19088.484823508043,
            "unit": "Mbit/s",
            "range": 933.6389873321193,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 806092.7999999999,
            "unit": "ns",
            "range": 9830.4,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1173094.4,
            "unit": "ns",
            "range": 638900.3770634667,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 512.0292467325532,
            "unit": "Mbit/s",
            "range": 153.91109069994712,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 58265.600000000006,
            "unit": "ns",
            "range": 14686.102186761469,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 227328,
            "unit": "ns",
            "range": 112330.51301227107,
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
        "date": 1723458022116,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001825106,
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
            "value": 69.96729067708603,
            "unit": "%",
            "range": 0.26340356450440117,
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
            "value": 6081.253686354586,
            "unit": "Ticks",
            "range": 122.5390388873491,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6081.253686354586,
            "unit": "Ticks",
            "range": 122.5390388873491,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1787.944716582238,
            "unit": "Ticks",
            "range": 16.961338863097396,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.00000000000005,
            "unit": "ns",
            "range": 4.973799150320701e-14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 70.69000000000001,
            "unit": "ns",
            "range": 15.209664690584075,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 113.67,
            "unit": "ns",
            "range": 9.1542940743675,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 19134.950568082673,
            "unit": "Mbit/s",
            "range": 921.0586999774528,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 835584.0000000001,
            "unit": "ns",
            "range": 1.1641532182693481e-10,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1084620.7999999998,
            "unit": "ns",
            "range": 419238.35603455943,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 482.17801249874765,
            "unit": "Mbit/s",
            "range": 158.96414430633473,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 57753.6,
            "unit": "ns",
            "range": 10594.3180545045,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 271974.4,
            "unit": "ns",
            "range": 382957.1623174582,
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
        "date": 1723460245895,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001785979,
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
            "value": 70.04365466994082,
            "unit": "%",
            "range": 0.24041363280136865,
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
            "value": 6059.071631164606,
            "unit": "Ticks",
            "range": 150.40238913329262,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6059.071631164606,
            "unit": "Ticks",
            "range": 150.40238913329262,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1891.1529700069016,
            "unit": "Ticks",
            "range": 269.6036254436892,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.00000000000005,
            "unit": "ns",
            "range": 4.973799150320701e-14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 70.12000000000002,
            "unit": "ns",
            "range": 15.115740140661323,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 110.72000000000004,
            "unit": "ns",
            "range": 10.918864409818449,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18946.746158751273,
            "unit": "Mbit/s",
            "range": 719.5490614646641,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 835584,
            "unit": "ns",
            "range": 20724.30287367949,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 992870.4,
            "unit": "ns",
            "range": 114030.75676605852,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 470.3174237931702,
            "unit": "Mbit/s",
            "range": 149.6431629202434,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 54783.99999999999,
            "unit": "ns",
            "range": 14613.093526012895,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 287744,
            "unit": "ns",
            "range": 114487.59633776928,
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
        "date": 1723462486944,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001783969,
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
            "value": 70.00332644662149,
            "unit": "%",
            "range": 0.2141111820691492,
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
            "value": 5965.83126679823,
            "unit": "Ticks",
            "range": 72.69028196107195,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 5965.83126679823,
            "unit": "Ticks",
            "range": 72.69028196107195,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1807.3085075588247,
            "unit": "Ticks",
            "range": 10.010279533162782,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.00000000000005,
            "unit": "ns",
            "range": 4.973799150320701e-14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 69.2,
            "unit": "ns",
            "range": 15.264992630198025,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 113.19,
            "unit": "ns",
            "range": 11.591112975033932,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 19460.814288474096,
            "unit": "Mbit/s",
            "range": 676.0608304292784,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 815923.2000000001,
            "unit": "ns",
            "range": 21735.83222607315,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1143603.2,
            "unit": "ns",
            "range": 371074.99445497536,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 490.4614776707604,
            "unit": "Mbit/s",
            "range": 137.58214819001017,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 60313.6,
            "unit": "ns",
            "range": 12545.149335101594,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 174080,
            "unit": "ns",
            "range": 73631.22537619484,
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
        "date": 1723464706510,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001831263,
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
            "value": 69.99168282154692,
            "unit": "%",
            "range": 0.24588724085151262,
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
            "value": 6039.9172851957055,
            "unit": "Ticks",
            "range": 115.82895921018051,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6039.9172851957055,
            "unit": "Ticks",
            "range": 115.82895921018051,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1807.0917277200695,
            "unit": "Ticks",
            "range": 13.086371623450558,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.00000000000005,
            "unit": "ns",
            "range": 4.973799150320701e-14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 68.27999999999999,
            "unit": "ns",
            "range": 14.781123096706821,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 112.59,
            "unit": "ns",
            "range": 9.7868227735052,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18878.271201183703,
            "unit": "Mbit/s",
            "range": 528.6447114666065,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 838860.7999999999,
            "unit": "ns",
            "range": 22937.600000000002,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1441792,
            "unit": "ns",
            "range": 742395.9039887006,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 410.3490460094984,
            "unit": "Mbit/s",
            "range": 40.58048011251531,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 58572.8,
            "unit": "ns",
            "range": 15159.350782932624,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 240230.40000000002,
            "unit": "ns",
            "range": 124113.02435054912,
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
        "date": 1723466915523,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001903506,
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
            "value": 69.97938273045762,
            "unit": "%",
            "range": 0.21014123881981625,
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
            "value": 5972.081556774133,
            "unit": "Ticks",
            "range": 53.57814166961573,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 5972.081556774133,
            "unit": "Ticks",
            "range": 53.57814166961573,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1800.20156109046,
            "unit": "Ticks",
            "range": 12.741643110679153,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.00000000000005,
            "unit": "ns",
            "range": 4.973799150320701e-14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 70.27000000000001,
            "unit": "ns",
            "range": 15.028542843536094,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 110.10999999999994,
            "unit": "ns",
            "range": 9.265953809511462,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 19118.585987866987,
            "unit": "Mbit/s",
            "range": 517.7500801434393,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 838860.7999999999,
            "unit": "ns",
            "range": 22937.600000000002,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1490944,
            "unit": "ns",
            "range": 873376.3173853524,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 468.255576549143,
            "unit": "Mbit/s",
            "range": 158.23554140582485,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 57548.8,
            "unit": "ns",
            "range": 12975.336703145704,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 202547.19999999998,
            "unit": "ns",
            "range": 47312.34618743822,
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
        "date": 1723469162774,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.001789153,
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
            "value": 70.00638164937286,
            "unit": "%",
            "range": 0.18984050680988476,
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
            "value": 6031.9573557734075,
            "unit": "Ticks",
            "range": 97.98771458953557,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6031.9573557734075,
            "unit": "Ticks",
            "range": 97.98771458953557,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1815.4075256803892,
            "unit": "Ticks",
            "range": 11.156692708427865,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.00000000000005,
            "unit": "ns",
            "range": 4.973799150320701e-14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 72.75999999999999,
            "unit": "ns",
            "range": 14.408414208371436,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 113.20999999999998,
            "unit": "ns",
            "range": 9.092078970180584,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18537.61174488745,
            "unit": "Mbit/s",
            "range": 607.9586837656104,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 851968,
            "unit": "ns",
            "range": 21981.442646013933,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1040384.0000000001,
            "unit": "ns",
            "range": 376136.819634558,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 505.94715695298237,
            "unit": "Mbit/s",
            "range": 168.03449955464643,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 61337.6,
            "unit": "ns",
            "range": 13588.36810805477,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 388505.6,
            "unit": "ns",
            "range": 482596.8055566054,
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
        "date": 1723471380626,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 0.002193475,
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
            "value": 70.01102819005936,
            "unit": "%",
            "range": 0.25061360274444927,
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
            "value": 6071.6450381258455,
            "unit": "Ticks",
            "range": 115.34291661645932,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 6071.6450381258455,
            "unit": "Ticks",
            "range": 115.34291661645932,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1831.3583980741375,
            "unit": "Ticks",
            "range": 111.80798041725092,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.00000000000005,
            "unit": "ns",
            "range": 4.973799150320701e-14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 69.18000000000002,
            "unit": "ns",
            "range": 14.656998328443652,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "4 Threads",
            "value": 111.52999999999997,
            "unit": "ns",
            "range": 10.53323786876571,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "TCP client",
            "value": 18839.73605341754,
            "unit": "Mbit/s",
            "range": 653.8558532793949,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 850329.6,
            "unit": "ns",
            "range": 79744.81771651372,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 1114112,
            "unit": "ns",
            "range": 447676.12338564586,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP client",
            "value": 462.9316107669642,
            "unit": "Mbit/s",
            "range": 103.84767093478486,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 54937.600000000006,
            "unit": "ns",
            "range": 16697.873512516497,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 215654.40000000002,
            "unit": "ns",
            "range": 107104.91764172175,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      }
    ]
  }
}