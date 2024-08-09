window.BENCHMARK_DATA = {
  "lastUpdate": 1723196802127,
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
        "date": 1723196800727,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 241.451041438,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 128.08234335999998,
            "unit": "ticks",
            "range": 0.3061566566974973,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.72862134999998,
            "unit": "ticks",
            "range": 0.39873155479362704,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.95567854000001,
            "unit": "ticks",
            "range": 0.4702286873185522,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36150.2765133527,
            "unit": "MByte/s",
            "range": 25524.406623226623,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36907.05649927666,
            "unit": "MByte/s",
            "range": 29174.327278872406,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 16121.272844258468,
            "unit": "MByte/s",
            "range": 11370.546852755933,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36059.17902263448,
            "unit": "MByte/s",
            "range": 25469.906481329173,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 37280.235659067745,
            "unit": "MByte/s",
            "range": 29409.72649171069,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 16187.202254088907,
            "unit": "MByte/s",
            "range": 11415.912785927574,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31402.33593607478,
            "unit": "MByte/s",
            "range": 21925.60293968722,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36811.23236258049,
            "unit": "MByte/s",
            "range": 29119.787934420125,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 16122.453909061536,
            "unit": "MByte/s",
            "range": 11371.453111341438,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31380.575781335905,
            "unit": "MByte/s",
            "range": 21909.843434995255,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 37180.737565701755,
            "unit": "MByte/s",
            "range": 29353.939538702434,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 16188.104459956834,
            "unit": "MByte/s",
            "range": 11416.662126049203,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP client",
            "value": 403.3986254022757,
            "unit": "Mbit/s",
            "range": 31.90015953306115,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 109.21026442181632,
            "unit": "Mbit/s",
            "range": 9.590002768697952,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 190421401.6,
            "unit": "ns",
            "range": 5033164.8,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 191260262.39999998,
            "unit": "ns",
            "range": 3844143.1135312114,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 101502156.80000001,
            "unit": "ns",
            "range": 4613734.4,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 125199974.4,
            "unit": "ns",
            "range": 25323490.31599069,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 126.54495464610164,
            "unit": "Mbit/s",
            "range": 3.0854657268416155,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 120.56967739373182,
            "unit": "Mbit/s",
            "range": 4.9500687679561,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 244940.8,
            "unit": "ns",
            "range": 10490.87875060998,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 907673.5999999999,
            "unit": "ns",
            "range": 843830.0813736377,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 211353.60000000003,
            "unit": "ns",
            "range": 8232.858108822234,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 1192755.2,
            "unit": "ns",
            "range": 466860.6353653732,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      }
    ]
  }
}