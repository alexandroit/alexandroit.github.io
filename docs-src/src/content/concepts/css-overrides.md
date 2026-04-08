---
title: CSS Overrides
description: Override chart visuals from CSS without rewriting the chart config.
heading: CSS Overrides
summary: Infinity Charts exposes root classes and CSS variables so product teams can restyle charts from their own stylesheet.
status: Stable
---

Infinity Charts can be themed from JavaScript with `theme`, `palette`, and `colors`, but that is not the only path.

The engine also exposes a CSS-based override surface so teams can align charts with an existing design system or product shell.

## Root Classes

Every mounted chart adds stable classes to the container and SVG root:

- `.infinity-chart-host`
- `.infinity-chart-host--line`
- `.infinity-chart-host--pie`
- `.infinity-chart-host--gauge`
- `.infinity-chart-theme--light`
- `.infinity-chart-theme--dark`
- `.infinity-chart-svg`
- `.infinity-chart-svg--pie`

That means you can scope overrides by chart type without touching the chart config:

```html
<div id="revenue-chart" class="finance-surface"></div>
```

```css
.finance-surface.infinity-chart-host--line {
  --ic-plot-background: #10151f;
  --ic-plot-border: #263247;
  --ic-title: #f7fbff;
  --ic-text: #d3dbea;
  --ic-grid: rgba(255, 255, 255, 0.12);
  --ic-series-1: #5eead4;
  --ic-series-2: #f59e0b;
}
```

## CSS Variables

These variables are available on every chart:

- `--ic-background`
- `--ic-surface`
- `--ic-surface-alt`
- `--ic-plot-background`
- `--ic-plot-border`
- `--ic-border`
- `--ic-grid`
- `--ic-axis`
- `--ic-text`
- `--ic-muted-text`
- `--ic-title`
- `--ic-legend-text`
- `--ic-tooltip-background`
- `--ic-tooltip-text`
- `--ic-point-stroke`
- `--ic-threshold`
- `--ic-gauge-track`
- `--ic-gauge-needle`
- `--ic-success`
- `--ic-warning`
- `--ic-danger`
- `--ic-info`
- `--ic-interactive-glow`
- `--ic-shadow`
- `--ic-font-family`
- `--ic-series-1` through `--ic-series-8`

These variables always fall back to the active Infinity Charts theme, so charts still render correctly even when you do not define any override.

## Common Internal Classes

For element-level overrides, the engine also exposes stable classes on common SVG nodes:

- `.ic-title`
- `.ic-subtitle`
- `.ic-legend-label`
- `.ic-legend-dot`
- `.ic-value-label`
- `.ic-threshold-line`
- `.ic-threshold-label`
- `.infinity-chart-tooltip`

Example:

```css
.finance-surface.infinity-chart-host--pie .ic-value-label {
  fill: #3a2412;
  font-weight: 800;
}

.finance-surface .ic-legend-label {
  fill: #4d5b70;
}
```

## Practical Pattern

Use JavaScript config for chart behavior.

Use CSS when the visual system should follow:

- brand themes
- dashboard card variants
- admin panel skins
- tenant-specific themes
- white-label products

That separation keeps business behavior in the chart config and product skinning in the stylesheet.

## Example

```ts
import { createChart } from "@stackline/infinity-charts";

createChart({
  container: document.querySelector("#revenue-chart"),
  type: "line",
  title: "Revenue vs plan",
  labels: ["Q1", "Q2", "Q3", "Q4"],
  series: [
    { name: "Revenue", data: [42, 51, 57, 68] },
    { name: "Plan", data: [40, 48, 56, 60] }
  ],
  theme: "light"
});
```

```css
#revenue-chart {
  --ic-plot-background: #0f1724;
  --ic-plot-border: #22314a;
  --ic-title: #f7fbff;
  --ic-muted-text: #93a4bd;
  --ic-grid: rgba(148, 163, 184, 0.18);
  --ic-series-1: #60a5fa;
  --ic-series-2: #f59e0b;
  --ic-tooltip-background: #08111c;
  --ic-tooltip-text: #f8fafc;
}
```

## Important Detail

Palette variables affect the default series colors.

If you pass explicit `color` values inside `series` or `data`, those explicit colors take precedence unless you target the rendered nodes directly with CSS selectors.
