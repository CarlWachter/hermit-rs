window.BENCHMARK_DATA = {
  "lastUpdate": 1722611389811,
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
          "id": "742526984ee0094b0626ad6afddb17b11bc9caff",
          "message": "Merge pull request #1263 from hermit-os/release-0.8.0\n\nchore: release version 0.8.0",
          "timestamp": "2024-06-07T14:29:11Z",
          "url": "https://github.com/hermit-os/kernel/commit/742526984ee0094b0626ad6afddb17b11bc9caff"
        },
        "date": 1722611388320,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 165.602379801,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "Sleep-Timing",
            "value": 100,
            "unit": "ms",
            "range": 0,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Sequential",
            "value": 14.26315789473684,
            "unit": "ms",
            "range": 0.2322506037483007,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 8.052631578947368,
            "unit": "ms",
            "range": 0.22398027986976699,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 58684.210526315794,
            "unit": "ns",
            "range": 15.512882631804864,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32454000.000000004,
            "unit": "ns",
            "range": 55.517652905800524,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 20913473.684210524,
            "unit": "ns",
            "range": 92.76791966962222,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15669526.315789474,
            "unit": "ns",
            "range": 121.32146236190331,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.55295168797757,
            "unit": "x",
            "range": 0.22363828927259818,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5660838254,
            "unit": "s",
            "range": 0.02240704539899918,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.60139309432,
            "unit": "s",
            "range": 0.023419221874036958,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.62246415564,
            "unit": "s",
            "range": 0.032825514290439485,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.3199920654296875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.125999450683594,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.132972717285156,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.132957458496094,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 128.0961756842105,
            "unit": "ticks",
            "range": 0.24146219060600652,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.9320055,
            "unit": "ticks",
            "range": 0.2840696125178464,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.87704952631579,
            "unit": "ticks",
            "range": 0.22411088319986866,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 18246.63093321851,
            "unit": "MByte/s",
            "range": 15.389909348537707,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 19183.79506997518,
            "unit": "MByte/s",
            "range": 21.910957356122864,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 8055.738920401153,
            "unit": "MByte/s",
            "range": 5.8717489735195345,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 18246.63093321851,
            "unit": "MByte/s",
            "range": 15.389909348537707,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 19183.79506997518,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 8055.738920401153,
            "unit": "MByte/s",
            "range": 5.8717489735195345,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 15933.358469830979,
            "unit": "MByte/s",
            "range": 11.14979004937813,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 18935.34512459014,
            "unit": "MByte/s",
            "range": 22.14190765801524,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 7904.826965921933,
            "unit": "MByte/s",
            "range": 6.497754298240935,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 15933.358469830979,
            "unit": "MByte/s",
            "range": 11.14979004937813,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 18935.34512459014,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 7904.826965921933,
            "unit": "MByte/s",
            "range": 6.497754298240935,
            "group": "Micro",
            "plot_group": "Memset speed"
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
            "value": 70.02153241610148,
            "unit": "%",
            "range": 0.163289445706671,
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
            "value": 13978.815126419693,
            "unit": "Ticks",
            "range": 4.162698793563594,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13978.815126419693,
            "unit": "Ticks",
            "range": 4.162698793563594,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1145.2195333228779,
            "unit": "Ticks",
            "range": 0.7524800937653991,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.9795918367347,
            "unit": "ns",
            "range": 0.14145273863382307,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 45.755102040816325,
            "unit": "ns",
            "range": 0.6519395914067156,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 100.52563046999258,
            "unit": "%",
            "range": 0.30391403207470524,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.4468833351738,
            "unit": "%",
            "range": 0.28878763563297116,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.52620154975597,
            "unit": "%",
            "range": 0.2649513380706582,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "TCP client",
            "value": 445.10010474809536,
            "unit": "Mbit/s",
            "range": 2.7342058707139594,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 47.1319063833469,
            "unit": "Mbit/s",
            "range": 0.38248357948301603,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 154664960,
            "unit": "ns",
            "range": 1434.693452750453,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 178257920,
            "unit": "ns",
            "range": 1556.1435296541524,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 180355072,
            "unit": "ns",
            "range": 1391.8570707803242,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 188743680,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 92.33365856059712,
            "unit": "Mbit/s",
            "range": 1.2712957405454175,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 88.7706519407517,
            "unit": "Mbit/s",
            "range": 0.8733844375767703,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 294912,
            "unit": "ns",
            "range": 75.33741106406595,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 1216512,
            "unit": "ns",
            "range": 321.10219057701437,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 311296,
            "unit": "ns",
            "range": 43.49878370314513,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 1425408,
            "unit": "ns",
            "range": 369.0719848868624,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      }
    ]
  }
}