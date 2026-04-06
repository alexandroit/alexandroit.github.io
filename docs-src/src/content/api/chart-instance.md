---
title: Chart Instance API
description: Methods available on chart instances created by createChart.
heading: Chart Instance
summary: Imperative control layer for updates, theme switching, and lifecycle management.
status: Stable
---

The chart instance is the engine’s imperative API surface.

## Available Methods

| Method | Purpose |
| --- | --- |
| `ready()` | Resolve when the current render cycle and any lazy chart loading have finished |
| `update(config)` | Apply partial config changes |
| `updateSeries(series)` | Replace series structures directly |
| `appendData(point)` | Append a single point |
| `appendBatch(points)` | Append multiple points in one call |
| `replaceData(data)` | Replace the current data payload |
| `setTheme(theme)` | Switch theme tokens at runtime |
| `resize(width?, height?)` | Re-measure or manually size the chart |
| `registerPlugin(plugin)` | Extend the chart instance |
| `on(event, handler)` | Listen to lifecycle or engine events |
| `destroy()` | Tear down the chart |

## Example

```ts
const chart = createChart(config);

await chart.ready();
chart.appendData({ label: "May", value: 28 });
chart.setTheme("dark");
chart.destroy();
```

## Why Imperative APIs Still Matter

Even in declarative ecosystems, chart engines need imperative control for:

- live data
- resize coordination
- dashboard builders
- external state transitions
