# Alexandro.Net Site Source

This folder generates the personal `alexandroit.github.io` site as a static editorial hub for the active Stackline portfolio.

## What it builds

- a magazine-style home page
- a paginated archive of project posts
- platform indexes for Vanilla JS, Angular, React, and Vue
- dedicated project dossier pages with direct links to live docs, GitHub, and npm when available
- a mirrored `docs/` output for GitHub Pages compatibility

## Scripts

```bash
npm install --package-lock-only
npm run build
npm run preview
```

## Notes

- the site is generated with plain Node.js from `build-site.mjs`
- every route is emitted as real HTML for crawlers and link previews
- the ad and analytics snippet is injected into every generated page head

## License

MIT. See `LICENSE`.
