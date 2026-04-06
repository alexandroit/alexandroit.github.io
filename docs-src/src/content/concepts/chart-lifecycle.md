---
title: Chart Lifecycle
description: Learn how chart instances are created, updated, resized, and destroyed.
heading: Chart Lifecycle
summary: Instance lifecycle matters for integrations, performance, and long-term maintainability.
status: Stable
---

Infinity Charts uses an instance lifecycle rather than a fire-and-forget rendering model.

## Lifecycle Stages

The current engine foundation follows this flow:

1. Resolve the container
2. Normalize configuration
3. Normalize data into a chart payload
4. Build chart frame and scene
5. Diff into the active renderer
6. Emit lifecycle and plugin hooks

## Instance Methods

The public instance API currently includes:

- `update(...)`
- `updateSeries(...)`
- `appendData(...)`
- `appendBatch(...)`
- `replaceData(...)`
- `setTheme(...)`
- `resize(...)`
- `registerPlugin(...)`
- `on(...)`
- `destroy()`

## Why This Matters

For serious products, lifecycle is not a small detail. It affects:

- dashboard refresh behavior
- memory discipline
- plugin integration
- responsive handling
- realtime updates

## Destruction

Always destroy chart instances when their containers are removed or replaced.

```ts
const chart = createChart(config);

// later
chart.destroy();
```

This becomes especially important in dashboard editors, SPA views, and custom component systems.

