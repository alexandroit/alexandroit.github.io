---
title: Dashboard Composition
description: Combine charts into readable cards, panels, and mixed dashboard surfaces.
heading: Dashboard Composition
summary: The platform is being built for dashboard composition, not isolated screenshots.
demo: dashboard-pattern
status: Stable
---

Infinity Charts should not be understood as a single-chart canvas product. The target product environment is often a dashboard with:

- multiple cards
- mixed chart families
- summary values
- compact legends
- dense but readable spacing

## Composition Rules

Good dashboard composition usually depends on:

- consistent card spacing
- restrained motion
- clear title hierarchy
- semantic coloring
- visual contrast between cards and plots

## Why The Core Architecture Cares

Dashboard needs affect core engine design:

- titles and legends must be reusable
- realtime updates must be low overhead
- themes must work across many cards at once
- compact chart variants need clean defaults

## Recommendation

Design at the level of **systems of charts**, not isolated chart screenshots.

