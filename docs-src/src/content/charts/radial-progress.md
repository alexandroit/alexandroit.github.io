---
title: Radial Progress
description: Use a ring-style radial progress chart for modern KPI completion widgets and goal tracking.
heading: Radial Progress
summary: A cleaner, minimal circular progress primitive for product dashboards.
demo: radial-progress
status: Live
---

Radial progress is the minimal sibling of the gauge family. Instead of a needle, it focuses on a clean progress arc, center value, and threshold-aware status.

## Best Use Cases

- goal completion widgets
- quota tracking
- onboarding or rollout progress
- KPI surfaces where the visual should feel lighter than a full gauge

## Current Capabilities

- ring-style progress arc
- centered KPI readout
- threshold coloring
- browser-bundle friendly config

## Example

```ts
createChart({
  container,
  type: "radial-progress",
  data: [{ label: "Completion", value: 78 }],
  gauge: {
    min: 0,
    max: 100,
    unit: "%",
    bands: [
      { from: 0, to: 60, color: "#38bdf8", label: "Building" },
      { from: 60, to: 85, color: "#0ea5e9", label: "On pace" },
      { from: 85, to: 100, color: "#22c55e", label: "Strong" }
    ]
  }
});
```
