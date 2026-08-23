# Security Policy

## Scope

This repository publishes static documentation assembled from the maintained
Stackline package repositories. Package source, build configuration, dependency
updates, and primary security fixes belong in the corresponding canonical
repository. Independently exploitable behavior on the published site remains in
scope here.

Generated bundles under `docs/` are deployment copies, not package source.
Static-analysis findings confined to a generated copy are verified against the
canonical source and actual input flow before they are classified. A finding is
not dismissed merely because it appears in generated output.

## Reporting a vulnerability

Report suspected vulnerabilities privately through
[GitHub Security Advisories](https://github.com/alexandroit/alexandroit.github.io/security/advisories/new).
Do not publish exploit details in a GitHub issue.

Include the affected URL, browser, a minimal synthetic reproduction, realistic
impact, and the canonical package repository when known. Remove credentials,
personal data, and proprietary application code.

We aim to acknowledge reports within three business days and provide an initial
assessment within seven business days. Coordinated disclosure is preferred.
