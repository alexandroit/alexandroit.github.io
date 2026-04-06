---
title: Configuration Model
description: Understand how Infinity Charts balances simple mode and advanced enterprise-grade configuration.
heading: Configuration Model
summary: The configuration system is layered rather than fragmented.
status: Stable
---

Infinity Charts is designed around one product rule:

> simple by default, infinite by design

That principle directly shapes the configuration system.

## Simple Mode

Simple mode focuses on fast adoption.

Typical fields:

- `container`
- `type`
- `data`
- `labels`
- `title`
- `theme`

Example:

```ts
createChart({
  container,
  type: "bar",
  title: "Environment usage",
  data: {
    Production: 78,
    Staging: 42,
    QA: 26
  }
});
```

## Advanced Mode

Advanced mode groups behavior by concern instead of throwing everything into a flat namespace.

Important groups include:

- `series`
- `xAxis`
- `yAxis`
- `grid`
- `layout`
- `legend`
- `theme`
- `animation`
- `responsive`
- `realtime`
- `thresholds`
- `plugins`

Example:

```ts
createChart({
  container,
  type: "line",
  title: {
    text: "Revenue vs plan",
    subtitle: "Quarterly snapshot"
  },
  labels: ["Q1", "Q2", "Q3", "Q4"],
  series: [
    { name: "Revenue", data: [42, 51, 57, 68] },
    { name: "Plan", data: [40, 48, 56, 60], color: "#7dd3fc" }
  ],
  thresholds: [
    { value: 60, axis: "y", label: "Target" }
  ],
  theme: "dark"
});
```

## Internal Normalization

Both simple and advanced mode are normalized into one resolved configuration before rendering.

That keeps the engine maintainable because chart definitions do not have to care where the input came from.

## Long-Term Rule

When new features are introduced, they should map into the existing grouping model rather than creating scattered special-case options.

