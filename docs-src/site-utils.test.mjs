import test from "node:test";
import assert from "node:assert/strict";
import {
  assetHref,
  canonicalUrl,
  localePrefix,
  localizedPath,
  pageHref,
  uniqueKeywords,
} from "./site-utils.mjs";

const siteBaseUrl = "https://alexandroit.github.io";
const defaultLocale = "en";

test("locale helpers keep english at the root and nest other locales", () => {
  assert.equal(localePrefix("en", defaultLocale), "");
  assert.equal(localePrefix("pt", defaultLocale), "pt/");
  assert.equal(localizedPath("en", defaultLocale, "projects/demo/index.html"), "projects/demo/index.html");
  assert.equal(localizedPath("fr", defaultLocale, "projects/demo/index.html"), "fr/projects/demo/index.html");
});

test("canonical urls collapse root index pages and preserve localized paths", () => {
  assert.equal(canonicalUrl(siteBaseUrl, "en", defaultLocale, "index.html"), "https://alexandroit.github.io/");
  assert.equal(
    canonicalUrl(siteBaseUrl, "pt", defaultLocale, "projects/angular-loading/index.html"),
    "https://alexandroit.github.io/pt/projects/angular-loading/",
  );
});

test("page hrefs and asset hrefs stay relative to the current page", () => {
  assert.equal(pageHref("projects/demo/index.html", "index.html"), "../../");
  assert.equal(pageHref("projects/demo/index.html", "projects/demo/index.html"), "./");
  assert.equal(assetHref("projects/demo/index.html", "assets/site.css"), "../../assets/site.css");
});

test("keyword normalization removes duplicates without losing original casing", () => {
  assert.deepEqual(
    uniqueKeywords([["Angular", "angular", "Vue"], ["vue", "Stackline"]]),
    ["Angular", "Vue", "Stackline"],
  );
});
