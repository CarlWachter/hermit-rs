#![allow(unused_imports)]

use std::io::Read;
use std::time::Instant;

use clap::Parser;
#[cfg(target_os = "hermit")]
use hermit as _;
use hermit_bench_output::log_benchmark_data;
use rust_tcp_io_perf::config::Config;
use rust_tcp_io_perf::{connection, print_utils};

fn main() {
	let args = Config::parse();
	let n_bytes = args.n_bytes;
	let tot_bytes = args.n_rounds * args.n_bytes;

	let mut buf = vec![0; n_bytes];

	let mut stream = connection::server_listen_and_get_first_connection(&args.port.to_string());
	connection::setup(&args, &stream);

	let start = Instant::now();
	for _i in 0..args.n_rounds {
		stream.read_exact(&mut buf).unwrap();
	}
	let end = Instant::now();
	let duration = end.duration_since(start);

	#[cfg(target_os = "hermit")]
	log_benchmark_data(
		"TCP server",
		"Mbit/s",
		(tot_bytes as f64 * 8.0f64) / (1024.0f64 * 1024.0f64 * duration.as_secs_f64()),
	);

	#[cfg(not(target_os = "hermit"))]
	log_benchmark_data(
		"TCP client",
		"Mbit/s",
		(tot_bytes as f64 * 8.0f64) / (1024.0f64 * 1024.0f64 * duration.as_secs_f64()),
	);
}
