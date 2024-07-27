window.BENCHMARK_DATA = {
  "lastUpdate": 1722104163788,
  "repoUrl": "https://github.com/CarlWachter/hermit-rs",
  "entries": {
    "Benchmark": [
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
          "id": "f71d2db307df06659e02315dd968caf104460c72",
          "message": "Merge pull request #1336 from hermit-os/vsock-fixup\n\nfix(virtio-spec): export vsock feature bits",
          "timestamp": "2024-07-23T20:03:34Z",
          "url": "https://github.com/hermit-os/kernel/commit/f71d2db307df06659e02315dd968caf104460c72"
        },
        "date": 1722102754471,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 245.843601053,
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
            "value": 14.444444444444445,
            "unit": "ms",
            "range": 0.3553130495936273,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Pi-Calculation-Parallel",
            "value": 8.444444444444446,
            "unit": "ms",
            "range": 0.35051692305775517,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq row-major",
            "value": 54777.77777777778,
            "unit": "ns",
            "range": 4.872342467180936,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32464444.44444444,
            "unit": "ns",
            "range": 95.19848774479263,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 21443000,
            "unit": "ns",
            "range": 51.49586429543127,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 15993333.333333334,
            "unit": "ns",
            "range": 131.75536357488346,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.5140729517274154,
            "unit": "x",
            "range": 0.31040856881602136,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.5902922002,
            "unit": "s",
            "range": 0.025225373778368726,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.6129648660000001,
            "unit": "s",
            "range": 0.019276071933865387,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.6370022398999999,
            "unit": "s",
            "range": 0.019017020890881118,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.326332092285156,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.13275146484375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.140739440917969,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.1420135498046875,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 128.06395799999999,
            "unit": "ticks",
            "range": 0.34779514677568985,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.714428,
            "unit": "ticks",
            "range": 0.3718305912382927,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 35.48838975,
            "unit": "ticks",
            "range": 0.5592268540540936,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 17224.697300171592,
            "unit": "MByte/s",
            "range": 17.676911942804118,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 20878.698050827086,
            "unit": "MByte/s",
            "range": 41.49797412615611,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 8455.865789182593,
            "unit": "MByte/s",
            "range": 11.056181299438736,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 17224.697300171592,
            "unit": "MByte/s",
            "range": 17.676911942804118,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 20878.698050827086,
            "unit": "MByte/s",
            "range": 41.49797412615611,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 8455.865789182593,
            "unit": "MByte/s",
            "range": 11.056181299438736,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 15574.394411689478,
            "unit": "MByte/s",
            "range": 8.333642559935884,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 20873.877706873292,
            "unit": "MByte/s",
            "range": 41.26800763025154,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 8481.82339363671,
            "unit": "MByte/s",
            "range": 10.884528886512863,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 15574.394411689478,
            "unit": "MByte/s",
            "range": 8.333642559935884,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 20873.877706873292,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 8481.82339363671,
            "unit": "MByte/s",
            "range": 10.884528886512863,
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
            "value": 70.10068644836394,
            "unit": "%",
            "range": 0.3462278403639006,
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
            "value": 21487.820874693374,
            "unit": "Ticks",
            "range": 7.523529716882562,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 21487.820874693374,
            "unit": "Ticks",
            "range": 7.523529716882562,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 3149.033504713477,
            "unit": "Ticks",
            "range": 7.917309110707105,
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
            "value": 44.333333333333336,
            "unit": "ns",
            "range": 1.0187586154899821,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 101.01090459178496,
            "unit": "%",
            "range": 0.5251158815152763,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 75.20362378844771,
            "unit": "%",
            "range": 0.3485189469211698,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.80231560189824,
            "unit": "%",
            "range": 0.40353504304299215,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "TCP client",
            "value": 366.3058689055338,
            "unit": "Mbit/s",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 110.88890207234725,
            "unit": "Mbit/s",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 197132288,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 197132288,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 102760448,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 115343360,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 134.20892637340313,
            "unit": "Mbit/s",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 113.15191187440001,
            "unit": "Mbit/s",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 217088,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 1409024,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
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
          "id": "f71d2db307df06659e02315dd968caf104460c72",
          "message": "Merge pull request #1336 from hermit-os/vsock-fixup\n\nfix(virtio-spec): export vsock feature bits",
          "timestamp": "2024-07-23T20:03:34Z",
          "url": "https://github.com/hermit-os/kernel/commit/f71d2db307df06659e02315dd968caf104460c72"
        },
        "date": 1722104163031,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Build",
            "value": 247.781244849,
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
            "value": 14.222222222222221,
            "unit": "ms",
            "range": 0.3607748018888732,
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
            "value": 58000,
            "unit": "ns",
            "range": 20.59874197081079,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-seq z-order",
            "value": 32479333.333333332,
            "unit": "ns",
            "range": 13.322807198742666,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par z-order",
            "value": 16857333.333333332,
            "unit": "ns",
            "range": 77.29979697564941,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-par strassen",
            "value": 12846333.333333334,
            "unit": "ns",
            "range": 70.355397194491,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "Matmul-Speedup",
            "value": 1.9267778373562443,
            "unit": "x",
            "range": 0.31030685318464074,
            "group": "Demo",
            "plot_group": "none"
          },
          {
            "name": "1 core",
            "value": 0.6068035771,
            "unit": "s",
            "range": 0.021706946197003942,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "2 cores",
            "value": 0.6161040843,
            "unit": "s",
            "range": 0.029134869340916546,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "4 cores",
            "value": 0.6421821797000001,
            "unit": "s",
            "range": 0.027083315652795637,
            "group": "General",
            "plot_group": "Startup Time"
          },
          {
            "name": "rusty_demo",
            "value": 4.356575012207031,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "alloc_benchmarks",
            "value": 4.1629180908203125,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "micro_benchmarks",
            "value": 4.1710052490234375,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "mutex test",
            "value": 4.172294616699219,
            "unit": "MB",
            "range": 0,
            "group": "File Size",
            "plot_group": "Benchmark File Size"
          },
          {
            "name": "1 thread",
            "value": 127.13915225,
            "unit": "ticks",
            "range": 0.2850021495789598,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.22346525,
            "unit": "ticks",
            "range": 0.29710195657102584,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.846014249999996,
            "unit": "ticks",
            "range": 0.34325532481245574,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 17959.80809421089,
            "unit": "MByte/s",
            "range": 21.955205876482733,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 21413.982566705406,
            "unit": "MByte/s",
            "range": 40.64633283124559,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 7952.860477235491,
            "unit": "MByte/s",
            "range": 3.987379852444029,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 17959.80809421089,
            "unit": "MByte/s",
            "range": 21.955205876482733,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 21413.982566705406,
            "unit": "MByte/s",
            "range": null,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 7952.860477235491,
            "unit": "MByte/s",
            "range": 3.987379852444029,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 15506.783879649298,
            "unit": "MByte/s",
            "range": 6.860666552813807,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 21283.470138487104,
            "unit": "MByte/s",
            "range": 40.04601029187433,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 8344.223021874937,
            "unit": "MByte/s",
            "range": 8.626444179343473,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 15506.783879649298,
            "unit": "MByte/s",
            "range": 6.860666552813807,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 21283.470138487104,
            "unit": "MByte/s",
            "range": 40.04601029187433,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 8344.223021874937,
            "unit": "MByte/s",
            "range": 8.626444179343473,
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
            "value": 69.89433724076135,
            "unit": "%",
            "range": 0.32312192431839626,
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
            "value": 22425.91684960904,
            "unit": "Ticks",
            "range": 6.767911698646156,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Allocation time (no fail)",
            "value": 22425.91684960904,
            "unit": "Ticks",
            "range": 6.767911698646156,
            "group": "Allocations",
            "plot_group": "none"
          },
          {
            "name": "Average Deallocation time",
            "value": 4596.432260186923,
            "unit": "Ticks",
            "range": 4.451105731478594,
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
            "value": 47.44444444444444,
            "unit": "ns",
            "range": 1.4126086076777835,
            "group": "Mutex",
            "plot_group": "Mutex Stress Test Average Time per Iteration"
          },
          {
            "name": "2 Threads",
            "value": 100.20480751413331,
            "unit": "%",
            "range": 0.460897821107818,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "4 Threads",
            "value": 74.18766081913965,
            "unit": "%",
            "range": 0.415926834794933,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "8 Threads",
            "value": 49.2065937938237,
            "unit": "%",
            "range": 0.35164707435220827,
            "group": "General",
            "plot_group": "Multithreaded Pi Efficiency"
          },
          {
            "name": "TCP client",
            "value": 376.43569606519077,
            "unit": "Mbit/s",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 99.56515416743146,
            "unit": "Mbit/s",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 188743680,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 197132288,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 102760448,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 111149056,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 124.23840775710912,
            "unit": "Mbit/s",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 124.97657204395003,
            "unit": "Mbit/s",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 217088,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 770048,
            "unit": "ns",
            "range": 0,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      }
    ]
  }
}