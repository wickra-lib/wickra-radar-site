# R

A `.Call` binding over the C ABI. Construct a radar from a JSON spec, then drive it
with `wkradar_command(radar, json) -> json`.

```r
install.packages("wickraradar", repos = "https://wickra-lib.r-universe.dev")
```

```r
library(wickraradar)

spec <- '{"symbols":["AAA"],
  "signals":[{"kind":"funding_flip","params":[0.0005],"weight":2.0}],
  "threshold":0.0}'

radar <- wkradar_new(spec)
response <- wkradar_command(radar, '{"cmd":"scan","events":{}}')
cat("wickra-radar", wkradar_version(), "\n")
cat(response, "\n")
```

## More

- [r-universe](https://wickra-lib.r-universe.dev)
- [Source & examples](https://github.com/wickra-lib/wickra-radar/tree/main/examples/r)
