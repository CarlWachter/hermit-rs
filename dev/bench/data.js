window.BENCHMARK_DATA = {
  "lastUpdate": 1725026091564,
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
        "date": 1725026089835,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 241.229451172,
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
            "value": 14.199999999999996,
            "unit": "ms",
            "range": 0.39999999999999997,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 8.150000000000002,
            "unit": "ms",
            "range": 0.653834841531101,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 56000,
            "unit": "ns",
            "range": 6670.8320320631665,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32369000,
            "unit": "ns",
            "range": 66920.8487692737,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 19495450,
            "unit": "ns",
            "range": 83477.22743359413,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15585200,
            "unit": "ns",
            "range": 316086.15914019395,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.66036613477788,
            "unit": "x",
            "range": 0.0078002069718542,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5739207160400001,
            "unit": "s",
            "range": 0.022973560697803107,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.59154694432,
            "unit": "s",
            "range": 0.019468094779161685,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.6235418712799999,
            "unit": "s",
            "range": 0.010815022795443035,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.3269195556640625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.133369445800781,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.141365051269531,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.142616271972656,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 127.82750444999998,
            "unit": "ticks",
            "range": 0.1437952146719353,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.50690842499999,
            "unit": "ticks",
            "range": 0.12578883799012922,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.930871749999994,
            "unit": "ticks",
            "range": 0.25742710743526537,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35851.87593531305,
            "unit": "MByte/s",
            "range": 24846.963080497193,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36291.47998816271,
            "unit": "MByte/s",
            "range": 28198.169159899713,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15726.03495269354,
            "unit": "MByte/s",
            "range": 10839.064078786974,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35433.34699018497,
            "unit": "MByte/s",
            "range": 24574.243524089125,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 37220.43495784539,
            "unit": "MByte/s",
            "range": 28768.054009004532,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15761.106214618287,
            "unit": "MByte/s",
            "range": 10863.58409227843,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31344.906912679573,
            "unit": "MByte/s",
            "range": 21373.439892990213,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36376.48876419401,
            "unit": "MByte/s",
            "range": 28202.543904891045,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15709.125131662515,
            "unit": "MByte/s",
            "range": 10831.593883734147,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31410.40236652454,
            "unit": "MByte/s",
            "range": 21415.22475141553,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 37305.29161864243,
            "unit": "MByte/s",
            "range": 28771.581162009843,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15744.835811004225,
            "unit": "MByte/s",
            "range": 10856.60315769811,
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
            "value": 69.95843784395211,
            "unit": "%",
            "range": 0.274286109475038,
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
            "value": 12895.333493523365,
            "unit": "Ticks",
            "range": 656.7564974345721,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 12895.333493523365,
            "unit": "Ticks",
            "range": 656.7564974345721,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1013.5477320020007,
            "unit": "Ticks",
            "range": 143.54126224959833,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.99999999999997,
            "unit": "ns",
            "range": 2.842170943040401e-14,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 41.52,
            "unit": "ns",
            "range": 25.121496770694222,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.90676051877269,
            "unit": "%",
            "range": 1.697711465678488,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.17647537455194,
            "unit": "%",
            "range": 1.2143191027947058,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.05794989699452,
            "unit": "%",
            "range": 1.1705366209715014,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "TCP client",
            "value": 440.93591227037876,
            "unit": "Mbit/s",
            "range": 15.827579731412772,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 108.4966361307502,
            "unit": "Mbit/s",
            "range": 17.709382435328653,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 176999628.8,
            "unit": "ns",
            "range": 16438247.40178313,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 185388236.8,
            "unit": "ns",
            "range": 6710886.399999999,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 103599308.80000001,
            "unit": "ns",
            "range": 1677721.6,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 124990259.2,
            "unit": "ns",
            "range": 27809216.07152074,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 130.548325214297,
            "unit": "Mbit/s",
            "range": 8.244842333167474,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 124.2720348800669,
            "unit": "Mbit/s",
            "range": 2.097201881235796,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 230195.2,
            "unit": "ns",
            "range": 16052.975978303837,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 570163.2,
            "unit": "ns",
            "range": 80365.14836270758,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 199065.59999999998,
            "unit": "ns",
            "range": 12039.731983727876,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 1343488,
            "unit": "ns",
            "range": 679728.7009294223,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      }
    ]
  }
}