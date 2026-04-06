import { marked } from "marked";

export interface PageFrontmatter {
  title: string;
  description: string;
  heading?: string;
  summary?: string;
  demo?: string;
  status?: string;
}

export interface PageHeading {
  depth: number;
  text: string;
  anchor: string;
}

export interface DocumentationPage {
  path: string;
  frontmatter: PageFrontmatter;
  markdown: string;
  html: string;
  headings: PageHeading[];
}

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

const parseFrontmatter = (raw: string): { frontmatter: PageFrontmatter; body: string } => {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/);

  if (!match) {
    throw new Error("Every documentation page must include frontmatter.");
  }

  const body = raw.slice(match[0].length);
  const frontmatter = match[1]
    .split("\n")
    .reduce<Record<string, string>>((accumulator, line) => {
      const separatorIndex = line.indexOf(":");

      if (separatorIndex === -1) {
        return accumulator;
      }

      const key = line.slice(0, separatorIndex).trim();
      const value = line.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");
      accumulator[key] = value;
      return accumulator;
    }, {});

  return {
    frontmatter: {
      title: frontmatter.title ?? "Untitled",
      description: frontmatter.description ?? "",
      heading: frontmatter.heading,
      summary: frontmatter.summary,
      demo: frontmatter.demo,
      status: frontmatter.status,
    },
    body,
  };
};

const renderMarkdown = (markdown: string): { html: string; headings: PageHeading[] } => {
  const tokens = marked.lexer(markdown);
  const headings: PageHeading[] = [];

  tokens.forEach((token) => {
    if (token.type === "heading") {
      headings.push({
        depth: token.depth,
        text: token.text,
        anchor: slugify(token.text),
      });
    }
  });

  const renderer = new marked.Renderer();

  renderer.heading = ({ text, depth }) => {
    const anchor = slugify(text);
    return `<h${depth} id="${anchor}">${text}</h${depth}>`;
  };

  const html = marked.parse(markdown, {
    renderer,
    gfm: true,
  }) as string;

  return { html, headings };
};

const modules = import.meta.glob("../content/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const documentationPages: DocumentationPage[] = Object.entries(modules)
  .map(([filePath, raw]) => {
    const relativePath = filePath
      .replace("../content", "")
      .replace(/\.md$/, "");
    const { frontmatter, body } = parseFrontmatter(raw);
    const rendered = renderMarkdown(body);

    return {
      path: relativePath === "/index" ? "/" : relativePath,
      frontmatter,
      markdown: body,
      html: rendered.html,
      headings: rendered.headings,
    };
  })
  .sort((a, b) => a.path.localeCompare(b.path));

export const getDocumentationPage = (path: string): DocumentationPage | undefined =>
  documentationPages.find((page) => page.path === path);

