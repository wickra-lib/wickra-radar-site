# Node.js

Native napi-rs bindings over the Rust core. Construct a `Radar` from a JSON spec,
then drive it with `command(json) -> json`.

```bash
npm install wickra-radar
```

```javascript
import { Radar } from 'wickra-radar'

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

- [npm](https://www.npmjs.com/package/wickra-radar)
- [Source & examples](https://github.com/wickra-lib/wickra-radar/tree/main/examples/node)
