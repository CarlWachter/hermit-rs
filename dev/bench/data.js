window.BENCHMARK_DATA = {
  "lastUpdate": 1725452024845,
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
        "date": 1725445999700,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 160.085281796,
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
            "value": 14.349999999999996,
            "unit": "ms",
            "range": 0.4769696007084728,
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
            "value": 54800,
            "unit": "ns",
            "range": 400,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32369600,
            "unit": "ns",
            "range": 75237.22482920274,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21526800,
            "unit": "ns",
            "range": 177389.85314836923,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15863250,
            "unit": "ns",
            "range": 687292.6505499677,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.5037994160264903,
            "unit": "x",
            "range": 0.013863426377079754,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5962496691600001,
            "unit": "s",
            "range": 0.007126415663204948,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.60213635264,
            "unit": "s",
            "range": 0.024886127654867425,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.6372154252800001,
            "unit": "s",
            "range": 0.01319320343275994,
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
            "value": 128.185872,
            "unit": "ticks",
            "range": 0.5609091624162493,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.689228525,
            "unit": "ticks",
            "range": 0.23735224014091583,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.98248495,
            "unit": "ticks",
            "range": 0.15174637009084496,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35635.45365578954,
            "unit": "MByte/s",
            "range": 24750.022622861667,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 35967.15942551443,
            "unit": "MByte/s",
            "range": 28040.928829697725,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 13674.823564060323,
            "unit": "MByte/s",
            "range": 9421.00262092244,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35329.86554423768,
            "unit": "MByte/s",
            "range": 24536.247345038806,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36894.10484776339,
            "unit": "MByte/s",
            "range": 28612.67888383455,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 13760.783769662705,
            "unit": "MByte/s",
            "range": 9483.818798158867,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31283.69353518634,
            "unit": "MByte/s",
            "range": 21330.88664692701,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36351.2518412831,
            "unit": "MByte/s",
            "range": 28188.314532229724,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 13723.071197028079,
            "unit": "MByte/s",
            "range": 9447.962070666428,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31247.12924852233,
            "unit": "MByte/s",
            "range": 21309.339488488513,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 37285.551880237035,
            "unit": "MByte/s",
            "range": 28761.32149526322,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 13808.934095133209,
            "unit": "MByte/s",
            "range": 9510.61229333266,
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
            "value": 69.92495579495984,
            "unit": "%",
            "range": 0.3030399881312224,
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
            "value": 13095.722751019657,
            "unit": "Ticks",
            "range": 659.3208837263188,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13095.722751019657,
            "unit": "Ticks",
            "range": 659.3208837263188,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1053.7046965692002,
            "unit": "Ticks",
            "range": 153.67971360922502,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.979999999999972,
            "unit": "ns",
            "range": 0.13999999999999996,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 56.74,
            "unit": "ns",
            "range": 27.532388200081737,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 100.25950665856757,
            "unit": "%",
            "range": 1.0521786621157188,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.86135892276764,
            "unit": "%",
            "range": 1.0263660869542182,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.41344030062338,
            "unit": "%",
            "range": 0.5768349011357027,
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
          "id": "cbcf65a591eed712c8dd12af24cebd7f73882be1",
          "message": "Merge pull request #1300 from hermit-os/split-fix\n\nfix(virtqueue/split): fix off-by-one error",
          "timestamp": "2024-06-29T10:01:25Z",
          "url": "https://github.com/hermit-os/kernel/commit/cbcf65a591eed712c8dd12af24cebd7f73882be1"
        },
        "date": 1725446860806,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 160.21284721,
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
            "value": 14.199999999999994,
            "unit": "ms",
            "range": 0.39999999999999986,
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
            "value": 59950,
            "unit": "ns",
            "range": 10947.48829640845,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32404650,
            "unit": "ns",
            "range": 146993.9709647984,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21527200,
            "unit": "ns",
            "range": 140721.9243756992,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15747950,
            "unit": "ns",
            "range": 274479.95828475343,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.5053511834304019,
            "unit": "x",
            "range": 0.011752134161015103,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5738930179599999,
            "unit": "s",
            "range": 0.029021912500611317,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.5987599046400002,
            "unit": "s",
            "range": 0.02374426603656991,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.6185975401199999,
            "unit": "s",
            "range": 0.02663899825059843,
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
            "value": 128.25323214999997,
            "unit": "ticks",
            "range": 0.6973259562415745,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.612778925,
            "unit": "ticks",
            "range": 0.1367302637874367,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.912444550000004,
            "unit": "ticks",
            "range": 0.1569360873937143,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36393.46309360641,
            "unit": "MByte/s",
            "range": 25188.236547682252,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36624.035394975304,
            "unit": "MByte/s",
            "range": 28232.862357054204,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 14166.610210017045,
            "unit": "MByte/s",
            "range": 9731.819668544258,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36063.19851791768,
            "unit": "MByte/s",
            "range": 24964.933240302817,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 37551.91779153348,
            "unit": "MByte/s",
            "range": 28798.226073376045,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 14227.53116922478,
            "unit": "MByte/s",
            "range": 9773.606580502996,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 30796.88051886358,
            "unit": "MByte/s",
            "range": 21021.289808472287,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36625.50166402791,
            "unit": "MByte/s",
            "range": 28232.09755939612,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 14175.17705982522,
            "unit": "MByte/s",
            "range": 9737.250533623243,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 30738.25858524165,
            "unit": "MByte/s",
            "range": 20979.63884975079,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 37557.74178472856,
            "unit": "MByte/s",
            "range": 28801.85646513331,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 14236.454405721379,
            "unit": "MByte/s",
            "range": 9779.314400029449,
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
            "value": 70.04228945569409,
            "unit": "%",
            "range": 0.3142864329153945,
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
            "value": 13032.018952590519,
            "unit": "Ticks",
            "range": 685.5070014607314,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13032.018952590519,
            "unit": "Ticks",
            "range": 685.5070014607314,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1046.471058366605,
            "unit": "Ticks",
            "range": 152.95610739097216,
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
            "value": 54.25999999999999,
            "unit": "ns",
            "range": 32.279287476646694,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 100.05846037104864,
            "unit": "%",
            "range": 0.8957065332525953,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.83117726124313,
            "unit": "%",
            "range": 0.737870718387238,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.38289994806131,
            "unit": "%",
            "range": 0.5566272767484706,
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
          "id": "cbcf65a591eed712c8dd12af24cebd7f73882be1",
          "message": "Merge pull request #1300 from hermit-os/split-fix\n\nfix(virtqueue/split): fix off-by-one error",
          "timestamp": "2024-06-29T10:01:25Z",
          "url": "https://github.com/hermit-os/kernel/commit/cbcf65a591eed712c8dd12af24cebd7f73882be1"
        },
        "date": 1725447729855,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 159.870153664,
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
            "value": 14.099999999999994,
            "unit": "ms",
            "range": 0.30000000000000004,
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
            "value": 54800,
            "unit": "ns",
            "range": 2158.7033144922902,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32367800,
            "unit": "ns",
            "range": 113790.86079294769,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21527200,
            "unit": "ns",
            "range": 222544.28772718477,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15687050,
            "unit": "ns",
            "range": 459139.57300585625,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.5037240342251352,
            "unit": "x",
            "range": 0.015121702746033963,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5916670702399999,
            "unit": "s",
            "range": 0.01718980193809001,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.60088328712,
            "unit": "s",
            "range": 0.023525109206344864,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.6257147866,
            "unit": "s",
            "range": 0.025814511521104345,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.326271057128906,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.132621765136719,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.140586853027344,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.141868591308594,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 128.24425995000001,
            "unit": "ticks",
            "range": 0.5326041441063368,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.64015632499998,
            "unit": "ticks",
            "range": 0.23407956261585947,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.91640775,
            "unit": "ticks",
            "range": 0.08386998150403713,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35183.03842072092,
            "unit": "MByte/s",
            "range": 24364.312983365566,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36364.2305564497,
            "unit": "MByte/s",
            "range": 28143.335164004813,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 13781.56958939063,
            "unit": "MByte/s",
            "range": 9477.775796901822,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35037.686810525556,
            "unit": "MByte/s",
            "range": 24271.242310235,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 37284.93739999174,
            "unit": "MByte/s",
            "range": 28702.449436718663,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 13870.545915049453,
            "unit": "MByte/s",
            "range": 9540.597068253748,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31010.761334950705,
            "unit": "MByte/s",
            "range": 21163.831119930837,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36095.17378765197,
            "unit": "MByte/s",
            "range": 28093.408281608652,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 13615.460666739851,
            "unit": "MByte/s",
            "range": 9381.72353224255,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 30988.35416465621,
            "unit": "MByte/s",
            "range": 21150.793428141198,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 37030.88784793655,
            "unit": "MByte/s",
            "range": 28667.924996912036,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 13702.927130517295,
            "unit": "MByte/s",
            "range": 9444.381634577874,
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
            "value": 69.94081939866534,
            "unit": "%",
            "range": 0.2420279547574854,
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
            "value": 12774.233446175702,
            "unit": "Ticks",
            "range": 606.2106415075062,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 12774.233446175702,
            "unit": "Ticks",
            "range": 606.2106415075062,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 989.2186262896636,
            "unit": "Ticks",
            "range": 128.58448446186887,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.979999999999972,
            "unit": "ns",
            "range": 0.13999999999999996,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 56.32000000000001,
            "unit": "ns",
            "range": 26.298623538124573,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.84558111621058,
            "unit": "%",
            "range": 0.8385066245652254,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.1648155522013,
            "unit": "%",
            "range": 1.2291794087953776,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.1718186479134,
            "unit": "%",
            "range": 0.5875605764561197,
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
          "id": "cbcf65a591eed712c8dd12af24cebd7f73882be1",
          "message": "Merge pull request #1300 from hermit-os/split-fix\n\nfix(virtqueue/split): fix off-by-one error",
          "timestamp": "2024-06-29T10:01:25Z",
          "url": "https://github.com/hermit-os/kernel/commit/cbcf65a591eed712c8dd12af24cebd7f73882be1"
        },
        "date": 1725448574615,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 160.002220965,
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
            "value": 55000,
            "unit": "ns",
            "range": 1449.137674618944,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32457000,
            "unit": "ns",
            "range": 387241.1393434329,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21570250,
            "unit": "ns",
            "range": 149246.73363259915,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15909950,
            "unit": "ns",
            "range": 245979.16070269042,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.5047504648211718,
            "unit": "x",
            "range": 0.018084910224695102,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5834742409999999,
            "unit": "s",
            "range": 0.025040828371686672,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.59264455764,
            "unit": "s",
            "range": 0.027920635378934442,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.6283219453600001,
            "unit": "s",
            "range": 0.020773799954782988,
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
            "value": 127.9668314,
            "unit": "ticks",
            "range": 0.11691986127660264,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.53842445,
            "unit": "ticks",
            "range": 0.11214952832735085,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.90881445,
            "unit": "ticks",
            "range": 0.05947753211211311,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35939.40068017532,
            "unit": "MByte/s",
            "range": 24840.818402303496,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 35465.155265746005,
            "unit": "MByte/s",
            "range": 27972.37661794048,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15121.376883905403,
            "unit": "MByte/s",
            "range": 10466.81697655386,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35520.87247589447,
            "unit": "MByte/s",
            "range": 24570.217582541114,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36386.67972068233,
            "unit": "MByte/s",
            "range": 28539.403876956352,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15249.255284539486,
            "unit": "MByte/s",
            "range": 10558.825502052254,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31632.421639470627,
            "unit": "MByte/s",
            "range": 21561.641728597628,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 35480.72958757067,
            "unit": "MByte/s",
            "range": 27993.56284701694,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15125.3806795774,
            "unit": "MByte/s",
            "range": 10469.534619889568,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31554.194781582755,
            "unit": "MByte/s",
            "range": 21508.653362936453,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36409.79271880364,
            "unit": "MByte/s",
            "range": 28566.305480540846,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15253.712659411505,
            "unit": "MByte/s",
            "range": 10561.815342079593,
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
            "value": 69.97039603191789,
            "unit": "%",
            "range": 0.3492446216027686,
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
            "value": 12986.046434851203,
            "unit": "Ticks",
            "range": 511.63755038634815,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 12986.046434851203,
            "unit": "Ticks",
            "range": 511.63755038634815,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1045.4460040975578,
            "unit": "Ticks",
            "range": 125.13798924162177,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.979999999999972,
            "unit": "ns",
            "range": 0.13999999999999985,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 50.99999999999999,
            "unit": "ns",
            "range": 27.722914709676544,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 100.10636908024894,
            "unit": "%",
            "range": 0.6785359752024509,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.4342317205659,
            "unit": "%",
            "range": 0.6930790889778051,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.36474652900485,
            "unit": "%",
            "range": 0.42348287022483844,
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
          "id": "cbcf65a591eed712c8dd12af24cebd7f73882be1",
          "message": "Merge pull request #1300 from hermit-os/split-fix\n\nfix(virtqueue/split): fix off-by-one error",
          "timestamp": "2024-06-29T10:01:25Z",
          "url": "https://github.com/hermit-os/kernel/commit/cbcf65a591eed712c8dd12af24cebd7f73882be1"
        },
        "date": 1725449411011,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 159.962648986,
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
            "value": 14.349999999999996,
            "unit": "ms",
            "range": 0.7262919523166973,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 8.350000000000003,
            "unit": "ms",
            "range": 1.5256146302392357,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 59600,
            "unit": "ns",
            "range": 11159.749101122301,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 33077550,
            "unit": "ns",
            "range": 2933952.6832415005,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 22216600,
            "unit": "ns",
            "range": 2757870.8345388477,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 16176400,
            "unit": "ns",
            "range": 1786097.2369946716,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.4933079688263373,
            "unit": "x",
            "range": 0.03757359360049103,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5922680823199999,
            "unit": "s",
            "range": 0.019761520369307718,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.59203900448,
            "unit": "s",
            "range": 0.02763052250939944,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.62779111364,
            "unit": "s",
            "range": 0.020104058444244594,
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
            "value": 128.0593336,
            "unit": "ticks",
            "range": 0.3094459626964612,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.58615287500001,
            "unit": "ticks",
            "range": 0.17573586945398195,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.93706579999999,
            "unit": "ticks",
            "range": 0.1370134805391787,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35189.29496440234,
            "unit": "MByte/s",
            "range": 24336.26081684288,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36167.562648511186,
            "unit": "MByte/s",
            "range": 28122.275697156394,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15477.795116615252,
            "unit": "MByte/s",
            "range": 10661.297046699168,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 34788.79509991705,
            "unit": "MByte/s",
            "range": 24076.360135795134,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 37089.52844828598,
            "unit": "MByte/s",
            "range": 28684.948028330706,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15600.823440209708,
            "unit": "MByte/s",
            "range": 10745.41695053833,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 30924.894388175595,
            "unit": "MByte/s",
            "range": 21102.881188394284,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 35904.36730964631,
            "unit": "MByte/s",
            "range": 28065.493185230353,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15358.791055436397,
            "unit": "MByte/s",
            "range": 10599.518071250439,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 30870.4940013284,
            "unit": "MByte/s",
            "range": 21064.289888397325,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36828.9393093545,
            "unit": "MByte/s",
            "range": 28633.41653098493,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15481.686493291005,
            "unit": "MByte/s",
            "range": 10684.146717957958,
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
            "value": 69.95683423630715,
            "unit": "%",
            "range": 0.3206310670550606,
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
            "value": 12592.881672797095,
            "unit": "Ticks",
            "range": 438.5856042808203,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 12592.881672797095,
            "unit": "Ticks",
            "range": 438.5856042808203,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 957.1534167932425,
            "unit": "Ticks",
            "range": 88.49539242370189,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.979999999999972,
            "unit": "ns",
            "range": 0.1399999999999999,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 48.079999999999984,
            "unit": "ns",
            "range": 24.210609244709236,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 100.26820723654876,
            "unit": "%",
            "range": 0.9687088014298686,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.63765245485858,
            "unit": "%",
            "range": 0.8834490236788678,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.21685267804392,
            "unit": "%",
            "range": 0.4594922395704103,
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
          "id": "cbcf65a591eed712c8dd12af24cebd7f73882be1",
          "message": "Merge pull request #1300 from hermit-os/split-fix\n\nfix(virtqueue/split): fix off-by-one error",
          "timestamp": "2024-06-29T10:01:25Z",
          "url": "https://github.com/hermit-os/kernel/commit/cbcf65a591eed712c8dd12af24cebd7f73882be1"
        },
        "date": 1725450279128,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 165.357608413,
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
            "value": 14.349999999999996,
            "unit": "ms",
            "range": 0.4769696007084729,
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
            "value": 54500,
            "unit": "ns",
            "range": 500,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32393500,
            "unit": "ns",
            "range": 133866.9115203604,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21511950,
            "unit": "ns",
            "range": 259349.66261786423,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15730450,
            "unit": "ns",
            "range": 288004.76992577745,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.506054607963096,
            "unit": "x",
            "range": 0.01904469703208628,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.58808848808,
            "unit": "s",
            "range": 0.023665380787543044,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.60556749296,
            "unit": "s",
            "range": 0.010854595543242742,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.6294418207600001,
            "unit": "s",
            "range": 0.018355647818014,
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
            "value": 127.98920079999999,
            "unit": "ticks",
            "range": 0.25354479225348064,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.5767688,
            "unit": "ticks",
            "range": 0.08653405170991858,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.92951660000001,
            "unit": "ticks",
            "range": 0.06734324971843868,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36190.14581050901,
            "unit": "MByte/s",
            "range": 25019.746511258578,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36368.61690522493,
            "unit": "MByte/s",
            "range": 28107.757192281333,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 14317.842617231428,
            "unit": "MByte/s",
            "range": 9863.897944975011,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35880.336152182404,
            "unit": "MByte/s",
            "range": 24806.23418257873,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 37291.20747052218,
            "unit": "MByte/s",
            "range": 28672.646065589757,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 14397.100480151577,
            "unit": "MByte/s",
            "range": 9919.518059205478,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31061.357955212457,
            "unit": "MByte/s",
            "range": 21198.35875440038,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36443.528666680955,
            "unit": "MByte/s",
            "range": 28189.598322262853,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 14265.911878931078,
            "unit": "MByte/s",
            "range": 9823.402948822391,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 30872.80204209902,
            "unit": "MByte/s",
            "range": 21076.938597427303,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 37371.064501155015,
            "unit": "MByte/s",
            "range": 28756.42605469468,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 14345.841935106944,
            "unit": "MByte/s",
            "range": 9879.81313247887,
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
            "value": 70.00669398565374,
            "unit": "%",
            "range": 0.26784498019774444,
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
            "value": 12956.440371505034,
            "unit": "Ticks",
            "range": 660.1437522949411,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 12956.440371505034,
            "unit": "Ticks",
            "range": 660.1437522949411,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1025.4116095292306,
            "unit": "Ticks",
            "range": 150.17369774765825,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.979999999999972,
            "unit": "ns",
            "range": 0.1399999999999999,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 54.06,
            "unit": "ns",
            "range": 27.240712178649073,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.77985343069476,
            "unit": "%",
            "range": 1.4911700916355668,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.34571482173955,
            "unit": "%",
            "range": 1.2828332250835128,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.23068757297979,
            "unit": "%",
            "range": 0.4940452464878593,
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
          "id": "cbcf65a591eed712c8dd12af24cebd7f73882be1",
          "message": "Merge pull request #1300 from hermit-os/split-fix\n\nfix(virtqueue/split): fix off-by-one error",
          "timestamp": "2024-06-29T10:01:25Z",
          "url": "https://github.com/hermit-os/kernel/commit/cbcf65a591eed712c8dd12af24cebd7f73882be1"
        },
        "date": 1725451159875,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 160.257543776,
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
            "value": 14.299999999999995,
            "unit": "ms",
            "range": 0.45825756949558405,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 8.100000000000001,
            "unit": "ms",
            "range": 0.29999999999999993,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 54500,
            "unit": "ns",
            "range": 500,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32357700,
            "unit": "ns",
            "range": 84539.3990988817,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21580800,
            "unit": "ns",
            "range": 161760.1928782233,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15724100,
            "unit": "ns",
            "range": 329310.32476981345,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.4994584089356995,
            "unit": "x",
            "range": 0.011852135328525375,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5742448944,
            "unit": "s",
            "range": 0.028988329548226045,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.5873654670400001,
            "unit": "s",
            "range": 0.030255175050785222,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.62877740832,
            "unit": "s",
            "range": 0.022611587504595493,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.326271057128906,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.132621765136719,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.140586853027344,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.141868591308594,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 128.54931875,
            "unit": "ticks",
            "range": 1.997225430827625,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.863616375,
            "unit": "ticks",
            "range": 1.0205984834289001,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.9307673,
            "unit": "ticks",
            "range": 0.13999609354839165,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35709.38105378062,
            "unit": "MByte/s",
            "range": 24772.769670794332,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36309.36014938185,
            "unit": "MByte/s",
            "range": 28151.362471325574,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 13961.877981689444,
            "unit": "MByte/s",
            "range": 9609.483618518223,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35405.77061147636,
            "unit": "MByte/s",
            "range": 24561.91502186804,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 37378.78205187542,
            "unit": "MByte/s",
            "range": 28747.62485606572,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 14043.116832684,
            "unit": "MByte/s",
            "range": 9653.60918876059,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 30820.936868882538,
            "unit": "MByte/s",
            "range": 21028.299148878905,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36156.82648958112,
            "unit": "MByte/s",
            "range": 28125.534985287213,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 14016.974831585578,
            "unit": "MByte/s",
            "range": 9651.214028774728,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 30762.3149352606,
            "unit": "MByte/s",
            "range": 20986.66546099947,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 37229.533016185684,
            "unit": "MByte/s",
            "range": 28725.254528091926,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 14102.072242839631,
            "unit": "MByte/s",
            "range": 9697.54878306292,
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
            "value": 69.9953164261918,
            "unit": "%",
            "range": 0.2939889675170625,
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
            "value": 12632.413100198122,
            "unit": "Ticks",
            "range": 603.5459599743767,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 12632.413100198122,
            "unit": "Ticks",
            "range": 603.5459599743767,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 960.6579115370214,
            "unit": "Ticks",
            "range": 118.99876661875555,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 26.919999999999973,
            "unit": "ns",
            "range": 0.27129319932501067,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 61.5,
            "unit": "ns",
            "range": 31.338953396691473,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.48349643253977,
            "unit": "%",
            "range": 1.621393377082788,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.5931630220032,
            "unit": "%",
            "range": 0.6297016771227475,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.21708650135116,
            "unit": "%",
            "range": 0.39748680458620106,
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
          "id": "cbcf65a591eed712c8dd12af24cebd7f73882be1",
          "message": "Merge pull request #1300 from hermit-os/split-fix\n\nfix(virtqueue/split): fix off-by-one error",
          "timestamp": "2024-06-29T10:01:25Z",
          "url": "https://github.com/hermit-os/kernel/commit/cbcf65a591eed712c8dd12af24cebd7f73882be1"
        },
        "date": 1725452023823,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 160.832865507,
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
            "value": 14.149999999999995,
            "unit": "ms",
            "range": 0.3570714214271425,
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
            "value": 54600,
            "unit": "ns",
            "range": 489.89794855663564,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32394100,
            "unit": "ns",
            "range": 135186.87066427717,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21502500,
            "unit": "ns",
            "range": 165857.61966216686,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15720650,
            "unit": "ns",
            "range": 307796.7308143477,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.5066258919591788,
            "unit": "x",
            "range": 0.014203453549955228,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5912061659599999,
            "unit": "s",
            "range": 0.019389377885537594,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.6069389108,
            "unit": "s",
            "range": 0.0114102475904235,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.62694713444,
            "unit": "s",
            "range": 0.022543866300115633,
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
            "value": 127.94535495,
            "unit": "ticks",
            "range": 0.17632666474571418,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.5572059,
            "unit": "ticks",
            "range": 0.09655922611687545,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.88758335,
            "unit": "ticks",
            "range": 0.050959991713377284,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36114.91698638734,
            "unit": "MByte/s",
            "range": 24987.887198651224,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36502.8197983642,
            "unit": "MByte/s",
            "range": 28211.777860340895,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 14197.171089973266,
            "unit": "MByte/s",
            "range": 9756.82859063116,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35809.32887483547,
            "unit": "MByte/s",
            "range": 24776.460046315184,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 37581.05257757397,
            "unit": "MByte/s",
            "range": 28815.388776938427,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 14311.761343294767,
            "unit": "MByte/s",
            "range": 9840.164672854831,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31380.85483249314,
            "unit": "MByte/s",
            "range": 21410.504361273095,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36521.30826822943,
            "unit": "MByte/s",
            "range": 28228.403079491156,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 14207.350693792378,
            "unit": "MByte/s",
            "range": 9763.273799034498,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31326.454445645944,
            "unit": "MByte/s",
            "range": 21372.526558586902,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 37599.589369128276,
            "unit": "MByte/s",
            "range": 28831.181431669607,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 14311.170249075978,
            "unit": "MByte/s",
            "range": 9837.709796734844,
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
            "value": 69.97203717306185,
            "unit": "%",
            "range": 0.32534546694422223,
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
            "value": 13049.313740564625,
            "unit": "Ticks",
            "range": 564.4803305759342,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 13049.313740564625,
            "unit": "Ticks",
            "range": 564.4803305759342,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 1055.0682181527113,
            "unit": "Ticks",
            "range": 123.71180842915533,
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
            "value": 51.88000000000001,
            "unit": "ns",
            "range": 24.139295764375564,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.98914930242105,
            "unit": "%",
            "range": 1.1546452564077794,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.6459079880877,
            "unit": "%",
            "range": 1.0275452158929939,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.411007148820445,
            "unit": "%",
            "range": 0.659318076993257,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          }
        ]
      }
    ]
  }
}