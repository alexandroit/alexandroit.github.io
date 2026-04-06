---
title: Config Reference
description: Overview of the current top-level configuration groups in Infinity Charts.
heading: Config Reference
summary: A structural map of the configuration surface.
status: Stable
---

This is not a full generated API reference yet. It is the current structural map of the public config surface.

## Top-Level Groups

| Group | Purpose |
| --- | --- |
| `container` | Chart mount target |
| `type` | Chart type identifier |
| `data` | Simple data input |
| `series` | Advanced structured series input |
| `labels` | Category labels |
| `title` | Title and subtitle |
| `theme` | Theme selection or overrides |
| `colors` | Explicit internal color overrides for chart surfaces, text, tooltips, axes, thresholds, and interaction accents |
| `renderer` | Rendering mode preference |
| `animation` | Motion behavior |
| `bar3d` | Depth, face shading, floor plane, and shadow tuning for `bar-3d` charts |
| `responsive` | Resize handling |
| `realtime` | Live update controls |
| `layout` | Padding, background, and frame options |
| `xAxis`, `yAxis` | Axis configuration |
| `grid` | Grid visibility and color |
| `legend` | Legend placement and visibility |
| `gauge` | Gauge and measurement-widget configuration |
| `thresholds` | Threshold lines and labels |
| `plugins` | Plugin registration |

## Future Expansion Areas

The current foundation is intentionally leaving room for:

- annotations
- accessibility
- advanced interactions
- events
- export
- widgets
- composition rules
- state handling
- domain-specific data contracts

## Color Override Example

```ts
createChart({
  container,
  type: "line",
  data: [14, 19, 17, 26],
  colors: {
    plotBackground: "#0c1425",
    plotBorder: "#20304a",
    grid: "#22324b",
    axis: "#93a8c4",
    pointStroke: "#0f172a",
    tooltipBackground: "#f8fafc",
    tooltipText: "#081221",
    interactiveGlow: "rgba(56, 189, 248, 0.22)"
  }
});
```
