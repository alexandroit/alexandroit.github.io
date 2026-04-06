---
title: Area Chart
description: Use area charts when you want trend plus volume presence in the same visual.
heading: Area Chart
summary: The area chart extends line semantics with stronger accumulation and presence cues.
demo: area-forecast
status: Live
---

Area charts are useful when a plain line is too light and a bar chart is too discrete.

## Good Fits

- capacity planning
- demand accumulation
- forecast envelopes
- volume-oriented trend views

## Tradeoff

Area charts bring stronger visual weight, which is helpful for emphasis but can also create clutter faster in dense multi-series layouts.

## Current State

The current engine foundation supports:

- single and multi-series area charts
- shared cartesian axis system
- the same theme and legend infrastructure as line charts

## Recommendation

Use area charts sparingly in dense dashboards. They are best when the filled region adds meaning, not just decoration.

