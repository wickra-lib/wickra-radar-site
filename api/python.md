# Python

Native PyO3 bindings over the Rust core. Construct a `Radar` from a JSON spec,
then drive it with `command(json) -> json`.

```bash
pip install wickra-radar
```

```python
import json
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
    print(alert["symbol"], alert["severity"])
```

## More

- [PyPI](https://pypi.org/project/wickra-radar/)
- [Source & examples](https://github.com/wickra-lib/wickra-radar/tree/main/examples/python)
