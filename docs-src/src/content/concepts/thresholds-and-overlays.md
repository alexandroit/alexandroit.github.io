---
title: Thresholds and Overlays
description: Thresholds are already in the foundation and should grow into a broader overlay system.
heading: Thresholds and Overlays
summary: Enterprise charting needs more than lines and bars. It needs context layers.
status: In Progress
---

Most dashboard users do not want raw values alone. They want values with context:

- target lines
- danger zones
- maintenance windows
- forecast bands
- anomaly callouts
- event markers

Infinity Charts already supports threshold lines in the core. That is the first step toward a more complete overlay model.

## Current Coverage

- y-axis threshold lines
- threshold labels
- threshold colors and dash styles

## Why Overlays Matter

Charts become decision tools when they encode operational meaning, not just magnitude.

Examples:

- “above 85% CPU is risky”
- “deploy started here”
- “forecast begins here”
- “error budget exhausted”

## Recommended Infinity Model

Phase 1:

- thresholds
- range bands
- target markers

Phase 2:

- point and interval annotations
- shaded maintenance windows
- badge and callout overlays

Phase 3:

- interaction-driven overlays
- alert-state overlays
- forecast confidence regions

Overlays should be treated as composable chart layers, not chart-specific hacks.
