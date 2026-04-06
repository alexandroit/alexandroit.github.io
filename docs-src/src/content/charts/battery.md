---
title: Battery Meter
description: Use a battery-style widget for remaining reserve, charge, energy, or error-budget style surfaces.
heading: Battery Meter
summary: A dashboard-native charge meter built on the same widget foundation as the gauge family.
demo: battery-meter
status: Live
---

Battery-style meters are useful when the mental model is not only progress, but remaining reserve.

## Best Use Cases

- device or backup battery status
- remaining SLA or error budget
- warehouse or capacity reserve
- any “remaining amount” widget that benefits from a familiar metaphor

## Current Capabilities

- segmented battery body
- threshold-aware coloring
- center-aligned value and state labels
- works in plain JavaScript through the browser bundle

## Example

```ts
createChart({
  container,
  type: "battery",
  data: [{ label: "Battery", value: 28 }],
  gauge: {
    min: 0,
    max: 100,
    unit: "%",
    bands: [
      { from: 0, to: 20, color: "#ef4444", label: "Low" },
      { from: 20, to: 50, color: "#f59e0b", label: "Watch" },
      { from: 50, to: 100, color: "#22c55e", label: "Charged" }
    ]
  }
});
```
