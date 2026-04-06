---
title: Gauge Chart
description: Use a radial gauge for velocity-meter style KPIs, health signals, and threshold-aware monitoring surfaces.
heading: Gauge Chart
summary: The first live velocimeter-style chart in Infinity Charts.
demo: gauge-health
status: Live
---

The gauge chart brings a true velocimeter-style widget into the live core. It is built for dashboard surfaces where a single number needs stronger state context than a raw KPI text can provide.

## When To Use It

- infrastructure or service health cards
- CPU, memory, or latency saturation summaries
- SLA and target-completion surfaces
- scorecards where thresholds matter at a glance
- compact monitoring panels that need more than a number

## When Not To Use It

- dense comparisons across many categories
- historical trend analysis over time
- precise analytical reading where line or bar charts communicate better

## Current Capabilities

- simple single-value API
- configurable `min`, `max`, and `unit`
- colored status bands
- needle-based reading with center value label
- browser-bundle support for plain JavaScript pages
- integration with the same engine lifecycle and update APIs as other charts

## Example

```ts
createChart({
  container,
  type: "gauge",
  title: { text: "Cluster health", subtitle: "Current CPU saturation" },
  data: [{ label: "CPU usage", value: 72 }],
  gauge: {
    min: 0,
    max: 100,
    unit: "%",
    bands: [
      { from: 0, to: 55, color: "#22c55e", label: "Healthy" },
      { from: 55, to: 80, color: "#f59e0b", label: "Attention" },
      { from: 80, to: 100, color: "#ef4444", label: "Critical" }
    ]
  },
  theme: "light"
});
```

## Why It Matters

Gauge charts are one of the clearest signals that Infinity Charts is growing beyond basic standalone charting and into dashboard-native visual modules. This is the first live step in that widget direction.
