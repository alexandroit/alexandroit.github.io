---
title: Performance Checks
description: Quick ways to reason about runtime cost during early integration and testing.
heading: Performance Checks
summary: A lightweight troubleshooting page for identifying the first performance bottlenecks.
status: Stable
---

When charts feel slower than expected, start with the simplest checks first.

## First Checks

1. Are you re-creating charts instead of updating them?
2. Are you appending too many points without a rolling window?
3. Are several large charts resizing repeatedly inside a reactive layout?
4. Are you using more motion than the use case really needs?

## Simple Workflow

- disable animation temporarily
- compare initial render vs update behavior
- reduce point count for streaming views
- confirm container size stability

## Important Reminder

Performance evaluation should reflect the real dashboard conditions where charts will run, not just a single isolated chart on a blank page.

