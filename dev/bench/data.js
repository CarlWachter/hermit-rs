window.BENCHMARK_DATA = {
  "lastUpdate": 1723245902969,
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
        "date": 1723210323764,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 242.757664499,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 128.00132296,
            "unit": "ticks",
            "range": 0.13153631000191052,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.77016655999999,
            "unit": "ticks",
            "range": 0.5403337069692083,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.86173588,
            "unit": "ticks",
            "range": 0.16029187441310183,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36253.51498377286,
            "unit": "MByte/s",
            "range": 25682.12456711667,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36739.70010153768,
            "unit": "MByte/s",
            "range": 29119.327388524995,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 16326.60591726965,
            "unit": "MByte/s",
            "range": 11507.422358090469,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36084.85807570917,
            "unit": "MByte/s",
            "range": 25569.386737257235,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 37111.07371823895,
            "unit": "MByte/s",
            "range": 29352.441353905575,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 16375.732496623787,
            "unit": "MByte/s",
            "range": 11543.313178754475,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31532.158728316164,
            "unit": "MByte/s",
            "range": 22017.94747920784,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36761.64113908309,
            "unit": "MByte/s",
            "range": 29087.704172115893,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 16209.265060629714,
            "unit": "MByte/s",
            "range": 11430.717349525685,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31508.70995486739,
            "unit": "MByte/s",
            "range": 22001.08356565621,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 37132.858873524434,
            "unit": "MByte/s",
            "range": 29321.434192447727,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 16257.995125586775,
            "unit": "MByte/s",
            "range": 11466.554171489795,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP client",
            "value": 402.73680242856057,
            "unit": "Mbit/s",
            "range": 20.009852857368784,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 106.12152644201659,
            "unit": "Mbit/s",
            "range": 9.936030847255195,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 189582540.8,
            "unit": "ns",
            "range": 6968101.138946547,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 191260262.4,
            "unit": "ns",
            "range": 3844143.1135312114,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 101921587.20000002,
            "unit": "ns",
            "range": 3138729.7087950977,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 128974847.99999999,
            "unit": "ns",
            "range": 30278256.14594785,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 126.26027270647864,
            "unit": "Mbit/s",
            "range": 4.598420772653282,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 119.08454807425056,
            "unit": "Mbit/s",
            "range": 7.58046299183184,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 248627.19999999998,
            "unit": "ns",
            "range": 26421.581288030433,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 1012531.2,
            "unit": "ns",
            "range": 831164.6961603699,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 199884.80000000002,
            "unit": "ns",
            "range": 9999.61036040905,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 1087897.6,
            "unit": "ns",
            "range": 429385.8504876936,
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
        "date": 1723214752263,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 241.808882379,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 128.1910206,
            "unit": "ticks",
            "range": 0.36440937156884246,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.77905349999999,
            "unit": "ticks",
            "range": 0.3935985586449981,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.86526309999999,
            "unit": "ticks",
            "range": 0.09007097417020625,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36543.61254260725,
            "unit": "MByte/s",
            "range": 25864.590277801963,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 35560.535727756695,
            "unit": "MByte/s",
            "range": 28789.80969478131,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 16154.436856632557,
            "unit": "MByte/s",
            "range": 11397.365491798253,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36485.471898529104,
            "unit": "MByte/s",
            "range": 25827.25687991961,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 35990.96074152455,
            "unit": "MByte/s",
            "range": 29044.705991472954,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 16160.694142785927,
            "unit": "MByte/s",
            "range": 11400.915868193924,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31498.6582904814,
            "unit": "MByte/s",
            "range": 21995.398607652995,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 35781.33992631297,
            "unit": "MByte/s",
            "range": 28870.2754130515,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 16203.392142019531,
            "unit": "MByte/s",
            "range": 11429.313254854693,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31476.898135742515,
            "unit": "MByte/s",
            "range": 21979.69105393206,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36209.83829394508,
            "unit": "MByte/s",
            "range": 29121.72798943461,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 16214.521872312063,
            "unit": "MByte/s",
            "range": 11435.512311742117,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP client",
            "value": 403.72659907410014,
            "unit": "Mbit/s",
            "range": 14.1393427684398,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 107.28969595390856,
            "unit": "Mbit/s",
            "range": 8.802714296361518,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 186227097.6,
            "unit": "ns",
            "range": 6551712.291330798,
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
            "value": 101921587.19999999,
            "unit": "ns",
            "range": 2516582.3999999994,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 124570828.79999998,
            "unit": "ns",
            "range": 25892821.595042393,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 126.51916494035605,
            "unit": "Mbit/s",
            "range": 3.087110014257077,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 120.03519744192542,
            "unit": "Mbit/s",
            "range": 4.493632805016709,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 234291.19999999998,
            "unit": "ns",
            "range": 14400.221864957497,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 1091174.4,
            "unit": "ns",
            "range": 565625.4183459579,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 206438.4,
            "unit": "ns",
            "range": 10394.482721136246,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 1228800,
            "unit": "ns",
            "range": 555511.8362533781,
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
        "date": 1723219222215,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 244.35587717,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 128.15670290000003,
            "unit": "ticks",
            "range": 0.7766788641335443,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.71587900000002,
            "unit": "ticks",
            "range": 0.35922405091279624,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.90836864,
            "unit": "ticks",
            "range": 0.09582032093575134,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35911.486287040425,
            "unit": "MByte/s",
            "range": 25411.13626426301,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36534.08886057706,
            "unit": "MByte/s",
            "range": 29079.934423246807,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15481.069009688612,
            "unit": "MByte/s",
            "range": 10945.959786222957,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35855.14277674954,
            "unit": "MByte/s",
            "range": 25374.382859353125,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36904.713066033146,
            "unit": "MByte/s",
            "range": 29315.043682795265,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15532.005612949617,
            "unit": "MByte/s",
            "range": 10983.02290207386,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31320.485918195776,
            "unit": "MByte/s",
            "range": 21879.783156528967,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36645.71623303424,
            "unit": "MByte/s",
            "range": 29053.81200697857,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15740.02848965064,
            "unit": "MByte/s",
            "range": 11104.178880912199,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31306.454522948912,
            "unit": "MByte/s",
            "range": 21869.77825041308,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 37015.55381597951,
            "unit": "MByte/s",
            "range": 29287.421330684207,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15791.055392257478,
            "unit": "MByte/s",
            "range": 11140.776334849967,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP client",
            "value": 397.559022969204,
            "unit": "Mbit/s",
            "range": 14.529086681096988,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 105.33154198278682,
            "unit": "Mbit/s",
            "range": 9.225339824644928,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 187065958.4,
            "unit": "ns",
            "range": 6277459.417590196,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 189582540.8,
            "unit": "ns",
            "range": 2516582.3999999994,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 102760448,
            "unit": "ns",
            "range": 5305421.53566195,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 119327948.79999998,
            "unit": "ns",
            "range": 20600182.228718877,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 127.95404691202862,
            "unit": "Mbit/s",
            "range": 6.07060942973569,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 121.83382679904774,
            "unit": "Mbit/s",
            "range": 4.99995579475813,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 242073.6,
            "unit": "ns",
            "range": 16632.988061079104,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 859340.7999999999,
            "unit": "ns",
            "range": 621388.4451035118,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 213811.19999999998,
            "unit": "ns",
            "range": 15193.896543020162,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 1584332.7999999998,
            "unit": "ns",
            "range": 823743.7890699753,
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
        "date": 1723223723587,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 242.5647884,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 128.55347722,
            "unit": "ticks",
            "range": 1.4459744659458313,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.76218084000001,
            "unit": "ticks",
            "range": 0.34814938534675616,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.88120992,
            "unit": "ticks",
            "range": 0.18792035212768585,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36173.86419867118,
            "unit": "MByte/s",
            "range": 25622.608659788795,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 35725.46268569651,
            "unit": "MByte/s",
            "range": 28825.514251441724,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 16015.086627642586,
            "unit": "MByte/s",
            "range": 11370.883331568115,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36048.269491564424,
            "unit": "MByte/s",
            "range": 25533.206589049772,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36096.73989322116,
            "unit": "MByte/s",
            "range": 29061.296529298987,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 16083.122791601183,
            "unit": "MByte/s",
            "range": 11417.52381378626,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31146.712235147843,
            "unit": "MByte/s",
            "range": 21770.704977188725,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36011.45884918971,
            "unit": "MByte/s",
            "range": 28888.25745968861,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 16154.398637717404,
            "unit": "MByte/s",
            "range": 11448.823887823683,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31074.395850967052,
            "unit": "MByte/s",
            "range": 21722.423148267393,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36380.98883699317,
            "unit": "MByte/s",
            "range": 29122.61477937519,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 16222.439501626548,
            "unit": "MByte/s",
            "range": 11495.288677697501,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP client",
            "value": 411.8421737545931,
            "unit": "Mbit/s",
            "range": 16.157137191864695,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 102.97905509759681,
            "unit": "Mbit/s",
            "range": 11.538125849677838,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 182871654.4,
            "unit": "ns",
            "range": 9960920.102606297,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 192937984,
            "unit": "ns",
            "range": 4194304,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 104857599.99999999,
            "unit": "ns",
            "range": 2813624.6586897834,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 125619404.8,
            "unit": "ns",
            "range": 24697470.93580664,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 127.47387484943977,
            "unit": "Mbit/s",
            "range": 5.360944930069017,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 119.68766171101962,
            "unit": "Mbit/s",
            "range": 4.945260698804454,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 238796.80000000002,
            "unit": "ns",
            "range": 18322.447766605856,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 672563.2000000001,
            "unit": "ns",
            "range": 405920.83303343767,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 208076.8,
            "unit": "ns",
            "range": 9999.61036040905,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 996147.2000000002,
            "unit": "ns",
            "range": 351458.75922070857,
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
        "date": 1723228199734,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 241.807408542,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 128.06459358,
            "unit": "ticks",
            "range": 0.2926318858600422,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.66463162999999,
            "unit": "ticks",
            "range": 0.1253460652831518,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.86496594,
            "unit": "ticks",
            "range": 0.10460332219206224,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36422.74296671855,
            "unit": "MByte/s",
            "range": 25765.078570625097,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 35930.592805374,
            "unit": "MByte/s",
            "range": 28909.986738566462,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15409.8601932218,
            "unit": "MByte/s",
            "range": 10846.707738805731,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36252.851998597274,
            "unit": "MByte/s",
            "range": 25652.107920556828,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36361.04460456249,
            "unit": "MByte/s",
            "range": 29162.6814690049,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15453.54680290434,
            "unit": "MByte/s",
            "range": 10873.977711366426,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31368.927622687326,
            "unit": "MByte/s",
            "range": 21912.40412983219,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 35891.230210588124,
            "unit": "MByte/s",
            "range": 28897.917168833737,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15404.023196419972,
            "unit": "MByte/s",
            "range": 10843.899214841691,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31299.51174444792,
            "unit": "MByte/s",
            "range": 21865.839482107247,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36320.297119462164,
            "unit": "MByte/s",
            "range": 29149.495685559617,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15448.116621048586,
            "unit": "MByte/s",
            "range": 10871.502528318451,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP client",
            "value": 404.9231523930107,
            "unit": "Mbit/s",
            "range": 18.62856828882142,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 104.22928157290106,
            "unit": "Mbit/s",
            "range": 9.345627758294441,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 180355071.99999997,
            "unit": "ns",
            "range": 15467828.878160555,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 187904819.20000002,
            "unit": "ns",
            "range": 6968101.138946547,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 99824435.2,
            "unit": "ns",
            "range": 3774873.6,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 133588582.39999998,
            "unit": "ns",
            "range": 36577721.759876564,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 125.56965988038361,
            "unit": "Mbit/s",
            "range": 2.0146813282111427,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 121.60592205301629,
            "unit": "Mbit/s",
            "range": 5.177967006949806,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 241663.99999999997,
            "unit": "ns",
            "range": 13209.203094812345,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 956006.4,
            "unit": "ns",
            "range": 542605.4544781504,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 211353.59999999998,
            "unit": "ns",
            "range": 6398.15653450273,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 1078067.2000000002,
            "unit": "ns",
            "range": 423443.20420778985,
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
        "date": 1723232602218,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 242.0061861,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 128.08489241999996,
            "unit": "ticks",
            "range": 0.426694077927926,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.71751836999998,
            "unit": "ticks",
            "range": 0.3554154627969603,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.8809722,
            "unit": "ticks",
            "range": 0.09556920859628304,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36422.702861869075,
            "unit": "MByte/s",
            "range": 25753.71578043765,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36267.11730378025,
            "unit": "MByte/s",
            "range": 28983.597360453656,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 16542.859651370094,
            "unit": "MByte/s",
            "range": 11675.551147671536,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36305.06864407853,
            "unit": "MByte/s",
            "range": 25672.84401553155,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36695.683194778154,
            "unit": "MByte/s",
            "range": 29233.579886107203,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 16613.928699671083,
            "unit": "MByte/s",
            "range": 11723.061470233002,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31517.169353022775,
            "unit": "MByte/s",
            "range": 22008.140176183508,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36415.346200883345,
            "unit": "MByte/s",
            "range": 29006.31490707149,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 16553.173484362884,
            "unit": "MByte/s",
            "range": 11684.073961001026,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31493.720579574,
            "unit": "MByte/s",
            "range": 21991.26842228699,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36844.01817249542,
            "unit": "MByte/s",
            "range": 29256.509139993264,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 16624.39032609638,
            "unit": "MByte/s",
            "range": 11731.695163222676,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP client",
            "value": 410.24231903566834,
            "unit": "Mbit/s",
            "range": 20.906973053033386,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 106.29220042920997,
            "unit": "Mbit/s",
            "range": 10.577266588343107,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 182871654.4,
            "unit": "ns",
            "range": 10643950.306443516,
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
            "value": 101921587.19999999,
            "unit": "ns",
            "range": 4891356.971271444,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 131491430.39999998,
            "unit": "ns",
            "range": 31736361.34637881,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 125.13134121587456,
            "unit": "Mbit/s",
            "range": 4.12486745233919,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 116.87302091560237,
            "unit": "Mbit/s",
            "range": 6.11690372424288,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 233472,
            "unit": "ns",
            "range": 18317.868871678278,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 742195.2,
            "unit": "ns",
            "range": 478025.48705540795,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 215449.6,
            "unit": "ns",
            "range": 6130.331462490426,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 1484390.4,
            "unit": "ns",
            "range": 547294.2711403437,
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
        "date": 1723237069747,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 242.617312976,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 128.13644134,
            "unit": "ticks",
            "range": 0.4744095885269876,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.71357502000002,
            "unit": "ticks",
            "range": 0.2586036845991935,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.88099936,
            "unit": "ticks",
            "range": 0.08608504024271842,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36141.24910496901,
            "unit": "MByte/s",
            "range": 25601.412516086722,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36043.67669481221,
            "unit": "MByte/s",
            "range": 28940.508761423614,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15329.24029712602,
            "unit": "MByte/s",
            "range": 10823.122397513776,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36083.108460890864,
            "unit": "MByte/s",
            "range": 25563.676472191015,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36474.99749329781,
            "unit": "MByte/s",
            "range": 29194.08059517337,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 15377.839598874023,
            "unit": "MByte/s",
            "range": 10853.946287317629,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31091.477489147634,
            "unit": "MByte/s",
            "range": 21808.27849118973,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 35998.99427837429,
            "unit": "MByte/s",
            "range": 28886.49714165154,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15296.058827584733,
            "unit": "MByte/s",
            "range": 10803.79165913505,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31035.77976221703,
            "unit": "MByte/s",
            "range": 21771.291664226705,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36430.26627044243,
            "unit": "MByte/s",
            "range": 29140.444840684493,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 15344.896195372665,
            "unit": "MByte/s",
            "range": 10834.828670863548,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP client",
            "value": 406.08996026696184,
            "unit": "Mbit/s",
            "range": 15.870693471967432,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 107.96306134910837,
            "unit": "Mbit/s",
            "range": 10.87315352787078,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 186227097.6,
            "unit": "ns",
            "range": 11285717.83102749,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 190421401.6,
            "unit": "ns",
            "range": 3355443.2,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 100243865.6,
            "unit": "ns",
            "range": 4277367.588388055,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 116811366.4,
            "unit": "ns",
            "range": 18711720.464697774,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 126.10020616009822,
            "unit": "Mbit/s",
            "range": 3.4671219524527483,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 122.21730035040957,
            "unit": "Mbit/s",
            "range": 4.449426266102611,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 231423.99999999997,
            "unit": "ns",
            "range": 17688.840504679778,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 884736,
            "unit": "ns",
            "range": 485032.81707364914,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 212991.99999999997,
            "unit": "ns",
            "range": 4096,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 1200947.2,
            "unit": "ns",
            "range": 479357.3142141048,
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
        "date": 1723241483915,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 242.204631797,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 128.02558822000003,
            "unit": "ticks",
            "range": 0.2743785679450416,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.69666963,
            "unit": "ticks",
            "range": 0.26870664937070016,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.87820974,
            "unit": "ticks",
            "range": 0.07789018172114151,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36295.751909806684,
            "unit": "MByte/s",
            "range": 25710.571238673314,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 35533.076293581325,
            "unit": "MByte/s",
            "range": 28764.98311940433,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 16196.781548721636,
            "unit": "MByte/s",
            "range": 11438.835709998657,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36174.30773288498,
            "unit": "MByte/s",
            "range": 25624.532964572347,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 35963.31092768161,
            "unit": "MByte/s",
            "range": 29019.422086355586,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 16248.71635511334,
            "unit": "MByte/s",
            "range": 11476.033953414246,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31387.60516587146,
            "unit": "MByte/s",
            "range": 21940.603558848423,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 35470.30380830783,
            "unit": "MByte/s",
            "range": 28740.12053121591,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 16201.966472843227,
            "unit": "MByte/s",
            "range": 11440.801387391199,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31364.156392422687,
            "unit": "MByte/s",
            "range": 21923.67705947693,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 35894.60676832703,
            "unit": "MByte/s",
            "range": 28990.62638715473,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 16253.961146061216,
            "unit": "MByte/s",
            "range": 11478.040001026757,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP client",
            "value": 407.5062995948892,
            "unit": "Mbit/s",
            "range": 18.905534705014176,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 100.37690460088297,
            "unit": "Mbit/s",
            "range": 9.786256305479448,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 175321907.2,
            "unit": "ns",
            "range": 14626037.81959074,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 187904819.20000002,
            "unit": "ns",
            "range": 7913796.959621908,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 101502156.79999998,
            "unit": "ns",
            "range": 3774873.6000000006,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 111568486.39999999,
            "unit": "ns",
            "range": 4378981.935154956,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 127.47057074407456,
            "unit": "Mbit/s",
            "range": 4.978247912456933,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 120.18246075701958,
            "unit": "Mbit/s",
            "range": 4.714841424993542,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 243302.4,
            "unit": "ns",
            "range": 14094.04971752264,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 874905.6000000001,
            "unit": "ns",
            "range": 694494.1633924939,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 206438.39999999997,
            "unit": "ns",
            "range": 9727.461037701461,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 1182924.8,
            "unit": "ns",
            "range": 467722.309946575,
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
        "date": 1723245902215,
        "tool": "hermit-bench",
        "benches": [
          {
            "name": "Build",
            "value": 243.282672598,
            "unit": "s",
            "range": 0,
            "group": "General",
            "plot_group": "none"
          },
          {
            "name": "1 thread",
            "value": 128.09146026000002,
            "unit": "ticks",
            "range": 0.4282137210842652,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "2 threads",
            "value": 64.71636319000001,
            "unit": "ticks",
            "range": 0.13750563024559728,
            "group": "Micro",
            "plot_group": "Scheduling time"
          },
          {
            "name": "Time for syscall (getpid)",
            "value": 34.86781405999999,
            "unit": "ticks",
            "range": 0.08053270247133451,
            "group": "Micro",
            "plot_group": "none"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 36060.992840643674,
            "unit": "MByte/s",
            "range": 25545.824469877924,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36417.096325695595,
            "unit": "MByte/s",
            "range": 29049.889250932032,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 16263.075729330849,
            "unit": "MByte/s",
            "range": 11453.6204476459,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(built_in) block size 4096",
            "value": 35937.06897731303,
            "unit": "MByte/s",
            "range": 25457.13350538006,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 1048576",
            "value": 36786.689238511935,
            "unit": "MByte/s",
            "range": 29284.47086099114,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(built_in) block size 16777216",
            "value": 16316.039809134563,
            "unit": "MByte/s",
            "range": 11492.738669194234,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31239.235026074726,
            "unit": "MByte/s",
            "range": 21820.832878542402,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36434.13064986795,
            "unit": "MByte/s",
            "range": 29013.549329438476,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 16227.5528445768,
            "unit": "MByte/s",
            "range": 11424.178643221761,
            "group": "Micro",
            "plot_group": "Memcpy speed"
          },
          {
            "name": "(rust) block size 4096",
            "value": 31258.79774183997,
            "unit": "MByte/s",
            "range": 21832.056442479996,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 1048576",
            "value": 36802.91803654235,
            "unit": "MByte/s",
            "range": 29247.27441899482,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "(rust) block size 16777216",
            "value": 16280.882294940859,
            "unit": "MByte/s",
            "range": 11463.743608181505,
            "group": "Micro",
            "plot_group": "Memset speed"
          },
          {
            "name": "TCP client",
            "value": 415.6521818156713,
            "unit": "Mbit/s",
            "range": 15.596620589344955,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "TCP server",
            "value": 107.78499234865868,
            "unit": "Mbit/s",
            "range": 12.126104647706278,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile TCP Client Latency",
            "value": 184549376.00000003,
            "unit": "ns",
            "range": 7733914.439080277,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Client Latency",
            "value": 192099123.20000002,
            "unit": "ns",
            "range": 4109561.8504457823,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "95th percentile TCP Server Latency",
            "value": 101502156.8,
            "unit": "ns",
            "range": 6235281.1611153,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "Max TCP Server Latency",
            "value": 133378867.19999999,
            "unit": "ns",
            "range": 31136881.232836496,
            "group": "Networking",
            "plot_group": "Netbench Latency - 250x1MB"
          },
          {
            "name": "UDP server",
            "value": 126.0903360153163,
            "unit": "Mbit/s",
            "range": 5.084776101342576,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1472B"
          },
          {
            "name": "UDP client",
            "value": 119.65580511384604,
            "unit": "Mbit/s",
            "range": 6.567247365496257,
            "group": "Networking",
            "plot_group": "Netbench Bandwidth - 1000x1MB"
          },
          {
            "name": "95th percentile UDP Client Latency",
            "value": 245759.99999999997,
            "unit": "ns",
            "range": 15215.964668728697,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Client Latency",
            "value": 865894.3999999999,
            "unit": "ns",
            "range": 590563.6606638102,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "95th percentile UDP Server Latency",
            "value": 201523.2,
            "unit": "ns",
            "range": 9304.323433759168,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          },
          {
            "name": "Max UDP Server Latency",
            "value": 1477836.8,
            "unit": "ns",
            "range": 943889.0512373581,
            "group": "Networking",
            "plot_group": "Netbench Latency - 1000x1472B"
          }
        ]
      }
    ]
  }
}