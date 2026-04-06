---
title: Events and Hooks
description: Lifecycle events and plugin hooks define how the engine can be observed and extended.
heading: Events and Hooks
summary: Events and hooks are part of the platform boundary.
status: Stable
---

The engine exposes two related extension surfaces:

- public event subscriptions through `chart.on(...)`
- plugin hooks around lifecycle stages

## Current Event Direction

The current foundation emits both render and interaction-oriented events through the instance event bus.

Examples now include:

- `render`
- `load:start`
- `load:end`
- `load:error`
- `interaction:hover`
- `interaction:leave`
- `interaction:click`
- `point:hover`
- `point:click`
- `slice:click`
- `gauge:click`

## Plugin Hook Direction

The plugin system currently includes hook positions for:

- `beforeInit`
- `afterInit`
- `beforeRender`
- `afterRender`
- `onUpdate`
- `beforeDestroy`
- `afterDestroy`

## Why This Matters

These hooks are important for future:

- instrumentation
- annotations
- extension packs
- diagnostics
- synchronized dashboard behaviors
