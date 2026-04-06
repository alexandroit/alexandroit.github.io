---
title: Stacked Area Chart
description: Use stacked area charts to show composition and accumulation over time.
heading: Stacked Area Chart
summary: The first dashboard-native accumulation chart now lives in the core engine.
demo: stacked-area-capacity
status: Live
---

Stacked area charts are useful when the story is not just trend, but contribution.

## When To Use It

- capacity composition over time
- channel mix trends
- environment usage splits
- occupied vs free resource tracking

## When Not To Use It

- when exact per-series comparison matters more than total composition
- when categories should not visually stack
- when negative values dominate the story

## Current Capabilities

- multiple stacked series
- shared cartesian axes
- threshold overlays
- responsive layout
- theme-aware fills and lines

## Example

```ts
createChart({
  container,
  type: "stacked-area",
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  series: [
    { name: "Reserved", data: [22, 24, 27, 30, 34, 36] },
    { name: "Queued", data: [8, 10, 12, 11, 10, 9], color: "#38bdf8" },
    { name: "Free", data: [14, 13, 10, 8, 7, 6], color: "#2dd4bf" }
  ]
});
```

## Recommended Use Cases

- operations capacity dashboards
- product tier mix tracking
- support volume allocation
- inventory utilization views

The stacked area chart is one of the first signs that the platform is moving beyond isolated “starter charts” and into dashboard composition territory.
