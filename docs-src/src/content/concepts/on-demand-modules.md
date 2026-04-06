---
title: On-Demand Modules
description: Infinity Charts can load chart implementations only when they are requested instead of shipping the full engine up front.
heading: On-Demand Modules
summary: Breadth should not force every application to pay the full download cost on first paint.
status: Stable
---

Infinity Charts is meant to grow very broad, but that breadth cannot come at the cost of sending every chart implementation to every browser session.

## Core Principle

If an application only needs a line chart, it should not eagerly download the whole future platform.

That is why the ESM entry of Infinity Charts resolves built-in chart modules on demand.

## How It Works

When you create a chart with a built-in type, the engine can fetch that chart implementation only when needed.

```ts
import { createChart } from "@revivejs/infinity-charts";

createChart({
  container: "#chart",
  type: "line",
  data: [18, 24, 21, 30]
});
```

In an ESM-aware environment, the line chart implementation can be loaded only when the chart is requested.

## Manual Control

You can also preload specific families when you want to hide network latency ahead of time.

```ts
import { loadChart, preloadCharts } from "@revivejs/infinity-charts";

await loadChart("line");
await preloadCharts(["bar", "donut", "gauge"]);
```

## Full Bundle Versus On-Demand

Infinity Charts supports two delivery modes:

- ESM package usage: best when you want internal on-demand chart loading
- browser bundle usage: best when you want a single downloaded file and a global `InfinityCharts` API

The browser bundle stays convenient for plain HTML pages, while the ESM path is the better fit for applications that care about loading only the chart modules they use.

## Why This Matters

As the platform grows toward hundreds of chart and widget types, on-demand loading stops being an optimization detail and becomes part of the product architecture.
