export type ChartStatus = "live" | "planned";

export interface CatalogChart {
  id: string;
  name: string;
  family: string;
  status: ChartStatus;
  description: string;
  docsPath?: string;
  tags: string[];
}

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const describeChart = (name: string, family: string, tags: string[]): string => {
  if (tags.includes("3d")) {
    return `${name} for depth-rich dashboards, premium storytelling, or future 3D analytical workflows.`;
  }

  if (family === "Widgets") {
    return `${name} for compact KPI surfaces, monitoring cards, and dashboard-native visual summaries.`;
  }

  if (family === "Statistical") {
    return `${name} for distribution, density, variance, or statistical comparison workflows.`;
  }

  if (family === "Financial") {
    return `${name} for trading, forecasting, price movement, or financial operations analysis.`;
  }

  if (family === "Flow") {
    return `${name} for movement, conversion, dependency, or path-based analysis.`;
  }

  if (family === "Hierarchical") {
    return `${name} for nested structures, hierarchy navigation, and parent-child analysis.`;
  }

  if (family === "Geospatial") {
    return `${name} for map-friendly data, layered spatial analysis, and region-driven dashboards.`;
  }

  if (family === "Hybrid") {
    return `${name} for dashboard compositions that mix KPIs, states, forecasts, and chart context.`;
  }

  if (family === "Timeline") {
    return `${name} for schedules, milestones, sequencing, and time-window planning views.`;
  }

  return `${name} for trend, comparison, composition, or dashboard analysis workflows.`;
};

const makePlannedCharts = (
  family: string,
  names: string[],
  tags: string[],
): CatalogChart[] =>
  names.map((name) => ({
    id: slugify(name),
    name,
    family,
    status: "planned",
    description: describeChart(name, family, tags),
    tags: [...tags],
  }));

const liveCharts: CatalogChart[] = [
  {
    id: "line",
    name: "Line",
    family: "Cartesian",
    status: "live",
    description: "Single or multi-series trend visualization with thresholds and live updates.",
    docsPath: "/charts/line",
    tags: ["trend", "dashboard"],
  },
  {
    id: "area",
    name: "Area",
    family: "Cartesian",
    status: "live",
    description: "Filled trend charts for volume, accumulation, and forecast-friendly visual comparisons.",
    docsPath: "/charts/area",
    tags: ["trend", "dashboard"],
  },
  {
    id: "bar",
    name: "Bar / Column",
    family: "Cartesian",
    status: "live",
    description: "Grouped categorical comparison charts with shared axis infrastructure.",
    docsPath: "/charts/bar",
    tags: ["comparison", "dashboard"],
  },
  {
    id: "bar-3d",
    name: "3D Bar",
    family: "3D",
    status: "live",
    description: "First live 3D chart in the core for depth-rich categorical comparisons and premium dashboard moments.",
    docsPath: "/charts/bar-3d",
    tags: ["3d", "dashboard", "comparison"],
  },
  {
    id: "stacked-area",
    name: "Stacked Area",
    family: "Cartesian",
    status: "live",
    description: "Layered accumulation views for contribution over time and capacity composition.",
    docsPath: "/charts/stacked-area",
    tags: ["trend", "composition", "dashboard"],
  },
  {
    id: "combo",
    name: "Mixed / Combo",
    family: "Cartesian",
    status: "live",
    description: "Column plus line or area combinations for dashboard comparisons and plan-vs-actual views.",
    docsPath: "/charts/combo",
    tags: ["trend", "comparison", "dashboard"],
  },
  {
    id: "sparkline",
    name: "Sparkline",
    family: "Widgets",
    status: "live",
    description: "Compact trend visualization for KPI cards, dense monitoring layouts, and embedded summaries.",
    docsPath: "/charts/sparkline",
    tags: ["widget", "dashboard", "kpi"],
  },
  {
    id: "scatter",
    name: "Scatter",
    family: "Analytical",
    status: "live",
    description: "Quantitative x/y plotting for correlation, clustering, and exploration.",
    docsPath: "/charts/scatter",
    tags: ["analysis", "correlation"],
  },
  {
    id: "gauge",
    name: "Radial Gauge",
    family: "Widgets",
    status: "live",
    description: "Velocity-meter style status chart for KPIs, health scores, thresholds, and monitoring panels.",
    docsPath: "/charts/gauge",
    tags: ["widget", "dashboard", "kpi", "radial"],
  },
  {
    id: "gauge-semicircle",
    name: "Semi Circular Gauge",
    family: "Widgets",
    status: "live",
    description: "Compact half-arc gauge designed for tight cards, monitoring strips, and status panels.",
    docsPath: "/charts/gauge-semicircle",
    tags: ["widget", "dashboard", "kpi", "radial"],
  },
  {
    id: "radial-progress",
    name: "Radial Progress",
    family: "Widgets",
    status: "live",
    description: "Minimal ring-style progress widget with threshold-aware coloring and centered KPI readout.",
    docsPath: "/charts/radial-progress",
    tags: ["widget", "dashboard", "kpi", "radial"],
  },
  {
    id: "thermometer",
    name: "Thermometer",
    family: "Widgets",
    status: "live",
    description: "Vertical level widget for occupancy, risk, or saturation-style monitoring use cases.",
    docsPath: "/charts/thermometer",
    tags: ["widget", "dashboard", "kpi", "monitoring"],
  },
  {
    id: "thermometer-horizontal",
    name: "Horizontal Thermometer",
    family: "Widgets",
    status: "live",
    description: "Horizontal fill meter for narrow dashboard strips and compact progress surfaces.",
    docsPath: "/charts/thermometer",
    tags: ["widget", "dashboard", "kpi", "monitoring"],
  },
  {
    id: "battery",
    name: "Battery Meter",
    family: "Widgets",
    status: "live",
    description: "Charge-style status widget for energy, SLA budget, and remaining capacity views.",
    docsPath: "/charts/battery",
    tags: ["widget", "dashboard", "kpi", "monitoring"],
  },
  {
    id: "pie",
    name: "Pie",
    family: "Radial",
    status: "live",
    description: "Part-to-whole radial chart for small category counts.",
    docsPath: "/charts/pie",
    tags: ["radial", "composition"],
  },
  {
    id: "donut",
    name: "Donut",
    family: "Radial",
    status: "live",
    description: "Center-label-friendly radial chart for summaries, status distributions, and dashboard cards.",
    docsPath: "/charts/donut",
    tags: ["radial", "dashboard", "composition"],
  },
];

const plannedCharts: CatalogChart[] = [
  ...makePlannedCharts("Cartesian", [
    "Multi Line",
    "Spline",
    "Step Line",
    "Step Area",
    "Range Area",
    "Range Bar",
    "Horizontal Bar",
    "Stacked Bar",
    "Grouped Column",
    "Stacked Column",
    "100% Stacked Column",
    "100% Stacked Bar",
    "Overlay Column",
    "Overlay Bar",
    "Lollipop",
    "Dumbbell",
    "Waterfall",
    "Marimekko",
    "Mosaic",
    "Bullet Column",
    "Bullet Bar",
    "Dot Plot",
    "Connected Dot Plot",
    "Deviation Bar",
    "Variance Bar",
    "Bump Chart",
    "Slope Chart",
    "Population Pyramid",
    "Stream Graph",
    "Ridgeline Chart",
  ], ["trend", "comparison"]),
  ...makePlannedCharts("Statistical", [
    "Bubble",
    "Packed Bubble",
    "Hexbin",
    "Histogram",
    "Density Plot",
    "KDE Curve",
    "Box Plot",
    "Violin Plot",
    "Strip Plot",
    "Swarm Plot",
    "QQ Plot",
    "ECDF Plot",
    "Error Bar",
    "Error Line",
    "Error Scatter",
    "Parallel Coordinates",
    "Contour Plot",
    "Heatmap",
    "Calendar Heatmap",
    "Matrix Heatmap",
    "Correlation Matrix",
    "Cluster Map",
    "Distribution Strip",
    "Funnel Histogram",
    "Tornado Plot",
    "Control Chart",
    "Pareto",
    "Pareto Line",
    "Run Chart",
    "Seasonality Plot",
  ], ["statistical", "analysis"]),
  ...makePlannedCharts("Financial", [
    "Candlestick",
    "OHLC",
    "HLC",
    "Kagi",
    "Renko",
    "Heikin-Ashi",
    "Volume Profile",
    "Footprint Chart",
    "Depth Chart",
    "Baseline Chart",
    "Range Candle",
    "Area Candle",
    "Spread Chart",
    "Yield Curve",
    "Intraday Timeline",
    "Price Channel",
    "Bollinger Overlay",
    "Moving Average Ribbon",
    "Drawdown Chart",
    "MACD Panel",
    "RSI Panel",
    "Order Flow Ladder",
    "PnL Curve",
    "Scenario Waterfall",
    "Forecast Cone",
  ], ["financial", "time-series"]),
  ...makePlannedCharts("Hierarchical", [
    "Treemap",
    "Treemap Heat",
    "Nested Treemap",
    "Sunburst",
    "Icicle",
    "Partition",
    "Adjacency Matrix",
    "Circle Packing",
    "Hierarchy Path",
    "Hierarchy Breadcrumb",
    "Tree",
    "Indented Tree",
    "Radial Tree",
    "Org Chart Foundation",
    "Cluster Dendrogram",
    "Radial Cluster",
    "Nested Categories",
    "Grouped Circle Pack",
    "Decision Tree View",
    "Entity Hierarchy Map",
  ], ["hierarchy", "structure"]),
  ...makePlannedCharts("Flow", [
    "Sankey",
    "Alluvial",
    "Chord Diagram",
    "Dependency Flow",
    "Process Flow",
    "User Journey Flow",
    "Transition Matrix",
    "Arc Diagram",
    "Network Graph",
    "Force Graph",
    "Bipartite Graph",
    "Node-Link Tree",
    "Sequence Sankey",
    "Ribbon Flow",
    "Funnel Flow",
    "Conversion Path",
    "Migration Flow",
    "Supply Chain Flow",
    "Route Flow",
    "Energy Flow",
    "Stream Sankey",
    "Clustered Sankey",
    "Circular Sankey",
    "Token Flow",
    "Relationship Map",
  ], ["flow", "network"]),
  ...makePlannedCharts("Widgets", [
    "Linear Gauge",
    "Horizontal Gauge",
    "Vertical Gauge",
    "Spark Column",
    "Spark Bar",
    "Spark Win Loss",
    "KPI Tile",
    "KPI + Sparkline",
    "KPI + Gauge",
    "KPI + Trend Delta",
    "Status Card",
    "Monitoring Panel",
    "Threshold Panel",
    "Bullet Graph",
    "Progress Ring",
    "Progress Bar",
    "Scorecard",
    "Goal Tracker",
    "Variance Tile",
    "Mini Area",
    "Mini Donut",
    "Mini Waterfall",
    "Mini Heatmap",
    "Status Timeline",
    "Alert Stack",
    "Incident Strip",
  ], ["widget", "dashboard", "kpi"]),
  ...makePlannedCharts("Geospatial", [
    "Point Map",
    "Bubble Map",
    "Choropleth",
    "Symbol Map",
    "Route Map",
    "Region Heatmap",
    "Hex Map",
    "Tile Map",
    "Cartogram Foundation",
    "Flow Map",
    "Proportional Symbol Map",
    "Marker Cluster Map",
    "Geo Timeline",
    "Venue Map",
    "Topology Layer",
    "Region Drilldown Map",
    "Geo Density Map",
    "Connection Map",
    "Floorplan Overlay",
    "Spatial Scatter",
  ], ["geo", "map"]),
  ...makePlannedCharts("3D", [
    "3D Column",
    "3D Stacked Bar",
    "3D Stacked Column",
    "3D Line",
    "3D Area",
    "3D Surface",
    "3D Mesh",
    "3D Scatter",
    "3D Bubble",
    "3D Heatmap",
    "3D Treemap",
    "3D Donut",
    "3D Pie",
    "3D Radar",
    "3D Globe Plot",
    "3D Geo Scatter",
    "3D Flow Ribbon",
    "3D Funnel",
    "3D Pyramid",
    "Isometric Dashboard Card",
    "Depth Column",
    "Depth Area",
    "Perspective Combo",
    "3D KPI Panel",
  ], ["3d", "dashboard"]),
  ...makePlannedCharts("Timeline", [
    "Timeline",
    "Range Timeline",
    "Gantt Foundation",
    "Roadmap Timeline",
    "Milestone Track",
    "Swimlane Timeline",
    "Availability Timeline",
    "Calendar Strip",
    "Resource Gantt",
    "Dependency Timeline",
    "Release Timeline",
    "Incident Timeline",
    "Capacity Timeline",
    "Project Burndown",
    "Project Burnup",
  ], ["timeline", "planning"]),
  ...makePlannedCharts("Hybrid", [
    "Forecast Overlay Chart",
    "Anomaly Detection Panel",
    "Prediction Band Chart",
    "Confidence Ribbon",
    "Benchmark Comparison Tile",
    "Goal vs Actual Panel",
    "KPI + Threshold Hybrid",
    "KPI + Forecast Hybrid",
    "Ops Command Card",
    "Finance Summary Hybrid",
    "Retention Cohort Grid",
    "Funnel + Trend Hybrid",
    "Geo + KPI Hybrid",
    "Alert Severity Matrix",
    "Pipeline Health Board",
    "Experiment Result Board",
    "Quality Score Radar",
    "Support Queue Cockpit",
    "Inventory Risk Board",
    "SLA Compliance Board",
  ], ["hybrid", "dashboard"]),
];

export const chartCatalog: CatalogChart[] = [...liveCharts, ...plannedCharts];

export const chartCatalogStats = {
  total: chartCatalog.length,
  live: chartCatalog.filter((chart) => chart.status === "live").length,
  planned: chartCatalog.filter((chart) => chart.status === "planned").length,
  threeD: chartCatalog.filter((chart) => chart.tags.includes("3d")).length,
  families: new Set(chartCatalog.map((chart) => chart.family)).size,
};
