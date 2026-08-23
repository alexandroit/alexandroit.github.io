# Stackline Documentation Host

This repository is the deployment host for versioned Stackline package
documentation, compatibility demos, and selected historical examples.

## Repository Layout

- `docs-src/` contains the source for the shared documentation portal.
- `docs/` contains generated package documentation and demo bundles.
- `angular2-multiselect-dropdown/` preserves historical Angular multiselect
  documentation.
- `archive/`, `page/`, `platform/`, and `projects/` contain retained public
  pages used by existing links.

Generated files should be changed through the corresponding package or portal
source whenever possible. Direct edits to compiled bundles can be overwritten
by the next documentation deployment.

## Security

Report vulnerabilities through the private reporting instructions in the
organization [security policy](https://github.com/alexandroit/.github/blob/main/SECURITY.md).

## Licensing

This deployment repository contains material from multiple projects and is not
offered under one blanket license. The original portal source in `docs-src/` is
MIT licensed. Generated documentation, examples, dependencies, and historical
artifacts retain the licenses and notices of their source projects.

See [NOTICE.md](NOTICE.md) before redistributing repository contents.
