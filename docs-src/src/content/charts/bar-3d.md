---
title: 3D Bar Chart
description: Use the first live 3D chart in Infinity Charts for premium category comparisons and depth-rich dashboard surfaces.
heading: 3D Bar Chart
summary: The 3D family starts here with a real chart in the core, not just a roadmap bullet.
demo: bar-3d-launch
status: Live
---

The 3D bar chart is the first live step into the 3D family of Infinity Charts.

## When To Use It

- premium product showcases
- executive dashboards that need strong visual hierarchy
- category comparisons where depth helps the presentation
- launch, growth, and portfolio surfaces that benefit from a more dimensional treatment

## When Not To Use It

- dense analytical views where precision matters more than theater
- accessibility-critical surfaces where a flatter chart is easier to parse
- dashboards that already feel visually overloaded

## Current Capabilities

- grouped multi-series comparison
- shared axis system
- thresholds
- configurable depth and face shading
- floor plane and projected shadow treatment
- explicit internal color overrides through `colors`
- integration with the same core lifecycle and update model as 2D charts

## Example

```ts
createChart({
  container,
  type: "bar-3d",
  title: { text: "Launch velocity", subtitle: "3D category comparison" },
  labels: ["Alpha", "Beta", "Gamma", "Delta"],
  series: [
    { name: "Velocity", data: [36, 48, 42, 58] },
    { name: "Quality", data: [28, 34, 39, 44], color: "#2dd4bf" }
  ],
  theme: "dark",
  colors: {
    plotBackground: "#0d1628",
    plotBorder: "#21314a",
    legendText: "#dbe6f5"
  },
  bar3d: {
    depthX: 28,
    depthY: 18,
    floorColor: "#111c32",
    floorLineColor: "#2a3a56",
    shadowColor: "rgba(2, 6, 23, 0.45)"
  }
});
```

## Why This Matters

The platform goal is not a handful of flat starter charts. It is a wide visualization system. Shipping a first 3D chart in the core makes that direction visible in a concrete way.
