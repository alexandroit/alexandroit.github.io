---
title: Bar and Column Chart
description: Compare categorical values with a grouped vertical bar or column layout.
heading: Bar and Column Chart
summary: The current `bar` type acts as the core vertical categorical comparison chart.
demo: bar-environments
status: Live
---

The current first-phase `bar` chart behaves as a vertical categorical comparison chart, which many teams would also describe as a column chart.

## Best For

- environment comparisons
- team output
- monthly totals
- grouped category comparisons

## Current Strengths

- grouped multi-series layout
- shared cartesian axes
- threshold overlays
- compact dashboard card fit

## Naming Note

The long-term platform will likely expose clearer separation between horizontal bar and vertical column variants. In the current foundation, `bar` covers the vertical comparison use case.

## Example

```ts
createChart({
  container,
  type: "bar",
  labels: ["CPU", "Memory", "Requests", "Latency"],
  series: [
    { name: "Production", data: [82, 74, 91, 38] },
    { name: "Staging", data: [51, 42, 64, 47], color: "#38bdf8" }
  ]
});
```

