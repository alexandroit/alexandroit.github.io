---
title: Accessibility and Responsive Behavior
description: Accessibility and responsive behavior are platform concerns, not afterthoughts.
heading: Accessibility and Responsive Behavior
summary: Charts need to stay readable across containers, screen sizes, and interaction conditions.
status: In Progress
---

Accessibility and responsive behavior should be part of chart system design from the beginning.

## Responsive Concerns

For Infinity Charts, responsive behavior includes:

- container resize handling
- plot area recalculation
- legend adaptation
- smaller-card readability
- compact dashboard layouts

## Accessibility Concerns

Important areas include:

- readable contrast
- semantic chart labels
- sensible motion defaults
- avoiding tooltip-only meaning
- future keyboard-friendly interaction patterns

## Current State

The first foundation already includes:

- automatic container measurement
- resize handling
- reduced-motion awareness in animation resolution
- basic renderer-level aria labeling

## What Still Needs More Work

- stronger accessibility metadata
- more explicit keyboard patterns
- richer screen-reader guidance
- chart-family-specific responsive recipes

