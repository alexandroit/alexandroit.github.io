export const defaultLocale = "en";
export const localeOrder = ["en", "pt", "fr"];

export const locales = {
  en: {
    code: "en",
    htmlLang: "en",
    hreflang: "en",
    ogLocale: "en_US",
    flag: "🇺🇸",
    languageLabel: "English",
    title: "Alexandroit",
    author: "Alexandro",
    publisher: "Alexandroit",
    themeColor: "#f4efe6",
    updatedAt: "2026-04-08",
    baseKeywords: [
      "open source javascript libraries",
      "javascript ui libraries",
      "typescript libraries",
      "angular components",
      "react components",
      "vue components",
      "frontend libraries",
      "npm packages",
      "github repositories",
      "developer documentation",
    ],
    site: {
      tagline: "Open-source JavaScript, Angular, React, and Vue libraries.",
      description:
        "Discover open-source JavaScript libraries, Angular components, React components, and Vue components from the Stackline portfolio, with live docs, GitHub repositories, npm packages, and release-family guides.",
      heroEyebrow: "Alexandroit open source journal",
      heroTitle: "Open-source JavaScript, Angular, React, and Vue libraries with live docs.",
      heroSummary:
        "This site tracks the active documentation, release families, npm packages, and GitHub repositories behind the Stackline portfolio. Instead of a single marketing page, it works like a modern editorial archive with platform indexes, paginated project posts, and direct paths into every documentation site that is actually live today.",
      featuredIntro:
        "Featured releases focus on the packages with the clearest platform coverage, the deepest docs, and the biggest practical value for product teams shipping frontend software.",
    },
    seo: {
      homeTitle: "Open Source JavaScript, Angular, React and Vue Libraries",
      archiveTitle: "Open source library archive",
      archivePageTitle: (page) => `Open source library archive page ${page}`,
      archivePageDescription: (page) =>
        `Archive page ${page} of open-source JavaScript libraries, Angular components, React components, and Vue components on Alexandroit.`,
      platformTitle: (label) => `${label} libraries and components`,
      projectTitle: (title) => `${title} docs and package guide`,
      notFoundTitle: "Page not found",
    },
    navigation: [
      { key: "home", label: "Home", href: "index.html" },
      { key: "archive", label: "Archive", href: "archive/index.html" },
      { key: "vanilla", label: "Vanilla JS", href: "platform/vanilla/index.html" },
      { key: "angular", label: "Angular", href: "platform/angular/index.html" },
      { key: "react", label: "React", href: "platform/react/index.html" },
      { key: "vue", label: "Vue", href: "platform/vue/index.html" },
    ],
    platformMeta: {
      all: {
        label: "All projects",
        description:
          "The full Stackline archive, combining open-source JavaScript libraries and framework-specific Angular, React, and Vue components in one editorial index.",
      },
      vanilla: {
        label: "Vanilla JS",
        description:
          "Framework-agnostic JavaScript libraries, browser-first utilities, and TypeScript-ready packages that stand on their own and often power the wrapper libraries.",
      },
      angular: {
        label: "Angular",
        description:
          "Maintained Angular components and Angular libraries with live docs, framework-line compatibility, and product-oriented wrapper surfaces.",
      },
      react: {
        label: "React",
        description:
          "React components and React libraries with version-aware docs, published packages, and a strong focus on practical product integration.",
      },
      vue: {
        label: "Vue",
        description:
          "Vue components and Vue libraries with live demos, migration-friendly docs, and carefully scoped product surfaces.",
      },
    },
    ui: {
      postsPerPage: 6,
      openArchive: "Open archive",
      browseVanilla: "Browse Vanilla JS",
      liveDocsPortfolio: "Live docs portfolio",
      projectDossiers: "project dossiers",
      featured: "Featured",
      foundation: "Foundation",
      foundationBody: "Vanilla first, then wrapper families across Angular, React, and Vue.",
      liveDocsLabel: "Live docs",
      liveDocsBody: "Every listed entry points to a documentation site that is live today.",
      publicPackagesLabel: "Public npm packages",
      publicPackagesBody: "Published packages stay visible, while docs-only lines still get a project dossier.",
      frameworkSpreadLabel: "Framework spread",
      frameworkSpreadBody: "Vanilla foundations plus Angular, React, and Vue wrapper families.",
      featuredStoriesEyebrow: "Featured stories",
      featuredStoriesTitle: "Projects leading the current Stackline portfolio.",
      archiveEyebrow: "Archive",
      archiveTitle: "Project posts, docs hubs, and framework release lines.",
      archiveIntro: (page, total) =>
        `Page ${page} of ${total}. Every card leads to a dedicated project page plus direct links to docs, source, and package surfaces when they are public.`,
      portfolioMapEyebrow: "Portfolio map",
      browseByPlatform: "Browse by platform",
      whatSiteDoesEyebrow: "What this site does",
      docsFirstTitle: "Docs first, hype last.",
      docsFirstBody:
        "Every project entry is written like a post in a product journal: what the package covers, where the docs live, which release family is current, and where to go next.",
      platformArchiveEyebrow: "Platform archive",
      readDossier: "Read dossier",
      openDocs: "Open docs",
      github: "GitHub",
      npm: "npm",
      newerPosts: "Newer posts",
      olderPosts: "Older posts",
      readNextEyebrow: "Read next",
      relatedTitle: "Related project dossiers.",
      projectDossierEyebrow: "Project dossier",
      whyItMattersTitle: "Why it matters in the portfolio.",
      projectBodyParagraphOne: (projectTitle, family) =>
        `${projectTitle} sits inside the ${family.toLowerCase()} track of the Stackline portfolio. This dossier page exists so readers can jump from the editorial archive into the live docs without guessing which project is current, which framework family it belongs to, or whether the package is already public.`,
      projectBodyParagraphTwo:
        "The live docs remain the primary destination for API details and working examples. This page focuses on routing: where the package lives, where its docs are published, and which release line is active today.",
      primaryLinksEyebrow: "Primary links",
      openLiveSurfaceTitle: "Open the live surface.",
      platformContextEyebrow: "Platform context",
      packageLabel: "Package",
      currentLineLabel: "Current line",
      statusLabel: "Status",
      versionLabel: "Version",
      footerEyebrow: "Stackline portfolio",
      footerTitle: "Docs-first routing for the projects that are actually live.",
      footerNote:
        "Built as a static editorial hub so every important route exists as real HTML for readers, crawlers, and link previews.",
      notFoundEyebrow: "404",
      notFoundTitle: "That page is not in the archive.",
      notFoundBody: "Jump back to the home page, browse the platform indexes, or open the main archive.",
      backHome: "Back home",
      openArchiveShort: "Open archive",
      languageSwitcherLabel: "Languages",
    },
  },
  pt: {
    code: "pt",
    htmlLang: "pt-BR",
    hreflang: "pt-BR",
    ogLocale: "pt_BR",
    flag: "🇧🇷",
    languageLabel: "Português",
    title: "Alexandroit",
    author: "Alexandro",
    publisher: "Alexandroit",
    themeColor: "#f4efe6",
    updatedAt: "2026-04-08",
    baseKeywords: [
      "bibliotecas javascript open source",
      "bibliotecas ui javascript",
      "bibliotecas typescript",
      "componentes angular",
      "componentes react",
      "componentes vue",
      "bibliotecas frontend",
      "pacotes npm",
      "repositorios github",
      "documentacao para desenvolvedores",
    ],
    site: {
      tagline: "Bibliotecas open source de JavaScript, Angular, React e Vue.",
      description:
        "Descubra bibliotecas open source de JavaScript, componentes Angular, componentes React e componentes Vue do portfólio Stackline, com docs no ar, repositórios no GitHub, pacotes no npm e guias por família de release.",
      heroEyebrow: "Jornal open source da Alexandroit",
      heroTitle: "Bibliotecas open source de JavaScript, Angular, React e Vue com docs no ar.",
      heroSummary:
        "Este site acompanha a documentação ativa, as famílias de release, os pacotes npm e os repositórios GitHub por trás do portfólio Stackline. Em vez de uma única página de marketing, ele funciona como um arquivo editorial moderno, com índices por plataforma, posts paginados e acesso direto a cada documentação realmente publicada hoje.",
      featuredIntro:
        "Os destaques focam nos pacotes com a cobertura de plataforma mais clara, a documentação mais forte e o maior valor prático para equipes de produto que entregam software frontend.",
    },
    seo: {
      homeTitle: "Bibliotecas open source de JavaScript, Angular, React e Vue",
      archiveTitle: "Arquivo de bibliotecas open source",
      archivePageTitle: (page) => `Arquivo de bibliotecas open source página ${page}`,
      archivePageDescription: (page) =>
        `Página ${page} do arquivo de bibliotecas open source de JavaScript, componentes Angular, componentes React e componentes Vue na Alexandroit.`,
      platformTitle: (label) => `${label} bibliotecas e componentes`,
      projectTitle: (title) => `${title} docs e guia do pacote`,
      notFoundTitle: "Página não encontrada",
    },
    navigation: [
      { key: "home", label: "Início", href: "index.html" },
      { key: "archive", label: "Arquivo", href: "archive/index.html" },
      { key: "vanilla", label: "JavaScript puro", href: "platform/vanilla/index.html" },
      { key: "angular", label: "Angular", href: "platform/angular/index.html" },
      { key: "react", label: "React", href: "platform/react/index.html" },
      { key: "vue", label: "Vue", href: "platform/vue/index.html" },
    ],
    platformMeta: {
      all: {
        label: "Todos os projetos",
        description:
          "O arquivo completo da Stackline, combinando bibliotecas open source de JavaScript e componentes específicos para Angular, React e Vue em um único índice editorial.",
      },
      vanilla: {
        label: "JavaScript puro",
        description:
          "Bibliotecas JavaScript independentes de framework, utilitários browser-first e pacotes prontos para TypeScript que funcionam sozinhos e muitas vezes alimentam as bibliotecas wrapper.",
      },
      angular: {
        label: "Angular",
        description:
          "Componentes e bibliotecas Angular mantidos, com docs no ar, compatibilidade por linha de framework e superfícies orientadas a produto.",
      },
      react: {
        label: "React",
        description:
          "Componentes e bibliotecas React com docs por versão, pacotes publicados e forte foco em integração prática em produtos.",
      },
      vue: {
        label: "Vue",
        description:
          "Componentes e bibliotecas Vue com demos ao vivo, docs amigáveis para migração e superfícies de produto cuidadosamente definidas.",
      },
    },
    ui: {
      postsPerPage: 6,
      openArchive: "Abrir arquivo",
      browseVanilla: "Ver JavaScript puro",
      liveDocsPortfolio: "Portfólio com docs no ar",
      projectDossiers: "dossiês de projetos",
      featured: "Destaque",
      foundation: "Base",
      foundationBody: "Vanilla primeiro, depois famílias wrapper em Angular, React e Vue.",
      liveDocsLabel: "Docs no ar",
      liveDocsBody: "Cada item listado aponta para uma documentação que está realmente publicada hoje.",
      publicPackagesLabel: "Pacotes públicos no npm",
      publicPackagesBody: "Os pacotes publicados ficam visíveis, enquanto as linhas só com docs ainda ganham um dossiê próprio.",
      frameworkSpreadLabel: "Cobertura de frameworks",
      frameworkSpreadBody: "Bases em Vanilla mais famílias wrapper em Angular, React e Vue.",
      featuredStoriesEyebrow: "Projetos em destaque",
      featuredStoriesTitle: "Projetos que lideram o portfólio atual da Stackline.",
      archiveEyebrow: "Arquivo",
      archiveTitle: "Posts de projetos, hubs de documentação e linhas de release de framework.",
      archiveIntro: (page, total) =>
        `Página ${page} de ${total}. Cada card leva a uma página dedicada do projeto e também aos links de docs, código-fonte e pacote quando públicos.`,
      portfolioMapEyebrow: "Mapa do portfólio",
      browseByPlatform: "Navegar por plataforma",
      whatSiteDoesEyebrow: "O que este site faz",
      docsFirstTitle: "Docs primeiro, hype depois.",
      docsFirstBody:
        "Cada projeto é apresentado como um post de um jornal de produto: o que o pacote cobre, onde estão as docs, qual família de release está ativa e para onde seguir em seguida.",
      platformArchiveEyebrow: "Arquivo por plataforma",
      readDossier: "Ler dossiê",
      openDocs: "Abrir docs",
      github: "GitHub",
      npm: "npm",
      newerPosts: "Posts mais novos",
      olderPosts: "Posts mais antigos",
      readNextEyebrow: "Leia a seguir",
      relatedTitle: "Dossiês relacionados.",
      projectDossierEyebrow: "Dossiê do projeto",
      whyItMattersTitle: "Por que ele importa no portfólio.",
      projectBodyParagraphOne: (projectTitle, family) =>
        `${projectTitle} está dentro da trilha de ${family.toLowerCase()} do portfólio Stackline. Esta página existe para que o leitor saia do arquivo editorial direto para as docs sem precisar adivinhar qual projeto está atual, a qual família de framework ele pertence ou se o pacote já é público.`,
      projectBodyParagraphTwo:
        "As docs continuam sendo o destino principal para detalhes de API e exemplos em funcionamento. Esta página foca em roteamento: onde o pacote vive, onde as docs estão publicadas e qual linha de release está ativa hoje.",
      primaryLinksEyebrow: "Links principais",
      openLiveSurfaceTitle: "Abrir a superfície publicada.",
      platformContextEyebrow: "Contexto da plataforma",
      packageLabel: "Pacote",
      currentLineLabel: "Linha atual",
      statusLabel: "Status",
      versionLabel: "Versão",
      footerEyebrow: "Portfólio Stackline",
      footerTitle: "Roteamento orientado a docs para os projetos que realmente estão no ar.",
      footerNote:
        "Construído como um hub editorial estático para que cada rota importante exista como HTML real para leitores, buscadores e previews de link.",
      notFoundEyebrow: "404",
      notFoundTitle: "Essa página não está no arquivo.",
      notFoundBody: "Volte para a página inicial, navegue pelos índices por plataforma ou abra o arquivo principal.",
      backHome: "Voltar ao início",
      openArchiveShort: "Abrir arquivo",
      languageSwitcherLabel: "Idiomas",
    },
  },
  fr: {
    code: "fr",
    htmlLang: "fr-FR",
    hreflang: "fr-FR",
    ogLocale: "fr_FR",
    flag: "🇫🇷",
    languageLabel: "Français",
    title: "Alexandroit",
    author: "Alexandro",
    publisher: "Alexandroit",
    themeColor: "#f4efe6",
    updatedAt: "2026-04-08",
    baseKeywords: [
      "bibliotheques javascript open source",
      "bibliotheques ui javascript",
      "bibliotheques typescript",
      "composants angular",
      "composants react",
      "composants vue",
      "bibliotheques frontend",
      "packages npm",
      "depots github",
      "documentation developpeur",
    ],
    site: {
      tagline: "Bibliothèques open source JavaScript, Angular, React et Vue.",
      description:
        "Découvrez des bibliothèques open source JavaScript, des composants Angular, des composants React et des composants Vue du portefeuille Stackline, avec docs en ligne, dépôts GitHub, packages npm et guides par famille de release.",
      heroEyebrow: "Journal open source Alexandroit",
      heroTitle: "Bibliothèques open source JavaScript, Angular, React et Vue avec docs en ligne.",
      heroSummary:
        "Ce site suit la documentation active, les familles de release, les packages npm et les dépôts GitHub du portefeuille Stackline. Au lieu d'une simple page marketing, il fonctionne comme une archive éditoriale moderne avec des index par plateforme, des pages paginées et un accès direct à chaque documentation réellement en ligne aujourd'hui.",
      featuredIntro:
        "Les projets mis en avant se concentrent sur les packages avec la couverture de plateforme la plus claire, la documentation la plus solide et la plus grande valeur pratique pour les équipes produit qui livrent des logiciels frontend.",
    },
    seo: {
      homeTitle: "Bibliothèques open source JavaScript, Angular, React et Vue",
      archiveTitle: "Archive des bibliothèques open source",
      archivePageTitle: (page) => `Archive des bibliothèques open source page ${page}`,
      archivePageDescription: (page) =>
        `Page ${page} de l'archive des bibliothèques open source JavaScript, des composants Angular, React et Vue sur Alexandroit.`,
      platformTitle: (label) => `${label} bibliothèques et composants`,
      projectTitle: (title) => `${title} docs et guide du package`,
      notFoundTitle: "Page introuvable",
    },
    navigation: [
      { key: "home", label: "Accueil", href: "index.html" },
      { key: "archive", label: "Archives", href: "archive/index.html" },
      { key: "vanilla", label: "JavaScript pur", href: "platform/vanilla/index.html" },
      { key: "angular", label: "Angular", href: "platform/angular/index.html" },
      { key: "react", label: "React", href: "platform/react/index.html" },
      { key: "vue", label: "Vue", href: "platform/vue/index.html" },
    ],
    platformMeta: {
      all: {
        label: "Tous les projets",
        description:
          "L'archive complète Stackline, combinant des bibliothèques open source JavaScript et des composants spécifiques à Angular, React et Vue dans un seul index éditorial.",
      },
      vanilla: {
        label: "JavaScript pur",
        description:
          "Bibliothèques JavaScript indépendantes de tout framework, utilitaires orientés navigateur et packages prêts pour TypeScript qui fonctionnent seuls et alimentent souvent les wrappers.",
      },
      angular: {
        label: "Angular",
        description:
          "Composants et bibliothèques Angular maintenus, avec docs en ligne, compatibilité par ligne de framework et surfaces orientées produit.",
      },
      react: {
        label: "React",
        description:
          "Composants et bibliothèques React avec docs par version, packages publiés et forte orientation vers l'intégration pratique dans les produits.",
      },
      vue: {
        label: "Vue",
        description:
          "Composants et bibliothèques Vue avec démos en direct, documentation facile à migrer et surfaces produit soigneusement cadrées.",
      },
    },
    ui: {
      postsPerPage: 6,
      openArchive: "Ouvrir les archives",
      browseVanilla: "Voir JavaScript pur",
      liveDocsPortfolio: "Portefeuille avec docs en ligne",
      projectDossiers: "dossiers projets",
      featured: "À la une",
      foundation: "Fondation",
      foundationBody: "Vanilla d'abord, puis des familles wrapper pour Angular, React et Vue.",
      liveDocsLabel: "Docs en ligne",
      liveDocsBody: "Chaque entrée listée pointe vers une documentation réellement en ligne aujourd'hui.",
      publicPackagesLabel: "Packages publics sur npm",
      publicPackagesBody: "Les packages publiés restent visibles, tandis que les lignes docs-only reçoivent aussi un dossier dédié.",
      frameworkSpreadLabel: "Couverture framework",
      frameworkSpreadBody: "Des bases Vanilla et des familles wrapper pour Angular, React et Vue.",
      featuredStoriesEyebrow: "Projets à la une",
      featuredStoriesTitle: "Les projets qui portent aujourd'hui le portefeuille Stackline.",
      archiveEyebrow: "Archives",
      archiveTitle: "Pages projets, hubs de documentation et lignes de release framework.",
      archiveIntro: (page, total) =>
        `Page ${page} sur ${total}. Chaque carte mène à une page projet dédiée avec des liens directs vers la doc, le code source et le package lorsqu'ils sont publics.`,
      portfolioMapEyebrow: "Carte du portefeuille",
      browseByPlatform: "Parcourir par plateforme",
      whatSiteDoesEyebrow: "Ce que fait ce site",
      docsFirstTitle: "Docs d'abord, hype ensuite.",
      docsFirstBody:
        "Chaque entrée projet est rédigée comme un post de journal produit : ce que couvre le package, où vivent les docs, quelle famille de release est active et où aller ensuite.",
      platformArchiveEyebrow: "Archive par plateforme",
      readDossier: "Lire le dossier",
      openDocs: "Ouvrir la doc",
      github: "GitHub",
      npm: "npm",
      newerPosts: "Articles plus récents",
      olderPosts: "Articles plus anciens",
      readNextEyebrow: "À lire ensuite",
      relatedTitle: "Dossiers liés.",
      projectDossierEyebrow: "Dossier du projet",
      whyItMattersTitle: "Pourquoi il compte dans le portefeuille.",
      projectBodyParagraphOne: (projectTitle, family) =>
        `${projectTitle} s'inscrit dans la piste ${family.toLowerCase()} du portefeuille Stackline. Cette page existe pour permettre au lecteur de passer de l'archive éditoriale à la doc en direct sans deviner quel projet est actuel, à quelle famille de framework il appartient ou si le package est déjà public.`,
      projectBodyParagraphTwo:
        "La doc en ligne reste la destination principale pour les détails d'API et les exemples fonctionnels. Cette page se concentre sur l'orientation : où vit le package, où la doc est publiée et quelle ligne de release est active aujourd'hui.",
      primaryLinksEyebrow: "Liens principaux",
      openLiveSurfaceTitle: "Ouvrir la surface publiée.",
      platformContextEyebrow: "Contexte plateforme",
      packageLabel: "Package",
      currentLineLabel: "Ligne actuelle",
      statusLabel: "Statut",
      versionLabel: "Version",
      footerEyebrow: "Portefeuille Stackline",
      footerTitle: "Une orientation centrée sur la doc pour les projets réellement en ligne.",
      footerNote:
        "Construit comme un hub éditorial statique afin que chaque route importante existe en HTML réel pour les lecteurs, les moteurs de recherche et les aperçus de liens.",
      notFoundEyebrow: "404",
      notFoundTitle: "Cette page n'est pas dans l'archive.",
      notFoundBody: "Revenez à l'accueil, parcourez les index par plateforme ou ouvrez l'archive principale.",
      backHome: "Retour à l'accueil",
      openArchiveShort: "Ouvrir les archives",
      languageSwitcherLabel: "Langues",
    },
  },
};

export const projects = [
  {
    slug: "client-errors",
    title: "Client Errors",
    platform: "vanilla",
    version: "0.1.1",
    packageName: "@stackline/client-errors",
    docsUrl: "https://alexandroit.github.io/client-errors/",
    repoUrl: "https://github.com/alexandroit/client-errors",
    npmUrl: "https://www.npmjs.com/package/@stackline/client-errors",
    featured: true,
    i18n: {
      en: {
        family: "Observability",
        releaseStatus: "Public npm package",
        releaseLine: "Vanilla JS 0.1 line",
        summary:
          "A lightweight browser error reporting SDK with normalized payloads, sanitization, source context, screenshots, and transport to any developer-defined endpoint.",
        highlights: ["Browser SDK", "Docs live", "Published on npm"],
      },
      pt: {
        family: "Observabilidade",
        releaseStatus: "Pacote público no npm",
        releaseLine: "Linha Vanilla JS 0.1",
        summary:
          "Um SDK leve de rastreamento de erros no navegador, com payloads normalizados, sanitização, contexto de origem, capturas de tela e envio para qualquer endpoint definido pela equipe.",
        highlights: ["SDK para navegador", "Docs no ar", "Publicado no npm"],
      },
      fr: {
        family: "Observabilité",
        releaseStatus: "Package public sur npm",
        releaseLine: "Ligne Vanilla JS 0.1",
        summary:
          "Un SDK léger de remontée d'erreurs navigateur, avec charges utiles normalisées, sanitisation, contexte source, captures d'écran et envoi vers n'importe quel endpoint défini par l'équipe.",
        highlights: ["SDK navigateur", "Docs en ligne", "Publié sur npm"],
      },
    },
  },
  {
    slug: "loading",
    title: "Loading",
    platform: "vanilla",
    version: "0.1.1",
    packageName: "@stackline/loading",
    docsUrl: "https://alexandroit.github.io/loading/",
    repoUrl: "https://github.com/alexandroit/loading",
    npmUrl: "https://www.npmjs.com/package/@stackline/loading",
    featured: true,
    i18n: {
      en: {
        family: "Loading states",
        releaseStatus: "Public npm package",
        releaseLine: "Vanilla JS 0.1 line",
        summary:
          "A framework-agnostic loading toolkit with spinners, overlays, skeletons, shimmer loaders, accessibility hooks, and anti-flicker behavior.",
        highlights: ["Foundation library", "Docs live", "Published on npm"],
      },
      pt: {
        family: "Estados de carregamento",
        releaseStatus: "Pacote público no npm",
        releaseLine: "Linha Vanilla JS 0.1",
        summary:
          "Um toolkit de loading independente de framework com spinners, overlays, skeletons, shimmer, recursos de acessibilidade e comportamento anti-flicker.",
        highlights: ["Biblioteca base", "Docs no ar", "Publicado no npm"],
      },
      fr: {
        family: "États de chargement",
        releaseStatus: "Package public sur npm",
        releaseLine: "Ligne Vanilla JS 0.1",
        summary:
          "Un toolkit de chargement indépendant du framework avec spinners, overlays, skeletons, shimmer, hooks d'accessibilité et comportement anti-flicker.",
        highlights: ["Bibliothèque fondation", "Docs en ligne", "Publié sur npm"],
      },
    },
  },
  {
    slug: "color",
    title: "Color",
    platform: "vanilla",
    version: "0.1.1",
    packageName: "@stackline/color",
    docsUrl: "https://alexandroit.github.io/color/",
    repoUrl: "https://github.com/alexandroit/color",
    npmUrl: "https://www.npmjs.com/package/@stackline/color",
    featured: true,
    i18n: {
      en: {
        family: "Design system",
        releaseStatus: "Public npm package",
        releaseLine: "Vanilla JS 0.1 line",
        summary:
          "A tiny framework-agnostic color picker foundation for modern web apps, with clean DOM controls and a compact browser-ready footprint.",
        highlights: ["Tiny footprint", "Docs live", "Published on npm"],
      },
      pt: {
        family: "Sistema de design",
        releaseStatus: "Pacote público no npm",
        releaseLine: "Linha Vanilla JS 0.1",
        summary:
          "Uma base compacta e independente de framework para color picker em apps web modernos, com controles DOM limpos e footprint reduzido para navegador.",
        highlights: ["Footprint pequeno", "Docs no ar", "Publicado no npm"],
      },
      fr: {
        family: "Système de design",
        releaseStatus: "Package public sur npm",
        releaseLine: "Ligne Vanilla JS 0.1",
        summary:
          "Une base de sélecteur de couleur compacte et indépendante du framework pour les applications web modernes, avec des contrôles DOM propres et une empreinte légère côté navigateur.",
        highlights: ["Empreinte légère", "Docs en ligne", "Publié sur npm"],
      },
    },
  },
  {
    slug: "resize-observer",
    title: "Resize Observer",
    platform: "vanilla",
    version: "4.0.5",
    packageName: "@stackline/resize-observer",
    docsUrl: "https://alexandroit.github.io/resize-observer/",
    repoUrl: "https://github.com/alexandroit/resize-observer",
    npmUrl: "https://www.npmjs.com/package/@stackline/resize-observer",
    featured: false,
    i18n: {
      en: {
        family: "Browser APIs",
        releaseStatus: "Public npm package",
        releaseLine: "Vanilla JS 4.0 line",
        summary:
          "A maintained ResizeObserver polyfill and ponyfill covering box size options from the latest spec, with focused docs for performance and browser behavior.",
        highlights: ["Polyfill", "Docs live", "Published on npm"],
      },
      pt: {
        family: "APIs do navegador",
        releaseStatus: "Pacote público no npm",
        releaseLine: "Linha Vanilla JS 4.0",
        summary:
          "Um polyfill e ponyfill mantido de ResizeObserver, cobrindo opções de box size da especificação mais recente, com docs focadas em desempenho e comportamento do navegador.",
        highlights: ["Polyfill", "Docs no ar", "Publicado no npm"],
      },
      fr: {
        family: "API du navigateur",
        releaseStatus: "Package public sur npm",
        releaseLine: "Ligne Vanilla JS 4.0",
        summary:
          "Un polyfill et ponyfill ResizeObserver maintenu, couvrant les options de box size de la spécification récente, avec une documentation ciblée sur les performances et le comportement navigateur.",
        highlights: ["Polyfill", "Docs en ligne", "Publié sur npm"],
      },
    },
  },
  {
    slug: "moment",
    title: "Moment",
    platform: "vanilla",
    version: "2.30.5",
    packageName: "@stackline/moment",
    docsUrl: "https://alexandroit.github.io/moment/",
    repoUrl: "https://github.com/alexandroit/moment",
    npmUrl: "https://www.npmjs.com/package/@stackline/moment",
    featured: false,
    i18n: {
      en: {
        family: "Date and time",
        releaseStatus: "Public npm package",
        releaseLine: "Moment 2.30.x",
        summary:
          "A maintained Moment.js fork with versioned docs, familiar API compatibility, and modern publishing hygiene for teams that still depend on the library.",
        highlights: ["Legacy-compatible", "Docs live", "Published on npm"],
      },
      pt: {
        family: "Data e hora",
        releaseStatus: "Pacote público no npm",
        releaseLine: "Moment 2.30.x",
        summary:
          "Um fork mantido do Moment.js com docs versionadas, compatibilidade com a API conhecida e publicação moderna para equipes que ainda dependem da biblioteca.",
        highlights: ["Compatível com legado", "Docs no ar", "Publicado no npm"],
      },
      fr: {
        family: "Date et heure",
        releaseStatus: "Package public sur npm",
        releaseLine: "Moment 2.30.x",
        summary:
          "Un fork maintenu de Moment.js avec documentation versionnée, compatibilité avec l'API familière et hygiène de publication moderne pour les équipes qui dépendent encore de la bibliothèque.",
        highlights: ["Compatible héritage", "Docs en ligne", "Publié sur npm"],
      },
    },
  },
  {
    slug: "angular-loading",
    title: "Angular Loading",
    platform: "angular",
    version: "21.0.1",
    packageName: "@stackline/angular-loading",
    docsUrl: "https://alexandroit.github.io/angular-loading/",
    repoUrl: "https://github.com/alexandroit/angular-loading",
    npmUrl: "https://www.npmjs.com/package/@stackline/angular-loading",
    featured: false,
    i18n: {
      en: {
        family: "Loading states",
        releaseStatus: "Public npm package",
        releaseLine: "Angular 21 family",
        summary:
          "Angular wrapper components, directives, and service helpers for the Stackline loading foundation, documented across multiple Angular families.",
        highlights: ["Angular families", "Docs live", "Published on npm"],
      },
      pt: {
        family: "Estados de carregamento",
        releaseStatus: "Pacote público no npm",
        releaseLine: "Família Angular 21",
        summary:
          "Componentes wrapper, diretivas e serviços utilitários para Angular em cima da base Loading da Stackline, documentados ao longo de várias famílias Angular.",
        highlights: ["Famílias Angular", "Docs no ar", "Publicado no npm"],
      },
      fr: {
        family: "États de chargement",
        releaseStatus: "Package public sur npm",
        releaseLine: "Famille Angular 21",
        summary:
          "Des composants wrapper, directives et services utilitaires Angular au-dessus de la base Loading de Stackline, documentés sur plusieurs familles Angular.",
        highlights: ["Familles Angular", "Docs en ligne", "Publié sur npm"],
      },
    },
  },
  {
    slug: "react-loading",
    title: "React Loading",
    platform: "react",
    version: "19.0.1",
    packageName: "@stackline/react-loading",
    docsUrl: "https://alexandroit.github.io/react-loading/",
    repoUrl: "https://github.com/alexandroit/react-loading",
    npmUrl: "https://www.npmjs.com/package/@stackline/react-loading",
    featured: false,
    i18n: {
      en: {
        family: "Loading states",
        releaseStatus: "Public npm package",
        releaseLine: "React 19 family",
        summary:
          "React wrapper components, overlays, and imperative helpers that carry the loading foundation into React release families with versioned docs.",
        highlights: ["React families", "Docs live", "Published on npm"],
      },
      pt: {
        family: "Estados de carregamento",
        releaseStatus: "Pacote público no npm",
        releaseLine: "Família React 19",
        summary:
          "Componentes wrapper, overlays e helpers imperativos para React que levam a base Loading às famílias de release do React com docs versionadas.",
        highlights: ["Famílias React", "Docs no ar", "Publicado no npm"],
      },
      fr: {
        family: "États de chargement",
        releaseStatus: "Package public sur npm",
        releaseLine: "Famille React 19",
        summary:
          "Des composants wrapper, overlays et helpers impératifs React qui étendent la base Loading aux familles de release React avec documentation versionnée.",
        highlights: ["Familles React", "Docs en ligne", "Publié sur npm"],
      },
    },
  },
  {
    slug: "vue-loading",
    title: "Vue Loading",
    platform: "vue",
    version: "3.0.1",
    packageName: "@stackline/vue-loading",
    docsUrl: "https://alexandroit.github.io/vue-loading/",
    repoUrl: "https://github.com/alexandroit/vue-loading",
    npmUrl: "https://www.npmjs.com/package/@stackline/vue-loading",
    featured: false,
    i18n: {
      en: {
        family: "Loading states",
        releaseStatus: "Public npm package",
        releaseLine: "Vue 3 family",
        summary:
          "Vue components, directives, and composables for the Stackline loading system, with version-aware docs and framework-family coverage.",
        highlights: ["Vue families", "Docs live", "Published on npm"],
      },
      pt: {
        family: "Estados de carregamento",
        releaseStatus: "Pacote público no npm",
        releaseLine: "Família Vue 3",
        summary:
          "Componentes, diretivas e composables Vue para o sistema Loading da Stackline, com docs por versão e cobertura por família de framework.",
        highlights: ["Famílias Vue", "Docs no ar", "Publicado no npm"],
      },
      fr: {
        family: "États de chargement",
        releaseStatus: "Package public sur npm",
        releaseLine: "Famille Vue 3",
        summary:
          "Des composants, directives et composables Vue pour le système Loading de Stackline, avec documentation par version et couverture par famille de framework.",
        highlights: ["Familles Vue", "Docs en ligne", "Publié sur npm"],
      },
    },
  },
  {
    slug: "angular-highcharts",
    title: "Angular Highcharts",
    platform: "angular",
    version: "21.0.1",
    packageName: "@stackline/angular-highcharts",
    docsUrl: "https://alexandroit.github.io/angular-highcharts/",
    repoUrl: "https://github.com/alexandroit/angular-highcharts",
    npmUrl: "https://www.npmjs.com/package/@stackline/angular-highcharts",
    featured: false,
    i18n: {
      en: {
        family: "Charts",
        releaseStatus: "Public npm package",
        releaseLine: "Angular 21 family",
        summary:
          "Angular wrapper components for Highcharts, Highstock, Highmaps, and related modules, with live docs and migration-aware release families.",
        highlights: ["Charts", "Docs live", "Published on npm"],
      },
      pt: {
        family: "Gráficos",
        releaseStatus: "Pacote público no npm",
        releaseLine: "Família Angular 21",
        summary:
          "Componentes wrapper Angular para Highcharts, Highstock, Highmaps e módulos relacionados, com docs no ar e famílias de release pensadas para migração.",
        highlights: ["Gráficos", "Docs no ar", "Publicado no npm"],
      },
      fr: {
        family: "Graphiques",
        releaseStatus: "Package public sur npm",
        releaseLine: "Famille Angular 21",
        summary:
          "Des composants wrapper Angular pour Highcharts, Highstock, Highmaps et les modules associés, avec docs en ligne et familles de release pensées pour la migration.",
        highlights: ["Graphiques", "Docs en ligne", "Publié sur npm"],
      },
    },
  },
  {
    slug: "react-highcharts",
    title: "React Highcharts",
    platform: "react",
    version: "19.0.1",
    packageName: "@stackline/react-highcharts",
    docsUrl: "https://alexandroit.github.io/react-highcharts/",
    repoUrl: "https://github.com/alexandroit/react-highcharts",
    npmUrl: "https://www.npmjs.com/package/@stackline/react-highcharts",
    featured: false,
    i18n: {
      en: {
        family: "Charts",
        releaseStatus: "Public npm package",
        releaseLine: "React 19 family",
        summary:
          "A thin React wrapper for Highcharts with versioned demos, familiar API shape, and a maintained docs surface for modern React release families.",
        highlights: ["Charts", "Docs live", "Published on npm"],
      },
      pt: {
        family: "Gráficos",
        releaseStatus: "Pacote público no npm",
        releaseLine: "Família React 19",
        summary:
          "Um wrapper fino de React para Highcharts, com demos versionadas, formato de API familiar e docs mantidas para famílias modernas do React.",
        highlights: ["Gráficos", "Docs no ar", "Publicado no npm"],
      },
      fr: {
        family: "Graphiques",
        releaseStatus: "Package public sur npm",
        releaseLine: "Famille React 19",
        summary:
          "Un wrapper React léger pour Highcharts, avec démos versionnées, forme d'API familière et une surface documentaire maintenue pour les familles modernes de React.",
        highlights: ["Graphiques", "Docs en ligne", "Publié sur npm"],
      },
    },
  },
  {
    slug: "vue-highcharts",
    title: "Vue Highcharts",
    platform: "vue",
    version: "3.0.0",
    packageName: "@stackline/vue-highcharts",
    docsUrl: "https://alexandroit.github.io/vue-highcharts/",
    repoUrl: "https://github.com/alexandroit/vue-highcharts",
    npmUrl: "https://www.npmjs.com/package/@stackline/vue-highcharts",
    featured: false,
    i18n: {
      en: {
        family: "Charts",
        releaseStatus: "Public npm package",
        releaseLine: "Vue 3 family",
        summary:
          "A thin Vue wrapper for Highcharts with versioned demos, framework-family docs, and a practical migration path for existing chart surfaces.",
        highlights: ["Charts", "Docs live", "Published on npm"],
      },
      pt: {
        family: "Gráficos",
        releaseStatus: "Pacote público no npm",
        releaseLine: "Família Vue 3",
        summary:
          "Um wrapper fino de Vue para Highcharts, com demos versionadas, docs por família de framework e um caminho prático de migração para superfícies de gráfico existentes.",
        highlights: ["Gráficos", "Docs no ar", "Publicado no npm"],
      },
      fr: {
        family: "Graphiques",
        releaseStatus: "Package public sur npm",
        releaseLine: "Famille Vue 3",
        summary:
          "Un wrapper Vue léger pour Highcharts, avec démos versionnées, docs par famille de framework et un chemin de migration pragmatique pour les surfaces de graphique existantes.",
        highlights: ["Graphiques", "Docs en ligne", "Publié sur npm"],
      },
    },
  },
  {
    slug: "angular-data-table-component",
    title: "Angular Data Table Component",
    platform: "angular",
    version: "21.0.0",
    packageName: "@stackline/angular-data-table-component",
    docsUrl: "https://alexandroit.github.io/angular-data-table-component/",
    repoUrl: "https://github.com/alexandroit/angular-data-table-component",
    npmUrl: "https://www.npmjs.com/package/@stackline/angular-data-table-component",
    featured: false,
    i18n: {
      en: {
        family: "Tables",
        releaseStatus: "Public npm package",
        releaseLine: "Angular 21 family",
        summary:
          "A maintained Angular data table with sorting, selection, expansion, pagination, and versioned docs aligned to current Angular release families.",
        highlights: ["Data table", "Docs live", "Published on npm"],
      },
      pt: {
        family: "Tabelas",
        releaseStatus: "Pacote público no npm",
        releaseLine: "Família Angular 21",
        summary:
          "Uma tabela de dados Angular mantida, com ordenação, seleção, expansão, paginação e docs versionadas alinhadas às famílias atuais do Angular.",
        highlights: ["Tabela de dados", "Docs no ar", "Publicado no npm"],
      },
      fr: {
        family: "Tableaux",
        releaseStatus: "Package public sur npm",
        releaseLine: "Famille Angular 21",
        summary:
          "Un composant de tableau de données Angular maintenu, avec tri, sélection, expansion, pagination et docs versionnées alignées sur les familles Angular actuelles.",
        highlights: ["Tableau de données", "Docs en ligne", "Publié sur npm"],
      },
    },
  },
  {
    slug: "react-data-table-component",
    title: "React Data Table Component",
    platform: "react",
    version: "9.1.1",
    packageName: "@stackline/react-data-table-component",
    docsUrl: "https://alexandroit.github.io/react-data-table-component/",
    repoUrl: "https://github.com/alexandroit/react-data-table-component",
    npmUrl: "https://www.npmjs.com/package/@stackline/react-data-table-component",
    featured: false,
    i18n: {
      en: {
        family: "Tables",
        releaseStatus: "Public npm package",
        releaseLine: "React 19 family",
        summary:
          "A maintained React data table component with sorting, selection, expansion, theming, and versioned docs focused on production product teams.",
        highlights: ["Data table", "Docs live", "Published on npm"],
      },
      pt: {
        family: "Tabelas",
        releaseStatus: "Pacote público no npm",
        releaseLine: "Família React 19",
        summary:
          "Um componente de tabela de dados React mantido, com ordenação, seleção, expansão, temas e docs versionadas voltadas para times de produto em produção.",
        highlights: ["Tabela de dados", "Docs no ar", "Publicado no npm"],
      },
      fr: {
        family: "Tableaux",
        releaseStatus: "Package public sur npm",
        releaseLine: "Famille React 19",
        summary:
          "Un composant de tableau de données React maintenu, avec tri, sélection, expansion, thèmes et docs versionnées pensées pour les équipes produit en production.",
        highlights: ["Tableau de données", "Docs en ligne", "Publié sur npm"],
      },
    },
  },
  {
    slug: "angular-multiselect-dropdown",
    title: "Angular Multiselect Dropdown",
    platform: "angular",
    version: "21.0.1",
    packageName: "@stackline/angular-multiselect-dropdown",
    docsUrl: "https://alexandroit.github.io/angular-multiselect-dropdown/",
    repoUrl: "https://github.com/alexandroit/angular-multiselect-dropdown",
    npmUrl: null,
    featured: false,
    i18n: {
      en: {
        family: "Forms",
        releaseStatus: "Docs live, package line maintained locally",
        releaseLine: "Angular 21 family",
        summary:
          "A maintained Angular multiselect dropdown with long release-family history, versioned docs, and a focus on compatibility from legacy lines through Angular 21.",
        highlights: ["Form controls", "Docs live", "Version families"],
      },
      pt: {
        family: "Formulários",
        releaseStatus: "Docs no ar, linha do pacote mantida localmente",
        releaseLine: "Família Angular 21",
        summary:
          "Um multiselect dropdown Angular mantido, com longo histórico de famílias de release, docs versionadas e foco em compatibilidade desde linhas legadas até o Angular 21.",
        highlights: ["Controles de formulário", "Docs no ar", "Famílias de versão"],
      },
      fr: {
        family: "Formulaires",
        releaseStatus: "Docs en ligne, ligne du package maintenue localement",
        releaseLine: "Famille Angular 21",
        summary:
          "Un multiselect dropdown Angular maintenu, avec une longue histoire de familles de release, des docs versionnées et un focus sur la compatibilité des lignes héritées jusqu'à Angular 21.",
        highlights: ["Contrôles de formulaire", "Docs en ligne", "Familles de version"],
      },
    },
  },
  {
    slug: "react-multiselect-dropdown",
    title: "React Multiselect Dropdown",
    platform: "react",
    version: "19.0.0",
    packageName: "@stackline/react-multiselect-dropdown",
    docsUrl: "https://alexandroit.github.io/react-multiselect-dropdown/",
    repoUrl: "https://github.com/alexandroit/react-multiselect-dropdown",
    npmUrl: "https://www.npmjs.com/package/@stackline/react-multiselect-dropdown",
    featured: false,
    i18n: {
      en: {
        family: "Forms",
        releaseStatus: "Public npm package",
        releaseLine: "React 19 family",
        summary:
          "A maintained React multiselect dropdown with versioned demos and a settings model designed to stay familiar across framework families.",
        highlights: ["Form controls", "Docs live", "Published on npm"],
      },
      pt: {
        family: "Formulários",
        releaseStatus: "Pacote público no npm",
        releaseLine: "Família React 19",
        summary:
          "Um multiselect dropdown React mantido, com demos versionadas e um modelo de configuração pensado para permanecer familiar entre diferentes famílias de framework.",
        highlights: ["Controles de formulário", "Docs no ar", "Publicado no npm"],
      },
      fr: {
        family: "Formulaires",
        releaseStatus: "Package public sur npm",
        releaseLine: "Famille React 19",
        summary:
          "Un multiselect dropdown React maintenu, avec des démos versionnées et un modèle de configuration conçu pour rester familier entre différentes familles de framework.",
        highlights: ["Contrôles de formulaire", "Docs en ligne", "Publié sur npm"],
      },
    },
  },
  {
    slug: "ng-multiselect-dropdown",
    title: "NG Multiselect Dropdown",
    platform: "angular",
    version: "6.0.3",
    packageName: "@stackline/ng-multiselect-dropdown",
    docsUrl: "https://alexandroit.github.io/ng-multiselect-dropdown/",
    repoUrl: "https://github.com/alexandroit/ng-multiselect-dropdown",
    npmUrl: null,
    featured: false,
    i18n: {
      en: {
        family: "Forms",
        releaseStatus: "Docs live, package line maintained locally",
        releaseLine: "Angular 16 to 21 families",
        summary:
          "A maintained NG multiselect dropdown for recent Angular families, with template-driven forms, reactive forms, built-in search, and versioned docs.",
        highlights: ["Form controls", "Docs live", "Version families"],
      },
      pt: {
        family: "Formulários",
        releaseStatus: "Docs no ar, linha do pacote mantida localmente",
        releaseLine: "Famílias Angular 16 a 21",
        summary:
          "Um multiselect dropdown NG mantido para famílias recentes do Angular, com template-driven forms, reactive forms, busca embutida e docs versionadas.",
        highlights: ["Controles de formulário", "Docs no ar", "Famílias de versão"],
      },
      fr: {
        family: "Formulaires",
        releaseStatus: "Docs en ligne, ligne du package maintenue localement",
        releaseLine: "Familles Angular 16 à 21",
        summary:
          "Un multiselect dropdown NG maintenu pour les familles Angular récentes, avec template-driven forms, reactive forms, recherche intégrée et docs versionnées.",
        highlights: ["Contrôles de formulaire", "Docs en ligne", "Familles de version"],
      },
    },
  },
  {
    slug: "angular2-multiselect-dropdown",
    title: "Angular2 Multiselect Dropdown",
    platform: "angular",
    version: "14.0.1",
    packageName: "@stackline/angular2-multiselect-dropdown",
    docsUrl: "https://alexandroit.github.io/angular2-multiselect-dropdown/",
    repoUrl: "https://github.com/alexandroit/angular2-multiselect-dropdown",
    npmUrl: null,
    featured: false,
    i18n: {
      en: {
        family: "Forms",
        releaseStatus: "Docs live, package line maintained locally",
        releaseLine: "Angular 14 to 21 compatibility line",
        summary:
          "A legacy Angular multiselect family kept alive as a separate compatibility surface, with dedicated docs for the maintained release lines.",
        highlights: ["Legacy line", "Docs live", "Version families"],
      },
      pt: {
        family: "Formulários",
        releaseStatus: "Docs no ar, linha do pacote mantida localmente",
        releaseLine: "Linha de compatibilidade Angular 14 a 21",
        summary:
          "Uma família legada de multiselect Angular mantida como superfície separada de compatibilidade, com docs dedicadas para as linhas de release preservadas.",
        highlights: ["Linha legada", "Docs no ar", "Famílias de versão"],
      },
      fr: {
        family: "Formulaires",
        releaseStatus: "Docs en ligne, ligne du package maintenue localement",
        releaseLine: "Ligne de compatibilité Angular 14 à 21",
        summary:
          "Une famille héritée de multiselect Angular maintenue comme surface de compatibilité séparée, avec une documentation dédiée aux lignes de release conservées.",
        highlights: ["Ligne héritée", "Docs en ligne", "Familles de version"],
      },
    },
  },
  {
    slug: "vue-google-maps",
    title: "Vue Google Maps",
    platform: "vue",
    version: "3.0.0",
    packageName: "@stackline/vue-google-maps",
    docsUrl: "https://alexandroit.github.io/vue-google-maps/",
    repoUrl: "https://github.com/alexandroit/vue-google-maps",
    npmUrl: "https://www.npmjs.com/package/@stackline/vue-google-maps",
    featured: false,
    i18n: {
      en: {
        family: "Maps",
        releaseStatus: "Public npm package",
        releaseLine: "Vue 3 family",
        summary:
          "A maintained Vue wrapper for the Google Maps JavaScript API with advanced markers, clustering, migration-friendly components, and live docs.",
        highlights: ["Maps", "Docs live", "Published on npm"],
      },
      pt: {
        family: "Mapas",
        releaseStatus: "Pacote público no npm",
        releaseLine: "Família Vue 3",
        summary:
          "Um wrapper Vue mantido para a API JavaScript do Google Maps, com marcadores avançados, clustering, componentes amigáveis para migração e docs no ar.",
        highlights: ["Mapas", "Docs no ar", "Publicado no npm"],
      },
      fr: {
        family: "Cartes",
        releaseStatus: "Package public sur npm",
        releaseLine: "Famille Vue 3",
        summary:
          "Un wrapper Vue maintenu pour l'API JavaScript Google Maps, avec marqueurs avancés, clustering, composants pensés pour la migration et docs en ligne.",
        highlights: ["Cartes", "Docs en ligne", "Publié sur npm"],
      },
    },
  },
];
