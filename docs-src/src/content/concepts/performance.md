---
title: Performance
description: Performance is part of the engine architecture, especially for dashboards and live updates.
heading: Performance
summary: Beautiful charts are not enough if updates and dense views do not stay responsive.
status: Stable
---

Infinity Charts is meant for products where charts are not isolated decorations. They often live inside dashboards, update frequently, and coexist with many other charts.

## Current Performance Decisions

The current foundation already leans on:

- chart instances instead of re-creation
- render scheduling
- scene diffing
- responsive resize control
- append-based updates

## Why Performance Shows Up Early

If performance is ignored in the first phase, later chart families become harder to build cleanly.

That is especially true for:

- realtime monitoring
- dense dashboards
- analytical scatter plots
- future heatmaps and large datasets

## Practical Guidance

- prefer updating an existing chart instance
- use rolling windows for streaming views
- disable extra visual weight in very dense panels
- keep animation subtle for frequently updating charts

## Longer-Term Performance Work

- Canvas renderer path
- smarter data decimation
- larger-dataset strategies
- heavier chart-family-specific optimizations

