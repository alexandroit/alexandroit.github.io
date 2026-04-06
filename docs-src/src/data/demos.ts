import {
  createChart,
  type ChartPublicApi,
  type ThemeInput,
  type UserChartConfig,
} from "@revivejs/infinity-charts";

export interface DemoDefinition {
  id: string;
  title: string;
  description: string;
  code: string;
  mount(container: HTMLElement): () => void;
}

interface DemoDisplayState {
  showNumber: boolean;
  showLegend: boolean;
  showTooltip: boolean;
}

interface DemoChartBinding {
  chart: ChartPublicApi;
  type: string;
  state: DemoDisplayState;
}

let activeDemoCollector: DemoChartBinding[] | undefined;

const compactDemoTypes = new Set([
  "sparkline",
  "gauge",
  "gauge-semicircle",
  "radial-progress",
  "thermometer",
  "thermometer-horizontal",
  "battery",
]);

const createPanel = (container: HTMLElement): HTMLDivElement => {
  const panel = document.createElement("div");
  panel.className = "demo-panel";
  container.append(panel);
  return panel;
};

const createSimpleChart = (
  container: HTMLElement,
  config: UserChartConfig,
): ChartPublicApi => {
  const chart = createChart({ ...config, container });

  activeDemoCollector?.push({
    chart,
    type: config.type,
    state: {
      showNumber: config.showNumber ?? true,
      showLegend: config.showLegend ?? config.legend?.show ?? !compactDemoTypes.has(config.type),
      showTooltip: config.showTooltip ?? config.interaction?.tooltip ?? true,
    },
  });

  return chart;
};

const sharedLayout = {
  legend: {
    show: true,
    position: "bottom" as const,
  },
};

const lightWidgetColors = {
  plotBackground: "#fffdfa",
  plotBorder: "#e7ded4",
  surface: "#ffffff",
  surfaceAlt: "#f5f1eb",
  border: "#e4dbd1",
  title: "#171d26",
  text: "#70675e",
  mutedText: "#9b938a",
  gaugeNeedle: "#162033",
  pointStroke: "#ffffff",
} as const;

const darkWidgetColors = {
  plotBackground: "#0c1730",
  plotBorder: "#223251",
  surface: "#091323",
  surfaceAlt: "#13213a",
  border: "#1f304d",
  title: "#f4f8ff",
  text: "#b7c3db",
  mutedText: "#8391ab",
  gaugeNeedle: "#f8fbff",
  pointStroke: "#0a1220",
} as const;

const widgetDemoTypes = new Set([
  "gauge",
  "gauge-semicircle",
  "radial-progress",
  "thermometer",
  "thermometer-horizontal",
  "battery",
]);

const renderDisplayControlLabel = (
  label: string,
  enabled: boolean,
): string => `${label}: ${enabled ? "On" : "Off"}`;

export const mountDemoWithDisplayControls = (
  demo: DemoDefinition,
  container: HTMLElement,
): (() => void) => {
  container.innerHTML = "";

  const shell = document.createElement("div");
  shell.className = "demo-control-shell";

  const controls = document.createElement("div");
  controls.className = "demo-display-controls";

  const slot = document.createElement("div");
  slot.className = "demo-control-slot";

  shell.append(controls, slot);
  container.append(shell);

  const collected: DemoChartBinding[] = [];
  activeDemoCollector = collected;
  const cleanup = demo.mount(slot);
  activeDemoCollector = undefined;

  if (collected.some((entry) => widgetDemoTypes.has(entry.type))) {
    shell.classList.add("is-widget-demo");
  }

  if (collected.length === 0) {
    controls.remove();
    return () => {
      cleanup();
    };
  }

  const state: DemoDisplayState = { ...collected[0]!.state };

  const syncCharts = () => {
    collected.forEach(({ chart }) => {
      chart.update({
        showNumber: state.showNumber,
        showLegend: state.showLegend,
        showTooltip: state.showTooltip,
      });
    });
  };

  const createToggle = (
    key: keyof DemoDisplayState,
    label: string,
  ): HTMLButtonElement => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "demo-toggle";

    const refresh = () => {
      const enabled = state[key];
      button.textContent = renderDisplayControlLabel(label, enabled);
      button.classList.toggle("is-active", enabled);
      button.setAttribute("aria-pressed", enabled ? "true" : "false");
    };

    button.addEventListener("click", () => {
      state[key] = !state[key];
      refresh();
      syncCharts();
    });

    refresh();
    return button;
  };

  controls.append(
    createToggle("showNumber", "Show number"),
    createToggle("showLegend", "Show legend"),
    createToggle("showTooltip", "Show tooltip"),
  );

  syncCharts();

  return () => {
    cleanup();
  };
};

export const demos: DemoDefinition[] = [
  {
    id: "quick-start-line",
    title: "Quick start",
    description: "Minimal config with clean defaults.",
    code: `import { createChart } from "@revivejs/infinity-charts";

createChart({
  container: document.querySelector("#chart"),
  type: "line",
  title: "Monthly revenue",
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  data: [14, 18, 17, 26, 29],
  theme: "dark"
});`,
    mount(container) {
      const panel = createPanel(container);
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "line",
        title: "Monthly revenue",
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        data: [14, 18, 17, 26, 29],
        theme: "dark",
      });

      return () => chart.destroy();
    },
  },
  {
    id: "line-overview",
    title: "Line chart",
    description: "Multi-series comparison with thresholds.",
    code: `createChart({
  container,
  type: "line",
  title: { text: "Revenue vs plan", subtitle: "Quarterly snapshot" },
  labels: ["Q1", "Q2", "Q3", "Q4"],
  series: [
    { name: "Revenue", data: [42, 51, 57, 68] },
    { name: "Plan", data: [40, 48, 56, 60], color: "#7dd3fc" }
  ],
  thresholds: [{ value: 60, axis: "y", label: "Target" }],
  theme: "dark"
});`,
    mount(container) {
      const panel = createPanel(container);
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "line",
        title: { text: "Revenue vs plan", subtitle: "Quarterly snapshot" },
        labels: ["Q1", "Q2", "Q3", "Q4"],
        series: [
          { name: "Revenue", data: [42, 51, 57, 68] },
          { name: "Plan", data: [40, 48, 56, 60], color: "#7dd3fc" },
        ],
        thresholds: [{ value: 60, axis: "y", label: "Target" }],
        theme: "dark",
        ...sharedLayout,
      });

      return () => chart.destroy();
    },
  },
  {
    id: "area-forecast",
    title: "Area chart",
    description: "Capacity and demand forecasting view.",
    code: `createChart({
  container,
  type: "area",
  title: { text: "Capacity forecast", subtitle: "Projected utilization" },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  series: [
    { name: "Reserved", data: [18, 22, 28, 34, 39, 43] },
    { name: "Available", data: [30, 28, 27, 24, 22, 20], color: "#2dd4bf" }
  ],
  theme: "dark"
});`,
    mount(container) {
      const panel = createPanel(container);
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "area",
        title: { text: "Capacity forecast", subtitle: "Projected utilization" },
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        series: [
          { name: "Reserved", data: [18, 22, 28, 34, 39, 43] },
          { name: "Available", data: [30, 28, 27, 24, 22, 20], color: "#2dd4bf" },
        ],
        theme: "dark",
        ...sharedLayout,
      });

      return () => chart.destroy();
    },
  },
  {
    id: "bar-environments",
    title: "Bar chart",
    description: "Grouped environment comparison.",
    code: `createChart({
  container,
  type: "bar",
  title: "Environment usage",
  labels: ["CPU", "Memory", "Requests", "Latency"],
  series: [
    { name: "Production", data: [82, 74, 91, 38] },
    { name: "Staging", data: [51, 42, 64, 47], color: "#38bdf8" }
  ],
  theme: "light"
});`,
    mount(container) {
      const panel = createPanel(container);
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "bar",
        title: "Environment usage",
        labels: ["CPU", "Memory", "Requests", "Latency"],
        series: [
          { name: "Production", data: [82, 74, 91, 38] },
          { name: "Staging", data: [51, 42, 64, 47], color: "#38bdf8" },
        ],
        theme: "light",
        ...sharedLayout,
      });

      return () => chart.destroy();
    },
  },
  {
    id: "bar-3d-launch",
    title: "3D bar chart",
    description: "Depth-rich column view for launch, growth, or premium dashboard moments.",
    code: `createChart({
  container,
  type: "bar-3d",
  title: { text: "Launch velocity", subtitle: "3D category comparison" },
  labels: ["Alpha", "Beta", "Gamma", "Delta"],
  series: [
    { name: "Velocity", data: [36, 48, 42, 58] },
    { name: "Quality", data: [28, 34, 39, 44], color: "#2dd4bf" }
  ],
  theme: "dark"
});`,
    mount(container) {
      const panel = createPanel(container);
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "bar-3d",
        title: { text: "Launch velocity", subtitle: "3D category comparison" },
        labels: ["Alpha", "Beta", "Gamma", "Delta"],
        series: [
          { name: "Velocity", data: [36, 48, 42, 58] },
          { name: "Quality", data: [28, 34, 39, 44], color: "#2dd4bf" },
        ],
        theme: "dark",
        ...sharedLayout,
      });

      return () => chart.destroy();
    },
  },
  {
    id: "stacked-area-capacity",
    title: "Stacked area chart",
    description: "Contribution-over-time view for capacity or channel mix.",
    code: `createChart({
  container,
  type: "stacked-area",
  title: { text: "Capacity composition", subtitle: "Reserved vs queued vs free" },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  series: [
    { name: "Reserved", data: [22, 24, 27, 30, 34, 36] },
    { name: "Queued", data: [8, 10, 12, 11, 10, 9], color: "#38bdf8" },
    { name: "Free", data: [14, 13, 10, 8, 7, 6], color: "#2dd4bf" }
  ],
  theme: "dark"
});`,
    mount(container) {
      const panel = createPanel(container);
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "stacked-area",
        title: { text: "Capacity composition", subtitle: "Reserved vs queued vs free" },
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        series: [
          { name: "Reserved", data: [22, 24, 27, 30, 34, 36] },
          { name: "Queued", data: [8, 10, 12, 11, 10, 9], color: "#38bdf8" },
          { name: "Free", data: [14, 13, 10, 8, 7, 6], color: "#2dd4bf" },
        ],
        theme: "dark",
        ...sharedLayout,
      });

      return () => chart.destroy();
    },
  },
  {
    id: "combo-plan-vs-actual",
    title: "Combo chart",
    description: "Bar plus line composition for plan, actual, and forecast overlays.",
    code: `createChart({
  container,
  type: "combo",
  title: { text: "Revenue vs plan", subtitle: "Monthly comparison" },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  series: [
    { name: "Actual", type: "bar", data: [28, 31, 34, 38, 41, 44] },
    { name: "Plan", type: "line", data: [30, 32, 35, 37, 40, 43], color: "#38bdf8" },
    { name: "Forecast", type: "area", data: [29, 33, 36, 40, 45, 48], color: "#2dd4bf" }
  ],
  theme: "light"
});`,
    mount(container) {
      const panel = createPanel(container);
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "combo",
        title: { text: "Revenue vs plan", subtitle: "Monthly comparison" },
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        series: [
          { name: "Actual", type: "bar", data: [28, 31, 34, 38, 41, 44] },
          { name: "Plan", type: "line", data: [30, 32, 35, 37, 40, 43], color: "#38bdf8" },
          { name: "Forecast", type: "area", data: [29, 33, 36, 40, 45, 48], color: "#2dd4bf" },
        ],
        theme: "light",
        ...sharedLayout,
      });

      return () => chart.destroy();
    },
  },
  {
    id: "scatter-correlation",
    title: "Scatter chart",
    description: "Correlation-style plotting with continuous x and y domains.",
    code: `createChart({
  container,
  type: "scatter",
  title: { text: "Activation vs retention", subtitle: "Cohort clusters" },
  xAxis: { title: "Activation %" },
  yAxis: { title: "Retention %" },
  series: [
    {
      name: "Enterprise",
      data: [
        { x: 41, y: 64, label: "A" },
        { x: 48, y: 71, label: "B" },
        { x: 57, y: 76, label: "C" }
      ]
    },
    {
      name: "SMB",
      color: "#38bdf8",
      data: [
        { x: 22, y: 31, label: "D" },
        { x: 28, y: 36, label: "E" },
        { x: 33, y: 44, label: "F" }
      ]
    }
  ],
  theme: "light"
});`,
    mount(container) {
      const panel = createPanel(container);
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "scatter",
        title: { text: "Activation vs retention", subtitle: "Cohort clusters" },
        xAxis: { title: "Activation %", tickCount: 5 },
        yAxis: { title: "Retention %", tickCount: 5 },
        series: [
          {
            name: "Enterprise",
            data: [
              { x: 41, y: 64, label: "A" },
              { x: 48, y: 71, label: "B" },
              { x: 57, y: 76, label: "C" },
            ],
          },
          {
            name: "SMB",
            color: "#38bdf8",
            data: [
              { x: 22, y: 31, label: "D" },
              { x: 28, y: 36, label: "E" },
              { x: 33, y: 44, label: "F" },
            ],
          },
        ],
        theme: "light",
        ...sharedLayout,
      });

      return () => chart.destroy();
    },
  },
  {
    id: "donut-alerts",
    title: "Donut chart",
    description: "Dashboard-friendly status distribution.",
    code: `createChart({
  container,
  type: "donut",
  title: "Alert distribution",
  data: [
    { label: "Critical", value: 7, color: "#ef4444" },
    { label: "Warning", value: 18, color: "#f59e0b" },
    { label: "Info", value: 36, color: "#0ea5e9" }
  ],
  theme: "light"
});`,
    mount(container) {
      const panel = createPanel(container);
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "donut",
        title: "Alert distribution",
        data: [
          { label: "Critical", value: 7, color: "#ef4444" },
          { label: "Warning", value: 18, color: "#f59e0b" },
          { label: "Info", value: 36, color: "#0ea5e9" },
        ],
        theme: "light",
        colors: lightWidgetColors,
        ...sharedLayout,
      });

      return () => chart.destroy();
    },
  },
  {
    id: "gauge-health",
    title: "Gauge chart",
    description: "Velocity-meter style KPI chart for health, saturation, and threshold-aware status.",
    code: `createChart({
  container,
  type: "gauge",
  title: { text: "Cluster health", subtitle: "Current CPU saturation" },
  data: [{ label: "CPU usage", value: 72 }],
  gauge: {
    min: 0,
    max: 100,
    unit: "%",
    bands: [
      { from: 0, to: 55, color: "#22c55e", label: "Healthy" },
      { from: 55, to: 80, color: "#f59e0b", label: "Attention" },
      { from: 80, to: 100, color: "#ef4444", label: "Critical" }
    ]
  },
  theme: "light"
});`,
    mount(container) {
      const panel = createPanel(container);
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "gauge",
        title: { text: "Cluster health", subtitle: "Current CPU saturation" },
        data: [{ label: "CPU usage", value: 72 }],
        gauge: {
          min: 0,
          max: 100,
          unit: "%",
          bands: [
            { from: 0, to: 55, color: "#22c55e", label: "Healthy" },
            { from: 55, to: 80, color: "#f59e0b", label: "Attention" },
            { from: 80, to: 100, color: "#ef4444", label: "Critical" },
          ],
        },
        theme: "light",
        colors: lightWidgetColors,
      });

      return () => chart.destroy();
    },
  },
  {
    id: "gauge-semicircle",
    title: "Semicircle gauge",
    description: "Compact half-arc gauge designed for dense dashboard cards.",
    code: `createChart({
  container,
  type: "gauge-semicircle",
  title: { text: "API health", subtitle: "Semicircle status card" },
  data: [{ label: "Availability", value: 97.4 }],
  gauge: {
    min: 90,
    max: 100,
    unit: "%",
    bands: [
      { from: 90, to: 95, color: "#ef4444", label: "Risk" },
      { from: 95, to: 98, color: "#f59e0b", label: "Watch" },
      { from: 98, to: 100, color: "#22c55e", label: "Healthy" }
    ]
  },
  theme: "light"
});`,
    mount(container) {
      const panel = createPanel(container);
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "gauge-semicircle",
        title: { text: "API health", subtitle: "Semicircle status card" },
        data: [{ label: "Availability", value: 97.4 }],
        gauge: {
          min: 90,
          max: 100,
          unit: "%",
          bands: [
            { from: 90, to: 95, color: "#ef4444", label: "Risk" },
            { from: 95, to: 98, color: "#f59e0b", label: "Watch" },
            { from: 98, to: 100, color: "#22c55e", label: "Healthy" },
          ],
        },
        theme: "light",
        colors: lightWidgetColors,
      });

      return () => chart.destroy();
    },
  },
  {
    id: "radial-progress",
    title: "Radial progress",
    description: "Ring-style progress widget with centered KPI readout.",
    code: `createChart({
  container,
  type: "radial-progress",
  title: { text: "Quarter goal", subtitle: "Revenue completion" },
  data: [{ label: "Completion", value: 78 }],
  gauge: {
    min: 0,
    max: 100,
    unit: "%",
    bands: [
      { from: 0, to: 60, color: "#38bdf8", label: "Building" },
      { from: 60, to: 85, color: "#0ea5e9", label: "On pace" },
      { from: 85, to: 100, color: "#22c55e", label: "Strong" }
    ]
  },
  theme: "dark"
});`,
    mount(container) {
      const panel = createPanel(container);
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "radial-progress",
        title: { text: "Quarter goal", subtitle: "Revenue completion" },
        data: [{ label: "Completion", value: 78 }],
        gauge: {
          min: 0,
          max: 100,
          unit: "%",
          bands: [
            { from: 0, to: 60, color: "#38bdf8", label: "Building" },
            { from: 60, to: 85, color: "#0ea5e9", label: "On pace" },
            { from: 85, to: 100, color: "#22c55e", label: "Strong" },
          ],
        },
        theme: "dark",
        colors: darkWidgetColors,
      });

      return () => chart.destroy();
    },
  },
  {
    id: "thermometer-vertical",
    title: "Thermometer",
    description: "Vertical saturation widget for occupancy, temperature, or risk.",
    code: `createChart({
  container,
  type: "thermometer",
  title: { text: "Storage pressure", subtitle: "Current utilization" },
  data: [{ label: "Capacity", value: 83 }],
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
});`,
    mount(container) {
      const panel = createPanel(container);
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "thermometer",
        title: { text: "Storage pressure", subtitle: "Current utilization" },
        data: [{ label: "Capacity", value: 83 }],
        gauge: {
          min: 0,
          max: 100,
          unit: "%",
          bands: [
            { from: 0, to: 60, color: "#22c55e", label: "Healthy" },
            { from: 60, to: 80, color: "#f59e0b", label: "Attention" },
            { from: 80, to: 100, color: "#ef4444", label: "Critical" },
          ],
        },
        theme: "light",
        colors: lightWidgetColors,
      });

      return () => chart.destroy();
    },
  },
  {
    id: "thermometer-horizontal",
    title: "Horizontal thermometer",
    description: "Horizontal fill meter for narrower monitoring strips.",
    code: `createChart({
  container,
  type: "thermometer-horizontal",
  title: { text: "Risk score", subtitle: "Horizontal level meter" },
  data: [{ label: "Severity", value: 42 }],
  gauge: {
    min: 0,
    max: 100,
    unit: "%",
    bands: [
      { from: 0, to: 35, color: "#22c55e", label: "Low" },
      { from: 35, to: 65, color: "#f59e0b", label: "Moderate" },
      { from: 65, to: 100, color: "#ef4444", label: "High" }
    ]
  },
  theme: "light"
});`,
    mount(container) {
      const panel = createPanel(container);
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "thermometer-horizontal",
        title: { text: "Risk score", subtitle: "Horizontal level meter" },
        data: [{ label: "Severity", value: 42 }],
        gauge: {
          min: 0,
          max: 100,
          unit: "%",
          bands: [
            { from: 0, to: 35, color: "#22c55e", label: "Low" },
            { from: 35, to: 65, color: "#f59e0b", label: "Moderate" },
            { from: 65, to: 100, color: "#ef4444", label: "High" },
          ],
        },
        theme: "light",
        colors: lightWidgetColors,
      });

      return () => chart.destroy();
    },
  },
  {
    id: "battery-meter",
    title: "Battery meter",
    description: "Charge-style status widget for remaining capacity or SLA budget.",
    code: `createChart({
  container,
  type: "battery",
  title: { text: "Backup reserve", subtitle: "Remaining battery budget" },
  data: [{ label: "Battery", value: 28 }],
  gauge: {
    min: 0,
    max: 100,
    unit: "%",
    bands: [
      { from: 0, to: 20, color: "#ef4444", label: "Low" },
      { from: 20, to: 50, color: "#f59e0b", label: "Watch" },
      { from: 50, to: 100, color: "#22c55e", label: "Charged" }
    ]
  },
  theme: "dark"
});`,
    mount(container) {
      const panel = createPanel(container);
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "battery",
        title: { text: "Backup reserve", subtitle: "Remaining battery budget" },
        data: [{ label: "Battery", value: 28 }],
        gauge: {
          min: 0,
          max: 100,
          unit: "%",
          bands: [
            { from: 0, to: 20, color: "#ef4444", label: "Low" },
            { from: 20, to: 50, color: "#f59e0b", label: "Watch" },
            { from: 50, to: 100, color: "#22c55e", label: "Charged" },
          ],
        },
        theme: "dark",
        colors: darkWidgetColors,
      });

      return () => chart.destroy();
    },
  },
  {
    id: "pie-allocation",
    title: "Pie chart",
    description: "Simple part-to-whole breakdown.",
    code: `createChart({
  container,
  type: "pie",
  title: "Budget allocation",
  data: [
    { label: "R&D", value: 34, color: "#2563eb" },
    { label: "Sales", value: 26, color: "#14b8a6" },
    { label: "Ops", value: 22, color: "#f59e0b" },
    { label: "Support", value: 18, color: "#8b5cf6" }
  ]
});`,
    mount(container) {
      const panel = createPanel(container);
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "pie",
        title: "Budget allocation",
        data: [
          { label: "R&D", value: 34, color: "#2563eb" },
          { label: "Sales", value: 26, color: "#14b8a6" },
          { label: "Ops", value: 22, color: "#f59e0b" },
          { label: "Support", value: 18, color: "#8b5cf6" },
        ],
        theme: "light",
        colors: lightWidgetColors,
        ...sharedLayout,
      });

      return () => chart.destroy();
    },
  },
  {
    id: "realtime-stream",
    title: "Realtime stream",
    description: "Append data without re-instantiating the chart.",
    code: `const chart = createChart({
  container,
  type: "line",
  title: { text: "Ingestion throughput", subtitle: "Live appendData()" },
  labels: ["00", "05", "10", "15", "20"],
  data: [124, 131, 128, 142, 149],
  theme: "dark",
  realtime: { enabled: true, maxPoints: 16 }
});

setInterval(() => {
  chart.appendData({
    label: String(Date.now()).slice(-2),
    value: 120 + Math.round(Math.random() * 40)
  });
}, 1200);`,
    mount(container) {
      const panel = createPanel(container);
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "line",
        title: { text: "Ingestion throughput", subtitle: "Live appendData()" },
        labels: ["00", "05", "10", "15", "20"],
        data: [124, 131, 128, 142, 149],
        theme: "dark",
        realtime: { enabled: true, maxPoints: 16 },
      });

      let tick = 25;
      const intervalId = window.setInterval(() => {
        tick += 5;
        chart.appendData({
          label: String(tick).padStart(2, "0"),
          value: 120 + Math.round(Math.random() * 40),
        });
      }, 1200);

      return () => {
        window.clearInterval(intervalId);
        chart.destroy();
      };
    },
  },
  {
    id: "theme-switcher",
    title: "Theme switching",
    description: "Switch between light and dark tokens at runtime.",
    code: `const chart = createChart({
  container,
  type: "area",
  title: "Theme switching",
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  data: [18, 24, 21, 29, 33],
  theme: "light"
});

chart.setTheme("dark");`,
    mount(container) {
      const wrapper = document.createElement("div");
      wrapper.className = "demo-theme-wrapper";
      wrapper.innerHTML = `
        <div class="demo-actions">
          <button class="demo-button" data-theme="light">Light</button>
          <button class="demo-button" data-theme="dark">Dark</button>
        </div>
      `;
      container.append(wrapper);

      const panel = createPanel(wrapper);
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "area",
        title: "Theme switching",
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        data: [18, 24, 21, 29, 33],
        theme: "light",
      });

      const onClick = (event: Event) => {
        const target = event.target as HTMLElement;
        const theme = target.dataset.theme as ThemeInput | undefined;

        if (theme) {
          chart.setTheme(theme);
        }
      };

      wrapper.addEventListener("click", onClick);

      return () => {
        wrapper.removeEventListener("click", onClick);
        chart.destroy();
      };
    },
  },
  {
    id: "dashboard-pattern",
    title: "Dashboard pattern",
    description: "A composition of cards, trends, and summaries.",
    code: `const revenue = createChart({ type: "line", ... });
const environments = createChart({ type: "bar", ... });
const alerts = createChart({ type: "donut", ... });`,
    mount(container) {
      const layout = document.createElement("div");
      layout.className = "dashboard-demo-grid";
      layout.innerHTML = `
        <div class="dashboard-demo-card dashboard-demo-card-wide"><div class="dashboard-demo-slot" data-slot="a"></div></div>
        <div class="dashboard-demo-card"><div class="dashboard-demo-slot" data-slot="b"></div></div>
        <div class="dashboard-demo-card"><div class="dashboard-demo-slot" data-slot="c"></div></div>
      `;
      container.append(layout);

      const slotA = layout.querySelector<HTMLElement>('[data-slot="a"]')!;
      const slotB = layout.querySelector<HTMLElement>('[data-slot="b"]')!;
      const slotC = layout.querySelector<HTMLElement>('[data-slot="c"]')!;

      const line = createSimpleChart(slotA, {
        container: slotA,
        type: "line",
        title: { text: "ARR growth", subtitle: "Rolling 12 months" },
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        data: [44, 48, 53, 59, 61, 68],
        theme: "dark",
      });

      const bar = createSimpleChart(slotB, {
        container: slotB,
        type: "bar",
        title: "Team throughput",
        data: {
          Platform: 42,
          Growth: 33,
          Ops: 28,
          QA: 18,
        },
        theme: "light",
      });

      const donut = createSimpleChart(slotC, {
        container: slotC,
        type: "donut",
        title: "Error budget",
        data: [
          { label: "Healthy", value: 71, color: "#22c55e" },
          { label: "At risk", value: 19, color: "#f59e0b" },
          { label: "Exceeded", value: 10, color: "#ef4444" },
        ],
        theme: "light",
      });

      return () => {
        line.destroy();
        bar.destroy();
        donut.destroy();
      };
    },
  },
  {
    id: "realtime-panel",
    title: "Monitoring panel",
    description: "KPI plus streaming chart composition.",
    code: `const chart = createChart({ type: "line", realtime: { enabled: true } });
chart.appendData({ label: "35", value: 184 });`,
    mount(container) {
      const wrapper = document.createElement("div");
      wrapper.className = "monitoring-demo";
      wrapper.innerHTML = `
        <div class="monitoring-demo-header">
          <div>
            <p class="monitoring-demo-eyebrow">Active throughput</p>
            <h3 class="monitoring-demo-value">148 rps</h3>
          </div>
          <span class="monitoring-demo-chip">stable</span>
        </div>
      `;
      container.append(wrapper);

      const panel = createPanel(wrapper);
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "line",
        title: { text: "Requests / sec", subtitle: "Last 10 intervals" },
        labels: ["00", "05", "10", "15", "20"],
        data: [136, 144, 141, 152, 148],
        theme: "dark",
        realtime: { enabled: true, maxPoints: 10 },
      });

      const valueNode = wrapper.querySelector<HTMLElement>(".monitoring-demo-value")!;
      const chipNode = wrapper.querySelector<HTMLElement>(".monitoring-demo-chip")!;
      let tick = 25;

      const intervalId = window.setInterval(() => {
        tick += 5;
        const value = 130 + Math.round(Math.random() * 36);
        chart.appendData({
          label: String(tick).padStart(2, "0"),
          value,
        });
        valueNode.textContent = `${value} rps`;
        chipNode.textContent = value > 158 ? "spike" : value < 138 ? "watch" : "stable";
      }, 1400);

      return () => {
        window.clearInterval(intervalId);
        chart.destroy();
      };
    },
  },
  {
    id: "kpi-sparkline",
    title: "KPI sparkline",
    description: "Compact metrics card pattern using the same core engine.",
    code: `createChart({
  container,
  type: "sparkline",
  data: [12, 15, 14, 18, 21, 20, 24],
  theme: "dark"
});`,
    mount(container) {
      const card = document.createElement("div");
      card.className = "sparkline-demo-card";
      card.innerHTML = `
        <div class="sparkline-demo-meta">
          <span class="sparkline-demo-label">Net retention</span>
          <strong class="sparkline-demo-number">124%</strong>
          <span class="sparkline-demo-trend">+8.2% QoQ</span>
        </div>
      `;
      container.append(card);

      const panel = createPanel(card);
      panel.style.height = "110px";
      const chart = createSimpleChart(panel, {
        container: panel,
        type: "sparkline",
        series: [{ name: "Net retention", data: [12, 15, 14, 18, 21, 20, 24] }],
        theme: "dark",
        layout: {
          padding: { top: 12, right: 12, bottom: 12, left: 12 },
          plotPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        responsive: { minHeight: 110 },
      });

      return () => chart.destroy();
    },
  },
];

export const getDemo = (id: string): DemoDefinition | undefined =>
  demos.find((demo) => demo.id === id);
