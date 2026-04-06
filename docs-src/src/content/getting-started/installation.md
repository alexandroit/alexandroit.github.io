---
title: Installation
description: Install and wire up Infinity Charts in a plain JavaScript or TypeScript project.
heading: Installation
summary: Setup guidance for the core engine.
status: Stable
---

Infinity Charts is designed to stay usable from plain JavaScript while remaining strongly typed for TypeScript consumers.

## Package

Install the core package from npm:

```bash
npm install @revivejs/infinity-charts
```

The package entry is the best path when you want the engine to load chart implementations on demand instead of shipping the whole chart catalog to the browser up front.

## Browser Usage Without npm

If you want a plain HTML page without a bundler, use the browser bundle and the global `InfinityCharts` API.

```html
<div id="chart"></div>
<script src="./infinity-charts.min.js"></script>
<script>
  InfinityCharts.create({
    container: document.getElementById("chart"),
    type: "line",
    data: [12, 18, 15, 22]
  });
</script>
```

The browser distribution is intended for teams that prefer:

- downloaded assets checked into the project
- simple HTML pages
- script tags without package management
- self-hosted distributions instead of npm-based builds

For a fuller browser-first guide, see [Plain JavaScript](/getting-started/plain-javascript).

## Install From Source

If you are contributing from source or testing the repository directly, install dependencies and build the core package before using the examples or documentation playground:

```bash
npm install
npm run build
```

## Basic Project Setup

At minimum, you need:

1. A container element in the DOM
2. An import of `createChart`
3. Data and a chart type

```html
<div id="chart"></div>
```

```ts
import { createChart } from "@revivejs/infinity-charts";

createChart({
  container: document.querySelector("#chart"),
  type: "line",
  data: [12, 18, 15, 22]
});
```

If you want to preload specific built-in charts before a route or dashboard opens, use:

```ts
import { preloadCharts } from "@revivejs/infinity-charts";

await preloadCharts(["line", "bar", "donut"]);
```

For browser-first usage, the equivalent entry points are `InfinityCharts.create(...)` and `InfinityCharts.mount(...)`.

## Project Scope

Infinity Charts is the framework-agnostic core package. It is designed for direct use from plain JavaScript and TypeScript without requiring React, Vue, Angular, or any other UI runtime.

## Why There Are No Framework Installation Guides Here

This documentation does not include React, Vue, or Angular setup sections because the core package is intentionally framework-agnostic.

If wrappers are created later, they should be documented in their own package-specific documentation.
