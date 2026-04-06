---
title: Build an Ops Dashboard
description: A practical path for assembling a monitoring dashboard with the current live chart set.
heading: Build an Ops Dashboard
summary: One chart is not the product. The dashboard is.
demo: dashboard-pattern
status: Guide
---

This tutorial focuses on composition rather than one isolated chart.

## Step 1

Start with the questions the dashboard must answer:

- Are we healthy right now
- Where is pressure building
- Which teams or systems are affected

## Step 2

Choose chart roles, not just chart types:

- line for the top trend
- bar for discrete comparison
- donut for status mix
- sparkline for compact side metrics

## Step 3

Keep card language consistent:

- same theme family
- stable spacing
- restrained motion
- semantic colors for status

## Step 4

Add thresholds where a value becomes operationally important.

## Step 5

If the dashboard is live, prefer append-style updates and capped windows instead of full replacement whenever possible.

See also [Realtime Monitoring](/patterns/realtime-monitoring) and [Operations Dashboards](/patterns/operations-dashboards).
