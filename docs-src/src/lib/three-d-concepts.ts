import type { PlaygroundExample } from "../data/playground-examples";

type ThreeDConceptKind =
  | "column"
  | "stacked"
  | "line"
  | "area"
  | "surface"
  | "heatmap"
  | "scatter"
  | "radial"
  | "radar"
  | "globe"
  | "flow"
  | "funnel"
  | "pyramid"
  | "dashboard";

interface ThreeDConceptMeta {
  title: string;
  summary: string;
  value: string;
  reading: string;
  interactions: string;
}

interface ThreeDOverlayItem {
  label: string;
  value: string;
  color: string;
}

interface ThreeDOverlayMeta {
  numberLabel: string;
  numberValue: string;
  legendItems: ThreeDOverlayItem[];
}

const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

const resolveThreeDConceptKind = (exampleId: string): ThreeDConceptKind => {
  switch (exampleId) {
    case "3d-column":
    case "depth-column":
      return "column";
    case "3d-stacked-bar":
    case "3d-stacked-column":
      return "stacked";
    case "3d-line":
      return "line";
    case "3d-area":
    case "depth-area":
    case "perspective-combo":
      return "area";
    case "3d-surface":
    case "3d-mesh":
      return "surface";
    case "3d-heatmap":
      return "heatmap";
    case "3d-scatter":
    case "3d-bubble":
    case "3d-geo-scatter":
      return "scatter";
    case "3d-donut":
    case "3d-pie":
      return "radial";
    case "3d-radar":
      return "radar";
    case "3d-globe-plot":
      return "globe";
    case "3d-flow-ribbon":
      return "flow";
    case "3d-funnel":
      return "funnel";
    case "3d-pyramid":
      return "pyramid";
    case "3d-treemap":
    case "isometric-dashboard-card":
    case "3d-kpi-panel":
      return "dashboard";
    default:
      return "column";
  }
};

const getThreeDConceptMeta = (
  kind: ThreeDConceptKind,
  example: PlaygroundExample,
): ThreeDConceptMeta => {
  const summary = `${example.description} This concept preview focuses on the shape language that makes ${example.name.toLowerCase()} feel different in product workflows.`;

  switch (kind) {
    case "column":
      return {
        title: "Perspective categorical comparison",
        summary,
        value: "Executive dashboards where volume, depth, and ranking need a premium surface.",
        reading: "Use depth to reinforce magnitude without hiding labels or baseline comparison.",
        interactions: "Hover each prism for regional values, then drill into the active segment or category.",
      };
    case "stacked":
      return {
        title: "Layered contribution in depth",
        summary,
        value: "Composition-heavy KPI boards where total and mix need to be readable together.",
        reading: "Each stack segment communicates contribution while the whole prism preserves total context.",
        interactions: "Hover segments to inspect composition; toggle series later without collapsing the full story.",
      };
    case "line":
      return {
        title: "Depth-guided trend path",
        summary,
        value: "Premium monitoring, forecast storytelling, and time-based comparisons with hierarchy.",
        reading: "Perspective adds emphasis to trajectory and turning points without replacing the time axis.",
        interactions: "Crosshair, scrub, and compare points along the path with synchronized tooltip layers.",
      };
    case "area":
      return {
        title: "Volume plus trajectory in perspective",
        summary,
        value: "Capacity, demand, and plan-vs-actual views where accumulation matters as much as trend.",
        reading: "The floor and fill make it easier to read both intensity and direction from a distance.",
        interactions: "Hover peaks, inspect slope transitions, and overlay thresholds or forecast bands later.",
      };
    case "surface":
      return {
        title: "Analytical surface field",
        summary,
        value: "Density, multi-axis analysis, and premium exploratory dashboards where contour matters.",
        reading: "Height and shading reveal valleys, ridges, and anomalies better than a flat grid.",
        interactions: "Rotate, brush hot zones, and inspect exact z-values through cursor or lasso workflows.",
      };
    case "heatmap":
      return {
        title: "Elevated intensity matrix",
        summary,
        value: "Operational grids where magnitude and concentration should jump out immediately.",
        reading: "Each cell carries both color and height so dense clusters stand out without reading every label.",
        interactions: "Hover cells for exact values, select windows, and compare bands across time or category axes.",
      };
    case "scatter":
      return {
        title: "Spatial point cloud",
        summary,
        value: "Correlation, cluster discovery, and geo-like scatter views with a premium exploratory feel.",
        reading: "Depth helps separate dense clouds, outliers, and grouped motion patterns.",
        interactions: "Lasso dense regions, hover single points, and spotlight outliers or cluster centroids.",
      };
    case "radial":
      return {
        title: "Radial depth summary",
        summary,
        value: "High-polish KPI or composition widgets where circular reading needs stronger hierarchy.",
        reading: "Perspective keeps the center metric strong while arcs communicate relative share or progress.",
        interactions: "Focus a slice, explode the active segment, and drill into the selected branch or metric.",
      };
    case "radar":
      return {
        title: "Multidimensional benchmark surface",
        summary,
        value: "Capability, maturity, and benchmark comparisons across many attributes at once.",
        reading: "A tilted radar plane makes gaps between current and target profiles easier to spot.",
        interactions: "Hover each axis, compare target overlays, and spotlight one profile while muting others.",
      };
    case "globe":
      return {
        title: "Spatial orbit view",
        summary,
        value: "Global operations and regional performance views that need strong geographic storytelling.",
        reading: "Curvature and orbit paths help users understand long-distance relationships and hotspots.",
        interactions: "Hover a route, isolate a region, and replay movement or change over time.",
      };
    case "flow":
      return {
        title: "Ribbon flow in depth",
        summary,
        value: "Journey, dependency, and conversion pathways where the route itself is the business insight.",
        reading: "Depth separates overlapping ribbons and keeps the dominant path visually obvious.",
        interactions: "Hover a ribbon to reveal the full route, then drill into one path or stage family.",
      };
    case "funnel":
      return {
        title: "Stage loss with depth cues",
        summary,
        value: "Sales, product, and ops funnels where loss between phases needs stronger visual emphasis.",
        reading: "Depth exaggerates narrowing, making stage drop-off impossible to miss in executive views.",
        interactions: "Hover a stage to inspect conversion, drop-off, and recovered volume across the journey.",
      };
    case "pyramid":
      return {
        title: "Hierarchical wedge comparison",
        summary,
        value: "Executive hierarchy and allocation stories where each layer needs visual weight.",
        reading: "The stepped pyramid keeps stage order obvious while preserving contribution by layer.",
        interactions: "Select a tier to isolate its contribution or compare the current tier against the target mix.",
      };
    case "dashboard":
      return {
        title: "Isometric dashboard composition",
        summary,
        value: "Premium command-center cards that combine KPI, trend, state, and layout depth.",
        reading: "Depth turns the chart into a widget surface, not just a standalone plot.",
        interactions: "Hover each tile to inspect KPIs, jump into the underlying chart, and compare cards at a glance.",
      };
  }
};

const getThreeDOverlayMeta = (kind: ThreeDConceptKind): ThreeDOverlayMeta => {
  switch (kind) {
    case "radial":
      return {
        numberLabel: "Total mix",
        numberValue: "100",
        legendItems: [
          { label: "Core", value: "42", color: "#2f6df6" },
          { label: "Expansion", value: "31", color: "#2dd4bf" },
          { label: "Services", value: "27", color: "#f59e0b" },
        ],
      };
    case "line":
      return {
        numberLabel: "Peak value",
        numberValue: "92k",
        legendItems: [
          { label: "Forecast", value: "92k", color: "#52d2ff" },
          { label: "Baseline", value: "74k", color: "#2dd4bf" },
        ],
      };
    case "area":
      return {
        numberLabel: "Accumulated",
        numberValue: "184k",
        legendItems: [
          { label: "Demand", value: "108k", color: "#52d2ff" },
          { label: "Capacity", value: "76k", color: "#2dd4bf" },
        ],
      };
    case "surface":
      return {
        numberLabel: "Hotspot",
        numberValue: "46.0",
        legendItems: [
          { label: "Ridge", value: "46.0", color: "#ff8f52" },
          { label: "Midfield", value: "31.0", color: "#52d2ff" },
          { label: "Floor", value: "18.0", color: "#2dd4bf" },
        ],
      };
    case "heatmap":
      return {
        numberLabel: "Peak cell",
        numberValue: "46",
        legendItems: [
          { label: "Hot zone", value: "46", color: "#ff8f52" },
          { label: "Warm zone", value: "34", color: "#52d2ff" },
          { label: "Cool zone", value: "18", color: "#7b9bff" },
        ],
      };
    case "scatter":
      return {
        numberLabel: "Largest bubble",
        numberValue: "28",
        legendItems: [
          { label: "North", value: "14", color: "#52d2ff" },
          { label: "West", value: "28", color: "#2f6df6" },
          { label: "Global", value: "36", color: "#ff8f52" },
        ],
      };
    case "column":
    case "stacked":
      return {
        numberLabel: "Top segment",
        numberValue: "71k",
        legendItems: [
          { label: "Primary", value: "58k", color: "#2f6df6" },
          { label: "Secondary", value: "44k", color: "#2dd4bf" },
          { label: "Tertiary", value: "71k", color: "#ff8f52" },
        ],
      };
    case "radar":
      return {
        numberLabel: "Coverage",
        numberValue: "78%",
        legendItems: [
          { label: "Current", value: "78%", color: "#52d2ff" },
          { label: "Target", value: "86%", color: "#2dd4bf" },
        ],
      };
    case "globe":
      return {
        numberLabel: "Active routes",
        numberValue: "24",
        legendItems: [
          { label: "Americas", value: "42", color: "#52d2ff" },
          { label: "Europe", value: "31", color: "#2dd4bf" },
          { label: "APAC", value: "38", color: "#ff8f52" },
        ],
      };
    case "flow":
      return {
        numberLabel: "Dominant path",
        numberValue: "1.24k",
        legendItems: [
          { label: "Primary path", value: "1.24k", color: "#2f6df6" },
          { label: "Secondary path", value: "0.48k", color: "#2dd4bf" },
        ],
      };
    case "funnel":
      return {
        numberLabel: "Conversion",
        numberValue: "8.8%",
        legendItems: [
          { label: "Lead", value: "1000", color: "#52d2ff" },
          { label: "Qualified", value: "540", color: "#2f6df6" },
          { label: "Won", value: "88", color: "#2dd4bf" },
        ],
      };
    case "pyramid":
      return {
        numberLabel: "Priority tier",
        numberValue: "18",
        legendItems: [
          { label: "Base", value: "58", color: "#2dd4bf" },
          { label: "Growth", value: "34", color: "#2f6df6" },
          { label: "Priority", value: "18", color: "#52d2ff" },
        ],
      };
    case "dashboard":
      return {
        numberLabel: "Widget score",
        numberValue: "84",
        legendItems: [
          { label: "Revenue", value: "42", color: "#52d2ff" },
          { label: "Health", value: "28", color: "#2dd4bf" },
          { label: "Risk", value: "16", color: "#ff8f52" },
        ],
      };
  }
};

const renderControlLabel = (label: string, enabled: boolean): string =>
  `${label}: ${enabled ? "On" : "Off"}`;

const renderOverlayLegend = (meta: ThreeDOverlayMeta): string => `
  <div class="three-d-concept-legend" data-three-d-legend>
    ${meta.legendItems
      .map(
        (item) => `
          <article class="three-d-concept-legend-item">
            <span class="three-d-concept-legend-key">
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

const renderColumnScene = (): string => `
  <svg class="three-d-scene" viewBox="0 0 760 380" role="img" aria-label="3D column concept preview">
    <defs>
      <linearGradient id="column-front" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#6ea8ff"/>
        <stop offset="100%" stop-color="#1f5ef5"/>
      </linearGradient>
      <linearGradient id="column-side" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1742b2"/>
        <stop offset="100%" stop-color="#0f255f"/>
      </linearGradient>
      <linearGradient id="column-top" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#b7d0ff"/>
        <stop offset="100%" stop-color="#5f8dff"/>
      </linearGradient>
    </defs>
    <polygon class="scene-floor" points="120,286 430,182 654,244 344,346" />
    <polyline class="scene-grid-line" points="164,270 472,166 622,208" />
    <polyline class="scene-grid-line" points="202,294 510,190 660,232" />
    <polyline class="scene-grid-line" points="244,319 552,215 702,256" />
    <g class="three-d-hotspot three-d-prism" data-concept-tip="North region reached 58k with the strongest quarter-on-quarter climb.">
      <polygon class="shape-top" points="188,208 224,196 246,205 209,218" />
      <polygon class="shape-side" points="246,205 246,303 209,316 209,218" />
      <polygon class="shape-front" points="188,208 209,218 209,316 188,306" />
    </g>
    <g class="three-d-hotspot three-d-prism prism-offset-a" data-concept-tip="Enterprise segment held 44k with steadier, lower-volatility growth.">
      <polygon class="shape-top" points="284,180 320,168 342,177 306,190" />
      <polygon class="shape-side" points="342,177 342,302 306,315 306,190" />
      <polygon class="shape-front" points="284,180 306,190 306,315 284,305" />
    </g>
    <g class="three-d-hotspot three-d-prism prism-offset-b" data-concept-tip="Global channel expansion hit 71k and became the highest value cluster.">
      <polygon class="shape-top" points="394,144 430,132 452,141 416,154" />
      <polygon class="shape-side" points="452,141 452,304 416,317 416,154" />
      <polygon class="shape-front" points="394,144 416,154 416,317 394,307" />
    </g>
    <g class="three-d-hotspot three-d-prism prism-offset-c" data-concept-tip="SMB pipeline closed at 49k and is positioned for compact dashboard comparison.">
      <polygon class="shape-top" points="514,194 550,182 572,191 536,204" />
      <polygon class="shape-side" points="572,191 572,298 536,311 536,204" />
      <polygon class="shape-front" points="514,194 536,204 536,311 514,301" />
    </g>
  </svg>
`;

const renderStackedScene = (): string => `
  <svg class="three-d-scene" viewBox="0 0 760 380" role="img" aria-label="3D stacked concept preview">
    <polygon class="scene-floor" points="120,286 430,182 654,244 344,346" />
    <polyline class="scene-grid-line" points="160,272 468,168 620,212" />
    <polyline class="scene-grid-line" points="204,298 512,194 664,238" />
    <polyline class="scene-grid-line" points="246,322 554,218 706,262" />
    <g class="three-d-hotspot three-d-prism stacked-stack" data-concept-tip="Current mix: Core 36%, Expansion 28%, Services 14% on a 78k total.">
      <polygon class="shape-top" points="204,192 242,180 264,189 226,202" />
      <polygon class="shape-side" points="264,189 264,302 226,315 226,202" />
      <polygon class="shape-front" points="204,192 226,202 226,315 204,305" />
      <polygon class="shape-band band-one" points="204,236 226,246 226,275 204,266" />
      <polygon class="shape-band-side band-one" points="226,246 264,233 264,262 226,275" />
      <polygon class="shape-band band-two" points="204,214 226,224 226,246 204,236" />
      <polygon class="shape-band-side band-two" points="226,224 264,211 264,233 226,246" />
    </g>
    <g class="three-d-hotspot three-d-prism stacked-stack prism-offset-b" data-concept-tip="Ops segment is more balanced: Platform 33%, Services 31%, Expansion 19%.">
      <polygon class="shape-top" points="356,156 394,144 416,153 378,166" />
      <polygon class="shape-side" points="416,153 416,304 378,317 378,166" />
      <polygon class="shape-front" points="356,156 378,166 378,317 356,307" />
      <polygon class="shape-band band-one" points="356,236 378,246 378,277 356,267" />
      <polygon class="shape-band-side band-one" points="378,246 416,233 416,264 378,277" />
      <polygon class="shape-band band-two" points="356,200 378,210 378,246 356,236" />
      <polygon class="shape-band-side band-two" points="378,210 416,197 416,233 378,246" />
    </g>
    <g class="three-d-hotspot three-d-prism stacked-stack prism-offset-c" data-concept-tip="The narrow top slice shows a premium add-on with high margin but lower absolute contribution.">
      <polygon class="shape-top" points="520,210 558,198 580,207 542,220" />
      <polygon class="shape-side" points="580,207 580,298 542,311 542,220" />
      <polygon class="shape-front" points="520,210 542,220 542,311 520,301" />
      <polygon class="shape-band band-one" points="520,244 542,254 542,282 520,272" />
      <polygon class="shape-band-side band-one" points="542,254 580,241 580,269 542,282" />
      <polygon class="shape-band band-two" points="520,226 542,236 542,254 520,244" />
      <polygon class="shape-band-side band-two" points="542,236 580,223 580,241 542,254" />
    </g>
  </svg>
`;

const renderLineScene = (): string => `
  <svg class="three-d-scene" viewBox="0 0 760 380" role="img" aria-label="3D line concept preview">
    <polygon class="scene-floor" points="122,286 430,178 654,240 346,348" />
    <polyline class="scene-grid-line" points="164,270 472,162 622,204" />
    <polyline class="scene-grid-line" points="208,294 516,186 666,228" />
    <polyline class="scene-grid-line" points="250,318 558,210 708,252" />
    <polyline class="scene-axis-line" points="170,300 170,160 346,348" />
    <path class="scene-line-shadow" d="M174 278 L236 220 L302 242 L368 182 L434 212 L498 168 L572 192 L626 154" />
    <path class="scene-line" d="M174 278 L236 220 L302 242 L368 182 L434 212 L498 168 L572 192 L626 154" />
    <g class="three-d-hotspot" data-concept-tip="Forecast crossover appears here, where actual and target briefly converge.">
      <circle class="scene-line-point" cx="368" cy="182" r="9" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="Peak demand hit 92k at this point, triggering threshold-aware monitoring.">
      <circle class="scene-line-point" cx="498" cy="168" r="9" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="The final point closes higher, which is useful for premium end-state callouts.">
      <circle class="scene-line-point" cx="626" cy="154" r="9" />
    </g>
  </svg>
`;

const renderAreaScene = (): string => `
  <svg class="three-d-scene" viewBox="0 0 760 380" role="img" aria-label="3D area concept preview">
    <defs>
      <linearGradient id="area-fill" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#49a3ff" stop-opacity="0.82" />
        <stop offset="100%" stop-color="#1353d6" stop-opacity="0.12" />
      </linearGradient>
    </defs>
    <polygon class="scene-floor" points="122,286 430,178 654,240 346,348" />
    <polyline class="scene-grid-line" points="164,270 472,162 622,204" />
    <polyline class="scene-grid-line" points="208,294 516,186 666,228" />
    <polyline class="scene-grid-line" points="250,318 558,210 708,252" />
    <path class="scene-area-shadow" d="M174 292 L174 286 L236 244 L302 258 L368 194 L434 208 L500 170 L574 196 L636 176 L636 310 Z" />
    <path class="scene-area" d="M174 292 L174 286 L236 244 L302 258 L368 194 L434 208 L500 170 L574 196 L636 176 L636 310 Z" />
    <path class="scene-line" d="M174 286 L236 244 L302 258 L368 194 L434 208 L500 170 L574 196 L636 176" />
    <g class="three-d-hotspot" data-concept-tip="This ridge is where accumulated load crosses the desired runway band.">
      <circle class="scene-line-point" cx="500" cy="170" r="9" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="The terminal plateau is ideal for plan-vs-actual summaries in premium dashboards.">
      <circle class="scene-line-point" cx="636" cy="176" r="9" />
    </g>
  </svg>
`;

const renderSurfaceScene = (): string => `
  <svg class="three-d-scene" viewBox="0 0 760 380" role="img" aria-label="3D surface concept preview">
    <polygon class="scene-floor" points="126,300 426,188 644,246 344,360" />
    <g class="mesh-surface">
      <polygon class="mesh-cell mesh-cell-a" points="194,264 286,232 342,248 252,282" />
      <polygon class="mesh-cell mesh-cell-b" points="286,232 390,196 446,214 342,248" />
      <polygon class="mesh-cell mesh-cell-c" points="390,196 500,160 554,176 446,214" />
      <polygon class="mesh-cell mesh-cell-d" points="252,282 342,248 398,270 306,304" />
      <polygon class="mesh-cell mesh-cell-e" points="342,248 446,214 502,236 398,270" />
      <polygon class="mesh-cell mesh-cell-f" points="446,214 554,176 610,192 502,236" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="This ridge indicates a concentration peak, useful for anomaly or density reading.">
      <circle class="mesh-peak" cx="500" cy="160" r="11" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="The saddle zone marks a transition between dense and normal behavior.">
      <circle class="mesh-peak" cx="398" cy="270" r="9" />
    </g>
  </svg>
`;

const renderHeatmapScene = (): string => `
  <svg class="three-d-scene" viewBox="0 0 760 380" role="img" aria-label="3D heatmap concept preview">
    <polygon class="scene-floor" points="144,306 418,204 628,258 352,360" />
    <g class="heatmap-block-grid">
      <g class="three-d-hotspot" data-concept-tip="This hot cell compresses a high-density window and should be instantly visible in ops views.">
        <polygon class="block-top block-hot" points="260,210 298,196 322,206 282,220" />
        <polygon class="block-side block-hot" points="322,206 322,250 282,264 282,220" />
        <polygon class="block-front block-hot" points="260,210 282,220 282,264 260,254" />
      </g>
      <g class="three-d-hotspot" data-concept-tip="This medium cell is useful for contrast bands in performance matrices.">
        <polygon class="block-top block-warm" points="340,236 378,222 402,232 362,246" />
        <polygon class="block-side block-warm" points="402,232 402,264 362,278 362,246" />
        <polygon class="block-front block-warm" points="340,236 362,246 362,278 340,268" />
      </g>
      <g class="three-d-hotspot" data-concept-tip="Lower cells still carry information but stay visually subordinate.">
        <polygon class="block-top block-cool" points="420,258 458,244 482,254 442,268" />
        <polygon class="block-side block-cool" points="482,254 482,274 442,288 442,268" />
        <polygon class="block-front block-cool" points="420,258 442,268 442,288 420,278" />
      </g>
      <g class="three-d-hotspot" data-concept-tip="Another intense cluster creates a second hotspot for multi-zone analysis.">
        <polygon class="block-top block-hot" points="468,186 506,172 530,182 490,196" />
        <polygon class="block-side block-hot" points="530,182 530,236 490,250 490,196" />
        <polygon class="block-front block-hot" points="468,186 490,196 490,250 468,240" />
      </g>
    </g>
  </svg>
`;

const renderScatterScene = (): string => `
  <svg class="three-d-scene" viewBox="0 0 760 380" role="img" aria-label="3D scatter concept preview">
    <polygon class="scene-floor" points="126,298 430,190 644,248 342,356" />
    <polyline class="scene-grid-line" points="170,280 474,172 620,212" />
    <polyline class="scene-grid-line" points="214,306 518,198 664,238" />
    <g class="three-d-hotspot" data-concept-tip="Dense cluster around medium risk and high value.">
      <circle class="scatter-orb orb-a" cx="254" cy="232" r="13" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="Large bubble = high-value cohort with elevated uncertainty.">
      <circle class="scatter-orb orb-b" cx="388" cy="194" r="18" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="This outlier is exactly the kind of point users need to isolate quickly.">
      <circle class="scatter-orb orb-c" cx="548" cy="158" r="11" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="Geo-like scatter plots can re-use this depth model for spatial clustering.">
      <circle class="scatter-orb orb-d" cx="486" cy="248" r="15" />
    </g>
  </svg>
`;

const renderRadialScene = (): string => `
  <svg class="three-d-scene" viewBox="0 0 760 380" role="img" aria-label="3D radial concept preview">
    <ellipse class="radial-shadow" cx="378" cy="260" rx="162" ry="48" />
    <g class="three-d-hotspot" data-concept-tip="Primary slice owns the biggest share and should support drilldown cleanly.">
      <path class="radial-slice slice-a" d="M378 106 A162 74 0 0 1 508 154 L440 198 A82 36 0 0 0 378 170 Z" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="Secondary slice shows the comparison layer without overpowering the center metric.">
      <path class="radial-slice slice-b" d="M508 154 A162 74 0 0 1 430 240 L410 214 A82 36 0 0 0 440 198 Z" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="This arc segment is ideal for progress-style or composition-style reading.">
      <path class="radial-slice slice-c" d="M430 240 A162 74 0 0 1 258 224 L314 186 A82 36 0 0 0 410 214 Z" />
    </g>
    <ellipse class="radial-hole" cx="378" cy="186" rx="72" ry="32" />
    <text class="radial-center-label" data-three-d-number-node="true" x="378" y="190">100</text>
  </svg>
`;

const renderRadarScene = (): string => `
  <svg class="three-d-scene" viewBox="0 0 760 380" role="img" aria-label="3D radar concept preview">
    <polygon class="radar-web" points="378,104 500,150 524,244 378,292 232,244 256,150" />
    <polygon class="radar-web inner" points="378,138 462,168 476,232 378,262 280,232 294,168" />
    <g class="three-d-hotspot" data-concept-tip="Current capability profile with stronger commercial and delivery scores.">
      <polygon class="radar-shape radar-current" points="378,126 470,166 452,226 378,246 312,236 294,176" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="Target benchmark stays visible as a lighter comparison surface.">
      <polygon class="radar-shape radar-target" points="378,116 490,154 500,236 378,266 258,238 278,160" />
    </g>
  </svg>
`;

const renderGlobeScene = (): string => `
  <svg class="three-d-scene" viewBox="0 0 760 380" role="img" aria-label="3D globe concept preview">
    <circle class="globe-body" cx="380" cy="192" r="98" />
    <ellipse class="globe-ring" cx="380" cy="192" rx="132" ry="42" />
    <path class="globe-arc" d="M310 128 C344 178 416 206 458 246" />
    <path class="globe-arc" d="M338 114 C372 164 444 176 490 222" />
    <g class="three-d-hotspot" data-concept-tip="North America node with strong global demand and route activity.">
      <circle class="globe-point" cx="334" cy="150" r="9" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="Europe cluster acts as a cross-region relay point.">
      <circle class="globe-point" cx="386" cy="166" r="8" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="APAC route receives the strongest destination ribbon in this concept.">
      <circle class="globe-point" cx="446" cy="214" r="10" />
    </g>
  </svg>
`;

const renderFlowScene = (): string => `
  <svg class="three-d-scene" viewBox="0 0 760 380" role="img" aria-label="3D flow concept preview">
    <g class="three-d-hotspot" data-concept-tip="The main ribbon carries the dominant user journey through activation.">
      <path class="flow-ribbon ribbon-a" d="M142 142 C232 110 288 120 372 164 C450 204 496 210 618 190 L618 236 C504 252 448 246 370 208 C286 168 222 164 142 194 Z" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="The secondary ribbon shows a lower-volume detour worth investigating.">
      <path class="flow-ribbon ribbon-b" d="M162 236 C248 214 306 228 370 262 C438 296 492 300 596 286 L596 316 C490 328 432 322 360 286 C292 252 234 248 162 266 Z" />
    </g>
    <circle class="flow-node" cx="142" cy="168" r="22" />
    <circle class="flow-node" cx="378" cy="186" r="24" />
    <circle class="flow-node" cx="618" cy="212" r="24" />
  </svg>
`;

const renderFunnelScene = (): string => `
  <svg class="three-d-scene" viewBox="0 0 760 380" role="img" aria-label="3D funnel concept preview">
    <g class="three-d-hotspot" data-concept-tip="Top-of-funnel volume starts wide, which makes the first loss immediately visible.">
      <polygon class="funnel-stage stage-a" points="214,104 546,104 502,156 256,156" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="Qualification removes the lowest-fit segment and narrows the stage sharply.">
      <polygon class="funnel-stage stage-b" points="256,164 502,164 468,212 290,212" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="The last stage is the conversion pocket where high-intent volume remains.">
      <polygon class="funnel-stage stage-c" points="300,222 458,222 428,268 330,268" />
    </g>
    <polygon class="funnel-shadow" points="214,282 546,282 458,312 300,312" />
  </svg>
`;

const renderPyramidScene = (): string => `
  <svg class="three-d-scene" viewBox="0 0 760 380" role="img" aria-label="3D pyramid concept preview">
    <g class="three-d-hotspot" data-concept-tip="Top tier holds the most selective, highest-priority slice.">
      <polygon class="pyramid-tier tier-a" points="378,98 430,138 326,138" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="Middle layers hold the bulk of operational load and are ideal for mix comparisons.">
      <polygon class="pyramid-tier tier-b" points="326,148 430,148 476,192 280,192" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="Base layer anchors the total and preserves the hierarchy story.">
      <polygon class="pyramid-tier tier-c" points="280,202 476,202 534,260 222,260" />
    </g>
    <polygon class="pyramid-shadow" points="222,272 534,272 470,300 286,300" />
  </svg>
`;

const renderDashboardScene = (): string => `
  <svg class="three-d-scene" viewBox="0 0 760 380" role="img" aria-label="Isometric dashboard concept preview">
    <g class="three-d-hotspot" data-concept-tip="Primary KPI tile combines a number, sparkline, and status in one dashboard surface.">
      <polygon class="iso-top" points="184,154 286,122 380,154 276,188" />
      <polygon class="iso-side" points="380,154 380,234 276,270 276,188" />
      <polygon class="iso-front" points="184,154 276,188 276,270 184,236" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="Secondary card can host treemap, compact bars, or watchlist-style summaries.">
      <polygon class="iso-top alt" points="392,178 494,146 586,178 482,212" />
      <polygon class="iso-side alt" points="586,178 586,238 482,272 482,212" />
      <polygon class="iso-front alt" points="392,178 482,212 482,272 392,238" />
    </g>
    <g class="three-d-hotspot" data-concept-tip="Compact footer tile is ideal for alerts, drilldown entry points, or quick actions.">
      <polygon class="iso-top soft" points="310,240 402,210 470,236 378,266" />
      <polygon class="iso-side soft" points="470,236 470,284 378,314 378,266" />
      <polygon class="iso-front soft" points="310,240 378,266 378,314 310,288" />
    </g>
  </svg>
`;

const renderThreeDScene = (kind: ThreeDConceptKind): string => {
  switch (kind) {
    case "column":
      return renderColumnScene();
    case "stacked":
      return renderStackedScene();
    case "line":
      return renderLineScene();
    case "area":
      return renderAreaScene();
    case "surface":
      return renderSurfaceScene();
    case "heatmap":
      return renderHeatmapScene();
    case "scatter":
      return renderScatterScene();
    case "radial":
      return renderRadialScene();
    case "radar":
      return renderRadarScene();
    case "globe":
      return renderGlobeScene();
    case "flow":
      return renderFlowScene();
    case "funnel":
      return renderFunnelScene();
    case "pyramid":
      return renderPyramidScene();
    case "dashboard":
      return renderDashboardScene();
  }
};

export const renderThreeDConceptPreview = (example: PlaygroundExample): string => {
  const kind = resolveThreeDConceptKind(example.id);
  const meta = getThreeDConceptMeta(kind, example);
  const overlay = getThreeDOverlayMeta(kind);

  return `
    <div class="playground-proxy">
      <div class="playground-proxy-header">
        <p class="eyebrow">Concept Preview</p>
        <strong>${meta.title}</strong>
        <p>${meta.summary}</p>
      </div>
      <div class="three-d-concept" data-three-d-kind="${kind}">
        <div class="three-d-concept-controls">
          <button class="demo-toggle is-active" type="button" data-three-d-toggle="showNumber" aria-pressed="true">
            ${renderControlLabel("Show number", true)}
          </button>
          <button class="demo-toggle is-active" type="button" data-three-d-toggle="showLegend" aria-pressed="true">
            ${renderControlLabel("Show legend", true)}
          </button>
          <button class="demo-toggle is-active" type="button" data-three-d-toggle="showTooltip" aria-pressed="true">
            ${renderControlLabel("Show tooltip", true)}
          </button>
        </div>
        <div class="three-d-concept-stage" data-three-d-stage>
          <div class="three-d-concept-badge" data-three-d-number>
            <span>${overlay.numberLabel}</span>
            <strong>${overlay.numberValue}</strong>
          </div>
          ${renderThreeDScene(kind)}
          ${renderOverlayLegend(overlay)}
          <div class="three-d-concept-tooltip" data-three-d-tooltip hidden></div>
        </div>
        <div class="three-d-concept-insights">
          <article class="three-d-concept-card">
            <span>Business value</span>
            <strong>${meta.value}</strong>
          </article>
          <article class="three-d-concept-card">
            <span>Reading model</span>
            <strong>${meta.reading}</strong>
          </article>
          <article class="three-d-concept-card">
            <span>Interaction path</span>
            <strong>${meta.interactions}</strong>
          </article>
        </div>
      </div>
    </div>
  `;
};

export const attachThreeDConceptPreview = (root: HTMLElement): (() => void) => {
  const stage = root.querySelector<HTMLElement>("[data-three-d-stage]");
  const tooltip = root.querySelector<HTMLElement>("[data-three-d-tooltip]");
  const numberBadge = root.querySelector<HTMLElement>("[data-three-d-number]");
  const numberNodes = Array.from(root.querySelectorAll<SVGElement>("[data-three-d-number-node]"));
  const legend = root.querySelector<HTMLElement>("[data-three-d-legend]");
  const toggles = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-three-d-toggle]"));
  const hotspots = Array.from(root.querySelectorAll("[data-concept-tip]"));
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
      const key = button.dataset.threeDToggle as keyof typeof state | undefined;

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
      const key = button.dataset.threeDToggle as keyof typeof state | undefined;

      if (!key) {
        return;
      }

      state[key] = !state[key];
      syncState();
    };

    button.addEventListener("click", onClick);
    cleanupCallbacks.push(() => {
      button.removeEventListener("click", onClick);
    });
  });

  syncState();

  return () => {
    cleanupCallbacks.forEach((callback) => callback());
  };
};
