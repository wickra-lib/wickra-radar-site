---
layout: home
title: Wickra Radar — perp-universe alert radar
titleTemplate: false

hero:
  name: "Wickra Radar"
  text: "Alert the whole perp universe."
  tagline: "A crash early-warning seismograph for perpetual futures: OI delta, funding flip, book imbalance, liquidation clusters and OI/price divergence, in ten languages. Deterministic, byte-identical."
  image:
    src: /wickra-mark.svg
    alt: Wickra Radar
  actions:
    - theme: brand
      text: View on GitHub
      link: https://github.com/wickra-lib/wickra-radar
    - theme: alt
      text: Signals & spec
      link: https://github.com/wickra-lib/wickra-radar/tree/main/docs
    - theme: alt
      text: API
      link: /api/rust

features:
  - icon: 🚨
    title: Crash early-warning seismograph
    details: Folds open interest, funding, order-book and liquidation events into severity-scored alerts across thousands of perp symbols — the market state price-only tools never see.
  - icon: 📡
    title: 5 signals
    details: "OI delta, funding flip, book imbalance, liquidation cluster and OI/price divergence — each an O(1) streaming signal, weighted into a single severity in [0, 1]."
  - icon: 🧾
    title: Every alert explains itself
    details: A RadarAlert carries the per-signal factor map plus the aggregated severity and timestamp, so you always see which signals fired and how much each contributed.
  - icon: ⚡
    title: Parallel over the universe
    details: Thousands of symbols update in parallel with rayon, or sequentially on the WASM path. Alerts sort by a total order, so both produce a byte-for-byte identical report.
  - icon: 🌲
    title: The spec is JSON, not code
    details: A RadarSpec is a list of weighted signals plus a threshold and limit. Because it is data, the exact same radar crosses the C ABI and WASM unchanged.
  - icon: 🌐
    title: Ten languages
    details: "The core is a JSON-over-C-ABI data API (Radar::command) in Rust, Python, Node.js, WASM, C, C++, C#, Go, Java and R, plus a command-line reference consumer."
---

<script setup>
const installTabs = [
  { label: 'Python', lang: 'bash', code: 'pip install wickra-radar' },
  { label: 'Node',   lang: 'bash', code: 'npm install wickra-radar' },
  { label: 'Rust',   lang: 'bash', code: 'cargo add wickra-radar' },
  { label: 'WASM',   lang: 'bash', code: 'npm install wickra-radar-wasm' },
  { label: 'C',      lang: 'bash', code: '# prebuilt header + library from GitHub releases:\n# github.com/wickra-lib/wickra-radar/releases' },
  { label: 'C#',     lang: 'bash', code: 'dotnet add package WickraRadar' },
  { label: 'Go',     lang: 'bash', code: 'go get github.com/wickra-lib/wickra-radar-go' },
  { label: 'Java',   lang: 'xml',  code: '<!-- Maven Central -->\n<dependency>\n  <groupId>org.wickra</groupId>\n  <artifactId>wickra-radar</artifactId>\n  <version>0.1.0</version>\n</dependency>' },
  { label: 'R',      lang: 'r',    code: 'install.packages("wickraradar", repos = "https://wickra-lib.r-universe.dev")' },
]

const pyCode = `import json
from wickra_radar import Radar

spec = json.dumps({
    "symbols": ["AAA"],
    "signals": [{"kind": "funding_flip", "params": [0.0005], "weight": 2.0}],
    "threshold": 0.0,
})

radar = Radar(spec)
response = radar.command(json.dumps({"cmd": "scan", "events": events}))
report = json.loads(response)
for alert in report["alerts"]:
    print(alert["symbol"], alert["severity"])`

const nodeCode = `import { Radar } from 'wickra-radar'

const spec = JSON.stringify({
  symbols: ['AAA'],
  signals: [{ kind: 'funding_flip', params: [0.0005], weight: 2.0 }],
  threshold: 0.0,
})

const radar = new Radar(spec)
const report = JSON.parse(radar.command(JSON.stringify({ cmd: 'scan', events })))
for (const alert of report.alerts) console.log(alert.symbol, alert.severity)`

const cliCode = `# Scan a perp universe from a spec + an event batch, raw RadarReport JSON:
wickra-radar --spec golden/specs/composite.json --stdin --format json < golden/events.json

# Human-readable table of alerts:
wickra-radar --spec golden/specs/composite.json --stdin < golden/events.json`

const snippetTabs = [
  { label: 'Python', lang: 'python',     code: pyCode },
  { label: 'Node',   lang: 'javascript', code: nodeCode },
  { label: 'CLI',    lang: 'bash',       code: cliCode },
]
</script>

## The radar is JSON, not code

A `RadarSpec` is a list of weighted `signals`, an optional severity `threshold`,
and a top-N `limit`. Each signal names a `kind` and its numeric `params`.

```json
{
  "signals": [
    { "kind": "oi_delta", "params": [2.0, 0.1], "weight": 1.0 },
    { "kind": "funding_flip", "params": [0.0005], "weight": 2.0 },
    { "kind": "book_imbalance", "params": [1.0], "weight": 1.0 },
    { "kind": "liq_cluster", "params": [5.0, 30.0], "weight": 1.5 },
    { "kind": "oi_price_divergence", "params": [2.0, 0.1], "weight": 3.0 }
  ],
  "threshold": 0.2,
  "limit": 3
}
```

The report keeps every symbol at or above `threshold` and returns the top `limit`
sorted by severity — each `RadarAlert` carrying the per-signal factor map that
produced it.

## Install

The same radar from every language — native Rust, Python, Node.js and WASM, plus a
C ABI for C, C++, C#, Go, Java and R.

<InstallTabs :tabs="installTabs" />

## Run it from any language

Construct a `Radar` from the JSON spec, then drive it with
`command(json) -> json`. Every binding returns the same bytes.

<InstallTabs :tabs="snippetTabs" />

## Built on the Wickra core

Wickra Radar is part of the [Wickra](https://wickra.org) ecosystem. Its signals
consume the same typed microstructure feeds — open interest, funding, order-book,
liquidations — that [`wickra-core`](https://github.com/wickra-lib/wickra) and the
backtester use, so a live alert and a backtest see identical numbers.

> Wickra Radar is a software library, not a trading system, and comes with no
> warranty — use at your own risk.
