const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./line-chart-BLQK7Hfd.js","./axis-builder-CiiT57F9.js","./cartesian-geometry-DqqeBWSC.js","./interaction-eZvvt5V3.js","./value-labels-Bdwcs0Vi.js","./band-scale-Y_pGOAgR.js","./linear-scale-8nUEgydL.js","./area-chart-BcZpWCNr.js","./stacked-area-chart-D8Mvz__z.js","./bar-chart-Ia46wTOK.js","./bar-3d-chart-DlkuI-LM.js","./combo-chart-CcP1SH2C.js","./sparkline-chart-C15Jyx8x.js","./scatter-chart-_hFgnWX8.js","./gauge-chart-BswJlJW5.js","./radial-path-Cb_npizF.js","./donut-chart-mi61cuAT.js"])))=>i.map(i=>d[i]);
var Vt=Object.defineProperty;var Kt=(t,e,n)=>e in t?Vt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var g=(t,e,n)=>Kt(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const Qt=t=>t.toLowerCase().replace(/&/g,"and").replace(/[^\w\s-]/g,"").trim().replace(/\s+/g,"-"),Jt=(t,e,n)=>n.includes("3d")?`${t} for depth-rich dashboards, premium storytelling, or future 3D analytical workflows.`:e==="Widgets"?`${t} for compact KPI surfaces, monitoring cards, and dashboard-native visual summaries.`:e==="Statistical"?`${t} for distribution, density, variance, or statistical comparison workflows.`:e==="Financial"?`${t} for trading, forecasting, price movement, or financial operations analysis.`:e==="Flow"?`${t} for movement, conversion, dependency, or path-based analysis.`:e==="Hierarchical"?`${t} for nested structures, hierarchy navigation, and parent-child analysis.`:e==="Geospatial"?`${t} for map-friendly data, layered spatial analysis, and region-driven dashboards.`:e==="Hybrid"?`${t} for dashboard compositions that mix KPIs, states, forecasts, and chart context.`:e==="Timeline"?`${t} for schedules, milestones, sequencing, and time-window planning views.`:`${t} for trend, comparison, composition, or dashboard analysis workflows.`,E=(t,e,n)=>e.map(a=>({id:Qt(a),name:a,family:t,status:"planned",description:Jt(a,t,n),tags:[...n]})),Zt=[{id:"line",name:"Line",family:"Cartesian",status:"live",description:"Single or multi-series trend visualization with thresholds and live updates.",docsPath:"/charts/line",tags:["trend","dashboard"]},{id:"area",name:"Area",family:"Cartesian",status:"live",description:"Filled trend charts for volume, accumulation, and forecast-friendly visual comparisons.",docsPath:"/charts/area",tags:["trend","dashboard"]},{id:"bar",name:"Bar / Column",family:"Cartesian",status:"live",description:"Grouped categorical comparison charts with shared axis infrastructure.",docsPath:"/charts/bar",tags:["comparison","dashboard"]},{id:"bar-3d",name:"3D Bar",family:"3D",status:"live",description:"First live 3D chart in the core for depth-rich categorical comparisons and premium dashboard moments.",docsPath:"/charts/bar-3d",tags:["3d","dashboard","comparison"]},{id:"stacked-area",name:"Stacked Area",family:"Cartesian",status:"live",description:"Layered accumulation views for contribution over time and capacity composition.",docsPath:"/charts/stacked-area",tags:["trend","composition","dashboard"]},{id:"combo",name:"Mixed / Combo",family:"Cartesian",status:"live",description:"Column plus line or area combinations for dashboard comparisons and plan-vs-actual views.",docsPath:"/charts/combo",tags:["trend","comparison","dashboard"]},{id:"sparkline",name:"Sparkline",family:"Widgets",status:"live",description:"Compact trend visualization for KPI cards, dense monitoring layouts, and embedded summaries.",docsPath:"/charts/sparkline",tags:["widget","dashboard","kpi"]},{id:"scatter",name:"Scatter",family:"Analytical",status:"live",description:"Quantitative x/y plotting for correlation, clustering, and exploration.",docsPath:"/charts/scatter",tags:["analysis","correlation"]},{id:"gauge",name:"Radial Gauge",family:"Widgets",status:"live",description:"Velocity-meter style status chart for KPIs, health scores, thresholds, and monitoring panels.",docsPath:"/charts/gauge",tags:["widget","dashboard","kpi","radial"]},{id:"gauge-semicircle",name:"Semi Circular Gauge",family:"Widgets",status:"live",description:"Compact half-arc gauge designed for tight cards, monitoring strips, and status panels.",docsPath:"/charts/gauge-semicircle",tags:["widget","dashboard","kpi","radial"]},{id:"radial-progress",name:"Radial Progress",family:"Widgets",status:"live",description:"Minimal ring-style progress widget with threshold-aware coloring and centered KPI readout.",docsPath:"/charts/radial-progress",tags:["widget","dashboard","kpi","radial"]},{id:"thermometer",name:"Thermometer",family:"Widgets",status:"live",description:"Vertical level widget for occupancy, risk, or saturation-style monitoring use cases.",docsPath:"/charts/thermometer",tags:["widget","dashboard","kpi","monitoring"]},{id:"thermometer-horizontal",name:"Horizontal Thermometer",family:"Widgets",status:"live",description:"Horizontal fill meter for narrow dashboard strips and compact progress surfaces.",docsPath:"/charts/thermometer",tags:["widget","dashboard","kpi","monitoring"]},{id:"battery",name:"Battery Meter",family:"Widgets",status:"live",description:"Charge-style status widget for energy, SLA budget, and remaining capacity views.",docsPath:"/charts/battery",tags:["widget","dashboard","kpi","monitoring"]},{id:"pie",name:"Pie",family:"Radial",status:"live",description:"Part-to-whole radial chart for small category counts.",docsPath:"/charts/pie",tags:["radial","composition"]},{id:"donut",name:"Donut",family:"Radial",status:"live",description:"Center-label-friendly radial chart for summaries, status distributions, and dashboard cards.",docsPath:"/charts/donut",tags:["radial","dashboard","composition"]}],Yt=[...E("Cartesian",["Multi Line","Spline","Step Line","Step Area","Range Area","Range Bar","Horizontal Bar","Stacked Bar","Grouped Column","Stacked Column","100% Stacked Column","100% Stacked Bar","Overlay Column","Overlay Bar","Lollipop","Dumbbell","Waterfall","Marimekko","Mosaic","Bullet Column","Bullet Bar","Dot Plot","Connected Dot Plot","Deviation Bar","Variance Bar","Bump Chart","Slope Chart","Population Pyramid","Stream Graph","Ridgeline Chart"],["trend","comparison"]),...E("Statistical",["Bubble","Packed Bubble","Hexbin","Histogram","Density Plot","KDE Curve","Box Plot","Violin Plot","Strip Plot","Swarm Plot","QQ Plot","ECDF Plot","Error Bar","Error Line","Error Scatter","Parallel Coordinates","Contour Plot","Heatmap","Calendar Heatmap","Matrix Heatmap","Correlation Matrix","Cluster Map","Distribution Strip","Funnel Histogram","Tornado Plot","Control Chart","Pareto","Pareto Line","Run Chart","Seasonality Plot"],["statistical","analysis"]),...E("Financial",["Candlestick","OHLC","HLC","Kagi","Renko","Heikin-Ashi","Volume Profile","Footprint Chart","Depth Chart","Baseline Chart","Range Candle","Area Candle","Spread Chart","Yield Curve","Intraday Timeline","Price Channel","Bollinger Overlay","Moving Average Ribbon","Drawdown Chart","MACD Panel","RSI Panel","Order Flow Ladder","PnL Curve","Scenario Waterfall","Forecast Cone"],["financial","time-series"]),...E("Hierarchical",["Treemap","Treemap Heat","Nested Treemap","Sunburst","Icicle","Partition","Adjacency Matrix","Circle Packing","Hierarchy Path","Hierarchy Breadcrumb","Tree","Indented Tree","Radial Tree","Org Chart Foundation","Cluster Dendrogram","Radial Cluster","Nested Categories","Grouped Circle Pack","Decision Tree View","Entity Hierarchy Map"],["hierarchy","structure"]),...E("Flow",["Sankey","Alluvial","Chord Diagram","Dependency Flow","Process Flow","User Journey Flow","Transition Matrix","Arc Diagram","Network Graph","Force Graph","Bipartite Graph","Node-Link Tree","Sequence Sankey","Ribbon Flow","Funnel Flow","Conversion Path","Migration Flow","Supply Chain Flow","Route Flow","Energy Flow","Stream Sankey","Clustered Sankey","Circular Sankey","Token Flow","Relationship Map"],["flow","network"]),...E("Widgets",["Linear Gauge","Horizontal Gauge","Vertical Gauge","Spark Column","Spark Bar","Spark Win Loss","KPI Tile","KPI + Sparkline","KPI + Gauge","KPI + Trend Delta","Status Card","Monitoring Panel","Threshold Panel","Bullet Graph","Progress Ring","Progress Bar","Scorecard","Goal Tracker","Variance Tile","Mini Area","Mini Donut","Mini Waterfall","Mini Heatmap","Status Timeline","Alert Stack","Incident Strip"],["widget","dashboard","kpi"]),...E("Geospatial",["Point Map","Bubble Map","Choropleth","Symbol Map","Route Map","Region Heatmap","Hex Map","Tile Map","Cartogram Foundation","Flow Map","Proportional Symbol Map","Marker Cluster Map","Geo Timeline","Venue Map","Topology Layer","Region Drilldown Map","Geo Density Map","Connection Map","Floorplan Overlay","Spatial Scatter"],["geo","map"]),...E("3D",["3D Column","3D Stacked Bar","3D Stacked Column","3D Line","3D Area","3D Surface","3D Mesh","3D Scatter","3D Bubble","3D Heatmap","3D Treemap","3D Donut","3D Pie","3D Radar","3D Globe Plot","3D Geo Scatter","3D Flow Ribbon","3D Funnel","3D Pyramid","Isometric Dashboard Card","Depth Column","Depth Area","Perspective Combo","3D KPI Panel"],["3d","dashboard"]),...E("Timeline",["Timeline","Range Timeline","Gantt Foundation","Roadmap Timeline","Milestone Track","Swimlane Timeline","Availability Timeline","Calendar Strip","Resource Gantt","Dependency Timeline","Release Timeline","Incident Timeline","Capacity Timeline","Project Burndown","Project Burnup"],["timeline","planning"]),...E("Hybrid",["Forecast Overlay Chart","Anomaly Detection Panel","Prediction Band Chart","Confidence Ribbon","Benchmark Comparison Tile","Goal vs Actual Panel","KPI + Threshold Hybrid","KPI + Forecast Hybrid","Ops Command Card","Finance Summary Hybrid","Retention Cohort Grid","Funnel + Trend Hybrid","Geo + KPI Hybrid","Alert Severity Matrix","Pipeline Health Board","Experiment Result Board","Quality Score Radar","Support Queue Cockpit","Inventory Risk Board","SLA Compliance Board"],["hybrid","dashboard"])],z=[...Zt,...Yt],Y={total:z.length,live:z.filter(t=>t.status==="live").length,planned:z.filter(t=>t.status==="planned").length,threeD:z.filter(t=>t.tags.includes("3d")).length,families:new Set(z.map(t=>t.family)).size},Xt="modulepreload",en=function(t,e){return new URL(t,e).href},tt={},$=function(e,n,a){let r=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.allSettled(n.map(o=>{if(o=en(o,a),o in tt)return;tt[o]=!0;const d=o.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(!!a)for(let u=l.length-1;u>=0;u--){const f=l[u];if(f.href===o&&(!d||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${m}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":Xt,d||(p.as="script"),p.crossOrigin="",p.href=o,c&&p.setAttribute("nonce",c),document.head.appendChild(p),d)return new Promise((u,f)=>{p.addEventListener("load",u),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}function i(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return r.then(l=>{for(const s of l||[])s.status==="rejected"&&i(s.reason);return e().catch(i)})},wt={line:async()=>(await $(async()=>{const{lineChart:t}=await import("./line-chart-BLQK7Hfd.js");return{lineChart:t}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)).lineChart,area:async()=>(await $(async()=>{const{areaChart:t}=await import("./area-chart-BcZpWCNr.js");return{areaChart:t}},__vite__mapDeps([7,1,2,3,4,5,6]),import.meta.url)).areaChart,"stacked-area":async()=>(await $(async()=>{const{stackedAreaChart:t}=await import("./stacked-area-chart-D8Mvz__z.js");return{stackedAreaChart:t}},__vite__mapDeps([8,1,2,3,4,5,6]),import.meta.url)).stackedAreaChart,bar:async()=>(await $(async()=>{const{barChart:t}=await import("./bar-chart-Ia46wTOK.js");return{barChart:t}},__vite__mapDeps([9,1,3,4,5,6]),import.meta.url)).barChart,"bar-3d":async()=>(await $(async()=>{const{bar3DChart:t}=await import("./bar-3d-chart-DlkuI-LM.js");return{bar3DChart:t}},__vite__mapDeps([10,1,3,4,5,6]),import.meta.url)).bar3DChart,combo:async()=>(await $(async()=>{const{comboChart:t}=await import("./combo-chart-CcP1SH2C.js");return{comboChart:t}},__vite__mapDeps([11,1,2,3,4,5,6]),import.meta.url)).comboChart,sparkline:async()=>(await $(async()=>{const{sparklineChart:t}=await import("./sparkline-chart-C15Jyx8x.js");return{sparklineChart:t}},__vite__mapDeps([12,2,3,4,5,6]),import.meta.url)).sparklineChart,scatter:async()=>(await $(async()=>{const{scatterChart:t}=await import("./scatter-chart-_hFgnWX8.js");return{scatterChart:t}},__vite__mapDeps([13,1,3,4,6]),import.meta.url)).scatterChart,gauge:async()=>(await $(async()=>{const{gaugeChart:t}=await import("./gauge-chart-BswJlJW5.js");return{gaugeChart:t}},__vite__mapDeps([14,3,15]),import.meta.url)).gaugeChart,"gauge-semicircle":async()=>(await $(async()=>{const{semicircleGaugeChart:t}=await import("./gauge-chart-BswJlJW5.js");return{semicircleGaugeChart:t}},__vite__mapDeps([14,3,15]),import.meta.url)).semicircleGaugeChart,"radial-progress":async()=>(await $(async()=>{const{radialProgressChart:t}=await import("./gauge-chart-BswJlJW5.js");return{radialProgressChart:t}},__vite__mapDeps([14,3,15]),import.meta.url)).radialProgressChart,thermometer:async()=>(await $(async()=>{const{thermometerChart:t}=await import("./gauge-chart-BswJlJW5.js");return{thermometerChart:t}},__vite__mapDeps([14,3,15]),import.meta.url)).thermometerChart,"thermometer-horizontal":async()=>(await $(async()=>{const{thermometerHorizontalChart:t}=await import("./gauge-chart-BswJlJW5.js");return{thermometerHorizontalChart:t}},__vite__mapDeps([14,3,15]),import.meta.url)).thermometerHorizontalChart,battery:async()=>(await $(async()=>{const{batteryChart:t}=await import("./gauge-chart-BswJlJW5.js");return{batteryChart:t}},__vite__mapDeps([14,3,15]),import.meta.url)).batteryChart,pie:async()=>(await $(async()=>{const{pieChart:t}=await import("./donut-chart-mi61cuAT.js");return{pieChart:t}},__vite__mapDeps([16,3,4,15]),import.meta.url)).pieChart,donut:async()=>(await $(async()=>{const{donutChart:t}=await import("./donut-chart-mi61cuAT.js");return{donutChart:t}},__vite__mapDeps([16,3,4,15]),import.meta.url)).donutChart},tn=Object.keys(wt),ie=(t,e,n)=>Math.min(n,Math.max(e,t)),nn=t=>t.reduce((e,n)=>e+n,0),Zi=(t,e,n=.08)=>{if(t===e){const i=t===0?1:Math.abs(t)*.2;return[t-i,e+i]}const r=(e-t)*n;return[t-r,e+r]},Yi=t=>new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:t>=100?0:1}).format(t),Xi=(t,e,n,a)=>({x:t+n*Math.cos(a-Math.PI/2),y:e+n*Math.sin(a-Math.PI/2)}),xt=new Set(["gauge","gauge-semicircle","radial-progress","thermometer","thermometer-horizontal","battery"]),X=t=>t==="bar"||t==="bar-3d"?"bar":t==="area"||t==="stacked-area"?"area":t==="scatter"?"scatter":"line",Te=t=>Array.isArray(t)&&(t.length===0||t.every(e=>typeof e=="number")),Pe=t=>typeof t=="object"&&t!==null&&!Array.isArray(t)&&Object.values(t).every(e=>typeof e=="number"),kt=t=>Array.isArray(t)&&(t.length===0||t.every(e=>typeof e=="object"&&e!==null&&"data"in e&&Array.isArray(e.data))),nt=t=>Array.isArray(t)&&(t.length===0||t.every(e=>typeof e=="object"&&e!==null&&"value"in e&&"label"in e&&!("data"in e))),Ct=t=>Array.isArray(t)&&(t.length===0||t.every(e=>typeof e=="object"&&e!==null&&"value"in e&&"label"in e&&!("data"in e))),an=t=>{const e=[...t.labels??[]];if(Te(t.data)){const n=e.length>0?e:t.data.map((a,r)=>`Point ${r+1}`);return{kind:"cartesian",labels:n,series:[{kind:"cartesian",id:"series-0",name:"Series 1",type:X(t.type),data:t.data.map((a,r)=>({index:r,x:n[r]??`Point ${r+1}`,label:n[r]??`Point ${r+1}`,y:a}))}]}}if(Pe(t.data)){const n=Object.keys(t.data),a=Object.values(t.data);return{kind:"cartesian",labels:n,series:[{kind:"cartesian",id:"series-0",name:"Series 1",type:X(t.type),data:a.map((r,i)=>({index:i,x:n[i]??`Point ${i+1}`,label:n[i]??`Point ${i+1}`,y:r}))}]}}if(Array.isArray(t.data)){const n=t.data,a=e.length>0?e:n.map((r,i)=>typeof r=="number"?`Point ${i+1}`:"y"in r?r.label??String(r.x??`Point ${i+1}`):r.label??`Point ${i+1}`);return{kind:"cartesian",labels:a,series:[{kind:"cartesian",id:"series-0",name:"Series 1",type:X(t.type),data:n.map((r,i)=>typeof r=="number"?{index:i,x:a[i]??`Point ${i+1}`,label:a[i]??`Point ${i+1}`,y:r}:"y"in r?{index:i,x:r.x??a[i]??`Point ${i+1}`,label:r.label??a[i]??`Point ${i+1}`,y:r.y}:{index:i,x:r.label??a[i]??`Point ${i+1}`,label:r.label??a[i]??`Point ${i+1}`,y:r.value})}]}}return{kind:"cartesian",labels:[],series:[{kind:"cartesian",id:"series-0",name:"Series 1",type:X(t.type),data:[]}]}},St=t=>{var r,i,l;if(!kt(t.series))return an(t);const e=(r=t.labels)!=null&&r.length?[...t.labels]:((i=t.series[0])==null?void 0:i.data.map((s,c)=>typeof s=="number"?`Point ${c+1}`:s.label??String(s.x??`Point ${c+1}`)))??[],n=t.series.map((s,c)=>({kind:"cartesian",id:s.id??`series-${c}`,name:s.name??`Series ${c+1}`,color:s.color,type:s.type??X(t.type),data:s.data.map((o,d)=>typeof o=="number"?{index:d,x:e[d]??`Point ${d+1}`,label:e[d]??`Point ${d+1}`,y:o}:{index:d,x:o.x??e[d]??`Point ${d+1}`,label:o.label??e[d]??`Point ${d+1}`,y:o.y})}));return{kind:"cartesian",labels:e.length>0?e:((l=n[0])==null?void 0:l.data.map(s=>s.label))??[],series:n}},Tt=t=>{const n=(nt(t.series)?t.series:nt(t.data)?t.data:Pe(t.data)?Object.entries(t.data).map(([a,r])=>({label:a,value:r})):Ct(t.data)?t.data:Te(t.data)?t.data.map((a,r)=>({label:`Slice ${r+1}`,value:a})):[]).map((a,r)=>{const i=typeof a.id=="string"?a.id:void 0,l=typeof a.color=="string"?a.color:void 0;return{id:i??`slice-${r}`,label:a.label,value:a.value,color:l}});return{kind:"radial",mode:t.type==="pie"?"pie":"donut",slices:n,total:nn(n.map(a=>a.value))}},rn=t=>{var e,n;if(kt(t.series)){const a=t.series[0],r=a==null?void 0:a.data[0];if(a&&r!==void 0)return typeof r=="number"?{value:r,label:a.name??"Value",color:a.color}:{value:r.y,label:r.label??a.name??"Value",color:a.color}}if(Ct(t.data)){const a=t.data[0];if(a)return{value:a.value,label:a.label,color:a.color}}if(Te(t.data))return{value:t.data[0]??0,label:((e=t.labels)==null?void 0:e[0])??"Value"};if(Pe(t.data)){const[a,r]=Object.entries(t.data)[0]??["Value",0];return{value:r,label:a}}return{value:0,label:((n=t.labels)==null?void 0:n[0])??"Value"}},sn=t=>{var m,h,p;const e=t.gauge,n=(e==null?void 0:e.min)??0,a=(e==null?void 0:e.max)??100,r=a-n||1,i=rn(t),l=ie(i.value,n,a),s=ie((l-n)/r,0,1),c=(m=e==null?void 0:e.bands)!=null&&m.length?e.bands.map((u,f)=>({id:`band-${f}`,from:ie(u.from,n,a),to:ie(u.to,n,a),color:u.color??"#2563eb",label:u.label??`Band ${f+1}`})):[{id:"band-0",from:n,to:a,color:"#2563eb",label:"Value"}],o=i.color??((h=c.find(u=>l>=u.from&&l<=u.to))==null?void 0:h.color)??((p=c[c.length-1])==null?void 0:p.color)??"#2563eb",d=e!=null&&e.valueFormatter?e.valueFormatter(l):`${Number.isInteger(l)?l:l.toFixed(1)}${(e==null?void 0:e.unit)??""}`;return{kind:"gauge",value:l,min:n,max:a,ratio:s,label:(e==null?void 0:e.label)||i.label,unit:(e==null?void 0:e.unit)??"",formattedValue:d,startAngle:(e==null?void 0:e.startAngle)??Math.PI*5/4,endAngle:(e==null?void 0:e.endAngle)??Math.PI*11/4,needle:(e==null?void 0:e.needle)??!0,trackColor:e==null?void 0:e.trackColor,color:o,segments:c}},on=t=>t.type==="donut"||t.type==="pie"?Tt(t):xt.has(t.type)?sn(t):St(t),ln=t=>St(t).series.map(n=>({id:n.id,name:n.name,color:n.color,type:n.type,data:n.data.map(a=>({x:a.x,y:a.y,label:a.label}))})),cn=t=>Tt(t).slices.map(n=>({id:n.id,label:n.label,value:n.value,color:n.color})),at=(t,e)=>{var l,s,c;if(xt.has(t.type)){const o=typeof e=="number"?e:e.value??e.y??0,d=typeof e=="object"?e.label??((l=t.gauge)==null?void 0:l.label)??"Value":((s=t.gauge)==null?void 0:s.label)??"Value",m=typeof e=="object"?e.color:void 0;t.data=[{label:d,value:o,...m?{color:m}:{}}],t.series=void 0,t.labels=[d];return}if(t.type==="pie"||t.type==="donut"){const o=cn(t),d=typeof e=="number"?e:e.value??e.y??0;o.push({id:`slice-${o.length}`,label:typeof e=="number"?`Slice ${o.length+1}`:e.label??`Slice ${o.length+1}`,value:d,color:typeof e=="object"?e.color:void 0}),t.data=o,t.series=void 0;return}const n=ln(t);n.length===0&&n.push({id:"series-0",name:"Series 1",type:t.type==="bar"?"bar":t.type==="area"?"area":t.type==="scatter"?"scatter":"line",data:[]});const a=n[0],r=typeof e=="number"?`Point ${a.data.length+1}`:e.label??`Point ${a.data.length+1}`;typeof e=="number"?a.data.push({label:r,y:e}):Array.isArray(e.values)?n.forEach((o,d)=>{var m;o.data.push({label:r,y:((m=e.values)==null?void 0:m[d])??0})}):e.seriesId&&n.length>1?n.forEach(o=>{o.data.push({label:r,y:o.id===e.seriesId?e.value??e.y??0:0})}):a.data.push({label:r,y:e.value??e.y??0});const i=((c=t.realtime)==null?void 0:c.maxPoints)??0;i>0&&n.forEach(o=>{o.data.length>i&&(o.data=o.data.slice(-i))}),t.series=n,t.data=void 0,t.labels=a.data.map(o=>typeof o=="number"?"":o.label??"")};class dn{constructor(){g(this,"handlers",new Map)}on(e,n){var a;return this.handlers.has(e)||this.handlers.set(e,new Set),(a=this.handlers.get(e))==null||a.add(n),()=>{var r;(r=this.handlers.get(e))==null||r.delete(n)}}emit(e,n){var a;(a=this.handlers.get(e))==null||a.forEach(r=>{r(n)})}clear(){this.handlers.clear()}}const K=t=>t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"),rt=(t,e,n)=>Math.min(Math.max(t,e),n);class hn{constructor(e,n){g(this,"container");g(this,"events");g(this,"tooltip",document.createElement("div"));g(this,"config");g(this,"activeTarget");g(this,"setRelativePosition",!1);g(this,"handlePointerMove",e=>{var r;if(!((r=this.config)!=null&&r.interaction.enabled))return;const n=this.resolveInteractiveElement(e.target);if(!n){this.clearActiveTarget();return}const a=this.readPayload(n);if(!a){this.clearActiveTarget();return}this.activateTarget(n,a),this.config.interaction.tooltip&&this.showTooltip(a,e.clientX,e.clientY)});g(this,"handlePointerLeave",()=>{this.clearActiveTarget()});g(this,"handleClick",e=>{var r;if(!((r=this.config)!=null&&r.interaction.enabled)||!this.config.interaction.click)return;const n=this.resolveInteractiveElement(e.target);if(!n)return;const a=this.readPayload(n);a&&(this.events.emit("interaction:click",a),a.kind==="datum"&&this.events.emit("point:click",a),a.kind==="slice"&&this.events.emit("slice:click",a),a.kind==="gauge"&&this.events.emit("gauge:click",a))});this.container=e,this.events=n,this.tooltip.dataset.infinityChartsTooltip="true",this.tooltip.className="infinity-chart-tooltip",this.tooltip.setAttribute("aria-hidden","true"),this.tooltip.style.position="absolute",this.tooltip.style.pointerEvents="none",this.tooltip.style.zIndex="12",this.tooltip.style.minWidth="160px",this.tooltip.style.maxWidth="280px",this.tooltip.style.padding="12px 14px",this.tooltip.style.borderRadius="14px",this.tooltip.style.border="1px solid transparent",this.tooltip.style.boxSizing="border-box",this.tooltip.style.backdropFilter="blur(16px)",this.tooltip.style.opacity="0",this.tooltip.style.transform="translateY(8px)",this.tooltip.style.transition="opacity 160ms ease, transform 160ms ease",this.tooltip.style.whiteSpace="normal",this.ensureContainerPositioning(),this.installListeners(),this.container.append(this.tooltip)}update(e){this.config=e,this.tooltip.style.background=e.theme.tooltipBackground,this.tooltip.style.color=e.theme.tooltipText,this.tooltip.style.borderColor=e.theme.border,this.tooltip.style.boxShadow=e.theme.shadow,this.tooltip.style.fontFamily=e.theme.fontFamily,this.tooltip.style.fontSize=`${e.theme.fontSize}px`,e.interaction.enabled||this.clearActiveTarget(!1)}destroy(){this.container.removeEventListener("mousemove",this.handlePointerMove),this.container.removeEventListener("mouseleave",this.handlePointerLeave),this.container.removeEventListener("click",this.handleClick),this.clearActiveTarget(!1),this.tooltip.remove(),this.setRelativePosition&&this.container.style.removeProperty("position")}ensureContainerPositioning(){typeof window>"u"||window.getComputedStyle(this.container).position==="static"&&(this.container.style.position="relative",this.setRelativePosition=!0)}installListeners(){this.container.addEventListener("mousemove",this.handlePointerMove),this.container.addEventListener("mouseleave",this.handlePointerLeave),this.container.addEventListener("click",this.handleClick)}activateTarget(e,n){var i,l,s;if(((i=this.activeTarget)==null?void 0:i.element)===e)return;this.clearActiveTarget(!1);const a=e instanceof HTMLElement||e instanceof SVGElement?e.style.getPropertyValue("filter"):"",r=e instanceof HTMLElement||e instanceof SVGElement?e.style.getPropertyValue("opacity"):"";if(((l=this.config)==null?void 0:l.interaction.hover)!==!1&&(e instanceof HTMLElement||e instanceof SVGElement)){const c=((s=this.config)==null?void 0:s.theme.interactiveGlow)??"rgba(37, 99, 235, 0.22)";e.style.setProperty("filter",`brightness(1.08) saturate(1.08) drop-shadow(0 12px 24px ${c})`),r||e.style.setProperty("opacity","1")}this.activeTarget={element:e,payload:n,filter:a,opacity:r},this.events.emit("interaction:hover",n),n.kind==="datum"&&this.events.emit("point:hover",n)}clearActiveTarget(e=!0){this.activeTarget&&(this.activeTarget.element instanceof HTMLElement||this.activeTarget.element instanceof SVGElement)&&(this.activeTarget.element.style.setProperty("filter",this.activeTarget.filter),this.activeTarget.opacity?this.activeTarget.element.style.setProperty("opacity",this.activeTarget.opacity):this.activeTarget.element.style.removeProperty("opacity")),e&&this.activeTarget&&this.events.emit("interaction:leave",this.activeTarget.payload),this.activeTarget=void 0,this.hideTooltip()}showTooltip(e,n,a){const r=[e.seriesName&&e.label!==e.seriesName?["Series",e.seriesName]:void 0,e.value!==void 0?["Value",String(e.value)]:void 0,e.secondaryValue!==void 0?["Compare",String(e.secondaryValue)]:void 0,e.detail?["Context",e.detail]:void 0].filter(u=>!!u),i=e.label??e.seriesName??e.chartType,l=e.color?`<span style="display:inline-block;width:10px;height:10px;border-radius:999px;background:${K(e.color)};"></span>`:"";this.tooltip.innerHTML=`
      <div style="display:flex;align-items:center;gap:8px;font-weight:700;font-size:1em;margin-bottom:${r.length>0?"8px":"0"};">
        ${l}
        <span>${K(i)}</span>
      </div>
      ${r.map(([u,f])=>{var v;return`
            <div style="display:flex;justify-content:space-between;gap:12px;margin-top:6px;">
              <span style="color:${K(((v=this.config)==null?void 0:v.theme.mutedText)??"#64748b")};">${K(u)}</span>
              <strong style="font-weight:600;">${K(f)}</strong>
            </div>
          `}).join("")}
    `;const s=this.container.getBoundingClientRect(),c=16,o=16,d=this.tooltip.offsetWidth||220,m=this.tooltip.offsetHeight||96,h=rt(n-s.left+o,c,Math.max(c,s.width-d-c)),p=rt(a-s.top+o,c,Math.max(c,s.height-m-c));this.tooltip.style.left=`${h}px`,this.tooltip.style.top=`${p}px`,this.tooltip.style.opacity="1",this.tooltip.style.transform="translateY(0)"}hideTooltip(){this.tooltip.style.opacity="0",this.tooltip.style.transform="translateY(8px)"}resolveInteractiveElement(e){return e instanceof Element?e.closest("[data-ic-interactive='true']"):null}readPayload(e){const n=e.getAttribute("data-ic-payload");if(n)try{return JSON.parse(n)}catch{return}}}const G=(t,e,n,a)=>({x:t,y:e,width:Math.max(0,n),height:Math.max(0,a)}),un=(t,e,n)=>{const{padding:a,plotPadding:r}=t.layout,i=G(0,0,e.width,e.height),l=n.kind==="radial"||n.kind==="gauge",s=t.title.text||t.title.subtitle?t.title.subtitle?58:40:0,c=a.left,o=a.top,d=e.width-a.left-a.right,m=e.height-a.top-a.bottom;let h=c,p=o+s,u=d,f=m-s,v;if(t.legend.show&&(n.kind==="cartesian"&&n.series.length>0||n.kind==="radial"&&n.slices.length>0||n.kind==="gauge"&&n.segments.length>0))if(t.legend.position==="right")v=G(e.width-a.right-164,p+8,156,Math.max(0,f-16)),u-=v.width+12;else if(t.legend.position==="left")v=G(a.left+8,p+8,156,Math.max(0,f-16)),h+=v.width+12,u-=v.width+12;else{const N=l?30:36,V=l?36:44;v=G(h+8,e.height-a.bottom-V,Math.max(0,u-16),N),f-=V}const I=t.type==="sparkline",b=l?{top:Math.min(r.top,4),right:Math.min(r.right,4),bottom:Math.min(r.bottom,4),left:Math.min(r.left,4)}:r,S=n.kind==="cartesian"&&t.yAxis.show&&!I?56:l?0:8,_=n.kind==="cartesian"&&t.xAxis.show&&!I?42:l?0:8,T=l?8:12,M=G(h+S+b.left,p+b.top,u-S-T-b.left-b.right,f-_-b.top-b.bottom);return{outer:i,header:G(c,o,d,s),body:G(h,p,u,f),plot:M,legend:v}};class pn{constructor(e=[]){g(this,"plugins",new Map);e.forEach(n=>this.register(n))}register(e){this.plugins.set(e.id,e)}invoke(e,n){this.plugins.forEach(a=>{var r,i;(i=(r=a.hooks)==null?void 0:r[e])==null||i.call(r,n)})}list(){return[...this.plugins.values()]}}class mn{constructor(){g(this,"frameId",0);g(this,"queued",new Set)}schedule(e,n){this.queued.add(e),this.frameId===0&&(this.frameId=window.requestAnimationFrame(()=>{const a=[...this.queued.values()];this.queued.clear(),this.frameId=0,n(a)}))}flush(e){if(this.queued.size===0)return;const n=[...this.queued.values()];this.queued.clear(),this.frameId!==0&&(window.cancelAnimationFrame(this.frameId),this.frameId=0),e(n)}destroy(){this.frameId!==0&&window.cancelAnimationFrame(this.frameId),this.frameId=0,this.queued.clear()}}const es=(t,e=[],n={},a={})=>({id:t,kind:"group",attrs:n,style:a,children:e}),be=(t,e,n={})=>({id:t,kind:"rect",attrs:e,style:n}),ts=(t,e,n={})=>({id:t,kind:"path",attrs:e,style:n}),it=(t,e,n,a={})=>({id:t,kind:"text",attrs:n,style:a,textContent:e}),ns=(t,e,n={})=>({id:t,kind:"line",attrs:e,style:n}),as=(t,e,n={})=>({id:t,kind:"circle",attrs:e,style:n}),ye="http://www.w3.org/2000/svg",gn={group:"g",rect:"rect",path:"path",text:"text",line:"line",circle:"circle"};class fn{constructor(){g(this,"svg");g(this,"container");g(this,"attrCache",new WeakMap);g(this,"styleCache",new WeakMap);g(this,"previousChartTypeClass");g(this,"previousThemeClass");this.svg=document.createElementNS(ye,"svg"),this.svg.setAttribute("xmlns",ye),this.svg.setAttribute("preserveAspectRatio","xMidYMid meet"),this.svg.style.display="block",this.svg.style.width="100%",this.svg.style.height="100%"}mount(e){this.container=e,e.innerHTML="",e.classList.add("infinity-chart-host"),e.append(this.svg)}resize(e,n){this.svg.setAttribute("viewBox",`0 0 ${e} ${n}`),this.svg.setAttribute("width",String(e)),this.svg.setAttribute("height",String(n))}render(e,n){this.applyRootClasses(n.chartType,n.themeMode),this.svg.style.background=n.background??"transparent",this.svg.setAttribute("role","img"),this.svg.setAttribute("aria-label",n.ariaLabel??"Infinity chart"),this.syncChildren(this.svg,e,n.animation)}destroy(){this.svg.remove()}applyRootClasses(e="chart",n="light"){const a=e.replace(/[^a-z0-9]+/gi,"-").toLowerCase(),r=`infinity-chart-host--${a}`,i=`infinity-chart-theme--${n}`;this.container&&(this.previousChartTypeClass&&this.container.classList.remove(this.previousChartTypeClass),this.previousThemeClass&&this.container.classList.remove(this.previousThemeClass),this.container.classList.add(r,i),this.container.dataset.infinityChartType=e,this.container.dataset.infinityChartTheme=n),this.svg.setAttribute("class",`infinity-chart-svg infinity-chart-svg--${a} infinity-chart-theme--${n}`),this.svg.dataset.infinityChartType=e,this.svg.dataset.infinityChartTheme=n,this.previousChartTypeClass=r,this.previousThemeClass=i}syncChildren(e,n,a){const r=new Map;Array.from(e.children).forEach(s=>{const c=s,o=c.dataset.sceneId;o&&r.set(o,c)});let i=e.firstChild;const l=new Set;n.forEach(s=>{const c=gn[s.kind];let o=r.get(s.id);const d=!o||o.tagName.toLowerCase()!==c;if(d&&(o==null||o.remove(),o=document.createElementNS(ye,c),o.dataset.sceneId=s.id),!!o){if(this.applyNode(o,s,a,d),i!==o&&e.insertBefore(o,i),l.add(s.id),s.kind!=="text")if(s.children&&s.children.length>0)this.syncChildren(o,s.children,a);else for(;o.firstChild;)o.removeChild(o.firstChild);i=o.nextSibling}}),r.forEach((s,c)=>{l.has(c)||s.remove()})}applyNode(e,n,a,r){this.applyAttributes(e,n.attrs??{}),this.applyStyles(e,{...a.enabled&&n.kind!=="group"?{transition:`opacity ${a.duration}ms ${a.easing}, fill ${a.duration}ms ${a.easing}, stroke ${a.duration}ms ${a.easing}, transform ${a.duration}ms ${a.easing}, filter 160ms ease`}:{},...n.style??{}}),n.kind==="text"&&(e.textContent=n.textContent??""),r&&this.animateNodeEntry(e,n,a)}applyAttributes(e,n){const a=this.attrCache.get(e)??new Set,r=new Set;Object.entries(n).forEach(([i,l])=>{l==null||l===!1||(e.setAttribute(i,String(l)),r.add(i))}),a.forEach(i=>{r.has(i)||e.removeAttribute(i)}),this.attrCache.set(e,r)}applyStyles(e,n){const a=this.styleCache.get(e)??new Set,r=new Set;Object.entries(n).forEach(([i,l])=>{l!==void 0&&(e.style.setProperty(i,String(l)),r.add(i))}),a.forEach(i=>{r.has(i)||e.style.removeProperty(i)}),this.styleCache.set(e,r)}animateNodeEntry(e,n,a){if(!a.enabled||typeof e.animate!="function"||n.kind==="group")return;const r=Math.max(0,a.stagger);if(n.kind==="path"&&e.getAttribute("fill")==="none"){const i=e;if(typeof i.getTotalLength=="function")try{const l=Math.max(1,i.getTotalLength()),s=e.style.getPropertyValue("stroke-dasharray"),c=e.style.getPropertyValue("stroke-dashoffset");e.style.setProperty("stroke-dasharray",String(l)),e.style.setProperty("stroke-dashoffset",String(l)),e.animate([{opacity:.18,strokeDashoffset:String(l)},{opacity:1,strokeDashoffset:"0"}],{duration:a.duration+120,delay:r,easing:a.easing,fill:"forwards"}).finished.finally(()=>{s?e.style.setProperty("stroke-dasharray",s):e.style.removeProperty("stroke-dasharray"),c?e.style.setProperty("stroke-dashoffset",c):e.style.removeProperty("stroke-dashoffset")});return}catch{}}e.animate([{opacity:0,transform:"translateY(10px) scale(0.985)",transformOrigin:"center center"},{opacity:1,transform:"translateY(0) scale(1)",transformOrigin:"center center"}],{duration:a.duration,delay:r,easing:a.easing,fill:"both"})}}class bn{constructor(){g(this,"charts",new Map);g(this,"loaders",new Map);g(this,"pending",new Map)}register(e){this.charts.set(e.id,e)}registerLoader(e,n){this.loaders.set(e,n)}has(e){return this.charts.has(e)}hasLoader(e){return this.loaders.has(e)}get(e){const n=this.charts.get(e);if(!n)throw new Error(`Infinity Charts has no chart registered for "${e}".`);return n}async ensure(e){if(this.charts.has(e))return this.get(e);const n=this.pending.get(e);if(n)return n;const a=this.loaders.get(e);if(!a)throw new Error(`Infinity Charts has no chart registered or loader configured for "${e}".`);const r=a().then(i=>(this.register(i),this.pending.delete(e),this.get(e))).catch(i=>{throw this.pending.delete(e),i});return this.pending.set(e,r),r}}const yn=t=>{const e=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=(t==null?void 0:t.enabled)??!e,a=n===!1?"none":(t==null?void 0:t.mode)??"subtle";return{enabled:n,duration:n?(t==null?void 0:t.duration)??320:0,easing:(t==null?void 0:t.easing)??"cubic-bezier(0.22, 1, 0.36, 1)",stagger:(t==null?void 0:t.stagger)??18,mode:a,reducedMotion:e}},se=t=>typeof t=="object"&&t!==null&&!Array.isArray(t),we=(t,e)=>{if(e===void 0)return structuredClone(t);if(!se(t)||!se(e))return structuredClone(e??t);const n={...t};return Object.entries(e).forEach(([a,r])=>{if(r===void 0)return;const i=n[a];if(se(i)&&se(r)){n[a]=we(i,r);return}n[a]=Array.isArray(r)?[...r]:r}),n},vn={name:"Infinity Light",mode:"light",background:"#faf8f4",surface:"#ffffff",surfaceAlt:"#f5f1eb",plotBackground:"#fffdfa",plotBorder:"#e7ded4",border:"#e4dbd1",grid:"#e8dfd6",axis:"#91867b",text:"#27303b",mutedText:"#736b63",title:"#171d26",legendText:"#27303b",shadow:"0 18px 54px rgba(15, 23, 42, 0.14)",palette:["#2563eb","#0ea5e9","#14b8a6","#f59e0b","#ef4444","#8b5cf6","#ec4899","#84cc16"],semantic:{success:"#16a34a",warning:"#d97706",danger:"#dc2626",info:"#0284c7"},fontFamily:'"IBM Plex Sans", system-ui, sans-serif',fontSize:13,tooltipBackground:"#102038",tooltipText:"#f8fafc",pointStroke:"#ffffff",threshold:"#d97706",gaugeTrack:"#ece2d7",gaugeNeedle:"#102038",interactiveGlow:"rgba(37, 99, 235, 0.22)"},st={name:"Infinity Dark",mode:"dark",background:"#07101d",surface:"#0f172a",surfaceAlt:"#132038",plotBackground:"#0d1628",plotBorder:"#1b2940",border:"#223048",grid:"#22324b",axis:"#7f93ad",text:"#d7e2f1",mutedText:"#8fa4bc",title:"#f8fbff",legendText:"#d7e2f1",shadow:"0 22px 64px rgba(2, 6, 23, 0.55)",palette:["#60a5fa","#38bdf8","#2dd4bf","#fbbf24","#fb7185","#a78bfa","#f472b6","#a3e635"],semantic:{success:"#4ade80",warning:"#fbbf24",danger:"#f87171",info:"#38bdf8"},fontFamily:'"IBM Plex Sans", system-ui, sans-serif',fontSize:13,tooltipBackground:"#e5eefb",tooltipText:"#081221",pointStroke:"#0f172a",threshold:"#fbbf24",gaugeTrack:"#16243b",gaugeNeedle:"#f8fbff",interactiveGlow:"rgba(96, 165, 250, 0.26)"},k=(t,e)=>`var(${t}, ${e})`,wn=t=>({...t,background:k("--ic-background",t.background),surface:k("--ic-surface",t.surface),surfaceAlt:k("--ic-surface-alt",t.surfaceAlt),plotBackground:k("--ic-plot-background",t.plotBackground),plotBorder:k("--ic-plot-border",t.plotBorder),border:k("--ic-border",t.border),grid:k("--ic-grid",t.grid),axis:k("--ic-axis",t.axis),text:k("--ic-text",t.text),mutedText:k("--ic-muted-text",t.mutedText),title:k("--ic-title",t.title),legendText:k("--ic-legend-text",t.legendText),shadow:k("--ic-shadow",t.shadow),palette:t.palette.map((e,n)=>k(`--ic-series-${n+1}`,e)),semantic:{success:k("--ic-success",t.semantic.success),warning:k("--ic-warning",t.semantic.warning),danger:k("--ic-danger",t.semantic.danger),info:k("--ic-info",t.semantic.info)},fontFamily:k("--ic-font-family",t.fontFamily),tooltipBackground:k("--ic-tooltip-background",t.tooltipBackground),tooltipText:k("--ic-tooltip-text",t.tooltipText),pointStroke:k("--ic-point-stroke",t.pointStroke),threshold:k("--ic-threshold",t.threshold),gaugeTrack:k("--ic-gauge-track",t.gaugeTrack),gaugeNeedle:k("--ic-gauge-needle",t.gaugeNeedle),interactiveGlow:k("--ic-interactive-glow",t.interactiveGlow)}),xn=(t,e=[],n)=>{const a=t==="dark"||typeof t=="object"&&(t==null?void 0:t.mode)==="dark"?st:vn,r=typeof t=="object"?we(a,t):we(a);return e.length>0&&(r.palette=[...e]),n&&Object.entries(n).forEach(([i,l])=>{l!==void 0&&(r[i]=l)}),wn(r)},kn={top:20,right:20,bottom:20,left:20},Cn={top:8,right:8,bottom:8,left:8},Sn=new Set(["gauge","gauge-semicircle","radial-progress","thermometer","thermometer-horizontal","battery"]),Tn=new Set(["pie","donut"]),ot=(t,e)=>({top:(t==null?void 0:t.top)??e.top,right:(t==null?void 0:t.right)??e.right,bottom:(t==null?void 0:t.bottom)??e.bottom,left:(t==null?void 0:t.left)??e.left}),Pn=t=>typeof t=="string"?{text:t,subtitle:"",align:"start"}:{text:(t==null?void 0:t.text)??"",subtitle:(t==null?void 0:t.subtitle)??"",align:(t==null?void 0:t.align)??"start"},Ln=t=>{var e,n,a,r;return{padding:ot((e=t.layout)==null?void 0:e.padding,kn),plotPadding:ot((n=t.layout)==null?void 0:n.plotPadding,Cn),cornerRadius:((a=t.layout)==null?void 0:a.cornerRadius)??20,background:(r=t.layout)==null?void 0:r.background}},An=t=>{var a,r,i,l;const e=((a=t.interaction)==null?void 0:a.enabled)??!0,n=t.showTooltip??((r=t.interaction)==null?void 0:r.tooltip)??!0;return{enabled:e,tooltip:e&&n,hover:e&&(((i=t.interaction)==null?void 0:i.hover)??!0),click:e&&(((l=t.interaction)==null?void 0:l.click)??!0)}},In=(t,e)=>{var n,a,r,i,l,s,c;return{depthX:((n=t.bar3d)==null?void 0:n.depthX)??24,depthY:((a=t.bar3d)==null?void 0:a.depthY)??16,topLightness:((r=t.bar3d)==null?void 0:r.topLightness)??.14,sideLightness:((i=t.bar3d)==null?void 0:i.sideLightness)??-.18,floorColor:((l=t.bar3d)==null?void 0:l.floorColor)??e.surfaceAlt,floorLineColor:((s=t.bar3d)==null?void 0:s.floorLineColor)??e.plotBorder,shadowColor:((c=t.bar3d)==null?void 0:c.shadowColor)??(e.mode==="dark"?"rgba(2, 6, 23, 0.42)":"rgba(15, 23, 42, 0.14)")}},_n=(t,e,n,a)=>{const r=[...n??[]].filter(s=>(s.axis??"y")==="y").map(s=>s.value).filter(s=>s>t&&s<e).sort((s,c)=>s-c);if(r.length===0)return[];const i=[t,...r,e],l=[a.semantic.success,a.semantic.warning,a.semantic.danger];return i.slice(0,-1).map((s,c)=>({from:s,to:i[c+1]??e,color:l[Math.min(c,l.length-1)],label:c===0?"Optimal":c===i.length-2?"Critical":"Attention"}))},$n=(t,e)=>{var c,o,d,m,h,p,u,f,v,L,I,b,S;const n=((c=t.gauge)==null?void 0:c.min)??((o=t.yAxis)==null?void 0:o.min)??0,a=((d=t.gauge)==null?void 0:d.max)??((m=t.yAxis)==null?void 0:m.max)??100,r=a>n?a:n+1,i=_n(n,r,t.thresholds,e),l=[{from:n,to:n+(r-n)*.6,color:e.semantic.success,label:"Healthy"},{from:n+(r-n)*.6,to:n+(r-n)*.85,color:e.semantic.warning,label:"Attention"},{from:n+(r-n)*.85,to:r,color:e.semantic.danger,label:"Critical"}],s=(p=(h=t.gauge)==null?void 0:h.bands)!=null&&p.length?t.gauge.bands.map((_,T)=>({from:Math.max(n,Math.min(r,_.from)),to:Math.max(n,Math.min(r,_.to)),color:_.color,label:_.label??`Band ${T+1}`})):i.length?i:l;return{min:n,max:r,unit:((u=t.gauge)==null?void 0:u.unit)??"",label:((f=t.gauge)==null?void 0:f.label)??"",startAngle:((v=t.gauge)==null?void 0:v.startAngle)??Math.PI*5/4,endAngle:((L=t.gauge)==null?void 0:L.endAngle)??Math.PI*11/4,needle:((I=t.gauge)==null?void 0:I.needle)??!0,trackColor:((b=t.gauge)==null?void 0:b.trackColor)??e.gaugeTrack,bands:s,valueFormatter:(S=t.gauge)==null?void 0:S.valueFormatter}},lt=(t,e)=>{var s,c,o,d,m,h,p,u,f,v,L,I,b,S,_,T,M,N,V,He,qe,Ge,Oe,We,Ne,je,Ue,Ve,Ke,Qe,Je,Ze,Ye,Xe,et;const n=xn(t.theme,t.palette??[],t.colors),a=t.type==="sparkline",r=Sn.has(t.type),i=Tn.has(t.type),l=a||r;return{...t,container:e,showNumber:t.showNumber??!0,showLegend:t.showLegend??((s=t.legend)==null?void 0:s.show)??!l,showTooltip:t.showTooltip??((c=t.interaction)==null?void 0:c.tooltip)??!0,title:Pn(t.title),theme:n,colors:{...t.colors??{}},renderer:t.renderer??"svg",palette:(o=t.palette)!=null&&o.length?[...t.palette]:[...n.palette],animation:yn(t.animation),bar3d:In(t,n),responsive:{enabled:((d=t.responsive)==null?void 0:d.enabled)??!0,debounceMs:((m=t.responsive)==null?void 0:m.debounceMs)??48,minHeight:((h=t.responsive)==null?void 0:h.minHeight)??(a?120:r?240:i?340:280)},interaction:An(t),realtime:{enabled:((p=t.realtime)==null?void 0:p.enabled)??!1,maxPoints:((u=t.realtime)==null?void 0:u.maxPoints)??0,batchWindowMs:((f=t.realtime)==null?void 0:f.batchWindowMs)??0,preserveDomain:((v=t.realtime)==null?void 0:v.preserveDomain)??!1},layout:Ln(t),xAxis:{show:((L=t.xAxis)==null?void 0:L.show)??!l,title:((I=t.xAxis)==null?void 0:I.title)??"",tickCount:((b=t.xAxis)==null?void 0:b.tickCount)??5,min:(S=t.xAxis)==null?void 0:S.min,max:(_=t.xAxis)==null?void 0:_.max,nice:((T=t.xAxis)==null?void 0:T.nice)??!1,format:(M=t.xAxis)==null?void 0:M.format},yAxis:{show:((N=t.yAxis)==null?void 0:N.show)??!l,title:((V=t.yAxis)==null?void 0:V.title)??"",tickCount:((He=t.yAxis)==null?void 0:He.tickCount)??5,min:(qe=t.yAxis)==null?void 0:qe.min,max:(Ge=t.yAxis)==null?void 0:Ge.max,nice:((Oe=t.yAxis)==null?void 0:Oe.nice)??!0,format:(We=t.yAxis)==null?void 0:We.format},grid:{show:((Ne=t.grid)==null?void 0:Ne.show)??!l,x:((je=t.grid)==null?void 0:je.x)??!1,y:((Ue=t.grid)==null?void 0:Ue.y)??!0,color:((Ve=t.grid)==null?void 0:Ve.color)??n.grid,opacity:((Ke=t.grid)==null?void 0:Ke.opacity)??1},legend:{show:t.showLegend??((Qe=t.legend)==null?void 0:Qe.show)??!l,position:((Je=t.legend)==null?void 0:Je.position)??"bottom",align:((Ze=t.legend)==null?void 0:Ze.align)??"start"},gauge:{...$n(t,n),startAngle:((Ye=t.gauge)==null?void 0:Ye.startAngle)??(t.type==="gauge-semicircle"?Math.PI*3/2:t.type==="radial-progress"?.001:Math.PI*5/4),endAngle:((Xe=t.gauge)==null?void 0:Xe.endAngle)??(t.type==="gauge-semicircle"?Math.PI*5/2:t.type==="radial-progress"?Math.PI*2-.001:Math.PI*11/4),needle:((et=t.gauge)==null?void 0:et.needle)??t.type!=="radial-progress"},thresholds:[...t.thresholds??[]],plugins:[...t.plugins??[]],states:{...t.states??{}}}},Rn=t=>{if(typeof t!="string")return t;const e=document.querySelector(t);if(!e)throw new Error(`Infinity Charts could not find container: ${t}`);return e},Mn=(t,e,n,a=280)=>{const r=e??t.clientWidth??720,i=n??t.clientHeight??a;return{width:Math.max(240,r),height:Math.max(a,i)}},En=(t,e)=>{let n=0;return(...a)=>{window.clearTimeout(n),n=window.setTimeout(()=>{t(...a)},e)}},ct=(t,e,n)=>[be("status-surface",{x:0,y:0,width:t.width,height:t.height,rx:e.layout.cornerRadius,fill:e.layout.background??e.theme.surface,stroke:e.theme.border,"stroke-width":1}),be("status-card",{x:Math.max(24,t.width*.08),y:Math.max(32,t.height*.22),width:Math.max(220,t.width*.84),height:Math.max(120,t.height*.38),rx:20,fill:e.theme.plotBackground,stroke:e.theme.border,"stroke-width":1}),be("status-accent",{x:Math.max(44,t.width*.12),y:Math.max(54,t.height*.3),width:68,height:8,rx:999,fill:n.accent??e.theme.palette[0],opacity:.88}),it("status-title",n.title,{x:Math.max(44,t.width*.12),y:Math.max(102,t.height*.38),fill:e.theme.title,"font-family":e.theme.fontFamily,"font-size":e.theme.fontSize+14,"font-weight":700}),it("status-subtitle",n.subtitle,{x:Math.max(44,t.width*.12),y:Math.max(132,t.height*.38),fill:e.theme.mutedText,"font-family":e.theme.fontFamily,"font-size":e.theme.fontSize+1})];class Dn{constructor(e,n){g(this,"registry");g(this,"renderer",new fn);g(this,"scheduler",new mn);g(this,"events",new dn);g(this,"pluginManager");g(this,"container");g(this,"resizeHandler");g(this,"interaction");g(this,"resizeObserver");g(this,"destroyed",!1);g(this,"inputConfig");g(this,"resolvedConfig");g(this,"renderId",0);g(this,"renderPromise",Promise.resolve());this.registry=n.registry,this.container=Rn(e.container),this.inputConfig={...e,container:this.container},this.resolvedConfig=lt(this.inputConfig,this.container),this.pluginManager=new pn([...n.globalPlugins??[],...this.resolvedConfig.plugins]),this.renderer.mount(this.container),this.interaction=new hn(this.container,this.events),this.interaction.update(this.resolvedConfig),this.pluginManager.invoke("beforeInit",this.createPluginContext("init")),this.render(["init"]),this.ready().then(()=>{this.destroyed||this.pluginManager.invoke("afterInit",this.createPluginContext("init"))}).catch(()=>{}),this.resizeHandler=En(()=>{this.resize()},this.resolvedConfig.responsive.debounceMs),this.installResponsiveHandling()}ready(){return this.renderPromise}update(e){this.inputConfig={...this.inputConfig,...e,container:this.container},this.refreshResolvedConfig(),this.scheduleRender("config")}updateSeries(e){this.inputConfig.series=e,this.inputConfig.data=void 0,this.refreshResolvedConfig(),this.scheduleRender("series")}appendData(e){at(this.inputConfig,e),this.refreshResolvedConfig(),this.scheduleRender("realtime")}appendBatch(e){e.forEach(n=>at(this.inputConfig,n)),this.refreshResolvedConfig(),this.scheduleRender("realtime")}replaceData(e){this.inputConfig.data=e,this.inputConfig.series=void 0,this.refreshResolvedConfig(),this.scheduleRender("data")}resize(e,n){e!==void 0&&(this.inputConfig.width=e),n!==void 0&&(this.inputConfig.height=n),this.refreshResolvedConfig(),this.scheduleRender("resize")}setTheme(e){this.inputConfig.theme=e,this.refreshResolvedConfig(),this.scheduleRender("theme")}registerPlugin(e){this.pluginManager.register(e),this.scheduleRender("plugin")}registerPack(e){var n;e.charts.forEach(a=>this.registry.register(a)),(n=e.plugins)==null||n.forEach(a=>this.pluginManager.register(a)),this.scheduleRender("plugin")}on(e,n){return this.events.on(e,n)}destroy(){var e;this.destroyed||(this.destroyed=!0,this.pluginManager.invoke("beforeDestroy",this.createPluginContext("config")),(e=this.resizeObserver)==null||e.disconnect(),globalThis.removeEventListener("resize",this.resizeHandler),this.scheduler.destroy(),this.events.emit("destroy"),this.events.clear(),this.interaction.destroy(),this.renderer.destroy(),this.pluginManager.invoke("afterDestroy",this.createPluginContext("config")))}installResponsiveHandling(){if(this.resolvedConfig.responsive.enabled){if(typeof ResizeObserver<"u"){this.resizeObserver=new ResizeObserver(()=>{this.resizeHandler()}),this.resizeObserver.observe(this.container);return}globalThis.addEventListener("resize",this.resizeHandler)}}scheduleRender(e){this.pluginManager.invoke("onUpdate",this.createPluginContext(e)),this.scheduler.schedule(e,n=>{this.render(n)})}render(e){const n=++this.renderId,a=this.renderInternal(e,n);this.renderPromise=a,a.catch(()=>{})}async renderInternal(e,n){if(this.destroyed)return;const a=on(this.resolvedConfig),r=Mn(this.container,this.resolvedConfig.width,this.resolvedConfig.height,this.resolvedConfig.responsive.minHeight),i=un(this.resolvedConfig,r,a),l=this.resolvedConfig.type,s=e[0]??"config",c=!this.registry.has(l)&&this.registry.hasLoader(l);this.renderer.resize(r.width,r.height),c&&(this.renderer.render(ct(r,this.resolvedConfig,{title:`Loading ${l}`,subtitle:"Infinity Charts is fetching this chart module on demand.",accent:this.resolvedConfig.theme.palette[0]}),{background:this.resolvedConfig.theme.background,animation:this.resolvedConfig.animation,ariaLabel:`${l} chart loading`,chartType:l,themeMode:this.resolvedConfig.theme.mode}),this.events.emit("load:start",{type:l,reasons:e}));let o;try{o=await this.registry.ensure(l)}catch(d){if(this.destroyed||n!==this.renderId)return;throw this.renderer.render(ct(r,this.resolvedConfig,{title:`Unable to load ${l}`,subtitle:d instanceof Error?d.message:"Unexpected chart loading error.",accent:this.resolvedConfig.theme.semantic.danger}),{background:this.resolvedConfig.theme.background,animation:this.resolvedConfig.animation,ariaLabel:`${l} chart load error`,chartType:l,themeMode:this.resolvedConfig.theme.mode}),this.events.emit("load:error",{type:l,error:d}),d}this.destroyed||n!==this.renderId||(this.pluginManager.invoke("beforeRender",this.createPluginContext(s)),this.renderer.render(o.render({config:this.resolvedConfig,payload:a,size:r,frame:i,reasons:e}),{background:this.resolvedConfig.theme.background,animation:this.resolvedConfig.animation,ariaLabel:this.resolvedConfig.title.text||`${l} chart`,chartType:l,themeMode:this.resolvedConfig.theme.mode}),this.pluginManager.invoke("afterRender",this.createPluginContext(s)),c&&this.events.emit("load:end",{type:l,reasons:e}),this.events.emit("render",{reasons:e,size:r,type:l}))}refreshResolvedConfig(){this.resolvedConfig=lt({...this.inputConfig,container:this.container},this.container),this.interaction.update(this.resolvedConfig)}createPluginContext(e){return{chart:this,config:this.resolvedConfig,reason:e}}}const Pt=new bn,zn=[];tn.forEach(t=>{Pt.registerLoader(t,wt[t])});const Bn=t=>new Dn(t,{registry:Pt,globalPlugins:zn});let te;const Fn=new Set(["sparkline","gauge","gauge-semicircle","radial-progress","thermometer","thermometer-horizontal","battery"]),A=t=>{const e=document.createElement("div");return e.className="demo-panel",t.append(e),e},P=(t,e)=>{var a,r;const n=Bn({...e,container:t});return te==null||te.push({chart:n,type:e.type,state:{showNumber:e.showNumber??!0,showLegend:e.showLegend??((a=e.legend)==null?void 0:a.show)??!Fn.has(e.type),showTooltip:e.showTooltip??((r=e.interaction)==null?void 0:r.tooltip)??!0}}),n},B={legend:{show:!0,position:"bottom"}},j={plotBackground:"#fffdfa",plotBorder:"#e7ded4",surface:"#ffffff",surfaceAlt:"#f5f1eb",border:"#e4dbd1",title:"#171d26",text:"#70675e",mutedText:"#9b938a",gaugeNeedle:"#162033",pointStroke:"#ffffff"},dt={plotBackground:"#0c1730",plotBorder:"#223251",surface:"#091323",surfaceAlt:"#13213a",border:"#1f304d",title:"#f4f8ff",text:"#b7c3db",mutedText:"#8391ab",gaugeNeedle:"#f8fbff",pointStroke:"#0a1220"},Hn=new Set(["gauge","gauge-semicircle","radial-progress","thermometer","thermometer-horizontal","battery"]),qn=(t,e)=>`${t}: ${e?"On":"Off"}`,Le=(t,e)=>{e.innerHTML="";const n=document.createElement("div");n.className="demo-control-shell";const a=document.createElement("div");a.className="demo-display-controls";const r=document.createElement("div");r.className="demo-control-slot",n.append(a,r),e.append(n);const i=[];te=i;const l=t.mount(r);if(te=void 0,i.some(d=>Hn.has(d.type))&&n.classList.add("is-widget-demo"),i.length===0)return a.remove(),()=>{l()};const s={...i[0].state},c=()=>{i.forEach(({chart:d})=>{d.update({showNumber:s.showNumber,showLegend:s.showLegend,showTooltip:s.showTooltip})})},o=(d,m)=>{const h=document.createElement("button");h.type="button",h.className="demo-toggle";const p=()=>{const u=s[d];h.textContent=qn(m,u),h.classList.toggle("is-active",u),h.setAttribute("aria-pressed",u?"true":"false")};return h.addEventListener("click",()=>{s[d]=!s[d],p(),c()}),p(),h};return a.append(o("showNumber","Show number"),o("showLegend","Show legend"),o("showTooltip","Show tooltip")),c(),()=>{l()}},ee=[{id:"quick-start-line",title:"Quick start",description:"Minimal config with clean defaults.",code:`import { createChart } from "@stackline/infinity-charts";

createChart({
  container: document.querySelector("#chart"),
  type: "line",
  title: "Monthly revenue",
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  data: [14, 18, 17, 26, 29],
  theme: "dark"
});`,mount(t){const e=A(t),n=P(e,{container:e,type:"line",title:"Monthly revenue",labels:["Jan","Feb","Mar","Apr","May"],data:[14,18,17,26,29],theme:"dark"});return()=>n.destroy()}},{id:"line-overview",title:"Line chart",description:"Multi-series comparison with thresholds.",code:`createChart({
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
});`,mount(t){const e=A(t),n=P(e,{container:e,type:"line",title:{text:"Revenue vs plan",subtitle:"Quarterly snapshot"},labels:["Q1","Q2","Q3","Q4"],series:[{name:"Revenue",data:[42,51,57,68]},{name:"Plan",data:[40,48,56,60],color:"#7dd3fc"}],thresholds:[{value:60,axis:"y",label:"Target"}],theme:"dark",...B});return()=>n.destroy()}},{id:"area-forecast",title:"Area chart",description:"Capacity and demand forecasting view.",code:`createChart({
  container,
  type: "area",
  title: { text: "Capacity forecast", subtitle: "Projected utilization" },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  series: [
    { name: "Reserved", data: [18, 22, 28, 34, 39, 43] },
    { name: "Available", data: [30, 28, 27, 24, 22, 20], color: "#2dd4bf" }
  ],
  theme: "dark"
});`,mount(t){const e=A(t),n=P(e,{container:e,type:"area",title:{text:"Capacity forecast",subtitle:"Projected utilization"},labels:["Jan","Feb","Mar","Apr","May","Jun"],series:[{name:"Reserved",data:[18,22,28,34,39,43]},{name:"Available",data:[30,28,27,24,22,20],color:"#2dd4bf"}],theme:"dark",...B});return()=>n.destroy()}},{id:"bar-environments",title:"Bar chart",description:"Grouped environment comparison.",code:`createChart({
  container,
  type: "bar",
  title: "Environment usage",
  labels: ["CPU", "Memory", "Requests", "Latency"],
  series: [
    { name: "Production", data: [82, 74, 91, 38] },
    { name: "Staging", data: [51, 42, 64, 47], color: "#38bdf8" }
  ],
  theme: "light"
});`,mount(t){const e=A(t),n=P(e,{container:e,type:"bar",title:"Environment usage",labels:["CPU","Memory","Requests","Latency"],series:[{name:"Production",data:[82,74,91,38]},{name:"Staging",data:[51,42,64,47],color:"#38bdf8"}],theme:"light",...B});return()=>n.destroy()}},{id:"bar-3d-launch",title:"3D bar chart",description:"Depth-rich column view for launch, growth, or premium dashboard moments.",code:`createChart({
  container,
  type: "bar-3d",
  title: { text: "Launch velocity", subtitle: "3D category comparison" },
  labels: ["Alpha", "Beta", "Gamma", "Delta"],
  series: [
    { name: "Velocity", data: [36, 48, 42, 58] },
    { name: "Quality", data: [28, 34, 39, 44], color: "#2dd4bf" }
  ],
  theme: "dark"
});`,mount(t){const e=A(t),n=P(e,{container:e,type:"bar-3d",title:{text:"Launch velocity",subtitle:"3D category comparison"},labels:["Alpha","Beta","Gamma","Delta"],series:[{name:"Velocity",data:[36,48,42,58]},{name:"Quality",data:[28,34,39,44],color:"#2dd4bf"}],theme:"dark",...B});return()=>n.destroy()}},{id:"stacked-area-capacity",title:"Stacked area chart",description:"Contribution-over-time view for capacity or channel mix.",code:`createChart({
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
});`,mount(t){const e=A(t),n=P(e,{container:e,type:"stacked-area",title:{text:"Capacity composition",subtitle:"Reserved vs queued vs free"},labels:["Jan","Feb","Mar","Apr","May","Jun"],series:[{name:"Reserved",data:[22,24,27,30,34,36]},{name:"Queued",data:[8,10,12,11,10,9],color:"#38bdf8"},{name:"Free",data:[14,13,10,8,7,6],color:"#2dd4bf"}],theme:"dark",...B});return()=>n.destroy()}},{id:"combo-plan-vs-actual",title:"Combo chart",description:"Bar plus line composition for plan, actual, and forecast overlays.",code:`createChart({
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
});`,mount(t){const e=A(t),n=P(e,{container:e,type:"combo",title:{text:"Revenue vs plan",subtitle:"Monthly comparison"},labels:["Jan","Feb","Mar","Apr","May","Jun"],series:[{name:"Actual",type:"bar",data:[28,31,34,38,41,44]},{name:"Plan",type:"line",data:[30,32,35,37,40,43],color:"#38bdf8"},{name:"Forecast",type:"area",data:[29,33,36,40,45,48],color:"#2dd4bf"}],theme:"light",...B});return()=>n.destroy()}},{id:"scatter-correlation",title:"Scatter chart",description:"Correlation-style plotting with continuous x and y domains.",code:`createChart({
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
});`,mount(t){const e=A(t),n=P(e,{container:e,type:"scatter",title:{text:"Activation vs retention",subtitle:"Cohort clusters"},xAxis:{title:"Activation %",tickCount:5},yAxis:{title:"Retention %",tickCount:5},series:[{name:"Enterprise",data:[{x:41,y:64,label:"A"},{x:48,y:71,label:"B"},{x:57,y:76,label:"C"}]},{name:"SMB",color:"#38bdf8",data:[{x:22,y:31,label:"D"},{x:28,y:36,label:"E"},{x:33,y:44,label:"F"}]}],theme:"light",...B});return()=>n.destroy()}},{id:"donut-alerts",title:"Donut chart",description:"Dashboard-friendly status distribution.",code:`createChart({
  container,
  type: "donut",
  title: "Alert distribution",
  data: [
    { label: "Critical", value: 7, color: "#ef4444" },
    { label: "Warning", value: 18, color: "#f59e0b" },
    { label: "Info", value: 36, color: "#0ea5e9" }
  ],
  theme: "light"
});`,mount(t){const e=A(t),n=P(e,{container:e,type:"donut",title:"Alert distribution",data:[{label:"Critical",value:7,color:"#ef4444"},{label:"Warning",value:18,color:"#f59e0b"},{label:"Info",value:36,color:"#0ea5e9"}],theme:"light",colors:j,...B});return()=>n.destroy()}},{id:"gauge-health",title:"Gauge chart",description:"Velocity-meter style KPI chart for health, saturation, and threshold-aware status.",code:`createChart({
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
});`,mount(t){const e=A(t),n=P(e,{container:e,type:"gauge",title:{text:"Cluster health",subtitle:"Current CPU saturation"},data:[{label:"CPU usage",value:72}],gauge:{min:0,max:100,unit:"%",bands:[{from:0,to:55,color:"#22c55e",label:"Healthy"},{from:55,to:80,color:"#f59e0b",label:"Attention"},{from:80,to:100,color:"#ef4444",label:"Critical"}]},theme:"light",colors:j});return()=>n.destroy()}},{id:"gauge-semicircle",title:"Semicircle gauge",description:"Compact half-arc gauge designed for dense dashboard cards.",code:`createChart({
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
});`,mount(t){const e=A(t),n=P(e,{container:e,type:"gauge-semicircle",title:{text:"API health",subtitle:"Semicircle status card"},data:[{label:"Availability",value:97.4}],gauge:{min:90,max:100,unit:"%",bands:[{from:90,to:95,color:"#ef4444",label:"Risk"},{from:95,to:98,color:"#f59e0b",label:"Watch"},{from:98,to:100,color:"#22c55e",label:"Healthy"}]},theme:"light",colors:j});return()=>n.destroy()}},{id:"radial-progress",title:"Radial progress",description:"Ring-style progress widget with centered KPI readout.",code:`createChart({
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
});`,mount(t){const e=A(t),n=P(e,{container:e,type:"radial-progress",title:{text:"Quarter goal",subtitle:"Revenue completion"},data:[{label:"Completion",value:78}],gauge:{min:0,max:100,unit:"%",bands:[{from:0,to:60,color:"#38bdf8",label:"Building"},{from:60,to:85,color:"#0ea5e9",label:"On pace"},{from:85,to:100,color:"#22c55e",label:"Strong"}]},theme:"dark",colors:dt});return()=>n.destroy()}},{id:"thermometer-vertical",title:"Thermometer",description:"Vertical saturation widget for occupancy, temperature, or risk.",code:`createChart({
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
});`,mount(t){const e=A(t),n=P(e,{container:e,type:"thermometer",title:{text:"Storage pressure",subtitle:"Current utilization"},data:[{label:"Capacity",value:83}],gauge:{min:0,max:100,unit:"%",bands:[{from:0,to:60,color:"#22c55e",label:"Healthy"},{from:60,to:80,color:"#f59e0b",label:"Attention"},{from:80,to:100,color:"#ef4444",label:"Critical"}]},theme:"light",colors:j});return()=>n.destroy()}},{id:"thermometer-horizontal",title:"Horizontal thermometer",description:"Horizontal fill meter for narrower monitoring strips.",code:`createChart({
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
});`,mount(t){const e=A(t),n=P(e,{container:e,type:"thermometer-horizontal",title:{text:"Risk score",subtitle:"Horizontal level meter"},data:[{label:"Severity",value:42}],gauge:{min:0,max:100,unit:"%",bands:[{from:0,to:35,color:"#22c55e",label:"Low"},{from:35,to:65,color:"#f59e0b",label:"Moderate"},{from:65,to:100,color:"#ef4444",label:"High"}]},theme:"light",colors:j});return()=>n.destroy()}},{id:"battery-meter",title:"Battery meter",description:"Charge-style status widget for remaining capacity or SLA budget.",code:`createChart({
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
});`,mount(t){const e=A(t),n=P(e,{container:e,type:"battery",title:{text:"Backup reserve",subtitle:"Remaining battery budget"},data:[{label:"Battery",value:28}],gauge:{min:0,max:100,unit:"%",bands:[{from:0,to:20,color:"#ef4444",label:"Low"},{from:20,to:50,color:"#f59e0b",label:"Watch"},{from:50,to:100,color:"#22c55e",label:"Charged"}]},theme:"dark",colors:dt});return()=>n.destroy()}},{id:"pie-allocation",title:"Pie chart",description:"Simple part-to-whole breakdown.",code:`createChart({
  container,
  type: "pie",
  title: "Budget allocation",
  data: [
    { label: "R&D", value: 34, color: "#2563eb" },
    { label: "Sales", value: 26, color: "#14b8a6" },
    { label: "Ops", value: 22, color: "#f59e0b" },
    { label: "Support", value: 18, color: "#8b5cf6" }
  ]
});`,mount(t){const e=A(t),n=P(e,{container:e,type:"pie",title:"Budget allocation",data:[{label:"R&D",value:34,color:"#2563eb"},{label:"Sales",value:26,color:"#14b8a6"},{label:"Ops",value:22,color:"#f59e0b"},{label:"Support",value:18,color:"#8b5cf6"}],theme:"light",colors:j,...B});return()=>n.destroy()}},{id:"realtime-stream",title:"Realtime stream",description:"Append data without re-instantiating the chart.",code:`const chart = createChart({
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
}, 1200);`,mount(t){const e=A(t),n=P(e,{container:e,type:"line",title:{text:"Ingestion throughput",subtitle:"Live appendData()"},labels:["00","05","10","15","20"],data:[124,131,128,142,149],theme:"dark",realtime:{enabled:!0,maxPoints:16}});let a=25;const r=window.setInterval(()=>{a+=5,n.appendData({label:String(a).padStart(2,"0"),value:120+Math.round(Math.random()*40)})},1200);return()=>{window.clearInterval(r),n.destroy()}}},{id:"theme-switcher",title:"Theme switching",description:"Switch between light and dark tokens at runtime.",code:`const chart = createChart({
  container,
  type: "area",
  title: "Theme switching",
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  data: [18, 24, 21, 29, 33],
  theme: "light"
});

chart.setTheme("dark");`,mount(t){const e=document.createElement("div");e.className="demo-theme-wrapper",e.innerHTML=`
        <div class="demo-actions">
          <button class="demo-button" data-theme="light">Light</button>
          <button class="demo-button" data-theme="dark">Dark</button>
        </div>
      `,t.append(e);const n=A(e),a=P(n,{container:n,type:"area",title:"Theme switching",labels:["Mon","Tue","Wed","Thu","Fri"],data:[18,24,21,29,33],theme:"light"}),r=i=>{const s=i.target.dataset.theme;s&&a.setTheme(s)};return e.addEventListener("click",r),()=>{e.removeEventListener("click",r),a.destroy()}}},{id:"dashboard-pattern",title:"Dashboard pattern",description:"A composition of cards, trends, and summaries.",code:`const revenue = createChart({ type: "line", ... });
const environments = createChart({ type: "bar", ... });
const alerts = createChart({ type: "donut", ... });`,mount(t){const e=document.createElement("div");e.className="dashboard-demo-grid",e.innerHTML=`
        <div class="dashboard-demo-card dashboard-demo-card-wide"><div class="dashboard-demo-slot" data-slot="a"></div></div>
        <div class="dashboard-demo-card"><div class="dashboard-demo-slot" data-slot="b"></div></div>
        <div class="dashboard-demo-card"><div class="dashboard-demo-slot" data-slot="c"></div></div>
      `,t.append(e);const n=e.querySelector('[data-slot="a"]'),a=e.querySelector('[data-slot="b"]'),r=e.querySelector('[data-slot="c"]'),i=P(n,{container:n,type:"line",title:{text:"ARR growth",subtitle:"Rolling 12 months"},labels:["Jan","Feb","Mar","Apr","May","Jun"],data:[44,48,53,59,61,68],theme:"dark"}),l=P(a,{container:a,type:"bar",title:"Team throughput",data:{Platform:42,Growth:33,Ops:28,QA:18},theme:"light"}),s=P(r,{container:r,type:"donut",title:"Error budget",data:[{label:"Healthy",value:71,color:"#22c55e"},{label:"At risk",value:19,color:"#f59e0b"},{label:"Exceeded",value:10,color:"#ef4444"}],theme:"light"});return()=>{i.destroy(),l.destroy(),s.destroy()}}},{id:"realtime-panel",title:"Monitoring panel",description:"KPI plus streaming chart composition.",code:`const chart = createChart({ type: "line", realtime: { enabled: true } });
chart.appendData({ label: "35", value: 184 });`,mount(t){const e=document.createElement("div");e.className="monitoring-demo",e.innerHTML=`
        <div class="monitoring-demo-header">
          <div>
            <p class="monitoring-demo-eyebrow">Active throughput</p>
            <h3 class="monitoring-demo-value">148 rps</h3>
          </div>
          <span class="monitoring-demo-chip">stable</span>
        </div>
      `,t.append(e);const n=A(e),a=P(n,{container:n,type:"line",title:{text:"Requests / sec",subtitle:"Last 10 intervals"},labels:["00","05","10","15","20"],data:[136,144,141,152,148],theme:"dark",realtime:{enabled:!0,maxPoints:10}}),r=e.querySelector(".monitoring-demo-value"),i=e.querySelector(".monitoring-demo-chip");let l=25;const s=window.setInterval(()=>{l+=5;const c=130+Math.round(Math.random()*36);a.appendData({label:String(l).padStart(2,"0"),value:c}),r.textContent=`${c} rps`,i.textContent=c>158?"spike":c<138?"watch":"stable"},1400);return()=>{window.clearInterval(s),a.destroy()}}},{id:"kpi-sparkline",title:"KPI sparkline",description:"Compact metrics card pattern using the same core engine.",code:`createChart({
  container,
  type: "sparkline",
  data: [12, 15, 14, 18, 21, 20, 24],
  theme: "dark"
});`,mount(t){const e=document.createElement("div");e.className="sparkline-demo-card",e.innerHTML=`
        <div class="sparkline-demo-meta">
          <span class="sparkline-demo-label">Net retention</span>
          <strong class="sparkline-demo-number">124%</strong>
          <span class="sparkline-demo-trend">+8.2% QoQ</span>
        </div>
      `,t.append(e);const n=A(e);n.style.height="110px";const a=P(n,{container:n,type:"sparkline",series:[{name:"Net retention",data:[12,15,14,18,21,20,24]}],theme:"dark",layout:{padding:{top:12,right:12,bottom:12,left:12},plotPadding:{top:0,right:0,bottom:0,left:0}},responsive:{minHeight:110}});return()=>a.destroy()}}],U=t=>ee.find(e=>e.id===t),Ae=[{title:"Overview",children:[{title:"Introduction",path:"/",description:"Positioning, product vision, and why Infinity Charts exists."}]},{title:"Getting Started",children:[{title:"Installation",path:"/getting-started/installation"},{title:"Quick Start",path:"/getting-started/quick-start"},{title:"Plain JavaScript",path:"/getting-started/plain-javascript",badge:"Browser"}]},{title:"Core Concepts",children:[{title:"Configuration Model",path:"/concepts/configuration-model"},{title:"Chart Lifecycle",path:"/concepts/chart-lifecycle"},{title:"Data Pipeline",path:"/concepts/data-pipeline"},{title:"Layout System",path:"/concepts/layout-system"},{title:"Rendering Architecture",path:"/concepts/rendering-architecture"},{title:"Realtime Updates",path:"/concepts/realtime-updates"},{title:"Theme System",path:"/concepts/theme-system"},{title:"CSS Overrides",path:"/concepts/css-overrides"},{title:"Animation System",path:"/concepts/animation-system"},{title:"Business Value",path:"/concepts/business-value"},{title:"Performance",path:"/concepts/performance"},{title:"On-Demand Modules",path:"/concepts/on-demand-modules",badge:"ESM"},{title:"Accessibility and Responsive",path:"/concepts/accessibility-responsive"},{title:"Plugin System",path:"/concepts/plugin-system"},{title:"Thresholds and Overlays",path:"/concepts/thresholds-and-overlays"},{title:"Shared Behaviors",path:"/concepts/shared-behaviors"}]},{title:"Chart Guide",children:[{title:"Line Chart",path:"/charts/line",badge:"Live"},{title:"Area Chart",path:"/charts/area",badge:"Live"},{title:"Bar / Column Chart",path:"/charts/bar",badge:"Live"},{title:"3D Bar Chart",path:"/charts/bar-3d",badge:"3D"},{title:"Stacked Area Chart",path:"/charts/stacked-area",badge:"Live"},{title:"Combo Chart",path:"/charts/combo",badge:"Live"},{title:"Sparkline",path:"/charts/sparkline",badge:"Live"},{title:"Scatter Chart",path:"/charts/scatter",badge:"Live"},{title:"Gauge Chart",path:"/charts/gauge",badge:"Live"},{title:"Semicircle Gauge",path:"/charts/gauge-semicircle",badge:"Live"},{title:"Radial Progress",path:"/charts/radial-progress",badge:"Live"},{title:"Thermometer",path:"/charts/thermometer",badge:"Live"},{title:"Battery Meter",path:"/charts/battery",badge:"Live"},{title:"Donut Chart",path:"/charts/donut",badge:"Live"},{title:"Pie Chart",path:"/charts/pie",badge:"Live"},{title:"Chart Explorer",path:"/chart-explorer",badge:"Catalog"},{title:"Example Gallery",path:"/example-gallery",badge:"Live"}]},{title:"Patterns",children:[{title:"Dashboard Composition",path:"/patterns/dashboard-composition"},{title:"Realtime Monitoring",path:"/patterns/realtime-monitoring"},{title:"KPI and Sparklines",path:"/patterns/kpi-and-sparklines"},{title:"Chart Selection",path:"/patterns/chart-selection"},{title:"Operations Dashboards",path:"/patterns/operations-dashboards"},{title:"Financial and Forecasting",path:"/patterns/financial-and-forecasting"},{title:"Embedded Widgets",path:"/patterns/embedded-widgets"}]},{title:"Tutorials",children:[{title:"Build an Ops Dashboard",path:"/tutorials/build-ops-dashboard"},{title:"Build a Live KPI Board",path:"/tutorials/build-live-kpi-board"}]},{title:"API",children:[{title:"createChart",path:"/api/create-chart"},{title:"Chart Instance",path:"/api/chart-instance"},{title:"Config Reference",path:"/api/config-reference"},{title:"Events and Hooks",path:"/api/events-and-hooks"},{title:"Packs and Registration",path:"/api/packs-and-registration"},{title:"Playground",path:"/playground",badge:"Live"}]},{title:"Troubleshooting",children:[{title:"Common Issues",path:"/troubleshooting/common-issues"},{title:"Performance Checks",path:"/troubleshooting/performance-checks"}]}],Gn=[{title:"Chart Explorer",path:"/chart-explorer"},{title:"3D Lab",path:"/charts/bar-3d"},{title:"Examples",path:"/example-gallery"},{title:"Playground",path:"/playground"}],On={line:"line-overview",area:"area-forecast",bar:"bar-environments","bar-3d":"bar-3d-launch","stacked-area":"stacked-area-capacity",combo:"combo-plan-vs-actual",sparkline:"kpi-sparkline",scatter:"scatter-correlation",gauge:"gauge-health","gauge-semicircle":"gauge-semicircle","radial-progress":"radial-progress",thermometer:"thermometer-vertical","thermometer-horizontal":"thermometer-horizontal",battery:"battery-meter",donut:"donut-alerts",pie:"pie-allocation"},Wn={gauge:{purpose:"Show a current value against a minimum, maximum, and multiple threshold zones.",behavior:"The pointer should animate smoothly, honor thresholds, stay live-update friendly, and keep the current state readable at a glance."},"bullet-graph":{purpose:"Show a KPI in a compact executive format with qualitative ranges and an explicit target.",behavior:"The widget should keep actual, target, and qualitative bands readable even in dense dashboards where space is constrained."},"gauge-semicircle":{purpose:"Compress gauge-style status reading into dashboard cards and compact operational widgets.",behavior:"The half-arc should keep the same threshold semantics as the full gauge while preserving legibility in small containers."},"radial-progress":{purpose:"Show goal completion, rollout progress, or KPI attainment in a cleaner circular widget.",behavior:"The arc should transition smoothly, keep the center number dominant, and use thresholds to signal pace or completion quality."},thermometer:{purpose:"Show a value as a fill level, which works well for saturation, occupancy, risk, or temperature metaphors.",behavior:"The fill should rise smoothly, respect qualitative bands, and remain readable as a compact dashboard widget."},"thermometer-horizontal":{purpose:"Bring thermometer-style level reading into narrow dashboard strips and horizontal monitoring cards.",behavior:"The bar should fill left-to-right with clear threshold transitions, compact labeling, and stable live updates."},battery:{purpose:"Show remaining reserve, battery, charge, or budget-left style values with a familiar metaphor.",behavior:"The battery body should update smoothly, reflect low-level warning states clearly, and stay readable even in tight widgets."},line:{purpose:"Track one or more measures over time with a clean temporal reading model.",behavior:"The chart should support smooth transitions, shared tooltip behavior, thresholds, and efficient sliding-window live updates."},bar:{purpose:"Compare categories directly when names and magnitude matter more than trend.",behavior:"Bars should animate from baseline, keep hover focused on the active category, and adapt spacing as the number of series grows."},donut:{purpose:"Show part-to-whole distributions with room for a useful center summary.",behavior:"Slices should respond cleanly to hover, preserve label readability, and support dashboard filtering and stateful interactions later."},pie:{purpose:"Show a small number of proportional categories when direct composition reading is enough.",behavior:"Slices should highlight on hover, avoid label collisions, and gracefully move small categories into legend-first reading."},scatter:{purpose:"Reveal correlation, clustering, and quantitative relationships between two numeric dimensions.",behavior:"The chart should handle zoom, dense-point selection, and eventually regression overlays without losing performance."},heatmap:{purpose:"Show intensity across a grid of categories or time slices with a strong density-reading model.",behavior:"Cells should remain readable under filtering, support accurate tooltip inspection, and scale to dense matrices without visual collapse."},candlestick:{purpose:"Show OHLC movement for financial series and technical analysis workflows.",behavior:"The chart should support crosshair, pan, zoom, synced secondary panels, and incremental live candle updates."},funnel:{purpose:"Show conversion or drop-off across sequential stages where loss between steps matters as much as absolute counts.",behavior:"Stage transitions should make drop-off obvious, keep rates visible, and support drilldown into where users or deals are being lost."},sankey:{purpose:"Show flow magnitude between stages, categories, or states in a process.",behavior:"Links should highlight complete paths on hover, preserve readability under filtering, and support drilldown into selected routes."},treemap:{purpose:"Show hierarchical proportions when both size and nested grouping matter.",behavior:"Tiles should support drilldown, adaptive labeling, and clean transitions as the user focuses on deeper branches."},sunburst:{purpose:"Show hierarchical proportions in a radial layout with strong visual hierarchy.",behavior:"The chart should focus on the selected branch, animate the radial transition smoothly, and keep breadcrumbs visible."},"retention-cohort-grid":{purpose:"Show retention by cohort so teams can compare how groups hold engagement or revenue over time.",behavior:"The view should support cohort selection, heatmap-style reading, and a clear distinction between absolute retention and normalized retention."},"box-plot":{purpose:"Compare distributions across groups using quartiles, median, whiskers, and outliers.",behavior:"The chart should expose outliers clearly, support grouped comparison, and keep statistical reading precise rather than decorative."},histogram:{purpose:"Show frequency distribution and help users understand how values are spread across ranges.",behavior:"The chart should allow configurable bins, clean hover for range plus count, and responsive recalculation for filtering workflows."},timeline:{purpose:"Place events or intervals across time for sequencing, operations, and planning views.",behavior:"The chart should zoom by range, cluster dense labels intelligently, and keep the temporal reading stable during navigation."},"gantt-foundation":{purpose:"Show tasks, phases, or delivery plans across a timeline with structure and dependencies.",behavior:"The chart should support lane grouping, drag or resize later, dependency overlays, and responsive scale switching."},choropleth:{purpose:"Show value intensity by region while preserving geographic context.",behavior:"The map should support hover, zoom, drilldown by geography, and palette scales that remain accessible and interpretable."},"quality-score-radar":{purpose:"Compare multidimensional quality or capability scores across a fixed set of attributes.",behavior:"The radar should support multiple compared profiles, benchmark overlays, and hover states that keep each axis easy to inspect."}},Nn=t=>{const e=`createChart({
  container: document.querySelector("#chart"),
  type: "${t.id}",`;switch(t.id){case"3d-column":case"depth-column":return`${e}
  title: "${t.name}",
  labels: ["North", "South", "West", "Global"],
  series: [{ name: "Revenue", data: [36, 44, 58, 49] }],
  depth: {
    enabled: true,
    angle: 18,
    perspective: 0.84
  },
  theme: "dark"
});`;case"3d-stacked-bar":case"3d-stacked-column":return`${e}
  title: "${t.name}",
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
});`;case"3d-line":return`${e}
  title: "${t.name}",
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
});`;case"3d-area":case"depth-area":case"perspective-combo":return`${e}
  title: "${t.name}",
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
});`;case"3d-surface":case"3d-mesh":return`${e}
  title: "${t.name}",
  xAxis: { values: ["Jan", "Feb", "Mar", "Apr"] },
  yAxis: { values: ["North", "South", "West", "Global"] },
  data: [
    [12, 18, 21, 26],
    [14, 22, 28, 31],
    [18, 24, 34, 42],
    [22, 30, 38, 46]
  ],
  surface: {
    wireframe: ${t.id==="3d-mesh"?"true":"false"},
    shading: "elevation"
  },
  theme: "dark"
});`;case"3d-heatmap":return`${e}
  title: "${t.name}",
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
});`;case"3d-scatter":case"3d-bubble":case"3d-geo-scatter":return`${e}
  title: "${t.name}",
  data: [
    { x: 18, y: 32, z: 14, size: 12, label: "North" },
    { x: 32, y: 26, z: 28, size: 18, label: "West" },
    { x: 24, y: 18, z: 36, size: 10, label: "Global" }
  ],
  pointStyle: "${t.id==="3d-bubble"?"bubble":"orb"}",
  depth: {
    enabled: true,
    orbit: ${t.id==="3d-geo-scatter"?"true":"false"}
  },
  theme: "dark"
});`;case"3d-donut":case"3d-pie":return`${e}
  title: "${t.name}",
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
});`;case"3d-radar":return`${e}
  title: "${t.name}",
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
});`;case"3d-globe-plot":return`${e}
  title: "${t.name}",
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
});`;case"3d-flow-ribbon":return`${e}
  title: "${t.name}",
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
});`;case"3d-funnel":return`${e}
  title: "${t.name}",
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
});`;case"3d-pyramid":return`${e}
  title: "${t.name}",
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
});`;case"3d-treemap":case"isometric-dashboard-card":case"3d-kpi-panel":return`${e}
  title: "${t.name}",
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
});`;default:return`${e}
  title: "${t.name}",
  labels: ["Alpha", "Beta", "Gamma", "Delta"],
  series: [
    { name: "Primary", data: [36, 48, 42, 58] },
    { name: "Secondary", data: [28, 34, 39, 44], color: "#2dd4bf" }
  ],
  depth: {
    enabled: true
  },
  theme: "dark"
});`}},jn=t=>{const e=`createChart({
  container: document.querySelector("#chart"),
  type: "${t.id}",`;return t.family==="Widgets"?`${e}
  title: "${t.name}",
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
});`:t.family==="Cartesian"||t.family==="Analytical"?`${e}
  title: "${t.name}",
  labels: ["Jan", "Feb", "Mar", "Apr"],
  series: [
    { name: "Series A", data: [18, 24, 21, 30] },
    { name: "Series B", data: [14, 19, 23, 28], color: "#38bdf8" }
  ],
  theme: "light"
});`:t.family==="Radial"?`${e}
  title: "${t.name}",
  data: [
    { label: "A", value: 34, color: "#2563eb" },
    { label: "B", value: 26, color: "#14b8a6" },
    { label: "C", value: 18, color: "#f59e0b" }
  ],
  theme: "light"
});`:t.family==="Financial"?`${e}
  title: "${t.name}",
  data: [
    { x: "2026-01-01", open: 124, high: 130, low: 121, close: 128 },
    { x: "2026-01-02", open: 128, high: 133, low: 125, close: 126 }
  ],
  theme: "dark"
});`:t.family==="Hierarchical"?`${e}
  title: "${t.name}",
  data: {
    name: "Root",
    children: [
      { name: "Alpha", value: 42 },
      { name: "Beta", value: 28 },
      { name: "Gamma", value: 18 }
    ]
  },
  theme: "light"
});`:t.family==="Flow"?`${e}
  title: "${t.name}",
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
});`:t.family==="Timeline"?`${e}
  title: "${t.name}",
  data: [
    { label: "Discovery", start: "2026-01-03", end: "2026-01-24" },
    { label: "Delivery", start: "2026-01-26", end: "2026-03-12" }
  ],
  theme: "light"
});`:t.family==="Geospatial"?`${e}
  title: "${t.name}",
  data: [
    { region: "North America", value: 42 },
    { region: "Europe", value: 31 },
    { region: "APAC", value: 27 }
  ],
  theme: "light"
});`:t.family==="3D"?Nn(t):`${e}
  title: "${t.name}",
  data: [],
  theme: "light"
});`},Un=t=>t.family==="Widgets"?"This widget should stay compact, respect thresholds or semantic states, and animate value changes smoothly without causing layout shift.":t.family==="Cartesian"?"This chart should share the cartesian engine behaviors: responsive axes, legend toggles, tooltip clarity, stable updates, and clean theme-driven motion.":t.family==="Analytical"||t.family==="Statistical"?"This analytical view should prioritize precision, dense-data readability, selection workflows, and performance-aware interaction for larger datasets.":t.family==="Financial"?"This financial view should support precise cursor reading, pan and zoom, sync with companion panels, and low-overhead live updates.":t.family==="Flow"?"This flow view should highlight connected paths on hover, preserve node and link readability, and support drilldown into selected routes or stages.":t.family==="Hierarchical"?"This hierarchical view should make depth navigation clear through drilldown, focus transitions, adaptive labeling, and breadcrumb-style context.":t.family==="Timeline"?"This timeline view should support zooming through time ranges, clustering dense labels, and maintaining a stable temporal reading while filtering or drilling down.":t.family==="Geospatial"?"This geospatial view should combine clear hover states, pan and zoom friendliness, drilldown-ready structure, and palette scales that remain accessible.":t.family==="3D"?"This 3D view should use depth only when it adds hierarchy or density value, while preserving readability and offering a flatter fallback where needed.":t.family==="Hybrid"?"This hybrid view should adapt between KPI, threshold, and trend reading without feeling like disconnected components glued together.":"This chart should follow the shared platform behaviors for theming, responsiveness, motion, tooltip, and incremental updates.",ae=z.map(t=>{const e=On[t.id],n=e?U(e):void 0,a=Wn[t.id];return{id:t.id,name:t.name,family:t.family,status:t.status,description:t.description,purpose:(a==null?void 0:a.purpose)??t.description,behavior:(a==null?void 0:a.behavior)??Un(t),code:(n==null?void 0:n.code)??jn(t),docsPath:t.docsPath,demoId:e}}).sort((t,e)=>t.status!==e.status?t.status==="live"?-1:1:t.family!==e.family?t.family.localeCompare(e.family):t.name.localeCompare(e.name)),Lt=t=>ae.find(e=>e.id===t),At=["All families",...new Set(ae.map(t=>t.family))],Vn=`---
title: Chart Instance API
description: Methods available on chart instances created by createChart.
heading: Chart Instance
summary: Imperative control layer for updates, theme switching, and lifecycle management.
status: Stable
---

The chart instance is the engine’s imperative API surface.

## Available Methods

| Method | Purpose |
| --- | --- |
| \`ready()\` | Resolve when the current render cycle and any lazy chart loading have finished |
| \`update(config)\` | Apply partial config changes |
| \`updateSeries(series)\` | Replace series structures directly |
| \`appendData(point)\` | Append a single point |
| \`appendBatch(points)\` | Append multiple points in one call |
| \`replaceData(data)\` | Replace the current data payload |
| \`setTheme(theme)\` | Switch theme tokens at runtime |
| \`resize(width?, height?)\` | Re-measure or manually size the chart |
| \`registerPlugin(plugin)\` | Extend the chart instance |
| \`on(event, handler)\` | Listen to lifecycle or engine events |
| \`destroy()\` | Tear down the chart |

## Example

\`\`\`ts
const chart = createChart(config);

await chart.ready();
chart.appendData({ label: "May", value: 28 });
chart.setTheme("dark");
chart.destroy();
\`\`\`

## Why Imperative APIs Still Matter

Even in declarative ecosystems, chart engines need imperative control for:

- live data
- resize coordination
- dashboard builders
- external state transitions
`,Kn=`---
title: Config Reference
description: Overview of the current top-level configuration groups in Infinity Charts.
heading: Config Reference
summary: A structural map of the configuration surface.
status: Stable
---

This is not a full generated API reference yet. It is the current structural map of the public config surface.

## Top-Level Groups

| Group | Purpose |
| --- | --- |
| \`container\` | Chart mount target |
| \`type\` | Chart type identifier |
| \`data\` | Simple data input |
| \`series\` | Advanced structured series input |
| \`labels\` | Category labels |
| \`title\` | Title and subtitle |
| \`theme\` | Theme selection or overrides |
| \`colors\` | Explicit internal color overrides for chart surfaces, text, tooltips, axes, thresholds, and interaction accents |
| \`renderer\` | Rendering mode preference |
| \`animation\` | Motion behavior |
| \`bar3d\` | Depth, face shading, floor plane, and shadow tuning for \`bar-3d\` charts |
| \`responsive\` | Resize handling |
| \`realtime\` | Live update controls |
| \`layout\` | Padding, background, and frame options |
| \`xAxis\`, \`yAxis\` | Axis configuration |
| \`grid\` | Grid visibility and color |
| \`legend\` | Legend placement and visibility |
| \`gauge\` | Gauge and measurement-widget configuration |
| \`thresholds\` | Threshold lines and labels |
| \`plugins\` | Plugin registration |

## Future Expansion Areas

The current foundation is intentionally leaving room for:

- annotations
- accessibility
- advanced interactions
- events
- export
- widgets
- composition rules
- state handling
- domain-specific data contracts

## Color Override Example

\`\`\`ts
createChart({
  container,
  type: "line",
  data: [14, 19, 17, 26],
  colors: {
    plotBackground: "#0c1425",
    plotBorder: "#20304a",
    grid: "#22324b",
    axis: "#93a8c4",
    pointStroke: "#0f172a",
    tooltipBackground: "#f8fafc",
    tooltipText: "#081221",
    interactiveGlow: "rgba(56, 189, 248, 0.22)"
  }
});
\`\`\`
`,Qn=`---
title: createChart API
description: The main entry point for creating chart instances in Infinity Charts.
heading: createChart
summary: The primary public constructor for the engine.
status: Stable
---

\`createChart(config)\` is the main public entry point of the current engine foundation.

For plain browser usage without module imports, the same entry point is available as \`InfinityCharts.create(config)\` or \`InfinityCharts.mount(config)\`.

## Signature

\`\`\`ts
const chart = createChart(config);
\`\`\`

\`\`\`html
<script src="./infinity-charts.min.js"><\/script>
<script>
  const chart = InfinityCharts.mount(config);
<\/script>
\`\`\`

## Required Fields

- \`container\`
- \`type\`

## Common Fields

- \`title\`
- \`data\`
- \`labels\`
- \`series\`
- \`theme\`
- \`colors\`
- \`legend\`
- \`xAxis\`
- \`yAxis\`
- \`grid\`
- \`bar3d\`
- \`realtime\`
- \`thresholds\`

## Return Value

It returns a chart instance with imperative methods for updates, theme switching, resizing, plugin registration, and destruction.

See [Chart Instance](/api/chart-instance) for the instance API.
`,Jn=`---
title: Events and Hooks
description: Lifecycle events and plugin hooks define how the engine can be observed and extended.
heading: Events and Hooks
summary: Events and hooks are part of the platform boundary.
status: Stable
---

The engine exposes two related extension surfaces:

- public event subscriptions through \`chart.on(...)\`
- plugin hooks around lifecycle stages

## Current Event Direction

The current foundation emits both render and interaction-oriented events through the instance event bus.

Examples now include:

- \`render\`
- \`load:start\`
- \`load:end\`
- \`load:error\`
- \`interaction:hover\`
- \`interaction:leave\`
- \`interaction:click\`
- \`point:hover\`
- \`point:click\`
- \`slice:click\`
- \`gauge:click\`

## Plugin Hook Direction

The plugin system currently includes hook positions for:

- \`beforeInit\`
- \`afterInit\`
- \`beforeRender\`
- \`afterRender\`
- \`onUpdate\`
- \`beforeDestroy\`
- \`afterDestroy\`

## Why This Matters

These hooks are important for future:

- instrumentation
- annotations
- extension packs
- diagnostics
- synchronized dashboard behaviors
`,Zn=`---
title: Packs and Registration
description: Chart packs and registration are part of the long-term packaging strategy for Infinity Charts.
heading: Packs and Registration
summary: Breadth should scale through organized packs, not one giant undifferentiated bundle.
status: Stable
---

As the platform grows, chart families should scale through organized packs rather than one giant undifferentiated bundle.

## Current Foundation

Infinity Charts already has internal chart-pack registration through the core charts pack.

## Why Packs Matter

Packs allow the platform to grow toward:

- core charts
- analytical charts
- radial and widget packs
- monitoring packs
- future domain extensions

## Design Constraint

These packs should stay inside the JavaScript / TypeScript core ecosystem.

They are not a reason to mix framework adapters into this repository.
`,Yn=`---
title: Area Chart
description: Use area charts when you want trend plus volume presence in the same visual.
heading: Area Chart
summary: The area chart extends line semantics with stronger accumulation and presence cues.
demo: area-forecast
status: Live
---

Area charts are useful when a plain line is too light and a bar chart is too discrete.

## Good Fits

- capacity planning
- demand accumulation
- forecast envelopes
- volume-oriented trend views

## Tradeoff

Area charts bring stronger visual weight, which is helpful for emphasis but can also create clutter faster in dense multi-series layouts.

## Current State

The current engine foundation supports:

- single and multi-series area charts
- shared cartesian axis system
- the same theme and legend infrastructure as line charts

## Recommendation

Use area charts sparingly in dense dashboards. They are best when the filled region adds meaning, not just decoration.

`,Xn=`---
title: 3D Bar Chart
description: Use the first live 3D chart in Infinity Charts for premium category comparisons and depth-rich dashboard surfaces.
heading: 3D Bar Chart
summary: The 3D family starts here with a real chart in the core, not just a roadmap bullet.
demo: bar-3d-launch
status: Live
---

The 3D bar chart is the first live step into the 3D family of Infinity Charts.

## When To Use It

- premium product showcases
- executive dashboards that need strong visual hierarchy
- category comparisons where depth helps the presentation
- launch, growth, and portfolio surfaces that benefit from a more dimensional treatment

## When Not To Use It

- dense analytical views where precision matters more than theater
- accessibility-critical surfaces where a flatter chart is easier to parse
- dashboards that already feel visually overloaded

## Current Capabilities

- grouped multi-series comparison
- shared axis system
- thresholds
- configurable depth and face shading
- floor plane and projected shadow treatment
- explicit internal color overrides through \`colors\`
- integration with the same core lifecycle and update model as 2D charts

## Example

\`\`\`ts
createChart({
  container,
  type: "bar-3d",
  title: { text: "Launch velocity", subtitle: "3D category comparison" },
  labels: ["Alpha", "Beta", "Gamma", "Delta"],
  series: [
    { name: "Velocity", data: [36, 48, 42, 58] },
    { name: "Quality", data: [28, 34, 39, 44], color: "#2dd4bf" }
  ],
  theme: "dark",
  colors: {
    plotBackground: "#0d1628",
    plotBorder: "#21314a",
    legendText: "#dbe6f5"
  },
  bar3d: {
    depthX: 28,
    depthY: 18,
    floorColor: "#111c32",
    floorLineColor: "#2a3a56",
    shadowColor: "rgba(2, 6, 23, 0.45)"
  }
});
\`\`\`

## Why This Matters

The platform goal is not a handful of flat starter charts. It is a wide visualization system. Shipping a first 3D chart in the core makes that direction visible in a concrete way.
`,ea=`---
title: Bar and Column Chart
description: Compare categorical values with a grouped vertical bar or column layout.
heading: Bar and Column Chart
summary: The current \`bar\` type acts as the core vertical categorical comparison chart.
demo: bar-environments
status: Live
---

The current first-phase \`bar\` chart behaves as a vertical categorical comparison chart, which many teams would also describe as a column chart.

## Best For

- environment comparisons
- team output
- monthly totals
- grouped category comparisons

## Current Strengths

- grouped multi-series layout
- shared cartesian axes
- threshold overlays
- compact dashboard card fit

## Naming Note

The long-term platform will likely expose clearer separation between horizontal bar and vertical column variants. In the current foundation, \`bar\` covers the vertical comparison use case.

## Example

\`\`\`ts
createChart({
  container,
  type: "bar",
  labels: ["CPU", "Memory", "Requests", "Latency"],
  series: [
    { name: "Production", data: [82, 74, 91, 38] },
    { name: "Staging", data: [51, 42, 64, 47], color: "#38bdf8" }
  ]
});
\`\`\`

`,ta=`---
title: Battery Meter
description: Use a battery-style widget for remaining reserve, charge, energy, or error-budget style surfaces.
heading: Battery Meter
summary: A dashboard-native charge meter built on the same widget foundation as the gauge family.
demo: battery-meter
status: Live
---

Battery-style meters are useful when the mental model is not only progress, but remaining reserve.

## Best Use Cases

- device or backup battery status
- remaining SLA or error budget
- warehouse or capacity reserve
- any “remaining amount” widget that benefits from a familiar metaphor

## Current Capabilities

- segmented battery body
- threshold-aware coloring
- center-aligned value and state labels
- works in plain JavaScript through the browser bundle

## Example

\`\`\`ts
createChart({
  container,
  type: "battery",
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
  }
});
\`\`\`
`,na=`---
title: Combo Chart
description: Use combo charts when plan, actual, forecast, and context must live in one view.
heading: Combo Chart
summary: Mixed chart composition is a high-value enterprise primitive and now has a first core implementation.
demo: combo-plan-vs-actual
status: Live
---

Combo charts are a core enterprise pattern because teams often need bars and lines in the same frame.

## When To Use It

- actual vs plan
- volume plus trend
- revenue plus margin
- throughput bars with latency line overlays

## Current Capabilities

- per-series type selection for \`bar\`, \`line\`, \`area\`, and \`scatter\`
- shared categorical axis
- threshold overlays
- shared legend and theme system

## Example

\`\`\`ts
createChart({
  container,
  type: "combo",
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  series: [
    { name: "Actual", type: "bar", data: [28, 31, 34, 38, 41, 44] },
    { name: "Plan", type: "line", data: [30, 32, 35, 37, 40, 43], color: "#38bdf8" },
    { name: "Forecast", type: "area", data: [29, 33, 36, 40, 45, 48], color: "#2dd4bf" }
  ]
});
\`\`\`

## Why Combo Matters

Combo is one of the clearest separators between a lightweight chart package and a platform core. Mature products document it prominently because real dashboards rely on it constantly.

See also [Chart Selection](/patterns/chart-selection) and [Operations Dashboards](/patterns/operations-dashboards).
`,aa=`---
title: Donut Chart
description: Use donut charts for radial summaries, status distributions, and card-friendly part-to-whole views.
heading: Donut Chart
summary: Donut is a core radial primitive, not just a decorative variation.
demo: donut-alerts
status: Live
---

Donut charts matter more than they may seem. In modern product dashboards they are often used as:

- alert distribution widgets
- budget summaries
- utilization panels
- executive summary cards

## Why Donut Is A Core Primitive

The center space enables:

- totals
- short labels
- KPI overlays
- future widget hybrids

That makes donut an important building block for dashboard-native visualizations.

## Current Capabilities

- per-slice colors
- total in center
- shared theme system
- legend integration

## Long-Term Relevance

The same radial foundations will also matter for future work like:

- radial gauges
- progress rings
- multilevel radial charts
- sunburst-like structures

`,ra=`---
title: Semicircle Gauge
description: Use a compact half-arc gauge for small dashboard cards and narrow monitoring layouts.
heading: Semicircle Gauge
summary: A lighter, card-friendly gauge variant built on the same core engine.
demo: gauge-semicircle
status: Live
---

The semicircle gauge keeps the same threshold-aware value reading as the classic gauge, but compresses the shape into a tighter half-arc that works better in cards and stacked dashboard surfaces.

## Best Use Cases

- compact monitoring cards
- SLA and availability widgets
- executive scorecards with little vertical space
- dense grids where a full radial widget would feel too heavy

## Current Capabilities

- half-arc layout optimized for smaller cards
- threshold bands with clear state messaging
- centered KPI readout
- the same update model used by the rest of the engine

## Example

\`\`\`ts
createChart({
  container,
  type: "gauge-semicircle",
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
  }
});
\`\`\`
`,ia=`---
title: Gauge Chart
description: Use a radial gauge for velocity-meter style KPIs, health signals, and threshold-aware monitoring surfaces.
heading: Gauge Chart
summary: The first live velocimeter-style chart in Infinity Charts.
demo: gauge-health
status: Live
---

The gauge chart brings a true velocimeter-style widget into the live core. It is built for dashboard surfaces where a single number needs stronger state context than a raw KPI text can provide.

## When To Use It

- infrastructure or service health cards
- CPU, memory, or latency saturation summaries
- SLA and target-completion surfaces
- scorecards where thresholds matter at a glance
- compact monitoring panels that need more than a number

## When Not To Use It

- dense comparisons across many categories
- historical trend analysis over time
- precise analytical reading where line or bar charts communicate better

## Current Capabilities

- simple single-value API
- configurable \`min\`, \`max\`, and \`unit\`
- colored status bands
- needle-based reading with center value label
- browser-bundle support for plain JavaScript pages
- integration with the same engine lifecycle and update APIs as other charts

## Example

\`\`\`ts
createChart({
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
});
\`\`\`

## Why It Matters

Gauge charts are one of the clearest signals that Infinity Charts is growing beyond basic standalone charting and into dashboard-native visual modules. This is the first live step in that widget direction.
`,sa=`---
title: Line Chart
description: Use line charts for trends, comparisons, and realtime sequences.
heading: Line Chart
summary: The most important foundational cartesian chart in the current engine.
demo: line-overview
status: Live
---

Line charts are one of the highest-leverage chart types in the platform because they support:

- trend analysis
- multi-series comparison
- realtime feeds
- threshold overlays
- compact dashboard panels

## When To Use It

Use a line chart when the main job is to show change across an ordered sequence.

Typical use cases:

- revenue over time
- throughput and latency
- product usage trends
- forecast vs actual

## When Not To Use It

Avoid line charts when:

- categories are unordered
- the main goal is part-to-whole comparison
- the values are better interpreted as discrete blocks than continuous movement

## Current Capabilities

- single-series input
- multi-series input
- threshold overlays
- theme switching
- responsive layout
- append-based realtime updates

## Example

\`\`\`ts
createChart({
  container,
  type: "line",
  labels: ["Q1", "Q2", "Q3", "Q4"],
  series: [
    { name: "Revenue", data: [42, 51, 57, 68] },
    { name: "Plan", data: [40, 48, 56, 60], color: "#7dd3fc" }
  ],
  thresholds: [
    { value: 60, axis: "y", label: "Target" }
  ]
});
\`\`\`

## Realtime Notes

The line chart is currently the best fit for live append flows in the first engine phase.

See [Realtime Updates](/concepts/realtime-updates) for the broader model.

`,oa=`---
title: Pie Chart
description: Use pie charts for simple part-to-whole comparisons with a small number of categories.
heading: Pie Chart
summary: Pie is supported, but it should be used with discipline.
demo: pie-allocation
status: Live
---

Pie charts are best when the story is simple and the number of categories is small.

## Good Use Cases

- budget split
- team share
- categorical allocation with 3 to 5 slices

## Weak Use Cases

Avoid pie charts when:

- the values are too close to compare
- there are too many slices
- trend over time matters more than the part-to-whole snapshot

## Practical Note

For many dashboard scenarios, donut is usually the better long-term primitive because the center can carry a useful summary.

`,la=`---
title: Radial Progress
description: Use a ring-style radial progress chart for modern KPI completion widgets and goal tracking.
heading: Radial Progress
summary: A cleaner, minimal circular progress primitive for product dashboards.
demo: radial-progress
status: Live
---

Radial progress is the minimal sibling of the gauge family. Instead of a needle, it focuses on a clean progress arc, center value, and threshold-aware status.

## Best Use Cases

- goal completion widgets
- quota tracking
- onboarding or rollout progress
- KPI surfaces where the visual should feel lighter than a full gauge

## Current Capabilities

- ring-style progress arc
- centered KPI readout
- threshold coloring
- browser-bundle friendly config

## Example

\`\`\`ts
createChart({
  container,
  type: "radial-progress",
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
  }
});
\`\`\`
`,ca=`---
title: Scatter Chart
description: Use scatter charts to analyze correlation, clustering, and quantitative relationships across two numeric axes.
heading: Scatter Chart
summary: Scatter brings the first continuous x/y analytical view into the live engine.
demo: scatter-correlation
status: Live
---

Scatter charts are one of the first major steps from “dashboard charting” into “analytical charting”.

## What Scatter Is Good For

- correlation analysis
- cohort comparison
- outlier spotting
- cluster discovery
- operational signal exploration

## Why It Matters For The Platform

Scatter charts require a continuous x-axis instead of the categorical band scale used by line and bar charts.

That makes scatter important architecturally because it pushes the engine further toward:

- richer scale systems
- analytical chart families
- more advanced future views like bubble and error scatter

## Current Scope

The first live scatter implementation supports:

- numeric x/y points
- multi-series plotting
- title and legend system
- threshold overlays on y
- shared theming and renderer foundation

## Example

\`\`\`ts
createChart({
  container,
  type: "scatter",
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
    }
  ]
});
\`\`\`

## What Comes Next

Scatter opens a cleaner path toward:

- bubble
- error scatter
- selection brushes
- quadrant overlays

`,da=`---
title: Sparkline
description: Use sparklines inside KPI cards and dense dashboard surfaces.
heading: Sparkline
summary: Compact charts are a product feature, not a reduced-quality afterthought.
demo: kpi-sparkline
status: Live
---

Sparklines are miniature trend views designed to live inside cards, tables, and compact monitoring panels.

## When To Use It

- KPI cards
- dense monitoring tiles
- tables with embedded trend context
- side-by-side metric comparisons

## Why It Matters

Compact charts are where many libraries feel awkward. Teams frequently want a professional KPI card with a tiny trend line, but the API often assumes a full chart canvas with full chrome.

## Current Capabilities

- chart type dedicated to compact rendering
- reduced layout chrome by default
- endpoint emphasis
- current-value display
- theme-aware card presentation

## Example

\`\`\`ts
createChart({
  container,
  type: "sparkline",
  series: [
    { name: "Net retention", data: [12, 15, 14, 18, 21, 20, 24] }
  ],
  theme: "dark"
});
\`\`\`

## Product Direction

Sparkline is a foundation for future dashboard widgets such as:

- KPI plus sparkline cards
- table cell charts
- status panels
- monitoring panels with thresholds and anomaly states
`,ha=`---
title: Stacked Area Chart
description: Use stacked area charts to show composition and accumulation over time.
heading: Stacked Area Chart
summary: The first dashboard-native accumulation chart now lives in the core engine.
demo: stacked-area-capacity
status: Live
---

Stacked area charts are useful when the story is not just trend, but contribution.

## When To Use It

- capacity composition over time
- channel mix trends
- environment usage splits
- occupied vs free resource tracking

## When Not To Use It

- when exact per-series comparison matters more than total composition
- when categories should not visually stack
- when negative values dominate the story

## Current Capabilities

- multiple stacked series
- shared cartesian axes
- threshold overlays
- responsive layout
- theme-aware fills and lines

## Example

\`\`\`ts
createChart({
  container,
  type: "stacked-area",
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  series: [
    { name: "Reserved", data: [22, 24, 27, 30, 34, 36] },
    { name: "Queued", data: [8, 10, 12, 11, 10, 9], color: "#38bdf8" },
    { name: "Free", data: [14, 13, 10, 8, 7, 6], color: "#2dd4bf" }
  ]
});
\`\`\`

## Recommended Use Cases

- operations capacity dashboards
- product tier mix tracking
- support volume allocation
- inventory utilization views

The stacked area chart is one of the first signs that the platform is moving beyond isolated “starter charts” and into dashboard composition territory.
`,ua=`---
title: Thermometer
description: Use vertical and horizontal thermometer charts for level, saturation, occupancy, and risk-style widgets.
heading: Thermometer
summary: The thermometer family covers both vertical and horizontal fill meters in the live core.
demo: thermometer-vertical
status: Live
---

The thermometer family is useful when the data should feel like a level filling up rather than a needle rotating around a dial.

## Best Use Cases

- storage or capacity saturation
- room or seat occupancy
- risk and severity scoring
- temperature-like monitoring surfaces

## Variants In Core

- \`thermometer\`
- \`thermometer-horizontal\`

## Current Capabilities

- threshold bands
- compact widget layout
- vertical and horizontal orientations
- smooth value updates through the same chart instance API

## Example

\`\`\`ts
createChart({
  container,
  type: "thermometer",
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
  }
});
\`\`\`
`,pa=`---
title: Accessibility and Responsive Behavior
description: Accessibility and responsive behavior are platform concerns, not afterthoughts.
heading: Accessibility and Responsive Behavior
summary: Charts need to stay readable across containers, screen sizes, and interaction conditions.
status: In Progress
---

Accessibility and responsive behavior should be part of chart system design from the beginning.

## Responsive Concerns

For Infinity Charts, responsive behavior includes:

- container resize handling
- plot area recalculation
- legend adaptation
- smaller-card readability
- compact dashboard layouts

## Accessibility Concerns

Important areas include:

- readable contrast
- semantic chart labels
- sensible motion defaults
- avoiding tooltip-only meaning
- future keyboard-friendly interaction patterns

## Current State

The first foundation already includes:

- automatic container measurement
- resize handling
- reduced-motion awareness in animation resolution
- basic renderer-level aria labeling

## What Still Needs More Work

- stronger accessibility metadata
- more explicit keyboard patterns
- richer screen-reader guidance
- chart-family-specific responsive recipes

`,ma=`---
title: Animation System
description: Animation in Infinity Charts should improve comprehension and polish without harming dashboard readability.
heading: Animation System
summary: Motion is part of the product system, not garnish.
status: Stable
---

Animation in Infinity Charts is treated as a product capability rather than a marketing effect.

## What Animation Should Help With

- initial understanding
- update transitions
- state continuity
- live monitoring readability
- perceived quality

## What Animation Should Not Become

- noisy by default
- too slow for operational dashboards
- a substitute for information hierarchy

## Current Foundation

The engine currently resolves:

- \`enabled\`
- \`duration\`
- \`easing\`
- \`stagger\`
- \`mode\`

It also respects reduced-motion preferences when available.

## Expected Evolution

Later phases should expand this into:

- enter / update / exit semantics
- per-series motion profiles
- realtime-safe presets
- richer docs showcase motion

## Recommendation

Use subtle motion for production dashboards and save more expressive sequences for demos, marketing, and learning experiences.

`,ga=`---
title: Business Value
description: Charts should explain decisions, expose risk, and invite action instead of staying as passive visuals.
heading: Business Value
summary: A serious chart is not only rendered data. It is context, interaction, and actionability.
status: Stable
---

The market does not reward charts just because they look polished. A chart becomes useful when it helps someone answer a business question faster.

## What Makes A Chart Valuable

Useful product charts usually combine several layers at once:

- fast visual scanning
- hover context with exact values
- click or tap paths into deeper detail
- thresholds and status cues
- time navigation for long series
- responsive behavior inside real dashboard cards

That is why strong chart products keep investing in tooltip systems, zooming, brush navigation, annotations, range presets, and event APIs.

## Patterns That Matter In Real Products

These patterns show up repeatedly across analytics, operations, finance, and monitoring:

- shared tooltip for comparing multiple series at one timestamp
- axis pointer or crosshair for precise reading
- drilldown events that open detail views or filters
- thresholds that surface healthy, warning, and critical zones
- compact overview navigators for long time windows
- live updates that do not feel jumpy or lossy

## What Infinity Charts Is Doing Now

The current foundation already supports:

- entry motion for chart elements
- hover tooltip targets on core live charts
- click and hover events from the chart instance event bus
- load-on-demand chart modules in ESM environments
- loading states while a chart module is being fetched

## What Comes Next

The next business-facing interaction layer should keep expanding toward:

- shared multi-series tooltips
- time-series brush and navigator components
- richer drilldown contracts
- annotations and event pins
- chart-to-dashboard filter synchronization
- export and comparison workflows

## Why This Is A Product Decision

Static charts are easy to demo. Decision-support charts are harder to build and much more valuable.

Infinity Charts is being designed for the second category.
`,fa=`---
title: Chart Lifecycle
description: Learn how chart instances are created, updated, resized, and destroyed.
heading: Chart Lifecycle
summary: Instance lifecycle matters for integrations, performance, and long-term maintainability.
status: Stable
---

Infinity Charts uses an instance lifecycle rather than a fire-and-forget rendering model.

## Lifecycle Stages

The current engine foundation follows this flow:

1. Resolve the container
2. Normalize configuration
3. Normalize data into a chart payload
4. Build chart frame and scene
5. Diff into the active renderer
6. Emit lifecycle and plugin hooks

## Instance Methods

The public instance API currently includes:

- \`update(...)\`
- \`updateSeries(...)\`
- \`appendData(...)\`
- \`appendBatch(...)\`
- \`replaceData(...)\`
- \`setTheme(...)\`
- \`resize(...)\`
- \`registerPlugin(...)\`
- \`on(...)\`
- \`destroy()\`

## Why This Matters

For serious products, lifecycle is not a small detail. It affects:

- dashboard refresh behavior
- memory discipline
- plugin integration
- responsive handling
- realtime updates

## Destruction

Always destroy chart instances when their containers are removed or replaced.

\`\`\`ts
const chart = createChart(config);

// later
chart.destroy();
\`\`\`

This becomes especially important in dashboard editors, SPA views, and custom component systems.

`,ba=`---
title: Configuration Model
description: Understand how Infinity Charts balances simple mode and advanced enterprise-grade configuration.
heading: Configuration Model
summary: The configuration system is layered rather than fragmented.
status: Stable
---

Infinity Charts is designed around one product rule:

> simple by default, infinite by design

That principle directly shapes the configuration system.

## Simple Mode

Simple mode focuses on fast adoption.

Typical fields:

- \`container\`
- \`type\`
- \`data\`
- \`labels\`
- \`title\`
- \`theme\`

Example:

\`\`\`ts
createChart({
  container,
  type: "bar",
  title: "Environment usage",
  data: {
    Production: 78,
    Staging: 42,
    QA: 26
  }
});
\`\`\`

## Advanced Mode

Advanced mode groups behavior by concern instead of throwing everything into a flat namespace.

Important groups include:

- \`series\`
- \`xAxis\`
- \`yAxis\`
- \`grid\`
- \`layout\`
- \`legend\`
- \`theme\`
- \`animation\`
- \`responsive\`
- \`realtime\`
- \`thresholds\`
- \`plugins\`

Example:

\`\`\`ts
createChart({
  container,
  type: "line",
  title: {
    text: "Revenue vs plan",
    subtitle: "Quarterly snapshot"
  },
  labels: ["Q1", "Q2", "Q3", "Q4"],
  series: [
    { name: "Revenue", data: [42, 51, 57, 68] },
    { name: "Plan", data: [40, 48, 56, 60], color: "#7dd3fc" }
  ],
  thresholds: [
    { value: 60, axis: "y", label: "Target" }
  ],
  theme: "dark"
});
\`\`\`

## Internal Normalization

Both simple and advanced mode are normalized into one resolved configuration before rendering.

That keeps the engine maintainable because chart definitions do not have to care where the input came from.

## Long-Term Rule

When new features are introduced, they should map into the existing grouping model rather than creating scattered special-case options.

`,ya=`---
title: CSS Overrides
description: Override chart visuals from CSS without rewriting the chart config.
heading: CSS Overrides
summary: Infinity Charts exposes root classes and CSS variables so product teams can restyle charts from their own stylesheet.
status: Stable
---

Infinity Charts can be themed from JavaScript with \`theme\`, \`palette\`, and \`colors\`, but that is not the only path.

The engine also exposes a CSS-based override surface so teams can align charts with an existing design system or product shell.

## Root Classes

Every mounted chart adds stable classes to the container and SVG root:

- \`.infinity-chart-host\`
- \`.infinity-chart-host--line\`
- \`.infinity-chart-host--pie\`
- \`.infinity-chart-host--gauge\`
- \`.infinity-chart-theme--light\`
- \`.infinity-chart-theme--dark\`
- \`.infinity-chart-svg\`
- \`.infinity-chart-svg--pie\`

That means you can scope overrides by chart type without touching the chart config:

\`\`\`html
<div id="revenue-chart" class="finance-surface"></div>
\`\`\`

\`\`\`css
.finance-surface.infinity-chart-host--line {
  --ic-plot-background: #10151f;
  --ic-plot-border: #263247;
  --ic-title: #f7fbff;
  --ic-text: #d3dbea;
  --ic-grid: rgba(255, 255, 255, 0.12);
  --ic-series-1: #5eead4;
  --ic-series-2: #f59e0b;
}
\`\`\`

## CSS Variables

These variables are available on every chart:

- \`--ic-background\`
- \`--ic-surface\`
- \`--ic-surface-alt\`
- \`--ic-plot-background\`
- \`--ic-plot-border\`
- \`--ic-border\`
- \`--ic-grid\`
- \`--ic-axis\`
- \`--ic-text\`
- \`--ic-muted-text\`
- \`--ic-title\`
- \`--ic-legend-text\`
- \`--ic-tooltip-background\`
- \`--ic-tooltip-text\`
- \`--ic-point-stroke\`
- \`--ic-threshold\`
- \`--ic-gauge-track\`
- \`--ic-gauge-needle\`
- \`--ic-success\`
- \`--ic-warning\`
- \`--ic-danger\`
- \`--ic-info\`
- \`--ic-interactive-glow\`
- \`--ic-shadow\`
- \`--ic-font-family\`
- \`--ic-series-1\` through \`--ic-series-8\`

These variables always fall back to the active Infinity Charts theme, so charts still render correctly even when you do not define any override.

## Common Internal Classes

For element-level overrides, the engine also exposes stable classes on common SVG nodes:

- \`.ic-title\`
- \`.ic-subtitle\`
- \`.ic-legend-label\`
- \`.ic-legend-dot\`
- \`.ic-value-label\`
- \`.ic-threshold-line\`
- \`.ic-threshold-label\`
- \`.infinity-chart-tooltip\`

Example:

\`\`\`css
.finance-surface.infinity-chart-host--pie .ic-value-label {
  fill: #3a2412;
  font-weight: 800;
}

.finance-surface .ic-legend-label {
  fill: #4d5b70;
}
\`\`\`

## Practical Pattern

Use JavaScript config for chart behavior.

Use CSS when the visual system should follow:

- brand themes
- dashboard card variants
- admin panel skins
- tenant-specific themes
- white-label products

That separation keeps business behavior in the chart config and product skinning in the stylesheet.

## Example

\`\`\`ts
import { createChart } from "@stackline/infinity-charts";

createChart({
  container: document.querySelector("#revenue-chart"),
  type: "line",
  title: "Revenue vs plan",
  labels: ["Q1", "Q2", "Q3", "Q4"],
  series: [
    { name: "Revenue", data: [42, 51, 57, 68] },
    { name: "Plan", data: [40, 48, 56, 60] }
  ],
  theme: "light"
});
\`\`\`

\`\`\`css
#revenue-chart {
  --ic-plot-background: #0f1724;
  --ic-plot-border: #22314a;
  --ic-title: #f7fbff;
  --ic-muted-text: #93a4bd;
  --ic-grid: rgba(148, 163, 184, 0.18);
  --ic-series-1: #60a5fa;
  --ic-series-2: #f59e0b;
  --ic-tooltip-background: #08111c;
  --ic-tooltip-text: #f8fafc;
}
\`\`\`

## Important Detail

Palette variables affect the default series colors.

If you pass explicit \`color\` values inside \`series\` or \`data\`, those explicit colors take precedence unless you target the rendered nodes directly with CSS selectors.
`,va=`---
title: Data Pipeline
description: The engine needs a stronger data model than raw series arrays if it wants to scale into a platform.
heading: Data Pipeline
summary: Simple input stays easy, but long-term growth depends on clearer dataset and transform foundations.
status: Strategic
---

Infinity Charts already normalizes simple \`data\` and \`series\` input into an internal payload. That is the right start, but the next serious step is to turn data handling into a first-class subsystem.

## Why This Matters

Broad chart coverage breaks down quickly when every chart expects slightly different raw input.

A stronger data pipeline unlocks:

- easier chart switching without rewriting data
- multi-series reuse from one source table
- transforms such as filter, sort, aggregate, binning, and rolling windows
- cleaner docs because the same mental model applies across chart families
- realtime updates with better control over append, replace, and windowing rules

## Current Foundation

The current engine already has a useful baseline:

- minimal input can be a simple array, record, or labeled data list
- series payloads are normalized before rendering
- append-based updates work without re-instantiating the chart
- chart definitions receive a stable internal payload instead of raw user input

## Recommended Infinity Direction

Phase the data system in three layers:

| Layer | Purpose | Status |
| --- | --- | --- |
| Input adapters | Accept arrays, records, labeled values, and explicit series | In progress |
| Internal dataset model | Shared dimensions, encoded fields, and reusable sources | Next |
| Transform pipeline | Filter, sort, rolling window, histogram binning, box plot prep, aggregation | Planned |

## Design Rules

- keep simple mode short enough for a first chart
- make advanced mode explicit rather than magical
- normalize once and reuse many times
- allow transforms to feed more than one series
- treat realtime append and sliding windows as part of the data pipeline, not a renderer hack

## Practical Implication

If Infinity wants to support statistical charts, flow charts, financial views, and dashboard widgets cleanly, the engine will eventually need a \`dataset\` and \`transform\` story that is visible in both API design and documentation.
`,wa=`---
title: Layout System
description: Serious charting engines need a layout model that can scale from one chart to dense dashboard surfaces.
heading: Layout System
summary: Titles, plot area, legend, and future panels should be explicit layout zones, not incidental spacing.
status: Strategic
---

Infinity Charts already computes a chart frame with \`header\`, \`body\`, \`plot\`, and optional \`legend\` bounds. That is more important than it may look because layout becomes one of the hardest parts of a charting platform once dashboard density increases.

## Current Zones

- outer surface
- header
- body
- plot area
- legend area

This keeps renderers focused on drawing instead of recomputing page geometry from scratch.

## Why It Needs To Go Further

The inspiration images repeatedly point to product patterns that are not just “a plot inside a box”.

They show:

- KPI plus chart cards
- status chips beside titles
- dense legends
- compact monitoring tiles
- radial widgets beside trend charts
- side annotations and callout space

## What A Mature Layout Engine Should Handle

- title and subtitle hierarchy
- legends on any edge with compact wrapping rules
- plot padding rules per chart family
- room for threshold labels and future annotations
- compact widget layouts such as sparkline cards
- multi-panel compositions later for small multiples and dashboard-native widgets

## Direction For Infinity

Near term:

- keep chart frame calculation centralized
- extend layout tokens for compact cards and widget modes
- make header and legend behavior more configurable

Later:

- add composition primitives for panels and card chrome
- support synchronized cross-chart layouts
- support mixed widget surfaces with KPI, sparkline, gauge, and chart blocks

The layout system is where “simple by default, infinite by design” becomes real.
`,xa=`---
title: On-Demand Modules
description: Infinity Charts can load chart implementations only when they are requested instead of shipping the full engine up front.
heading: On-Demand Modules
summary: Breadth should not force every application to pay the full download cost on first paint.
status: Stable
---

Infinity Charts is meant to grow very broad, but that breadth cannot come at the cost of sending every chart implementation to every browser session.

## Core Principle

If an application only needs a line chart, it should not eagerly download the whole future platform.

That is why the ESM entry of Infinity Charts resolves built-in chart modules on demand.

## How It Works

When you create a chart with a built-in type, the engine can fetch that chart implementation only when needed.

\`\`\`ts
import { createChart } from "@stackline/infinity-charts";

createChart({
  container: "#chart",
  type: "line",
  data: [18, 24, 21, 30]
});
\`\`\`

In an ESM-aware environment, the line chart implementation can be loaded only when the chart is requested.

## Manual Control

You can also preload specific families when you want to hide network latency ahead of time.

\`\`\`ts
import { loadChart, preloadCharts } from "@stackline/infinity-charts";

await loadChart("line");
await preloadCharts(["bar", "donut", "gauge"]);
\`\`\`

## Full Bundle Versus On-Demand

Infinity Charts supports two delivery modes:

- ESM package usage: best when you want internal on-demand chart loading
- browser bundle usage: best when you want a single downloaded file and a global \`InfinityCharts\` API

The browser bundle stays convenient for plain HTML pages, while the ESM path is the better fit for applications that care about loading only the chart modules they use.

## Why This Matters

As the platform grows toward hundreds of chart and widget types, on-demand loading stops being an optimization detail and becomes part of the product architecture.
`,ka=`---
title: Performance
description: Performance is part of the engine architecture, especially for dashboards and live updates.
heading: Performance
summary: Beautiful charts are not enough if updates and dense views do not stay responsive.
status: Stable
---

Infinity Charts is meant for products where charts are not isolated decorations. They often live inside dashboards, update frequently, and coexist with many other charts.

## Current Performance Decisions

The current foundation already leans on:

- chart instances instead of re-creation
- render scheduling
- scene diffing
- responsive resize control
- append-based updates

## Why Performance Shows Up Early

If performance is ignored in the first phase, later chart families become harder to build cleanly.

That is especially true for:

- realtime monitoring
- dense dashboards
- analytical scatter plots
- future heatmaps and large datasets

## Practical Guidance

- prefer updating an existing chart instance
- use rolling windows for streaming views
- disable extra visual weight in very dense panels
- keep animation subtle for frequently updating charts

## Longer-Term Performance Work

- Canvas renderer path
- smarter data decimation
- larger-dataset strategies
- heavier chart-family-specific optimizations

`,Ca=`---
title: Plugin System
description: Plugins are part of the long-term expansion strategy for the Infinity Charts platform.
heading: Plugin System
summary: The core should stay clean while still leaving room for growth.
status: In Progress
---

Infinity Charts is being built as a platform core, which means extensibility needs a deliberate home.

## Current Foundation

The engine already includes plugin registration and lifecycle hooks around:

- initialization
- render
- update
- destroy

## Why Plugins Matter

Plugins help the core stay focused while still allowing future expansion for:

- annotations
- exports
- accessibility layers
- advanced interactions
- domain-specific visual packs

## Design Rule

Plugins should extend the engine without forcing framework-specific behavior into the core repository.

That boundary is important:

- core stays framework-agnostic
- wrappers, if they exist later, stay elsewhere
- advanced features can grow without turning the engine into a monolith

`,Sa=`---
title: Realtime Updates
description: Realtime support is part of the engine contract, not a side feature.
heading: Realtime Updates
summary: Incremental updates, rolling windows, and batched rendering are first-class concerns.
demo: realtime-stream
status: Stable
---

Realtime behavior is one of the places where Infinity Charts is intentionally trying to outgrow the expectations of many traditional chart libraries.

## Core Principle

Live updates should not require tearing down and re-creating a chart.

## Current Realtime Methods

- \`appendData(point)\`
- \`appendBatch(points)\`
- \`replaceData(data)\`
- \`updateSeries(series)\`

## Rolling Windows

The engine foundation already supports rolling-window style configs through \`realtime.maxPoints\`.

\`\`\`ts
createChart({
  container,
  type: "line",
  data: [124, 131, 128, 142, 149],
  realtime: {
    enabled: true,
    maxPoints: 16
  }
});
\`\`\`

## Why Realtime Is A Platform Concern

Realtime does not only affect line charts. It also affects:

- monitoring widgets
- KPI cards
- threshold states
- alert panels
- rolling dashboard tiles

That is why realtime belongs in the engine architecture rather than only in a niche chart family.

## Practical Guidance

Use realtime mode when you need:

- append-only feeds
- low overhead updates
- sliding windows
- stateful dashboards

Avoid overly decorative animation in high-frequency update paths. Clarity is more important than motion density.

`,Ta=`---
title: Rendering Architecture
description: Renderer-neutral scene composition is one of the core architectural choices in Infinity Charts.
heading: Rendering Architecture
summary: SVG is first, but renderer neutrality is the real design decision.
status: Stable
---

Infinity Charts is not being shaped as an SVG-only product even though SVG is the first active renderer.

## Current Path

Today the engine:

1. Resolves chart config and normalized payload
2. Computes frame and layout
3. Builds a renderer-agnostic scene tree
4. Diffs that scene into an SVG renderer

## Why This Is Better Than Direct DOM Drawing

Direct chart-to-DOM rendering tends to create long-term lock-in.

The scene model gives the platform a cleaner path toward:

- Canvas for larger datasets
- WebGL for dense or 3D-heavy cases
- shared chart definitions across renderers

## SVG First

SVG is still the right starting point for the current phase because it offers:

- good visual clarity
- simpler inspection
- better early-stage maintainability
- stronger near-term accessibility potential

## What The Docs Expect Over Time

As more chart families arrive, renderer strategy should remain invisible to most users.

The API should stay stable even if the best renderer for a given chart family changes later.

`,Pa=`---
title: Shared Behaviors
description: Define the behaviors that every serious Infinity Charts component should inherit, regardless of chart family.
heading: Shared Behaviors
summary: The product becomes premium when charts feel related, not random.
status: Strategic
---

Infinity Charts should not become a pile of unrelated renderers. The platform only feels professional when charts share the same behavioral contract.

## Universal States

Every serious chart or widget should be able to express:

- loading
- empty
- error
- partial data
- no permission
- live reconnecting

## Universal Interactions

The long-term baseline should include:

- hover and touch-friendly tooltips
- click to drilldown
- hover highlighting that makes the active datum obvious
- legend toggles
- loading states for charts that are fetched on demand
- reset zoom
- fullscreen mode
- export to PNG, SVG, and CSV
- copy image
- theme switching

## Data Contract Expectations

The engine should keep accepting multiple levels of data complexity:

- arrays of primitive values
- structured object arrays
- multi-series payloads
- timestamps
- incremental updates
- streaming sources
- partial updates without rebuilding the whole chart

## Performance Expectations

Breadth is only valuable if charts remain fast enough for real product use.

That means the platform should continue moving toward:

- intelligent downsampling
- virtualization for dense scenes
- motion that can be simplified or disabled
- Canvas and later WebGL paths where needed
- stable responsive rendering under resize pressure

## Accessibility Expectations

Every family should eventually inherit a stronger accessibility layer:

- keyboard navigation where interaction exists
- accessible focus states
- readable contrast
- color-vision-safe palette modes
- labels and summaries that are screen-reader friendly

## Event System Expectations

The event model should stay consistent across families:

- \`onHover\`
- \`onPointClick\`
- \`onLegendToggle\`
- \`onZoom\`
- \`onBrushChange\`
- \`onDrilldown\`
- \`onThresholdCross\`
- \`onLiveUpdate\`

## Why This Matters

The point is not only to have many charts. The point is to make a wide platform still feel coherent.

That coherence is what turns chart count into product quality.

Today, Infinity Charts already has the first live layer of this idea in the engine:

- hover targets on core live charts
- click events for points, slices, and gauges
- lazy chart loading states in the ESM build
`,La=`---
title: Theme System
description: Token-based theming makes Infinity Charts easier to scale across products and documentation.
heading: Theme System
summary: Themes are not just palettes. They are the visual contract of the engine.
demo: theme-switcher
status: Stable
---

Infinity Charts uses token-based theming instead of a flat bag of color overrides.

## Built-In Themes

The current foundation includes:

- \`light\`
- \`dark\`

These are not only palette swaps. They also define:

- surface colors
- plot background colors
- plot border colors
- border and grid structure
- text and title colors
- semantic state colors
- typography defaults

## Explicit Color Overrides

When a team does not want to redefine an entire theme object, Infinity Charts also supports a \`colors\` group for targeted internal overrides.

That surface is useful for changing things such as:

- plot background and plot border
- axis and grid colors
- legend and title text
- tooltip background and text
- point stroke color
- default threshold color
- gauge track and needle color
- hover glow accent

## Why Tokens Matter

Token-based theming is important because the engine is meant to power:

- standalone charts
- dashboard cards
- monitoring panels
- future widgets

A maintainable visual system has to survive all of those environments.

## Runtime Theme Switching

The chart instance can change themes without being recreated:

\`\`\`ts
chart.setTheme("dark");
\`\`\`

## CSS-Based Overrides

When a product team wants styling to come from the application stylesheet instead of the chart config, use the CSS override surface described in [CSS Overrides](/concepts/css-overrides).

## Long-Term Direction

The docs and the product should evolve together so examples stay visually coherent and the theming model stays documentable.
`,Aa=`---
title: Thresholds and Overlays
description: Thresholds are already in the foundation and should grow into a broader overlay system.
heading: Thresholds and Overlays
summary: Enterprise charting needs more than lines and bars. It needs context layers.
status: In Progress
---

Most dashboard users do not want raw values alone. They want values with context:

- target lines
- danger zones
- maintenance windows
- forecast bands
- anomaly callouts
- event markers

Infinity Charts already supports threshold lines in the core. That is the first step toward a more complete overlay model.

## Current Coverage

- y-axis threshold lines
- threshold labels
- threshold colors and dash styles

## Why Overlays Matter

Charts become decision tools when they encode operational meaning, not just magnitude.

Examples:

- “above 85% CPU is risky”
- “deploy started here”
- “forecast begins here”
- “error budget exhausted”

## Recommended Infinity Model

Phase 1:

- thresholds
- range bands
- target markers

Phase 2:

- point and interval annotations
- shaded maintenance windows
- badge and callout overlays

Phase 3:

- interaction-driven overlays
- alert-state overlays
- forecast confidence regions

Overlays should be treated as composable chart layers, not chart-specific hacks.
`,Ia=`---
title: Installation
description: Install and wire up Infinity Charts in a plain JavaScript or TypeScript project.
heading: Installation
summary: Setup guidance for the core engine.
status: Stable
---

Infinity Charts is designed to stay usable from plain JavaScript while remaining strongly typed for TypeScript consumers.

## Package

Install the core package from npm:

\`\`\`bash
npm install @stackline/infinity-charts
\`\`\`

The package entry is the best path when you want the engine to load chart implementations on demand instead of shipping the whole chart catalog to the browser up front.

## Browser Usage Without npm

If you want a plain HTML page without a bundler, use the browser bundle and the global \`InfinityCharts\` API.

\`\`\`html
<div id="chart"></div>
<script src="./infinity-charts.min.js"><\/script>
<script>
  InfinityCharts.create({
    container: document.getElementById("chart"),
    type: "line",
    data: [12, 18, 15, 22]
  });
<\/script>
\`\`\`

The browser distribution is intended for teams that prefer:

- downloaded assets checked into the project
- simple HTML pages
- script tags without package management
- self-hosted distributions instead of npm-based builds

For a fuller browser-first guide, see [Plain JavaScript](/getting-started/plain-javascript).

## Install From Source

If you are contributing from source or testing the repository directly, install dependencies and build the core package before using the examples or documentation playground:

\`\`\`bash
npm install
npm run build
\`\`\`

## Basic Project Setup

At minimum, you need:

1. A container element in the DOM
2. An import of \`createChart\`
3. Data and a chart type

\`\`\`html
<div id="chart"></div>
\`\`\`

\`\`\`ts
import { createChart } from "@stackline/infinity-charts";

createChart({
  container: document.querySelector("#chart"),
  type: "line",
  data: [12, 18, 15, 22]
});
\`\`\`

If you want to preload specific built-in charts before a route or dashboard opens, use:

\`\`\`ts
import { preloadCharts } from "@stackline/infinity-charts";

await preloadCharts(["line", "bar", "donut"]);
\`\`\`

For browser-first usage, the equivalent entry points are \`InfinityCharts.create(...)\` and \`InfinityCharts.mount(...)\`.

## Project Scope

Infinity Charts is the framework-agnostic core package. It is designed for direct use from plain JavaScript and TypeScript without requiring React, Vue, Angular, or any other UI runtime.

## Why There Are No Framework Installation Guides Here

This documentation does not include React, Vue, or Angular setup sections because the core package is intentionally framework-agnostic.

If wrappers are created later, they should be documented in their own package-specific documentation.
`,_a=`---
title: Plain JavaScript
description: Use Infinity Charts from a downloaded browser bundle without npm or a bundler.
heading: Plain JavaScript
summary: Self-hosted browser usage for simple HTML pages and script-tag workflows.
status: Stable
---

Infinity Charts is designed to work in plain JavaScript projects, not only through npm-based application builds.

If your team wants to ship charts in a simple HTML page, a server-rendered template, a CMS block, or an internal portal without a bundler, use the browser distribution files and the global \`InfinityCharts\` API.

This mode prioritizes convenience. If your team wants the engine to fetch chart modules on demand, prefer the ESM package entry instead of the single browser bundle.

## Browser Files

The browser build ships these files:

- \`infinity-charts.js\`
- \`infinity-charts.min.js\`

Use the minified file in production and the non-minified file when you want easier inspection during local development.

## ESM Browser Loading

If you want browser-native modules and on-demand built-in chart loading without npm, you can also import the ESM build from a module script instead of using the global bundle.

\`\`\`html
<script type="module">
  import { createChart, loadChart } from "./dist/index.js";

  await loadChart("line");

  createChart({
    container: document.getElementById("chart"),
    type: "line",
    data: [14, 22, 19, 31]
  });
<\/script>
\`\`\`

## Minimal HTML Example

\`\`\`html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Infinity Charts Example</title>
    <style>
      #chart {
        width: 720px;
        height: 420px;
      }
    </style>
  </head>
  <body>
    <div id="chart"></div>

    <script src="./infinity-charts.min.js"><\/script>
    <script>
      InfinityCharts.create({
        container: document.getElementById("chart"),
        type: "line",
        title: "Monthly revenue",
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        data: [14, 18, 17, 26, 29],
        theme: "light"
      });
    <\/script>
  </body>
</html>
\`\`\`

## Branded Browser API

The browser global intentionally exposes a small branded surface:

- \`InfinityCharts.create(...)\`
- \`InfinityCharts.mount(...)\`
- \`InfinityCharts.usePack(...)\`
- \`InfinityCharts.registerPlugin(...)\`

\`create(...)\` and \`mount(...)\` both create a chart instance. The goal is to keep script-tag usage readable in plain HTML without making the API feel tied to any framework.

## When This Mode Fits Best

Browser-first usage is especially useful for:

- self-hosted dashboard pages
- CMS or admin templates
- internal tools with very light frontend architecture
- prototypes that still need a serious charting engine
- teams that want to check compiled assets into their own deployment flow

## When To Prefer npm

Use the npm package when you want:

- ESM imports
- TypeScript autocompletion from the package
- bundler-based application builds
- internal on-demand chart loading
- tighter version control through package management

Both delivery modes are part of the product surface. Infinity Charts should feel first-class in plain JavaScript and in TypeScript projects.
`,$a=`---
title: Quick Start
description: Render a first chart with minimal configuration and then evolve toward the advanced model.
heading: Quick Start
summary: Fastest path to a working chart.
demo: quick-start-line
status: Stable
---

The quickest way to understand Infinity Charts is to start with the simplest possible configuration and then see how the API expands cleanly.

## Minimal Example

\`\`\`ts
import { createChart } from "@stackline/infinity-charts";

const chart = createChart({
  container: document.querySelector("#chart"),
  type: "line",
  title: "Monthly revenue",
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  data: [14, 18, 17, 26, 29],
  theme: "dark"
});
\`\`\`

## Browser Global Example

\`\`\`html
<div id="chart"></div>
<script src="./infinity-charts.min.js"><\/script>
<script>
  const chart = InfinityCharts.mount({
    container: document.getElementById("chart"),
    type: "line",
    title: "Monthly revenue",
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    data: [14, 18, 17, 26, 29],
    theme: "dark"
  });
<\/script>
\`\`\`

## What The Engine Resolves For You

With a short config like that, Infinity Charts still resolves a lot of structure internally:

- chart frame
- theme tokens
- axes
- grid
- palette
- animation defaults
- renderer selection
- data normalization

That is a deliberate product decision. The beginner experience should feel fast, but the engine should still stay structurally consistent underneath.

## Grow The Same Instance

Once the chart exists, you can update it imperatively without re-creating the instance:

\`\`\`ts
chart.appendData({ label: "Jun", value: 31 });
chart.setTheme("light");
chart.resize();
\`\`\`

The same lifecycle methods are available from a chart created through \`InfinityCharts.create(...)\` or \`InfinityCharts.mount(...)\`.

## Where To Go Next

- [Configuration Model](/concepts/configuration-model)
- [Chart Lifecycle](/concepts/chart-lifecycle)
- [Line Chart Guide](/charts/line)
`,Ra=`---
title: Infinity Charts Documentation
description: Product-grade documentation for the framework-agnostic Infinity Charts core.
heading: Infinity Charts Documentation
summary: Overview page for the platform and docs site.
status: Platform
---

Infinity Charts is being built as a serious **JavaScript / TypeScript charting engine core** for teams that need more than a simple chart widget.

This documentation project is intentionally separate from the engine itself so the docs can grow into a full product surface with:

- onboarding
- chart guides
- architecture documentation
- API reference
- dashboard patterns
- troubleshooting
- examples and chart coverage

## What This Repository Covers

This documentation is for the **core engine only**.

That means:

- pure JavaScript / TypeScript usage
- browser-bundle usage without npm when needed
- framework-agnostic APIs
- no React-specific architecture
- no Vue-specific architecture
- no Angular-specific architecture

Future wrappers may exist later in their own packages, but they are not part of this repository or this documentation scope.

## How To Use These Docs

If you are new to the project, start here:

1. [Installation](/getting-started/installation)
2. [Quick Start](/getting-started/quick-start)
3. [Configuration Model](/concepts/configuration-model)
4. [Chart Lifecycle](/concepts/chart-lifecycle)

If you are evaluating the long-term platform direction, jump here:

1. [Rendering Architecture](/concepts/rendering-architecture)
2. [Realtime Updates](/concepts/realtime-updates)
3. [Chart Explorer](/chart-explorer)
4. [Example Gallery](/example-gallery)

## Documentation Principles

Infinity Charts docs are being written to become one of the product’s strongest advantages.

The rules are simple:

- make the simple path obvious
- make advanced capabilities discoverable
- document architecture, not just snippets
- be explicit about what is live today vs planned
- use real examples that map to actual product usage
`,Ma=`---
title: Chart Selection
description: Choosing the right chart type is part of product quality, not only a documentation convenience.
heading: Chart Selection
summary: Strong docs should help teams choose well, not just configure what they already picked.
status: Stable
---

One of the most useful things a chart documentation system can do is reduce bad chart choices.

## Fast Heuristics

Use:

- **line** for ordered trends
- **area** for trend plus magnitude presence
- **stacked area** for composition over time
- **bar / column** for categorical comparison
- **combo** for actual vs plan and volume plus trend
- **pie / donut** for simple part-to-whole
- **sparkline** for KPI cards and embedded widgets
- **scatter** for quantitative relationship analysis

## Dashboard Rule

If a chart will sit in a dense operational surface, prioritize:

- quick readability
- stable comparison
- low cognitive load

That often means line, bar, donut, and compact KPI patterns will outperform more exotic visuals.

## Product Rule

Novelty is not the goal. Fitness for use is.
`,Ea=`---
title: Dashboard Composition
description: Combine charts into readable cards, panels, and mixed dashboard surfaces.
heading: Dashboard Composition
summary: The platform is being built for dashboard composition, not isolated screenshots.
demo: dashboard-pattern
status: Stable
---

Infinity Charts should not be understood as a single-chart canvas product. The target product environment is often a dashboard with:

- multiple cards
- mixed chart families
- summary values
- compact legends
- dense but readable spacing

## Composition Rules

Good dashboard composition usually depends on:

- consistent card spacing
- restrained motion
- clear title hierarchy
- semantic coloring
- visual contrast between cards and plots

## Why The Core Architecture Cares

Dashboard needs affect core engine design:

- titles and legends must be reusable
- realtime updates must be low overhead
- themes must work across many cards at once
- compact chart variants need clean defaults

## Recommendation

Design at the level of **systems of charts**, not isolated chart screenshots.

`,Da=`---
title: Embedded Widgets
description: Embedded analytics products need small, reusable visual components, not only full-size charts.
heading: Embedded Widgets
summary: The platform should grow from charts into dashboard-native visual modules.
status: Strategic
---

Many SaaS products do not need a full analytics canvas on every screen. They need embedded visual summaries that fit inside:

- cards
- tables
- side panels
- mobile surfaces
- admin summaries

## Widget Candidates

- sparkline KPI cards
- radial gauges and richer velocity meters
- bullet foundations
- mini bar comparisons
- compact donut status chips
- monitoring panels with state badges

## Why This Is An Opportunity

This is one of the clearest market gaps. A lot of chart libraries are excellent at standalone charts but weaker at reusable, compact, dashboard-native modules.

The live \`gauge\` chart is an early example of this direction becoming concrete in the core.

The inspiration set heavily reinforces this. Many references are not “hero charts”; they are composed widgets with:

- a metric
- a trend
- a color state
- a small amount of context

That is exactly the territory Infinity should own over time.
`,za=`---
title: Financial and Forecasting
description: Financial views and forecast-heavy products need specific chart combinations and roadmap support.
heading: Financial and Forecasting
summary: Finance is one of the strongest reasons to invest early in combo, annotations, and future OHLC foundations.
status: Strategic
---

Financial and forecasting products usually demand more context than a plain line chart.

Common needs include:

- actual vs forecast
- variance against plan
- rolling ranges
- event markers
- candlestick and OHLC support later
- high-density time navigation

## What We Should Cover Early

- combo chart for plan vs actual
- stacked area for composition over time
- threshold overlays for budget or risk bands
- sparkline cards for compact summary boards

## What Should Follow

- candlestick and OHLC
- range area and range bar
- forecast intervals
- annotations tied to business events
- richer temporal navigation

## Why This Matters

The best charting platforms do not stop at generic categories. They invest in finance because it exercises breadth, density, interaction, and trust all at once.

See [Chart Coverage](/roadmap/chart-coverage) for the broader roadmap.
`,Ba=`---
title: KPI and Sparklines
description: Compact trend cards are one of the most important dashboard-native patterns for the Infinity Charts ecosystem.
heading: KPI and Sparklines
summary: Compact widgets deserve first-class product thinking.
demo: kpi-sparkline
status: Stable
---

Many teams do not need a full chart first. They need a compact KPI tile that still carries trend context.

## Why This Pattern Matters

KPI + sparkline cards appear everywhere:

- executive summaries
- revenue dashboards
- operations surfaces
- product analytics overview pages

## What Makes Them Hard

These widgets are easy to underestimate because they need:

- very compact layout
- minimal chrome
- still-readable trend shape
- careful visual hierarchy

## Long-Term Opportunity

Infinity Charts should evolve from “charts plus layout around them” into “visualization primitives plus dashboard-native widget patterns”.

The new \`sparkline\` chart type is the first live step in that direction.
`,Fa=`---
title: Operations Dashboards
description: Build dashboards for monitoring throughput, latency, capacity, and incidents with reusable chart patterns.
heading: Operations Dashboards
summary: Operations surfaces are one of the clearest target environments for Infinity Charts.
status: Strategic
---

Operations dashboards need a different mindset from marketing or lightweight reporting dashboards.

They usually require:

- fast scanability
- threshold awareness
- compact cards
- live refresh
- stable layout under stress

## Recommended Chart Mix

- line charts for throughput and latency
- stacked area for capacity composition
- donut charts for status distribution
- sparklines for dense KPI cards
- combo charts for volume plus target overlays

## Architecture Implications

Operations dashboards are why the core needs:

- append and windowed updates
- low-overhead rerender strategies
- semantic colors
- compact chart variants
- future annotations for incidents and deploy windows

Infinity should treat operations dashboards as a first-class product scenario, not a demo afterthought.
`,Ha=`---
title: Realtime Monitoring
description: Realtime monitoring requires more than live points; it needs state, thresholds, and readable update behavior.
heading: Realtime Monitoring
summary: Monitoring views are a major target use case for the platform.
demo: realtime-panel
status: Stable
---

Realtime monitoring is not just a line chart with a timer.

Operational surfaces typically need a combination of:

- live append behavior
- thresholds
- quick status recognition
- compact KPIs
- stable motion

## What Monitoring Wants From The Engine

- cheap updates
- rolling windows
- clean threshold overlays
- chart reuse inside dense cards
- future support for anomaly and state overlays

## Product Direction

Infinity Charts should eventually expose stronger monitoring-oriented widgets on top of the current core primitives.

This page is a reminder that the roadmap should not stop at generic chart types.

`,qa=`---
title: Chart Coverage
description: Understand which chart families are live now and which are planned next.
heading: Chart Coverage
summary: The docs should make coverage honest and visible.
status: Strategic
---

Infinity Charts is being built toward very broad coverage, but the documentation should be explicit about current status.

The chart explorer now maps more than 200 chart types and chart-adjacent modules across live and planned coverage so teams can see the intended breadth of the platform.

## Live In The Current Foundation

- line
- area
- 3D bar
- stacked area
- bar / column
- combo
- sparkline
- scatter
- gauge
- gauge semicircle
- radial progress
- thermometer
- battery meter
- pie
- donut

## Planned Next

- grouped and richer column variants
- bubble
- broader gauge family variants
- compact widget packs beyond sparkline

## Longer-Horizon Families

- heatmap
- histogram
- box plot
- candlestick / OHLC
- treemap
- sunburst
- sankey
- geospatial foundations
- broader 3D modules

## Why Coverage Planning Belongs In The Docs

Good documentation helps users understand:

- what they can ship now
- what the architecture is preparing for
- what is stable vs exploratory

That reduces confusion and builds trust.
`,Ga=`---
title: Launch Priorities
description: A focused launch sequence keeps the platform credible faster than chasing every chart at once.
heading: Launch Priorities
summary: Breadth matters, but sequencing matters just as much.
status: Strategic
---

The platform can support hundreds of charts over time, but the first serious adoption wave should come from a smaller set that already makes Infinity Charts feel like a real market contender.

## First 50 That Make The Platform Feel Real

- line
- multi-line
- area
- bar vertical
- bar horizontal
- grouped bar
- stacked bar
- donut
- pie
- gauge
- radial progress
- scatter
- bubble
- heatmap
- timeline
- Gantt
- funnel
- sankey
- treemap
- sunburst
- radar
- waterfall
- candlestick
- box plot
- histogram
- cohort retention
- live line
- KPI card + sparkline
- choropleth map
- bullet chart
- CPU / RAM / network charts
- SLA compliance chart
- MRR movement waterfall
- revenue bridge
- machine downtime timeline
- inventory trend
- workforce schedule
- burndown
- burnup
- CFD
- risk matrix
- compliance matrix
- executive scorecard
- feature adoption chart
- A/B test lift chart
- latency percentile chart
- error budget burn chart
- route playback map
- delivery funnel
- customer health score chart

## Delivery Levels

Each chart family should be able to grow through levels instead of feeling frozen after the first release:

- \`base\`: clear default behavior and minimal config
- \`advanced\`: richer configuration and interaction
- \`live\`: optimized for streaming and frequent updates
- \`enterprise\`: drilldown, export, annotations, composition
- \`ai-assisted\`: future recommendation or automation layer

## Why Sequencing Matters

Shipping the right 50 first does more for product trust than claiming 500 ideas without enough depth behind them.

That launch set should prove:

- strong breadth
- strong product relevance
- strong dashboard readiness
- strong enterprise direction
`,Oa=`---
title: Market Gaps
description: Infinity Charts should target gaps in the charting market rather than only matching surface-level feature checklists.
heading: Market Gaps
summary: Matching the market is not enough. The product should solve where current tools still feel awkward.
status: Strategic
---

Research across mature charting platforms shows that breadth alone does not guarantee a strong developer experience.

## Gaps Worth Targeting

- dashboard-native widgets instead of only raw charts
- easier realtime monitoring patterns
- cleaner threshold and state overlays
- stronger radial summary building blocks
- better TypeScript-first ergonomics
- cleaner documentation for moving from a first chart to a real dashboard system

## Why This Is A Product Opportunity

Many libraries are strong on chart count but weaker on:

- coherent configuration design
- compact dashboard patterns
- straightforward live update APIs
- documentation that teaches composition, not just syntax

Infinity Charts should aim directly at those gaps.

The strongest opportunity is not only to add more chart types, but to connect them into product families with shared behaviors, shared configuration ideas, and industry-ready examples.
`,Wa=`---
title: Platform Roadmap
description: Planned phases for growing Infinity Charts from a strong engine core into a full platform.
heading: Platform Roadmap
summary: The roadmap is about systems, not just adding chart counts.
status: Strategic
---

## Phase 1

- core engine
- registry model
- SVG renderer
- line, area, bar, pie, donut
- theme system
- animation foundation
- realtime append pipeline
- documentation foundation

## Phase 2

- grouped and stacked depth
- compact widgets
- stronger dashboard patterns
- better thresholds and annotations
- improved interaction layers
- first family-based launch packs for core, widgets, realtime, and product analytics

## Phase 3

- scatter and analytical families
- statistical charts
- financial charts
- hierarchy foundations
- first enterprise planning surfaces such as timeline, gantt, and scorecard views

## Phase 4

- flow and dependency diagrams
- map-friendly abstractions
- Canvas renderer
- experimental WebGL / 3D modules
- deeper operational and supply-chain coverage

## Phase 5

- documentation playground maturity
- expansion packs
- domain-specific modules
- deeper accessibility and export tooling
- mature family-level product packaging and delivery tiers
`,Na=`---
title: Product Families
description: Infinity Charts should grow as a family-based platform, not as an unstructured pile of chart files.
heading: Product Families
summary: The product roadmap is easier to scale when coverage is organized by market-facing families.
status: Strategic
---

The platform should be organized into product families that make sense to real teams and real buying/use cases.

## Core

The entry surface for mainstream charting:

- line
- area
- bar
- donut
- pie
- scatter
- radar
- gauge
- heatmap
- timeline

## Realtime

Focused on monitoring and live operational surfaces:

- live line
- CPU / RAM / network charts
- status history
- queue depth
- error budget
- threshold widgets
- uptime timelines

## Analytics

Focused on distributions, statistical reading, and advanced analysis:

- histogram
- box plot
- violin plot
- cohort charts
- control chart
- pareto
- confidence intervals
- forecast fans

## Finance

Focused on trading, risk, and financial operations:

- candlestick
- OHLC
- Renko
- Kagi
- waterfall
- margin and revenue bridges
- volume overlays

## Geo

Focused on location-aware data and route intelligence:

- choropleth
- bubble map
- flow map
- route playback
- density grids

## Operations

Focused on supply chain, manufacturing, and observability-style operations:

- inventory trends
- machine downtime timelines
- warehouse heatmaps
- route performance
- delivery funnels

## Product and Growth

Focused on SaaS, product analytics, and lifecycle metrics:

- funnel
- retention
- feature adoption
- MRR movement
- activation and churn views
- A/B test performance

## Enterprise

Focused on PMO, governance, people analytics, and executive control surfaces:

- Gantt
- burndown
- CFD
- risk matrix
- compliance matrix
- executive scorecard

## Healthcare and Education

Domain families can come later on top of the core engine:

- patient flow
- wait time distributions
- learning progress
- course completion funnels
- attendance and adherence views

## Why Family Thinking Matters

This structure does three things:

1. It helps developers understand what Infinity Charts is good at.
2. It keeps roadmap planning tied to real market demand.
3. It makes future packs and documentation sections easier to explain.
`,ja=`---
title: Common Issues
description: Practical troubleshooting notes for early-stage Infinity Charts integrations.
heading: Common Issues
summary: Fast checks for the most common integration mistakes.
status: Stable
---

## The Chart Does Not Render

Check:

- the container exists
- the container has measurable width and height
- the chart type is registered
- the data shape matches the selected chart family

## The Container Exists But The Chart Has No Size

This usually means the container is inside a collapsed or unsized layout.

Fix:

- give the container a height
- call \`chart.resize()\` after the layout becomes visible

## Realtime Updates Feel Heavy

Check whether you are:

- appending too frequently without batching
- animating too aggressively
- re-creating the chart instead of updating the existing instance

## Theme Changes Look Inconsistent

Use theme tokens consistently rather than mixing large numbers of hardcoded per-series colors.

## The Docs Mention A Chart That Is Not Live Yet

Use the [Chart Explorer](/chart-explorer) and [Chart Coverage](/roadmap/chart-coverage) pages to confirm whether a chart is:

- live
- planned
`,Ua=`---
title: Performance Checks
description: Quick ways to reason about runtime cost during early integration and testing.
heading: Performance Checks
summary: A lightweight troubleshooting page for identifying the first performance bottlenecks.
status: Stable
---

When charts feel slower than expected, start with the simplest checks first.

## First Checks

1. Are you re-creating charts instead of updating them?
2. Are you appending too many points without a rolling window?
3. Are several large charts resizing repeatedly inside a reactive layout?
4. Are you using more motion than the use case really needs?

## Simple Workflow

- disable animation temporarily
- compare initial render vs update behavior
- reduce point count for streaming views
- confirm container size stability

## Important Reminder

Performance evaluation should reflect the real dashboard conditions where charts will run, not just a single isolated chart on a blank page.

`,Va=`---
title: Build a Live KPI Board
description: Use sparkline, line, and card-level composition to create a dense live KPI surface.
heading: Build a Live KPI Board
summary: Small charts are often where product dashboards feel either premium or clumsy.
demo: realtime-panel
status: Guide
---

Live KPI boards are one of the most common product requirements in SaaS and ops tooling.

## Recommended Building Blocks

- sparkline for compact trend context
- line for the primary live metric
- donut for state distribution
- textual KPI with semantic state color

## Core Rules

- the number should be readable without hover
- the sparkline should support trend reading in one glance
- the main chart should handle append updates cheaply
- thresholds should carry the meaning, not just the palette

## Why This Tutorial Exists

Mature chart products document complete dashboard patterns because teams rarely ship charts in isolation. They ship metric boards, status walls, and operational control surfaces.

Infinity documentation should do the same from the start.
`,Ka=`---
title: Build an Ops Dashboard
description: A practical path for assembling a monitoring dashboard with the current live chart set.
heading: Build an Ops Dashboard
summary: One chart is not the product. The dashboard is.
demo: dashboard-pattern
status: Guide
---

This tutorial focuses on composition rather than one isolated chart.

## Step 1

Start with the questions the dashboard must answer:

- Are we healthy right now
- Where is pressure building
- Which teams or systems are affected

## Step 2

Choose chart roles, not just chart types:

- line for the top trend
- bar for discrete comparison
- donut for status mix
- sparkline for compact side metrics

## Step 3

Keep card language consistent:

- same theme family
- stable spacing
- restrained motion
- semantic colors for status

## Step 4

Add thresholds where a value becomes operationally important.

## Step 5

If the dashboard is live, prefer append-style updates and capped windows instead of full replacement whenever possible.

See also [Realtime Monitoring](/patterns/realtime-monitoring) and [Operations Dashboards](/patterns/operations-dashboards).
`;function Ie(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var W=Ie();function It(t){W=t}var ne={exec:()=>null};function x(t,e=""){let n=typeof t=="string"?t:t.source;const a={replace:(r,i)=>{let l=typeof i=="string"?i:i.source;return l=l.replace(R.caret,"$1"),n=n.replace(r,l),a},getRegex:()=>new RegExp(n,e)};return a}var R={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},Qa=/^(?:[ \t]*(?:\n|$))+/,Ja=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Za=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,re=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ya=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,_e=/(?:[*+-]|\d{1,9}[.)])/,_t=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,$t=x(_t).replace(/bull/g,_e).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Xa=x(_t).replace(/bull/g,_e).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),$e=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,er=/^[^\n]+/,Re=/(?!\s*\])(?:\\.|[^\[\]\\])+/,tr=x(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Re).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),nr=x(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,_e).getRegex(),me="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Me=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ar=x("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Me).replace("tag",me).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Rt=x($e).replace("hr",re).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",me).getRegex(),rr=x(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Rt).getRegex(),Ee={blockquote:rr,code:Ja,def:tr,fences:Za,heading:Ya,hr:re,html:ar,lheading:$t,list:nr,newline:Qa,paragraph:Rt,table:ne,text:er},ht=x("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",re).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",me).getRegex(),ir={...Ee,lheading:Xa,table:ht,paragraph:x($e).replace("hr",re).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ht).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",me).getRegex()},sr={...Ee,html:x(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Me).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ne,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:x($e).replace("hr",re).replace("heading",` *#{1,6} *[^
]`).replace("lheading",$t).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},or=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,lr=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Mt=/^( {2,}|\\)\n(?!\s*$)/,cr=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ge=/[\p{P}\p{S}]/u,De=/[\s\p{P}\p{S}]/u,Et=/[^\s\p{P}\p{S}]/u,dr=x(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,De).getRegex(),Dt=/(?!~)[\p{P}\p{S}]/u,hr=/(?!~)[\s\p{P}\p{S}]/u,ur=/(?:[^\s\p{P}\p{S}]|~)/u,pr=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,zt=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,mr=x(zt,"u").replace(/punct/g,ge).getRegex(),gr=x(zt,"u").replace(/punct/g,Dt).getRegex(),Bt="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",fr=x(Bt,"gu").replace(/notPunctSpace/g,Et).replace(/punctSpace/g,De).replace(/punct/g,ge).getRegex(),br=x(Bt,"gu").replace(/notPunctSpace/g,ur).replace(/punctSpace/g,hr).replace(/punct/g,Dt).getRegex(),yr=x("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Et).replace(/punctSpace/g,De).replace(/punct/g,ge).getRegex(),vr=x(/\\(punct)/,"gu").replace(/punct/g,ge).getRegex(),wr=x(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),xr=x(Me).replace("(?:-->|$)","-->").getRegex(),kr=x("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",xr).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),he=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Cr=x(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",he).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ft=x(/^!?\[(label)\]\[(ref)\]/).replace("label",he).replace("ref",Re).getRegex(),Ht=x(/^!?\[(ref)\](?:\[\])?/).replace("ref",Re).getRegex(),Sr=x("reflink|nolink(?!\\()","g").replace("reflink",Ft).replace("nolink",Ht).getRegex(),ze={_backpedal:ne,anyPunctuation:vr,autolink:wr,blockSkip:pr,br:Mt,code:lr,del:ne,emStrongLDelim:mr,emStrongRDelimAst:fr,emStrongRDelimUnd:yr,escape:or,link:Cr,nolink:Ht,punctuation:dr,reflink:Ft,reflinkSearch:Sr,tag:kr,text:cr,url:ne},Tr={...ze,link:x(/^!?\[(label)\]\((.*?)\)/).replace("label",he).getRegex(),reflink:x(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",he).getRegex()},xe={...ze,emStrongRDelimAst:br,emStrongLDelim:gr,url:x(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Pr={...xe,br:x(Mt).replace("{2,}","*").getRegex(),text:x(xe.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},oe={normal:Ee,gfm:ir,pedantic:sr},Q={normal:ze,gfm:xe,breaks:Pr,pedantic:Tr},Lr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ut=t=>Lr[t];function D(t,e){if(e){if(R.escapeTest.test(t))return t.replace(R.escapeReplace,ut)}else if(R.escapeTestNoEncode.test(t))return t.replace(R.escapeReplaceNoEncode,ut);return t}function pt(t){try{t=encodeURI(t).replace(R.percentDecode,"%")}catch{return null}return t}function mt(t,e){var i;const n=t.replace(R.findPipe,(l,s,c)=>{let o=!1,d=s;for(;--d>=0&&c[d]==="\\";)o=!o;return o?"|":" |"}),a=n.split(R.splitPipe);let r=0;if(a[0].trim()||a.shift(),a.length>0&&!((i=a.at(-1))!=null&&i.trim())&&a.pop(),e)if(a.length>e)a.splice(e);else for(;a.length<e;)a.push("");for(;r<a.length;r++)a[r]=a[r].trim().replace(R.slashPipe,"|");return a}function J(t,e,n){const a=t.length;if(a===0)return"";let r=0;for(;r<a&&t.charAt(a-r-1)===e;)r++;return t.slice(0,a-r)}function Ar(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let a=0;a<t.length;a++)if(t[a]==="\\")a++;else if(t[a]===e[0])n++;else if(t[a]===e[1]&&(n--,n<0))return a;return n>0?-2:-1}function gt(t,e,n,a,r){const i=e.href,l=e.title||null,s=t[1].replace(r.other.outputLinkReplace,"$1");a.state.inLink=!0;const c={type:t[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:l,text:s,tokens:a.inlineTokens(s)};return a.state.inLink=!1,c}function Ir(t,e,n){const a=t.match(n.other.indentCodeCompensation);if(a===null)return e;const r=a[1];return e.split(`
`).map(i=>{const l=i.match(n.other.beginningSpace);if(l===null)return i;const[s]=l;return s.length>=r.length?i.slice(r.length):i}).join(`
`)}var ue=class{constructor(t){g(this,"options");g(this,"rules");g(this,"lexer");this.options=t||W}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:J(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],a=Ir(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:a}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){const a=J(n,"#");(this.options.pedantic||!a||this.rules.other.endingSpaceChar.test(a))&&(n=a.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:J(e[0],`
`)}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){let n=J(e[0],`
`).split(`
`),a="",r="";const i=[];for(;n.length>0;){let l=!1;const s=[];let c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))s.push(n[c]),l=!0;else if(!l)s.push(n[c]);else break;n=n.slice(c);const o=s.join(`
`),d=o.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");a=a?`${a}
${o}`:o,r=r?`${r}
${d}`:d;const m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,i,!0),this.lexer.state.top=m,n.length===0)break;const h=i.at(-1);if((h==null?void 0:h.type)==="code")break;if((h==null?void 0:h.type)==="blockquote"){const p=h,u=p.raw+`
`+n.join(`
`),f=this.blockquote(u);i[i.length-1]=f,a=a.substring(0,a.length-p.raw.length)+f.raw,r=r.substring(0,r.length-p.text.length)+f.text;break}else if((h==null?void 0:h.type)==="list"){const p=h,u=p.raw+`
`+n.join(`
`),f=this.list(u);i[i.length-1]=f,a=a.substring(0,a.length-h.raw.length)+f.raw,r=r.substring(0,r.length-p.raw.length)+f.raw,n=u.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:a,tokens:i,text:r}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim();const a=n.length>1,r={type:"list",raw:"",ordered:a,start:a?+n.slice(0,-1):"",loose:!1,items:[]};n=a?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=a?n:"[*+-]");const i=this.rules.other.listItemRegex(n);let l=!1;for(;t;){let c=!1,o="",d="";if(!(e=i.exec(t))||this.rules.block.hr.test(t))break;o=e[0],t=t.substring(o.length);let m=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,L=>" ".repeat(3*L.length)),h=t.split(`
`,1)[0],p=!m.trim(),u=0;if(this.options.pedantic?(u=2,d=m.trimStart()):p?u=e[1].length+1:(u=e[2].search(this.rules.other.nonSpaceChar),u=u>4?1:u,d=m.slice(u),u+=e[1].length),p&&this.rules.other.blankLine.test(h)&&(o+=h+`
`,t=t.substring(h.length+1),c=!0),!c){const L=this.rules.other.nextBulletRegex(u),I=this.rules.other.hrRegex(u),b=this.rules.other.fencesBeginRegex(u),S=this.rules.other.headingBeginRegex(u),_=this.rules.other.htmlBeginRegex(u);for(;t;){const T=t.split(`
`,1)[0];let M;if(h=T,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),M=h):M=h.replace(this.rules.other.tabCharGlobal,"    "),b.test(h)||S.test(h)||_.test(h)||L.test(h)||I.test(h))break;if(M.search(this.rules.other.nonSpaceChar)>=u||!h.trim())d+=`
`+M.slice(u);else{if(p||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||b.test(m)||S.test(m)||I.test(m))break;d+=`
`+h}!p&&!h.trim()&&(p=!0),o+=T+`
`,t=t.substring(T.length+1),m=M.slice(u)}}r.loose||(l?r.loose=!0:this.rules.other.doubleBlankLine.test(o)&&(l=!0));let f=null,v;this.options.gfm&&(f=this.rules.other.listIsTask.exec(d),f&&(v=f[0]!=="[ ] ",d=d.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:o,task:!!f,checked:v,loose:!1,text:d,tokens:[]}),r.raw+=o}const s=r.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let c=0;c<r.items.length;c++)if(this.lexer.state.top=!1,r.items[c].tokens=this.lexer.blockTokens(r.items[c].text,[]),!r.loose){const o=r.items[c].tokens.filter(m=>m.type==="space"),d=o.length>0&&o.some(m=>this.rules.other.anyLine.test(m.raw));r.loose=d}if(r.loose)for(let c=0;c<r.items.length;c++)r.items[c].loose=!0;return r}}html(t){const e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){const e=this.rules.block.def.exec(t);if(e){const n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),a=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:a,title:r}}}table(t){var l;const e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;const n=mt(e[1]),a=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=(l=e[3])!=null&&l.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===a.length){for(const s of a)this.rules.other.tableAlignRight.test(s)?i.align.push("right"):this.rules.other.tableAlignCenter.test(s)?i.align.push("center"):this.rules.other.tableAlignLeft.test(s)?i.align.push("left"):i.align.push(null);for(let s=0;s<n.length;s++)i.header.push({text:n[s],tokens:this.lexer.inline(n[s]),header:!0,align:i.align[s]});for(const s of r)i.rows.push(mt(s,i.header.length).map((c,o)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:i.align[o]})));return i}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const i=J(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=Ar(e[2],"()");if(i===-2)return;if(i>-1){const s=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,s).trim(),e[3]=""}}let a=e[2],r="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(a);i&&(a=i[1],r=i[3])}else r=e[3]?e[3].slice(1,-1):"";return a=a.trim(),this.rules.other.startAngleBracket.test(a)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?a=a.slice(1):a=a.slice(1,-1)),gt(e,{href:a&&a.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){const a=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[a.toLowerCase()];if(!r){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return gt(n,r,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let a=this.rules.inline.emStrongLDelim.exec(t);if(!a||a[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(a[1]||a[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const i=[...a[0]].length-1;let l,s,c=i,o=0;const d=a[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,e=e.slice(-1*t.length+i);(a=d.exec(e))!=null;){if(l=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!l)continue;if(s=[...l].length,a[3]||a[4]){c+=s;continue}else if((a[5]||a[6])&&i%3&&!((i+s)%3)){o+=s;continue}if(c-=s,c>0)continue;s=Math.min(s,s+c+o);const m=[...a[0]][0].length,h=t.slice(0,i+a.index+m+s);if(Math.min(i,s)%2){const u=h.slice(1,-1);return{type:"em",raw:h,text:u,tokens:this.lexer.inlineTokens(u)}}const p=h.slice(2,-2);return{type:"strong",raw:h,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," ");const a=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return a&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){const e=this.rules.inline.autolink.exec(t);if(e){let n,a;return e[2]==="@"?(n=e[1],a="mailto:"+n):(n=e[1],a=n),{type:"link",raw:e[0],text:n,href:a,tokens:[{type:"text",raw:n,text:n}]}}}url(t){var n;let e;if(e=this.rules.inline.url.exec(t)){let a,r;if(e[2]==="@")a=e[0],r="mailto:"+a;else{let i;do i=e[0],e[0]=((n=this.rules.inline._backpedal.exec(e[0]))==null?void 0:n[0])??"";while(i!==e[0]);a=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:a,href:r,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(t){const e=this.rules.inline.text.exec(t);if(e){const n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},H=class ke{constructor(e){g(this,"tokens");g(this,"options");g(this,"state");g(this,"tokenizer");g(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||W,this.options.tokenizer=this.options.tokenizer||new ue,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:R,block:oe.normal,inline:Q.normal};this.options.pedantic?(n.block=oe.pedantic,n.inline=Q.pedantic):this.options.gfm&&(n.block=oe.gfm,this.options.breaks?n.inline=Q.breaks:n.inline=Q.gfm),this.tokenizer.rules=n}static get rules(){return{block:oe,inline:Q}}static lex(e,n){return new ke(n).lex(e)}static lexInline(e,n){return new ke(n).inlineTokens(e)}lex(e){e=e.replace(R.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const a=this.inlineQueue[n];this.inlineTokens(a.src,a.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],a=!1){var r,i,l;for(this.options.pedantic&&(e=e.replace(R.tabCharGlobal,"    ").replace(R.spaceLine,""));e;){let s;if((i=(r=this.options.extensions)==null?void 0:r.block)!=null&&i.some(o=>(s=o.call({lexer:this},e,n))?(e=e.substring(s.raw.length),n.push(s),!0):!1))continue;if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length);const o=n.at(-1);s.raw.length===1&&o!==void 0?o.raw+=`
`:n.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length);const o=n.at(-1);(o==null?void 0:o.type)==="paragraph"||(o==null?void 0:o.type)==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.at(-1).src=o.text):n.push(s);continue}if(s=this.tokenizer.fences(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.heading(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.hr(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.blockquote(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.list(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.html(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length);const o=n.at(-1);(o==null?void 0:o.type)==="paragraph"||(o==null?void 0:o.type)==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.lheading(e)){e=e.substring(s.raw.length),n.push(s);continue}let c=e;if((l=this.options.extensions)!=null&&l.startBlock){let o=1/0;const d=e.slice(1);let m;this.options.extensions.startBlock.forEach(h=>{m=h.call({lexer:this},d),typeof m=="number"&&m>=0&&(o=Math.min(o,m))}),o<1/0&&o>=0&&(c=e.substring(0,o+1))}if(this.state.top&&(s=this.tokenizer.paragraph(c))){const o=n.at(-1);a&&(o==null?void 0:o.type)==="paragraph"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(s),a=c.length!==e.length,e=e.substring(s.raw.length);continue}if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length);const o=n.at(-1);(o==null?void 0:o.type)==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(s);continue}if(e){const o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){var s,c,o;let a=e,r=null;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)d.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,r.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(r=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,l="";for(;e;){i||(l=""),i=!1;let d;if((c=(s=this.options.extensions)==null?void 0:s.inline)!=null&&c.some(h=>(d=h.call({lexer:this},e,n))?(e=e.substring(d.raw.length),n.push(d),!0):!1))continue;if(d=this.tokenizer.escape(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.tag(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.link(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(d.raw.length);const h=n.at(-1);d.type==="text"&&(h==null?void 0:h.type)==="text"?(h.raw+=d.raw,h.text+=d.text):n.push(d);continue}if(d=this.tokenizer.emStrong(e,a,l)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.codespan(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.br(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.del(e)){e=e.substring(d.raw.length),n.push(d);continue}if(d=this.tokenizer.autolink(e)){e=e.substring(d.raw.length),n.push(d);continue}if(!this.state.inLink&&(d=this.tokenizer.url(e))){e=e.substring(d.raw.length),n.push(d);continue}let m=e;if((o=this.options.extensions)!=null&&o.startInline){let h=1/0;const p=e.slice(1);let u;this.options.extensions.startInline.forEach(f=>{u=f.call({lexer:this},p),typeof u=="number"&&u>=0&&(h=Math.min(h,u))}),h<1/0&&h>=0&&(m=e.substring(0,h+1))}if(d=this.tokenizer.inlineText(m)){e=e.substring(d.raw.length),d.raw.slice(-1)!=="_"&&(l=d.raw.slice(-1)),i=!0;const h=n.at(-1);(h==null?void 0:h.type)==="text"?(h.raw+=d.raw,h.text+=d.text):n.push(d);continue}if(e){const h="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return n}},pe=class{constructor(t){g(this,"options");g(this,"parser");this.options=t||W}space(t){return""}code({text:t,lang:e,escaped:n}){var i;const a=(i=(e||"").match(R.notSpaceStart))==null?void 0:i[0],r=t.replace(R.endingNewline,"")+`
`;return a?'<pre><code class="language-'+D(a)+'">'+(n?r:D(r,!0))+`</code></pre>
`:"<pre><code>"+(n?r:D(r,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){const e=t.ordered,n=t.start;let a="";for(let l=0;l<t.items.length;l++){const s=t.items[l];a+=this.listitem(s)}const r=e?"ol":"ul",i=e&&n!==1?' start="'+n+'"':"";return"<"+r+i+`>
`+a+"</"+r+`>
`}listitem(t){var n;let e="";if(t.task){const a=this.checkbox({checked:!!t.checked});t.loose?((n=t.tokens[0])==null?void 0:n.type)==="paragraph"?(t.tokens[0].text=a+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=a+" "+D(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:a+" ",text:a+" ",escaped:!0}):e+=a+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",n="";for(let r=0;r<t.header.length;r++)n+=this.tablecell(t.header[r]);e+=this.tablerow({text:n});let a="";for(let r=0;r<t.rows.length;r++){const i=t.rows[r];n="";for(let l=0;l<i.length;l++)n+=this.tablecell(i[l]);a+=this.tablerow({text:n})}return a&&(a=`<tbody>${a}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+a+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){const e=this.parser.parseInline(t.tokens),n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${D(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:n}){const a=this.parser.parseInline(n),r=pt(t);if(r===null)return a;t=r;let i='<a href="'+t+'"';return e&&(i+=' title="'+D(e)+'"'),i+=">"+a+"</a>",i}image({href:t,title:e,text:n,tokens:a}){a&&(n=this.parser.parseInline(a,this.parser.textRenderer));const r=pt(t);if(r===null)return D(n);t=r;let i=`<img src="${t}" alt="${n}"`;return e&&(i+=` title="${D(e)}"`),i+=">",i}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:D(t.text)}},Be=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},q=class Ce{constructor(e){g(this,"options");g(this,"renderer");g(this,"textRenderer");this.options=e||W,this.options.renderer=this.options.renderer||new pe,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Be}static parse(e,n){return new Ce(n).parse(e)}static parseInline(e,n){return new Ce(n).parseInline(e)}parse(e,n=!0){var r,i;let a="";for(let l=0;l<e.length;l++){const s=e[l];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[s.type]){const o=s,d=this.options.extensions.renderers[o.type].call({parser:this},o);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){a+=d||"";continue}}const c=s;switch(c.type){case"space":{a+=this.renderer.space(c);continue}case"hr":{a+=this.renderer.hr(c);continue}case"heading":{a+=this.renderer.heading(c);continue}case"code":{a+=this.renderer.code(c);continue}case"table":{a+=this.renderer.table(c);continue}case"blockquote":{a+=this.renderer.blockquote(c);continue}case"list":{a+=this.renderer.list(c);continue}case"html":{a+=this.renderer.html(c);continue}case"paragraph":{a+=this.renderer.paragraph(c);continue}case"text":{let o=c,d=this.renderer.text(o);for(;l+1<e.length&&e[l+1].type==="text";)o=e[++l],d+=`
`+this.renderer.text(o);n?a+=this.renderer.paragraph({type:"paragraph",raw:d,text:d,tokens:[{type:"text",raw:d,text:d,escaped:!0}]}):a+=d;continue}default:{const o='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return a}parseInline(e,n=this.renderer){var r,i;let a="";for(let l=0;l<e.length;l++){const s=e[l];if((i=(r=this.options.extensions)==null?void 0:r.renderers)!=null&&i[s.type]){const o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){a+=o||"";continue}}const c=s;switch(c.type){case"escape":{a+=n.text(c);break}case"html":{a+=n.html(c);break}case"link":{a+=n.link(c);break}case"image":{a+=n.image(c);break}case"strong":{a+=n.strong(c);break}case"em":{a+=n.em(c);break}case"codespan":{a+=n.codespan(c);break}case"br":{a+=n.br(c);break}case"del":{a+=n.del(c);break}case"text":{a+=n.text(c);break}default:{const o='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return a}},ve,le=(ve=class{constructor(t){g(this,"options");g(this,"block");this.options=t||W}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?H.lex:H.lexInline}provideParser(){return this.block?q.parse:q.parseInline}},g(ve,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),ve),_r=class{constructor(...t){g(this,"defaults",Ie());g(this,"options",this.setOptions);g(this,"parse",this.parseMarkdown(!0));g(this,"parseInline",this.parseMarkdown(!1));g(this,"Parser",q);g(this,"Renderer",pe);g(this,"TextRenderer",Be);g(this,"Lexer",H);g(this,"Tokenizer",ue);g(this,"Hooks",le);this.use(...t)}walkTokens(t,e){var a,r;let n=[];for(const i of t)switch(n=n.concat(e.call(this,i)),i.type){case"table":{const l=i;for(const s of l.header)n=n.concat(this.walkTokens(s.tokens,e));for(const s of l.rows)for(const c of s)n=n.concat(this.walkTokens(c.tokens,e));break}case"list":{const l=i;n=n.concat(this.walkTokens(l.items,e));break}default:{const l=i;(r=(a=this.defaults.extensions)==null?void 0:a.childTokens)!=null&&r[l.type]?this.defaults.extensions.childTokens[l.type].forEach(s=>{const c=l[s].flat(1/0);n=n.concat(this.walkTokens(c,e))}):l.tokens&&(n=n.concat(this.walkTokens(l.tokens,e)))}}return n}use(...t){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{const a={...n};if(a.async=this.defaults.async||a.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const i=e.renderers[r.name];i?e.renderers[r.name]=function(...l){let s=r.renderer.apply(this,l);return s===!1&&(s=i.apply(this,l)),s}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=e[r.level];i?i.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),a.extensions=e),n.renderer){const r=this.defaults.renderer||new pe(this.defaults);for(const i in n.renderer){if(!(i in r))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const l=i,s=n.renderer[l],c=r[l];r[l]=(...o)=>{let d=s.apply(r,o);return d===!1&&(d=c.apply(r,o)),d||""}}a.renderer=r}if(n.tokenizer){const r=this.defaults.tokenizer||new ue(this.defaults);for(const i in n.tokenizer){if(!(i in r))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const l=i,s=n.tokenizer[l],c=r[l];r[l]=(...o)=>{let d=s.apply(r,o);return d===!1&&(d=c.apply(r,o)),d}}a.tokenizer=r}if(n.hooks){const r=this.defaults.hooks||new le;for(const i in n.hooks){if(!(i in r))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const l=i,s=n.hooks[l],c=r[l];le.passThroughHooks.has(i)?r[l]=o=>{if(this.defaults.async)return Promise.resolve(s.call(r,o)).then(m=>c.call(r,m));const d=s.call(r,o);return c.call(r,d)}:r[l]=(...o)=>{let d=s.apply(r,o);return d===!1&&(d=c.apply(r,o)),d}}a.hooks=r}if(n.walkTokens){const r=this.defaults.walkTokens,i=n.walkTokens;a.walkTokens=function(l){let s=[];return s.push(i.call(this,l)),r&&(s=s.concat(r.call(this,l))),s}}this.defaults={...this.defaults,...a}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return H.lex(t,e??this.defaults)}parser(t,e){return q.parse(t,e??this.defaults)}parseMarkdown(t){return(n,a)=>{const r={...a},i={...this.defaults,...r},l=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=t);const s=i.hooks?i.hooks.provideLexer():t?H.lex:H.lexInline,c=i.hooks?i.hooks.provideParser():t?q.parse:q.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(o=>s(o,i)).then(o=>i.hooks?i.hooks.processAllTokens(o):o).then(o=>i.walkTokens?Promise.all(this.walkTokens(o,i.walkTokens)).then(()=>o):o).then(o=>c(o,i)).then(o=>i.hooks?i.hooks.postprocess(o):o).catch(l);try{i.hooks&&(n=i.hooks.preprocess(n));let o=s(n,i);i.hooks&&(o=i.hooks.processAllTokens(o)),i.walkTokens&&this.walkTokens(o,i.walkTokens);let d=c(o,i);return i.hooks&&(d=i.hooks.postprocess(d)),d}catch(o){return l(o)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const a="<p>An error occurred:</p><pre>"+D(n.message+"",!0)+"</pre>";return e?Promise.resolve(a):a}if(e)return Promise.reject(n);throw n}}},O=new _r;function w(t,e){return O.parse(t,e)}w.options=w.setOptions=function(t){return O.setOptions(t),w.defaults=O.defaults,It(w.defaults),w};w.getDefaults=Ie;w.defaults=W;w.use=function(...t){return O.use(...t),w.defaults=O.defaults,It(w.defaults),w};w.walkTokens=function(t,e){return O.walkTokens(t,e)};w.parseInline=O.parseInline;w.Parser=q;w.parser=q.parse;w.Renderer=pe;w.TextRenderer=Be;w.Lexer=H;w.lexer=H.lex;w.Tokenizer=ue;w.Hooks=le;w.parse=w;w.options;w.setOptions;w.use;w.walkTokens;w.parseInline;q.parse;H.lex;const ft=t=>t.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),$r=t=>{const e=t.match(/^---\n([\s\S]*?)\n---\n?/);if(!e)throw new Error("Every documentation page must include frontmatter.");const n=t.slice(e[0].length),a=e[1].split(`
`).reduce((r,i)=>{const l=i.indexOf(":");if(l===-1)return r;const s=i.slice(0,l).trim(),c=i.slice(l+1).trim().replace(/^["']|["']$/g,"");return r[s]=c,r},{});return{frontmatter:{title:a.title??"Untitled",description:a.description??"",heading:a.heading,summary:a.summary,demo:a.demo,status:a.status},body:n}},Rr=t=>{const e=w.lexer(t),n=[];e.forEach(i=>{i.type==="heading"&&n.push({depth:i.depth,text:i.text,anchor:ft(i.text)})});const a=new w.Renderer;return a.heading=({text:i,depth:l})=>{const s=ft(i);return`<h${l} id="${s}">${i}</h${l}>`},{html:w.parse(t,{renderer:a,gfm:!0}),headings:n}},Mr=Object.assign({"../content/api/chart-instance.md":Vn,"../content/api/config-reference.md":Kn,"../content/api/create-chart.md":Qn,"../content/api/events-and-hooks.md":Jn,"../content/api/packs-and-registration.md":Zn,"../content/charts/area.md":Yn,"../content/charts/bar-3d.md":Xn,"../content/charts/bar.md":ea,"../content/charts/battery.md":ta,"../content/charts/combo.md":na,"../content/charts/donut.md":aa,"../content/charts/gauge-semicircle.md":ra,"../content/charts/gauge.md":ia,"../content/charts/line.md":sa,"../content/charts/pie.md":oa,"../content/charts/radial-progress.md":la,"../content/charts/scatter.md":ca,"../content/charts/sparkline.md":da,"../content/charts/stacked-area.md":ha,"../content/charts/thermometer.md":ua,"../content/concepts/accessibility-responsive.md":pa,"../content/concepts/animation-system.md":ma,"../content/concepts/business-value.md":ga,"../content/concepts/chart-lifecycle.md":fa,"../content/concepts/configuration-model.md":ba,"../content/concepts/css-overrides.md":ya,"../content/concepts/data-pipeline.md":va,"../content/concepts/layout-system.md":wa,"../content/concepts/on-demand-modules.md":xa,"../content/concepts/performance.md":ka,"../content/concepts/plugin-system.md":Ca,"../content/concepts/realtime-updates.md":Sa,"../content/concepts/rendering-architecture.md":Ta,"../content/concepts/shared-behaviors.md":Pa,"../content/concepts/theme-system.md":La,"../content/concepts/thresholds-and-overlays.md":Aa,"../content/getting-started/installation.md":Ia,"../content/getting-started/plain-javascript.md":_a,"../content/getting-started/quick-start.md":$a,"../content/index.md":Ra,"../content/patterns/chart-selection.md":Ma,"../content/patterns/dashboard-composition.md":Ea,"../content/patterns/embedded-widgets.md":Da,"../content/patterns/financial-and-forecasting.md":za,"../content/patterns/kpi-and-sparklines.md":Ba,"../content/patterns/operations-dashboards.md":Fa,"../content/patterns/realtime-monitoring.md":Ha,"../content/roadmap/chart-coverage.md":qa,"../content/roadmap/launch-priorities.md":Ga,"../content/roadmap/market-gaps.md":Oa,"../content/roadmap/platform-roadmap.md":Wa,"../content/roadmap/product-families.md":Na,"../content/troubleshooting/common-issues.md":ja,"../content/troubleshooting/performance-checks.md":Ua,"../content/tutorials/build-live-kpi-board.md":Va,"../content/tutorials/build-ops-dashboard.md":Ka}),Fe=Object.entries(Mr).map(([t,e])=>{const n=t.replace("../content","").replace(/\.md$/,""),{frontmatter:a,body:r}=$r(e),i=Rr(r);return{path:n==="/index"?"/":n,frontmatter:a,markdown:r,html:i.html,headings:i.headings}}).sort((t,e)=>t.path.localeCompare(e.path)),Er=t=>Fe.find(e=>e.path===t),Dr=t=>{const e=[];return t.forEach(n=>{const a=r=>{var i;r.path&&e.push({...r,section:n.title}),(i=r.children)==null||i.forEach(a)};a(n)}),e},zr=Dr(Ae),qt=(t,e=Ae,n=[])=>{for(const a of e){const r=[...n,a];if(a.path===t)return r;if(a.children){const i=qt(t,a.children,r);if(i)return i}}},Br=zr.map(t=>{const e=Fe.find(n=>n.path===t.path);return{title:t.title,path:t.path??"/",description:(e==null?void 0:e.frontmatter.description)??t.description??"",section:t.section}}),Fr=t=>{const e=t.trim().toLowerCase();return e?Br.filter(n=>[n.title,n.description,n.section,n.path].join(" ").toLowerCase().includes(e)).slice(0,10):[]},bt=(t,e,n)=>Math.min(Math.max(t,e),n),Hr=t=>{switch(t){case"3d-column":case"depth-column":return"column";case"3d-stacked-bar":case"3d-stacked-column":return"stacked";case"3d-line":return"line";case"3d-area":case"depth-area":case"perspective-combo":return"area";case"3d-surface":case"3d-mesh":return"surface";case"3d-heatmap":return"heatmap";case"3d-scatter":case"3d-bubble":case"3d-geo-scatter":return"scatter";case"3d-donut":case"3d-pie":return"radial";case"3d-radar":return"radar";case"3d-globe-plot":return"globe";case"3d-flow-ribbon":return"flow";case"3d-funnel":return"funnel";case"3d-pyramid":return"pyramid";case"3d-treemap":case"isometric-dashboard-card":case"3d-kpi-panel":return"dashboard";default:return"column"}},qr=(t,e)=>{const n=`${e.description} This concept preview focuses on the shape language that makes ${e.name.toLowerCase()} feel different in product workflows.`;switch(t){case"column":return{title:"Perspective categorical comparison",summary:n,value:"Executive dashboards where volume, depth, and ranking need a premium surface.",reading:"Use depth to reinforce magnitude without hiding labels or baseline comparison.",interactions:"Hover each prism for regional values, then drill into the active segment or category."};case"stacked":return{title:"Layered contribution in depth",summary:n,value:"Composition-heavy KPI boards where total and mix need to be readable together.",reading:"Each stack segment communicates contribution while the whole prism preserves total context.",interactions:"Hover segments to inspect composition; toggle series later without collapsing the full story."};case"line":return{title:"Depth-guided trend path",summary:n,value:"Premium monitoring, forecast storytelling, and time-based comparisons with hierarchy.",reading:"Perspective adds emphasis to trajectory and turning points without replacing the time axis.",interactions:"Crosshair, scrub, and compare points along the path with synchronized tooltip layers."};case"area":return{title:"Volume plus trajectory in perspective",summary:n,value:"Capacity, demand, and plan-vs-actual views where accumulation matters as much as trend.",reading:"The floor and fill make it easier to read both intensity and direction from a distance.",interactions:"Hover peaks, inspect slope transitions, and overlay thresholds or forecast bands later."};case"surface":return{title:"Analytical surface field",summary:n,value:"Density, multi-axis analysis, and premium exploratory dashboards where contour matters.",reading:"Height and shading reveal valleys, ridges, and anomalies better than a flat grid.",interactions:"Rotate, brush hot zones, and inspect exact z-values through cursor or lasso workflows."};case"heatmap":return{title:"Elevated intensity matrix",summary:n,value:"Operational grids where magnitude and concentration should jump out immediately.",reading:"Each cell carries both color and height so dense clusters stand out without reading every label.",interactions:"Hover cells for exact values, select windows, and compare bands across time or category axes."};case"scatter":return{title:"Spatial point cloud",summary:n,value:"Correlation, cluster discovery, and geo-like scatter views with a premium exploratory feel.",reading:"Depth helps separate dense clouds, outliers, and grouped motion patterns.",interactions:"Lasso dense regions, hover single points, and spotlight outliers or cluster centroids."};case"radial":return{title:"Radial depth summary",summary:n,value:"High-polish KPI or composition widgets where circular reading needs stronger hierarchy.",reading:"Perspective keeps the center metric strong while arcs communicate relative share or progress.",interactions:"Focus a slice, explode the active segment, and drill into the selected branch or metric."};case"radar":return{title:"Multidimensional benchmark surface",summary:n,value:"Capability, maturity, and benchmark comparisons across many attributes at once.",reading:"A tilted radar plane makes gaps between current and target profiles easier to spot.",interactions:"Hover each axis, compare target overlays, and spotlight one profile while muting others."};case"globe":return{title:"Spatial orbit view",summary:n,value:"Global operations and regional performance views that need strong geographic storytelling.",reading:"Curvature and orbit paths help users understand long-distance relationships and hotspots.",interactions:"Hover a route, isolate a region, and replay movement or change over time."};case"flow":return{title:"Ribbon flow in depth",summary:n,value:"Journey, dependency, and conversion pathways where the route itself is the business insight.",reading:"Depth separates overlapping ribbons and keeps the dominant path visually obvious.",interactions:"Hover a ribbon to reveal the full route, then drill into one path or stage family."};case"funnel":return{title:"Stage loss with depth cues",summary:n,value:"Sales, product, and ops funnels where loss between phases needs stronger visual emphasis.",reading:"Depth exaggerates narrowing, making stage drop-off impossible to miss in executive views.",interactions:"Hover a stage to inspect conversion, drop-off, and recovered volume across the journey."};case"pyramid":return{title:"Hierarchical wedge comparison",summary:n,value:"Executive hierarchy and allocation stories where each layer needs visual weight.",reading:"The stepped pyramid keeps stage order obvious while preserving contribution by layer.",interactions:"Select a tier to isolate its contribution or compare the current tier against the target mix."};case"dashboard":return{title:"Isometric dashboard composition",summary:n,value:"Premium command-center cards that combine KPI, trend, state, and layout depth.",reading:"Depth turns the chart into a widget surface, not just a standalone plot.",interactions:"Hover each tile to inspect KPIs, jump into the underlying chart, and compare cards at a glance."}}},Gr=t=>{switch(t){case"radial":return{numberLabel:"Total mix",numberValue:"100",legendItems:[{label:"Core",value:"42",color:"#2f6df6"},{label:"Expansion",value:"31",color:"#2dd4bf"},{label:"Services",value:"27",color:"#f59e0b"}]};case"line":return{numberLabel:"Peak value",numberValue:"92k",legendItems:[{label:"Forecast",value:"92k",color:"#52d2ff"},{label:"Baseline",value:"74k",color:"#2dd4bf"}]};case"area":return{numberLabel:"Accumulated",numberValue:"184k",legendItems:[{label:"Demand",value:"108k",color:"#52d2ff"},{label:"Capacity",value:"76k",color:"#2dd4bf"}]};case"surface":return{numberLabel:"Hotspot",numberValue:"46.0",legendItems:[{label:"Ridge",value:"46.0",color:"#ff8f52"},{label:"Midfield",value:"31.0",color:"#52d2ff"},{label:"Floor",value:"18.0",color:"#2dd4bf"}]};case"heatmap":return{numberLabel:"Peak cell",numberValue:"46",legendItems:[{label:"Hot zone",value:"46",color:"#ff8f52"},{label:"Warm zone",value:"34",color:"#52d2ff"},{label:"Cool zone",value:"18",color:"#7b9bff"}]};case"scatter":return{numberLabel:"Largest bubble",numberValue:"28",legendItems:[{label:"North",value:"14",color:"#52d2ff"},{label:"West",value:"28",color:"#2f6df6"},{label:"Global",value:"36",color:"#ff8f52"}]};case"column":case"stacked":return{numberLabel:"Top segment",numberValue:"71k",legendItems:[{label:"Primary",value:"58k",color:"#2f6df6"},{label:"Secondary",value:"44k",color:"#2dd4bf"},{label:"Tertiary",value:"71k",color:"#ff8f52"}]};case"radar":return{numberLabel:"Coverage",numberValue:"78%",legendItems:[{label:"Current",value:"78%",color:"#52d2ff"},{label:"Target",value:"86%",color:"#2dd4bf"}]};case"globe":return{numberLabel:"Active routes",numberValue:"24",legendItems:[{label:"Americas",value:"42",color:"#52d2ff"},{label:"Europe",value:"31",color:"#2dd4bf"},{label:"APAC",value:"38",color:"#ff8f52"}]};case"flow":return{numberLabel:"Dominant path",numberValue:"1.24k",legendItems:[{label:"Primary path",value:"1.24k",color:"#2f6df6"},{label:"Secondary path",value:"0.48k",color:"#2dd4bf"}]};case"funnel":return{numberLabel:"Conversion",numberValue:"8.8%",legendItems:[{label:"Lead",value:"1000",color:"#52d2ff"},{label:"Qualified",value:"540",color:"#2f6df6"},{label:"Won",value:"88",color:"#2dd4bf"}]};case"pyramid":return{numberLabel:"Priority tier",numberValue:"18",legendItems:[{label:"Base",value:"58",color:"#2dd4bf"},{label:"Growth",value:"34",color:"#2f6df6"},{label:"Priority",value:"18",color:"#52d2ff"}]};case"dashboard":return{numberLabel:"Widget score",numberValue:"84",legendItems:[{label:"Revenue",value:"42",color:"#52d2ff"},{label:"Health",value:"28",color:"#2dd4bf"},{label:"Risk",value:"16",color:"#ff8f52"}]}}},ce=(t,e)=>`${t}: ${e?"On":"Off"}`,Or=t=>`
  <div class="three-d-concept-legend" data-three-d-legend>
    ${t.legendItems.map(e=>`
          <article class="three-d-concept-legend-item">
            <span class="three-d-concept-legend-key">
              <i style="background:${e.color}"></i>
              ${e.label}
            </span>
            <strong>${e.value}</strong>
          </article>
        `).join("")}
  </div>
`,Wr=()=>`
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
`,Nr=()=>`
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
`,jr=()=>`
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
`,Ur=()=>`
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
`,Vr=()=>`
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
`,Kr=()=>`
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
`,Qr=()=>`
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
`,Jr=()=>`
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
`,Zr=()=>`
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
`,Yr=()=>`
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
`,Xr=()=>`
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
`,ei=()=>`
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
`,ti=()=>`
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
`,ni=()=>`
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
`,ai=t=>{switch(t){case"column":return Wr();case"stacked":return Nr();case"line":return jr();case"area":return Ur();case"surface":return Vr();case"heatmap":return Kr();case"scatter":return Qr();case"radial":return Jr();case"radar":return Zr();case"globe":return Yr();case"flow":return Xr();case"funnel":return ei();case"pyramid":return ti();case"dashboard":return ni()}},ri=t=>{const e=Hr(t.id),n=qr(e,t),a=Gr(e);return`
    <div class="playground-proxy">
      <div class="playground-proxy-header">
        <p class="eyebrow">Concept Preview</p>
        <strong>${n.title}</strong>
        <p>${n.summary}</p>
      </div>
      <div class="three-d-concept" data-three-d-kind="${e}">
        <div class="three-d-concept-controls">
          <button class="demo-toggle is-active" type="button" data-three-d-toggle="showNumber" aria-pressed="true">
            ${ce("Show number",!0)}
          </button>
          <button class="demo-toggle is-active" type="button" data-three-d-toggle="showLegend" aria-pressed="true">
            ${ce("Show legend",!0)}
          </button>
          <button class="demo-toggle is-active" type="button" data-three-d-toggle="showTooltip" aria-pressed="true">
            ${ce("Show tooltip",!0)}
          </button>
        </div>
        <div class="three-d-concept-stage" data-three-d-stage>
          <div class="three-d-concept-badge" data-three-d-number>
            <span>${a.numberLabel}</span>
            <strong>${a.numberValue}</strong>
          </div>
          ${ai(e)}
          ${Or(a)}
          <div class="three-d-concept-tooltip" data-three-d-tooltip hidden></div>
        </div>
        <div class="three-d-concept-insights">
          <article class="three-d-concept-card">
            <span>Business value</span>
            <strong>${n.value}</strong>
          </article>
          <article class="three-d-concept-card">
            <span>Reading model</span>
            <strong>${n.reading}</strong>
          </article>
          <article class="three-d-concept-card">
            <span>Interaction path</span>
            <strong>${n.interactions}</strong>
          </article>
        </div>
      </div>
    </div>
  `},ii=t=>{const e=t.querySelector("[data-three-d-stage]"),n=t.querySelector("[data-three-d-tooltip]"),a=t.querySelector("[data-three-d-number]"),r=Array.from(t.querySelectorAll("[data-three-d-number-node]")),i=t.querySelector("[data-three-d-legend]"),l=Array.from(t.querySelectorAll("[data-three-d-toggle]")),s=Array.from(t.querySelectorAll("[data-concept-tip]")),c={showNumber:!0,showLegend:!0,showTooltip:!0};if(!e||!n||s.length===0)return()=>{};const o=[],d=()=>{a&&(a.hidden=!c.showNumber),r.forEach(h=>{h.style.opacity=c.showNumber?"1":"0"}),i&&(i.hidden=!c.showLegend),c.showTooltip||(n.hidden=!0,s.forEach(h=>h.classList.remove("is-active"))),l.forEach(h=>{const p=h.dataset.threeDToggle;if(!p)return;const u=c[p],f=p==="showNumber"?"Show number":p==="showLegend"?"Show legend":"Show tooltip";h.textContent=ce(f,u),h.classList.toggle("is-active",u),h.setAttribute("aria-pressed",u?"true":"false")})},m=h=>{const p=e.getBoundingClientRect(),u=bt(h.clientX-p.left,30,p.width-30),f=bt(h.clientY-p.top,28,p.height-20);n.style.left=`${u}px`,n.style.top=`${f}px`};return s.forEach(h=>{const p=v=>{if(!c.showTooltip)return;const L=h.getAttribute("data-concept-tip");L&&(n.hidden=!1,n.textContent=L,h.classList.add("is-active"),v instanceof MouseEvent&&m(v))},u=v=>{v instanceof MouseEvent&&m(v)},f=()=>{n.hidden=!0,h.classList.remove("is-active")};h.addEventListener("mouseenter",p),h.addEventListener("mousemove",u),h.addEventListener("mouseleave",f),o.push(()=>{h.removeEventListener("mouseenter",p),h.removeEventListener("mousemove",u),h.removeEventListener("mouseleave",f)})}),l.forEach(h=>{const p=()=>{const u=h.dataset.threeDToggle;u&&(c[u]=!c[u],d())};h.addEventListener("click",p),o.push(()=>{h.removeEventListener("click",p)})}),d(),()=>{o.forEach(h=>h())}},yt=(t,e,n)=>Math.min(Math.max(t,e),n),de=(t,e)=>`${t}: ${e?"On":"Off"}`,Z=(t,e)=>e.some(n=>t.includes(n)),si=t=>{const e=`${t.id} ${t.name}`.toLowerCase();if(Z(e,["100 stacked","100%-stacked","100% stacked"]))return"stacked-100";if(t.family==="Widgets")return"widget";if(t.family==="Financial")return"financial";if(t.family==="Hierarchical")return"hierarchy";if(t.family==="Flow")return"flow";if(t.family==="Geospatial")return"geo";if(t.family==="Timeline")return"timeline";if(t.family==="Hybrid")return"hybrid";if(t.family==="Statistical")return Z(e,["bubble","hexbin","swarm","strip","scatter","dot plot"])?"scatter":"distribution";if(t.family==="Cartesian"){if(Z(e,["stacked","marimekko","mosaic","population pyramid"]))return"stacked";if(Z(e,["line","area","spline","step","stream","bump","slope"]))return"line";if(Z(e,["bar","column","waterfall","lollipop","bullet","dumbbell"]))return"bar"}return t.family==="Analytical"?"scatter":"generic"},oi=(t,e)=>{const n=`${e.description} This concept preview translates the product intent of ${e.name.toLowerCase()} into a visual shape, even before the renderer ships in the core.`;switch(t){case"stacked-100":return{title:"Relative composition comparison",summary:n,value:"Executive and dashboard use cases where composition matters more than raw totals.",reading:"Every bar stays normalized to 100%, so the eye compares mix, not magnitude.",interactions:"Hover a segment to inspect both percentage and raw contribution, then toggle series from the legend."};case"stacked":return{title:"Total plus composition",summary:n,value:"Operational boards where total workload and internal mix need to be read together.",reading:"The stacked model preserves overall magnitude while exposing contribution by segment.",interactions:"Hover segments, inspect totals, and eventually recalculate stacks when one series is hidden."};case"bar":return{title:"Categorical ranking and comparison",summary:n,value:"Dashboards that need direct comparison, ranking, targets, or variance reading.",reading:"Bar length or height anchors the comparison immediately, even when labels are long.",interactions:"Hover a bar for exact value, sort categories, and drill into the selected slice of the business."};case"line":return{title:"Temporal trend and movement",summary:n,value:"Planning, monitoring, and comparison workflows where direction over time matters most.",reading:"Slope, turning points, and overlays become the primary reading model.",interactions:"Hover points, compare series, and add threshold, forecast, or annotation layers later."};case"scatter":return{title:"Point-based relationship analysis",summary:n,value:"Analytics screens focused on correlation, clustering, outliers, and performance distribution.",reading:"Position reveals relationship first; size or color becomes a secondary business signal.",interactions:"Lasso clusters, inspect outliers, and add regression or density overlays when needed."};case"distribution":return{title:"Distribution and spread reading",summary:n,value:"Statistical workflows where variance, quartiles, bins, and outliers matter to decision making.",reading:"The chart communicates spread and concentration rather than simple magnitude.",interactions:"Hover bins or quartiles, compare groups, and filter the underlying population dynamically."};case"financial":return{title:"Precision time-series finance view",summary:n,value:"Trading, forecasting, PnL, and risk analysis that depend on exact cursor reading.",reading:"Candles and overlays are designed for precision, not decoration.",interactions:"Crosshair, zoom, navigator sync, and overlay toggles are expected from day one."};case"hierarchy":return{title:"Nested structure navigation",summary:n,value:"Portfolio, org, filesystem, and category views where parents and children must stay connected.",reading:"Area or depth conveys importance while structure preserves context.",interactions:"Drill down, focus a branch, and use breadcrumbs to stay oriented inside the hierarchy."};case"flow":return{title:"Path and movement analysis",summary:n,value:"Funnels, journeys, dependencies, and route analysis where transitions are the actual insight.",reading:"Links reveal where volume moves, leaks, or concentrates across stages.",interactions:"Highlight one path, isolate a branch, and drill into the stages that matter most."};case"widget":return{title:"Compact dashboard surface",summary:n,value:"KPI boards that need strong state reading in very small spaces.",reading:"Number, state, and trend must remain readable without chart chrome getting in the way.",interactions:"Hover for context, toggle thresholds, and expand into the underlying chart when needed."};case"geo":return{title:"Spatial comparison layer",summary:n,value:"Maps that need region, route, or density reading without sacrificing a product-ready UI.",reading:"Geography provides context, while color, marker size, or flow defines the business signal.",interactions:"Hover regions, zoom, drill into geography, and sync with filters across the dashboard."};case"timeline":return{title:"Time window and schedule planning",summary:n,value:"Roadmaps, incidents, releases, and project plans that rely on clear sequencing.",reading:"Duration, overlap, and milestone placement become the core reading model.",interactions:"Zoom the range, inspect milestones, and eventually drag or resize scheduled blocks."};case"hybrid":return{title:"Composite dashboard widget",summary:n,value:"High-value product surfaces that mix KPI, trend, risk, threshold, and state in one tile.",reading:"The widget adapts between quick executive scanning and deeper contextual inspection.",interactions:"Hover, expand, and drill into the most important metric without leaving the dashboard flow."};default:return{title:"Platform blueprint preview",summary:n,value:"A preview surface that keeps future product breadth visible without pretending the renderer already exists.",reading:"This concept focuses on business reading first, then implementation detail later.",interactions:"Inspect hotspots, review the contract, and use the API blueprint to align future implementation."}}},li=t=>{switch(t){case"stacked-100":return{numberLabel:"Primary mix",numberValue:"52%",legendItems:[{label:"Core",value:"52%",color:"#2563eb"},{label:"Expansion",value:"28%",color:"#14b8a6"},{label:"Services",value:"20%",color:"#f59e0b"}]};case"stacked":return{numberLabel:"Total volume",numberValue:"118k",legendItems:[{label:"Core",value:"58k",color:"#2563eb"},{label:"Expansion",value:"36k",color:"#14b8a6"},{label:"Services",value:"24k",color:"#f59e0b"}]};case"bar":return{numberLabel:"Top category",numberValue:"74",legendItems:[{label:"North",value:"74",color:"#2563eb"},{label:"West",value:"61",color:"#38bdf8"},{label:"Global",value:"48",color:"#14b8a6"}]};case"line":return{numberLabel:"Latest value",numberValue:"84",legendItems:[{label:"Actual",value:"84",color:"#2563eb"},{label:"Plan",value:"78",color:"#14b8a6"}]};case"scatter":return{numberLabel:"Best cluster",numberValue:"4.2",legendItems:[{label:"Enterprise",value:"High fit",color:"#2563eb"},{label:"SMB",value:"Moderate",color:"#38bdf8"}]};case"distribution":return{numberLabel:"Median",numberValue:"38",legendItems:[{label:"p25",value:"24",color:"#94a3b8"},{label:"Median",value:"38",color:"#2563eb"},{label:"p75",value:"54",color:"#14b8a6"}]};case"financial":return{numberLabel:"Close",numberValue:"128.4",legendItems:[{label:"Open",value:"124.0",color:"#94a3b8"},{label:"High",value:"130.0",color:"#22c55e"},{label:"Low",value:"121.0",color:"#ef4444"}]};case"hierarchy":return{numberLabel:"Top branch",numberValue:"42%",legendItems:[{label:"Alpha",value:"42",color:"#2563eb"},{label:"Beta",value:"28",color:"#14b8a6"},{label:"Gamma",value:"18",color:"#f59e0b"}]};case"flow":return{numberLabel:"Main path",numberValue:"1.24k",legendItems:[{label:"Visit > Trial",value:"1.24k",color:"#2563eb"},{label:"Trial > Paid",value:"318",color:"#14b8a6"}]};case"widget":return{numberLabel:"Current state",numberValue:"72%",legendItems:[{label:"Healthy",value:"0-60",color:"#22c55e"},{label:"Attention",value:"60-80",color:"#f59e0b"},{label:"Critical",value:"80-100",color:"#ef4444"}]};case"geo":return{numberLabel:"Top region",numberValue:"42",legendItems:[{label:"NA",value:"42",color:"#2563eb"},{label:"EU",value:"31",color:"#14b8a6"},{label:"APAC",value:"27",color:"#f59e0b"}]};case"timeline":return{numberLabel:"Critical path",numberValue:"46d",legendItems:[{label:"Discovery",value:"14d",color:"#2563eb"},{label:"Delivery",value:"32d",color:"#14b8a6"}]};case"hybrid":return{numberLabel:"Health score",numberValue:"84",legendItems:[{label:"Revenue",value:"+18%",color:"#2563eb"},{label:"Risk",value:"Low",color:"#f59e0b"},{label:"Status",value:"On pace",color:"#14b8a6"}]};default:return{numberLabel:"Planned value",numberValue:"TBD",legendItems:[{label:"Input",value:"Configured",color:"#2563eb"},{label:"Theme",value:"Ready",color:"#14b8a6"},{label:"Behavior",value:"Defined",color:"#f59e0b"}]}}},ci=t=>`
  <div class="blueprint-concept-legend" data-blueprint-legend>
    ${t.legendItems.map(e=>`
          <article class="blueprint-concept-legend-item">
            <span class="blueprint-concept-legend-key">
              <i style="background:${e.color}"></i>
              ${e.label}
            </span>
            <strong>${e.value}</strong>
          </article>
        `).join("")}
  </div>
`,di=()=>`
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
`,hi=()=>`
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
`,ui=()=>`
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
`,pi=()=>`
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
`,mi=()=>`
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
`,gi=()=>`
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
`,fi=()=>`
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
`,bi=()=>`
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
`,yi=()=>`
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
`,vi=()=>`
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
`,wi=()=>`
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
`,xi=()=>`
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
`,ki=()=>`
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
`,Ci=()=>`
  <svg class="blueprint-scene" viewBox="0 0 760 320" role="img" aria-label="Generic blueprint concept preview">
    <rect x="104" y="70" width="552" height="178" rx="26" fill="#f8fbff" stroke="#d8e4f2" stroke-width="2" />
    <path d="M146 214 L236 168 L316 188 L408 132 L494 152 L612 98" fill="none" stroke="#2563eb" stroke-width="5" stroke-linecap="round" />
    <g class="blueprint-hotspot" data-concept-tip="This placeholder preview keeps the intended reading model visible while the renderer is still planned.">
      <circle cx="612" cy="98" r="10" fill="#2563eb" />
      <text x="612" y="80" fill="#1d2a41" font-size="14" font-weight="700" text-anchor="middle" data-blueprint-number-node="true">Preview</text>
    </g>
  </svg>
`,Si=t=>{switch(t){case"stacked-100":return di();case"stacked":return hi();case"bar":return ui();case"line":return pi();case"scatter":return mi();case"distribution":return gi();case"financial":return fi();case"hierarchy":return bi();case"flow":return yi();case"widget":return vi();case"geo":return wi();case"timeline":return xi();case"hybrid":return ki();default:return Ci()}},Ti=t=>{const e=si(t),n=oi(e,t),a=li(e);return`
    <div class="playground-proxy">
      <div class="playground-proxy-header">
        <p class="eyebrow">Concept Preview</p>
        <strong>${n.title}</strong>
        <p>${n.summary}</p>
      </div>
      <div class="blueprint-concept" data-blueprint-kind="${e}">
        <div class="blueprint-concept-controls">
          <button class="demo-toggle is-active" type="button" data-blueprint-toggle="showNumber" aria-pressed="true">
            ${de("Show number",!0)}
          </button>
          <button class="demo-toggle is-active" type="button" data-blueprint-toggle="showLegend" aria-pressed="true">
            ${de("Show legend",!0)}
          </button>
          <button class="demo-toggle is-active" type="button" data-blueprint-toggle="showTooltip" aria-pressed="true">
            ${de("Show tooltip",!0)}
          </button>
        </div>
        <div class="blueprint-concept-stage" data-blueprint-stage>
          <div class="blueprint-concept-badge" data-blueprint-number>
            <span>${a.numberLabel}</span>
            <strong>${a.numberValue}</strong>
          </div>
          ${Si(e)}
          ${ci(a)}
          <div class="blueprint-concept-tooltip" data-blueprint-tooltip hidden></div>
        </div>
        <div class="blueprint-concept-insights">
          <article class="blueprint-concept-card">
            <span>Business value</span>
            <strong>${n.value}</strong>
          </article>
          <article class="blueprint-concept-card">
            <span>Reading model</span>
            <strong>${n.reading}</strong>
          </article>
          <article class="blueprint-concept-card">
            <span>Interaction path</span>
            <strong>${n.interactions}</strong>
          </article>
        </div>
      </div>
    </div>
  `},Pi=t=>{const e=t.querySelector("[data-blueprint-stage]"),n=t.querySelector("[data-blueprint-tooltip]"),a=t.querySelector("[data-blueprint-number]"),r=Array.from(t.querySelectorAll("[data-blueprint-number-node]")),i=t.querySelector("[data-blueprint-legend]"),l=Array.from(t.querySelectorAll("[data-blueprint-toggle]")),s=Array.from(t.querySelectorAll("[data-concept-tip]")),c={showNumber:!0,showLegend:!0,showTooltip:!0};if(!e||!n||s.length===0)return()=>{};const o=[],d=()=>{a&&(a.hidden=!c.showNumber),r.forEach(h=>{h.style.opacity=c.showNumber?"1":"0"}),i&&(i.hidden=!c.showLegend),c.showTooltip||(n.hidden=!0,s.forEach(h=>h.classList.remove("is-active"))),l.forEach(h=>{const p=h.dataset.blueprintToggle;if(!p)return;const u=c[p],f=p==="showNumber"?"Show number":p==="showLegend"?"Show legend":"Show tooltip";h.textContent=de(f,u),h.classList.toggle("is-active",u),h.setAttribute("aria-pressed",u?"true":"false")})},m=h=>{const p=e.getBoundingClientRect(),u=yt(h.clientX-p.left,30,p.width-30),f=yt(h.clientY-p.top,28,p.height-20);n.style.left=`${u}px`,n.style.top=`${f}px`};return s.forEach(h=>{const p=v=>{if(!c.showTooltip)return;const L=h.getAttribute("data-concept-tip");L&&(n.hidden=!1,n.textContent=L,h.classList.add("is-active"),v instanceof MouseEvent&&m(v))},u=v=>{v instanceof MouseEvent&&m(v)},f=()=>{n.hidden=!0,h.classList.remove("is-active")};h.addEventListener("mouseenter",p),h.addEventListener("mousemove",u),h.addEventListener("mouseleave",f),o.push(()=>{h.removeEventListener("mouseenter",p),h.removeEventListener("mousemove",u),h.removeEventListener("mouseleave",f)})}),l.forEach(h=>{const p=()=>{const u=h.dataset.blueprintToggle;u&&(c[u]=!c[u],d())};h.addEventListener("click",p),o.push(()=>h.removeEventListener("click",p))}),d(),()=>{o.forEach(h=>h())}};let F,C;const Li=[{id:"all",label:"All"},{id:"live",label:"Live"},{id:"planned",label:"Planned"},{id:"3d",label:"3D"},{id:"dashboard",label:"Dashboard"},{id:"statistical",label:"Statistical"},{id:"financial",label:"Financial"},{id:"flow",label:"Flow"},{id:"hierarchy",label:"Hierarchy"},{id:"geo",label:"Geo"}],fe=t=>{const e=t.replace(/\/+$/,"")||"/";return e===""?"/":e},Gt=()=>{const t=new URLSearchParams(window.location.search);return fe(t.get("page")??"/")},y=(t,e)=>{const n=new URLSearchParams,a=fe(t);a!=="/"&&n.set("page",a),Object.entries(e??{}).forEach(([i,l])=>{l&&n.set(i,l)});const r=n.toString();return r?`./?${r}`:"./"},Ai=t=>t.replace(/href="(\/[^"]*)"/g,(e,n)=>{const[a,r=""]=String(n).split("?"),i=new URLSearchParams(r),l=Object.fromEntries(i.entries());return`href="${y(a,l)}"`}),Ot=(t,e)=>e==="all"?!0:e==="live"||e==="planned"?t.status===e:e==="3d"?t.tags.includes("3d")||t.family==="3D":e==="dashboard"?t.tags.includes("dashboard")||t.tags.includes("widget"):e==="statistical"?t.family==="Statistical":e==="financial"?t.family==="Financial":e==="flow"?t.family==="Flow":e==="hierarchy"?t.family==="Hierarchical":e==="geo"?t.family==="Geospatial":!0,Ii=t=>{var e;return(e=Fe.find(n=>n.frontmatter.demo===t))==null?void 0:e.path},Wt=(t,e)=>{const n=new URLSearchParams;return n.set("example",t),e&&n.set("family",e),y("/playground",Object.fromEntries(n.entries()))},_i={"quick-start-line":"line","line-overview":"line","area-forecast":"area","bar-environments":"bar","bar-3d-launch":"bar-3d","stacked-area-capacity":"stacked-area","combo-plan-vs-actual":"combo","scatter-correlation":"scatter","donut-alerts":"donut","gauge-health":"gauge","gauge-semicircle":"gauge-semicircle","radial-progress":"radial-progress","thermometer-vertical":"thermometer","thermometer-horizontal":"thermometer-horizontal","battery-meter":"battery","pie-allocation":"pie","realtime-stream":"line","theme-switcher":"area","dashboard-pattern":"combo","realtime-panel":"line","kpi-sparkline":"sparkline"},$i=t=>{const e=_i[t],n=e?Lt(e):void 0;return e?Wt(e,n==null?void 0:n.family):"/playground"},Nt=(t,e)=>{var n;return e.path&&fe(e.path)===t?!0:((n=e.children)==null?void 0:n.some(a=>Nt(t,a)))??!1},jt=(t,e)=>t.map(n=>{var r;const a=Nt(e,n);return(r=n.children)!=null&&r.length?`
        <details class="nav-group" ${a?"open":""}>
          <summary>${n.title}</summary>
          <div class="nav-children">
            ${jt(n.children,e)}
          </div>
        </details>
      `:`
          <a class="nav-link ${a?"is-active":""}" href="${y(n.path??"/")}">
            <span>${n.title}</span>
            ${n.badge?`<span class="nav-badge">${n.badge}</span>`:""}
          </a>
        `}).join(""),Ri=t=>{const e=qt(t);return e!=null&&e.length?e.filter(n=>n.path).map(n=>{const a=n.path??"/";return`<a href="${y(a)}">${n.title}</a>`}).join("<span>/</span>"):""},Mi=t=>!t||t.headings.length===0?'<div class="toc-empty">This page focuses on overview content.</div>':`
    <div class="toc-list">
      ${t.headings.filter(e=>e.depth<=3).map(e=>`
            <a class="toc-link depth-${e.depth}" href="#${e.anchor}">
              ${e.text}
            </a>
          `).join("")}
    </div>
  `,Ut=t=>t.includes("showNumber")||!t.includes("createChart({")?t:t.replace(`createChart({
`,`createChart({
  showNumber: true,
  showLegend: true,
  showTooltip: true,
`),Ei=t=>{if(!t.frontmatter.demo)return"";const e=U(t.frontmatter.demo);return e?`
    <section class="doc-demo-block">
      <div class="doc-demo-header">
        <div>
          <p class="eyebrow">Live Example</p>
          <h2>${e.title}</h2>
          <p>${e.description}</p>
        </div>
      </div>
      <div class="doc-demo-grid">
        <div class="doc-demo-preview" data-demo="${e.id}"></div>
        <div class="doc-demo-code">
          <pre><code>${Ut(e.code).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}</code></pre>
        </div>
      </div>
    </section>
  `:""},Di=t=>`
  <article class="doc-page">
    <div class="doc-page-meta">
      <div class="breadcrumbs">${Ri(t.path)}</div>
      ${t.frontmatter.status?`<span class="status-pill">${t.frontmatter.status}</span>`:""}
    </div>
    <header class="doc-page-header">
      <h1>${t.frontmatter.heading??t.frontmatter.title}</h1>
      <p>${t.frontmatter.description}</p>
    </header>
    ${Ei(t)}
    <section class="doc-markdown">${Ai(t.html)}</section>
  </article>
`,zi=()=>`
  <section class="doc-page">
    <div class="doc-page-meta"><div class="breadcrumbs"><a href="${y("/")}">Introduction</a><span>/</span><a href="${y("/chart-explorer")}">Chart Explorer</a></div></div>
    <header class="doc-page-header">
      <h1>Chart Explorer</h1>
      <p>Map the platform breadth in one place. The live set is growing, the planned set is intentionally broad, and the explorer is designed to show the 200+ chart forms the product is aiming to support.</p>
    </header>
    <div class="catalog-stats">
      <article>
        <strong>${Y.total}</strong>
        <span>Total chart types</span>
      </article>
      <article>
        <strong>${Y.live}</strong>
        <span>Live in core</span>
      </article>
      <article>
        <strong>${Y.threeD}</strong>
        <span>3D family entries</span>
      </article>
      <article>
        <strong>${Y.families}</strong>
        <span>Coverage families</span>
      </article>
    </div>
    <div class="catalog-toolbar">
      <div class="catalog-filters">
        ${Li.map(t=>{const e=z.filter(n=>Ot(n,t.id)).length;return`
              <button class="catalog-filter ${t.id==="all"?"is-active":""}" data-catalog-filter="${t.id}" type="button">
                <span>${t.label}</span>
                <strong>${e}</strong>
              </button>
            `}).join("")}
      </div>
      <p class="catalog-results" data-catalog-count>Showing ${z.length} chart types</p>
    </div>
    <div class="catalog-grid">
      ${z.map(t=>`
            <article
              class="catalog-card ${t.status}"
              data-catalog-card
              data-chart-id="${t.id}"
              data-status="${t.status}"
              data-family="${t.family}"
              data-tags="${t.tags.join(" ")}"
            >
              <div class="catalog-card-top">
                <span class="catalog-family">${t.family}</span>
                <span class="catalog-pill ${t.status}">${t.status}</span>
              </div>
              <h3>${t.name}</h3>
              <p>${t.description}</p>
              ${t.docsPath?`<a class="catalog-link" href="${y(t.docsPath)}">Open guide</a>`:`<a class="catalog-link" href="${Wt(t.id,t.family)}">Open blueprint</a>`}
            </article>
          `).join("")}
    </div>
  </section>
`,Bi=()=>`
  <section class="doc-page">
    <div class="doc-page-meta"><div class="breadcrumbs"><a href="${y("/")}">Introduction</a><span>/</span><a href="${y("/example-gallery")}">Example Gallery</a></div></div>
    <header class="doc-page-header">
      <h1>Example Gallery</h1>
      <p>A wider surface of live examples using the current core engine. This page is here so the platform feels like a growing system, not a handful of isolated starter demos.</p>
    </header>
    <div class="catalog-stats">
      <article>
        <strong>${ee.length}</strong>
        <span>Live examples</span>
      </article>
      <article>
        <strong>${ee.filter(t=>t.id.includes("3d")).length}</strong>
        <span>3D examples</span>
      </article>
      <article>
        <strong>${ee.filter(t=>t.id.includes("realtime")).length}</strong>
        <span>Realtime examples</span>
      </article>
      <article>
        <strong>${Y.total}</strong>
        <span>Total catalog coverage</span>
      </article>
    </div>
    <div class="example-gallery-grid">
      ${ee.map(t=>{const e=Ii(t.id);return`
            <article class="example-gallery-card">
              <div class="example-gallery-head">
                <p class="eyebrow">Live Example</p>
                <h3>${t.title}</h3>
                <p>${t.description}</p>
              </div>
              <div class="example-gallery-preview" data-gallery-demo="${t.id}"></div>
              <div class="example-gallery-actions">
                ${e?`<a class="catalog-link" href="${y(e)}">Open guide</a>`:""}
                <a class="catalog-link" href="${$i(t.id)}">Open in playground</a>
              </div>
            </article>
          `}).join("")}
    </div>
  </section>
`,Fi=()=>`
  <section class="doc-page">
    <div class="doc-page-meta"><div class="breadcrumbs"><a href="${y("/")}">Introduction</a><span>/</span><a href="${y("/playground")}">Playground</a></div></div>
    <header class="doc-page-header">
      <h1>Playground</h1>
      <p>Browse the full chart catalog in one place. Live charts render immediately; planned charts include behavior contracts and API blueprints so the intended product surface stays visible.</p>
    </header>
    <div class="playground-layout">
      <aside class="playground-sidebar">
        <label for="playground-family" class="playground-label">Family</label>
        <select id="playground-family" class="playground-select">
          ${At.map(t=>`<option value="${t}">${t}</option>`).join("")}
        </select>
        <label for="playground-search" class="playground-label">Search</label>
        <input id="playground-search" class="playground-select" type="search" placeholder="Find a chart example..." />
        <label for="playground-demo" class="playground-label">Example</label>
        <select id="playground-demo" class="playground-select">
          ${ae.map(t=>{const e=t.status==="live"?"Live":"Blueprint";return`<option value="${t.id}">${t.name} · ${e}</option>`}).join("")}
        </select>
        <p class="playground-help">Use this page to inspect live charts and non-live blueprints without leaving the docs flow.</p>
        <div class="playground-spec-card">
          <div class="catalog-card-top">
            <span class="catalog-family" data-playground-family-label></span>
            <span class="catalog-pill" data-playground-status-label></span>
          </div>
          <p class="playground-description" data-playground-description></p>
          <div class="playground-spec">
            <h3>Purpose</h3>
            <p data-playground-purpose></p>
          </div>
          <div class="playground-spec">
            <h3>Behavior Contract</h3>
            <p data-playground-behavior></p>
          </div>
        </div>
      </aside>
      <div class="playground-main">
        <div class="doc-demo-grid">
          <div class="doc-demo-preview" data-playground-preview></div>
          <div class="doc-demo-code"><pre><code data-playground-code></code></pre></div>
        </div>
      </div>
    </div>
  </section>
`,vt=t=>`
  <div class="playground-blueprint">
    <p class="eyebrow">${t.status==="live"?"Live Example":"Blueprint Example"}</p>
    <h3>${t.name}</h3>
    <p>${t.description}</p>
    <div class="playground-blueprint-grid">
      <article>
        <strong>Purpose</strong>
        <p>${t.purpose}</p>
      </article>
      <article>
        <strong>Behavior</strong>
        <p>${t.behavior}</p>
      </article>
    </div>
    <div class="example-gallery-actions">
      ${t.docsPath?`<a class="catalog-link" href="${y(t.docsPath)}">Open guide</a>`:'<span class="catalog-link muted">Guide planned</span>'}
    </div>
  </div>
`,Hi=()=>`
  <section class="landing">
    <div class="landing-hero">
      <div class="landing-copy">
        <p class="eyebrow">Infinity Charts Documentation</p>
        <h1>Documentation built like a product, not an appendix.</h1>
        <p class="landing-lead">Framework-agnostic JavaScript and TypeScript docs for a charting platform core designed to scale from a first chart to dense enterprise dashboards and realtime monitoring surfaces.</p>
        <div class="landing-actions">
          <a class="button-primary" href="${y("/getting-started/quick-start")}">Start with Quick Start</a>
          <a class="button-secondary" href="${y("/chart-explorer")}">Explore Chart Coverage</a>
          <a class="button-secondary" href="${y("/charts/bar-3d")}">Open 3D Lab</a>
        </div>
      </div>
      <div class="landing-showcase">
        <div class="showcase-card showcase-card-wide"><div data-home-demo="line-overview"></div></div>
        <div class="showcase-card"><div data-home-demo="bar-3d-launch"></div></div>
        <div class="showcase-card"><div data-home-demo="donut-alerts"></div></div>
      </div>
    </div>

    <div class="landing-strip">
      <article>
        <h3>Pure JS / TS</h3>
        <p>No React, Vue, or Angular assumptions in the core architecture.</p>
      </article>
      <article>
        <h3>Simple by default</h3>
        <p>Minimal config gets you to a chart quickly without blocking growth.</p>
      </article>
      <article>
        <h3>Infinite by design</h3>
        <p>Registries, renderer abstraction, and long-term chart breadth are built in from the start.</p>
      </article>
    </div>

    <section class="landing-sections">
      <div class="landing-section-card">
        <h2>Start where teams actually start</h2>
        <p>Installation, quick start, lifecycle, configuration shape, theming, animation, and live data updates are treated as first-class topics.</p>
        <div class="landing-links">
          <a href="${y("/getting-started/installation")}">Installation</a>
          <a href="${y("/getting-started/quick-start")}">Quick Start</a>
          <a href="${y("/concepts/configuration-model")}">Configuration Model</a>
          <a href="${y("/concepts/realtime-updates")}">Realtime Updates</a>
        </div>
      </div>
      <div class="landing-section-card">
        <h2>Ship charts, then ship systems</h2>
        <p>The docs are organized to support both single chart adoption and long-term dashboard platform work.</p>
        <div class="landing-links">
          <a href="${y("/charts/line")}">Line</a>
          <a href="${y("/charts/bar-3d")}">3D Bar</a>
          <a href="${y("/charts/stacked-area")}">Stacked Area</a>
          <a href="${y("/charts/combo")}">Combo</a>
          <a href="${y("/example-gallery")}">Example Gallery</a>
        </div>
      </div>
      <div class="landing-section-card">
        <h2>Keep platform breadth visible</h2>
        <p>Chart Explorer and the example surface make it clear what is live now and where the platform is already growing next.</p>
        <div class="landing-links">
          <a href="${y("/chart-explorer")}">Chart Explorer</a>
          <a href="${y("/example-gallery")}">Example Gallery</a>
          <a href="${y("/playground")}">Playground</a>
        </div>
      </div>
    </section>
  </section>
`,qi=t=>{const e=Fr(t);return t.trim()?e.length===0?'<div class="search-empty">No matching pages yet.</div>':e.map(n=>`
        <a class="search-result" href="${y(n.path)}">
        <a class="search-result" href="${y(n.path)}">
          <strong>${n.title}</strong>
          <span>${n.section}</span>
          <p>${n.description}</p>
        </a>
      `).join(""):""},Gi=(t,e)=>`
  <div class="app-shell">
    <header class="topbar">
      <div class="brand">
        <a href="${y("/")}">Infinity Charts</a>
        <span>Documentation</span>
      </div>
      <nav class="topbar-links">
        ${Gn.map(n=>`<a href="${y(n.path)}">${n.title}</a>`).join("")}
      </nav>
      <div class="search-box">
        <input id="search-input" type="search" placeholder="Search docs..." autocomplete="off" />
        <div id="search-results" class="search-results"></div>
      </div>
    </header>
    <div class="app-body">
      <aside class="sidebar">
        ${Ae.map(n=>`
              <section class="sidebar-section">
                <h2>${n.title}</h2>
                ${jt(n.children??[],t)}
              </section>
            `).join("")}
      </aside>
      <main class="main-content">
        ${t==="/"?Hi():t==="/chart-explorer"?zi():t==="/example-gallery"?Bi():t==="/playground"?Fi():e?Di(e):`
                    <section class="doc-page">
                      <header class="doc-page-header">
                        <h1>Page not found</h1>
                        <p>The requested page does not exist yet. Try the chart explorer or example gallery.</p>
                      </header>
                    </section>
                  `}
      </main>
      <aside class="toc-panel">
        <div class="toc-card">
          <p class="eyebrow">On this page</p>
          ${Mi(e)}
        </div>
      </aside>
    </div>
    <footer class="footer">
      <div>
        <strong>Infinity Charts Docs</strong>
        <p>Separate documentation project for the framework-agnostic core engine.</p>
      </div>
      <div class="footer-links">
        <a href="${y("/getting-started/quick-start")}">Quick Start</a>
        <a href="${y("/chart-explorer")}">Chart Explorer</a>
        <a href="${y("/example-gallery")}">Example Gallery</a>
      </div>
    </footer>
  </div>
`,Oi=t=>{const e=new URL(t,window.location.href),n=new URLSearchParams(e.search),a=fe(n.get("page")??"/");(Gt()!==a||e.search!==window.location.search)&&window.history.pushState({},"",`${window.location.pathname}${e.search}${e.hash}`),Se()},Wi=t=>{if(F==null||F(),F=void 0,!(t!=null&&t.frontmatter.demo))return;const e=U(t.frontmatter.demo),n=document.querySelector(`[data-demo="${t.frontmatter.demo}"]`);!e||!n||(F=Le(e,n))},Ni=()=>{C==null||C(),C=void 0;const e=Array.from(document.querySelectorAll("[data-home-demo]")).map(n=>{const a=n.dataset.homeDemo,r=a?U(a):void 0;return r?Le(r,n):void 0}).filter(n=>!!n);C=()=>{e.forEach(n=>n())}},ji=()=>{C==null||C(),C=void 0;const t=document.querySelector("#playground-family"),e=document.querySelector("#playground-search"),n=document.querySelector("#playground-demo"),a=document.querySelector("[data-playground-preview]"),r=document.querySelector("[data-playground-code]"),i=document.querySelector("[data-playground-family-label]"),l=document.querySelector("[data-playground-status-label]"),s=document.querySelector("[data-playground-description]"),c=document.querySelector("[data-playground-purpose]"),o=document.querySelector("[data-playground-behavior]");if(!t||!e||!n||!a||!r||!i||!l||!s||!c||!o)return;let d,m=[...ae];const h=new URLSearchParams(window.location.search);let p=h.get("example")??void 0;const u=h.get("family");u&&At.includes(u)&&(t.value=u);const f=()=>{const b=new URLSearchParams,S=n.value;S&&b.set("example",S),t.value&&t.value!=="All families"&&b.set("family",t.value);const _=b.toString()?`${window.location.pathname}?${b.toString()}`:window.location.pathname;window.history.replaceState({},"",_)},v=()=>{const b=t.value,S=e.value.trim().toLowerCase();m=ae.filter(T=>{const M=b==="All families"||T.family===b,N=S.length===0||T.name.toLowerCase().includes(S)||T.description.toLowerCase().includes(S)||T.id.toLowerCase().includes(S);return M&&N});const _=n.value;if(n.innerHTML=m.map(T=>{const M=T.status==="live"?"Live":"Blueprint";return`<option value="${T.id}">${T.name} · ${M}</option>`}).join(""),p&&m.some(T=>T.id===p)){n.value=p,p=void 0;return}if(m.some(T=>T.id===_)){n.value=_;return}m[0]&&(n.value=m[0].id)},L=()=>{d==null||d(),a.innerHTML="";const b=Lt(n.value);if(!b){r.textContent="",i.textContent="",l.textContent="",s.textContent="",c.textContent="",o.textContent="";return}i.textContent=b.family,l.textContent=b.status,l.className=`catalog-pill ${b.status}`,s.textContent=b.description,c.textContent=b.purpose,o.textContent=b.behavior,r.textContent=Ut(b.code),f();const S=b.demoId?U(b.demoId):void 0;if(S){d=Le(S,a);return}if(b.family==="3D"){a.innerHTML=ri(b),d=ii(a);return}if(b.status==="planned"){a.innerHTML=Ti(b),d=Pi(a);return}if(!S){a.innerHTML=vt(b);return}},I=()=>{if(v(),!m.length){a.innerHTML=vt({name:"No chart matches this filter",family:t.value,status:"planned",description:"Try a different family or search term to inspect a chart example.",purpose:"Keep the full catalog discoverable without forcing one giant unfiltered list.",behavior:"Filtering should feel instant and preserve the current selection whenever possible."}),r.textContent="",i.textContent=t.value,l.textContent="planned",l.className="catalog-pill planned",s.textContent="Try a different family or search term.",c.textContent="Keep the full catalog discoverable without forcing one giant unfiltered list.",o.textContent="Filtering should feel instant and preserve the current selection whenever possible.";return}L()};t.addEventListener("change",I),e.addEventListener("input",I),n.addEventListener("change",L),v(),L(),C=()=>{t.removeEventListener("change",I),e.removeEventListener("input",I),n.removeEventListener("change",L),d==null||d()}},Ui=()=>{C==null||C(),C=void 0;const t=Array.from(document.querySelectorAll("[data-catalog-filter]")),e=Array.from(document.querySelectorAll("[data-catalog-card]")),n=document.querySelector("[data-catalog-count]");if(!t.length||!e.length||!n)return;const a=i=>{t.forEach(s=>{s.classList.toggle("is-active",s.dataset.catalogFilter===i)});let l=0;e.forEach(s=>{var h,p,u;const c=s.dataset.chartId,o=c?z.find(f=>f.id===c):void 0,d=i==="all"||i==="live"&&s.dataset.status==="live"||i==="planned"&&s.dataset.status==="planned"||i==="3d"&&((h=s.dataset.tags)==null?void 0:h.includes("3d"))||i==="dashboard"&&(((p=s.dataset.tags)==null?void 0:p.includes("dashboard"))||((u=s.dataset.tags)==null?void 0:u.includes("widget")))||i==="statistical"&&s.dataset.family==="Statistical"||i==="financial"&&s.dataset.family==="Financial"||i==="flow"&&s.dataset.family==="Flow"||i==="hierarchy"&&s.dataset.family==="Hierarchical"||i==="geo"&&s.dataset.family==="Geospatial",m=o?Ot(o,i):d;s.hidden=!m,m&&(l+=1)}),n.textContent=`Showing ${l} chart types`},r=i=>{const s=i.currentTarget.dataset.catalogFilter;s&&a(s)};t.forEach(i=>i.addEventListener("click",r)),a("all"),C=()=>{t.forEach(i=>i.removeEventListener("click",r))}},Vi=()=>{C==null||C(),C=void 0;const e=Array.from(document.querySelectorAll("[data-gallery-demo]")).map(n=>{const a=n.dataset.galleryDemo,r=a?U(a):void 0;return r?r.mount(n):void 0}).filter(n=>!!n);C=()=>{e.forEach(n=>n())}},Ki=()=>{const t=document.querySelector("#search-input"),e=document.querySelector("#search-results");if(!t||!e)return;const n=()=>{e.innerHTML=qi(t.value),e.classList.toggle("is-visible",!!t.value.trim())},a=()=>{window.setTimeout(()=>{e.classList.remove("is-visible")},120)},r=()=>{t.value.trim()&&e.classList.add("is-visible")};t.addEventListener("input",n),t.addEventListener("blur",a),t.addEventListener("focus",r)},Se=()=>{const t=document.querySelector("#app");if(!t)return;F==null||F(),C==null||C(),F=void 0,C=void 0;const e=Gt(),n=Er(e);t.innerHTML=Gi(e,n),Ki(),e==="/"?Ni():e==="/chart-explorer"?Ui():e==="/example-gallery"?Vi():e==="/playground"&&ji(),Wi(n),window.scrollTo({top:0,behavior:"instant"})},Qi=t=>{t&&(document.body.addEventListener("click",e=>{const a=e.target.closest('a[href^="./?"], a[href^="?"]');if(!a)return;const r=new URL(a.href,window.location.href);r.origin===window.location.origin&&(e.preventDefault(),Oi(`${r.pathname}${r.search}`))}),window.addEventListener("popstate",()=>{Se()}),Se())};Qi(document.querySelector("#app"));export{ts as a,Xi as b,as as c,Yi as f,es as g,ns as l,Zi as p,be as r,it as t};
