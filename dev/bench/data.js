window.BENCHMARK_DATA = {
  "lastUpdate": 1725081787875,
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
        "date": 1725055394374,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 157.678583539,
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
            "value": 8.000000000000002,
            "unit": "ms",
            "range": 1.7763568394002505e-15,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 65250,
            "unit": "ns",
            "range": 16489.011492506153,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32337950,
            "unit": "ns",
            "range": 26680.470385658497,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21457150,
            "unit": "ns",
            "range": 175775.7875817941,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15447900,
            "unit": "ns",
            "range": 492478.2127160551,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.5071945883655644,
            "unit": "x",
            "range": 0.012292640863369274,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5725274553999999,
            "unit": "s",
            "range": 0.027585011233542057,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.5857560921600001,
            "unit": "s",
            "range": 0.027102491314499447,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.62088150712,
            "unit": "s",
            "range": 0.022458460351141744,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.326324462890625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.1326751708984375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.1406402587890625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.1419219970703125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 127.87203885000002,
            "unit": "ticks",
            "range": 0.27962602307336787,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.43887675,
            "unit": "ticks",
            "range": 0.13269024635693014,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.91005795000001,
            "unit": "ticks",
            "range": 0.17157243694558735,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35446.94331536814,
            "unit": "MByte/s",
            "range": 24607.366267782454,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36565.88292902048,
            "unit": "MByte/s",
            "range": 28206.021011058583,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15133.3725686241,
            "unit": "MByte/s",
            "range": 10389.442244162012,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35013.125720533586,
            "unit": "MByte/s",
            "range": 24324.20085556223,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 37498.82921656992,
            "unit": "MByte/s",
            "range": 28778.05242067181,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15238.946097097914,
            "unit": "MByte/s",
            "range": 10463.528958796758,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31318.54731278293,
            "unit": "MByte/s",
            "range": 21351.774526998714,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36571.01239300066,
            "unit": "MByte/s",
            "range": 28214.002375417902,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15146.217534371943,
            "unit": "MByte/s",
            "range": 10397.907983274978,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31405.519179274812,
            "unit": "MByte/s",
            "range": 21406.7729877834,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 37510.45833223606,
            "unit": "MByte/s",
            "range": 28787.33667948664,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15251.942056470782,
            "unit": "MByte/s",
            "range": 10472.034537549915,
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
            "value": 70.00655033939191,
            "unit": "%",
            "range": 0.30648787322100624,
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
            "value": 12874.50718921766,
            "unit": "Ticks",
            "range": 659.9805227483573,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 12874.50718921766,
            "unit": "Ticks",
            "range": 659.9805227483573,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1021.6644227307207,
            "unit": "Ticks",
            "range": 142.48911517767584,
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
            "value": 40.739999999999995,
            "unit": "ns",
            "range": 25.22840462653158,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 100.44538758906198,
            "unit": "%",
            "range": 1.5381433088875005,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.8412183234966,
            "unit": "%",
            "range": 1.2832764043643214,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.436852417291455,
            "unit": "%",
            "range": 0.6625829107787812,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "TCP client",
            "value": 410.0850201655904,
            "unit": "Mbit/s",
            "range": 32.00436581278569,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 109.02429816807287,
            "unit": "Mbit/s",
            "range": 15.723813033019669,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 165255577.6,
            "unit": "ns",
            "range": 17109470.353552215,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 185388236.8,
            "unit": "ns",
            "range": 8554735.17677611,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 97727283.20000002,
            "unit": "ns",
            "range": 6164342.775668673,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 111987916.8,
            "unit": "ns",
            "range": 11683978.932909291,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 127.88384187710571,
            "unit": "Mbit/s",
            "range": 8.651708132940486,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 116.17782946188152,
            "unit": "Mbit/s",
            "range": 4.117858019885831,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 235110.39999999997,
            "unit": "ns",
            "range": 18244.450264121417,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 624230.4,
            "unit": "ns",
            "range": 126952.21454641901,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 207257.60000000003,
            "unit": "ns",
            "range": 6130.331462490425,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 884736,
            "unit": "ns",
            "range": 192747.15850149386,
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
        "date": 1725058317007,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 159.359244512,
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
            "value": 14.299999999999997,
            "unit": "ms",
            "range": 0.4582575694955839,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 8.000000000000002,
            "unit": "ms",
            "range": 1.7763568394002505e-15,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 56450,
            "unit": "ns",
            "range": 8399.255919425244,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32383800,
            "unit": "ns",
            "range": 38700.90438219758,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21570550,
            "unit": "ns",
            "range": 178539.76447839287,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15671200,
            "unit": "ns",
            "range": 442776.42213649995,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.5013953144414682,
            "unit": "x",
            "range": 0.012015529188091689,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5904903362,
            "unit": "s",
            "range": 0.019545247760162913,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.6057934722400001,
            "unit": "s",
            "range": 0.00403735847491298,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.63298673976,
            "unit": "s",
            "range": 0.010736387776522143,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.326324462890625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.1326751708984375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.1406402587890625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.1419219970703125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 127.90873520000001,
            "unit": "ticks",
            "range": 0.39252133892701846,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.519365825,
            "unit": "ticks",
            "range": 0.1862452375095999,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.90720095,
            "unit": "ticks",
            "range": 0.11351683369636129,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36017.07817808613,
            "unit": "MByte/s",
            "range": 24982.610913029806,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36152.19566369138,
            "unit": "MByte/s",
            "range": 28140.17314984242,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 14703.095622836001,
            "unit": "MByte/s",
            "range": 10151.493749178537,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35713.46773578187,
            "unit": "MByte/s",
            "range": 24773.730894176522,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 37086.222465212995,
            "unit": "MByte/s",
            "range": 28710.214789606136,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 14819.130746733179,
            "unit": "MByte/s",
            "range": 10233.742148116742,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 30454.649171767338,
            "unit": "MByte/s",
            "range": 20805.600889723002,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36152.22199772237,
            "unit": "MByte/s",
            "range": 28150.36771649844,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 14709.40802895827,
            "unit": "MByte/s",
            "range": 10155.264390214381,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 30544.074613305456,
            "unit": "MByte/s",
            "range": 20863.347075820355,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 37072.58380845696,
            "unit": "MByte/s",
            "range": 28707.256412969742,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 14825.957323923809,
            "unit": "MByte/s",
            "range": 10238.026149377101,
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
            "value": 70.06925507314845,
            "unit": "%",
            "range": 0.29386617421679484,
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
            "value": 12514.61240247374,
            "unit": "Ticks",
            "range": 525.5797232307795,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 12514.61240247374,
            "unit": "Ticks",
            "range": 525.5797232307795,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 958.9206075591181,
            "unit": "Ticks",
            "range": 108.14694650764177,
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
            "value": 43.120000000000005,
            "unit": "ns",
            "range": 25.70341611537268,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.84735189554024,
            "unit": "%",
            "range": 0.8794116621814627,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.39465846326766,
            "unit": "%",
            "range": 0.8170526898222968,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.18516069111598,
            "unit": "%",
            "range": 1.0066665854618118,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "TCP client",
            "value": 399.28127510287413,
            "unit": "Mbit/s",
            "range": 37.31410579891609,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 114.33400051876151,
            "unit": "Mbit/s",
            "range": 16.25226426491618,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 173644185.6,
            "unit": "ns",
            "range": 16266114.413344592,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 187065958.4,
            "unit": "ns",
            "range": 8219123.700891564,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 101921587.2,
            "unit": "ns",
            "range": 1677721.6,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 106115891.2,
            "unit": "ns",
            "range": 6164342.775668673,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 129.42454255830026,
            "unit": "Mbit/s",
            "range": 5.670915993088698,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 118.95975192847989,
            "unit": "Mbit/s",
            "range": 7.634049525057193,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 248217.6,
            "unit": "ns",
            "range": 12039.731983727876,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 760217.6,
            "unit": "ns",
            "range": 303453.6189045041,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 205619.2,
            "unit": "ns",
            "range": 8354.23357107042,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 724172.7999999999,
            "unit": "ns",
            "range": 53241.69808862223,
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
        "date": 1725061314725,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 159.443313193,
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
            "value": 8.000000000000002,
            "unit": "ms",
            "range": 1.7763568394002505e-15,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 58200,
            "unit": "ns",
            "range": 10777.754868245984,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32327500,
            "unit": "ns",
            "range": 70979.92673988894,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21901300,
            "unit": "ns",
            "range": 1997115.7728083767,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15679350,
            "unit": "ns",
            "range": 388951.9604012814,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.4849915221479149,
            "unit": "x",
            "range": 0.09818111820044867,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5862585678800001,
            "unit": "s",
            "range": 0.019669312379109405,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.59155630756,
            "unit": "s",
            "range": 0.029161343403133328,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.6316868734,
            "unit": "s",
            "range": 0.02097279397551078,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.3263702392578125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.132720947265625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.14068603515625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.1419677734375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 127.86307155,
            "unit": "ticks",
            "range": 0.26131292437697656,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.54568997499999,
            "unit": "ticks",
            "range": 0.14129830252673634,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.89891435,
            "unit": "ticks",
            "range": 0.13732330033401982,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35702.23811269064,
            "unit": "MByte/s",
            "range": 24740.063905957624,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36406.158543716556,
            "unit": "MByte/s",
            "range": 28159.144230685462,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 13931.139430430356,
            "unit": "MByte/s",
            "range": 9583.759738839264,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35574.60352898294,
            "unit": "MByte/s",
            "range": 24660.65547153954,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 37334.57360799137,
            "unit": "MByte/s",
            "range": 28726.907256758022,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 13995.100516654495,
            "unit": "MByte/s",
            "range": 9628.207580733459,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31057.824926896534,
            "unit": "MByte/s",
            "range": 21190.988518375154,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36280.12651799228,
            "unit": "MByte/s",
            "range": 28160.20285295638,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 13802.15038308207,
            "unit": "MByte/s",
            "range": 9505.211739757196,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31004.018093428684,
            "unit": "MByte/s",
            "range": 21153.2244586619,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 37214.62386193083,
            "unit": "MByte/s",
            "range": 28732.18336201581,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 13866.725779736287,
            "unit": "MByte/s",
            "range": 9550.554222274293,
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
            "value": 70.00781626817268,
            "unit": "%",
            "range": 0.3138356274682506,
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
            "value": 12945.188206378538,
            "unit": "Ticks",
            "range": 533.8438996218142,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 12945.188206378538,
            "unit": "Ticks",
            "range": 533.8438996218142,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1041.1510950431023,
            "unit": "Ticks",
            "range": 114.97831771256617,
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
            "value": 44.61999999999998,
            "unit": "ns",
            "range": 24.88444494056478,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.81387226526137,
            "unit": "%",
            "range": 1.0383938895036042,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.3056958971047,
            "unit": "%",
            "range": 0.83470188578883,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.29270234736481,
            "unit": "%",
            "range": 0.637444718738109,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "TCP client",
            "value": 390.2520902759478,
            "unit": "Mbit/s",
            "range": 25.965709203973688,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 103.35567498512611,
            "unit": "Mbit/s",
            "range": 11.13965631894357,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 185388236.8,
            "unit": "ns",
            "range": 11378861.511016898,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 192099123.2,
            "unit": "ns",
            "range": 4109561.850445782,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 99405004.79999998,
            "unit": "ns",
            "range": 4891356.971271444,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 124151398.4,
            "unit": "ns",
            "range": 28397637.37137351,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 132.77778127092773,
            "unit": "Mbit/s",
            "range": 5.764336986477817,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 121.32994405671127,
            "unit": "Mbit/s",
            "range": 4.042348589123386,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 236748.80000000002,
            "unit": "ns",
            "range": 13310.424522155557,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 670105.6,
            "unit": "ns",
            "range": 191657.78825563026,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 205619.2,
            "unit": "ns",
            "range": 8354.23357107042,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 1307443.2,
            "unit": "ns",
            "range": 885548.7585334644,
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
        "date": 1725064261642,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 160.872103729,
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
            "value": 14.349999999999998,
            "unit": "ms",
            "range": 0.47696960070847294,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 8.000000000000002,
            "unit": "ms",
            "range": 1.7763568394002505e-15,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 56600,
            "unit": "ns",
            "range": 6733.498347812971,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32378600,
            "unit": "ns",
            "range": 58729.379359908104,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21505350,
            "unit": "ns",
            "range": 113954.05872543549,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15775650,
            "unit": "ns",
            "range": 230611.20419441897,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.5056457660846738,
            "unit": "x",
            "range": 0.007827774275369683,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5888822544,
            "unit": "s",
            "range": 0.019389503868802543,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.59268410028,
            "unit": "s",
            "range": 0.02804885512201658,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.6226799198799999,
            "unit": "s",
            "range": 0.02624230220092851,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.326324462890625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.1326751708984375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.1406402587890625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.1419219970703125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 128.05907025000002,
            "unit": "ticks",
            "range": 0.4573695592697305,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.599302275,
            "unit": "ticks",
            "range": 0.1366885157354547,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.91003235,
            "unit": "ticks",
            "range": 0.05658941791295782,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35869.14375928732,
            "unit": "MByte/s",
            "range": 24824.11271325567,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36009.11636472826,
            "unit": "MByte/s",
            "range": 28063.084983050267,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 14052.726333170145,
            "unit": "MByte/s",
            "range": 9699.235769317482,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35559.33410096071,
            "unit": "MByte/s",
            "range": 24608.701019764183,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36924.388265530586,
            "unit": "MByte/s",
            "range": 28623.74862979783,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 14171.938299525185,
            "unit": "MByte/s",
            "range": 9787.036702218582,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31255.623722200085,
            "unit": "MByte/s",
            "range": 21324.572032551558,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36342.0338041132,
            "unit": "MByte/s",
            "range": 28172.716224306932,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 14210.280501580939,
            "unit": "MByte/s",
            "range": 9790.203147342007,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31197.00178857815,
            "unit": "MByte/s",
            "range": 21283.57776942197,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 37267.14218776344,
            "unit": "MByte/s",
            "range": 28738.464502830593,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 14330.07912847766,
            "unit": "MByte/s",
            "range": 9877.594101287305,
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
            "value": 70.03163105421737,
            "unit": "%",
            "range": 0.2610269501532579,
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
            "value": 12769.238076321808,
            "unit": "Ticks",
            "range": 355.99388774793624,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 12769.238076321808,
            "unit": "Ticks",
            "range": 355.99388774793624,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1019.0460770441206,
            "unit": "Ticks",
            "range": 66.56732933125114,
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
            "value": 39.379999999999995,
            "unit": "ns",
            "range": 21.097762914584095,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 100.09318245405065,
            "unit": "%",
            "range": 1.2247937916919667,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.77384375105366,
            "unit": "%",
            "range": 1.0081183856602114,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.479953141898555,
            "unit": "%",
            "range": 0.47211000359628785,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "TCP client",
            "value": 405.5774056140363,
            "unit": "Mbit/s",
            "range": 37.29221487894781,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 111.33598448509073,
            "unit": "Mbit/s",
            "range": 13.981544684137516,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 178677350.39999998,
            "unit": "ns",
            "range": 9782713.942542888,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 187065958.4,
            "unit": "ns",
            "range": 3355443.1999999997,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 96888422.4,
            "unit": "ns",
            "range": 6277459.417590195,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 121634816,
            "unit": "ns",
            "range": 22114763.666717418,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 134.36741235824272,
            "unit": "Mbit/s",
            "range": 7.140564035500931,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 126.85819564790899,
            "unit": "Mbit/s",
            "range": 5.075949715501404,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 249856,
            "unit": "ns",
            "range": 5181.075718419873,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 514457.6,
            "unit": "ns",
            "range": 66431.00854751492,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 205619.2,
            "unit": "ns",
            "range": 6553.599999999999,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 1081344,
            "unit": "ns",
            "range": 738553.2117538992,
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
        "date": 1725067192731,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 159.74538819,
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
            "value": 14.299999999999997,
            "unit": "ms",
            "range": 0.4582575694955839,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 8.000000000000002,
            "unit": "ms",
            "range": 1.7763568394002505e-15,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 54950,
            "unit": "ns",
            "range": 1243.9855304624728,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32381500,
            "unit": "ns",
            "range": 71878.71729517716,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21557200,
            "unit": "ns",
            "range": 130077.89973704219,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15809200,
            "unit": "ns",
            "range": 424749.290758678,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.5021752787331057,
            "unit": "x",
            "range": 0.009757430141243353,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.56960549308,
            "unit": "s",
            "range": 0.027696781588484574,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.5815745229999999,
            "unit": "s",
            "range": 0.027689548071416346,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.62356516888,
            "unit": "s",
            "range": 0.02371761757138201,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.326324462890625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.1326751708984375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.1406402587890625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.1419219970703125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 128.0097719,
            "unit": "ticks",
            "range": 0.18658025123868208,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.609408625,
            "unit": "ticks",
            "range": 0.18146418656258798,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.908876299999996,
            "unit": "ticks",
            "range": 0.05682608968607725,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36236.79001493603,
            "unit": "MByte/s",
            "range": 25045.63355611614,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 35876.71589991538,
            "unit": "MByte/s",
            "range": 28043.407432534434,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 13662.183167846462,
            "unit": "MByte/s",
            "range": 9414.75865085456,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35926.98035660942,
            "unit": "MByte/s",
            "range": 24832.37290600833,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36796.98338623401,
            "unit": "MByte/s",
            "range": 28609.175247565603,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 13741.338493412808,
            "unit": "MByte/s",
            "range": 9472.172228902582,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 30683.48794002021,
            "unit": "MByte/s",
            "range": 20939.584627003416,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36169.19128151154,
            "unit": "MByte/s",
            "range": 28137.999701268174,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 13890.546543289083,
            "unit": "MByte/s",
            "range": 9568.068439621886,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 30624.86600639828,
            "unit": "MByte/s",
            "range": 20897.75491952202,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 37098.42745903047,
            "unit": "MByte/s",
            "range": 28708.008407167137,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 13969.06183333933,
            "unit": "MByte/s",
            "range": 9624.070672753485,
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
            "value": 69.97567022359,
            "unit": "%",
            "range": 0.29405839505971104,
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
            "value": 12786.712466593794,
            "unit": "Ticks",
            "range": 715.2050575652893,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 12786.712466593794,
            "unit": "Ticks",
            "range": 715.2050575652893,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 993.0648642211557,
            "unit": "Ticks",
            "range": 149.36334376011405,
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
            "value": 41.94,
            "unit": "ns",
            "range": 22.7274371630415,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.70891476671483,
            "unit": "%",
            "range": 0.6587885197321237,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.30121520021326,
            "unit": "%",
            "range": 0.7454991365909092,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.104058441332015,
            "unit": "%",
            "range": 0.5446081003682448,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "TCP client",
            "value": 386.29345887126885,
            "unit": "Mbit/s",
            "range": 19.884600109937825,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 121.09598065048806,
            "unit": "Mbit/s",
            "range": 6.450096579772599,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 178677350.4,
            "unit": "ns",
            "range": 17109470.35355222,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 188743680,
            "unit": "ns",
            "range": 7502999.089839422,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 101921587.2,
            "unit": "ns",
            "range": 8133057.206672295,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 113665638.4,
            "unit": "ns",
            "range": 3355443.2,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 134.041244114761,
            "unit": "Mbit/s",
            "range": 6.2854599665401585,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 119.50267308034032,
            "unit": "Mbit/s",
            "range": 6.406982704860212,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 241664.00000000003,
            "unit": "ns",
            "range": 17183.684168419764,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 512819.2,
            "unit": "ns",
            "range": 27707.858166231472,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 200704,
            "unit": "ns",
            "range": 11585.237502960395,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 786432,
            "unit": "ns",
            "range": 184201.63310459547,
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
        "date": 1725070112242,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 159.127844383,
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
            "value": 14.249999999999996,
            "unit": "ms",
            "range": 0.5361902647381804,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 8.000000000000002,
            "unit": "ms",
            "range": 1.7763568394002505e-15,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 57100,
            "unit": "ns",
            "range": 7034.912934784623,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32626050,
            "unit": "ns",
            "range": 944243.3200716857,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21673800,
            "unit": "ns",
            "range": 701996.8375997145,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15882600,
            "unit": "ns",
            "range": 486822.9041448235,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.5056768919048324,
            "unit": "x",
            "range": 0.02393875053697026,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.56100227352,
            "unit": "s",
            "range": 0.030923265085310903,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.58762855976,
            "unit": "s",
            "range": 0.027818842826318396,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.60891381732,
            "unit": "s",
            "range": 0.029754474820540274,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.326324462890625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.1326751708984375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.1406402587890625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.1419219970703125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 130.79522605,
            "unit": "ticks",
            "range": 12.39067004543119,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 66.091312075,
            "unit": "ticks",
            "range": 6.217917432725466,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.891488650000014,
            "unit": "ticks",
            "range": 0.05709776453003695,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35459.97573295509,
            "unit": "MByte/s",
            "range": 24581.90362480787,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 35846.21003183683,
            "unit": "MByte/s",
            "range": 28027.493957964758,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 13402.812244463545,
            "unit": "MByte/s",
            "range": 9241.220159233097,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35041.44752867424,
            "unit": "MByte/s",
            "range": 24308.008015678894,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36913.70877165345,
            "unit": "MByte/s",
            "range": 28625.17189571359,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 13485.402041126315,
            "unit": "MByte/s",
            "range": 9288.973648779805,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31261.552175314897,
            "unit": "MByte/s",
            "range": 21316.856550135522,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 35571.15160787742,
            "unit": "MByte/s",
            "range": 27971.188814493427,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 13284.754210674859,
            "unit": "MByte/s",
            "range": 9173.373244862494,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31091.097629860353,
            "unit": "MByte/s",
            "range": 21206.365375428584,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36634.1846514989,
            "unit": "MByte/s",
            "range": 28566.96848628723,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 13367.480888125265,
            "unit": "MByte/s",
            "range": 9221.67066197505,
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
            "value": 69.95760753780333,
            "unit": "%",
            "range": 0.2795484012975175,
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
            "value": 12805.941665467599,
            "unit": "Ticks",
            "range": 709.4340162337801,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 12805.941665467599,
            "unit": "Ticks",
            "range": 709.4340162337801,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1000.5175844696691,
            "unit": "Ticks",
            "range": 138.52936697308695,
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
            "value": 38.459999999999994,
            "unit": "ns",
            "range": 19.22,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.45136068096541,
            "unit": "%",
            "range": 1.1653845772076596,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.3078885560228,
            "unit": "%",
            "range": 0.8382004802339853,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.09225960476367,
            "unit": "%",
            "range": 0.40304939992994354,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "TCP client",
            "value": 414.16391313406587,
            "unit": "Mbit/s",
            "range": 22.496688818877605,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 110.44912518287487,
            "unit": "Mbit/s",
            "range": 14.0611752555393,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 183710515.2,
            "unit": "ns",
            "range": 14626037.819590736,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 188743680,
            "unit": "ns",
            "range": 9189259.655336592,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 99405004.8,
            "unit": "ns",
            "range": 3138729.708795098,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 107793612.8,
            "unit": "ns",
            "range": 4109561.8504457823,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 133.35026510908173,
            "unit": "Mbit/s",
            "range": 9.741733946706413,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 124.8465385318359,
            "unit": "Mbit/s",
            "range": 4.31165630977887,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 249856,
            "unit": "ns",
            "range": 5181.075718419873,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 553779.2,
            "unit": "ns",
            "range": 114289.41022229487,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 202342.4,
            "unit": "ns",
            "range": 13107.199999999999,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 1097728,
            "unit": "ns",
            "range": 551535.1835914006,
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
        "date": 1725072986632,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 160.88646604,
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
            "value": 14.499999999999998,
            "unit": "ms",
            "range": 0.5,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 8.000000000000002,
            "unit": "ms",
            "range": 1.7763568394002505e-15,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 55550,
            "unit": "ns",
            "range": 2499.4999499899973,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32391050,
            "unit": "ns",
            "range": 48870.722319196386,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21577050,
            "unit": "ns",
            "range": 145006.37054971067,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15783900,
            "unit": "ns",
            "range": 265719.5702239487,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.5012508867383432,
            "unit": "x",
            "range": 0.010692858767523896,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.58550371396,
            "unit": "s",
            "range": 0.019731941981513137,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.58958907396,
            "unit": "s",
            "range": 0.02720603718399226,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.6313197602799999,
            "unit": "s",
            "range": 0.02265659938907085,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.3263702392578125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.132720947265625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.14068603515625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.1419677734375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 127.91977319999998,
            "unit": "ticks",
            "range": 0.17250214276889383,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.55875255,
            "unit": "ticks",
            "range": 0.13862340988221472,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.93121740000001,
            "unit": "ticks",
            "range": 0.11329104680750338,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35709.05344080056,
            "unit": "MByte/s",
            "range": 24639.53803313953,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36457.53974594163,
            "unit": "MByte/s",
            "range": 28168.53576696617,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 14056.897797838978,
            "unit": "MByte/s",
            "range": 9670.213780536644,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35399.24378247395,
            "unit": "MByte/s",
            "range": 24422.396864631508,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 37529.67126794938,
            "unit": "MByte/s",
            "range": 28768.08547523374,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 14132.502781979401,
            "unit": "MByte/s",
            "range": 9711.015300620533,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 30791.6568397543,
            "unit": "MByte/s",
            "range": 20995.438721131297,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36434.237511872,
            "unit": "MByte/s",
            "range": 28144.066884848253,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 14072.006020560131,
            "unit": "MByte/s",
            "range": 9680.149881627547,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 30860.669952245677,
            "unit": "MByte/s",
            "range": 21040.23151989293,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 37511.56846308758,
            "unit": "MByte/s",
            "range": 28748.208671004995,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 14147.402087175995,
            "unit": "MByte/s",
            "range": 9720.896327054423,
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
            "value": 69.98827355485577,
            "unit": "%",
            "range": 0.312214563803769,
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
            "value": 12842.029216649331,
            "unit": "Ticks",
            "range": 599.4568086542915,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 12842.029216649331,
            "unit": "Ticks",
            "range": 599.4568086542915,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1015.8591967866616,
            "unit": "Ticks",
            "range": 119.38498430687973,
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
            "value": 39.1,
            "unit": "ns",
            "range": 22.40379432149831,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.56581754940547,
            "unit": "%",
            "range": 0.9963101691095351,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.08278019275953,
            "unit": "%",
            "range": 0.9615680224727742,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.15659481725011,
            "unit": "%",
            "range": 0.5748663798148586,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "TCP client",
            "value": 419.91124013711567,
            "unit": "Mbit/s",
            "range": 17.438120234275992,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 115.75647865817632,
            "unit": "Mbit/s",
            "range": 12.303539372568167,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 166933299.2,
            "unit": "ns",
            "range": 18069614.632978786,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 182032793.6,
            "unit": "ns",
            "range": 8219123.700891565,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 96888422.39999999,
            "unit": "ns",
            "range": 4277367.588388055,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 106115891.19999999,
            "unit": "ns",
            "range": 3138729.7087950977,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 132.0756512192414,
            "unit": "Mbit/s",
            "range": 5.262376263254758,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 123.9087765309074,
            "unit": "Mbit/s",
            "range": 3.028496310954427,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 236748.8,
            "unit": "ns",
            "range": 9830.400000000001,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 507904,
            "unit": "ns",
            "range": 70660.45203365176,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 199065.6,
            "unit": "ns",
            "range": 8026.487989151919,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 825753.6,
            "unit": "ns",
            "range": 148580.38868383673,
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
        "date": 1725075926949,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 160.71124997,
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
            "value": 14.249999999999996,
            "unit": "ms",
            "range": 0.4330127018922193,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 8.000000000000002,
            "unit": "ms",
            "range": 1.7763568394002505e-15,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 56200,
            "unit": "ns",
            "range": 6622.6882759193795,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32367800,
            "unit": "ns",
            "range": 45206.857886829515,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21546150,
            "unit": "ns",
            "range": 142750.5779322802,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15852600,
            "unit": "ns",
            "range": 357220.99602347007,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.502322293085644,
            "unit": "x",
            "range": 0.010453596751083535,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5675620430799999,
            "unit": "s",
            "range": 0.030057948646571082,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.58975289208,
            "unit": "s",
            "range": 0.027347849296357463,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.6185123600800001,
            "unit": "s",
            "range": 0.027759774460060657,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.326324462890625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.1326751708984375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.1406402587890625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.1419219970703125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 128.0713189,
            "unit": "ticks",
            "range": 0.32265366324324973,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.6155191,
            "unit": "ticks",
            "range": 0.12295120942264048,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.882302550000006,
            "unit": "ticks",
            "range": 0.05590694844156182,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36666.931257398835,
            "unit": "MByte/s",
            "range": 25338.096672873915,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 35471.91553375704,
            "unit": "MByte/s",
            "range": 27887.658324403295,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15407.11864958514,
            "unit": "MByte/s",
            "range": 10612.093598917681,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36352.94448963196,
            "unit": "MByte/s",
            "range": 25125.253855871524,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36541.950598554424,
            "unit": "MByte/s",
            "range": 28491.456799967975,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15473.240130441802,
            "unit": "MByte/s",
            "range": 10655.294165060393,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31195.344952306903,
            "unit": "MByte/s",
            "range": 21282.40648493855,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 35714.416224634915,
            "unit": "MByte/s",
            "range": 28007.56929922783,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15405.740611285057,
            "unit": "MByte/s",
            "range": 10611.958168040974,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31024.89040685236,
            "unit": "MByte/s",
            "range": 21171.708870921706,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36643.11402815068,
            "unit": "MByte/s",
            "range": 28579.441995915284,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15482.914619175384,
            "unit": "MByte/s",
            "range": 10662.571052043075,
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
            "value": 69.98411584854131,
            "unit": "%",
            "range": 0.30284493344747315,
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
            "value": 12591.02162983164,
            "unit": "Ticks",
            "range": 328.19504691519654,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 12591.02162983164,
            "unit": "Ticks",
            "range": 328.19504691519654,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 982.4408725058153,
            "unit": "Ticks",
            "range": 70.53707085758107,
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
            "value": 44.279999999999994,
            "unit": "ns",
            "range": 25.116560274050265,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.4655140766199,
            "unit": "%",
            "range": 1.5636891283266163,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 73.64819873479509,
            "unit": "%",
            "range": 1.2812378990826199,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.06399165763258,
            "unit": "%",
            "range": 0.6741853345433549,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "TCP client",
            "value": 416.11819490017285,
            "unit": "Mbit/s",
            "range": 15.730111168520729,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 105.17911583195882,
            "unit": "Mbit/s",
            "range": 12.649152333105269,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 175321907.20000002,
            "unit": "ns",
            "range": 13629874.71068729,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 188743680,
            "unit": "ns",
            "range": 5305421.53566195,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 106115891.2,
            "unit": "ns",
            "range": 5564373.049874727,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 117859942.4,
            "unit": "ns",
            "range": 8636600.536572468,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 131.4421274449189,
            "unit": "Mbit/s",
            "range": 5.75617444561339,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 124.84037126458601,
            "unit": "Mbit/s",
            "range": 2.2886950117647253,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 243302.40000000002,
            "unit": "ns",
            "range": 18244.450264121417,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 601292.7999999999,
            "unit": "ns",
            "range": 172818.19590124182,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 212172.8,
            "unit": "ns",
            "range": 11112.169444352441,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 776601.6,
            "unit": "ns",
            "range": 110443.23030697716,
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
        "date": 1725078910526,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 160.061914515,
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
            "value": 8.000000000000002,
            "unit": "ms",
            "range": 1.7763568394002505e-15,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 56700,
            "unit": "ns",
            "range": 7022.107945624305,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32395800,
            "unit": "ns",
            "range": 70321.8316029951,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21480000,
            "unit": "ns",
            "range": 138272.9185343247,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15812150,
            "unit": "ns",
            "range": 316379.2463168215,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.5082403608837043,
            "unit": "x",
            "range": 0.009238334852976718,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.57380492276,
            "unit": "s",
            "range": 0.02827887929008384,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.5947210115999999,
            "unit": "s",
            "range": 0.02513086287975753,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.62442621144,
            "unit": "s",
            "range": 0.023723333521511736,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.3263702392578125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.132720947265625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.14068603515625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.1419677734375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 127.90423505000001,
            "unit": "ticks",
            "range": 0.2293318091699178,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.54102215,
            "unit": "ticks",
            "range": 0.13623241893416063,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.89966805,
            "unit": "ticks",
            "range": 0.08151579701902954,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35763.394733403955,
            "unit": "MByte/s",
            "range": 24790.02178431182,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36332.08813028565,
            "unit": "MByte/s",
            "range": 28148.918407041314,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 14403.086246704053,
            "unit": "MByte/s",
            "range": 9904.302151492677,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35453.585075077346,
            "unit": "MByte/s",
            "range": 24574.24460160307,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 37253.22675502182,
            "unit": "MByte/s",
            "range": 28709.28054554606,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 14458.286583157735,
            "unit": "MByte/s",
            "range": 9941.720906422728,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31136.35745399985,
            "unit": "MByte/s",
            "range": 21232.507939813197,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36198.77016730821,
            "unit": "MByte/s",
            "range": 28131.963820217898,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 14313.277185040444,
            "unit": "MByte/s",
            "range": 9853.034900243922,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31105.83242347482,
            "unit": "MByte/s",
            "range": 21211.475821207285,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 37126.783968641525,
            "unit": "MByte/s",
            "range": 28701.35554744945,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 14368.268415358047,
            "unit": "MByte/s",
            "range": 9890.610741027145,
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
            "value": 69.99426246322875,
            "unit": "%",
            "range": 0.32854517242252596,
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
            "value": 12948.2774716809,
            "unit": "Ticks",
            "range": 581.3094306903566,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 12948.2774716809,
            "unit": "Ticks",
            "range": 581.3094306903566,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1038.2917051029813,
            "unit": "Ticks",
            "range": 126.72379525717668,
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
            "value": 46.599999999999994,
            "unit": "ns",
            "range": 26.386360112755227,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 100.37104548438018,
            "unit": "%",
            "range": 0.972538661279187,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.50294261959297,
            "unit": "%",
            "range": 0.9201093426980319,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 48.15126681158782,
            "unit": "%",
            "range": 3.9425672481062692,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "TCP client",
            "value": 404.34521286122026,
            "unit": "Mbit/s",
            "range": 28.822603284427036,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 113.01484612198558,
            "unit": "Mbit/s",
            "range": 13.272597793559274,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 182032793.6,
            "unit": "ns",
            "range": 14432306.910743183,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 190421401.6,
            "unit": "ns",
            "range": 3355443.1999999997,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 102760448,
            "unit": "ns",
            "range": 4594629.827668296,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 119118233.6,
            "unit": "ns",
            "range": 26606569.986138757,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 134.89585369388786,
            "unit": "Mbit/s",
            "range": 2.3106782654090368,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 118.2782796576584,
            "unit": "Mbit/s",
            "range": 2.0806972302842683,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 231833.6,
            "unit": "ns",
            "range": 15016.184037231298,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 938803.2000000001,
            "unit": "ns",
            "range": 471096.272117027,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 200704,
            "unit": "ns",
            "range": 10362.151436839746,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 897843.2,
            "unit": "ns",
            "range": 321794.4398316416,
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
        "date": 1725081787115,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 160.414866937,
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
            "value": 14.449999999999996,
            "unit": "ms",
            "range": 0.49749371855331,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 8.000000000000002,
            "unit": "ms",
            "range": 1.7763568394002505e-15,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 55200,
            "unit": "ns",
            "range": 2315.167380558045,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32401350,
            "unit": "ns",
            "range": 99387.76333130753,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21518850,
            "unit": "ns",
            "range": 128620.08979937776,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15772150,
            "unit": "ns",
            "range": 407861.0394484867,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.5057789379983848,
            "unit": "x",
            "range": 0.010938993939392374,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5693506640000001,
            "unit": "s",
            "range": 0.030263079933959724,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.5869695949599999,
            "unit": "s",
            "range": 0.029388229840596466,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.62329413528,
            "unit": "s",
            "range": 0.025211176382910046,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.326324462890625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.1326751708984375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.1406402587890625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.1419219970703125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 128.06256885000002,
            "unit": "ticks",
            "range": 0.2925367151974709,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.640970825,
            "unit": "ticks",
            "range": 0.14600372655888683,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.88256505,
            "unit": "ticks",
            "range": 0.05407898989207901,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35428.72094076822,
            "unit": "MByte/s",
            "range": 24455.514245371367,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 35706.277066731156,
            "unit": "MByte/s",
            "range": 27987.231899589708,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15840.210143872737,
            "unit": "MByte/s",
            "range": 10939.865170847157,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35262.91441321072,
            "unit": "MByte/s",
            "range": 24351.188075912232,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36776.85267829388,
            "unit": "MByte/s",
            "range": 28589.433291029094,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15953.99966628068,
            "unit": "MByte/s",
            "range": 11013.463365605874,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31150.895049107396,
            "unit": "MByte/s",
            "range": 21243.345427925073,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 35306.941386415725,
            "unit": "MByte/s",
            "range": 27922.79477672165,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15769.348914827422,
            "unit": "MByte/s",
            "range": 10900.147709623616,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31087.402985615332,
            "unit": "MByte/s",
            "range": 21198.609882794157,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36381.30678715467,
            "unit": "MByte/s",
            "range": 28532.46877680611,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15884.039264847366,
            "unit": "MByte/s",
            "range": 10974.568510293087,
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
            "value": 70.04943508612682,
            "unit": "%",
            "range": 0.2522397497292779,
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
            "value": 12820.720571175123,
            "unit": "Ticks",
            "range": 534.3550510933057,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 12820.720571175123,
            "unit": "Ticks",
            "range": 534.3550510933057,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1020.021664715668,
            "unit": "Ticks",
            "range": 112.80208867815875,
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
            "value": 46.52,
            "unit": "ns",
            "range": 28.420584089705123,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 100.59381810700634,
            "unit": "%",
            "range": 1.1406254931258129,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.53227496129935,
            "unit": "%",
            "range": 0.9820212067667903,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.51418084625734,
            "unit": "%",
            "range": 0.5886042161333813,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "TCP client",
            "value": 401.36649223951815,
            "unit": "Mbit/s",
            "range": 23.436777970219858,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 114.53542880444823,
            "unit": "Mbit/s",
            "range": 13.967154169768666,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 163577856,
            "unit": "ns",
            "range": 14036825.983727917,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 180355072,
            "unit": "ns",
            "range": 9189259.655336592,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 97727283.20000002,
            "unit": "ns",
            "range": 6710886.4,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 106115891.2,
            "unit": "ns",
            "range": 6164342.775668673,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 127.97190149909164,
            "unit": "Mbit/s",
            "range": 4.654994969083089,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 123.8760160142474,
            "unit": "Mbit/s",
            "range": 7.571729052734938,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 240025.60000000003,
            "unit": "ns",
            "range": 16708.46714214084,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 468582.4,
            "unit": "ns",
            "range": 53942.9359883201,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 195788.8,
            "unit": "ns",
            "range": 8354.23357107042,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 717619.2,
            "unit": "ns",
            "range": 44448.677777409765,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      }
    ]
  }
}