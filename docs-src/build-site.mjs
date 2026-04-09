import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { navigationLinks, platformMeta, projects, siteMeta } from "./site-data.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const docsRoot = path.join(repoRoot, "docs");
const cssSource = path.join(__dirname, "site.css");
const jsSource = path.join(__dirname, "site.js");
const faviconSource = path.join(__dirname, "favicon.svg");
const socialCardSource = path.join(__dirname, "social-card.svg");
const postsPerPage = siteMeta.postsPerPage;
const outputRoots = [repoRoot, docsRoot];
const staticAssetPaths = {
  css: "assets/site.css",
  js: "assets/site.js",
  favicon: "assets/favicon.svg",
  socialCard: "assets/social-card.svg",
};

const platformOrder = ["all", "vanilla", "angular", "react", "vue"];
const generatedPages = [];

const platformLabels = {
  vanilla: "Vanilla JS",
  angular: "Angular",
  react: "React",
  vue: "Vue",
};

const orderedProjects = [...projects];
const featuredProjects = orderedProjects.filter((project) => project.featured);

const cleanRootTargets = async () => {
  const rootTargets = [
    "index.html",
    "404.html",
    "archive",
    "page",
    "platform",
    "projects",
    "assets",
    "robots.txt",
    "sitemap.xml",
    ".nojekyll",
  ];

  await Promise.all(
    rootTargets.map((target) =>
      fs.rm(path.join(repoRoot, target), { recursive: true, force: true }),
    ),
  );

  await fs.rm(docsRoot, { recursive: true, force: true });
};

const ensureDir = async (targetPath) => {
  await fs.mkdir(path.dirname(targetPath), { recursive: true });
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const toPosix = (value) => value.replaceAll(path.sep, "/");

const canonicalUrlFor = (pagePath) => {
  const normalized = toPosix(pagePath);
  const trimmed = normalized === "index.html" ? "" : normalized.replace(/index\.html$/, "");
  return trimmed ? `${siteMeta.baseUrl}/${trimmed}` : `${siteMeta.baseUrl}/`;
};

const absoluteUrlFor = (targetPath) =>
  targetPath.startsWith("http") ? targetPath : `${siteMeta.baseUrl}/${toPosix(targetPath).replace(/^\/+/, "")}`;

const pageHref = (fromPagePath, toPagePath) => {
  const relative = toPosix(path.posix.relative(path.posix.dirname(fromPagePath), toPagePath));

  if (!relative || relative === "index.html") {
    return "./";
  }

  if (relative.endsWith("/index.html")) {
    return relative.slice(0, -"index.html".length);
  }

  return relative;
};

const assetHref = (fromPagePath, assetPath) =>
  toPosix(path.posix.relative(path.posix.dirname(fromPagePath), assetPath));

const uniqueKeywords = (values) => {
  const seen = new Set();
  const keywords = [];

  for (const value of values.flat()) {
    if (!value) {
      continue;
    }

    const keyword = String(value).trim();

    if (!keyword) {
      continue;
    }

    const normalized = keyword.toLowerCase();

    if (seen.has(normalized)) {
      continue;
    }

    seen.add(normalized);
    keywords.push(keyword);
  }

  return keywords;
};

const jsonLdScript = (payload) =>
  `<script type="application/ld+json">${JSON.stringify(payload, null, 2)}</script>`;

const externalLink = (href, label, kind = "action") =>
  `<a class="${kind}" href="${href}" target="_blank" rel="noreferrer">${label}</a>`;

const projectUrl = (slug) => `projects/${slug}/index.html`;
const archiveUrl = (pageNumber) => (pageNumber <= 1 ? "index.html" : `page/${pageNumber}/index.html`);
const archiveMirrorUrl = (pageNumber) =>
  pageNumber <= 1 ? "archive/index.html" : `archive/page/${pageNumber}/index.html`;
const platformUrl = (slug) => `platform/${slug}/index.html`;

const totalPages = Math.ceil(orderedProjects.length / postsPerPage);

const countsByPlatform = platformOrder.reduce(
  (accumulator, key) => ({
    ...accumulator,
    [key]:
      key === "all"
        ? orderedProjects.length
        : orderedProjects.filter((project) => project.platform === key).length,
  }),
  {},
);

const rootClasses = (...names) => names.filter(Boolean).join(" ");

const renderMetrics = () => `
  <div class="metric-grid">
    <article class="metric-card" data-reveal>
      <span class="metric-label">Live docs</span>
      <strong>${orderedProjects.length}</strong>
      <p>Every listed entry points to a documentation site that is live today.</p>
    </article>
    <article class="metric-card" data-reveal>
      <span class="metric-label">Public npm packages</span>
      <strong>${orderedProjects.filter((project) => project.npmUrl).length}</strong>
      <p>Published packages stay visible, while docs-only lines still get a project dossier.</p>
    </article>
    <article class="metric-card" data-reveal>
      <span class="metric-label">Framework spread</span>
      <strong>${Object.keys(platformMeta).length - 1}</strong>
      <p>Vanilla foundations plus Angular, React, and Vue wrapper families.</p>
    </article>
  </div>
`;

const renderProjectActions = (project) => {
  const actions = [
    externalLink(project.docsUrl, "Open docs"),
    externalLink(project.repoUrl, "GitHub"),
  ];

  if (project.npmUrl) {
    actions.push(externalLink(project.npmUrl, "npm"));
  }

  return actions.join("");
};

const renderProjectCard = (project, currentPagePath, { featured = false } = {}) => `
  <article class="${rootClasses("story-card", `platform-${project.platform}`, featured && "story-card-featured")}" data-reveal>
    <div class="story-meta">
      <span>${platformLabels[project.platform]}</span>
      <span>${escapeHtml(project.family)}</span>
      <span>${escapeHtml(project.version)}</span>
    </div>
    <h3>
      <a href="${pageHref(currentPagePath, projectUrl(project.slug))}">${escapeHtml(project.title)}</a>
    </h3>
    <p>${escapeHtml(project.summary)}</p>
    <ul class="chip-row" aria-label="Project highlights">
      ${project.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
    <div class="story-links">
      ${renderProjectActions(project)}
      <a class="story-readmore" href="${pageHref(currentPagePath, projectUrl(project.slug))}">Read dossier</a>
    </div>
  </article>
`;

const renderFeaturedStories = (currentPagePath) => `
  <section class="section-block" data-reveal>
    <div class="section-heading">
      <div>
        <span class="eyebrow">Featured stories</span>
        <h2>Projects leading the current Stackline portfolio.</h2>
      </div>
      <p>${siteMeta.featuredIntro}</p>
    </div>
    <div class="story-grid story-grid-featured">
      ${featuredProjects.map((project) => renderProjectCard(project, currentPagePath, { featured: true })).join("")}
    </div>
  </section>
`;

const renderSidebar = (currentPagePath, currentPlatform = "all") => `
  <aside class="page-sidebar" data-reveal>
    <section class="sidebar-card">
      <span class="eyebrow">Portfolio map</span>
      <h3>Browse by platform</h3>
      <div class="sidebar-links">
        ${platformOrder
          .map((platform) => `
            <a class="${platform === currentPlatform ? "is-active" : ""}" href="${pageHref(currentPagePath, platform === "all" ? "index.html" : platformUrl(platform))}">
              <span>${platformMeta[platform].label}</span>
              <strong>${countsByPlatform[platform]}</strong>
            </a>
          `)
          .join("")}
      </div>
    </section>
    <section class="sidebar-card">
      <span class="eyebrow">What this site does</span>
      <h3>Docs first, hype last.</h3>
      <p>
        Every project entry is written like a post in a product journal: what the package covers, where the docs live,
        which release family is current, and where to go next.
      </p>
    </section>
  </aside>
`;

const renderPagination = (currentPagePath, currentPage, routeForPage) => {
  if (totalPages <= 1) {
    return "";
  }

  const items = [];

  if (currentPage > 1) {
    items.push(
      `<a class="pagination-arrow" href="${pageHref(currentPagePath, routeForPage(currentPage - 1))}">Newer posts</a>`,
    );
  } else {
    items.push(`<span class="pagination-arrow is-disabled">Newer posts</span>`);
  }

  items.push(`
    <div class="pagination-pages" aria-label="Pagination">
      ${Array.from({ length: totalPages }, (_value, index) => index + 1)
        .map((pageNumber) => {
          const href = pageHref(currentPagePath, routeForPage(pageNumber));
          return pageNumber === currentPage
            ? `<span class="page-pill is-current">${pageNumber}</span>`
            : `<a class="page-pill" href="${href}">${pageNumber}</a>`;
        })
        .join("")}
    </div>
  `);

  if (currentPage < totalPages) {
    items.push(
      `<a class="pagination-arrow" href="${pageHref(currentPagePath, routeForPage(currentPage + 1))}">Older posts</a>`,
    );
  } else {
    items.push(`<span class="pagination-arrow is-disabled">Older posts</span>`);
  }

  return `<nav class="pagination-wrap">${items.join("")}</nav>`;
};

const renderHero = (currentPagePath) => `
  <section class="hero-shell">
    <div class="hero-copy" data-reveal>
      <span class="eyebrow">Alexandroit open source journal</span>
      <h1>${siteMeta.heroTitle}</h1>
      <p>${siteMeta.heroSummary}</p>
      <div class="hero-actions">
        <a class="button-primary" href="${pageHref(currentPagePath, "archive/index.html")}">Open archive</a>
        <a class="button-secondary" href="${pageHref(currentPagePath, platformUrl("vanilla"))}">Browse Vanilla JS</a>
      </div>
    </div>
    <div class="hero-panel" data-reveal>
      <div class="hero-panel-top">
        <span>Live docs portfolio</span>
        <strong>${orderedProjects.length} project dossiers</strong>
      </div>
      <div class="hero-spotlight">
        <article>
          <span>Featured</span>
          <strong>${escapeHtml(featuredProjects[0].title)}</strong>
          <p>${escapeHtml(featuredProjects[0].summary)}</p>
        </article>
        <article>
          <span>Foundation</span>
          <strong>${escapeHtml(orderedProjects.find((project) => project.slug === "loading").title)}</strong>
          <p>Vanilla first, then wrapper families across Angular, React, and Vue.</p>
        </article>
      </div>
    </div>
  </section>
`;

const renderArchiveFeed = (currentPagePath, items, currentPage, routeForPage) => `
  <section class="section-block">
    <div class="section-heading" data-reveal>
      <div>
        <span class="eyebrow">Archive</span>
        <h2>Project posts, docs hubs, and framework release lines.</h2>
      </div>
      <p>
        Page ${currentPage} of ${totalPages}. Every card leads to a dedicated project page plus direct links to docs,
        source, and package surfaces when they are public.
      </p>
    </div>
    <div class="story-grid">
      ${items.map((project) => renderProjectCard(project, currentPagePath)).join("")}
    </div>
    ${renderPagination(currentPagePath, currentPage, routeForPage)}
  </section>
`;

const renderPlatformHero = (platform) => `
  <section class="platform-hero" data-reveal>
    <span class="eyebrow">Platform archive</span>
    <h1>${platformMeta[platform].label}</h1>
    <p>${platformMeta[platform].description}</p>
  </section>
`;

const renderRelatedProjects = (project, currentPagePath) => {
  const related = orderedProjects
    .filter(
      (candidate) =>
        candidate.slug !== project.slug &&
        (candidate.family === project.family || candidate.platform === project.platform),
    )
    .slice(0, 3);

  if (!related.length) {
    return "";
  }

  return `
    <section class="section-block" data-reveal>
      <div class="section-heading">
        <div>
          <span class="eyebrow">Read next</span>
          <h2>Related project dossiers.</h2>
        </div>
      </div>
      <div class="story-grid story-grid-compact">
        ${related.map((candidate) => renderProjectCard(candidate, currentPagePath)).join("")}
      </div>
    </section>
  `;
};

const renderProjectPage = (project, currentPagePath) => `
  <section class="project-hero platform-${project.platform}">
    <div class="project-hero-copy" data-reveal>
      <span class="eyebrow">${platformLabels[project.platform]} · ${escapeHtml(project.family)}</span>
      <h1>${escapeHtml(project.title)}</h1>
      <p>${escapeHtml(project.summary)}</p>
      <div class="hero-actions">
        ${renderProjectActions(project)}
      </div>
    </div>
    <div class="project-facts" data-reveal>
      <div>
        <span>Package</span>
        <strong>${escapeHtml(project.packageName)}</strong>
      </div>
      <div>
        <span>Current line</span>
        <strong>${escapeHtml(project.releaseLine)}</strong>
      </div>
      <div>
        <span>Status</span>
        <strong>${escapeHtml(project.releaseStatus)}</strong>
      </div>
      <div>
        <span>Version</span>
        <strong>${escapeHtml(project.version)}</strong>
      </div>
    </div>
  </section>
  <section class="section-block project-layout">
    <article class="project-body" data-reveal>
      <div class="section-heading">
        <div>
          <span class="eyebrow">Project dossier</span>
          <h2>Why it matters in the portfolio.</h2>
        </div>
      </div>
      <p>
        ${escapeHtml(project.title)} sits inside the ${escapeHtml(project.family).toLowerCase()} track of the Stackline
        portfolio. This dossier page exists so readers can jump from the editorial archive into the live docs without
        guessing which project is current, which framework family it belongs to, or whether the package is already public.
      </p>
      <p>
        The live docs remain the primary destination for API details and working examples. This page focuses on routing:
        where the package lives, where its docs are published, and which release line is active today.
      </p>
      <ul class="check-list">
        ${project.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </article>
    <aside class="page-sidebar" data-reveal>
      <section class="sidebar-card">
        <span class="eyebrow">Primary links</span>
        <h3>Open the live surface.</h3>
        <div class="sidebar-actions">
          ${renderProjectActions(project)}
        </div>
      </section>
      <section class="sidebar-card">
        <span class="eyebrow">Platform context</span>
        <h3>${platformLabels[project.platform]}</h3>
        <p>${platformMeta[project.platform].description}</p>
      </section>
    </aside>
  </section>
  ${renderRelatedProjects(project, currentPagePath)}
`;

const buildMetaTitle = (title) => `${title} | Alexandroit`;

const buildOrganizationSchema = () => ({
  "@type": "Organization",
  name: siteMeta.publisher,
  url: siteMeta.baseUrl,
});

const buildBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.path.startsWith("http") ? item.path : canonicalUrlFor(item.path),
  })),
});

const buildWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteMeta.title,
      url: siteMeta.baseUrl,
      description: siteMeta.description,
      inLanguage: "en-US",
      publisher: buildOrganizationSchema(),
    },
    {
      "@type": "Blog",
      name: `${siteMeta.title} Open Source Journal`,
      url: siteMeta.baseUrl,
      description: siteMeta.description,
      inLanguage: "en-US",
      publisher: buildOrganizationSchema(),
    },
  ],
});

const buildCollectionSchema = ({ title, description, pagePath, items }) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  url: canonicalUrlFor(pagePath),
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: siteMeta.title,
    url: siteMeta.baseUrl,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: items.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: canonicalUrlFor(projectUrl(project.slug)),
      name: project.title,
    })),
  },
});

const buildProjectSchema = (project, pagePath, keywords) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: project.title,
      url: canonicalUrlFor(pagePath),
      description: project.summary,
      inLanguage: "en-US",
      isPartOf: {
        "@type": "WebSite",
        name: siteMeta.title,
        url: siteMeta.baseUrl,
      },
    },
    {
      "@type": "SoftwareSourceCode",
      name: project.title,
      description: project.summary,
      url: canonicalUrlFor(pagePath),
      codeRepository: project.repoUrl,
      version: project.version,
      keywords: keywords.join(", "),
      programmingLanguage: ["JavaScript", "TypeScript"],
      runtimePlatform: platformLabels[project.platform],
      author: {
        "@type": "Person",
        name: siteMeta.author,
      },
      publisher: buildOrganizationSchema(),
      sameAs: [project.docsUrl, project.repoUrl, project.npmUrl].filter(Boolean),
    },
  ],
});

const buildHomeKeywords = () =>
  uniqueKeywords([
    siteMeta.keywords,
    "open source frontend libraries",
    "javascript component libraries",
    "angular libraries",
    "react libraries",
    "vue libraries",
    orderedProjects.map((project) => project.title),
  ]);

const buildArchiveKeywords = () =>
  uniqueKeywords([
    siteMeta.keywords,
    "open source library archive",
    "frontend component archive",
    "javascript libraries with docs",
    orderedProjects.map((project) => project.title),
  ]);

const buildPlatformKeywords = (platform, items) =>
  uniqueKeywords([
    siteMeta.keywords,
    `${platformLabels[platform]} libraries`,
    `${platformLabels[platform]} components`,
    `${platformLabels[platform]} packages`,
    `${platformLabels[platform]} documentation`,
    items.map((project) => project.title),
    items.map((project) => project.family),
  ]);

const buildProjectKeywords = (project) =>
  uniqueKeywords([
    siteMeta.keywords,
    project.title,
    project.packageName,
    project.family,
    project.releaseLine,
    `${platformLabels[project.platform]} library`,
    `${platformLabels[project.platform]} component`,
    `${project.title} docs`,
    `${project.title} GitHub`,
    project.npmUrl ? `${project.title} npm` : null,
    project.highlights,
  ]);

const renderHead = ({
  pagePath,
  title,
  description,
  keywords = [],
  schema = [],
  ogType = "website",
  socialImage = staticAssetPaths.socialCard,
  robots = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  prevPath = "",
  nextPath = "",
}) => `
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(buildMetaTitle(title))}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta name="keywords" content="${escapeHtml(keywords.join(", "))}" />
  <meta name="author" content="${escapeHtml(siteMeta.author)}" />
  <meta name="creator" content="${escapeHtml(siteMeta.author)}" />
  <meta name="publisher" content="${escapeHtml(siteMeta.publisher)}" />
  <meta name="robots" content="${escapeHtml(robots)}" />
  <meta name="theme-color" content="${escapeHtml(siteMeta.themeColor)}" />
  <meta property="og:title" content="${escapeHtml(buildMetaTitle(title))}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:type" content="${escapeHtml(ogType)}" />
  <meta property="og:site_name" content="${escapeHtml(siteMeta.title)}" />
  <meta property="og:locale" content="${escapeHtml(siteMeta.locale)}" />
  <meta property="og:url" content="${escapeHtml(canonicalUrlFor(pagePath))}" />
  <meta property="og:image" content="${escapeHtml(absoluteUrlFor(socialImage))}" />
  <meta property="og:image:alt" content="${escapeHtml(buildMetaTitle(title))}" />
  ${ogType === "article" ? `<meta property="article:modified_time" content="${escapeHtml(siteMeta.updatedAt)}" />` : ""}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(buildMetaTitle(title))}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${escapeHtml(absoluteUrlFor(socialImage))}" />
  <link rel="canonical" href="${escapeHtml(canonicalUrlFor(pagePath))}" />
  ${prevPath ? `<link rel="prev" href="${escapeHtml(canonicalUrlFor(prevPath))}" />` : ""}
  ${nextPath ? `<link rel="next" href="${escapeHtml(canonicalUrlFor(nextPath))}" />` : ""}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="${assetHref(pagePath, staticAssetPaths.css)}" />
  <link rel="icon" type="image/svg+xml" href="${assetHref(pagePath, staticAssetPaths.favicon)}" />
  ${schema.map((item) => jsonLdScript(item)).join("\n  ")}
  ${siteMeta.adSnippet}
`;

const renderHeader = (currentPagePath, currentSection = "home") => `
  <header class="site-header">
    <div class="site-bar">
      <a class="site-brand" href="${pageHref(currentPagePath, "index.html")}">
        <span class="site-brand-mark"></span>
        <span>
          <strong>${siteMeta.title}</strong>
          <small>${siteMeta.tagline}</small>
        </span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-nav-toggle>
        Menu
      </button>
      <nav class="site-nav" id="site-nav" data-nav-root>
        ${navigationLinks
          .map((item) => {
            const targetSection =
              item.href === "/"
                ? "home"
                : item.href === "/archive"
                  ? "archive"
                  : item.href.split("/").filter(Boolean).at(-1);
            return `
              <a class="${targetSection === currentSection ? "is-active" : ""}" href="${pageHref(currentPagePath, item.href === "/" ? "index.html" : item.href === "/archive" ? "archive/index.html" : `${item.href.slice(1)}/index.html`)}">
                ${item.label}
              </a>
            `;
          })
          .join("")}
      </nav>
    </div>
  </header>
`;

const renderFooter = (currentPagePath) => `
  <footer class="site-footer">
    <div class="footer-grid">
      <div>
        <span class="eyebrow">Stackline portfolio</span>
        <h2>Docs-first routing for the projects that are actually live.</h2>
      </div>
      <div class="footer-links">
        <a href="${pageHref(currentPagePath, "archive/index.html")}">Archive</a>
        <a href="${pageHref(currentPagePath, platformUrl("vanilla"))}">Vanilla JS</a>
        <a href="${pageHref(currentPagePath, platformUrl("angular"))}">Angular</a>
        <a href="${pageHref(currentPagePath, platformUrl("react"))}">React</a>
        <a href="${pageHref(currentPagePath, platformUrl("vue"))}">Vue</a>
      </div>
      <p class="footer-note">
        Built as a static editorial hub so every important route exists as real HTML for readers, crawlers, and link previews.
      </p>
    </div>
  </footer>
  <script src="${assetHref(currentPagePath, staticAssetPaths.js)}" defer></script>
`;

const renderLayout = ({
  pagePath,
  title,
  description,
  keywords = [],
  schema = [],
  ogType = "website",
  socialImage,
  robots,
  prevPath = "",
  nextPath = "",
  currentSection,
  hero,
  main,
  sidebar = "",
  bodyClass = "",
}) => `<!doctype html>
<html lang="en">
<head>
${renderHead({ pagePath, title, description, keywords, schema, ogType, socialImage, robots, prevPath, nextPath })}
</head>
<body class="${escapeHtml(bodyClass)}">
  <div class="site-shell">
    ${renderHeader(pagePath, currentSection)}
    <main class="site-main">
      ${hero}
      <div class="content-shell">
        <div class="content-stack">
          ${main}
        </div>
        ${sidebar}
      </div>
    </main>
    ${renderFooter(pagePath)}
  </div>
</body>
</html>
`;

const writePage = async (pagePath, html) => {
  generatedPages.push(pagePath);

  await Promise.all(
    outputRoots.map(async (outputRoot) => {
      const destination = path.join(outputRoot, pagePath);
      await ensureDir(destination);
      await fs.writeFile(destination, html, "utf8");
    }),
  );
};

const writeStaticAsset = async (sourceFile, assetPath) => {
  const fileBuffer = await fs.readFile(sourceFile);
  await Promise.all(
    outputRoots.map(async (outputRoot) => {
      const destination = path.join(outputRoot, assetPath);
      await ensureDir(destination);
      await fs.writeFile(destination, fileBuffer);
    }),
  );
};

const generateArchivePages = async () => {
  for (let pageIndex = 0; pageIndex < totalPages; pageIndex += 1) {
    const pageNumber = pageIndex + 1;
    const start = pageIndex * postsPerPage;
    const items = orderedProjects.slice(start, start + postsPerPage);
    const pagePath = archiveUrl(pageNumber);
    const archiveTitle =
      pageNumber === 1
        ? "Open Source JavaScript, Angular, React and Vue Libraries"
        : `Open source library archive page ${pageNumber}`;
    const archiveDescription =
      pageNumber === 1
        ? siteMeta.description
        : `Archive page ${pageNumber} of open-source JavaScript libraries, Angular components, React components, and Vue components on Alexandroit.`;
    const archiveKeywords = pageNumber === 1 ? buildHomeKeywords() : buildArchiveKeywords();
    const archiveSchema = [
      buildWebsiteSchema(),
      buildCollectionSchema({
        title: archiveTitle,
        description: archiveDescription,
        pagePath,
        items,
      }),
      buildBreadcrumbSchema(
        pageNumber === 1
          ? [
              { name: "Home", path: "index.html" },
            ]
          : [
              { name: "Home", path: "index.html" },
              { name: "Archive", path: "archive/index.html" },
              { name: `Page ${pageNumber}`, path: pagePath },
            ],
      ),
    ];
    const html = renderLayout({
      pagePath,
      title: archiveTitle,
      description: archiveDescription,
      keywords: archiveKeywords,
      schema: archiveSchema,
      currentSection: pageNumber === 1 ? "home" : "archive",
      bodyClass: pageNumber === 1 ? "page-home" : "page-archive",
      hero: pageNumber === 1 ? `${renderHero(pagePath)}${renderMetrics()}${renderFeaturedStories(pagePath)}` : "",
      main: renderArchiveFeed(pagePath, items, pageNumber, archiveUrl),
      sidebar: renderSidebar(pagePath),
      nextPath: pageNumber < totalPages ? archiveUrl(pageNumber + 1) : "",
      prevPath: pageNumber > 1 ? archiveUrl(pageNumber - 1) : "",
    });

    await writePage(pagePath, html);

    if (pageNumber === 1) {
      const archiveIndex = renderLayout({
        pagePath: "archive/index.html",
        title: "Open source library archive",
        description:
          "Full archive of open-source JavaScript libraries, Angular components, React components, and Vue components from the Stackline portfolio.",
        keywords: buildArchiveKeywords(),
        schema: [
          buildCollectionSchema({
            title: "Open source library archive",
            description:
              "Full archive of open-source JavaScript libraries, Angular components, React components, and Vue components from the Stackline portfolio.",
            pagePath: "archive/index.html",
            items,
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "index.html" },
            { name: "Archive", path: "archive/index.html" },
          ]),
        ],
        currentSection: "archive",
        bodyClass: "page-archive",
        hero: renderPlatformHero("all"),
        main: renderArchiveFeed("archive/index.html", items, pageNumber, archiveMirrorUrl),
        sidebar: renderSidebar("archive/index.html"),
        nextPath: totalPages > 1 ? archiveMirrorUrl(2) : "",
      });
      await writePage("archive/index.html", archiveIndex);
    } else {
      const archiveMirror = renderLayout({
        pagePath: archiveMirrorUrl(pageNumber),
        title: `Open source library archive page ${pageNumber}`,
        description: `Archive page ${pageNumber} for open-source JavaScript libraries, Angular components, React components, and Vue components on Alexandroit.`,
        keywords: buildArchiveKeywords(),
        schema: [
          buildCollectionSchema({
            title: `Open source library archive page ${pageNumber}`,
            description: `Archive page ${pageNumber} for open-source JavaScript libraries, Angular components, React components, and Vue components on Alexandroit.`,
            pagePath: archiveMirrorUrl(pageNumber),
            items,
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "index.html" },
            { name: "Archive", path: "archive/index.html" },
            { name: `Page ${pageNumber}`, path: archiveMirrorUrl(pageNumber) },
          ]),
        ],
        currentSection: "archive",
        bodyClass: "page-archive",
        hero: renderPlatformHero("all"),
        main: renderArchiveFeed(archiveMirrorUrl(pageNumber), items, pageNumber, archiveMirrorUrl),
        sidebar: renderSidebar(archiveMirrorUrl(pageNumber)),
        nextPath: pageNumber < totalPages ? archiveMirrorUrl(pageNumber + 1) : "",
        prevPath: pageNumber > 1 ? archiveMirrorUrl(pageNumber - 1) : "",
      });
      await writePage(archiveMirrorUrl(pageNumber), archiveMirror);
    }
  }
};

const generatePlatformPages = async () => {
  for (const platform of platformOrder.filter((key) => key !== "all")) {
    const pagePath = platformUrl(platform);
    const items = orderedProjects.filter((project) => project.platform === platform);
    const title = `${platformMeta[platform].label} libraries and components`;
    const description = platformMeta[platform].description;

    const html = renderLayout({
      pagePath,
      title,
      description,
      keywords: buildPlatformKeywords(platform, items),
      schema: [
        buildCollectionSchema({
          title,
          description,
          pagePath,
          items,
        }),
        buildBreadcrumbSchema([
          { name: "Home", path: "index.html" },
          { name: platformMeta[platform].label, path: pagePath },
        ]),
      ],
      currentSection: platform,
      bodyClass: `page-platform page-platform-${platform}`,
      hero: renderPlatformHero(platform),
      main: `
        <section class="section-block">
          <div class="story-grid">
            ${items.map((project) => renderProjectCard(project, pagePath)).join("")}
          </div>
        </section>
      `,
      sidebar: renderSidebar(pagePath, platform),
    });

    await writePage(pagePath, html);
  }
};

const generateProjectPages = async () => {
  for (const project of orderedProjects) {
    const pagePath = projectUrl(project.slug);
    const keywords = buildProjectKeywords(project);
    const html = renderLayout({
      pagePath,
      title: `${project.title} docs and package guide`,
      description: project.summary,
      keywords,
      schema: [
        buildProjectSchema(project, pagePath, keywords),
        buildBreadcrumbSchema([
          { name: "Home", path: "index.html" },
          { name: platformMeta[project.platform].label, path: platformUrl(project.platform) },
          { name: project.title, path: pagePath },
        ]),
      ],
      ogType: "article",
      currentSection: project.platform,
      bodyClass: `page-project page-project-${project.platform}`,
      hero: "",
      main: renderProjectPage(project, pagePath),
      sidebar: "",
    });

    await writePage(pagePath, html);
  }
};

const generateUtilityFiles = async () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${generatedPages
  .map(
    (pagePath) => `  <url><loc>${escapeHtml(canonicalUrlFor(pagePath))}</loc><lastmod>${siteMeta.updatedAt}</lastmod></url>`,
  )
  .join("\n")}
</urlset>
`;

  const robots = `User-agent: *
Allow: /

Sitemap: ${siteMeta.baseUrl}/sitemap.xml
`;

  const notFound = renderLayout({
    pagePath: "404.html",
    title: "Page not found",
    description: "The page you requested is not available in the Alexandroit project journal.",
    keywords: uniqueKeywords([
      siteMeta.keywords,
      "page not found",
      "open source library archive",
    ]),
    schema: [
      buildBreadcrumbSchema([
        { name: "Home", path: "index.html" },
        { name: "404", path: "404.html" },
      ]),
    ],
    robots: "noindex,follow",
    currentSection: "archive",
    bodyClass: "page-404",
    hero: `
      <section class="platform-hero" data-reveal>
        <span class="eyebrow">404</span>
        <h1>That page is not in the archive.</h1>
        <p>Jump back to the home page, browse the platform indexes, or open the main archive.</p>
        <div class="hero-actions">
          <a class="button-primary" href="./">Back home</a>
          <a class="button-secondary" href="./archive/">Open archive</a>
        </div>
      </section>
    `,
    main: "",
    sidebar: renderSidebar("404.html"),
  });

  await writePage("404.html", notFound);

  await Promise.all(
    outputRoots.map(async (outputRoot) => {
      await fs.writeFile(path.join(outputRoot, "sitemap.xml"), sitemap, "utf8");
      await fs.writeFile(path.join(outputRoot, "robots.txt"), robots, "utf8");
      await fs.writeFile(path.join(outputRoot, ".nojekyll"), "", "utf8");
    }),
  );
};

const main = async () => {
  await cleanRootTargets();
  await writeStaticAsset(cssSource, staticAssetPaths.css);
  await writeStaticAsset(jsSource, staticAssetPaths.js);
  await writeStaticAsset(faviconSource, staticAssetPaths.favicon);
  await writeStaticAsset(socialCardSource, staticAssetPaths.socialCard);
  await generateArchivePages();
  await generatePlatformPages();
  await generateProjectPages();
  await generateUtilityFiles();
  console.log(`Generated ${generatedPages.length} pages into root and docs mirror.`);
};

await main();
