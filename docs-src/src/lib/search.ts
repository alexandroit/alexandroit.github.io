import { documentationPages } from "./content";
import { flatNavigation } from "./navigation";

export interface SearchResult {
  title: string;
  path: string;
  description: string;
  section: string;
}

const searchableEntries: SearchResult[] = flatNavigation.map((item) => {
  const page = documentationPages.find((entry) => entry.path === item.path);

  return {
    title: item.title,
    path: item.path ?? "/",
    description: page?.frontmatter.description ?? item.description ?? "",
    section: item.section,
  };
});

export const searchDocumentation = (query: string): SearchResult[] => {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return [];
  }

  return searchableEntries
    .filter((entry) =>
      [entry.title, entry.description, entry.section, entry.path]
        .join(" ")
        .toLowerCase()
        .includes(normalized),
    )
    .slice(0, 10);
};

