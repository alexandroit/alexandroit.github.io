import type { PlaygroundExample } from "../data/playground-examples";

type BlueprintConceptKind =
  | "stacked-100"
  | "stacked"
  | "bar"
  | "line"
  | "scatter"
  | "distribution"
  | "financial"
  | "hierarchy"
  | "flow"
  | "widget"
  | "geo"
  | "timeline"
  | "hybrid"
  | "generic";

interface BlueprintMeta {
  title: string;
  summary: string;
  value: string;
  reading: string;
  interactions: string;
}

interface OverlayItem {
  label: string;
  value: string;
  color: string;
}

interface OverlayMeta {
  numberLabel: string;
  numberValue: string;
  legendItems: OverlayItem[];
}

const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

const renderControlLabel = (label: string, enabled: boolean): string =>
  `${label}: ${enabled ? "On" : "Off"}`;

const includesAny = (value: string, terms: string[]): boolean =>
  terms.some((term) => value.includes(term));

const resolveBlueprintConceptKind = (example: PlaygroundExample): BlueprintConceptKind => {
  const haystack = `${example.id} ${example.name}`.toLowerCase();

  if (includesAny(haystack, ["100 stacked", "100%-stacked", "100% stacked"])) {
    return "stacked-100";
  }

  if (example.family === "Widgets") {
    return "widget";
  }

  if (example.family === "Financial") {
    return "financial";
  }

  if (example.family === "Hierarchical") {
    return "hierarchy";
  }

  if (example.family === "Flow") {
    return "flow";
  }

  if (example.family === "Geospatial") {
    return "geo";
  }

  if (example.family === "Timeline") {
    return "timeline";
  }

  if (example.family === "Hybrid") {
    return "hybrid";
  }

  if (example.family === "Statistical") {
    return includesAny(haystack, ["bubble", "hexbin", "swarm", "strip", "scatter", "dot plot"])
      ? "scatter"
      : "distribution";
  }

  if (example.family === "Cartesian") {
    if (includesAny(haystack, ["stacked", "marimekko", "mosaic", "population pyramid"])) {
      return "stacked";
    }

    if (includesAny(haystack, ["line", "area", "spline", "step", "stream", "bump", "slope"])) {
      return "line";
    }

    if (includesAny(haystack, ["bar", "column", "waterfall", "lollipop", "bullet", "dumbbell"])) {
      return "bar";
    }
  }

  if (example.family === "Analytical") {
    return "scatter";
  }

  return "generic";
};

const getBlueprintMeta = (
  kind: BlueprintConceptKind,
  example: PlaygroundExample,
): BlueprintMeta => {
  const summary = `${example.description} This concept preview translates the product intent of ${example.name.toLowerCase()} into a visual shape, even before the renderer ships in the core.`;

  switch (kind) {
    case "stacked-100":
      return {
        title: "Relative composition comparison",
        summary,
        value: "Executive and dashboard use cases where composition matters more than raw totals.",
        reading: "Every bar stays normalized to 100%, so the eye compares mix, not magnitude.",
        interactions: "Hover a segment to inspect both percentage and raw contribution, then toggle series from the legend.",
      };
    case "stacked":
      return {
        title: "Total plus composition",
        summary,
        value: "Operational boards where total workload and internal mix need to be read together.",
        reading: "The stacked model preserves overall magnitude while exposing contribution by segment.",
        interactions: "Hover segments, inspect totals, and eventually recalculate stacks when one series is hidden.",
      };
    case "bar":
      return {
        title: "Categorical ranking and comparison",
        summary,
        value: "Dashboards that need direct comparison, ranking, targets, or variance reading.",
        reading: "Bar length or height anchors the comparison immediately, even when labels are long.",
        interactions: "Hover a bar for exact value, sort categories, and drill into the selected slice of the business.",
      };
    case "line":
      return {
        title: "Temporal trend and movement",
        summary,
        value: "Planning, monitoring, and comparison workflows where direction over time matters most.",
        reading: "Slope, turning points, and overlays become the primary reading model.",
        interactions: "Hover points, compare series, and add threshold, forecast, or annotation layers later.",
      };
    case "scatter":
      return {
        title: "Point-based relationship analysis",
        summary,
        value: "Analytics screens focused on correlation, clustering, outliers, and performance distribution.",
        reading: "Position reveals relationship first; size or color becomes a secondary business signal.",
        interactions: "Lasso clusters, inspect outliers, and add regression or density overlays when needed.",
      };
    case "distribution":
      return {
        title: "Distribution and spread reading",
        summary,
        value: "Statistical workflows where variance, quartiles, bins, and outliers matter to decision making.",
        reading: "The chart communicates spread and concentration rather than simple magnitude.",
        interactions: "Hover bins or quartiles, compare groups, and filter the underlying population dynamically.",
      };
    case "financial":
      return {
        title: "Precision time-series finance view",
        summary,
        value: "Trading, forecasting, PnL, and risk analysis that depend on exact cursor reading.",
        reading: "Candles and overlays are designed for precision, not decoration.",
        interactions: "Crosshair, zoom, navigator sync, and overlay toggles are expected from day one.",
      };
    case "hierarchy":
      return {
        title: "Nested structure navigation",
        summary,
        value: "Portfolio, org, filesystem, and category views where parents and children must stay connected.",
        reading: "Area or depth conveys importance while structure preserves context.",
        interactions: "Drill down, focus a branch, and use breadcrumbs to stay oriented inside the hierarchy.",
      };
    case "flow":
      return {
        title: "Path and movement analysis",
        summary,
        value: "Funnels, journeys, dependencies, and route analysis where transitions are the actual insight.",
        reading: "Links reveal where volume moves, leaks, or concentrates across stages.",
        interactions: "Highlight one path, isolate a branch, and drill into the stages that matter most.",
      };
    case "widget":
      return {
        title: "Compact dashboard surface",
        summary,
        value: "KPI boards that need strong state reading in very small spaces.",
        reading: "Number, state, and trend must remain readable without chart chrome getting in the way.",
        interactions: "Hover for context, toggle thresholds, and expand into the underlying chart when needed.",
      };
    case "geo":
      return {
        title: "Spatial comparison layer",
        summary,
        value: "Maps that need region, route, or density reading without sacrificing a product-ready UI.",
        reading: "Geography provides context, while color, marker size, or flow defines the business signal.",
        interactions: "Hover regions, zoom, drill into geography, and sync with filters across the dashboard.",
      };
    case "timeline":
      return {
        title: "Time window and schedule planning",
        summary,
        value: "Roadmaps, incidents, releases, and project plans that rely on clear sequencing.",
        reading: "Duration, overlap, and milestone placement become the core reading model.",
        interactions: "Zoom the range, inspect milestones, and eventually drag or resize scheduled blocks.",
      };
    case "hybrid":
      return {
        title: "Composite dashboard widget",
        summary,
        value: "High-value product surfaces that mix KPI, trend, risk, threshold, and state in one tile.",
        reading: "The widget adapts between quick executive scanning and deeper contextual inspection.",
        interactions: "Hover, expand, and drill into the most important metric without leaving the dashboard flow.",
      };
    default:
      return {
        title: "Platform blueprint preview",
        summary,
        value: "A preview surface that keeps future product breadth visible without pretending the renderer already exists.",
        reading: "This concept focuses on business reading first, then implementation detail later.",
        interactions: "Inspect hotspots, review the contract, and use the API blueprint to align future implementation.",
      };
  }
};

const getOverlayMeta = (kind: BlueprintConceptKind): OverlayMeta => {
  switch (kind) {
    case "stacked-100":
      return {
        numberLabel: "Primary mix",
        numberValue: "52%",
        legendItems: [
          { label: "Core", value: "52%", color: "#2563eb" },
          { label: "Expansion", value: "28%", color: "#14b8a6" },
          { label: "Services", value: "20%", color: "#f59e0b" },
        ],
      };
    case "stacked":
      return {
        numberLabel: "Total volume",
        numberValue: "118k",
        legendItems: [
          { label: "Core", value: "58k", color: "#2563eb" },
          { label: "Expansion", value: "36k", color: "#14b8a6" },
          { label: "Services", value: "24k", color: "#f59e0b" },
        ],
      };
    case "bar":
      return {
        numberLabel: "Top category",
        numberValue: "74",
        legendItems: [
          { label: "North", value: "74", color: "#2563eb" },
          { label: "West", value: "61", color: "#38bdf8" },
          { label: "Global", value: "48", color: "#14b8a6" },
        ],
      };
    case "line":
      return {
        numberLabel: "Latest value",
        numberValue: "84",
        legendItems: [
          { label: "Actual", value: "84", color: "#2563eb" },
          { label: "Plan", value: "78", color: "#14b8a6" },
        ],
      };
    case "scatter":
      return {
        numberLabel: "Best cluster",
        numberValue: "4.2",
        legendItems: [
          { label: "Enterprise", value: "High fit", color: "#2563eb" },
          { label: "SMB", value: "Moderate", color: "#38bdf8" },
        ],
      };
    case "distribution":
      return {
        numberLabel: "Median",
        numberValue: "38",
        legendItems: [
          { label: "p25", value: "24", color: "#94a3b8" },
          { label: "Median", value: "38", color: "#2563eb" },
          { label: "p75", value: "54", color: "#14b8a6" },
        ],
      };
    case "financial":
      return {
        numberLabel: "Close",
        numberValue: "128.4",
        legendItems: [
          { label: "Open", value: "124.0", color: "#94a3b8" },
          { label: "High", value: "130.0", color: "#22c55e" },
          { label: "Low", value: "121.0", color: "#ef4444" },
        ],
      };
    case "hierarchy":
      return {
        numberLabel: "Top branch",
        numberValue: "42%",
        legendItems: [
          { label: "Alpha", value: "42", color: "#2563eb" },
          { label: "Beta", value: "28", color: "#14b8a6" },
          { label: "Gamma", value: "18", color: "#f59e0b" },
        ],
      };
    case "flow":
      return {
        numberLabel: "Main path",
        numberValue: "1.24k",
        legendItems: [
          { label: "Visit > Trial", value: "1.24k", color: "#2563eb" },
          { label: "Trial > Paid", value: "318", color: "#14b8a6" },
        ],
      };
    case "widget":
      return {
        numberLabel: "Current state",
        numberValue: "72%",
        legendItems: [
          { label: "Healthy", value: "0-60", color: "#22c55e" },
          { label: "Attention", value: "60-80", color: "#f59e0b" },
          { label: "Critical", value: "80-100", color: "#ef4444" },
        ],
      };
    case "geo":
      return {
        numberLabel: "Top region",
        numberValue: "42",
        legendItems: [
          { label: "NA", value: "42", color: "#2563eb" },
          { label: "EU", value: "31", color: "#14b8a6" },
          { label: "APAC", value: "27", color: "#f59e0b" },
        ],
      };
    case "timeline":
      return {
        numberLabel: "Critical path",
        numberValue: "46d",
        legendItems: [
          { label: "Discovery", value: "14d", color: "#2563eb" },
          { label: "Delivery", value: "32d", color: "#14b8a6" },
        ],
      };
    case "hybrid":
      return {
        numberLabel: "Health score",
        numberValue: "84",
        legendItems: [
          { label: "Revenue", value: "+18%", color: "#2563eb" },
          { label: "Risk", value: "Low", color: "#f59e0b" },
          { label: "Status", value: "On pace", color: "#14b8a6" },
        ],
      };
    default:
      return {
        numberLabel: "Planned value",
        numberValue: "TBD",
        legendItems: [
          { label: "Input", value: "Configured", color: "#2563eb" },
          { label: "Theme", value: "Ready", color: "#14b8a6" },
          { label: "Behavior", value: "Defined", color: "#f59e0b" },
        ],
      };
  }
};

const renderLegend = (meta: OverlayMeta): string => `
  <div class="blueprint-concept-legend" data-blueprint-legend>
    ${meta.legendItems
      .map(
        (item) => `
          <article class="blueprint-concept-legend-item">
            <span class="blueprint-concept-legend-key">
              <i style="background:${item.color}"></i>
              ${item.label}
            </span>
            <strong>${item.value}</strong>
          </article>
        `,
      )
      .join("")}
  </div>
`;

const renderStacked100Scene = (): string => `
  <svg class="blueprint-scene" viewBox="0 0 760 320" role="img" aria-label="100 percent stacked bar concept preview">
    <rect x="92" y="56" width="560" height="44" rx="14" fill="#e6eef9" />
    <rect x="92" y="128" width="560" height="44" rx="14" fill="#e6eef9" />
    <rect x="92" y="200" width="560" height="44" rx="14" fill="#e6eef9" />
    <g class="blueprint-hotspot" data-concept-tip="Core contributes 52% of the first category, so the reading stays relative rather than absolute.">
      <rect x="92" y="56" width="292" height="44" rx="14" fill="#2563eb" />
      <rect x="384" y="56" width="157" height="44" fill="#14b8a6" />
      <rect x="541" y="56" width="111" height="44" fill="#f59e0b" />
      <text x="238" y="82" fill="#ffffff" font-size="16" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">52%</text>
    </g>
    <g class="blueprint-hotspot" data-concept-tip="The second bar shows a different mix even though the full width stays locked at 100%.">
      <rect x="92" y="128" width="224" height="44" rx="14" fill="#2563eb" />
      <rect x="316" y="128" width="202" height="44" fill="#14b8a6" />
      <rect x="518" y="128" width="134" height="44" fill="#f59e0b" />
      <text x="204" y="154" fill="#ffffff" font-size="16" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">40%</text>
    </g>
    <g class="blueprint-hotspot" data-concept-tip="The third category leans more heavily on services, which is exactly why 100% stacking is useful here.">
      <rect x="92" y="200" width="168" height="44" rx="14" fill="#2563eb" />
      <rect x="260" y="200" width="224" height="44" fill="#14b8a6" />
      <rect x="484" y="200" width="168" height="44" fill="#f59e0b" />
      <text x="176" y="226" fill="#ffffff" font-size="16" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">30%</text>
    </g>
    <text x="84" y="84" fill="#44556f" font-size="13" font-weight="700" text-anchor="end">North</text>
    <text x="84" y="156" fill="#44556f" font-size="13" font-weight="700" text-anchor="end">West</text>
    <text x="84" y="228" fill="#44556f" font-size="13" font-weight="700" text-anchor="end">Global</text>
    <text x="92" y="278" fill="#74839b" font-size="12">0%</text>
    <text x="372" y="278" fill="#74839b" font-size="12" text-anchor="middle">50%</text>
    <text x="652" y="278" fill="#74839b" font-size="12" text-anchor="end">100%</text>
  </svg>
`;

const renderStackedScene = (): string => `
  <svg class="blueprint-scene" viewBox="0 0 760 320" role="img" aria-label="Stacked bar concept preview">
    <line x1="88" y1="264" x2="664" y2="264" stroke="#cdd9ea" stroke-width="2" />
    <g class="blueprint-hotspot" data-concept-tip="This stack keeps total and composition visible in one reading.">
      <rect x="128" y="124" width="76" height="140" rx="14" fill="#2563eb" />
      <rect x="128" y="76" width="76" height="48" fill="#14b8a6" />
      <rect x="128" y="48" width="76" height="28" rx="12" fill="#f59e0b" />
      <text x="166" y="38" fill="#1d2a41" font-size="14" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">92</text>
    </g>
    <g class="blueprint-hotspot" data-concept-tip="A smaller total with a different segment mix makes comparison easy.">
      <rect x="292" y="152" width="76" height="112" rx="14" fill="#2563eb" />
      <rect x="292" y="106" width="76" height="46" fill="#14b8a6" />
      <rect x="292" y="86" width="76" height="20" rx="12" fill="#f59e0b" />
      <text x="330" y="74" fill="#1d2a41" font-size="14" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">68</text>
    </g>
    <g class="blueprint-hotspot" data-concept-tip="The tallest stack suggests the strongest combined pipeline value.">
      <rect x="456" y="108" width="76" height="156" rx="14" fill="#2563eb" />
      <rect x="456" y="68" width="76" height="40" fill="#14b8a6" />
      <rect x="456" y="44" width="76" height="24" rx="12" fill="#f59e0b" />
      <text x="494" y="34" fill="#1d2a41" font-size="14" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">104</text>
    </g>
    <text x="166" y="288" fill="#44556f" font-size="13" font-weight="700" text-anchor="middle">North</text>
    <text x="330" y="288" fill="#44556f" font-size="13" font-weight="700" text-anchor="middle">West</text>
    <text x="494" y="288" fill="#44556f" font-size="13" font-weight="700" text-anchor="middle">Global</text>
  </svg>
`;

const renderBarScene = (): string => `
  <svg class="blueprint-scene" viewBox="0 0 760 320" role="img" aria-label="Bar concept preview">
    <line x1="96" y1="264" x2="664" y2="264" stroke="#cdd9ea" stroke-width="2" />
    <g class="blueprint-hotspot" data-concept-tip="The leading bar becomes the ranking anchor for the entire view.">
      <rect x="138" y="108" width="84" height="156" rx="18" fill="#2563eb" />
      <text x="180" y="98" fill="#1d2a41" font-size="14" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">74</text>
    </g>
    <g class="blueprint-hotspot" data-concept-tip="Secondary categories should still feel readable without overpowering the leader.">
      <rect x="286" y="136" width="84" height="128" rx="18" fill="#38bdf8" />
      <text x="328" y="126" fill="#1d2a41" font-size="14" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">61</text>
    </g>
    <g class="blueprint-hotspot" data-concept-tip="The third bar keeps the scale comparison stable while leaving room for long category labels later.">
      <rect x="434" y="164" width="84" height="100" rx="18" fill="#14b8a6" />
      <text x="476" y="154" fill="#1d2a41" font-size="14" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">48</text>
    </g>
    <text x="180" y="288" fill="#44556f" font-size="13" font-weight="700" text-anchor="middle">North</text>
    <text x="328" y="288" fill="#44556f" font-size="13" font-weight="700" text-anchor="middle">West</text>
    <text x="476" y="288" fill="#44556f" font-size="13" font-weight="700" text-anchor="middle">Global</text>
  </svg>
`;

const renderLineScene = (): string => `
  <svg class="blueprint-scene" viewBox="0 0 760 320" role="img" aria-label="Line concept preview">
    <line x1="88" y1="260" x2="668" y2="260" stroke="#cdd9ea" stroke-width="2" />
    <line x1="88" y1="90" x2="88" y2="260" stroke="#cdd9ea" stroke-width="2" />
    <path d="M112 214 C162 172 212 180 262 144 C312 108 362 122 412 94 C462 66 512 82 562 70 C612 58 638 48 650 44" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" />
    <path d="M112 232 C162 218 212 194 262 180 C312 156 362 154 412 138 C462 120 512 118 562 104 C612 94 638 88 650 86" fill="none" stroke="#14b8a6" stroke-width="4" stroke-linecap="round" stroke-dasharray="7 7" />
    <g class="blueprint-hotspot" data-concept-tip="This turning point is where the trend breaks away from plan and becomes operationally important.">
      <circle cx="412" cy="94" r="8" fill="#2563eb" />
      <text x="412" y="78" fill="#1d2a41" font-size="14" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">84</text>
    </g>
    <g class="blueprint-hotspot" data-concept-tip="The forecast line stays softer and easier to distinguish from actual performance.">
      <circle cx="562" cy="104" r="8" fill="#14b8a6" />
      <text x="562" y="88" fill="#1d2a41" font-size="14" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">78</text>
    </g>
  </svg>
`;

const renderScatterScene = (): string => `
  <svg class="blueprint-scene" viewBox="0 0 760 320" role="img" aria-label="Scatter concept preview">
    <line x1="96" y1="256" x2="664" y2="256" stroke="#cdd9ea" stroke-width="2" />
    <line x1="96" y1="72" x2="96" y2="256" stroke="#cdd9ea" stroke-width="2" />
    <line x1="132" y1="232" x2="618" y2="86" stroke="#cbd5e1" stroke-width="3" stroke-dasharray="8 8" />
    <g class="blueprint-hotspot" data-concept-tip="SMB cluster sits in the lower-left, which suggests lower activation and lower retention together.">
      <circle cx="194" cy="210" r="12" fill="#38bdf8" />
      <circle cx="248" cy="188" r="10" fill="#38bdf8" opacity="0.85" />
      <circle cx="292" cy="170" r="10" fill="#38bdf8" opacity="0.7" />
    </g>
    <g class="blueprint-hotspot" data-concept-tip="Enterprise cluster trends up and right, which is why this segment stands out.">
      <circle cx="412" cy="132" r="12" fill="#2563eb" />
      <circle cx="476" cy="104" r="10" fill="#2563eb" opacity="0.86" />
      <circle cx="558" cy="84" r="12" fill="#2563eb" opacity="0.78" />
      <text x="558" y="66" fill="#1d2a41" font-size="14" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">A+</text>
    </g>
  </svg>
`;

const renderDistributionScene = (): string => `
  <svg class="blueprint-scene" viewBox="0 0 760 320" role="img" aria-label="Distribution concept preview">
    <line x1="96" y1="256" x2="664" y2="256" stroke="#cdd9ea" stroke-width="2" />
    <g class="blueprint-hotspot" data-concept-tip="The histogram bins reveal concentration around the center rather than at the edges.">
      <rect x="138" y="226" width="42" height="30" rx="10" fill="#cbd5e1" />
      <rect x="186" y="198" width="42" height="58" rx="10" fill="#94a3b8" />
      <rect x="234" y="150" width="42" height="106" rx="10" fill="#64748b" />
      <rect x="282" y="122" width="42" height="134" rx="10" fill="#2563eb" />
      <rect x="330" y="138" width="42" height="118" rx="10" fill="#2563eb" opacity="0.86" />
      <rect x="378" y="174" width="42" height="82" rx="10" fill="#14b8a6" />
      <rect x="426" y="212" width="42" height="44" rx="10" fill="#cbd5e1" />
    </g>
    <g class="blueprint-hotspot" data-concept-tip="The overlaid box plot keeps quartiles and outliers readable in the same surface.">
      <line x1="522" y1="198" x2="640" y2="198" stroke="#475569" stroke-width="3" />
      <rect x="548" y="174" width="72" height="48" rx="12" fill="#e0f2fe" stroke="#2563eb" stroke-width="3" />
      <line x1="584" y1="164" x2="584" y2="232" stroke="#2563eb" stroke-width="4" />
      <circle cx="520" cy="198" r="6" fill="#f59e0b" data-blueprint-number-node="true" />
      <circle cx="644" cy="198" r="6" fill="#f59e0b" data-blueprint-number-node="true" />
      <text x="584" y="156" fill="#1d2a41" font-size="14" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">Median 38</text>
    </g>
  </svg>
`;

const renderFinancialScene = (): string => `
  <svg class="blueprint-scene" viewBox="0 0 760 320" role="img" aria-label="Financial concept preview">
    <line x1="92" y1="256" x2="668" y2="256" stroke="#2b3d59" stroke-width="2" />
    <rect x="0" y="0" width="760" height="320" fill="#081425" />
    <line x1="92" y1="256" x2="668" y2="256" stroke="#22324b" stroke-width="2" />
    <g class="blueprint-hotspot" data-concept-tip="Bullish candle closes above open, so the body stays green and the wick carries the range.">
      <line x1="168" y1="112" x2="168" y2="248" stroke="#cbd5e1" stroke-width="3" />
      <rect x="150" y="148" width="36" height="64" rx="8" fill="#22c55e" />
      <text x="168" y="134" fill="#ecfdf5" font-size="13" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">128</text>
    </g>
    <g class="blueprint-hotspot" data-concept-tip="Bearish candle closes lower, which is why the body flips to red without losing range precision.">
      <line x1="256" y1="96" x2="256" y2="238" stroke="#cbd5e1" stroke-width="3" />
      <rect x="238" y="128" width="36" height="74" rx="8" fill="#ef4444" />
      <text x="256" y="114" fill="#fee2e2" font-size="13" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">126</text>
    </g>
    <path d="M112 234 C180 226 232 214 292 208 C352 198 416 182 480 170 C544 158 598 146 650 132" fill="none" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" />
  </svg>
`;

const renderHierarchyScene = (): string => `
  <svg class="blueprint-scene" viewBox="0 0 760 320" role="img" aria-label="Hierarchy concept preview">
    <g class="blueprint-hotspot" data-concept-tip="Top branch captures the largest share and should support drilldown into children.">
      <rect x="108" y="78" width="282" height="164" rx="18" fill="#2563eb" />
      <text x="132" y="106" fill="#eff6ff" font-size="16" font-weight="700">Alpha</text>
      <text x="132" y="130" fill="#dbeafe" font-size="14" data-blueprint-number-node="true">42%</text>
    </g>
    <g class="blueprint-hotspot" data-concept-tip="Secondary branches should stay readable even when the structure gets deep.">
      <rect x="404" y="78" width="248" height="104" rx="18" fill="#14b8a6" />
      <text x="426" y="106" fill="#ecfeff" font-size="16" font-weight="700">Beta</text>
      <text x="426" y="130" fill="#ccfbf1" font-size="14" data-blueprint-number-node="true">28%</text>
    </g>
    <g class="blueprint-hotspot" data-concept-tip="Tertiary branch remains visible, but the layout clearly gives it less dominance.">
      <rect x="404" y="192" width="118" height="50" rx="16" fill="#f59e0b" />
      <rect x="534" y="192" width="118" height="50" rx="16" fill="#93c5fd" />
      <text x="426" y="220" fill="#fff7ed" font-size="14" font-weight="700">Gamma</text>
      <text x="556" y="220" fill="#eff6ff" font-size="14" font-weight="700">Delta</text>
    </g>
  </svg>
`;

const renderFlowScene = (): string => `
  <svg class="blueprint-scene" viewBox="0 0 760 320" role="img" aria-label="Flow concept preview">
    <circle cx="132" cy="158" r="28" fill="#2563eb" />
    <circle cx="372" cy="146" r="32" fill="#14b8a6" />
    <circle cx="618" cy="168" r="30" fill="#f59e0b" />
    <g class="blueprint-hotspot" data-concept-tip="The dominant path keeps the primary conversion route visually obvious.">
      <path d="M160 144 C244 110 286 110 340 128 C398 148 460 166 588 154" fill="none" stroke="#2563eb" stroke-width="18" stroke-linecap="round" opacity="0.86" />
      <text x="372" y="98" fill="#1d2a41" font-size="14" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">1.24k</text>
    </g>
    <g class="blueprint-hotspot" data-concept-tip="A smaller alternative route still matters, but stays visually subordinate.">
      <path d="M160 176 C244 206 286 206 340 188 C404 166 462 160 590 186" fill="none" stroke="#14b8a6" stroke-width="10" stroke-linecap="round" opacity="0.74" />
      <text x="468" y="214" fill="#1d2a41" font-size="13" font-weight="700" data-blueprint-number-node="true">318</text>
    </g>
  </svg>
`;

const renderWidgetScene = (): string => `
  <svg class="blueprint-scene" viewBox="0 0 760 320" role="img" aria-label="Widget concept preview">
    <rect x="164" y="86" width="432" height="148" rx="28" fill="#f8fafc" stroke="#d7e3f0" stroke-width="2" />
    <path d="M236 194 A108 108 0 0 1 524 194" fill="none" stroke="#e2e8f0" stroke-width="28" stroke-linecap="round" />
    <path d="M236 194 A108 108 0 0 1 420 110" fill="none" stroke="#22c55e" stroke-width="28" stroke-linecap="round" />
    <path d="M420 110 A108 108 0 0 1 468 128" fill="none" stroke="#f59e0b" stroke-width="28" stroke-linecap="round" />
    <path d="M468 128 A108 108 0 0 1 524 194" fill="none" stroke="#ef4444" stroke-width="28" stroke-linecap="round" />
    <g class="blueprint-hotspot" data-concept-tip="The center value stays dominant, while thresholds do the state storytelling around it.">
      <text x="380" y="156" fill="#1d2a41" font-size="36" font-weight="800" text-anchor="middle" data-blueprint-number-node="true">72%</text>
      <text x="380" y="184" fill="#64748b" font-size="16" font-weight="700" text-anchor="middle">Health</text>
      <text x="380" y="208" fill="#f59e0b" font-size="14" font-weight="700" text-anchor="middle">Attention</text>
    </g>
  </svg>
`;

const renderGeoScene = (): string => `
  <svg class="blueprint-scene" viewBox="0 0 760 320" role="img" aria-label="Geo concept preview">
    <path d="M144 164 C166 106 244 88 318 110 C380 82 470 94 534 132 C596 170 612 232 570 252 C512 282 446 258 390 234 C322 264 242 262 182 226 C150 208 134 190 144 164 Z" fill="#eff6ff" stroke="#c7d9ef" stroke-width="3" />
    <g class="blueprint-hotspot" data-concept-tip="This region leads the map and should drive the first drilldown path.">
      <circle cx="278" cy="156" r="18" fill="#2563eb" opacity="0.9" />
      <text x="278" y="160" fill="#ffffff" font-size="13" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">42</text>
    </g>
    <g class="blueprint-hotspot" data-concept-tip="Secondary region keeps visibility without overwhelming the primary hotspot.">
      <circle cx="412" cy="138" r="14" fill="#14b8a6" opacity="0.88" />
      <text x="412" y="142" fill="#ffffff" font-size="12" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">31</text>
    </g>
    <g class="blueprint-hotspot" data-concept-tip="The route layer adds movement and dependency on top of the geographic base.">
      <path d="M278 156 C322 132 354 124 412 138" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round" stroke-dasharray="2 10" />
    </g>
  </svg>
`;

const renderTimelineScene = (): string => `
  <svg class="blueprint-scene" viewBox="0 0 760 320" role="img" aria-label="Timeline concept preview">
    <line x1="112" y1="84" x2="644" y2="84" stroke="#d7e3f0" stroke-width="2" />
    <line x1="112" y1="148" x2="644" y2="148" stroke="#d7e3f0" stroke-width="2" />
    <line x1="112" y1="212" x2="644" y2="212" stroke="#d7e3f0" stroke-width="2" />
    <g class="blueprint-hotspot" data-concept-tip="Discovery occupies the first lane and sets the initial range context.">
      <rect x="162" y="60" width="146" height="28" rx="14" fill="#2563eb" />
      <text x="176" y="79" fill="#eff6ff" font-size="13" font-weight="700">Discovery</text>
      <text x="314" y="79" fill="#eff6ff" font-size="13" font-weight="700" text-anchor="end" data-blueprint-number-node="true">14d</text>
    </g>
    <g class="blueprint-hotspot" data-concept-tip="Delivery spans the central phase and represents the critical path.">
      <rect x="248" y="124" width="248" height="28" rx="14" fill="#14b8a6" />
      <text x="262" y="143" fill="#ecfeff" font-size="13" font-weight="700">Delivery</text>
      <text x="490" y="143" fill="#ecfeff" font-size="13" font-weight="700" text-anchor="end" data-blueprint-number-node="true">32d</text>
    </g>
    <g class="blueprint-hotspot" data-concept-tip="Milestones should stay visible without competing with the duration bars.">
      <circle cx="540" cy="212" r="9" fill="#f59e0b" />
      <line x1="540" y1="176" x2="540" y2="248" stroke="#f59e0b" stroke-width="3" />
      <text x="556" y="218" fill="#1d2a41" font-size="13" font-weight="700">Launch</text>
    </g>
  </svg>
`;

const renderHybridScene = (): string => `
  <svg class="blueprint-scene" viewBox="0 0 760 320" role="img" aria-label="Hybrid concept preview">
    <rect x="114" y="70" width="220" height="170" rx="24" fill="#eff6ff" stroke="#d5e3f4" stroke-width="2" />
    <rect x="356" y="70" width="290" height="78" rx="24" fill="#f8fafc" stroke="#d5e3f4" stroke-width="2" />
    <rect x="356" y="162" width="290" height="78" rx="24" fill="#f8fafc" stroke="#d5e3f4" stroke-width="2" />
    <g class="blueprint-hotspot" data-concept-tip="The primary KPI dominates the tile, but still leaves room for trend and threshold context.">
      <text x="224" y="130" fill="#1d2a41" font-size="40" font-weight="800" text-anchor="middle" data-blueprint-number-node="true">84</text>
      <text x="224" y="160" fill="#64748b" font-size="16" font-weight="700" text-anchor="middle">Health score</text>
      <path d="M156 194 C186 172 218 182 246 154 C272 132 294 144 312 126" fill="none" stroke="#2563eb" stroke-width="5" stroke-linecap="round" />
    </g>
    <g class="blueprint-hotspot" data-concept-tip="Threshold and state cards make this feel like a business component, not just a chart.">
      <text x="382" y="98" fill="#64748b" font-size="13" font-weight="700">Revenue</text>
      <text x="622" y="100" fill="#1d4ed8" font-size="18" font-weight="800" text-anchor="end" data-blueprint-number-node="true">+18%</text>
      <text x="382" y="190" fill="#64748b" font-size="13" font-weight="700">Risk state</text>
      <text x="622" y="192" fill="#0f766e" font-size="18" font-weight="800" text-anchor="end">On pace</text>
    </g>
  </svg>
`;

const renderGenericScene = (): string => `
  <svg class="blueprint-scene" viewBox="0 0 760 320" role="img" aria-label="Generic blueprint concept preview">
    <rect x="104" y="70" width="552" height="178" rx="26" fill="#f8fbff" stroke="#d8e4f2" stroke-width="2" />
    <path d="M146 214 L236 168 L316 188 L408 132 L494 152 L612 98" fill="none" stroke="#2563eb" stroke-width="5" stroke-linecap="round" />
    <g class="blueprint-hotspot" data-concept-tip="This placeholder preview keeps the intended reading model visible while the renderer is still planned.">
      <circle cx="612" cy="98" r="10" fill="#2563eb" />
      <text x="612" y="80" fill="#1d2a41" font-size="14" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">Preview</text>
    </g>
  </svg>
`;

const renderScene = (kind: BlueprintConceptKind): string => {
  switch (kind) {
    case "stacked-100":
      return renderStacked100Scene();
    case "stacked":
      return renderStackedScene();
    case "bar":
      return renderBarScene();
    case "line":
      return renderLineScene();
    case "scatter":
      return renderScatterScene();
    case "distribution":
      return renderDistributionScene();
    case "financial":
      return renderFinancialScene();
    case "hierarchy":
      return renderHierarchyScene();
    case "flow":
      return renderFlowScene();
    case "widget":
      return renderWidgetScene();
    case "geo":
      return renderGeoScene();
    case "timeline":
      return renderTimelineScene();
    case "hybrid":
      return renderHybridScene();
    default:
      return renderGenericScene();
  }
};

export const renderBlueprintConceptPreview = (example: PlaygroundExample): string => {
  const kind = resolveBlueprintConceptKind(example);
  const meta = getBlueprintMeta(kind, example);
  const overlay = getOverlayMeta(kind);

  return `
    <div class="playground-proxy">
      <div class="playground-proxy-header">
        <p class="eyebrow">Concept Preview</p>
        <strong>${meta.title}</strong>
        <p>${meta.summary}</p>
      </div>
      <div class="blueprint-concept" data-blueprint-kind="${kind}">
        <div class="blueprint-concept-controls">
          <button class="demo-toggle is-active" type="button" data-blueprint-toggle="showNumber" aria-pressed="true">
            ${renderControlLabel("Show number", true)}
          </button>
          <button class="demo-toggle is-active" type="button" data-blueprint-toggle="showLegend" aria-pressed="true">
            ${renderControlLabel("Show legend", true)}
          </button>
          <button class="demo-toggle is-active" type="button" data-blueprint-toggle="showTooltip" aria-pressed="true">
            ${renderControlLabel("Show tooltip", true)}
          </button>
        </div>
        <div class="blueprint-concept-stage" data-blueprint-stage>
          <div class="blueprint-concept-badge" data-blueprint-number>
            <span>${overlay.numberLabel}</span>
            <strong>${overlay.numberValue}</strong>
          </div>
          ${renderScene(kind)}
          ${renderLegend(overlay)}
          <div class="blueprint-concept-tooltip" data-blueprint-tooltip hidden></div>
        </div>
        <div class="blueprint-concept-insights">
          <article class="blueprint-concept-card">
            <span>Business value</span>
            <strong>${meta.value}</strong>
          </article>
          <article class="blueprint-concept-card">
            <span>Reading model</span>
            <strong>${meta.reading}</strong>
          </article>
          <article class="blueprint-concept-card">
            <span>Interaction path</span>
            <strong>${meta.interactions}</strong>
          </article>
        </div>
      </div>
    </div>
  `;
};

export const attachBlueprintConceptPreview = (root: HTMLElement): (() => void) => {
  const stage = root.querySelector<HTMLElement>("[data-blueprint-stage]");
  const tooltip = root.querySelector<HTMLElement>("[data-blueprint-tooltip]");
  const numberBadge = root.querySelector<HTMLElement>("[data-blueprint-number]");
  const numberNodes = Array.from(root.querySelectorAll<SVGElement>("[data-blueprint-number-node]"));
  const legend = root.querySelector<HTMLElement>("[data-blueprint-legend]");
  const toggles = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-blueprint-toggle]"));
  const hotspots = Array.from(root.querySelectorAll<HTMLElement>("[data-concept-tip]"));
  const state = {
    showNumber: true,
    showLegend: true,
    showTooltip: true,
  };

  if (!stage || !tooltip || hotspots.length === 0) {
    return () => undefined;
  }

  const cleanupCallbacks: Array<() => void> = [];

  const syncState = () => {
    if (numberBadge) {
      numberBadge.hidden = !state.showNumber;
    }

    numberNodes.forEach((node) => {
      node.style.opacity = state.showNumber ? "1" : "0";
    });

    if (legend) {
      legend.hidden = !state.showLegend;
    }

    if (!state.showTooltip) {
      tooltip.hidden = true;
      hotspots.forEach((hotspot) => hotspot.classList.remove("is-active"));
    }

    toggles.forEach((button) => {
      const key = button.dataset.blueprintToggle as keyof typeof state | undefined;

      if (!key) {
        return;
      }

      const enabled = state[key];
      const label =
        key === "showNumber"
          ? "Show number"
          : key === "showLegend"
            ? "Show legend"
            : "Show tooltip";

      button.textContent = renderControlLabel(label, enabled);
      button.classList.toggle("is-active", enabled);
      button.setAttribute("aria-pressed", enabled ? "true" : "false");
    });
  };

  const updateTooltipPosition = (event: MouseEvent) => {
    const rect = stage.getBoundingClientRect();
    const x = clamp(event.clientX - rect.left, 30, rect.width - 30);
    const y = clamp(event.clientY - rect.top, 28, rect.height - 20);

    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
  };

  hotspots.forEach((hotspot) => {
    const showTooltip = (event: Event) => {
      if (!state.showTooltip) {
        return;
      }

      const message = hotspot.getAttribute("data-concept-tip");

      if (!message) {
        return;
      }

      tooltip.hidden = false;
      tooltip.textContent = message;
      hotspot.classList.add("is-active");

      if (event instanceof MouseEvent) {
        updateTooltipPosition(event);
      }
    };

    const moveTooltip = (event: Event) => {
      if (event instanceof MouseEvent) {
        updateTooltipPosition(event);
      }
    };

    const hideTooltip = () => {
      tooltip.hidden = true;
      hotspot.classList.remove("is-active");
    };

    hotspot.addEventListener("mouseenter", showTooltip);
    hotspot.addEventListener("mousemove", moveTooltip);
    hotspot.addEventListener("mouseleave", hideTooltip);

    cleanupCallbacks.push(() => {
      hotspot.removeEventListener("mouseenter", showTooltip);
      hotspot.removeEventListener("mousemove", moveTooltip);
      hotspot.removeEventListener("mouseleave", hideTooltip);
    });
  });

  toggles.forEach((button) => {
    const onClick = () => {
      const key = button.dataset.blueprintToggle as keyof typeof state | undefined;

      if (!key) {
        return;
      }

      state[key] = !state[key];
      syncState();
    };

    button.addEventListener("click", onClick);
    cleanupCallbacks.push(() => button.removeEventListener("click", onClick));
  });

  syncState();

  return () => {
    cleanupCallbacks.forEach((cleanup) => cleanup());
  };
};
