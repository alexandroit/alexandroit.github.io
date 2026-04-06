---
title: Combo Chart
description: Use combo charts when plan, actual, forecast, and context must live in one view.
heading: Combo Chart
summary: Mixed chart composition is a high-value enterprise primitive and now has a first core implementation.
demo: combo-plan-vs-actual
status: Live
---

Combo charts are a core enterprise pattern because teams often need bars and lines in the same frame.

## When To Use It

- actual vs plan
- volume plus trend
- revenue plus margin
- throughput bars with latency line overlays

## Current Capabilities

- per-series type selection for `bar`, `line`, `area`, and `scatter`
- shared categorical axis
- threshold overlays
- shared legend and theme system

## Example

```ts
createChart({
  container,
  type: "combo",
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  series: [
    { name: "Actual", type: "bar", data: [28, 31, 34, 38, 41, 44] },
    { name: "Plan", type: "line", data: [30, 32, 35, 37, 40, 43], color: "#38bdf8" },
    { name: "Forecast", type: "area", data: [29, 33, 36, 40, 45, 48], color: "#2dd4bf" }
  ]
});
```

## Why Combo Matters

Combo is one of the clearest separators between a lightweight chart package and a platform core. Mature products document it prominently because real dashboards rely on it constantly.

See also [Chart Selection](/patterns/chart-selection) and [Operations Dashboards](/patterns/operations-dashboards).
