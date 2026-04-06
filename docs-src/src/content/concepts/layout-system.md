---
title: Layout System
description: Serious charting engines need a layout model that can scale from one chart to dense dashboard surfaces.
heading: Layout System
summary: Titles, plot area, legend, and future panels should be explicit layout zones, not incidental spacing.
status: Strategic
---

Infinity Charts already computes a chart frame with `header`, `body`, `plot`, and optional `legend` bounds. That is more important than it may look because layout becomes one of the hardest parts of a charting platform once dashboard density increases.

## Current Zones

- outer surface
- header
- body
- plot area
- legend area

This keeps renderers focused on drawing instead of recomputing page geometry from scratch.

## Why It Needs To Go Further

The inspiration images repeatedly point to product patterns that are not just “a plot inside a box”.

They show:

- KPI plus chart cards
- status chips beside titles
- dense legends
- compact monitoring tiles
- radial widgets beside trend charts
- side annotations and callout space

## What A Mature Layout Engine Should Handle

- title and subtitle hierarchy
- legends on any edge with compact wrapping rules
- plot padding rules per chart family
- room for threshold labels and future annotations
- compact widget layouts such as sparkline cards
- multi-panel compositions later for small multiples and dashboard-native widgets

## Direction For Infinity

Near term:

- keep chart frame calculation centralized
- extend layout tokens for compact cards and widget modes
- make header and legend behavior more configurable

Later:

- add composition primitives for panels and card chrome
- support synchronized cross-chart layouts
- support mixed widget surfaces with KPI, sparkline, gauge, and chart blocks

The layout system is where “simple by default, infinite by design” becomes real.
