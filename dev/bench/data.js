window.BENCHMARK_DATA = {
  "lastUpdate": 1722713530475,
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
          "id": "v0.9.1",
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
          "id": "v0.9.0",
          "message": "Merge pull request #1134 from mkroening/release-0.7.0\n\nchore: release version 0.7.0",
          "timestamp": "2024-04-11T14:49:40Z",
          "url": "https://github.com/hermit-os/kernel/commit/4ce7439440eb19a13a88f65d61ef23debecac6f5"
        },
        "date": 1722618331653,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 162.997210288,
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
            "value": 14.473684210526315,
            "unit": "ms",
            "range": 0.24558718755600542,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 8,
            "unit": "ms",
            "range": 0,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 58526.31578947367,
            "unit": "ns",
            "range": 15.249386916965733,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32487000,
            "unit": "ns",
            "range": 91.2248213107444,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 16858578.94736842,
            "unit": "ns",
            "range": 57.97187240090259,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 13032947.368421054,
            "unit": "ns",
            "range": 37.894974567741784,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.9270913705634336,
            "unit": "x",
            "range": 0.2236135844572409,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5977941775200001,
            "unit": "s",
            "range": 0.024669298771075803,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.5949717409599999,
            "unit": "s",
            "range": 0.03180742268839997,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.6340087017200001,
            "unit": "s",
            "range": 0.02730471420359109,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.598609924316406,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.407798767089844,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.4141845703125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.4139862060546875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 121.94953210526315,
            "unit": "ticks",
            "range": 0.23116596127722866,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 61.434624684210526,
            "unit": "ticks",
            "range": 0.22388406696665666,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 52.59000568421053,
            "unit": "ticks",
            "range": 0.2239960724617942,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 18522.254572368645,
            "unit": "MByte/s",
            "range": 11.47993378313995,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 18656.275447543743,
            "unit": "MByte/s",
            "range": 22.407835943599938,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 7989.551064831299,
            "unit": "MByte/s",
            "range": 10.776950349832873,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 18522.254572368645,
            "unit": "MByte/s",
            "range": 11.47993378313995,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 18656.275447543743,
            "unit": "MByte/s",
            "range": 22.407835943599938,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 7989.551064831299,
            "unit": "MByte/s",
            "range": 10.776950349832873,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 16118.869367534016,
            "unit": "MByte/s",
            "range": 2.9091234045780006,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 18651.864555323,
            "unit": "MByte/s",
            "range": 22.31294266266649,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 7992.729028702471,
            "unit": "MByte/s",
            "range": 10.773961999939043,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 16118.869367534016,
            "unit": "MByte/s",
            "range": 2.9091234045780006,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 18651.864555323,
            "unit": "MByte/s",
            "range": 22.31294266266649,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 7992.729028702471,
            "unit": "MByte/s",
            "range": 10.773961999939043,
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
            "value": 69.97028822275598,
            "unit": "%",
            "range": 0.16108613801661806,
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
            "value": 13769.014197728267,
            "unit": "Ticks",
            "range": 2.9661178951864517,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13769.014197728267,
            "unit": "Ticks",
            "range": 2.9661178951864517,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1134.0187847959248,
            "unit": "Ticks",
            "range": 0.7910385852070967,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 27,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 40.22448979591837,
            "unit": "ns",
            "range": 0.19426545661030556,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 100.32094670505172,
            "unit": "%",
            "range": 0.29779597907561167,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.57316998126497,
            "unit": "%",
            "range": 0.2884769214293901,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.00542116859496,
            "unit": "%",
            "range": 0.26639033775071863,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "TCP client",
            "value": 367.6706402006355,
            "unit": "Mbit/s",
            "range": 2.663561387255531,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 84.39523948396504,
            "unit": "Mbit/s",
            "range": 1.075737822839544,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 157286400,
            "unit": "ns",
            "range": 1205.3836183967474,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 188743680,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 122159104,
            "unit": "ns",
            "range": 1594.5726237659212,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 144179200,
            "unit": "ns",
            "range": 778.0721419762018,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 89.13454465261619,
            "unit": "Mbit/s",
            "range": 0.5268412380835793,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 89.7877050486453,
            "unit": "Mbit/s",
            "range": 0.7012466682893654,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 315392,
            "unit": "ns",
            "range": 30.765178474542445,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 604160,
            "unit": "ns",
            "range": 155.3101173298663,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 294912,
            "unit": "ns",
            "range": 43.49715827673573,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 868352,
            "unit": "ns",
            "range": 123.02408810101655,
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
          "id": "v0.8.2",
          "message": "Merge pull request #1083 from mkroening/release-0.6.9\n\nchore: release version 0.6.9",
          "timestamp": "2024-02-29T08:29:38Z",
          "url": "https://github.com/hermit-os/kernel/commit/1d9d19ca5d136bc16b0909982a783c2ec981ecef"
        },
        "date": 1722709090535,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 116.951302829,
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
            "value": 14.105263157894736,
            "unit": "ms",
            "range": 0.22527657953232727,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 7.947368421052632,
            "unit": "ms",
            "range": 0.22398010601979546,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 56052.63157894736,
            "unit": "ns",
            "range": 7.3569126010307615,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32312789.473684207,
            "unit": "ns",
            "range": 83.95558711885622,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 16820210.52631579,
            "unit": "ns",
            "range": 123.05856959524333,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 12837736.842105262,
            "unit": "ns",
            "range": 75.26156511671412,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.9213242531730697,
            "unit": "x",
            "range": 0.22371594992642363,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5530320880399999,
            "unit": "s",
            "range": 0.015801900294790484,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.57258368036,
            "unit": "s",
            "range": 0.011419754919870654,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.5877933667999999,
            "unit": "s",
            "range": 0.018788472866774018,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.432533264160156,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.238883972167969,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.2459716796875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.245796203613281,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 75.1924803157895,
            "unit": "ticks",
            "range": 0.23041221325189906,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 38.139133473684204,
            "unit": "ticks",
            "range": 0.2239389344674533,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 52.55351626315789,
            "unit": "ticks",
            "range": 0.22382866813035865,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 18177.067892634146,
            "unit": "MByte/s",
            "range": 11.806890350029267,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 18444.70507755964,
            "unit": "MByte/s",
            "range": 22.5281690050953,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 8226.610613897697,
            "unit": "MByte/s",
            "range": 9.903446468555037,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 18177.067892634146,
            "unit": "MByte/s",
            "range": 11.806890350029267,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 18444.70507755964,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 8226.610613897697,
            "unit": "MByte/s",
            "range": 9.903446468555037,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 16027.224957484334,
            "unit": "MByte/s",
            "range": 1.9906951064668539,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 18471.964335149536,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 8264.124308162456,
            "unit": "MByte/s",
            "range": 9.801742991448378,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 16027.224957484334,
            "unit": "MByte/s",
            "range": 1.9906951064668539,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 18471.964335149536,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 8264.124308162456,
            "unit": "MByte/s",
            "range": 9.801742991448378,
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
            "value": 69.96035029038875,
            "unit": "%",
            "range": 0.16316051922780095,
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
            "value": 13192.275708525916,
            "unit": "Ticks",
            "range": 3.697323941470558,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13192.275708525916,
            "unit": "Ticks",
            "range": 3.697323941470558,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1107.0069751870267,
            "unit": "Ticks",
            "range": 0.5114692338192371,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 27,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 40.97959183673469,
            "unit": "ns",
            "range": 0.45224480667574063,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.96371936530419,
            "unit": "%",
            "range": 0.2897373509685009,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.42783084498043,
            "unit": "%",
            "range": 0.27440525930863097,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 48.84531945338581,
            "unit": "%",
            "range": 0.28908365670720465,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "TCP client",
            "value": 381.5590139345916,
            "unit": "Mbit/s",
            "range": 1.5103133670991873,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 98.07715368702345,
            "unit": "Mbit/s",
            "range": 3.1340367689866326,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 155189248,
            "unit": "ns",
            "range": 1391.8570580795451,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 184549376,
            "unit": "ns",
            "range": 1704.66977803789,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 126353408,
            "unit": "ns",
            "range": 2173.036115614144,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 141033472,
            "unit": "ns",
            "range": 1808.0753439469017,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 89.09552750931901,
            "unit": "Mbit/s",
            "range": 0.7918981988115821,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 89.512073443384,
            "unit": "Mbit/s",
            "range": 0.938330052709327,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 311296,
            "unit": "ns",
            "range": 43.49634581084654,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 1126400,
            "unit": "ns",
            "range": 385.37151405880815,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 327680,
            "unit": "ns",
            "range": 75.33788034349601,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 1060864,
            "unit": "ns",
            "range": 244.11816820226218,
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
          "id": "v0.8.0",
          "message": "Merge pull request #1009 from mkroening/release-0.6.7\n\nchore: release version 0.6.7",
          "timestamp": "2023-12-19T09:20:27Z",
          "url": "https://github.com/hermit-os/kernel/commit/244d5b379b240684bdd67d7cbb2dc4fc39ee6c14"
        },
        "date": 1722710720180,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 113.619978309,
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
            "value": 14.263157894736842,
            "unit": "ms",
            "range": 0.23347822677886448,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 8,
            "unit": "ms",
            "range": 0,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 52.631578947368425,
            "unit": "ns",
            "range": 1.6523425629298925,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32398947.36842105,
            "unit": "ns",
            "range": 10.00379575587456,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21438736.842105262,
            "unit": "ns",
            "range": 65.19711287025913,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15902789.47368421,
            "unit": "ns",
            "range": 140.67094043530247,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.5117172331617574,
            "unit": "x",
            "range": 0.2239095958617756,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.55159450924,
            "unit": "s",
            "range": 0.0199293993516505,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.5651231628,
            "unit": "s",
            "range": 0.01784060239617141,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.58570775004,
            "unit": "s",
            "range": 0.021421285973445683,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 5.076316833496094,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.882682800292969,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.885597229003906,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.888893127441406,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 65.89688163157896,
            "unit": "ticks",
            "range": 0.2257687003666612,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 33.532873263157896,
            "unit": "ticks",
            "range": 0.2315481727266115,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 52.548755736842104,
            "unit": "ticks",
            "range": 0.22390674131539184,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 18737.8974382385,
            "unit": "MByte/s",
            "range": 12.132476392959923,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 18752.849111840176,
            "unit": "MByte/s",
            "range": 22.112811303755823,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 8128.145869709799,
            "unit": "MByte/s",
            "range": 6.4047722679772034,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 18737.8974382385,
            "unit": "MByte/s",
            "range": 12.132476392959923,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 18752.849111840176,
            "unit": "MByte/s",
            "range": 22.112811303755823,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 8128.145869709799,
            "unit": "MByte/s",
            "range": 6.4047722679772034,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 15705.53415862595,
            "unit": "MByte/s",
            "range": 3.615872513252473,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 18809.963431008608,
            "unit": "MByte/s",
            "range": 22.29079192971141,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 7884.590815020518,
            "unit": "MByte/s",
            "range": 5.52787664056113,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 15705.53415862595,
            "unit": "MByte/s",
            "range": 3.615872513252473,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 18809.963431008608,
            "unit": "MByte/s",
            "range": 22.29079192971141,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 7884.590815020518,
            "unit": "MByte/s",
            "range": 5.52787664056113,
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
            "value": 69.95728495511091,
            "unit": "%",
            "range": 0.16236474961735192,
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
            "value": 14116.67353197613,
            "unit": "Ticks",
            "range": 5.247686713962417,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 14116.67353197613,
            "unit": "Ticks",
            "range": 5.247686713962417,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1158.0446261871784,
            "unit": "Ticks",
            "range": 0.8160200280843303,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.244897959183675,
            "unit": "ns",
            "range": 0.1462325171001585,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 40.38775510204081,
            "unit": "ns",
            "range": 0.3210861385364641,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.94263301604504,
            "unit": "%",
            "range": 0.2872062538983497,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.29846940107183,
            "unit": "%",
            "range": 0.3027114920825098,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 48.77280447165898,
            "unit": "%",
            "range": 0.2817358733229429,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Stefan Lankes",
            "username": "stlankes",
            "email": "stlankes@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "v0.7.0",
          "message": "Merge pull request #926 from mkroening/rm-nasm\n\nfeat: remove NASM dependency",
          "timestamp": "2023-09-21T18:05:27Z",
          "url": "https://github.com/hermit-os/kernel/commit/7d9cd982c8ec7e6a198a567f699b9141514a5e51"
        },
        "date": 1722712730160,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 104.322018034,
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
            "value": 14.315789473684209,
            "unit": "ms",
            "range": 0.2376831359228669,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 8,
            "unit": "ms",
            "range": 0,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 58263.15789473685,
            "unit": "ns",
            "range": 12.948174906633541,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32406315.789473683,
            "unit": "ns",
            "range": 44.94075722334679,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21569105.263157897,
            "unit": "ns",
            "range": 73.75591262500585,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 16214578.947368419,
            "unit": "ns",
            "range": 108.79694401979135,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.502586130816553,
            "unit": "x",
            "range": 0.22364572090046994,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5506784054399999,
            "unit": "s",
            "range": 0.012921766027140407,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.5595385119599999,
            "unit": "s",
            "range": 0.013878001762989901,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.5878330054800001,
            "unit": "s",
            "range": 0.01642051029713838,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.3173675537109375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.12359619140625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.130500793457031,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.130401611328125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 68.93727773684209,
            "unit": "ticks",
            "range": 0.2593405254456123,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 35.081291052631585,
            "unit": "ticks",
            "range": 0.22493243978740854,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 52.260597315789475,
            "unit": "ticks",
            "range": 0.2239829265679517,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 18459.84416054764,
            "unit": "MByte/s",
            "range": 11.339449410145853,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 18525.40222979078,
            "unit": "MByte/s",
            "range": 22.573898321737435,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 7968.845435201617,
            "unit": "MByte/s",
            "range": 6.086209642969675,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 18459.84416054764,
            "unit": "MByte/s",
            "range": 11.339449410145853,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 18525.40222979078,
            "unit": "MByte/s",
            "range": 22.573898321737435,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 7968.845435201617,
            "unit": "MByte/s",
            "range": 6.086209642969675,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 15935.142955809742,
            "unit": "MByte/s",
            "range": 2.413748997060427,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 18530.77212692489,
            "unit": "MByte/s",
            "range": 22.553979685902362,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 7959.147322330756,
            "unit": "MByte/s",
            "range": 6.207109928682157,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 15935.142955809742,
            "unit": "MByte/s",
            "range": 2.413748997060427,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 18530.77212692489,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 7959.147322330756,
            "unit": "MByte/s",
            "range": 6.207109928682157,
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
            "value": 70.00039303235184,
            "unit": "%",
            "range": 0.1689154775169871,
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
            "value": 13504.484981976848,
            "unit": "Ticks",
            "range": 1.559004297776427,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13504.484981976848,
            "unit": "Ticks",
            "range": 1.559004297776427,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1155.538003441033,
            "unit": "Ticks",
            "range": 0.5888339755299613,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 27,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 39.59968602825747,
            "unit": "ns",
            "range": 0.24779202016657365,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.75856307131468,
            "unit": "%",
            "range": 0.2871457631072773,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.2598468976092,
            "unit": "%",
            "range": 0.26932682751094,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 48.881979214778916,
            "unit": "%",
            "range": 0.26491988943177,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
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
          "id": "0aedc555e72cdd3f18c96ae6a22aaa9e4f770447",
          "message": "Merge pull request #860 from hermitcore/rename-crate\n\nfeat: rename crate to hermit-kernel",
          "timestamp": "2023-08-25T16:03:27Z",
          "url": "https://github.com/hermit-os/kernel/commit/0aedc555e72cdd3f18c96ae6a22aaa9e4f770447"
        },
        "date": 1722713528961,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 143.105295497,
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
            "value": 14.578947368421053,
            "unit": "ms",
            "range": 0.24366756019691146,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 8.421052631578947,
            "unit": "ms",
            "range": 0.242217175113563,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 56631.57894736841,
            "unit": "ns",
            "range": 9.15730154923926,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32432421.05263158,
            "unit": "ns",
            "range": 11.519416132451642,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 20797526.315789472,
            "unit": "ns",
            "range": 126.90897956306931,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15836736.842105262,
            "unit": "ns",
            "range": 126.54631153956976,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.5596373616482402,
            "unit": "x",
            "range": 0.22363935424411174,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5381246085600001,
            "unit": "s",
            "range": 0.02129920344596514,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.55935065464,
            "unit": "s",
            "range": 0.017397929070125887,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.58745837868,
            "unit": "s",
            "range": 0.014993035174788066,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.29937744140625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.106071472167969,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.112998962402344,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.112907409667969,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 75.92610226315789,
            "unit": "ticks",
            "range": 0.2241250611591896,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 38.78704455263158,
            "unit": "ticks",
            "range": 0.22408951545174155,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 52.322632368421054,
            "unit": "ticks",
            "range": 0.2259628619409668,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 18410.10268319306,
            "unit": "MByte/s",
            "range": 11.416337217833622,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 18929.65495733164,
            "unit": "MByte/s",
            "range": 22.128813578960767,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 7792.649267020939,
            "unit": "MByte/s",
            "range": 3.5526780545622367,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 18410.10268319306,
            "unit": "MByte/s",
            "range": 11.416337217833622,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 18929.65495733164,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 7792.649267020939,
            "unit": "MByte/s",
            "range": 3.5526780545622367,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 15783.949395413258,
            "unit": "MByte/s",
            "range": 3.528745921771405,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 18827.58827066447,
            "unit": "MByte/s",
            "range": 22.154441222390123,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 7786.535343111498,
            "unit": "MByte/s",
            "range": 3.4407240934719696,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 15783.949395413258,
            "unit": "MByte/s",
            "range": 3.528745921771405,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 18827.58827066447,
            "unit": "MByte/s",
            "range": 22.154441222390123,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 7786.535343111498,
            "unit": "MByte/s",
            "range": 3.4407240934719696,
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
            "value": 69.93726858535501,
            "unit": "%",
            "range": 0.16678747157512278,
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
            "value": 13690.775202624129,
            "unit": "Ticks",
            "range": 2.644528983024204,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13690.775202624129,
            "unit": "Ticks",
            "range": 2.644528983024204,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1203.0120062408462,
            "unit": "Ticks",
            "range": 0.6771746850014846,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 27,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 40.938775510204074,
            "unit": "ns",
            "range": 0.2935796452096785,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.45937455956383,
            "unit": "%",
            "range": 0.5019943038682522,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.35823127277273,
            "unit": "%",
            "range": 0.29214038590168373,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 48.8623306647897,
            "unit": "%",
            "range": 0.31427673275812645,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          }
        ]
      }
    ]
  }
}