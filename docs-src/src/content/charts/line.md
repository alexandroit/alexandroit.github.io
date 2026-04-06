---
title: Line Chart
description: Use line charts for trends, comparisons, and realtime sequences.
heading: Line Chart
summary: The most important foundational cartesian chart in the current engine.
demo: line-overview
status: Live
---

Line charts are one of the highest-leverage chart types in the platform because they support:

- trend analysis
- multi-series comparison
- realtime feeds
- threshold overlays
- compact dashboard panels

## When To Use It

Use a line chart when the main job is to show change across an ordered sequence.

Typical use cases:

- revenue over time
- throughput and latency
- product usage trends
- forecast vs actual

## When Not To Use It

Avoid line charts when:

- categories are unordered
- the main goal is part-to-whole comparison
- the values are better interpreted as discrete blocks than continuous movement

## Current Capabilities

- single-series input
- multi-series input
- threshold overlays
- theme switching
- responsive layout
- append-based realtime updates

## Example

```ts
createChart({
  container,
  type: "line",
  labels: ["Q1", "Q2", "Q3", "Q4"],
  series: [
    { name: "Revenue", data: [42, 51, 57, 68] },
    { name: "Plan", data: [40, 48, 56, 60], color: "#7dd3fc" }
  ],
  thresholds: [
    { value: 60, axis: "y", label: "Target" }
  ]
});
```

## Realtime Notes

The line chart is currently the best fit for live append flows in the first engine phase.

See [Realtime Updates](/concepts/realtime-updates) for the broader model.

