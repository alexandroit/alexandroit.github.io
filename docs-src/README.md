# Infinity Charts Documentation

Standalone documentation project for `@revivejs/infinity-charts`.

This project is intentionally separate from the core engine repository area so the documentation can evolve as its own product surface.

## Current scope

The documentation now includes:

- onboarding and quick-start pages for pure JavaScript and TypeScript usage
- live chart guides for `line`, `area`, `stacked-area`, `bar`, `bar-3d`, `combo`, `sparkline`, `scatter`, `gauge`, `gauge-semicircle`, `radial-progress`, `thermometer`, `battery`, `pie`, and `donut`
- architecture pages for rendering, realtime updates, themes, plugins, layout, data pipeline, and overlays
- pattern guides for dashboards, monitoring, finance, and embedded widgets
- live demos and a playground backed by the same core engine package

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Notes

- During repository development, the docs app consumes the core package source through a Vite alias.
- The site is focused on vanilla JavaScript / TypeScript usage, not framework wrappers.
- Use `npm run preview` to test a production-like build locally.

## License

MIT. See `LICENSE`.
