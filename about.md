# About Wickra Radar

Wickra Radar turns a whole perpetual-futures universe into a crash early-warning
seismograph. It folds open-interest, funding, order-book and liquidation events
into severity-scored alerts — the market state price-only tools never see — across
thousands of symbols in parallel, and returns byte-for-byte identical results in
every one of ten languages.

## What makes it different

- **Five microstructure signals.** OI delta, funding flip, book imbalance,
  liquidation cluster and OI/price divergence — each an O(1) streaming signal,
  aggregated with weights into one severity in `[0, 1]`.
- **The alert is data.** A serde `RadarSpec` of weighted signals plus a threshold
  and limit. Because it is data, the exact same radar crosses the C ABI and WASM
  unchanged.
- **Every alert explains itself.** A `RadarAlert` carries the per-signal factor
  map plus the aggregated severity, so you always see which signals fired.
- **Parallel and deterministic.** Thousands of symbols update in parallel with
  rayon or sequentially on WASM — both produce a byte-identical report, pinned by
  a golden corpus in CI.

## Why it exists

Most alerting looks at price. Wickra Radar looks at the microstructure underneath
it — open interest, funding, the book, liquidations — where crowded positioning and
cascade risk show up first. It defines the radar surface once, in Rust, and exposes
it as a JSON-over-C-ABI data API to Rust, Python, Node.js, WASM and — over a C ABI —
C, C++, C#, Go, Java and R.

## Open source

Released under the **MIT OR Apache-2.0** license — permissive, OSI-approved, free
for any use including commercial. Source, issues and releases on
[GitHub](https://github.com/wickra-lib/wickra-radar).

## Disclaimer

Wickra Radar is a software library, **not** a trading system, and is provided
**as-is with no warranty**. It surfaces microstructure signals over market data; it
does not give financial advice. Use it at your own risk.
