---
title: Rendering Architecture
description: Renderer-neutral scene composition is one of the core architectural choices in Infinity Charts.
heading: Rendering Architecture
summary: SVG is first, but renderer neutrality is the real design decision.
status: Stable
---

Infinity Charts is not being shaped as an SVG-only product even though SVG is the first active renderer.

## Current Path

Today the engine:

1. Resolves chart config and normalized payload
2. Computes frame and layout
3. Builds a renderer-agnostic scene tree
4. Diffs that scene into an SVG renderer

## Why This Is Better Than Direct DOM Drawing

Direct chart-to-DOM rendering tends to create long-term lock-in.

The scene model gives the platform a cleaner path toward:

- Canvas for larger datasets
- WebGL for dense or 3D-heavy cases
- shared chart definitions across renderers

## SVG First

SVG is still the right starting point for the current phase because it offers:

- good visual clarity
- simpler inspection
- better early-stage maintainability
- stronger near-term accessibility potential

## What The Docs Expect Over Time

As more chart families arrive, renderer strategy should remain invisible to most users.

The API should stay stable even if the best renderer for a given chart family changes later.

