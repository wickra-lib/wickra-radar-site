# Java

An FFM (Panama) wrapper over the C ABI. Construct a `Radar` from a JSON spec, then
drive it with `command(json) -> json`.

```xml
<!-- Maven Central -->
<dependency>
  <groupId>org.wickra</groupId>
  <artifactId>wickra-radar</artifactId>
  <version>0.1.0</version>
</dependency>
```

```java
import org.wickra.radar.Radar;

public final class Scan {
    public static void main(String[] args) {
        String spec = """
            {"symbols":["AAA"],
             "signals":[{"kind":"funding_flip","params":[0.0005],"weight":2.0}],
             "threshold":0.0}""";

        try (Radar radar = new Radar(spec)) {
            String response = radar.command("{\"cmd\":\"scan\",\"events\":{}}");
            System.out.println("wickra-radar " + Radar.version());
            System.out.println(response);
        }
    }
}
```

The binding uses the Java Foreign Function & Memory API, so it needs JDK 22+ and
`--enable-native-access`.

## More

- [Maven Central](https://central.sonatype.com/artifact/org.wickra/wickra-radar)
- [Source & examples](https://github.com/wickra-lib/wickra-radar/tree/main/examples/java)
