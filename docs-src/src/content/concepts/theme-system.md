---
title: Theme System
description: Token-based theming makes Infinity Charts easier to scale across products and documentation.
heading: Theme System
summary: Themes are not just palettes. They are the visual contract of the engine.
demo: theme-switcher
status: Stable
---

Infinity Charts uses token-based theming instead of a flat bag of color overrides.

## Built-In Themes

The current foundation includes:

- `light`
- `dark`

These are not only palette swaps. They also define:

- surface colors
- plot background colors
- plot border colors
- border and grid structure
- text and title colors
- semantic state colors
- typography defaults

## Explicit Color Overrides

When a team does not want to redefine an entire theme object, Infinity Charts also supports a `colors` group for targeted internal overrides.

That surface is useful for changing things such as:

- plot background and plot border
- axis and grid colors
- legend and title text
- tooltip background and text
- point stroke color
- default threshold color
- gauge track and needle color
- hover glow accent

## Why Tokens Matter

Token-based theming is important because the engine is meant to power:

- standalone charts
- dashboard cards
- monitoring panels
- future widgets

A maintainable visual system has to survive all of those environments.

## Runtime Theme Switching

The chart instance can change themes without being recreated:

```ts
chart.setTheme("dark");
```

## CSS-Based Overrides

When a product team wants styling to come from the application stylesheet instead of the chart config, use the CSS override surface described in [CSS Overrides](/concepts/css-overrides).

## Long-Term Direction

The docs and the product should evolve together so examples stay visually coherent and the theming model stays documentable.
