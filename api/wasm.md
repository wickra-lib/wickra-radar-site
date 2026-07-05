# WASM

A `wasm-bindgen` build for the browser and other WebAssembly runtimes. The same
`Radar` handle and JSON command protocol as the native bindings — the sequential
path that produces byte-identical output to the parallel scan.

```bash
npm install wickra-radar-wasm
```

```javascript
import init, { Radar } from 'wickra-radar-wasm'

await init()

const spec = JSON.stringify({
  symbols: ['AAA'],
  signals: [{ kind: 'funding_flip', params: [0.0005], weight: 2.0 }],
  threshold: 0.0,
})

const radar = new Radar(spec)
const report = JSON.parse(radar.command(JSON.stringify({ cmd: 'scan', events })))
for (const alert of report.alerts) console.log(alert.symbol, alert.severity)
```

## More

- [npm (wickra-radar-wasm)](https://www.npmjs.com/package/wickra-radar-wasm)
- [Source & bindings](https://github.com/wickra-lib/wickra-radar/tree/main/bindings/wasm)
