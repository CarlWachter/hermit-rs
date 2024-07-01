window.BENCHMARK_DATA = {
  "lastUpdate": 1719846910606,
  "repoUrl": "https://github.com/CarlWachter/hermit-rs",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "CarlWachter",
            "username": "CarlWachter",
            "email": "carlwachter@web.de"
          },
          "committer": {
            "name": "CarlWachter",
            "username": "CarlWachter",
            "email": "carlwachter@web.de"
          },
          "id": "3dc3bb743235abb1e9c2a1d050034ff8f7446cef",
          "message": "mend",
          "timestamp": "2024-07-01T14:22:58Z",
          "url": "https://github.com/CarlWachter/hermit-rs/commit/3dc3bb743235abb1e9c2a1d050034ff8f7446cef"
        },
        "date": 1719846909367,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 0.425672666,
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
            "value": 19555500,
            "unit": "ns",
            "range": 68.80632354534582,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 18253750,
            "unit": "ns",
            "range": 64.02539069296395,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 8914750,
            "unit": "ns",
            "range": 681.3570411938963,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 11571000,
            "unit": "ns",
            "range": 1291.6312705468072,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 2.0966114687603126,
            "unit": "x",
            "range": 0.40609983627232477,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Laplace 1000 Iterations",
            "value": 1468.25,
            "unit": "ms",
            "range": 2.0011968191980403,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.6678705644,
            "unit": "s",
            "range": 0.007859385578744355,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.6512290674,
            "unit": "s",
            "range": 0.03490750669396043,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.7149040886,
            "unit": "s",
            "range": 0.0045541870086143995,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 35.80860900878906,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 29.7843017578125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 29.77513885498047,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 29.869857788085938,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 2044.9507,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 1061.0302035,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 341.141755,
            "unit": "ticks",
            "range": 0,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.19293248132999,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 57.73563717770867,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.080433610512046,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 46.19293248132999,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 57.73563717770867,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 58.080433610512046,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 7957.559681697613,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28008.850796851806,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 7278.9342184517345,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 7957.559681697613,
            "unit": "MByte/s",
            "range": 0,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 28008.850796851806,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 7278.9342184517345,
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
            "value": 70.88360890826263,
            "unit": "%",
            "range": 0.9684407389686429,
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
            "value": 262272.1885255499,
            "unit": "Ticks",
            "range": 78.76908574007462,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 262272.1885255499,
            "unit": "Ticks",
            "range": 78.76908574007462,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 254705.28483810788,
            "unit": "Ticks",
            "range": 84.57021940120772,
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
            "value": 260,
            "unit": "ns",
            "range": 0,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 92.59300241815549,
            "unit": "%",
            "range": 0.5656798735742355,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 53.04766163548271,
            "unit": "%",
            "range": 0.9437239796066657,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 25.84093191162699,
            "unit": "%",
            "range": 0.6538673644824299,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          }
        ]
      }
    ]
  }
}