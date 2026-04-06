export interface NavigationItem {
  title: string;
  path?: string;
  description?: string;
  badge?: string;
  children?: NavigationItem[];
}

export const navigation: NavigationItem[] = [
  {
    title: "Overview",
    children: [
      {
        title: "Introduction",
        path: "/",
        description: "Positioning, product vision, and why Infinity Charts exists.",
      },
    ],
  },
  {
    title: "Getting Started",
    children: [
      {
        title: "Installation",
        path: "/getting-started/installation",
      },
      {
        title: "Quick Start",
        path: "/getting-started/quick-start",
      },
      {
        title: "Plain JavaScript",
        path: "/getting-started/plain-javascript",
        badge: "Browser",
      },
    ],
  },
  {
    title: "Core Concepts",
    children: [
      {
        title: "Configuration Model",
        path: "/concepts/configuration-model",
      },
      {
        title: "Chart Lifecycle",
        path: "/concepts/chart-lifecycle",
      },
      {
        title: "Data Pipeline",
        path: "/concepts/data-pipeline",
      },
      {
        title: "Layout System",
        path: "/concepts/layout-system",
      },
      {
        title: "Rendering Architecture",
        path: "/concepts/rendering-architecture",
      },
      {
        title: "Realtime Updates",
        path: "/concepts/realtime-updates",
      },
      {
        title: "Theme System",
        path: "/concepts/theme-system",
      },
      {
        title: "CSS Overrides",
        path: "/concepts/css-overrides",
      },
      {
        title: "Animation System",
        path: "/concepts/animation-system",
      },
      {
        title: "Business Value",
        path: "/concepts/business-value",
      },
      {
        title: "Performance",
        path: "/concepts/performance",
      },
      {
        title: "On-Demand Modules",
        path: "/concepts/on-demand-modules",
        badge: "ESM",
      },
      {
        title: "Accessibility and Responsive",
        path: "/concepts/accessibility-responsive",
      },
      {
        title: "Plugin System",
        path: "/concepts/plugin-system",
      },
      {
        title: "Thresholds and Overlays",
        path: "/concepts/thresholds-and-overlays",
      },
      {
        title: "Shared Behaviors",
        path: "/concepts/shared-behaviors",
      },
    ],
  },
  {
    title: "Chart Guide",
    children: [
      {
        title: "Line Chart",
        path: "/charts/line",
        badge: "Live",
      },
      {
        title: "Area Chart",
        path: "/charts/area",
        badge: "Live",
      },
      {
        title: "Bar / Column Chart",
        path: "/charts/bar",
        badge: "Live",
      },
      {
        title: "3D Bar Chart",
        path: "/charts/bar-3d",
        badge: "3D",
      },
      {
        title: "Stacked Area Chart",
        path: "/charts/stacked-area",
        badge: "Live",
      },
      {
        title: "Combo Chart",
        path: "/charts/combo",
        badge: "Live",
      },
      {
        title: "Sparkline",
        path: "/charts/sparkline",
        badge: "Live",
      },
      {
        title: "Scatter Chart",
        path: "/charts/scatter",
        badge: "Live",
      },
      {
        title: "Gauge Chart",
        path: "/charts/gauge",
        badge: "Live",
      },
      {
        title: "Semicircle Gauge",
        path: "/charts/gauge-semicircle",
        badge: "Live",
      },
      {
        title: "Radial Progress",
        path: "/charts/radial-progress",
        badge: "Live",
      },
      {
        title: "Thermometer",
        path: "/charts/thermometer",
        badge: "Live",
      },
      {
        title: "Battery Meter",
        path: "/charts/battery",
        badge: "Live",
      },
      {
        title: "Donut Chart",
        path: "/charts/donut",
        badge: "Live",
      },
      {
        title: "Pie Chart",
        path: "/charts/pie",
        badge: "Live",
      },
      {
        title: "Chart Explorer",
        path: "/chart-explorer",
        badge: "Catalog",
      },
      {
        title: "Example Gallery",
        path: "/example-gallery",
        badge: "Live",
      },
    ],
  },
  {
    title: "Patterns",
    children: [
      {
        title: "Dashboard Composition",
        path: "/patterns/dashboard-composition",
      },
      {
        title: "Realtime Monitoring",
        path: "/patterns/realtime-monitoring",
      },
      {
        title: "KPI and Sparklines",
        path: "/patterns/kpi-and-sparklines",
      },
      {
        title: "Chart Selection",
        path: "/patterns/chart-selection",
      },
      {
        title: "Operations Dashboards",
        path: "/patterns/operations-dashboards",
      },
      {
        title: "Financial and Forecasting",
        path: "/patterns/financial-and-forecasting",
      },
      {
        title: "Embedded Widgets",
        path: "/patterns/embedded-widgets",
      },
    ],
  },
  {
    title: "Tutorials",
    children: [
      {
        title: "Build an Ops Dashboard",
        path: "/tutorials/build-ops-dashboard",
      },
      {
        title: "Build a Live KPI Board",
        path: "/tutorials/build-live-kpi-board",
      },
    ],
  },
  {
    title: "API",
    children: [
      {
        title: "createChart",
        path: "/api/create-chart",
      },
      {
        title: "Chart Instance",
        path: "/api/chart-instance",
      },
      {
        title: "Config Reference",
        path: "/api/config-reference",
      },
      {
        title: "Events and Hooks",
        path: "/api/events-and-hooks",
      },
      {
        title: "Packs and Registration",
        path: "/api/packs-and-registration",
      },
      {
        title: "Playground",
        path: "/playground",
        badge: "Live",
      },
    ],
  },
  {
    title: "Troubleshooting",
    children: [
      {
        title: "Common Issues",
        path: "/troubleshooting/common-issues",
      },
      {
        title: "Performance Checks",
        path: "/troubleshooting/performance-checks",
      },
    ],
  },
];

export const topLinks = [
  { title: "Chart Explorer", path: "/chart-explorer" },
  { title: "3D Lab", path: "/charts/bar-3d" },
  { title: "Examples", path: "/example-gallery" },
  { title: "Playground", path: "/playground" },
];
