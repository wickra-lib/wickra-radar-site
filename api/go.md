# Go

A cgo wrapper over the C ABI. Construct a `Radar` from a JSON spec, then drive it
with `Command(json) -> json`.

```bash
go get github.com/wickra-lib/wickra-radar-go
```

```go
package main

import (
	"fmt"

	wickra "github.com/wickra-lib/wickra-radar-go"
)

func main() {
	spec := `{"symbols":["AAA"],
	  "signals":[{"kind":"funding_flip","params":[0.0005],"weight":2.0}],
	  "threshold":0.0}`

	radar, err := wickra.New(spec)
	if err != nil {
		panic(err)
	}
	defer radar.Close()

	report, err := radar.Command(`{"cmd":"scan","events":{}}`)
	if err != nil {
		panic(err)
	}
	fmt.Println("wickra-radar", wickra.Version())
	fmt.Println(report)
}
```

## More

- [Go module (pkg.go.dev)](https://pkg.go.dev/github.com/wickra-lib/wickra-radar-go)
- [Source & examples](https://github.com/wickra-lib/wickra-radar/tree/main/examples/go)
