---
title: Build a Live KPI Board
description: Use sparkline, line, and card-level composition to create a dense live KPI surface.
heading: Build a Live KPI Board
summary: Small charts are often where product dashboards feel either premium or clumsy.
demo: realtime-panel
status: Guide
---

Live KPI boards are one of the most common product requirements in SaaS and ops tooling.

## Recommended Building Blocks

- sparkline for compact trend context
- line for the primary live metric
- donut for state distribution
- textual KPI with semantic state color

## Core Rules

- the number should be readable without hover
- the sparkline should support trend reading in one glance
- the main chart should handle append updates cheaply
- thresholds should carry the meaning, not just the palette

## Why This Tutorial Exists

Mature chart products document complete dashboard patterns because teams rarely ship charts in isolation. They ship metric boards, status walls, and operational control surfaces.

Infinity documentation should do the same from the start.
