---
title: Shared Behaviors
description: Define the behaviors that every serious Infinity Charts component should inherit, regardless of chart family.
heading: Shared Behaviors
summary: The product becomes premium when charts feel related, not random.
status: Strategic
---

Infinity Charts should not become a pile of unrelated renderers. The platform only feels professional when charts share the same behavioral contract.

## Universal States

Every serious chart or widget should be able to express:

- loading
- empty
- error
- partial data
- no permission
- live reconnecting

## Universal Interactions

The long-term baseline should include:

- hover and touch-friendly tooltips
- click to drilldown
- hover highlighting that makes the active datum obvious
- legend toggles
- loading states for charts that are fetched on demand
- reset zoom
- fullscreen mode
- export to PNG, SVG, and CSV
- copy image
- theme switching

## Data Contract Expectations

The engine should keep accepting multiple levels of data complexity:

- arrays of primitive values
- structured object arrays
- multi-series payloads
- timestamps
- incremental updates
- streaming sources
- partial updates without rebuilding the whole chart

## Performance Expectations

Breadth is only valuable if charts remain fast enough for real product use.

That means the platform should continue moving toward:

- intelligent downsampling
- virtualization for dense scenes
- motion that can be simplified or disabled
- Canvas and later WebGL paths where needed
- stable responsive rendering under resize pressure

## Accessibility Expectations

Every family should eventually inherit a stronger accessibility layer:

- keyboard navigation where interaction exists
- accessible focus states
- readable contrast
- color-vision-safe palette modes
- labels and summaries that are screen-reader friendly

## Event System Expectations

The event model should stay consistent across families:

- `onHover`
- `onPointClick`
- `onLegendToggle`
- `onZoom`
- `onBrushChange`
- `onDrilldown`
- `onThresholdCross`
- `onLiveUpdate`

## Why This Matters

The point is not only to have many charts. The point is to make a wide platform still feel coherent.

That coherence is what turns chart count into product quality.

Today, Infinity Charts already has the first live layer of this idea in the engine:

- hover targets on core live charts
- click events for points, slices, and gauges
- lazy chart loading states in the ESM build
