---
title: Data Pipeline
description: The engine needs a stronger data model than raw series arrays if it wants to scale into a platform.
heading: Data Pipeline
summary: Simple input stays easy, but long-term growth depends on clearer dataset and transform foundations.
status: Strategic
---

Infinity Charts already normalizes simple `data` and `series` input into an internal payload. That is the right start, but the next serious step is to turn data handling into a first-class subsystem.

## Why This Matters

Broad chart coverage breaks down quickly when every chart expects slightly different raw input.

A stronger data pipeline unlocks:

- easier chart switching without rewriting data
- multi-series reuse from one source table
- transforms such as filter, sort, aggregate, binning, and rolling windows
- cleaner docs because the same mental model applies across chart families
- realtime updates with better control over append, replace, and windowing rules

## Current Foundation

The current engine already has a useful baseline:

- minimal input can be a simple array, record, or labeled data list
- series payloads are normalized before rendering
- append-based updates work without re-instantiating the chart
- chart definitions receive a stable internal payload instead of raw user input

## Recommended Infinity Direction

Phase the data system in three layers:

| Layer | Purpose | Status |
| --- | --- | --- |
| Input adapters | Accept arrays, records, labeled values, and explicit series | In progress |
| Internal dataset model | Shared dimensions, encoded fields, and reusable sources | Next |
| Transform pipeline | Filter, sort, rolling window, histogram binning, box plot prep, aggregation | Planned |

## Design Rules

- keep simple mode short enough for a first chart
- make advanced mode explicit rather than magical
- normalize once and reuse many times
- allow transforms to feed more than one series
- treat realtime append and sliding windows as part of the data pipeline, not a renderer hack

## Practical Implication

If Infinity wants to support statistical charts, flow charts, financial views, and dashboard widgets cleanly, the engine will eventually need a `dataset` and `transform` story that is visible in both API design and documentation.
