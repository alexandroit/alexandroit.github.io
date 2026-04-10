import path from "node:path";

export const toPosix = (value) => value.replaceAll(path.sep, "/");

export const localePrefix = (localeKey, defaultLocale) =>
  localeKey === defaultLocale ? "" : `${localeKey}/`;

export const localizedPath = (localeKey, defaultLocale, basePath) =>
  `${localePrefix(localeKey, defaultLocale)}${basePath}`.replace(/\/+/g, "/");

export const canonicalUrl = (siteBaseUrl, localeKey, defaultLocale, basePath) => {
  const pagePath = localizedPath(localeKey, defaultLocale, basePath);
  const normalized = toPosix(pagePath);
  const trimmed = normalized === "index.html" ? "" : normalized.replace(/index\.html$/, "");
  return trimmed ? `${siteBaseUrl}/${trimmed}` : `${siteBaseUrl}/`;
};

export const pageHref = (fromPagePath, toPagePath) => {
  const relative = toPosix(path.posix.relative(path.posix.dirname(fromPagePath), toPagePath));

  if (!relative || relative === "index.html") {
    return "./";
  }

  if (relative.endsWith("/index.html")) {
    return relative.slice(0, -"index.html".length);
  }

  return relative;
};

export const assetHref = (fromPagePath, assetPath) =>
  toPosix(path.posix.relative(path.posix.dirname(fromPagePath), assetPath));

export const uniqueKeywords = (values) => {
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
