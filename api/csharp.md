# C#

Idiomatic .NET over the C ABI. Construct a `Radar` from a JSON spec, then drive it
with `Command(json) -> json`.

```bash
dotnet add package WickraRadar
```

```csharp
using WickraRadar;

var spec = """
{"symbols":["AAA"],
 "signals":[{"kind":"funding_flip","params":[0.0005],"weight":2.0}],
 "threshold":0.0}
""";

using var radar = new Radar(spec);
var response = radar.Command("""{"cmd":"scan","events":{ }}""");
Console.WriteLine(response);
```

Targets .NET 8.

## More

- [NuGet](https://www.nuget.org/packages/WickraRadar)
- [Source & examples](https://github.com/wickra-lib/wickra-radar/tree/main/examples/csharp)
