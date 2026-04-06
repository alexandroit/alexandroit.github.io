---
title: Scatter Chart
description: Use scatter charts to analyze correlation, clustering, and quantitative relationships across two numeric axes.
heading: Scatter Chart
summary: Scatter brings the first continuous x/y analytical view into the live engine.
demo: scatter-correlation
status: Live
---

Scatter charts are one of the first major steps from “dashboard charting” into “analytical charting”.

## What Scatter Is Good For

- correlation analysis
- cohort comparison
- outlier spotting
- cluster discovery
- operational signal exploration

## Why It Matters For The Platform

Scatter charts require a continuous x-axis instead of the categorical band scale used by line and bar charts.

That makes scatter important architecturally because it pushes the engine further toward:

- richer scale systems
- analytical chart families
- more advanced future views like bubble and error scatter

## Current Scope

The first live scatter implementation supports:

- numeric x/y points
- multi-series plotting
- title and legend system
- threshold overlays on y
- shared theming and renderer foundation

## Example

```ts
createChart({
  container,
  type: "scatter",
  xAxis: { title: "Activation %" },
  yAxis: { title: "Retention %" },
  series: [
    {
      name: "Enterprise",
      data: [
        { x: 41, y: 64, label: "A" },
        { x: 48, y: 71, label: "B" },
        { x: 57, y: 76, label: "C" }
      ]
    }
  ]
});
```

## What Comes Next

Scatter opens a cleaner path toward:

- bubble
- error scatter
- selection brushes
- quadrant overlays

