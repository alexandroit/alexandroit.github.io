import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defaultLocale, localeOrder, locales, projects } from "./site-data.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const docsRoot = path.join(repoRoot, "docs");
const cssSource = path.join(__dirname, "site.css");
const jsSource = path.join(__dirname, "site.js");
const faviconSource = path.join(__dirname, "favicon.svg");
const socialCardSource = path.join(__dirname, "social-card.svg");
const outputRoots = [repoRoot, docsRoot];
const staticAssetPaths = {
  css: "assets/site.css",
  js: "assets/site.js",
  favicon: "assets/favicon.svg",
  socialCard: "assets/social-card.svg",
};
const platformOrder = ["all", "vanilla", "angular", "react", "vue"];
const generatedPages = new Set();

const ensureDir = async (targetPath) => {
  await fs.mkdir(path.dirname(targetPath), { recursive: true });
};

const toPosix = (value) => value.replaceAll(path.sep, "/");

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const localePrefix = (localeKey) => (localeKey === defaultLocale ? "" : `${localeKey}/`);

const localizedPath = (localeKey, basePath) =>
  `${localePrefix(localeKey)}${basePath}`.replace(/\/+/g, "/");

const siteBaseUrl = "https://alexandroit.github.io";

const canonicalUrl = (localeKey, basePath) => {
  const pagePath = localizedPath(localeKey, basePath);
  const normalized = toPosix(pagePath);
  const trimmed = normalized === "index.html" ? "" : normalized.replace(/index\.html$/, "");
  return trimmed ? `${siteBaseUrl}/${trimmed}` : `${siteBaseUrl}/`;
};

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
  const output = [];

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
    output.push(keyword);
  }

  return output;
};

const jsonLdScript = (payload) =>
  `<script type="application/ld+json">${JSON.stringify(payload, null, 2)}</script>`;

const projectBasePath = (slug) => `projects/${slug}/index.html`;
const archiveBasePath = (pageNumber) =>
  pageNumber <= 1 ? "index.html" : `page/${pageNumber}/index.html`;
const archiveMirrorBasePath = (pageNumber) =>
  pageNumber <= 1 ? "archive/index.html" : `archive/page/${pageNumber}/index.html`;
const platformBasePath = (slug) => `platform/${slug}/index.html`;
const notFoundBasePath = "404.html";

const localizeProject = (project, localeKey) => ({
  ...project,
  ...project.i18n[localeKey],
});

const localizeProjects = (localeKey) => projects.map((project) => localizeProject(project, localeKey));

const localeForPagePath = (pagePath) => {
  for (const localeKey of localeOrder.filter((candidate) => candidate !== defaultLocale)) {
    if (pagePath.startsWith(`${localeKey}/`)) {
      return localeKey;
    }
  }

  return defaultLocale;
};

const writePage = async (pagePath, html) => {
  generatedPages.add(pagePath);

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
    ...localeOrder.filter((localeKey) => localeKey !== defaultLocale),
  ];

  await Promise.all(
    rootTargets.map((target) =>
      fs.rm(path.join(repoRoot, target), { recursive: true, force: true }),
    ),
  );

  await fs.rm(docsRoot, { recursive: true, force: true });
};

const buildCountsByPlatform = (items) =>
  platformOrder.reduce(
    (accumulator, key) => ({
      ...accumulator,
      [key]: key === "all" ? items.length : items.filter((project) => project.platform === key).length,
    }),
    {},
  );

const buildMetaTitle = (localeKey, title) => `${title} | ${locales[localeKey].title}`;

const buildOrganizationSchema = (localeKey) => ({
  "@type": "Organization",
  name: locales[localeKey].publisher,
  url: siteBaseUrl,
});

const buildBreadcrumbSchema = (localeKey, items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: canonicalUrl(item.localeKey ?? localeKey, item.basePath),
  })),
});

const buildWebsiteSchema = (localeKey) => {
  const localeContent = locales[localeKey];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: localeContent.title,
        url: siteBaseUrl,
        description: localeContent.site.description,
        inLanguage: localeContent.htmlLang,
        publisher: buildOrganizationSchema(localeKey),
      },
      {
        "@type": "Blog",
        name: `${localeContent.title} Open Source Journal`,
        url: canonicalUrl(localeKey, "index.html"),
        description: localeContent.site.description,
        inLanguage: localeContent.htmlLang,
        publisher: buildOrganizationSchema(localeKey),
      },
    ],
  };
};

const buildCollectionSchema = (localeKey, { title, description, basePath, items }) => {
  const localeContent = locales[localeKey];

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: canonicalUrl(localeKey, basePath),
    inLanguage: localeContent.htmlLang,
    isPartOf: {
      "@type": "WebSite",
      name: localeContent.title,
      url: siteBaseUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: canonicalUrl(localeKey, projectBasePath(project.slug)),
        name: project.title,
      })),
    },
  };
};

const buildProjectSchema = (localeKey, project, basePath, keywords) => {
  const localeContent = locales[localeKey];
  const platformLabel = localeContent.platformMeta[project.platform].label;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: project.title,
        url: canonicalUrl(localeKey, basePath),
        description: project.summary,
        inLanguage: localeContent.htmlLang,
        isPartOf: {
          "@type": "WebSite",
          name: localeContent.title,
          url: siteBaseUrl,
        },
      },
      {
        "@type": "SoftwareSourceCode",
        name: project.title,
        description: project.summary,
        url: canonicalUrl(localeKey, basePath),
        codeRepository: project.repoUrl,
        version: project.version,
        keywords: keywords.join(", "),
        programmingLanguage: ["JavaScript", "TypeScript"],
        runtimePlatform: platformLabel,
        author: {
          "@type": "Person",
          name: localeContent.author,
        },
        publisher: buildOrganizationSchema(localeKey),
        sameAs: [project.docsUrl, project.repoUrl, project.npmUrl].filter(Boolean),
      },
    ],
  };
};

const buildHomeKeywords = (localeKey, items) =>
  uniqueKeywords([
    locales[localeKey].baseKeywords,
    items.map((project) => project.title),
    items.map((project) => project.family),
  ]);

const buildArchiveKeywords = (localeKey, items) =>
  uniqueKeywords([
    locales[localeKey].baseKeywords,
    items.map((project) => project.title),
    items.map((project) => project.family),
  ]);

const buildPlatformKeywords = (localeKey, platform, items) => {
  const label = locales[localeKey].platformMeta[platform].label;

  return uniqueKeywords([
    locales[localeKey].baseKeywords,
    `${label} libraries`,
    `${label} components`,
    items.map((project) => project.title),
    items.map((project) => project.family),
  ]);
};

const buildProjectKeywords = (localeKey, project) => {
  const platformLabel = locales[localeKey].platformMeta[project.platform].label;

  return uniqueKeywords([
    locales[localeKey].baseKeywords,
    project.title,
    project.packageName,
    project.family,
    project.releaseLine,
    `${platformLabel} library`,
    `${platformLabel} component`,
    `${project.title} docs`,
    `${project.title} GitHub`,
    project.npmUrl ? `${project.title} npm` : null,
    project.highlights,
  ]);
};

const alternateLinks = (basePath) =>
  localeOrder
    .map((localeKey) => {
      const localeContent = locales[localeKey];
      return `<link rel="alternate" hreflang="${escapeHtml(localeContent.hreflang)}" href="${escapeHtml(canonicalUrl(localeKey, basePath))}" />`;
    })
    .join("\n  ");

const renderHead = ({
  localeKey,
  pagePath,
  basePath,
  title,
  description,
  keywords = [],
  schema = [],
  ogType = "website",
  robots = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  prevBasePath = "",
  nextBasePath = "",
}) => {
  const localeContent = locales[localeKey];

  return `
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(buildMetaTitle(localeKey, title))}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta name="keywords" content="${escapeHtml(keywords.join(", "))}" />
  <meta name="author" content="${escapeHtml(localeContent.author)}" />
  <meta name="creator" content="${escapeHtml(localeContent.author)}" />
  <meta name="publisher" content="${escapeHtml(localeContent.publisher)}" />
  <meta name="robots" content="${escapeHtml(robots)}" />
  <meta name="theme-color" content="${escapeHtml(localeContent.themeColor)}" />
  <meta property="og:title" content="${escapeHtml(buildMetaTitle(localeKey, title))}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:type" content="${escapeHtml(ogType)}" />
  <meta property="og:site_name" content="${escapeHtml(localeContent.title)}" />
  <meta property="og:locale" content="${escapeHtml(localeContent.ogLocale)}" />
  ${localeOrder
    .filter((otherLocale) => otherLocale !== localeKey)
    .map((otherLocale) => `<meta property="og:locale:alternate" content="${escapeHtml(locales[otherLocale].ogLocale)}" />`)
    .join("\n  ")}
  <meta property="og:url" content="${escapeHtml(canonicalUrl(localeKey, basePath))}" />
  <meta property="og:image" content="${escapeHtml(`${siteBaseUrl}/${staticAssetPaths.socialCard}`)}" />
  <meta property="og:image:alt" content="${escapeHtml(buildMetaTitle(localeKey, title))}" />
  ${ogType === "article" ? `<meta property="article:modified_time" content="${escapeHtml(localeContent.updatedAt)}" />` : ""}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(buildMetaTitle(localeKey, title))}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${escapeHtml(`${siteBaseUrl}/${staticAssetPaths.socialCard}`)}" />
  <link rel="canonical" href="${escapeHtml(canonicalUrl(localeKey, basePath))}" />
  ${alternateLinks(basePath)}
  <link rel="alternate" hreflang="x-default" href="${escapeHtml(canonicalUrl(defaultLocale, basePath))}" />
  ${prevBasePath ? `<link rel="prev" href="${escapeHtml(canonicalUrl(localeKey, prevBasePath))}" />` : ""}
  ${nextBasePath ? `<link rel="next" href="${escapeHtml(canonicalUrl(localeKey, nextBasePath))}" />` : ""}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="${assetHref(pagePath, staticAssetPaths.css)}" />
  <link rel="icon" type="image/svg+xml" href="${assetHref(pagePath, staticAssetPaths.favicon)}" />
  ${schema.map((item) => jsonLdScript(item)).join("\n  ")}
  ${localeContent.site.adSnippet ?? `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6353624842390947"
     crossorigin="anonymous"></script>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-3KQ9KECXR9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3KQ9KECXR9');
</script>`}
`;
};

const renderLocaleSwitcher = (localeKey, currentPagePath, basePath) => {
  const label = locales[localeKey].ui.languageSwitcherLabel;

  return `
    <nav class="locale-switcher" aria-label="${escapeHtml(label)}">
      ${localeOrder
        .map((targetLocale) => {
          const localeContent = locales[targetLocale];
          const href = pageHref(currentPagePath, localizedPath(targetLocale, basePath));
          return `
            <a
              class="locale-link ${targetLocale === localeKey ? "is-active" : ""}"
              href="${href}"
              lang="${escapeHtml(localeContent.htmlLang)}"
              hreflang="${escapeHtml(localeContent.hreflang)}"
              aria-label="${escapeHtml(localeContent.languageLabel)}"
            >
              <span class="locale-flag" aria-hidden="true">${localeContent.flag}</span>
              <span class="locale-code">${escapeHtml(localeContent.code.toUpperCase())}</span>
            </a>
          `;
        })
        .join("")}
    </nav>
  `;
};

const renderHeader = ({ localeKey, pagePath, basePath, currentSection }) => {
  const localeContent = locales[localeKey];

  return `
  <header class="site-header">
    <div class="site-bar">
      <a class="site-brand" href="${pageHref(pagePath, localizedPath(localeKey, "index.html"))}">
        <span class="site-brand-mark"></span>
        <span>
          <strong>${escapeHtml(localeContent.title)}</strong>
          <small>${escapeHtml(localeContent.site.tagline)}</small>
        </span>
      </a>
      <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="site-tools" data-nav-toggle>
        Menu
      </button>
      <div class="site-tools" id="site-tools" data-nav-root>
        <nav class="site-nav" aria-label="Primary">
          ${localeContent.navigation
            .map((item) => `
              <a class="${item.key === currentSection ? "is-active" : ""}" href="${pageHref(pagePath, localizedPath(localeKey, item.href))}">
                ${escapeHtml(item.label)}
              </a>
            `)
            .join("")}
        </nav>
        ${renderLocaleSwitcher(localeKey, pagePath, basePath)}
      </div>
    </div>
  </header>
`;
};

const renderFooter = ({ localeKey, pagePath }) => {
  const localeContent = locales[localeKey];

  return `
  <footer class="site-footer">
    <div class="footer-grid">
      <div>
        <span class="eyebrow">${escapeHtml(localeContent.ui.footerEyebrow)}</span>
        <h2>${escapeHtml(localeContent.ui.footerTitle)}</h2>
      </div>
      <nav class="footer-links" aria-label="Footer">
        ${localeContent.navigation
          .slice(1)
          .map((item) => `<a href="${pageHref(pagePath, localizedPath(localeKey, item.href))}">${escapeHtml(item.label)}</a>`)
          .join("")}
      </nav>
      <p class="footer-note">${escapeHtml(localeContent.ui.footerNote)}</p>
    </div>
  </footer>
  <script src="${assetHref(pagePath, staticAssetPaths.js)}" defer></script>
`;
};

const renderProjectActions = (localeKey, project) => {
  const localeContent = locales[localeKey];
  const actions = [
    `<a class="action" href="${project.docsUrl}" target="_blank" rel="noreferrer noopener">${escapeHtml(localeContent.ui.openDocs)}</a>`,
    `<a class="action" href="${project.repoUrl}" target="_blank" rel="noreferrer noopener">${escapeHtml(localeContent.ui.github)}</a>`,
  ];

  if (project.npmUrl) {
    actions.push(
      `<a class="action" href="${project.npmUrl}" target="_blank" rel="noreferrer noopener">${escapeHtml(localeContent.ui.npm)}</a>`,
    );
  }

  return actions.join("");
};

const renderProjectCard = (localeKey, project, currentPagePath, { featured = false, index = 0 } = {}) => {
  const localeContent = locales[localeKey];
  const cardClasses = [
    "story-card",
    featured ? "story-card-featured" : "",
    `story-card-slot-${(index % 3) + 1}`,
    `platform-${project.platform}`,
  ]
    .filter(Boolean)
    .join(" ");

  return `
  <article class="${cardClasses}" data-reveal>
    <div class="story-meta">
      <span>${escapeHtml(localeContent.platformMeta[project.platform].label)}</span>
      <span>${escapeHtml(project.family)}</span>
      <span>${escapeHtml(project.version)}</span>
    </div>
    <h3>
      <a href="${pageHref(currentPagePath, localizedPath(localeKey, projectBasePath(project.slug)))}">${escapeHtml(project.title)}</a>
    </h3>
    <p>${escapeHtml(project.summary)}</p>
    <ul class="chip-row" aria-label="Project highlights">
      ${project.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
    <div class="story-links">
      ${renderProjectActions(localeKey, project)}
      <a class="story-readmore" href="${pageHref(currentPagePath, localizedPath(localeKey, projectBasePath(project.slug)))}">${escapeHtml(localeContent.ui.readDossier)}</a>
    </div>
  </article>
`;
};

const renderMetrics = (localeKey, items) => {
  const localeContent = locales[localeKey];

  return `
  <div class="metric-grid">
    <article class="metric-card metric-card-docs" data-reveal>
      <span class="metric-label">${escapeHtml(localeContent.ui.liveDocsLabel)}</span>
      <strong>${items.length}</strong>
      <p>${escapeHtml(localeContent.ui.liveDocsBody)}</p>
    </article>
    <article class="metric-card metric-card-packages" data-reveal>
      <span class="metric-label">${escapeHtml(localeContent.ui.publicPackagesLabel)}</span>
      <strong>${items.filter((project) => project.npmUrl).length}</strong>
      <p>${escapeHtml(localeContent.ui.publicPackagesBody)}</p>
    </article>
    <article class="metric-card metric-card-platforms" data-reveal>
      <span class="metric-label">${escapeHtml(localeContent.ui.frameworkSpreadLabel)}</span>
      <strong>${Object.keys(localeContent.platformMeta).length - 1}</strong>
      <p>${escapeHtml(localeContent.ui.frameworkSpreadBody)}</p>
    </article>
  </div>
`;
};

const renderHero = (localeKey, currentPagePath, items) => {
  const localeContent = locales[localeKey];
  const featuredProjects = items.filter((project) => project.featured);
  const loadingProject = items.find((project) => project.slug === "loading");

  return `
  <section class="hero-shell">
    <div class="hero-copy" data-reveal>
      <span class="eyebrow">${escapeHtml(localeContent.site.heroEyebrow)}</span>
      <h1>${escapeHtml(localeContent.site.heroTitle)}</h1>
      <p>${escapeHtml(localeContent.site.heroSummary)}</p>
      <div class="hero-actions">
        <a class="button-primary" href="${pageHref(currentPagePath, localizedPath(localeKey, "archive/index.html"))}">${escapeHtml(localeContent.ui.openArchive)}</a>
        <a class="button-secondary" href="${pageHref(currentPagePath, localizedPath(localeKey, platformBasePath("vanilla")))}">${escapeHtml(localeContent.ui.browseVanilla)}</a>
      </div>
    </div>
    <div class="hero-panel" data-reveal>
      <div class="hero-panel-top">
        <span>${escapeHtml(localeContent.ui.liveDocsPortfolio)}</span>
        <strong>${items.length} ${escapeHtml(localeContent.ui.projectDossiers)}</strong>
      </div>
      <div class="hero-spotlight">
        <article>
          <span>${escapeHtml(localeContent.ui.featured)}</span>
          <strong>${escapeHtml(featuredProjects[0].title)}</strong>
          <p>${escapeHtml(featuredProjects[0].summary)}</p>
        </article>
        <article>
          <span>${escapeHtml(localeContent.ui.foundation)}</span>
          <strong>${escapeHtml(loadingProject.title)}</strong>
          <p>${escapeHtml(localeContent.ui.foundationBody)}</p>
        </article>
      </div>
    </div>
  </section>
`;
};

const renderFeaturedStories = (localeKey, currentPagePath, items) => {
  const localeContent = locales[localeKey];
  const featuredProjects = items.filter((project) => project.featured);

  return `
  <section class="section-block" data-reveal>
    <div class="section-heading">
      <div>
        <span class="eyebrow">${escapeHtml(localeContent.ui.featuredStoriesEyebrow)}</span>
        <h2>${escapeHtml(localeContent.ui.featuredStoriesTitle)}</h2>
      </div>
      <p>${escapeHtml(localeContent.site.featuredIntro)}</p>
    </div>
    <div class="story-grid story-grid-featured">
      ${featuredProjects.map((project, index) => renderProjectCard(localeKey, project, currentPagePath, { featured: true, index })).join("")}
    </div>
  </section>
`;
};

const renderSidebar = (localeKey, currentPagePath, items, currentPlatform = "all") => {
  const localeContent = locales[localeKey];
  const countsByPlatform = buildCountsByPlatform(items);

  return `
  <aside class="page-sidebar" data-reveal>
    <section class="sidebar-card">
      <span class="eyebrow">${escapeHtml(localeContent.ui.portfolioMapEyebrow)}</span>
      <h3>${escapeHtml(localeContent.ui.browseByPlatform)}</h3>
      <div class="sidebar-links">
        ${platformOrder
          .map((platform) => {
            const href =
              platform === "all"
                ? localizedPath(localeKey, "index.html")
                : localizedPath(localeKey, platformBasePath(platform));
            return `
              <a class="${platform === currentPlatform ? "is-active" : ""}" href="${pageHref(currentPagePath, href)}">
                <span>${escapeHtml(localeContent.platformMeta[platform].label)}</span>
                <strong>${countsByPlatform[platform]}</strong>
              </a>
            `;
          })
          .join("")}
      </div>
    </section>
    <section class="sidebar-card">
      <span class="eyebrow">${escapeHtml(localeContent.ui.whatSiteDoesEyebrow)}</span>
      <h3>${escapeHtml(localeContent.ui.docsFirstTitle)}</h3>
      <p>${escapeHtml(localeContent.ui.docsFirstBody)}</p>
    </section>
  </aside>
`;
};

const renderPagination = (localeKey, currentPagePath, currentPage, totalPages, routeForPage) => {
  if (totalPages <= 1) {
    return "";
  }

  const localeContent = locales[localeKey];
  const items = [];

  if (currentPage > 1) {
    items.push(
      `<a class="pagination-arrow" href="${pageHref(currentPagePath, routeForPage(currentPage - 1))}">${escapeHtml(localeContent.ui.newerPosts)}</a>`,
    );
  } else {
    items.push(`<span class="pagination-arrow is-disabled">${escapeHtml(localeContent.ui.newerPosts)}</span>`);
  }

  items.push(`
    <div class="pagination-pages">
      ${Array.from({ length: totalPages }, (_value, index) => index + 1)
        .map((pageNumber) => {
          const href = pageHref(currentPagePath, routeForPage(pageNumber));
          return pageNumber === currentPage
            ? `<span class="page-pill is-current" aria-current="page">${pageNumber}</span>`
            : `<a class="page-pill" href="${href}">${pageNumber}</a>`;
        })
        .join("")}
    </div>
  `);

  if (currentPage < totalPages) {
    items.push(
      `<a class="pagination-arrow" href="${pageHref(currentPagePath, routeForPage(currentPage + 1))}">${escapeHtml(localeContent.ui.olderPosts)}</a>`,
    );
  } else {
    items.push(`<span class="pagination-arrow is-disabled">${escapeHtml(localeContent.ui.olderPosts)}</span>`);
  }

  return `<nav class="pagination-wrap" aria-label="Pagination">${items.join("")}</nav>`;
};

const renderArchiveFeed = (localeKey, currentPagePath, items, currentPage, totalPages, routeForPage) => {
  const localeContent = locales[localeKey];

  return `
  <section class="section-block">
    <div class="section-heading" data-reveal>
      <div>
        <span class="eyebrow">${escapeHtml(localeContent.ui.archiveEyebrow)}</span>
        <h2>${escapeHtml(localeContent.ui.archiveTitle)}</h2>
      </div>
      <p>${escapeHtml(localeContent.ui.archiveIntro(currentPage, totalPages))}</p>
    </div>
    <div class="story-grid">
      ${items.map((project, index) => renderProjectCard(localeKey, project, currentPagePath, { index })).join("")}
    </div>
    ${renderPagination(localeKey, currentPagePath, currentPage, totalPages, routeForPage)}
  </section>
`;
};

const renderPlatformHero = (localeKey, platform) => {
  const localeContent = locales[localeKey];

  return `
  <section class="platform-hero" data-reveal>
    <span class="eyebrow">${escapeHtml(localeContent.ui.platformArchiveEyebrow)}</span>
    <h1>${escapeHtml(localeContent.platformMeta[platform].label)}</h1>
    <p>${escapeHtml(localeContent.platformMeta[platform].description)}</p>
  </section>
`;
};

const renderRelatedProjects = (localeKey, project, items, currentPagePath) => {
  const localeContent = locales[localeKey];
  const related = items
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
        <span class="eyebrow">${escapeHtml(localeContent.ui.readNextEyebrow)}</span>
        <h2>${escapeHtml(localeContent.ui.relatedTitle)}</h2>
      </div>
    </div>
    <div class="story-grid story-grid-compact">
      ${related.map((candidate, index) => renderProjectCard(localeKey, candidate, currentPagePath, { index })).join("")}
    </div>
  </section>
`;
};

const renderProjectPage = (localeKey, project, items, currentPagePath) => {
  const localeContent = locales[localeKey];

  return `
  <section class="project-hero platform-${project.platform}">
    <div class="project-hero-copy" data-reveal>
      <span class="eyebrow">${escapeHtml(localeContent.platformMeta[project.platform].label)} · ${escapeHtml(project.family)}</span>
      <h1>${escapeHtml(project.title)}</h1>
      <p>${escapeHtml(project.summary)}</p>
      <div class="hero-actions">
        ${renderProjectActions(localeKey, project)}
      </div>
    </div>
    <div class="project-facts" data-reveal>
      <div>
        <span>${escapeHtml(localeContent.ui.packageLabel)}</span>
        <strong>${escapeHtml(project.packageName)}</strong>
      </div>
      <div>
        <span>${escapeHtml(localeContent.ui.currentLineLabel)}</span>
        <strong>${escapeHtml(project.releaseLine)}</strong>
      </div>
      <div>
        <span>${escapeHtml(localeContent.ui.statusLabel)}</span>
        <strong>${escapeHtml(project.releaseStatus)}</strong>
      </div>
      <div>
        <span>${escapeHtml(localeContent.ui.versionLabel)}</span>
        <strong>${escapeHtml(project.version)}</strong>
      </div>
    </div>
  </section>
  <section class="section-block project-layout">
    <article class="project-body" data-reveal>
      <div class="section-heading">
        <div>
          <span class="eyebrow">${escapeHtml(localeContent.ui.projectDossierEyebrow)}</span>
          <h2>${escapeHtml(localeContent.ui.whyItMattersTitle)}</h2>
        </div>
      </div>
      <p>${escapeHtml(localeContent.ui.projectBodyParagraphOne(project.title, project.family))}</p>
      <p>${escapeHtml(localeContent.ui.projectBodyParagraphTwo)}</p>
      <ul class="check-list">
        ${project.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </article>
    <aside class="page-sidebar" data-reveal>
      <section class="sidebar-card">
        <span class="eyebrow">${escapeHtml(localeContent.ui.primaryLinksEyebrow)}</span>
        <h3>${escapeHtml(localeContent.ui.openLiveSurfaceTitle)}</h3>
        <div class="sidebar-actions">
          ${renderProjectActions(localeKey, project)}
        </div>
      </section>
      <section class="sidebar-card">
        <span class="eyebrow">${escapeHtml(localeContent.ui.platformContextEyebrow)}</span>
        <h3>${escapeHtml(localeContent.platformMeta[project.platform].label)}</h3>
        <p>${escapeHtml(localeContent.platformMeta[project.platform].description)}</p>
      </section>
    </aside>
  </section>
  ${renderRelatedProjects(localeKey, project, items, currentPagePath)}
`;
};

const renderLayout = ({
  localeKey,
  basePath,
  pagePath,
  title,
  description,
  keywords = [],
  schema = [],
  ogType = "website",
  robots,
  prevBasePath = "",
  nextBasePath = "",
  currentSection,
  hero,
  main,
  sidebar = "",
  bodyClass = "",
}) => `<!doctype html>
<html lang="${escapeHtml(locales[localeKey].htmlLang)}">
<head>
${renderHead({
  localeKey,
  pagePath,
  basePath,
  title,
  description,
  keywords,
  schema,
  ogType,
  robots,
  prevBasePath,
  nextBasePath,
})}
</head>
<body class="${escapeHtml(bodyClass)}">
  <div class="site-shell">
    <a class="skip-link" href="#main-content">Skip to content</a>
    ${renderHeader({ localeKey, pagePath, basePath, currentSection })}
    <main class="site-main" id="main-content">
      ${hero}
      <div class="content-shell">
        <div class="content-stack">
          ${main}
        </div>
        ${sidebar}
      </div>
    </main>
    ${renderFooter({ localeKey, pagePath })}
  </div>
</body>
</html>
`;

const generateArchivePages = async (localeKey) => {
  const localeContent = locales[localeKey];
  const localizedProjects = localizeProjects(localeKey);
  const totalPages = Math.ceil(localizedProjects.length / localeContent.ui.postsPerPage);

  for (let pageIndex = 0; pageIndex < totalPages; pageIndex += 1) {
    const pageNumber = pageIndex + 1;
    const start = pageIndex * localeContent.ui.postsPerPage;
    const items = localizedProjects.slice(start, start + localeContent.ui.postsPerPage);
    const basePath = archiveBasePath(pageNumber);
    const pagePath = localizedPath(localeKey, basePath);
    const title = pageNumber === 1 ? localeContent.seo.homeTitle : localeContent.seo.archivePageTitle(pageNumber);
    const description =
      pageNumber === 1 ? localeContent.site.description : localeContent.seo.archivePageDescription(pageNumber);

    const html = renderLayout({
      localeKey,
      basePath,
      pagePath,
      title,
      description,
      keywords: pageNumber === 1 ? buildHomeKeywords(localeKey, localizedProjects) : buildArchiveKeywords(localeKey, localizedProjects),
      schema: [
        buildWebsiteSchema(localeKey),
        buildCollectionSchema(localeKey, {
          title,
          description,
          basePath,
          items,
        }),
        buildBreadcrumbSchema(
          localeKey,
          pageNumber === 1
            ? [{ name: localeContent.navigation[0].label, basePath: "index.html" }]
            : [
                { name: localeContent.navigation[0].label, basePath: "index.html" },
                { name: localeContent.navigation[1].label, basePath: "archive/index.html" },
                { name: String(pageNumber), basePath },
              ],
        ),
      ],
      currentSection: pageNumber === 1 ? "home" : "archive",
      bodyClass: pageNumber === 1 ? "page-home" : "page-archive",
      hero:
        pageNumber === 1
          ? `${renderHero(localeKey, pagePath, localizedProjects)}${renderMetrics(localeKey, localizedProjects)}${renderFeaturedStories(localeKey, pagePath, localizedProjects)}`
          : "",
      main: renderArchiveFeed(localeKey, pagePath, items, pageNumber, totalPages, (targetPage) =>
        localizedPath(localeKey, archiveBasePath(targetPage)),
      ),
      sidebar: renderSidebar(localeKey, pagePath, localizedProjects),
      prevBasePath: pageNumber > 1 ? archiveBasePath(pageNumber - 1) : "",
      nextBasePath: pageNumber < totalPages ? archiveBasePath(pageNumber + 1) : "",
    });

    await writePage(pagePath, html);

    if (pageNumber === 1) {
      const mirrorBasePath = archiveMirrorBasePath(pageNumber);
      const mirrorPagePath = localizedPath(localeKey, mirrorBasePath);
      const mirrorTitle = localeContent.seo.archiveTitle;
      const mirrorDescription = localeContent.platformMeta.all.description;
      const mirrorHtml = renderLayout({
        localeKey,
        basePath: mirrorBasePath,
        pagePath: mirrorPagePath,
        title: mirrorTitle,
        description: mirrorDescription,
        keywords: buildArchiveKeywords(localeKey, localizedProjects),
        schema: [
          buildCollectionSchema(localeKey, {
            title: mirrorTitle,
            description: mirrorDescription,
            basePath: mirrorBasePath,
            items,
          }),
          buildBreadcrumbSchema(localeKey, [
            { name: localeContent.navigation[0].label, basePath: "index.html" },
            { name: localeContent.navigation[1].label, basePath: "archive/index.html" },
          ]),
        ],
        currentSection: "archive",
        bodyClass: "page-archive",
        hero: renderPlatformHero(localeKey, "all"),
        main: renderArchiveFeed(localeKey, mirrorPagePath, items, pageNumber, totalPages, (targetPage) =>
          localizedPath(localeKey, archiveMirrorBasePath(targetPage)),
        ),
        sidebar: renderSidebar(localeKey, mirrorPagePath, localizedProjects),
        nextBasePath: totalPages > 1 ? archiveMirrorBasePath(2) : "",
      });

      await writePage(mirrorPagePath, mirrorHtml);
    } else {
      const mirrorBasePath = archiveMirrorBasePath(pageNumber);
      const mirrorPagePath = localizedPath(localeKey, mirrorBasePath);
      const mirrorTitle = localeContent.seo.archivePageTitle(pageNumber);
      const mirrorDescription = localeContent.seo.archivePageDescription(pageNumber);
      const mirrorHtml = renderLayout({
        localeKey,
        basePath: mirrorBasePath,
        pagePath: mirrorPagePath,
        title: mirrorTitle,
        description: mirrorDescription,
        keywords: buildArchiveKeywords(localeKey, localizedProjects),
        schema: [
          buildCollectionSchema(localeKey, {
            title: mirrorTitle,
            description: mirrorDescription,
            basePath: mirrorBasePath,
            items,
          }),
          buildBreadcrumbSchema(localeKey, [
            { name: localeContent.navigation[0].label, basePath: "index.html" },
            { name: localeContent.navigation[1].label, basePath: "archive/index.html" },
            { name: String(pageNumber), basePath: mirrorBasePath },
          ]),
        ],
        currentSection: "archive",
        bodyClass: "page-archive",
        hero: renderPlatformHero(localeKey, "all"),
        main: renderArchiveFeed(localeKey, mirrorPagePath, items, pageNumber, totalPages, (targetPage) =>
          localizedPath(localeKey, archiveMirrorBasePath(targetPage)),
        ),
        sidebar: renderSidebar(localeKey, mirrorPagePath, localizedProjects),
        prevBasePath: pageNumber > 1 ? archiveMirrorBasePath(pageNumber - 1) : "",
        nextBasePath: pageNumber < totalPages ? archiveMirrorBasePath(pageNumber + 1) : "",
      });

      await writePage(mirrorPagePath, mirrorHtml);
    }
  }
};

const generatePlatformPages = async (localeKey) => {
  const localeContent = locales[localeKey];
  const localizedProjects = localizeProjects(localeKey);

  for (const platform of platformOrder.filter((value) => value !== "all")) {
    const items = localizedProjects.filter((project) => project.platform === platform);
    const basePath = platformBasePath(platform);
    const pagePath = localizedPath(localeKey, basePath);
    const title = localeContent.seo.platformTitle(localeContent.platformMeta[platform].label);
    const description = localeContent.platformMeta[platform].description;

    const html = renderLayout({
      localeKey,
      basePath,
      pagePath,
      title,
      description,
      keywords: buildPlatformKeywords(localeKey, platform, items),
      schema: [
        buildCollectionSchema(localeKey, {
          title,
          description,
          basePath,
          items,
        }),
        buildBreadcrumbSchema(localeKey, [
          { name: localeContent.navigation[0].label, basePath: "index.html" },
          { name: localeContent.platformMeta[platform].label, basePath },
        ]),
      ],
      currentSection: platform,
      bodyClass: `page-platform page-platform-${platform}`,
      hero: renderPlatformHero(localeKey, platform),
      main: `
        <section class="section-block">
          <div class="story-grid">
            ${items.map((project, index) => renderProjectCard(localeKey, project, pagePath, { index })).join("")}
          </div>
        </section>
      `,
      sidebar: renderSidebar(localeKey, pagePath, localizedProjects, platform),
    });

    await writePage(pagePath, html);
  }
};

const generateProjectPages = async (localeKey) => {
  const localeContent = locales[localeKey];
  const localizedProjects = localizeProjects(localeKey);

  for (const project of localizedProjects) {
    const basePath = projectBasePath(project.slug);
    const pagePath = localizedPath(localeKey, basePath);
    const keywords = buildProjectKeywords(localeKey, project);

    const html = renderLayout({
      localeKey,
      basePath,
      pagePath,
      title: localeContent.seo.projectTitle(project.title),
      description: project.summary,
      keywords,
      schema: [
        buildProjectSchema(localeKey, project, basePath, keywords),
        buildBreadcrumbSchema(localeKey, [
          { name: localeContent.navigation[0].label, basePath: "index.html" },
          {
            name: localeContent.platformMeta[project.platform].label,
            basePath: platformBasePath(project.platform),
          },
          { name: project.title, basePath },
        ]),
      ],
      ogType: "article",
      currentSection: project.platform,
      bodyClass: `page-project page-project-${project.platform}`,
      hero: "",
      main: renderProjectPage(localeKey, project, localizedProjects, pagePath),
      sidebar: "",
    });

    await writePage(pagePath, html);
  }
};

const generateNotFoundPages = async () => {
  for (const localeKey of localeOrder) {
    const localeContent = locales[localeKey];
    const basePath = notFoundBasePath;
    const pagePath = localizedPath(localeKey, basePath);

    const html = renderLayout({
      localeKey,
      basePath,
      pagePath,
      title: localeContent.seo.notFoundTitle,
      description: localeContent.ui.notFoundBody,
      keywords: uniqueKeywords([...localeContent.baseKeywords, localeContent.seo.notFoundTitle]),
      schema: [
        buildBreadcrumbSchema(localeKey, [
          { name: localeContent.navigation[0].label, basePath: "index.html" },
          { name: "404", basePath },
        ]),
      ],
      robots: "noindex,follow",
      currentSection: "archive",
      bodyClass: "page-404",
      hero: `
        <section class="platform-hero" data-reveal>
          <span class="eyebrow">${escapeHtml(localeContent.ui.notFoundEyebrow)}</span>
          <h1>${escapeHtml(localeContent.ui.notFoundTitle)}</h1>
          <p>${escapeHtml(localeContent.ui.notFoundBody)}</p>
          <div class="hero-actions">
            <a class="button-primary" href="${pageHref(pagePath, localizedPath(localeKey, "index.html"))}">${escapeHtml(localeContent.ui.backHome)}</a>
            <a class="button-secondary" href="${pageHref(pagePath, localizedPath(localeKey, "archive/index.html"))}">${escapeHtml(localeContent.ui.openArchiveShort)}</a>
          </div>
        </section>
      `,
      main: "",
      sidebar: renderSidebar(localeKey, pagePath, localizeProjects(localeKey)),
    });

    await writePage(pagePath, html);
  }
};

const generateUtilityFiles = async () => {
  const defaultContent = locales[defaultLocale];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...generatedPages]
  .filter((pagePath) => !pagePath.endsWith("404.html"))
  .map((pagePath) => {
    const localeKey = localeForPagePath(pagePath);
    const basePath = localeKey === defaultLocale ? pagePath : pagePath.slice(localePrefix(localeKey).length);
    return `  <url><loc>${escapeHtml(canonicalUrl(localeKey, basePath))}</loc><lastmod>${defaultContent.updatedAt}</lastmod></url>`;
  })
  .join("\n")}
</urlset>
`;

  const robots = `User-agent: *
Allow: /

Sitemap: ${siteBaseUrl}/sitemap.xml
`;

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

  for (const localeKey of localeOrder) {
    await generateArchivePages(localeKey);
    await generatePlatformPages(localeKey);
    await generateProjectPages(localeKey);
  }

  await generateNotFoundPages();
  await generateUtilityFiles();
  console.log(`Generated ${generatedPages.size} pages into root and docs mirror.`);
};

await main();
