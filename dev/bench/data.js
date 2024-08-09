window.BENCHMARK_DATA = {
  "lastUpdate": 1723205834070,
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
        "date": 1723201319674,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 241.801179831,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 127.95299771999998,
            "unit": "ticks",
            "range": 0.21467363765772954,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.63762172000003,
            "unit": "ticks",
            "range": 0.13029395767663832,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.87906798,
            "unit": "ticks",
            "range": 0.11045735735069655,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35976.17144291123,
            "unit": "MByte/s",
            "range": 25451.04885588654,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 37059.78585578711,
            "unit": "MByte/s",
            "range": 29211.607627992184,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 16362.924563354627,
            "unit": "MByte/s",
            "range": 11525.672785640405,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35854.72726598953,
            "unit": "MByte/s",
            "range": 25364.099661742614,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 37490.506012145896,
            "unit": "MByte/s",
            "range": 29461.513836541424,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 16421.19355831899,
            "unit": "MByte/s",
            "range": 11563.191803763106,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31280.41844111506,
            "unit": "MByte/s",
            "range": 21856.852955656588,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36898.54783938892,
            "unit": "MByte/s",
            "range": 29119.178434720325,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 16296.456869090725,
            "unit": "MByte/s",
            "range": 11505.522663427053,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31258.658286376183,
            "unit": "MByte/s",
            "range": 21841.041414837262,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 37325.57639942789,
            "unit": "MByte/s",
            "range": 29366.661173747536,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 16354.775716709533,
            "unit": "MByte/s",
            "range": 11543.193635435031,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP client",
            "value": 409.39268457789075,
            "unit": "Mbit/s",
            "range": 25.70455746035083,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 102.68732900469675,
            "unit": "Mbit/s",
            "range": 11.665904276599134,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 186227097.6,
            "unit": "ns",
            "range": 5371329.92031231,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 191260262.4,
            "unit": "ns",
            "range": 3844143.1135312123,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 102760448.00000001,
            "unit": "ns",
            "range": 7018412.991863959,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 128135987.2,
            "unit": "ns",
            "range": 27876349.080304,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 124.6541808670446,
            "unit": "Mbit/s",
            "range": 3.788131854743859,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 124.00404525844034,
            "unit": "Mbit/s",
            "range": 5.47900093216565,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 259686.4,
            "unit": "ns",
            "range": 25723.401778147465,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 1207500.7999999998,
            "unit": "ns",
            "range": 957694.9037363414,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 207257.6,
            "unit": "ns",
            "range": 4915.2,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 1066598.4,
            "unit": "ns",
            "range": 467989.10692006495,
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
        "date": 1723205833246,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 242.947306295,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 128.14345032000003,
            "unit": "ticks",
            "range": 0.5067240002384888,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.7312894,
            "unit": "ticks",
            "range": 0.1980147686494864,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.89577636,
            "unit": "ticks",
            "range": 0.08394605214368554,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36302.50544043323,
            "unit": "MByte/s",
            "range": 25707.522981301452,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36339.68490666687,
            "unit": "MByte/s",
            "range": 29007.58862023464,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15253.953008166107,
            "unit": "MByte/s",
            "range": 10797.93733206996,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36181.06126351153,
            "unit": "MByte/s",
            "range": 25621.475111218326,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36765.97150027156,
            "unit": "MByte/s",
            "range": 29254.931305601367,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15269.330658419214,
            "unit": "MByte/s",
            "range": 10807.650692951544,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31215.423669354535,
            "unit": "MByte/s",
            "range": 21817.30385566433,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36535.891144973684,
            "unit": "MByte/s",
            "range": 29026.869986576694,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15325.237646224194,
            "unit": "MByte/s",
            "range": 10843.983253942275,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31156.659229374625,
            "unit": "MByte/s",
            "range": 21778.262631018355,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36965.107911420826,
            "unit": "MByte/s",
            "range": 29277.266756475503,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15340.374207943954,
            "unit": "MByte/s",
            "range": 10853.50953695522,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP client",
            "value": 412.5546567150839,
            "unit": "Mbit/s",
            "range": 13.37601615861606,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 100.24933107683012,
            "unit": "Mbit/s",
            "range": 6.433317569832917,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 180355072,
            "unit": "ns",
            "range": 10610843.0713239,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 190421401.6,
            "unit": "ns",
            "range": 3355443.200000001,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 101502156.80000001,
            "unit": "ns",
            "range": 1922071.5567656057,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 123312537.59999998,
            "unit": "ns",
            "range": 26672607.739705224,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 131.73315737174974,
            "unit": "Mbit/s",
            "range": 6.271928153855229,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 121.42576085938677,
            "unit": "Mbit/s",
            "range": 5.431490017619216,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 233881.60000000003,
            "unit": "ns",
            "range": 19767.17887408317,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 642252.7999999999,
            "unit": "ns",
            "range": 249720.32513065494,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 206438.4,
            "unit": "ns",
            "range": 3754.0460093078236,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 1413939.2,
            "unit": "ns",
            "range": 741963.6901623692,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      }
    ]
  }
}