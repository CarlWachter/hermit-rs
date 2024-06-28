window.BENCHMARK_DATA = {
  "lastUpdate": 1719598648209,
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
          "id": "1ef4a4532fc367bd5b1b21d2816f643c9b8f6043",
          "message": "Update submodule to merge commit 920e4dc2f00b3655f602b08c0f28ef61016d1cb0",
          "timestamp": "2024-06-28T16:36:25+02:00",
          "tree_id": "01a5ee5c2cc74b31a5f443a128caa649f0fc1fcd",
          "url": "https://github.com/CarlWachter/hermit-rs/commit/1ef4a4532fc367bd5b1b21d2816f643c9b8f6043"
        },
        "date": 1719586582653,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 0.425783324,
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
            "value": 1,
            "unit": "ms",
            "range": 0,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 13,
            "unit": "ms",
            "range": 0,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 19605750,
            "unit": "ns",
            "range": 83.58310701372895,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 18241750,
            "unit": "ns",
            "range": 50.97142054599508,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 18547500,
            "unit": "ns",
            "range": 2509.7362353909552,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 9775500,
            "unit": "ns",
            "range": 225.66043281912866,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.6030801332344824,
            "unit": "x",
            "range": 0.5787679020376886,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 1447,
            "unit": "ms",
            "range": 2.1544489986392477,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.6598278376,
            "unit": "s",
            "range": 0.003840461799710049,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.6558787112,
            "unit": "s",
            "range": 0.0379420519259763,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.6879368888000001,
            "unit": "s",
            "range": 0.03347988976828664,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 35.802162170410156,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 29.778282165527344,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 29.769119262695312,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 29.86382293701172,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 1950.360208,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 973.324352,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 334.788263,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.79019277559382,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.50260476997482,
            "unit": "MByte/s",
            "range": 0.0029278147226497577,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.52632562959752,
            "unit": "MByte/s",
            "range": 0.004840478241933327,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.79019277559382,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.50260476997482,
            "unit": "MByte/s",
            "range": 0.0029278147226497577,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.52632562959752,
            "unit": "MByte/s",
            "range": 0.004840478241933327,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 8130.081300813007,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28074.903843454336,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 8279.940653525366,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 8130.081300813007,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28074.903843454336,
            "unit": "MByte/s",
            "range": 0.07668992701261984,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 8279.940653525366,
            "unit": "MByte/s",
            "range": 0,
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
            "value": 70.42275385101905,
            "unit": "%",
            "range": 0.6581081889308976,
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
            "value": 265295.98227680754,
            "unit": "Ticks",
            "range": 53.46752328718408,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 265295.98227680754,
            "unit": "Ticks",
            "range": 53.46752328718408,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 258575.57455057395,
            "unit": "Ticks",
            "range": 59.20210063100264,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 82,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 204,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.36397338880312,
            "unit": "%",
            "range": 0.4152857208481691,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 73.69093186873476,
            "unit": "%",
            "range": 0.43271298986978507,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 47.50208790564568,
            "unit": "%",
            "range": 0.4028061664119743,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          }
        ]
      },
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
          "id": "719d5b4473fd66d66bf5d160460e29604aeea66a",
          "message": "Update submodule to merge commit 93cff110854ee8bbfefc3797d14c62d16b187ab2",
          "timestamp": "2024-06-28T16:36:27+02:00",
          "tree_id": "4ff33704303de565a0e07e277a1ca988615f5158",
          "url": "https://github.com/CarlWachter/hermit-rs/commit/719d5b4473fd66d66bf5d160460e29604aeea66a"
        },
        "date": 1719587797661,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 0.427410091,
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
            "value": 1,
            "unit": "ms",
            "range": 0,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 13.5,
            "unit": "ms",
            "range": 0.4630985259443652,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 19610000,
            "unit": "ns",
            "range": 103.06990258825918,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 18302500,
            "unit": "ns",
            "range": 11.185199995555049,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 11481750,
            "unit": "ns",
            "range": 960.8542703028312,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 10821000,
            "unit": "ns",
            "range": 327.6998007718406,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.9235735907651972,
            "unit": "x",
            "range": 0.4929584944373446,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 1503.75,
            "unit": "ms",
            "range": 1.8040714934213093,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.6440119148,
            "unit": "s",
            "range": 0.03152847844588333,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.6798315642,
            "unit": "s",
            "range": 0.02547008162604976,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.7136587999999999,
            "unit": "s",
            "range": 0.020448799820323695,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 35.816253662109375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 29.79241943359375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 29.783233642578125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 29.87792205810547,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 1958.267763,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 983.3189675,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 328.08738,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.85450115574349,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.82902127392754,
            "unit": "MByte/s",
            "range": 0.005064130352962521,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.83636633882452,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.85450115574349,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.82902127392754,
            "unit": "MByte/s",
            "range": 0.005064130352962521,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.83636633882452,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 9174.311926605506,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28215.90812900313,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 9298.676391532394,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 9174.311926605506,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28215.90812900313,
            "unit": "MByte/s",
            "range": 0.0766769315876715,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 9298.676391532394,
            "unit": "MByte/s",
            "range": 0,
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
            "value": 70.30254654119138,
            "unit": "%",
            "range": 0.7450425183254382,
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
            "value": 264160.4768033299,
            "unit": "Ticks",
            "range": 26.330331328288512,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 264160.4768033299,
            "unit": "Ticks",
            "range": 26.330331328288512,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 255524.6799545706,
            "unit": "Ticks",
            "range": 27.896849509534803,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 82,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 241,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.34607656428233,
            "unit": "%",
            "range": 0.4525317921797735,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 73.27167159720119,
            "unit": "%",
            "range": 0.4406807520521811,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 47.30176139380389,
            "unit": "%",
            "range": 0.3951589728064737,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          }
        ]
      },
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
          "id": "f66983ce3ddec47781018f469b68476b54f150b2",
          "message": "Update submodule to merge commit dbe57cd97638e9d01a4ec58dcdcb0471da8181e9",
          "timestamp": "2024-06-28T16:36:29+02:00",
          "tree_id": "84f1135a2ffb4cb6a78e2650ff40fad2e6b9fd33",
          "url": "https://github.com/CarlWachter/hermit-rs/commit/f66983ce3ddec47781018f469b68476b54f150b2"
        },
        "date": 1719589004087,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 0.435650309,
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
            "value": 1,
            "unit": "ms",
            "range": 0,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 13.5,
            "unit": "ms",
            "range": 0.4745726151721807,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 19923500,
            "unit": "ns",
            "range": 274.5943398781767,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 18339000,
            "unit": "ns",
            "range": 126.2334700287028,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 11421250,
            "unit": "ns",
            "range": 973.450098103246,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 9602500,
            "unit": "ns",
            "range": 318.9500458031769,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.9163299542260082,
            "unit": "x",
            "range": 0.49607604902099917,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 1510.75,
            "unit": "ms",
            "range": 3.6914320570732677,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.6559828306,
            "unit": "s",
            "range": 0.021938159540090454,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.6864592372,
            "unit": "s",
            "range": 0.008312589031785313,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.6810349683999999,
            "unit": "s",
            "range": 0.031046523478870512,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 35.816253662109375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 29.79241180419922,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 29.783233642578125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 29.877914428710938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 1952.882101,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 972.304228,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 327.556964,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.734795613159804,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.55425218344499,
            "unit": "MByte/s",
            "range": 0.0067271187801704446,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.54540194640231,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.734795613159804,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.55425218344499,
            "unit": "MByte/s",
            "range": 0.0067271187801704446,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.54540194640231,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 8108.108108108108,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28134.935148974484,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 8523.950168987312,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 8108.108108108108,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28134.935148974484,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 8523.950168987312,
            "unit": "MByte/s",
            "range": 0,
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
            "value": 68.75657396624878,
            "unit": "%",
            "range": 0.5464492829826224,
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
            "value": 275367.36353516055,
            "unit": "Ticks",
            "range": 39.86989143345677,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 275367.36353516055,
            "unit": "Ticks",
            "range": 39.86989143345677,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 267995.0001501335,
            "unit": "Ticks",
            "range": 58.31229923040838,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 82,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 206,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.55003293100951,
            "unit": "%",
            "range": 0.4438670285049816,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 73.7589751496599,
            "unit": "%",
            "range": 0.4036677908228317,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 47.37505867402913,
            "unit": "%",
            "range": 0.3513330614156063,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          }
        ]
      },
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
          "id": "84f7950d53fe52e8d1f03aae5cc677012b422fe9",
          "message": "Update submodule to merge commit bdffecad75d096ba9d96268d1d5ffe09589ab29c",
          "timestamp": "2024-06-28T16:36:31+02:00",
          "tree_id": "19e6382524be93b8414eea6f2a7ccabfaef88b5d",
          "url": "https://github.com/CarlWachter/hermit-rs/commit/84f7950d53fe52e8d1f03aae5cc677012b422fe9"
        },
        "date": 1719590204693,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 0.435903688,
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
            "value": 1,
            "unit": "ms",
            "range": 0,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 13,
            "unit": "ms",
            "range": 0,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 19544500,
            "unit": "ns",
            "range": 86.6353447167716,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 18252000,
            "unit": "ns",
            "range": 123.45877043965113,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 7559750,
            "unit": "ns",
            "range": 398.38884707322165,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 8615250,
            "unit": "ns",
            "range": 386.62132371061705,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 2.425480813113031,
            "unit": "x",
            "range": 0.32894738982812943,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 1421,
            "unit": "ms",
            "range": 1.1533884196086996,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.6700056942,
            "unit": "s",
            "range": 0.006190640580905792,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.6547759796000001,
            "unit": "s",
            "range": 0.027591880258729364,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.6829128604,
            "unit": "s",
            "range": 0.027091540449924838,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 35.816253662109375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 29.79241180419922,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 29.783233642578125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 29.877914428710938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 1954.460097,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 973.382665,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 327.346502,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.731883606455085,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.57353069176861,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.55421511172517,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.731883606455085,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.57353069176861,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.55421511172517,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 9230.76923076923,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28180.127374175732,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 8928.960077503374,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 9230.76923076923,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28180.127374175732,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 8928.960077503374,
            "unit": "MByte/s",
            "range": 0,
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
            "value": 69.06967951569484,
            "unit": "%",
            "range": 0.6123665156304312,
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
            "value": 275753.22289663815,
            "unit": "Ticks",
            "range": 21.597219408450922,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 275753.22289663815,
            "unit": "Ticks",
            "range": 21.597219408450922,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 270548.4649013466,
            "unit": "Ticks",
            "range": 24.364305778923264,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 82,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 151,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.57539121642564,
            "unit": "%",
            "range": 0.33560628676052756,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 73.78939206695729,
            "unit": "%",
            "range": 0.3506099131102331,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 47.3334465328836,
            "unit": "%",
            "range": 0.35995819728785733,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          }
        ]
      },
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
          "id": "f1c1d70f2f570f61574d38bce20b04a848015f3c",
          "message": "Update submodule to merge commit 50cd0c88d76ba2a4a28c0258e6e340f778c20006",
          "timestamp": "2024-06-28T16:36:32+02:00",
          "tree_id": "3880b4ad80e0990954f7c732514d68bdcf4b0db6",
          "url": "https://github.com/CarlWachter/hermit-rs/commit/f1c1d70f2f570f61574d38bce20b04a848015f3c"
        },
        "date": 1719591409703,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 0.417829884,
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
            "value": 1,
            "unit": "ms",
            "range": 0,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 14,
            "unit": "ms",
            "range": 0,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 19639000,
            "unit": "ns",
            "range": 140.1069231520666,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 18276000,
            "unit": "ns",
            "range": 91.18034690536385,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 7434500,
            "unit": "ns",
            "range": 102.513945360203,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 9896000,
            "unit": "ns",
            "range": 637.5379395003616,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 2.4643713357983423,
            "unit": "x",
            "range": 0.35080515954693803,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 1445.25,
            "unit": "ms",
            "range": 2.2563026126368992,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.669722571,
            "unit": "s",
            "range": 0.006451197528092943,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.6594002588,
            "unit": "s",
            "range": 0.029352071656851463,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.699265637,
            "unit": "s",
            "range": 0.01949775232330415,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 35.87190246582031,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 29.848045349121094,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 29.838851928710938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 29.933570861816406,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 1950.159465,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 985.17823,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 327.660404,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.47776039165183,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.528860698268545,
            "unit": "MByte/s",
            "range": 0.0059590748911625725,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.44725500896038,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.47776039165183,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.528860698268545,
            "unit": "MByte/s",
            "range": 0.0059590748911625725,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.44725500896038,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 9230.76923076923,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28052.064631956913,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 8269.969003122429,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 9230.76923076923,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28052.064631956913,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 8269.969003122429,
            "unit": "MByte/s",
            "range": 0,
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
            "value": 71.1553375004822,
            "unit": "%",
            "range": 0.5575173939492781,
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
            "value": 259322.5272284713,
            "unit": "Ticks",
            "range": 30.08104336350513,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 259322.5272284713,
            "unit": "Ticks",
            "range": 30.08104336350513,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 251070.6510788439,
            "unit": "Ticks",
            "range": 43.9562137552758,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 78,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 213,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 98.9676779898518,
            "unit": "%",
            "range": 0.4278576055654364,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 73.20593053139078,
            "unit": "%",
            "range": 0.42853286162915083,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 47.17994907095993,
            "unit": "%",
            "range": 0.42539480726382534,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          }
        ]
      },
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
          "id": "3ffe5e3516f83d74dfa2975e05b2692a4ef15eb6",
          "message": "Update submodule to merge commit 15ae5d0da9419fbf8644f058ca84334f8c6dd816",
          "timestamp": "2024-06-28T16:36:34+02:00",
          "tree_id": "097eac1a7b9e1c9ac971c1576a50da7acd313810",
          "url": "https://github.com/CarlWachter/hermit-rs/commit/3ffe5e3516f83d74dfa2975e05b2692a4ef15eb6"
        },
        "date": 1719592617440,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 0.433222373,
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
            "value": 1,
            "unit": "ms",
            "range": 0,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 13.25,
            "unit": "ms",
            "range": 0.4492227436111378,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 19546250,
            "unit": "ns",
            "range": 92.75012373511122,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 18270000,
            "unit": "ns",
            "range": 64.4770289577183,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 7868500,
            "unit": "ns",
            "range": 241.47965101864787,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 8791250,
            "unit": "ns",
            "range": 241.1208856751615,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 2.3306431695368963,
            "unit": "x",
            "range": 0.38051052581862727,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 1439.5,
            "unit": "ms",
            "range": 1.9129758017105636,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.620282316,
            "unit": "s",
            "range": 0.02465068471167691,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.6460248829999999,
            "unit": "s",
            "range": 0.03353090350572374,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.6895555743999999,
            "unit": "s",
            "range": 0.026503021594273635,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 35.87229919433594,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 29.848426818847656,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 29.83922576904297,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 29.933944702148438,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 2060.822562,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 1057.318738,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 335.736956,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.535436735073745,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.26725195732797,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.28217882213903,
            "unit": "MByte/s",
            "range": 0.004482845699489818,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.535436735073745,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.26725195732797,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.28217882213903,
            "unit": "MByte/s",
            "range": 0.004482845699489818,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 8021.390374331551,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28083.57672433161,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 7387.966111399446,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 8021.390374331551,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28083.57672433161,
            "unit": "MByte/s",
            "range": 0.0767699891434425,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 7387.966111399446,
            "unit": "MByte/s",
            "range": 0,
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
            "value": 69.40468276643081,
            "unit": "%",
            "range": 0.614397966564609,
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
            "value": 272050.64522576384,
            "unit": "Ticks",
            "range": 24.708717892828627,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 272050.64522576384,
            "unit": "Ticks",
            "range": 24.708717892828627,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 266017.90881438786,
            "unit": "Ticks",
            "range": 21.24291539538708,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 78,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 322,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.38147453988284,
            "unit": "%",
            "range": 0.39887444513119036,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 73.50552518933318,
            "unit": "%",
            "range": 0.32491747697058787,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 47.3108603450411,
            "unit": "%",
            "range": 0.3328237070407775,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          }
        ]
      },
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
          "id": "97d07f9a75ba7a75acc2ef9ada18f75ece938120",
          "message": "Update submodule to merge commit a087fab3df5f2eed6985c643d300ed92e81d2f8c",
          "timestamp": "2024-06-28T16:36:36+02:00",
          "tree_id": "b17291a6c92f9a4c3cc6673e661484cc204c4960",
          "url": "https://github.com/CarlWachter/hermit-rs/commit/97d07f9a75ba7a75acc2ef9ada18f75ece938120"
        },
        "date": 1719593826580,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 0.424586285,
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
            "value": 1,
            "unit": "ms",
            "range": 0,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 13.25,
            "unit": "ms",
            "range": 0.4492227436111378,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 19671000,
            "unit": "ns",
            "range": 98.4860892798675,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 18283500,
            "unit": "ns",
            "range": 103.62806856006728,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 7655250,
            "unit": "ns",
            "range": 399.2574227070808,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 9142250,
            "unit": "ns",
            "range": 197.99524914851878,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 2.401986725808813,
            "unit": "x",
            "range": 0.37789460621225934,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 1451.5,
            "unit": "ms",
            "range": 2.3081405962509978,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.6649109635999999,
            "unit": "s",
            "range": 0.0057482489168547415,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.6707761139999999,
            "unit": "s",
            "range": 0.02292220498357815,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.6863972274000001,
            "unit": "s",
            "range": 0.028581094728047998,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 36.03166198730469,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 30.007797241210938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 29.99859619140625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 30.093307495117188,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 1945.901169,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 977.130861,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 323.885173,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.705691866982306,
            "unit": "MByte/s",
            "range": 0.003919059353912419,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.9596916172286,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 59.05272977314689,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.705691866982306,
            "unit": "MByte/s",
            "range": 0.003919059353912419,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.9596916172286,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 59.05272977314689,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 9202.453987730061,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28117.531280753552,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 8256.240685928477,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 9202.453987730061,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28117.531280753552,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 8256.240685928477,
            "unit": "MByte/s",
            "range": 0,
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
            "value": 68.5383674440227,
            "unit": "%",
            "range": 0.5628666639538165,
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
            "value": 277559.9609295623,
            "unit": "Ticks",
            "range": 34.17348938380508,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 277559.9609295623,
            "unit": "Ticks",
            "range": 34.17348938380508,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 271738.04651295213,
            "unit": "Ticks",
            "range": 45.591333511119146,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 78,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 247,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 98.99908819838069,
            "unit": "%",
            "range": 0.4206399923718911,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 73.35677260803561,
            "unit": "%",
            "range": 0.4234980438949216,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 47.162978626780706,
            "unit": "%",
            "range": 0.3989149429965707,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          }
        ]
      },
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
          "id": "6416d9ad35caa5e01e68b5b706a206f25c622908",
          "message": "Update submodule to merge commit ad9bdc1fd6a7c325aad1dc176651fed90113bc6d",
          "timestamp": "2024-06-28T16:36:37+02:00",
          "tree_id": "a7f7ffed39c664bb40782107847cb5d503a87075",
          "url": "https://github.com/CarlWachter/hermit-rs/commit/6416d9ad35caa5e01e68b5b706a206f25c622908"
        },
        "date": 1719595032135,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 0.427303054,
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
            "value": 1,
            "unit": "ms",
            "range": 0,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 13,
            "unit": "ms",
            "range": 0,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 19608250,
            "unit": "ns",
            "range": 66.67579290337619,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 18254250,
            "unit": "ns",
            "range": 63.11761789565193,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 9663500,
            "unit": "ns",
            "range": 616.8257082286749,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 9339250,
            "unit": "ns",
            "range": 323.88995988492684,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.939000988778949,
            "unit": "x",
            "range": 0.4105679255198068,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 1444,
            "unit": "ms",
            "range": 0.9139823030601141,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.658229388,
            "unit": "s",
            "range": 0.021360525000242388,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.6633536734000001,
            "unit": "s",
            "range": 0.0334842732691815,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.6534943614,
            "unit": "s",
            "range": 0.004433484480496746,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 36.03166198730469,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 30.007797241210938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 29.99859619140625,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 30.093307495117188,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 1969.543194,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 979.9238375,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 321.60147,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.78362573099366,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.74968451419409,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.663682308265834,
            "unit": "MByte/s",
            "range": 0.0031373339194281087,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.78362573099366,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.74968451419409,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.663682308265834,
            "unit": "MByte/s",
            "range": 0.0031373339194281087,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 8021.390374331551,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28085.15418749649,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 7996.237770129154,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 8021.390374331551,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28085.15418749649,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 7996.237770129154,
            "unit": "MByte/s",
            "range": 0,
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
            "value": 69.17101552495768,
            "unit": "%",
            "range": 0.5126786678631763,
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
            "value": 272442.4587793708,
            "unit": "Ticks",
            "range": 18.10239115978688,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 272442.4587793708,
            "unit": "Ticks",
            "range": 18.10239115978688,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 266421.07419019355,
            "unit": "Ticks",
            "range": 34.433507172691066,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 78,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 258,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 98.91638326821196,
            "unit": "%",
            "range": 0.39113471602788397,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 73.30845032608859,
            "unit": "%",
            "range": 0.43119849908372754,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 47.26337945898418,
            "unit": "%",
            "range": 0.3318201195096394,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          }
        ]
      },
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
          "id": "f4a02397adeee584d8dc121eb90505c87d54fb84",
          "message": "Update submodule to merge commit 2143b3bc85fb274eedfac5a0e0794b1151f9f68c",
          "timestamp": "2024-06-28T16:36:40+02:00",
          "tree_id": "42abae8f522272787d1c19825179c640d1689b2d",
          "url": "https://github.com/CarlWachter/hermit-rs/commit/f4a02397adeee584d8dc121eb90505c87d54fb84"
        },
        "date": 1719596239683,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 0.433072242,
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
            "value": 1,
            "unit": "ms",
            "range": 0,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 13.25,
            "unit": "ms",
            "range": 0.4492227436111378,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 19602750,
            "unit": "ns",
            "range": 102.78923020077964,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 18253750,
            "unit": "ns",
            "range": 34.82323625477049,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 7893250,
            "unit": "ns",
            "range": 129.61986654386718,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 9282500,
            "unit": "ns",
            "range": 156.0906605033664,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 2.3141088477991194,
            "unit": "x",
            "range": 0.3162266111125173,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 1439.75,
            "unit": "ms",
            "range": 0.8325625963648287,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.654863747,
            "unit": "s",
            "range": 0.021640196633331436,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.6433167222,
            "unit": "s",
            "range": 0.03275840143244731,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.7114138249999999,
            "unit": "s",
            "range": 0.029375819790156164,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 36.4814453125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 30.457839965820312,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 30.448623657226562,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 30.54327392578125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 1937.625674,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 970.7641445,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 325.386623,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.673719584292485,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.520486237357545,
            "unit": "MByte/s",
            "range": 0.006373990107560814,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.531580130572365,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.673719584292485,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.520486237357545,
            "unit": "MByte/s",
            "range": 0.006373990107560814,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.531580130572365,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 9259.25925925926,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28172.982110156365,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 7315.359190994427,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 9259.25925925926,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28172.98211015636,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 7315.359190994427,
            "unit": "MByte/s",
            "range": 0,
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
            "value": 68.86470630298251,
            "unit": "%",
            "range": 0.6858098172651025,
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
            "value": 278478.2530932281,
            "unit": "Ticks",
            "range": 41.443955127764156,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 278478.2530932281,
            "unit": "Ticks",
            "range": 41.443955127764156,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 273924.09440251987,
            "unit": "Ticks",
            "range": 47.24864748872889,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 78,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 265,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.30029354864561,
            "unit": "%",
            "range": 0.34222465505061733,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 72.88212990781449,
            "unit": "%",
            "range": 0.5280346720120948,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 47.42931422832122,
            "unit": "%",
            "range": 0.39499619761257176,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          }
        ]
      },
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
          "id": "faf58032fa79a9a73b2cee288967435c1e67a74f",
          "message": "Update submodule to merge commit c0d939fe2a4ed342b778a963d2d262e14c371e44",
          "timestamp": "2024-06-28T16:36:42+02:00",
          "tree_id": "1ccdca6b126020452edfc6dc820444d03c0b684e",
          "url": "https://github.com/CarlWachter/hermit-rs/commit/faf58032fa79a9a73b2cee288967435c1e67a74f"
        },
        "date": 1719597445351,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 0.426194185,
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
            "value": 1,
            "unit": "ms",
            "range": 0,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 13.25,
            "unit": "ms",
            "range": 0.4492227436111378,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 19590500,
            "unit": "ns",
            "range": 101.37530458141764,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 18263750,
            "unit": "ns",
            "range": 42.306454371562005,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 12638000,
            "unit": "ns",
            "range": 479.84144916294395,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 10833500,
            "unit": "ns",
            "range": 78.28561427318076,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.592234325183162,
            "unit": "x",
            "range": 0.45463264711168544,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 1441.25,
            "unit": "ms",
            "range": 2.1013000719070867,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.6577849689999999,
            "unit": "s",
            "range": 0.028122787765144937,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.6685184721999999,
            "unit": "s",
            "range": 0.028976895972252514,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.7056514022,
            "unit": "s",
            "range": 0.03484635718444556,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 36.49409484863281,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 30.470481872558594,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 30.461227416992188,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 30.555885314941406,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 1943.325215,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 965.443418,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 324.578056,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.636715531580194,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.14870006545789,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.16468942106167,
            "unit": "MByte/s",
            "range": 0.0037683682549782475,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.636715531580194,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.14870006545789,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.16468942106167,
            "unit": "MByte/s",
            "range": 0.0037683682549782475,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 9146.341463414634,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 27936.86269031988,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 10305.646141469468,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 9146.341463414634,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 27936.86269031988,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 10305.646141469468,
            "unit": "MByte/s",
            "range": 0,
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
            "value": 70.26067561155494,
            "unit": "%",
            "range": 0.7132661240592232,
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
            "value": 267303.86747877416,
            "unit": "Ticks",
            "range": 39.42618761774761,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 267303.86747877416,
            "unit": "Ticks",
            "range": 39.42618761774761,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 260578.4760456253,
            "unit": "Ticks",
            "range": 29.002109499889926,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 82,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 161,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.76854598805616,
            "unit": "%",
            "range": 0.38165118014139177,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 72.77814219150405,
            "unit": "%",
            "range": 0.6075287856561693,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 47.18169629854993,
            "unit": "%",
            "range": 0.3953983739829709,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          }
        ]
      },
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
          "id": "2a2d697a4771f8818adaf7cfda2dbd3b25c706cb",
          "message": "Update submodule to merge commit abb2ec0620fd11325007f7acc284f9d08324968e",
          "timestamp": "2024-06-28T16:36:43+02:00",
          "tree_id": "a05e91f615be96189efac8756604f87d14c2770b",
          "url": "https://github.com/CarlWachter/hermit-rs/commit/2a2d697a4771f8818adaf7cfda2dbd3b25c706cb"
        },
        "date": 1719598647465,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 0.421231354,
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
            "value": 1,
            "unit": "ms",
            "range": 0,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 14,
            "unit": "ms",
            "range": 0.4670134329257045,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 19699750,
            "unit": "ns",
            "range": 112.44616240573835,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 18570750,
            "unit": "ns",
            "range": 262.2261318647241,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 10910750,
            "unit": "ns",
            "range": 939.096721130916,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 10102750,
            "unit": "ns",
            "range": 285.82373031566317,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 2.004745638372378,
            "unit": "x",
            "range": 0.49861533271162534,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 1528.5,
            "unit": "ms",
            "range": 3.347113790704577,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.6752709572,
            "unit": "s",
            "range": 0.024955096929242943,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.6844120838000001,
            "unit": "s",
            "range": 0.02691300242701257,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.7027807813999999,
            "unit": "s",
            "range": 0.03532787239616205,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 36.49913024902344,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 30.47552490234375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 30.466278076171875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 30.560935974121094,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 1920.258408,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 962.4383055,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 324.539252,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.680982167865295,
            "unit": "MByte/s",
            "range": 0.0057821739007346,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.730831431237675,
            "unit": "MByte/s",
            "range": 0.004685553966715147,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.65880556549746,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.680982167865295,
            "unit": "MByte/s",
            "range": 0.0057821739007346,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 58.730831431237675,
            "unit": "MByte/s",
            "range": 0.004685553966715147,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.65880556549746,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 9174.311926605506,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28113.5788585887,
            "unit": "MByte/s",
            "range": 0.01134120855791347,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 8186.743717569622,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 9174.311926605506,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28113.578858588702,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 8186.743717569622,
            "unit": "MByte/s",
            "range": 0,
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
            "value": 69.41349591681916,
            "unit": "%",
            "range": 0.5181048234216321,
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
            "value": 270358.77889200405,
            "unit": "Ticks",
            "range": 13.837592724106806,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 270358.77889200405,
            "unit": "Ticks",
            "range": 13.837592724106806,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 262778.66031251894,
            "unit": "Ticks",
            "range": 25.67736456736151,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "1 Threads",
            "value": 82,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 204,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 99.04394205737643,
            "unit": "%",
            "range": 0.36772417108351696,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 73.53303618521919,
            "unit": "%",
            "range": 0.36917121109691303,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 47.26985936169219,
            "unit": "%",
            "range": 0.31953123271145945,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          }
        ]
      }
    ]
  }
}