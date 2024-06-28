window.BENCHMARK_DATA = {
  "lastUpdate": 1719589005340,
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
      }
    ]
  }
}