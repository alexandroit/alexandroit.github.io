import { chartCatalog, type CatalogChart, type ChartStatus } from "./chart-catalog";
import { getDemo } from "./demos";

export interface PlaygroundExample {
  id: string;
  name: string;
  family: string;
  status: ChartStatus;
  description: string;
  purpose: string;
  behavior: string;
  code: string;
  docsPath?: string;
  demoId?: string;
}

const demoByChartId: Record<string, string> = {
  line: "line-overview",
  area: "area-forecast",
  bar: "bar-environments",
  "bar-3d": "bar-3d-launch",
  "stacked-area": "stacked-area-capacity",
  combo: "combo-plan-vs-actual",
  sparkline: "kpi-sparkline",
  scatter: "scatter-correlation",
  gauge: "gauge-health",
  "gauge-semicircle": "gauge-semicircle",
  "radial-progress": "radial-progress",
  thermometer: "thermometer-vertical",
  "thermometer-horizontal": "thermometer-horizontal",
  battery: "battery-meter",
  donut: "donut-alerts",
  pie: "pie-allocation",
};

const contracts: Partial<Record<string, Pick<PlaygroundExample, "purpose" | "behavior">>> = {
  gauge: {
    purpose: "Show a current value against a minimum, maximum, and multiple threshold zones.",
    behavior:
      "The pointer should animate smoothly, honor thresholds, stay live-update friendly, and keep the current state readable at a glance.",
  },
  "bullet-graph": {
    purpose: "Show a KPI in a compact executive format with qualitative ranges and an explicit target.",
    behavior:
      "The widget should keep actual, target, and qualitative bands readable even in dense dashboards where space is constrained.",
  },
  "gauge-semicircle": {
    purpose: "Compress gauge-style status reading into dashboard cards and compact operational widgets.",
    behavior:
      "The half-arc should keep the same threshold semantics as the full gauge while preserving legibility in small containers.",
  },
  "radial-progress": {
    purpose: "Show goal completion, rollout progress, or KPI attainment in a cleaner circular widget.",
    behavior:
      "The arc should transition smoothly, keep the center number dominant, and use thresholds to signal pace or completion quality.",
  },
  thermometer: {
    purpose: "Show a value as a fill level, which works well for saturation, occupancy, risk, or temperature metaphors.",
    behavior:
      "The fill should rise smoothly, respect qualitative bands, and remain readable as a compact dashboard widget.",
  },
  "thermometer-horizontal": {
    purpose: "Bring thermometer-style level reading into narrow dashboard strips and horizontal monitoring cards.",
    behavior:
      "The bar should fill left-to-right with clear threshold transitions, compact labeling, and stable live updates.",
  },
  battery: {
    purpose: "Show remaining reserve, battery, charge, or budget-left style values with a familiar metaphor.",
    behavior:
      "The battery body should update smoothly, reflect low-level warning states clearly, and stay readable even in tight widgets.",
  },
  line: {
    purpose: "Track one or more measures over time with a clean temporal reading model.",
    behavior:
      "The chart should support smooth transitions, shared tooltip behavior, thresholds, and efficient sliding-window live updates.",
  },
  bar: {
    purpose: "Compare categories directly when names and magnitude matter more than trend.",
    behavior:
      "Bars should animate from baseline, keep hover focused on the active category, and adapt spacing as the number of series grows.",
  },
  donut: {
    purpose: "Show part-to-whole distributions with room for a useful center summary.",
    behavior:
      "Slices should respond cleanly to hover, preserve label readability, and support dashboard filtering and stateful interactions later.",
  },
  pie: {
    purpose: "Show a small number of proportional categories when direct composition reading is enough.",
    behavior:
      "Slices should highlight on hover, avoid label collisions, and gracefully move small categories into legend-first reading.",
  },
  scatter: {
    purpose: "Reveal correlation, clustering, and quantitative relationships between two numeric dimensions.",
    behavior:
      "The chart should handle zoom, dense-point selection, and eventually regression overlays without losing performance.",
  },
  heatmap: {
    purpose: "Show intensity across a grid of categories or time slices with a strong density-reading model.",
    behavior:
      "Cells should remain readable under filtering, support accurate tooltip inspection, and scale to dense matrices without visual collapse.",
  },
  candlestick: {
    purpose: "Show OHLC movement for financial series and technical analysis workflows.",
    behavior:
      "The chart should support crosshair, pan, zoom, synced secondary panels, and incremental live candle updates.",
  },
  funnel: {
    purpose: "Show conversion or drop-off across sequential stages where loss between steps matters as much as absolute counts.",
    behavior:
      "Stage transitions should make drop-off obvious, keep rates visible, and support drilldown into where users or deals are being lost.",
  },
  sankey: {
    purpose: "Show flow magnitude between stages, categories, or states in a process.",
    behavior:
      "Links should highlight complete paths on hover, preserve readability under filtering, and support drilldown into selected routes.",
  },
  treemap: {
    purpose: "Show hierarchical proportions when both size and nested grouping matter.",
    behavior:
      "Tiles should support drilldown, adaptive labeling, and clean transitions as the user focuses on deeper branches.",
  },
  sunburst: {
    purpose: "Show hierarchical proportions in a radial layout with strong visual hierarchy.",
    behavior:
      "The chart should focus on the selected branch, animate the radial transition smoothly, and keep breadcrumbs visible.",
  },
  "retention-cohort-grid": {
    purpose: "Show retention by cohort so teams can compare how groups hold engagement or revenue over time.",
    behavior:
      "The view should support cohort selection, heatmap-style reading, and a clear distinction between absolute retention and normalized retention.",
  },
  "box-plot": {
    purpose: "Compare distributions across groups using quartiles, median, whiskers, and outliers.",
    behavior:
      "The chart should expose outliers clearly, support grouped comparison, and keep statistical reading precise rather than decorative.",
  },
  histogram: {
    purpose: "Show frequency distribution and help users understand how values are spread across ranges.",
    behavior:
      "The chart should allow configurable bins, clean hover for range plus count, and responsive recalculation for filtering workflows.",
  },
  timeline: {
    purpose: "Place events or intervals across time for sequencing, operations, and planning views.",
    behavior:
      "The chart should zoom by range, cluster dense labels intelligently, and keep the temporal reading stable during navigation.",
  },
  "gantt-foundation": {
    purpose: "Show tasks, phases, or delivery plans across a timeline with structure and dependencies.",
    behavior:
      "The chart should support lane grouping, drag or resize later, dependency overlays, and responsive scale switching.",
  },
  choropleth: {
    purpose: "Show value intensity by region while preserving geographic context.",
    behavior:
      "The map should support hover, zoom, drilldown by geography, and palette scales that remain accessible and interpretable.",
  },
  "quality-score-radar": {
    purpose: "Compare multidimensional quality or capability scores across a fixed set of attributes.",
    behavior:
      "The radar should support multiple compared profiles, benchmark overlays, and hover states that keep each axis easy to inspect.",
  },
};

const create3DCode = (chart: CatalogChart): string => {
  const baseHeader = `createChart({
  container: document.querySelector("#chart"),
  type: "${chart.id}",`;

  switch (chart.id) {
    case "3d-column":
    case "depth-column":
      return `${baseHeader}
  title: "${chart.name}",
  labels: ["North", "South", "West", "Global"],
  series: [{ name: "Revenue", data: [36, 44, 58, 49] }],
  depth: {
    enabled: true,
    angle: 18,
    perspective: 0.84
  },
  theme: "dark"
});`;
    case "3d-stacked-bar":
    case "3d-stacked-column":
      return `${baseHeader}
  title: "${chart.name}",
  labels: ["Pipeline", "Delivery", "Support"],
  series: [
    { name: "Core", data: [28, 24, 18] },
    { name: "Expansion", data: [19, 16, 12], color: "#2dd4bf" },
    { name: "Services", data: [11, 9, 7], color: "#f59e0b" }
  ],
  stack: true,
  depth: {
    enabled: true,
    angle: 20
  },
  theme: "dark"
});`;
    case "3d-line":
      return `${baseHeader}
  title: "${chart.name}",
  xAxis: { type: "time" },
  series: [
    {
      name: "Forecast",
      data: [
        { x: "2026-01-01", y: 18, z: 2 },
        { x: "2026-02-01", y: 24, z: 4 },
        { x: "2026-03-01", y: 21, z: 6 },
        { x: "2026-04-01", y: 30, z: 8 }
      ]
    }
  ],
  depth: {
    enabled: true,
    angle: 14,
    axis: "z"
  },
  theme: "dark"
});`;
    case "3d-area":
    case "depth-area":
    case "perspective-combo":
      return `${baseHeader}
  title: "${chart.name}",
  labels: ["Q1", "Q2", "Q3", "Q4", "Q5"],
  series: [
    { name: "Demand", data: [18, 28, 26, 36, 34] },
    { name: "Capacity", data: [16, 22, 24, 30, 29], color: "#2dd4bf" }
  ],
  fill: { opacity: 0.42 },
  depth: {
    enabled: true,
    angle: 16,
    floor: true
  },
  theme: "dark"
});`;
    case "3d-surface":
    case "3d-mesh":
      return `${baseHeader}
  title: "${chart.name}",
  xAxis: { values: ["Jan", "Feb", "Mar", "Apr"] },
  yAxis: { values: ["North", "South", "West", "Global"] },
  data: [
    [12, 18, 21, 26],
    [14, 22, 28, 31],
    [18, 24, 34, 42],
    [22, 30, 38, 46]
  ],
  surface: {
    wireframe: ${chart.id === "3d-mesh" ? "true" : "false"},
    shading: "elevation"
  },
  theme: "dark"
});`;
    case "3d-heatmap":
      return `${baseHeader}
  title: "${chart.name}",
  xAxis: { values: ["00h", "06h", "12h", "18h"] },
  yAxis: { values: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
  data: [
    [18, 22, 34, 28],
    [12, 18, 40, 25],
    [16, 24, 46, 30],
    [14, 20, 38, 26],
    [10, 16, 28, 20]
  ],
  heatmap3d: {
    heightScale: 0.72,
    colorScale: ["#11316b", "#2f6df6", "#52d2ff", "#f59e0b"]
  },
  theme: "dark"
});`;
    case "3d-scatter":
    case "3d-bubble":
    case "3d-geo-scatter":
      return `${baseHeader}
  title: "${chart.name}",
  data: [
    { x: 18, y: 32, z: 14, size: 12, label: "North" },
    { x: 32, y: 26, z: 28, size: 18, label: "West" },
    { x: 24, y: 18, z: 36, size: 10, label: "Global" }
  ],
  pointStyle: "${chart.id === "3d-bubble" ? "bubble" : "orb"}",
  depth: {
    enabled: true,
    orbit: ${chart.id === "3d-geo-scatter" ? "true" : "false"}
  },
  theme: "dark"
});`;
    case "3d-donut":
    case "3d-pie":
      return `${baseHeader}
  title: "${chart.name}",
  data: [
    { label: "Core", value: 42, color: "#2f6df6" },
    { label: "Expansion", value: 31, color: "#2dd4bf" },
    { label: "Services", value: 27, color: "#f59e0b" }
  ],
  depth: {
    enabled: true,
    tilt: 22
  },
  theme: "dark"
});`;
    case "3d-radar":
      return `${baseHeader}
  title: "${chart.name}",
  axes: ["Quality", "Velocity", "Reach", "Reliability", "Margin", "Adoption"],
  series: [
    { name: "Current", data: [74, 62, 80, 68, 58, 71] },
    { name: "Target", data: [82, 76, 86, 80, 72, 78], color: "#2dd4bf" }
  ],
  depth: {
    enabled: true,
    tilt: 18
  },
  theme: "dark"
});`;
    case "3d-globe-plot":
      return `${baseHeader}
  title: "${chart.name}",
  data: [
    { lat: 40.7, lng: -74.0, value: 42, label: "New York" },
    { lat: 51.5, lng: -0.1, value: 31, label: "London" },
    { lat: 35.6, lng: 139.6, value: 38, label: "Tokyo" }
  ],
  globe: {
    routes: true,
    atmosphere: 0.26
  },
  theme: "dark"
});`;
    case "3d-flow-ribbon":
      return `${baseHeader}
  title: "${chart.name}",
  data: {
    nodes: [
      { id: "visit", label: "Visit" },
      { id: "trial", label: "Trial" },
      { id: "active", label: "Active" }
    ],
    links: [
      { source: "visit", target: "trial", value: 1240 },
      { source: "trial", target: "active", value: 486 }
    ]
  },
  depth: {
    enabled: true,
    ribbon: true
  },
  theme: "dark"
});`;
    case "3d-funnel":
      return `${baseHeader}
  title: "${chart.name}",
  data: [
    { stage: "Lead", value: 1000 },
    { stage: "Qualified", value: 540 },
    { stage: "Proposal", value: 210 },
    { stage: "Won", value: 88 }
  ],
  depth: {
    enabled: true,
    taper: 0.22
  },
  theme: "dark"
});`;
    case "3d-pyramid":
      return `${baseHeader}
  title: "${chart.name}",
  data: [
    { stage: "Base", value: 58 },
    { stage: "Growth", value: 34 },
    { stage: "Priority", value: 18 }
  ],
  depth: {
    enabled: true,
    shape: "pyramid"
  },
  theme: "dark"
});`;
    case "3d-treemap":
    case "isometric-dashboard-card":
    case "3d-kpi-panel":
      return `${baseHeader}
  title: "${chart.name}",
  data: {
    name: "Workspace",
    children: [
      { name: "Revenue", value: 42 },
      { name: "Health", value: 28 },
      { name: "Risk", value: 16 }
    ]
  },
  depth: {
    enabled: true,
    isometric: true
  },
  theme: "dark"
});`;
    default:
      return `${baseHeader}
  title: "${chart.name}",
  labels: ["Alpha", "Beta", "Gamma", "Delta"],
  series: [
    { name: "Primary", data: [36, 48, 42, 58] },
    { name: "Secondary", data: [28, 34, 39, 44], color: "#2dd4bf" }
  ],
  depth: {
    enabled: true
  },
  theme: "dark"
});`;
  }
};

const createGenericCode = (chart: CatalogChart): string => {
  const baseHeader = `createChart({
  container: document.querySelector("#chart"),
  type: "${chart.id}",`;

  if (chart.family === "Widgets") {
    return `${baseHeader}
  title: "${chart.name}",
  data: [{ label: "Primary value", value: 72 }],
  gauge: {
    min: 0,
    max: 100,
    unit: "%",
    bands: [
      { from: 0, to: 60, color: "#22c55e", label: "Healthy" },
      { from: 60, to: 80, color: "#f59e0b", label: "Attention" },
      { from: 80, to: 100, color: "#ef4444", label: "Critical" }
    ]
  },
  theme: "light"
});`;
  }

  if (chart.family === "Cartesian" || chart.family === "Analytical") {
    return `${baseHeader}
  title: "${chart.name}",
  labels: ["Jan", "Feb", "Mar", "Apr"],
  series: [
    { name: "Series A", data: [18, 24, 21, 30] },
    { name: "Series B", data: [14, 19, 23, 28], color: "#38bdf8" }
  ],
  theme: "light"
});`;
  }

  if (chart.family === "Radial") {
    return `${baseHeader}
  title: "${chart.name}",
  data: [
    { label: "A", value: 34, color: "#2563eb" },
    { label: "B", value: 26, color: "#14b8a6" },
    { label: "C", value: 18, color: "#f59e0b" }
  ],
  theme: "light"
});`;
  }

  if (chart.family === "Financial") {
    return `${baseHeader}
  title: "${chart.name}",
  data: [
    { x: "2026-01-01", open: 124, high: 130, low: 121, close: 128 },
    { x: "2026-01-02", open: 128, high: 133, low: 125, close: 126 }
  ],
  theme: "dark"
});`;
  }

  if (chart.family === "Hierarchical") {
    return `${baseHeader}
  title: "${chart.name}",
  data: {
    name: "Root",
    children: [
      { name: "Alpha", value: 42 },
      { name: "Beta", value: 28 },
      { name: "Gamma", value: 18 }
    ]
  },
  theme: "light"
});`;
  }

  if (chart.family === "Flow") {
    return `${baseHeader}
  title: "${chart.name}",
  data: {
    nodes: [
      { id: "visit", label: "Visit" },
      { id: "trial", label: "Trial" },
      { id: "paid", label: "Paid" }
    ],
    links: [
      { source: "visit", target: "trial", value: 1240 },
      { source: "trial", target: "paid", value: 318 }
    ]
  },
  theme: "light"
});`;
  }

  if (chart.family === "Timeline") {
    return `${baseHeader}
  title: "${chart.name}",
  data: [
    { label: "Discovery", start: "2026-01-03", end: "2026-01-24" },
    { label: "Delivery", start: "2026-01-26", end: "2026-03-12" }
  ],
  theme: "light"
});`;
  }

  if (chart.family === "Geospatial") {
    return `${baseHeader}
  title: "${chart.name}",
  data: [
    { region: "North America", value: 42 },
    { region: "Europe", value: 31 },
    { region: "APAC", value: 27 }
  ],
  theme: "light"
});`;
  }

  if (chart.family === "3D") {
    return create3DCode(chart);
  }

  return `${baseHeader}
  title: "${chart.name}",
  data: [],
  theme: "light"
});`;
};

const createBehaviorFallback = (chart: CatalogChart): string => {
  if (chart.family === "Widgets") {
    return "This widget should stay compact, respect thresholds or semantic states, and animate value changes smoothly without causing layout shift.";
  }

  if (chart.family === "Cartesian") {
    return "This chart should share the cartesian engine behaviors: responsive axes, legend toggles, tooltip clarity, stable updates, and clean theme-driven motion.";
  }

  if (chart.family === "Analytical" || chart.family === "Statistical") {
    return "This analytical view should prioritize precision, dense-data readability, selection workflows, and performance-aware interaction for larger datasets.";
  }

  if (chart.family === "Financial") {
    return "This financial view should support precise cursor reading, pan and zoom, sync with companion panels, and low-overhead live updates.";
  }

  if (chart.family === "Flow") {
    return "This flow view should highlight connected paths on hover, preserve node and link readability, and support drilldown into selected routes or stages.";
  }

  if (chart.family === "Hierarchical") {
    return "This hierarchical view should make depth navigation clear through drilldown, focus transitions, adaptive labeling, and breadcrumb-style context.";
  }

  if (chart.family === "Timeline") {
    return "This timeline view should support zooming through time ranges, clustering dense labels, and maintaining a stable temporal reading while filtering or drilling down.";
  }

  if (chart.family === "Geospatial") {
    return "This geospatial view should combine clear hover states, pan and zoom friendliness, drilldown-ready structure, and palette scales that remain accessible.";
  }

  if (chart.family === "3D") {
    return "This 3D view should use depth only when it adds hierarchy or density value, while preserving readability and offering a flatter fallback where needed.";
  }

  if (chart.family === "Hybrid") {
    return "This hybrid view should adapt between KPI, threshold, and trend reading without feeling like disconnected components glued together.";
  }

  return "This chart should follow the shared platform behaviors for theming, responsiveness, motion, tooltip, and incremental updates.";
};

export const playgroundExamples: PlaygroundExample[] = chartCatalog
  .map((chart) => {
    const demoId = demoByChartId[chart.id];
    const demo = demoId ? getDemo(demoId) : undefined;
    const contract = contracts[chart.id];

    return {
      id: chart.id,
      name: chart.name,
      family: chart.family,
      status: chart.status,
      description: chart.description,
      purpose: contract?.purpose ?? chart.description,
      behavior: contract?.behavior ?? createBehaviorFallback(chart),
      code: demo?.code ?? createGenericCode(chart),
      docsPath: chart.docsPath,
      demoId,
    };
  })
  .sort((left, right) => {
    if (left.status !== right.status) {
      return left.status === "live" ? -1 : 1;
    }

    if (left.family !== right.family) {
      return left.family.localeCompare(right.family);
    }

    return left.name.localeCompare(right.name);
  });

export const getPlaygroundExample = (id: string): PlaygroundExample | undefined =>
  playgroundExamples.find((example) => example.id === id);

export const playgroundFamilies = [
  "All families",
  ...new Set(playgroundExamples.map((example) => example.family)),
];
