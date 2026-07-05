# Rust

The native crate. Fold a `RadarSpec` over an event batch with `scan`, or drive a
`Radar` handle with the JSON command protocol every other binding uses.

```bash
cargo add wickra-radar
```

```rust
use radar_core::{scan, Event, RadarSpec};
use std::collections::BTreeMap;

let spec = RadarSpec::from_json(SPEC).expect("valid spec");

let mut events: BTreeMap<String, Vec<Event>> = BTreeMap::new();
// ... fill `events` with each symbol's derivatives / book / liquidation events ...

let report = scan(&events, &spec).expect("scan");
for alert in &report.alerts {
    println!("{} severity {}", alert.symbol, alert.severity);
}
```

## More

- [crates.io/crates/wickra-radar](https://crates.io/crates/wickra-radar) · [docs.rs](https://docs.rs/wickra-radar)
- [Source & examples](https://github.com/wickra-lib/wickra-radar/tree/main/examples/rust)
- [Signals & spec](https://github.com/wickra-lib/wickra-radar/tree/main/docs)
