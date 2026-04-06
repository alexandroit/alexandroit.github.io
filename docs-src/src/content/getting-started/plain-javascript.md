---
title: Plain JavaScript
description: Use Infinity Charts from a downloaded browser bundle without npm or a bundler.
heading: Plain JavaScript
summary: Self-hosted browser usage for simple HTML pages and script-tag workflows.
status: Stable
---

Infinity Charts is designed to work in plain JavaScript projects, not only through npm-based application builds.

If your team wants to ship charts in a simple HTML page, a server-rendered template, a CMS block, or an internal portal without a bundler, use the browser distribution files and the global `InfinityCharts` API.

This mode prioritizes convenience. If your team wants the engine to fetch chart modules on demand, prefer the ESM package entry instead of the single browser bundle.

## Browser Files

The browser build ships these files:

- `infinity-charts.js`
- `infinity-charts.min.js`

Use the minified file in production and the non-minified file when you want easier inspection during local development.

## ESM Browser Loading

If you want browser-native modules and on-demand built-in chart loading without npm, you can also import the ESM build from a module script instead of using the global bundle.

```html
<script type="module">
  import { createChart, loadChart } from "./dist/index.js";

  await loadChart("line");

  createChart({
    container: document.getElementById("chart"),
    type: "line",
    data: [14, 22, 19, 31]
  });
</script>
```

## Minimal HTML Example

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Infinity Charts Example</title>
    <style>
      #chart {
        width: 720px;
        height: 420px;
      }
    </style>
  </head>
  <body>
    <div id="chart"></div>

    <script src="./infinity-charts.min.js"></script>
    <script>
      InfinityCharts.create({
        container: document.getElementById("chart"),
        type: "line",
        title: "Monthly revenue",
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        data: [14, 18, 17, 26, 29],
        theme: "light"
      });
    </script>
  </body>
</html>
```

## Branded Browser API

The browser global intentionally exposes a small branded surface:

- `InfinityCharts.create(...)`
- `InfinityCharts.mount(...)`
- `InfinityCharts.usePack(...)`
- `InfinityCharts.registerPlugin(...)`

`create(...)` and `mount(...)` both create a chart instance. The goal is to keep script-tag usage readable in plain HTML without making the API feel tied to any framework.

## When This Mode Fits Best

Browser-first usage is especially useful for:

- self-hosted dashboard pages
- CMS or admin templates
- internal tools with very light frontend architecture
- prototypes that still need a serious charting engine
- teams that want to check compiled assets into their own deployment flow

## When To Prefer npm

Use the npm package when you want:

- ESM imports
- TypeScript autocompletion from the package
- bundler-based application builds
- internal on-demand chart loading
- tighter version control through package management

Both delivery modes are part of the product surface. Infinity Charts should feel first-class in plain JavaScript and in TypeScript projects.
