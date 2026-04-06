---
title: Quick Start
description: Render a first chart with minimal configuration and then evolve toward the advanced model.
heading: Quick Start
summary: Fastest path to a working chart.
demo: quick-start-line
status: Stable
---

The quickest way to understand Infinity Charts is to start with the simplest possible configuration and then see how the API expands cleanly.

## Minimal Example

```ts
import { createChart } from "@revivejs/infinity-charts";

const chart = createChart({
  container: document.querySelector("#chart"),
  type: "line",
  title: "Monthly revenue",
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  data: [14, 18, 17, 26, 29],
  theme: "dark"
});
```

## Browser Global Example

```html
<div id="chart"></div>
<script src="./infinity-charts.min.js"></script>
<script>
  const chart = InfinityCharts.mount({
    container: document.getElementById("chart"),
    type: "line",
    title: "Monthly revenue",
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    data: [14, 18, 17, 26, 29],
    theme: "dark"
  });
</script>
```

## What The Engine Resolves For You

With a short config like that, Infinity Charts still resolves a lot of structure internally:

- chart frame
- theme tokens
- axes
- grid
- palette
- animation defaults
- renderer selection
- data normalization

That is a deliberate product decision. The beginner experience should feel fast, but the engine should still stay structurally consistent underneath.

## Grow The Same Instance

Once the chart exists, you can update it imperatively without re-creating the instance:

```ts
chart.appendData({ label: "Jun", value: 31 });
chart.setTheme("light");
chart.resize();
```

The same lifecycle methods are available from a chart created through `InfinityCharts.create(...)` or `InfinityCharts.mount(...)`.

## Where To Go Next

- [Configuration Model](/concepts/configuration-model)
- [Chart Lifecycle](/concepts/chart-lifecycle)
- [Line Chart Guide](/charts/line)
