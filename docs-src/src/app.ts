import { chartCatalog, chartCatalogStats, type CatalogChart } from "./data/chart-catalog";
import { demos, getDemo, mountDemoWithDisplayControls } from "./data/demos";
import { navigation, topLinks, type NavigationItem } from "./data/navigation";
import {
  getPlaygroundExample,
  playgroundExamples,
  playgroundFamilies,
  type PlaygroundExample,
} from "./data/playground-examples";
import { documentationPages, getDocumentationPage, type DocumentationPage } from "./lib/content";
import { findBreadcrumbTrail } from "./lib/navigation";
import { searchDocumentation } from "./lib/search";
import {
  attachThreeDConceptPreview,
  renderThreeDConceptPreview,
} from "./lib/three-d-concepts";
import {
  attachBlueprintConceptPreview,
  renderBlueprintConceptPreview,
} from "./lib/blueprint-concepts";

let cleanupDemo: (() => void) | undefined;
let cleanupSpecial: (() => void) | undefined;

const explorerFilters = [
  { id: "all", label: "All" },
  { id: "live", label: "Live" },
  { id: "planned", label: "Planned" },
  { id: "3d", label: "3D" },
  { id: "dashboard", label: "Dashboard" },
  { id: "statistical", label: "Statistical" },
  { id: "financial", label: "Financial" },
  { id: "flow", label: "Flow" },
  { id: "hierarchy", label: "Hierarchy" },
  { id: "geo", label: "Geo" },
] as const;

const normalizePath = (path: string): string => {
  const normalized = path.replace(/\/+$/, "") || "/";
  return normalized === "" ? "/" : normalized;
};

const readRoutePath = (): string => {
  const params = new URLSearchParams(window.location.search);
  return normalizePath(params.get("page") ?? "/");
};

const buildDocHref = (
  path: string,
  extraParams?: Record<string, string | undefined>,
): string => {
  const params = new URLSearchParams();
  const normalized = normalizePath(path);

  if (normalized !== "/") {
    params.set("page", normalized);
  }

  Object.entries(extraParams ?? {}).forEach(([key, value]) => {
    if (value) {
      params.set(key, value);
    }
  });

  const query = params.toString();
  return query ? `./?${query}` : "./";
};

const rewriteInternalDocLinks = (html: string): string =>
  html.replace(/href="(\/[^"]*)"/g, (_match, path) => {
    const [pathname, queryString = ""] = String(path).split("?");
    const params = new URLSearchParams(queryString);
    const extra = Object.fromEntries(params.entries());
    return `href="${buildDocHref(pathname, extra)}"`;
  });

const matchesCatalogFilter = (
  chart: CatalogChart,
  filterId: (typeof explorerFilters)[number]["id"],
): boolean => {
  if (filterId === "all") {
    return true;
  }

  if (filterId === "live" || filterId === "planned") {
    return chart.status === filterId;
  }

  if (filterId === "3d") {
    return chart.tags.includes("3d") || chart.family === "3D";
  }

  if (filterId === "dashboard") {
    return chart.tags.includes("dashboard") || chart.tags.includes("widget");
  }

  if (filterId === "statistical") {
    return chart.family === "Statistical";
  }

  if (filterId === "financial") {
    return chart.family === "Financial";
  }

  if (filterId === "flow") {
    return chart.family === "Flow";
  }

  if (filterId === "hierarchy") {
    return chart.family === "Hierarchical";
  }

  if (filterId === "geo") {
    return chart.family === "Geospatial";
  }

  return true;
};

const findDemoDocumentationPath = (demoId: string): string | undefined =>
  documentationPages.find((page) => page.frontmatter.demo === demoId)?.path;

const buildPlaygroundLink = (exampleId: string, family?: string): string => {
  const params = new URLSearchParams();
  params.set("example", exampleId);

  if (family) {
    params.set("family", family);
  }

  return buildDocHref("/playground", Object.fromEntries(params.entries()));
};

const demoPlaygroundMap: Record<string, string> = {
  "quick-start-line": "line",
  "line-overview": "line",
  "area-forecast": "area",
  "bar-environments": "bar",
  "bar-3d-launch": "bar-3d",
  "stacked-area-capacity": "stacked-area",
  "combo-plan-vs-actual": "combo",
  "scatter-correlation": "scatter",
  "donut-alerts": "donut",
  "gauge-health": "gauge",
  "gauge-semicircle": "gauge-semicircle",
  "radial-progress": "radial-progress",
  "thermometer-vertical": "thermometer",
  "thermometer-horizontal": "thermometer-horizontal",
  "battery-meter": "battery",
  "pie-allocation": "pie",
  "realtime-stream": "line",
  "theme-switcher": "area",
  "dashboard-pattern": "combo",
  "realtime-panel": "line",
  "kpi-sparkline": "sparkline",
};

const buildDemoPlaygroundLink = (demoId: string): string => {
  const exampleId = demoPlaygroundMap[demoId];
  const example = exampleId ? getPlaygroundExample(exampleId) : undefined;

  return exampleId
    ? buildPlaygroundLink(exampleId, example?.family)
    : "/playground";
};

const isActive = (currentPath: string, item: NavigationItem): boolean => {
  if (item.path && normalizePath(item.path) === currentPath) {
    return true;
  }

  return item.children?.some((child) => isActive(currentPath, child)) ?? false;
};

const renderNavigation = (items: NavigationItem[], currentPath: string): string =>
  items
    .map((item) => {
      const active = isActive(currentPath, item);

      if (!item.children?.length) {
        return `
          <a class="nav-link ${active ? "is-active" : ""}" href="${buildDocHref(item.path ?? "/")}">
            <span>${item.title}</span>
            ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ""}
          </a>
        `;
      }

      return `
        <details class="nav-group" ${active ? "open" : ""}>
          <summary>${item.title}</summary>
          <div class="nav-children">
            ${renderNavigation(item.children, currentPath)}
          </div>
        </details>
      `;
    })
    .join("");

const renderBreadcrumbs = (path: string): string => {
  const trail = findBreadcrumbTrail(path);

  if (!trail?.length) {
    return "";
  }

  return trail
    .filter((item) => item.path)
    .map((item) => {
      const itemPath = item.path ?? "/";
      return `<a href="${buildDocHref(itemPath)}">${item.title}</a>`;
    })
    .join("<span>/</span>");
};

const renderToc = (page: DocumentationPage | undefined): string => {
  if (!page || page.headings.length === 0) {
    return `<div class="toc-empty">This page focuses on overview content.</div>`;
  }

  return `
    <div class="toc-list">
      ${page.headings
        .filter((heading) => heading.depth <= 3)
        .map(
          (heading) => `
            <a class="toc-link depth-${heading.depth}" href="#${heading.anchor}">
              ${heading.text}
            </a>
          `,
        )
        .join("")}
    </div>
  `;
};

const withDisplayFlags = (code: string): string => {
  if (code.includes("showNumber") || !code.includes("createChart({")) {
    return code;
  }

  return code.replace(
    "createChart({\n",
    'createChart({\n  showNumber: true,\n  showLegend: true,\n  showTooltip: true,\n',
  );
};

const renderDemoBlock = (page: DocumentationPage): string => {
  if (!page.frontmatter.demo) {
    return "";
  }

  const demo = getDemo(page.frontmatter.demo);

  if (!demo) {
    return "";
  }

  return `
    <section class="doc-demo-block">
      <div class="doc-demo-header">
        <div>
          <p class="eyebrow">Live Example</p>
          <h2>${demo.title}</h2>
          <p>${demo.description}</p>
        </div>
      </div>
      <div class="doc-demo-grid">
        <div class="doc-demo-preview" data-demo="${demo.id}"></div>
        <div class="doc-demo-code">
          <pre><code>${withDisplayFlags(demo.code)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")}</code></pre>
        </div>
      </div>
    </section>
  `;
};

const renderPage = (page: DocumentationPage): string => `
  <article class="doc-page">
    <div class="doc-page-meta">
      <div class="breadcrumbs">${renderBreadcrumbs(page.path)}</div>
      ${page.frontmatter.status ? `<span class="status-pill">${page.frontmatter.status}</span>` : ""}
    </div>
    <header class="doc-page-header">
      <h1>${page.frontmatter.heading ?? page.frontmatter.title}</h1>
      <p>${page.frontmatter.description}</p>
    </header>
    ${renderDemoBlock(page)}
    <section class="doc-markdown">${rewriteInternalDocLinks(page.html)}</section>
  </article>
`;

const renderChartExplorer = (): string => `
  <section class="doc-page">
    <div class="doc-page-meta"><div class="breadcrumbs"><a href="${buildDocHref("/")}">Introduction</a><span>/</span><a href="${buildDocHref("/chart-explorer")}">Chart Explorer</a></div></div>
    <header class="doc-page-header">
      <h1>Chart Explorer</h1>
      <p>Map the platform breadth in one place. The live set is growing, the planned set is intentionally broad, and the explorer is designed to show the 200+ chart forms the product is aiming to support.</p>
    </header>
    <div class="catalog-stats">
      <article>
        <strong>${chartCatalogStats.total}</strong>
        <span>Total chart types</span>
      </article>
      <article>
        <strong>${chartCatalogStats.live}</strong>
        <span>Live in core</span>
      </article>
      <article>
        <strong>${chartCatalogStats.threeD}</strong>
        <span>3D family entries</span>
      </article>
      <article>
        <strong>${chartCatalogStats.families}</strong>
        <span>Coverage families</span>
      </article>
    </div>
    <div class="catalog-toolbar">
      <div class="catalog-filters">
        ${explorerFilters
          .map((filter) => {
            const count = chartCatalog.filter((chart) => matchesCatalogFilter(chart, filter.id)).length;

            return `
              <button class="catalog-filter ${filter.id === "all" ? "is-active" : ""}" data-catalog-filter="${filter.id}" type="button">
                <span>${filter.label}</span>
                <strong>${count}</strong>
              </button>
            `;
          })
          .join("")}
      </div>
      <p class="catalog-results" data-catalog-count>Showing ${chartCatalog.length} chart types</p>
    </div>
    <div class="catalog-grid">
      ${chartCatalog
        .map(
          (chart) => `
            <article
              class="catalog-card ${chart.status}"
              data-catalog-card
              data-chart-id="${chart.id}"
              data-status="${chart.status}"
              data-family="${chart.family}"
              data-tags="${chart.tags.join(" ")}"
            >
              <div class="catalog-card-top">
                <span class="catalog-family">${chart.family}</span>
                <span class="catalog-pill ${chart.status}">${chart.status}</span>
              </div>
              <h3>${chart.name}</h3>
              <p>${chart.description}</p>
              ${
                chart.docsPath
                  ? `<a class="catalog-link" href="${buildDocHref(chart.docsPath)}">Open guide</a>`
                  : `<a class="catalog-link" href="${buildPlaygroundLink(chart.id, chart.family)}">Open blueprint</a>`
              }
            </article>
          `,
        )
        .join("")}
    </div>
  </section>
`;

const renderExampleGallery = (): string => `
  <section class="doc-page">
    <div class="doc-page-meta"><div class="breadcrumbs"><a href="${buildDocHref("/")}">Introduction</a><span>/</span><a href="${buildDocHref("/example-gallery")}">Example Gallery</a></div></div>
    <header class="doc-page-header">
      <h1>Example Gallery</h1>
      <p>A wider surface of live examples using the current core engine. This page is here so the platform feels like a growing system, not a handful of isolated starter demos.</p>
    </header>
    <div class="catalog-stats">
      <article>
        <strong>${demos.length}</strong>
        <span>Live examples</span>
      </article>
      <article>
        <strong>${demos.filter((demo) => demo.id.includes("3d")).length}</strong>
        <span>3D examples</span>
      </article>
      <article>
        <strong>${demos.filter((demo) => demo.id.includes("realtime")).length}</strong>
        <span>Realtime examples</span>
      </article>
      <article>
        <strong>${chartCatalogStats.total}</strong>
        <span>Total catalog coverage</span>
      </article>
    </div>
    <div class="example-gallery-grid">
      ${demos
        .map((demo) => {
          const guidePath = findDemoDocumentationPath(demo.id);

          return `
            <article class="example-gallery-card">
              <div class="example-gallery-head">
                <p class="eyebrow">Live Example</p>
                <h3>${demo.title}</h3>
                <p>${demo.description}</p>
              </div>
              <div class="example-gallery-preview" data-gallery-demo="${demo.id}"></div>
              <div class="example-gallery-actions">
                ${
                  guidePath
                    ? `<a class="catalog-link" href="${buildDocHref(guidePath)}">Open guide</a>`
                    : ""
                }
                <a class="catalog-link" href="${buildDemoPlaygroundLink(demo.id)}">Open in playground</a>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  </section>
`;

const renderPlayground = (): string => `
  <section class="doc-page">
    <div class="doc-page-meta"><div class="breadcrumbs"><a href="${buildDocHref("/")}">Introduction</a><span>/</span><a href="${buildDocHref("/playground")}">Playground</a></div></div>
    <header class="doc-page-header">
      <h1>Playground</h1>
      <p>Browse the full chart catalog in one place. Live charts render immediately; planned charts include behavior contracts and API blueprints so the intended product surface stays visible.</p>
    </header>
    <div class="playground-layout">
      <aside class="playground-sidebar">
        <label for="playground-family" class="playground-label">Family</label>
        <select id="playground-family" class="playground-select">
          ${playgroundFamilies
            .map((family) => `<option value="${family}">${family}</option>`)
            .join("")}
        </select>
        <label for="playground-search" class="playground-label">Search</label>
        <input id="playground-search" class="playground-select" type="search" placeholder="Find a chart example..." />
        <label for="playground-demo" class="playground-label">Example</label>
        <select id="playground-demo" class="playground-select">
          ${playgroundExamples
            .map((example) => {
              const suffix = example.status === "live" ? "Live" : "Blueprint";
              return `<option value="${example.id}">${example.name} · ${suffix}</option>`;
            })
            .join("")}
        </select>
        <p class="playground-help">Use this page to inspect live charts and non-live blueprints without leaving the docs flow.</p>
        <div class="playground-spec-card">
          <div class="catalog-card-top">
            <span class="catalog-family" data-playground-family-label></span>
            <span class="catalog-pill" data-playground-status-label></span>
          </div>
          <p class="playground-description" data-playground-description></p>
          <div class="playground-spec">
            <h3>Purpose</h3>
            <p data-playground-purpose></p>
          </div>
          <div class="playground-spec">
            <h3>Behavior Contract</h3>
            <p data-playground-behavior></p>
          </div>
        </div>
      </aside>
      <div class="playground-main">
        <div class="doc-demo-grid">
          <div class="doc-demo-preview" data-playground-preview></div>
          <div class="doc-demo-code"><pre><code data-playground-code></code></pre></div>
        </div>
      </div>
    </div>
  </section>
`;

const renderPlaygroundBlueprint = (example: PlaygroundExample): string => `
  <div class="playground-blueprint">
    <p class="eyebrow">${example.status === "live" ? "Live Example" : "Blueprint Example"}</p>
    <h3>${example.name}</h3>
    <p>${example.description}</p>
    <div class="playground-blueprint-grid">
      <article>
        <strong>Purpose</strong>
        <p>${example.purpose}</p>
      </article>
      <article>
        <strong>Behavior</strong>
        <p>${example.behavior}</p>
      </article>
    </div>
    <div class="example-gallery-actions">
      ${
        example.docsPath
          ? `<a class="catalog-link" href="${buildDocHref(example.docsPath)}">Open guide</a>`
          : `<span class="catalog-link muted">Guide planned</span>`
      }
    </div>
  </div>
`;

const renderHome = (): string => `
  <section class="landing">
    <div class="landing-hero">
      <div class="landing-copy">
        <p class="eyebrow">Infinity Charts Documentation</p>
        <h1>Documentation built like a product, not an appendix.</h1>
        <p class="landing-lead">Framework-agnostic JavaScript and TypeScript docs for a charting platform core designed to scale from a first chart to dense enterprise dashboards and realtime monitoring surfaces.</p>
        <div class="landing-actions">
          <a class="button-primary" href="${buildDocHref("/getting-started/quick-start")}">Start with Quick Start</a>
          <a class="button-secondary" href="${buildDocHref("/chart-explorer")}">Explore Chart Coverage</a>
          <a class="button-secondary" href="${buildDocHref("/charts/bar-3d")}">Open 3D Lab</a>
        </div>
      </div>
      <div class="landing-showcase">
        <div class="showcase-card showcase-card-wide"><div data-home-demo="line-overview"></div></div>
        <div class="showcase-card"><div data-home-demo="bar-3d-launch"></div></div>
        <div class="showcase-card"><div data-home-demo="donut-alerts"></div></div>
      </div>
    </div>

    <div class="landing-strip">
      <article>
        <h3>Pure JS / TS</h3>
        <p>No React, Vue, or Angular assumptions in the core architecture.</p>
      </article>
      <article>
        <h3>Simple by default</h3>
        <p>Minimal config gets you to a chart quickly without blocking growth.</p>
      </article>
      <article>
        <h3>Infinite by design</h3>
        <p>Registries, renderer abstraction, and long-term chart breadth are built in from the start.</p>
      </article>
    </div>

    <section class="landing-sections">
      <div class="landing-section-card">
        <h2>Start where teams actually start</h2>
        <p>Installation, quick start, lifecycle, configuration shape, theming, animation, and live data updates are treated as first-class topics.</p>
        <div class="landing-links">
          <a href="${buildDocHref("/getting-started/installation")}">Installation</a>
          <a href="${buildDocHref("/getting-started/quick-start")}">Quick Start</a>
          <a href="${buildDocHref("/concepts/configuration-model")}">Configuration Model</a>
          <a href="${buildDocHref("/concepts/realtime-updates")}">Realtime Updates</a>
        </div>
      </div>
      <div class="landing-section-card">
        <h2>Ship charts, then ship systems</h2>
        <p>The docs are organized to support both single chart adoption and long-term dashboard platform work.</p>
        <div class="landing-links">
          <a href="${buildDocHref("/charts/line")}">Line</a>
          <a href="${buildDocHref("/charts/bar-3d")}">3D Bar</a>
          <a href="${buildDocHref("/charts/stacked-area")}">Stacked Area</a>
          <a href="${buildDocHref("/charts/combo")}">Combo</a>
          <a href="${buildDocHref("/example-gallery")}">Example Gallery</a>
        </div>
      </div>
      <div class="landing-section-card">
        <h2>Keep platform breadth visible</h2>
        <p>Chart Explorer and the example surface make it clear what is live now and where the platform is already growing next.</p>
        <div class="landing-links">
          <a href="${buildDocHref("/chart-explorer")}">Chart Explorer</a>
          <a href="${buildDocHref("/example-gallery")}">Example Gallery</a>
          <a href="${buildDocHref("/playground")}">Playground</a>
        </div>
      </div>
    </section>
  </section>
`;

const renderSearchResults = (query: string): string => {
  const results = searchDocumentation(query);

  if (!query.trim()) {
    return "";
  }

  if (results.length === 0) {
    return `<div class="search-empty">No matching pages yet.</div>`;
  }

  return results
    .map(
      (result) => `
        <a class="search-result" href="${buildDocHref(result.path)}">
        <a class="search-result" href="${buildDocHref(result.path)}">
          <strong>${result.title}</strong>
          <span>${result.section}</span>
          <p>${result.description}</p>
        </a>
      `,
    )
    .join("");
};

const renderShell = (
  currentPath: string,
  page: DocumentationPage | undefined,
): string => `
  <div class="app-shell">
    <header class="topbar">
      <div class="brand">
        <a href="${buildDocHref("/")}">Infinity Charts</a>
        <span>Documentation</span>
      </div>
      <nav class="topbar-links">
        ${topLinks.map((link) => `<a href="${buildDocHref(link.path)}">${link.title}</a>`).join("")}
      </nav>
      <div class="search-box">
        <input id="search-input" type="search" placeholder="Search docs..." autocomplete="off" />
        <div id="search-results" class="search-results"></div>
      </div>
    </header>
    <div class="app-body">
      <aside class="sidebar">
        ${navigation
          .map(
            (section) => `
              <section class="sidebar-section">
                <h2>${section.title}</h2>
                ${renderNavigation(section.children ?? [], currentPath)}
              </section>
            `,
          )
          .join("")}
      </aside>
      <main class="main-content">
        ${
          currentPath === "/"
            ? renderHome()
            : currentPath === "/chart-explorer"
              ? renderChartExplorer()
              : currentPath === "/example-gallery"
                ? renderExampleGallery()
              : currentPath === "/playground"
                ? renderPlayground()
                : page
                  ? renderPage(page)
                  : `
                    <section class="doc-page">
                      <header class="doc-page-header">
                        <h1>Page not found</h1>
                        <p>The requested page does not exist yet. Try the chart explorer or example gallery.</p>
                      </header>
                    </section>
                  `
        }
      </main>
      <aside class="toc-panel">
        <div class="toc-card">
          <p class="eyebrow">On this page</p>
          ${renderToc(page)}
        </div>
      </aside>
    </div>
    <footer class="footer">
      <div>
        <strong>Infinity Charts Docs</strong>
        <p>Separate documentation project for the framework-agnostic core engine.</p>
      </div>
      <div class="footer-links">
        <a href="${buildDocHref("/getting-started/quick-start")}">Quick Start</a>
        <a href="${buildDocHref("/chart-explorer")}">Chart Explorer</a>
        <a href="${buildDocHref("/example-gallery")}">Example Gallery</a>
      </div>
    </footer>
  </div>
`;

const navigate = (href: string): void => {
  const url = new URL(href, window.location.href);
  const params = new URLSearchParams(url.search);
  const targetPath = normalizePath(params.get("page") ?? "/");
  const currentPath = readRoutePath();

  if (currentPath !== targetPath || url.search !== window.location.search) {
    window.history.pushState({}, "", `${window.location.pathname}${url.search}${url.hash}`);
  }

  renderApp();
};

const mountPageDemo = (page: DocumentationPage | undefined): void => {
  cleanupDemo?.();
  cleanupDemo = undefined;

  if (!page?.frontmatter.demo) {
    return;
  }

  const demo = getDemo(page.frontmatter.demo);
  const container = document.querySelector<HTMLElement>(`[data-demo="${page.frontmatter.demo}"]`);

  if (!demo || !container) {
    return;
  }

  cleanupDemo = mountDemoWithDisplayControls(demo, container);
};

const mountHomeShowcase = (): void => {
  cleanupSpecial?.();
  cleanupSpecial = undefined;

  const containers = Array.from(
    document.querySelectorAll<HTMLElement>("[data-home-demo]"),
  );

  const cleanups = containers
    .map((container) => {
      const demoId = container.dataset.homeDemo;
      const demo = demoId ? getDemo(demoId) : undefined;
      return demo ? mountDemoWithDisplayControls(demo, container) : undefined;
    })
    .filter((cleanup): cleanup is () => void => Boolean(cleanup));

  cleanupSpecial = () => {
    cleanups.forEach((cleanup) => cleanup());
  };
};

const mountPlayground = (): void => {
  cleanupSpecial?.();
  cleanupSpecial = undefined;

  const familySelect = document.querySelector<HTMLSelectElement>("#playground-family");
  const searchInput = document.querySelector<HTMLInputElement>("#playground-search");
  const select = document.querySelector<HTMLSelectElement>("#playground-demo");
  const preview = document.querySelector<HTMLElement>("[data-playground-preview]");
  const code = document.querySelector<HTMLElement>("[data-playground-code]");
  const familyLabel = document.querySelector<HTMLElement>("[data-playground-family-label]");
  const statusLabel = document.querySelector<HTMLElement>("[data-playground-status-label]");
  const description = document.querySelector<HTMLElement>("[data-playground-description]");
  const purpose = document.querySelector<HTMLElement>("[data-playground-purpose]");
  const behavior = document.querySelector<HTMLElement>("[data-playground-behavior]");

  if (
    !familySelect ||
    !searchInput ||
    !select ||
    !preview ||
    !code ||
    !familyLabel ||
    !statusLabel ||
    !description ||
    !purpose ||
    !behavior
  ) {
    return;
  }

  let mountedCleanup: (() => void) | undefined;
  let filteredExamples = [...playgroundExamples];
  const params = new URLSearchParams(window.location.search);
  let requestedExampleId = params.get("example") ?? undefined;
  const requestedFamily = params.get("family");

  if (requestedFamily && playgroundFamilies.includes(requestedFamily)) {
    familySelect.value = requestedFamily;
  }

  const syncPlaygroundUrl = () => {
    const nextParams = new URLSearchParams();
    const selectedId = select.value;

    if (selectedId) {
      nextParams.set("example", selectedId);
    }

    if (familySelect.value && familySelect.value !== "All families") {
      nextParams.set("family", familySelect.value);
    }

    const nextUrl = nextParams.toString()
      ? `${window.location.pathname}?${nextParams.toString()}`
      : window.location.pathname;

    window.history.replaceState({}, "", nextUrl);
  };

  const refreshOptions = () => {
    const family = familySelect.value;
    const query = searchInput.value.trim().toLowerCase();

    filteredExamples = playgroundExamples.filter((example) => {
      const familyMatch = family === "All families" || example.family === family;
      const queryMatch =
        query.length === 0
        || example.name.toLowerCase().includes(query)
        || example.description.toLowerCase().includes(query)
        || example.id.toLowerCase().includes(query);

      return familyMatch && queryMatch;
    });

    const previous = select.value;

    select.innerHTML = filteredExamples
      .map((example) => {
        const suffix = example.status === "live" ? "Live" : "Blueprint";
        return `<option value="${example.id}">${example.name} · ${suffix}</option>`;
      })
      .join("");

    if (requestedExampleId && filteredExamples.some((example) => example.id === requestedExampleId)) {
      select.value = requestedExampleId;
      requestedExampleId = undefined;
      return;
    }

    if (filteredExamples.some((example) => example.id === previous)) {
      select.value = previous;
      return;
    }

    if (filteredExamples[0]) {
      select.value = filteredExamples[0].id;
    }
  };

  const mountSelected = () => {
    mountedCleanup?.();
    preview.innerHTML = "";
    const example = getPlaygroundExample(select.value);

    if (!example) {
      code.textContent = "";
      familyLabel.textContent = "";
      statusLabel.textContent = "";
      description.textContent = "";
      purpose.textContent = "";
      behavior.textContent = "";
      return;
    }

    familyLabel.textContent = example.family;
    statusLabel.textContent = example.status;
    statusLabel.className = `catalog-pill ${example.status}`;
    description.textContent = example.description;
    purpose.textContent = example.purpose;
    behavior.textContent = example.behavior;
    code.textContent = withDisplayFlags(example.code);
    syncPlaygroundUrl();

    const demo = example.demoId ? getDemo(example.demoId) : undefined;

    if (demo) {
      mountedCleanup = mountDemoWithDisplayControls(demo, preview);
      return;
    }

    if (example.family === "3D") {
      preview.innerHTML = renderThreeDConceptPreview(example);
      mountedCleanup = attachThreeDConceptPreview(preview);
      return;
    }

    if (example.status === "planned") {
      preview.innerHTML = renderBlueprintConceptPreview(example);
      mountedCleanup = attachBlueprintConceptPreview(preview);
      return;
    }

    if (!demo) {
      preview.innerHTML = renderPlaygroundBlueprint(example);
      return;
    }
  };

  const onFilterChange = () => {
    refreshOptions();

    if (!filteredExamples.length) {
      preview.innerHTML = renderPlaygroundBlueprint({
        id: "no-match",
        name: "No chart matches this filter",
        family: familySelect.value,
        status: "planned",
        description: "Try a different family or search term to inspect a chart example.",
        purpose: "Keep the full catalog discoverable without forcing one giant unfiltered list.",
        behavior: "Filtering should feel instant and preserve the current selection whenever possible.",
        code: "",
      });
      code.textContent = "";
      familyLabel.textContent = familySelect.value;
      statusLabel.textContent = "planned";
      statusLabel.className = "catalog-pill planned";
      description.textContent = "Try a different family or search term.";
      purpose.textContent = "Keep the full catalog discoverable without forcing one giant unfiltered list.";
      behavior.textContent = "Filtering should feel instant and preserve the current selection whenever possible.";
      return;
    }

    mountSelected();
  };

  familySelect.addEventListener("change", onFilterChange);
  searchInput.addEventListener("input", onFilterChange);
  select.addEventListener("change", mountSelected);
  refreshOptions();
  mountSelected();

  cleanupSpecial = () => {
    familySelect.removeEventListener("change", onFilterChange);
    searchInput.removeEventListener("input", onFilterChange);
    select.removeEventListener("change", mountSelected);
    mountedCleanup?.();
  };
};

const mountChartExplorer = (): void => {
  cleanupSpecial?.();
  cleanupSpecial = undefined;

  const buttons = Array.from(
    document.querySelectorAll<HTMLButtonElement>("[data-catalog-filter]"),
  );
  const cards = Array.from(
    document.querySelectorAll<HTMLElement>("[data-catalog-card]"),
  );
  const count = document.querySelector<HTMLElement>("[data-catalog-count]");

  if (!buttons.length || !cards.length || !count) {
    return;
  }

  const applyFilter = (filterId: (typeof explorerFilters)[number]["id"]) => {
    buttons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.catalogFilter === filterId);
    });

    let visible = 0;

    cards.forEach((card) => {
      const chartId = card.dataset.chartId;
      const chart = chartId
        ? chartCatalog.find((entry) => entry.id === chartId)
        : undefined;
      const fallbackMatch =
        filterId === "all"
          || (filterId === "live" && card.dataset.status === "live")
          || (filterId === "planned" && card.dataset.status === "planned")
          || (filterId === "3d" && card.dataset.tags?.includes("3d"))
          || (filterId === "dashboard" && (card.dataset.tags?.includes("dashboard") || card.dataset.tags?.includes("widget")))
          || (filterId === "statistical" && card.dataset.family === "Statistical")
          || (filterId === "financial" && card.dataset.family === "Financial")
          || (filterId === "flow" && card.dataset.family === "Flow")
          || (filterId === "hierarchy" && card.dataset.family === "Hierarchical")
          || (filterId === "geo" && card.dataset.family === "Geospatial");

      const matched = chart ? matchesCatalogFilter(chart, filterId) : fallbackMatch;
      card.hidden = !matched;

      if (matched) {
        visible += 1;
      }
    });

    count.textContent = `Showing ${visible} chart types`;
  };

  const onClick = (event: Event) => {
    const target = event.currentTarget as HTMLButtonElement;
    const filterId = target.dataset.catalogFilter as (typeof explorerFilters)[number]["id"] | undefined;

    if (filterId) {
      applyFilter(filterId);
    }
  };

  buttons.forEach((button) => button.addEventListener("click", onClick));
  applyFilter("all");

  cleanupSpecial = () => {
    buttons.forEach((button) => button.removeEventListener("click", onClick));
  };
};

const mountExampleGallery = (): void => {
  cleanupSpecial?.();
  cleanupSpecial = undefined;

  const containers = Array.from(
    document.querySelectorAll<HTMLElement>("[data-gallery-demo]"),
  );

  const cleanups = containers
    .map((container) => {
      const demoId = container.dataset.galleryDemo;
      const demo = demoId ? getDemo(demoId) : undefined;
      return demo ? demo.mount(container) : undefined;
    })
    .filter((cleanup): cleanup is () => void => Boolean(cleanup));

  cleanupSpecial = () => {
    cleanups.forEach((cleanup) => cleanup());
  };
};

const mountSearch = (): void => {
  const input = document.querySelector<HTMLInputElement>("#search-input");
  const results = document.querySelector<HTMLElement>("#search-results");

  if (!input || !results) {
    return;
  }

  const onInput = () => {
    results.innerHTML = renderSearchResults(input.value);
    results.classList.toggle("is-visible", Boolean(input.value.trim()));
  };

  const onBlur = () => {
    window.setTimeout(() => {
      results.classList.remove("is-visible");
    }, 120);
  };

  const onFocus = () => {
    if (input.value.trim()) {
      results.classList.add("is-visible");
    }
  };

  input.addEventListener("input", onInput);
  input.addEventListener("blur", onBlur);
  input.addEventListener("focus", onFocus);
};

const renderApp = (): void => {
  const root = document.querySelector<HTMLElement>("#app");

  if (!root) {
    return;
  }

  cleanupDemo?.();
  cleanupSpecial?.();
  cleanupDemo = undefined;
  cleanupSpecial = undefined;

  const currentPath = readRoutePath();
  const page = getDocumentationPage(currentPath);

  root.innerHTML = renderShell(currentPath, page);

  mountSearch();

  if (currentPath === "/") {
    mountHomeShowcase();
  } else if (currentPath === "/chart-explorer") {
    mountChartExplorer();
  } else if (currentPath === "/example-gallery") {
    mountExampleGallery();
  } else if (currentPath === "/playground") {
    mountPlayground();
  }

  mountPageDemo(page);

  window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
};

export const createDocumentationApp = (root: Element | null): void => {
  if (!root) {
    return;
  }

  document.body.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const link = target.closest<HTMLAnchorElement>('a[href^="./?"], a[href^="?"]');

    if (!link) {
      return;
    }

    const url = new URL(link.href, window.location.href);

    if (url.origin !== window.location.origin) {
      return;
    }

    event.preventDefault();
    navigate(`${url.pathname}${url.search}`);
  });

  window.addEventListener("popstate", () => {
    renderApp();
  });

  renderApp();
};
