---
title: Animation System
description: Animation in Infinity Charts should improve comprehension and polish without harming dashboard readability.
heading: Animation System
summary: Motion is part of the product system, not garnish.
status: Stable
---

Animation in Infinity Charts is treated as a product capability rather than a marketing effect.

## What Animation Should Help With

- initial understanding
- update transitions
- state continuity
- live monitoring readability
- perceived quality

## What Animation Should Not Become

- noisy by default
- too slow for operational dashboards
- a substitute for information hierarchy

## Current Foundation

The engine currently resolves:

- `enabled`
- `duration`
- `easing`
- `stagger`
- `mode`

It also respects reduced-motion preferences when available.

## Expected Evolution

Later phases should expand this into:

- enter / update / exit semantics
- per-series motion profiles
- realtime-safe presets
- richer docs showcase motion

## Recommendation

Use subtle motion for production dashboards and save more expressive sequences for demos, marketing, and learning experiences.

