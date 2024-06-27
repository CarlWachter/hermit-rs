window.BENCHMARK_DATA = {
  "lastUpdate": 1719482124712,
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
          "id": "15e7a2f3363279e7ebe82afe0b83d54bd9e0b6ab",
          "message": "feat(bench): Bench plot groups",
          "timestamp": "2024-06-27T10:02:33+02:00",
          "tree_id": "bbe055763ffa8d2c6838388f66c60a2ac92413df",
          "url": "https://github.com/CarlWachter/hermit-rs/commit/15e7a2f3363279e7ebe82afe0b83d54bd9e0b6ab"
        },
        "date": 1719482123567,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 0.421244783,
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
            "value": 19610500,
            "unit": "ns",
            "range": 76.74040143210016,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 18272000,
            "unit": "ns",
            "range": 109.58516031065626,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 8745000,
            "unit": "ns",
            "range": 262.7765289378125,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15201750,
            "unit": "ns",
            "range": 1215.9983220679258,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 2.1331145748879448,
            "unit": "x",
            "range": 0.4241570552726361,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 1420.5,
            "unit": "ms",
            "range": 2.577792535522849,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.680818865,
            "unit": "s",
            "range": 0.0038780977407345987,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.690374791,
            "unit": "s",
            "range": 0.0336124528437687,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 35.8087158203125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 29.78429412841797,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 29.775108337402344,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 29.869644165039062,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 1972.169412,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 976.9306555,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 325.014555,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "block size 4096",
            "value": 8902.077151335312,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy_builtin speed"
          },
          {
            "name": "block size 1048576",
            "value": 28147.606046105775,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy_builtin speed"
          },
          {
            "name": "block size 16777216",
            "value": 8562.390662284863,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy_builtin speed"
          },
          {
            "name": "block size 4096",
            "value": 8902.077151335312,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset_builtin speed"
          },
          {
            "name": "block size 1048576",
            "value": 28147.606046105775,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset_builtin speed"
          },
          {
            "name": "block size 16777216",
            "value": 8562.390662284863,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset_builtin speed"
          },
          {
            "name": "block size 4096",
            "value": 8902.077151335312,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy_rust speed"
          },
          {
            "name": "block size 1048576",
            "value": 28147.606046105775,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy_rust speed"
          },
          {
            "name": "block size 16777216",
            "value": 8562.390662284863,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy_rust speed"
          },
          {
            "name": "block size 4096",
            "value": 8902.077151335312,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset_rust speed"
          },
          {
            "name": "block size 1048576",
            "value": 28147.606046105775,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset_rust speed"
          },
          {
            "name": "block size 16777216",
            "value": 8562.390662284863,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset_rust speed"
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
            "value": 68.78744582337565,
            "unit": "%",
            "range": 0.5229608249932094,
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
            "value": 272548.6990386096,
            "unit": "Ticks",
            "range": 20.02327472624786,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 272548.6990386096,
            "unit": "Ticks",
            "range": 20.02327472624786,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 263948.4156603147,
            "unit": "Ticks",
            "range": 15.217550890490635,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Mutex Stress Test Average Time per Iteration (1 Threads)",
            "value": 78,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "none"
          },
          {
            "name": "Mutex Stress Test Average Time per Iteration (2 Threads)",
            "value": 150,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "none"
          },
          {
            "name": "2 Threads",
            "value": 0.9899440538364692,
            "unit": "%",
            "range": 0.2202338469086679,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 0.7341831426141894,
            "unit": "%",
            "range": 0.17344034868709576,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 0.4722939536208278,
            "unit": "%",
            "range": 0.2079565731093693,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          }
        ]
      }
    ]
  }
}