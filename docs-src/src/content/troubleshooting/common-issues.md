---
title: Common Issues
description: Practical troubleshooting notes for early-stage Infinity Charts integrations.
heading: Common Issues
summary: Fast checks for the most common integration mistakes.
status: Stable
---

## The Chart Does Not Render

Check:

- the container exists
- the container has measurable width and height
- the chart type is registered
- the data shape matches the selected chart family

## The Container Exists But The Chart Has No Size

This usually means the container is inside a collapsed or unsized layout.

Fix:

- give the container a height
- call `chart.resize()` after the layout becomes visible

## Realtime Updates Feel Heavy

Check whether you are:

- appending too frequently without batching
- animating too aggressively
- re-creating the chart instead of updating the existing instance

## Theme Changes Look Inconsistent

Use theme tokens consistently rather than mixing large numbers of hardcoded per-series colors.

## The Docs Mention A Chart That Is Not Live Yet

Use the [Chart Explorer](/chart-explorer) and [Chart Coverage](/roadmap/chart-coverage) pages to confirm whether a chart is:

- live
- planned
