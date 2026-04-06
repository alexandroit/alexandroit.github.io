---
title: Thermometer
description: Use vertical and horizontal thermometer charts for level, saturation, occupancy, and risk-style widgets.
heading: Thermometer
summary: The thermometer family covers both vertical and horizontal fill meters in the live core.
demo: thermometer-vertical
status: Live
---

The thermometer family is useful when the data should feel like a level filling up rather than a needle rotating around a dial.

## Best Use Cases

- storage or capacity saturation
- room or seat occupancy
- risk and severity scoring
- temperature-like monitoring surfaces

## Variants In Core

- `thermometer`
- `thermometer-horizontal`

## Current Capabilities

- threshold bands
- compact widget layout
- vertical and horizontal orientations
- smooth value updates through the same chart instance API

## Example

```ts
createChart({
  container,
  type: "thermometer",
  data: [{ label: "Capacity", value: 83 }],
  gauge: {
    min: 0,
    max: 100,
    unit: "%",
    bands: [
      { from: 0, to: 60, color: "#22c55e", label: "Healthy" },
      { from: 60, to: 80, color: "#f59e0b", label: "Attention" },
      { from: 80, to: 100, color: "#ef4444", label: "Critical" }
    ]
  }
});
```
