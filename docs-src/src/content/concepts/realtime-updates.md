---
title: Realtime Updates
description: Realtime support is part of the engine contract, not a side feature.
heading: Realtime Updates
summary: Incremental updates, rolling windows, and batched rendering are first-class concerns.
demo: realtime-stream
status: Stable
---

Realtime behavior is one of the places where Infinity Charts is intentionally trying to outgrow the expectations of many traditional chart libraries.

## Core Principle

Live updates should not require tearing down and re-creating a chart.

## Current Realtime Methods

- `appendData(point)`
- `appendBatch(points)`
- `replaceData(data)`
- `updateSeries(series)`

## Rolling Windows

The engine foundation already supports rolling-window style configs through `realtime.maxPoints`.

```ts
createChart({
  container,
  type: "line",
  data: [124, 131, 128, 142, 149],
  realtime: {
    enabled: true,
    maxPoints: 16
  }
});
```

## Why Realtime Is A Platform Concern

Realtime does not only affect line charts. It also affects:

- monitoring widgets
- KPI cards
- threshold states
- alert panels
- rolling dashboard tiles

That is why realtime belongs in the engine architecture rather than only in a niche chart family.

## Practical Guidance

Use realtime mode when you need:

- append-only feeds
- low overhead updates
- sliding windows
- stateful dashboards

Avoid overly decorative animation in high-frequency update paths. Clarity is more important than motion density.

