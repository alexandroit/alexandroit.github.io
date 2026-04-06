---
title: Realtime Monitoring
description: Realtime monitoring requires more than live points; it needs state, thresholds, and readable update behavior.
heading: Realtime Monitoring
summary: Monitoring views are a major target use case for the platform.
demo: realtime-panel
status: Stable
---

Realtime monitoring is not just a line chart with a timer.

Operational surfaces typically need a combination of:

- live append behavior
- thresholds
- quick status recognition
- compact KPIs
- stable motion

## What Monitoring Wants From The Engine

- cheap updates
- rolling windows
- clean threshold overlays
- chart reuse inside dense cards
- future support for anomaly and state overlays

## Product Direction

Infinity Charts should eventually expose stronger monitoring-oriented widgets on top of the current core primitives.

This page is a reminder that the roadmap should not stop at generic chart types.

