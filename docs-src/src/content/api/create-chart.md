---
title: createChart API
description: The main entry point for creating chart instances in Infinity Charts.
heading: createChart
summary: The primary public constructor for the engine.
status: Stable
---

`createChart(config)` is the main public entry point of the current engine foundation.

For plain browser usage without module imports, the same entry point is available as `InfinityCharts.create(config)` or `InfinityCharts.mount(config)`.

## Signature

```ts
const chart = createChart(config);
```

```html
<script src="./infinity-charts.min.js"></script>
<script>
  const chart = InfinityCharts.mount(config);
</script>
```

## Required Fields

- `container`
- `type`

## Common Fields

- `title`
- `data`
- `labels`
- `series`
- `theme`
- `colors`
- `legend`
- `xAxis`
- `yAxis`
- `grid`
- `bar3d`
- `realtime`
- `thresholds`

## Return Value

It returns a chart instance with imperative methods for updates, theme switching, resizing, plugin registration, and destruction.

See [Chart Instance](/api/chart-instance) for the instance API.
