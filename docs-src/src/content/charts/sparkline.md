---
title: Sparkline
description: Use sparklines inside KPI cards and dense dashboard surfaces.
heading: Sparkline
summary: Compact charts are a product feature, not a reduced-quality afterthought.
demo: kpi-sparkline
status: Live
---

Sparklines are miniature trend views designed to live inside cards, tables, and compact monitoring panels.

## When To Use It

- KPI cards
- dense monitoring tiles
- tables with embedded trend context
- side-by-side metric comparisons

## Why It Matters

Compact charts are where many libraries feel awkward. Teams frequently want a professional KPI card with a tiny trend line, but the API often assumes a full chart canvas with full chrome.

## Current Capabilities

- chart type dedicated to compact rendering
- reduced layout chrome by default
- endpoint emphasis
- current-value display
- theme-aware card presentation

## Example

```ts
createChart({
  container,
  type: "sparkline",
  series: [
    { name: "Net retention", data: [12, 15, 14, 18, 21, 20, 24] }
  ],
  theme: "dark"
});
```

## Product Direction

Sparkline is a foundation for future dashboard widgets such as:

- KPI plus sparkline cards
- table cell charts
- status panels
- monitoring panels with thresholds and anomaly states
