---
title: Semicircle Gauge
description: Use a compact half-arc gauge for small dashboard cards and narrow monitoring layouts.
heading: Semicircle Gauge
summary: A lighter, card-friendly gauge variant built on the same core engine.
demo: gauge-semicircle
status: Live
---

The semicircle gauge keeps the same threshold-aware value reading as the classic gauge, but compresses the shape into a tighter half-arc that works better in cards and stacked dashboard surfaces.

## Best Use Cases

- compact monitoring cards
- SLA and availability widgets
- executive scorecards with little vertical space
- dense grids where a full radial widget would feel too heavy

## Current Capabilities

- half-arc layout optimized for smaller cards
- threshold bands with clear state messaging
- centered KPI readout
- the same update model used by the rest of the engine

## Example

```ts
createChart({
  container,
  type: "gauge-semicircle",
  data: [{ label: "Availability", value: 97.4 }],
  gauge: {
    min: 90,
    max: 100,
    unit: "%",
    bands: [
      { from: 90, to: 95, color: "#ef4444", label: "Risk" },
      { from: 95, to: 98, color: "#f59e0b", label: "Watch" },
      { from: 98, to: 100, color: "#22c55e", label: "Healthy" }
    ]
  }
});
```
