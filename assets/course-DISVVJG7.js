var e=[{id:`canvas`,number:`01`,file:`01_canvas_containers.html`,icon:`ph-frame-corners`,title:`Canvas & Containers`,summary:`Figure, Axes, and the two titles that frame the plot.`,objective:`Separate the outer Figure from the inner Axes and know which object owns each title.`,tryThis:[`Select Figure and Axes; compare their hierarchy.`,`Inspect suptitle versus title.`,`Use the chips to switch focus without losing the plot context.`],check:`If you call ax.set_title(), which container does the text belong to?`},{id:`artists`,number:`02`,file:`02_data_artists.html`,icon:`ph-chart-line-up`,title:`Data Artists`,summary:`Lines, markers, patches, grid, and legend.`,objective:`Tell data-bearing artists from supporting artists and see where each one lives on an Axes.`,tryThis:[`Select Line2D, markers, and the confidence patch.`,`Compare grid zorder with data zorder.`,`Open the legend chip and trace where it is stored.`],check:`Which artists carry the data values: the grid or the Line2D?`},{id:`axes`,number:`03`,file:`03_axes_annotations.html`,icon:`ph-ruler`,title:`Axes & Annotations`,summary:`Spines, ticks, labels, legends, and callouts.`,objective:`Name the Axis machinery that turns data coordinates into readable ticks, labels, and annotations.`,tryThis:[`Inspect major versus minor ticks and their labels.`,`Trace a spine to the plot border.`,`Select the annotation and compare data space with text space.`],check:`Which object owns the tick locators and formatters?`},{id:`code-core`,number:`04`,file:`04_code_core_layers.html`,icon:`ph-code-block`,title:`Code X-Ray: Core & Layers`,summary:`Build a Figure and layer data artists line by line.`,objective:`Map each Python statement to the Figure, Axes, and data artists it creates or changes.`,tryThis:[`Step through the first snippet line by line.`,`Toggle progressive build to reveal artists in order.`,`Switch to the data-layers snippet and watch zorder change.`],check:`Which line first creates the Axes object?`},{id:`code-layout`,number:`05`,file:`05_code_axes_text.html`,icon:`ph-text-t`,title:`Code X-Ray: Axes & Text`,summary:`Ticks, grids, typography, and the direct Artist API.`,objective:`Read layout, tick, and text code as changes to specific Artist containers and primitives.`,tryThis:[`Step through tick locators and formatters.`,`Compare suptitle, title, and annotation placement.`,`Use the direct-artist snippet to mutate children in place.`],check:`Which call changes tick text without creating a new Axes?`},{id:`quiz`,number:`06`,file:`06_name_that_part.html`,icon:`ph-target`,title:`Name That Part`,summary:`Retrieve the anatomy vocabulary from the plot.`,objective:`Identify Matplotlib components from their visual position and hierarchy without labels.`,tryThis:[`Answer all seven questions.`,`Use the explanation after each answer.`,`Reset and retry until the names feel automatic.`],check:`Can you name each highlighted component before revealing the answer?`},{id:`cheatsheet`,number:`07`,file:`07_cheatsheet.html`,icon:`ph-book-open-text`,title:`Cheat Sheet`,summary:`The anatomy, zorder, coordinate spaces, and recipes in one place.`,objective:`Keep the core naming and layering rules within reach while writing Matplotlib code.`,tryThis:[`Use the hierarchy table when a plot looks wrong.`,`Check zorder before debugging invisible artists.`,`Copy a recipe and adapt it to your own data.`],check:`Which rule explains an artist that is hidden behind another?`}],t=typeof window<`u`&&window.MPL_LESSON?window.MPL_LESSON:{},n=Math.max(0,e.findIndex(e=>e.id===t.id)),r=e[n],i=e[n+1]??null,a=e=>String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`),o=(e,t=!1)=>new Promise((n,r)=>{let i=document.createElement(`script`);i.src=e,i.async=!0,i.onload=()=>n(),i.onerror=()=>t?n():r(Error(`Failed to load ${e}`)),document.head.appendChild(i)}),s=e=>new Promise(t=>{let n=document.createElement(`link`);n.rel=`stylesheet`,n.href=e,n.onload=()=>t(),n.onerror=()=>t(),document.head.appendChild(n)}),c=(e,t)=>Promise.race([e,new Promise(e=>setTimeout(e,t))]),l=async()=>{await Promise.all([c(s(`https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap`),8e3),c(o(`https://unpkg.com/@phosphor-icons/web`,!0),8e3)])},u=()=>{let t=i?`<a id="course-next-link" href="./${i.file}" title="Next: ${a(i.title)}" aria-label="Next lesson: ${a(i.title)}" class="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/15 text-sky-200 shadow-lg shadow-sky-950/30 backdrop-blur transition-colors hover:bg-sky-500/25"><i class="ph-bold ph-arrow-right"></i></a>`:`<span id="course-next-link" title="Last lesson" aria-label="Last lesson" aria-disabled="true" class="flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-lg border border-slate-700 bg-slate-900/85 text-slate-500 opacity-40 shadow-lg shadow-black/30 backdrop-blur"><i class="ph-bold ph-arrow-right"></i></span>`,n=r.tryThis.map(e=>`<li class="flex gap-1.5"><span class="text-sky-400">•</span><span>${a(e)}</span></li>`).join(``),o=document.getElementById(`course-root`);o.innerHTML=`
    <div class="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500/30 selection:text-sky-200">
      <div class="fixed right-3 top-3 z-40 flex items-center gap-1.5">
        <span class="hidden rounded-lg border border-slate-700 bg-slate-900/85 px-2 py-1 font-mono text-[10px] font-bold text-slate-400 shadow-lg shadow-black/30 backdrop-blur sm:inline-flex">
          ${r.number} / ${e.length}
        </span>
        <button
          id="course-menu-btn"
          title="All Matplotlib lessons"
          aria-label="All Matplotlib lessons"
          aria-expanded="false"
          class="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/85 text-slate-300 shadow-lg shadow-black/30 backdrop-blur transition-colors hover:bg-slate-800 hover:text-white"
        >
          <i class="ph-bold ph-list"></i>
        </button>
        ${t}
      </div>

      <div id="course-drawer" class="fixed inset-0 z-50 hidden">
        <div id="course-backdrop" class="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"></div>
        <aside class="absolute right-0 top-0 flex h-full w-[min(22rem,90vw)] flex-col border-l border-slate-800 bg-slate-900/95 shadow-2xl backdrop-blur">
          <div class="flex items-center justify-between border-b border-slate-800 p-3">
            <div>
              <div class="text-[10px] font-semibold uppercase tracking-wider text-sky-400">Matplotlib Field Guide</div>
              <div class="text-sm font-bold text-white">${e.length} lessons</div>
            </div>
            <button
              id="course-close-btn"
              title="Close lesson list"
              aria-label="Close lesson list"
              class="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
            >
              <i class="ph-bold ph-x"></i>
            </button>
          </div>

          <div class="border-b border-slate-800 p-3">
            <div class="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Now</div>
            <div class="mt-1 text-sm font-semibold text-white">${r.number} · ${a(r.title)}</div>
            <p class="mt-1 text-[11px] leading-relaxed text-slate-400">${a(r.objective)}</p>
            <ul class="mt-2 space-y-1 text-[11px] leading-relaxed text-slate-400">${n}</ul>
            <p class="mt-2 text-[11px] leading-relaxed text-amber-300/90">${a(r.check)}</p>
          </div>

          <nav id="course-lesson-list" class="flex-1 space-y-1 overflow-y-auto p-2"></nav>

          <div class="border-t border-slate-800 p-3 text-[10px] leading-relaxed text-slate-500">
            Use the arrow at top right to move to the next lesson. Press Esc to close.
          </div>
        </aside>
      </div>

      <div class="mx-auto max-w-[1680px] px-4 py-3 pb-10 sm:px-6 sm:py-4">
        <div class="mb-3 flex items-center gap-2 pl-10 pr-24 sm:pl-12">
          <span class="shrink-0 rounded-md border border-sky-500/30 bg-sky-500/10 px-1.5 py-0.5 font-mono text-[10px] font-bold text-sky-300">
            LESSON ${r.number}
          </span>
          <h1 class="truncate text-sm font-semibold text-white sm:text-base">${a(r.title)}</h1>
          <span class="hidden truncate text-[11px] text-slate-500 md:inline">${a(r.summary)}</span>
        </div>
        <div id="lesson-mount"></div>
      </div>
    </div>
  `;let s=document.getElementById(`course-lesson-list`);s.innerHTML=e.map(e=>{let t=e.id===r.id;return`
      <a
        href="./${e.file}"
        class="course-lesson-link flex w-full items-start gap-2.5 rounded-xl border px-2.5 py-2 text-left transition-colors ${t?`border-sky-400/60 bg-sky-500/15 text-white`:`border-transparent text-slate-300 hover:bg-slate-800/70 hover:text-white`}"
        ${t?`aria-current="page"`:``}
      >
        <span class="course-lesson-number mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg font-mono text-[10px] font-bold">${e.number}</span>
        <span class="min-w-0 flex-1">
          <span class="flex items-center gap-1.5">
            <i class="ph-bold ${e.icon} text-xs ${t?`text-sky-300`:`text-slate-500`}"></i>
            <span class="truncate text-xs font-semibold">${a(e.title)}</span>
          </span>
          <span class="mt-0.5 block truncate text-[10px] text-slate-500">${a(e.summary)}</span>
        </span>
      </a>
    `}).join(``)},d=()=>{let e=document.getElementById(`course-drawer`),t=document.getElementById(`course-menu-btn`),n=document.getElementById(`course-close-btn`),r=document.getElementById(`course-backdrop`),i=n=>{e.classList.toggle(`hidden`,!n),t.setAttribute(`aria-expanded`,String(n))};t.addEventListener(`click`,()=>i(e.classList.contains(`hidden`))),n.addEventListener(`click`,()=>i(!1)),r.addEventListener(`click`,()=>i(!1)),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&i(!1)})},f=async()=>{let e=document.getElementById(`lesson-mount`),t=document.getElementById(`lesson-content`);t?e.innerHTML=t.innerHTML:(e.innerHTML=`<main class="w-full flex flex-col gap-5">

        <!-- Top Contextual Sub-Toolbar -->
        <div class="bg-slate-900/90 border border-slate-800/90 rounded-2xl p-3 sm:px-5 flex flex-wrap items-center justify-between gap-3 shadow-lg">
            <!-- Left dynamic status / mode prompt -->
            <div id="toolbar-prompt" class="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span><strong class="text-white">Visual Explorer Mode:</strong> Click or hover any part of the plot, callout badge, or component chip below to inspect its Matplotlib name and Artist class.</span>
            </div>

            <!-- Right Controls: Callout Pins Toggle, Reset Highlight, Layer Filter -->
            <div class="flex flex-wrap items-center gap-2">
                <button id="toggle-pins-btn" onclick="toggleCalloutPins()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 hover:bg-indigo-500/30 transition">
                    <i class="ph-bold ph-map-pin"></i>
                    <span id="toggle-pins-label">Anatomy Callout Circles: ON</span>
                </button>

                <button id="toggle-coords-btn" onclick="toggleCoordOverlay()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition">
                    <i class="ph-bold ph-bounding-box"></i>
                    <span>Containers vs Primitives</span>
                </button>

                <button onclick="clearActiveSelection()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700 hover:text-white hover:bg-slate-700 transition" title="Reset Selection">
                    <i class="ph-bold ph-arrow-counter-clockwise"></i>
                    <span>Show Full Plot</span>
                </button>
            </div>
        </div>

        <!-- Primary Split Grid: Left (Interactive SVG Plot + Component Bar) | Right (Inspector / Quiz / Code Snippets) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

            <!-- LEFT COLUMN: Interactive SVG Matplotlib Canvas (7 cols on large screens) -->
            <div class="lg:col-span-7 flex flex-col gap-4">

                <!-- SVG Canvas Frame -->
                <div class="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                    <!-- Fake Window Bar -->
                    <div class="bg-slate-950/90 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <span class="w-3 h-3 rounded-full bg-rose-500/80"></span>
                            <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
                            <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                            <span class="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                                <i class="ph-fill ph-app-window text-sky-400"></i>
                                Figure 1 — <span id="window-backend-label" class="text-slate-500">FigureCanvasAgg (800 × 560 px)</span>
                            </span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span id="cursor-coords" class="font-mono text-[11px] text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800">
                                x = 2.00, y = 2.50
                            </span>
                            <span id="active-zorder-pill" class="hidden sm:inline-block font-mono text-[11px] px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
                                zorder: all
                            </span>
                        </div>
                    </div>

                    <!-- THE INTERACTIVE SVG MATPLOTLIB FIGURE -->
                    <div class="p-3 sm:p-5 bg-slate-900/60 flex items-center justify-center relative">
                        <svg id="mpl-svg" viewBox="0 0 820 580" class="w-full h-auto max-h-[600px] rounded-xl shadow-inner select-none bg-white" onmousemove="updateMouseDataCoords(event)">
                            <defs>
                                <!-- Subtle Hatch Pattern for Container Highlight -->
                                <pattern id="figurePattern" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                                    <line x1="0" y1="0" x2="0" y2="16" stroke="#e2e8f0" stroke-width="2" />
                                </pattern>
                                <!-- Arrowhead marker for Annotation -->
                                <marker id="annot-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0f172a" />
                                </marker>
                                <!-- Blue Callout Arrowhead -->
                                <marker id="callout-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                                    <path d="M 0 1 L 8 5 L 0 9 z" fill="#1d4ed8" />
                                </marker>
                                <!-- Clip path for Axes data region -->
                                <clipPath id="axes-clip">
                                    <rect x="110" y="90" width="640" height="390" />
                                </clipPath>
                            </defs>

                            <!-- ============================================================== -->
                            <!-- 1. FIGURE CONTAINER (matplotlib.figure.Figure & fig.patch)     -->
                            <!-- ============================================================== -->
                            <g id="part-figure" class="mpl-part mpl-container-bg" onclick="selectPart('figure', event)" onmouseenter="hoverPart('figure')" onmouseleave="unhoverPart()">
                                <rect x="4" y="4" width="812" height="572" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,4" />
                                <text x="18" y="24" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="#64748b">Figure (fig.patch)</text>
                            </g>

                            <!-- ============================================================== -->
                            <!-- 2. FIGURE SUPTITLE (fig.suptitle)                              -->
                            <!-- ============================================================== -->
                            <g id="part-suptitle" class="mpl-part" onclick="selectPart('suptitle', event)" onmouseenter="hoverPart('suptitle')" onmouseleave="unhoverPart()">
                                <rect x="235" y="12" width="350" height="28" rx="4" fill="transparent" />
                                <text x="410" y="31" text-anchor="middle" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="#334155">
                                    Anatomy of a Matplotlib Figure
                                </text>
                            </g>

                            <!-- ============================================================== -->
                            <!-- 3. AXES CONTAINER & BACKGROUND PATCH (matplotlib.axes.Axes)    -->
                            <!-- ============================================================== -->
                            <g id="part-axes" class="mpl-part mpl-container-bg" onclick="selectPart('axes', event)" onmouseenter="hoverPart('axes')" onmouseleave="unhoverPart()">
                                <rect x="110" y="90" width="640" height="390" fill="#ffffff" />
                                <!-- Subtle badge inside Axes corner when inspecting containers -->
                                <text id="axes-watermark" x="122" y="468" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="#cbd5e1">Axes (ax.patch data area)</text>
                            </g>

                            <!-- ============================================================== -->
                            <!-- 4. GRID LINES (ax.grid / Grid Lines - zorder 0.5)              -->
                            <!-- ============================================================== -->
                            <!-- Data X: 0 to 4 mapped to X: 110 to 750 (160px per 1.0 unit)    -->
                            <!-- Data Y: 0 to 4 mapped to Y: 480 to 90  (97.5px per 1.0 unit)   -->
                            <g id="part-grid" class="mpl-part" onclick="selectPart('grid', event)" onmouseenter="hoverPart('grid')" onmouseleave="unhoverPart()">
                                <!-- Vertical Major Grid Lines (x = 1, 2, 3) -->
                                <line x1="270" y1="90" x2="270" y2="480" stroke="#cbd5e1" stroke-width="1.3" stroke-dasharray="6,5" />
                                <line x1="430" y1="90" x2="430" y2="480" stroke="#cbd5e1" stroke-width="1.3" stroke-dasharray="6,5" />
                                <line x1="590" y1="90" x2="590" y2="480" stroke="#cbd5e1" stroke-width="1.3" stroke-dasharray="6,5" />
                                <!-- Horizontal Major Grid Lines (y = 1, 2, 3) -->
                                <line x1="110" y1="382.5" x2="750" y2="382.5" stroke="#cbd5e1" stroke-width="1.3" stroke-dasharray="6,5" />
                                <line x1="110" y1="285" x2="750" y2="285" stroke="#cbd5e1" stroke-width="1.3" stroke-dasharray="6,5" />
                                <line x1="110" y1="187.5" x2="750" y2="187.5" stroke="#cbd5e1" stroke-width="1.3" stroke-dasharray="6,5" />
                                <!-- Invisible wider hit areas for easy clicking on grid -->
                                <line x1="590" y1="90" x2="590" y2="480" stroke="transparent" stroke-width="14" />
                                <line x1="110" y1="187.5" x2="750" y2="187.5" stroke="transparent" stroke-width="14" />
                            </g>

                            <!-- ============================================================== -->
                            <!-- 5. PATCH / SHADED CONFIDENCE REGION (ax.fill_between / Polygon)-->
                            <!-- ============================================================== -->
                            <g id="part-patch" class="mpl-part" clip-path="url(#axes-clip)" onclick="selectPart('patch', event)" onmouseenter="hoverPart('patch')" onmouseleave="unhoverPart()">
                                <path d="M 190 400 C 270 448, 350 452, 430 425 C 510 398, 590 340, 670 302 L 670 356 C 590 392, 510 445, 430 462 C 350 476, 270 465, 190 435 Z"
                                      fill="#fecdd3" fill-opacity="0.55" stroke="#fda4af" stroke-width="1" stroke-dasharray="3,3" />
                            </g>

                            <!-- ============================================================== -->
                            <!-- 6. LINE PLOT 1 & 2 (matplotlib.lines.Line2D - zorder 2.0)      -->
                            <!-- ============================================================== -->
                            <g id="part-line" class="mpl-part" clip-path="url(#axes-clip)" onclick="selectPart('line', event)" onmouseenter="hoverPart('line')" onmouseleave="unhoverPart()">
                                <!-- Blue Signal (Primary Line2D) -->
                                <path d="M 190 112 C 285 150, 360 250, 445 310 C 530 370, 600 395, 670 375"
                                      fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" />
                                <!-- Invisible wide hit path -->
                                <path d="M 190 112 C 285 150, 360 250, 445 310 C 530 370, 600 395, 670 375"
                                      fill="none" stroke="transparent" stroke-width="16" />

                                <!-- Red Signal (Secondary Line2D) -->
                                <path d="M 190 418 C 270 458, 350 464, 430 443 C 510 422, 590 366, 670 329"
                                      fill="none" stroke="#e11d48" stroke-width="3" stroke-linecap="round" />
                                <path d="M 190 418 C 270 458, 350 464, 430 443 C 510 422, 590 366, 670 329"
                                      fill="none" stroke="transparent" stroke-width="16" />
                            </g>

                            <!-- ============================================================== -->
                            <!-- 7. SCATTER MARKERS (PathCollection / ax.scatter - zorder 2.5)  -->
                            <!-- ============================================================== -->
                            <g id="part-markers" class="mpl-part" clip-path="url(#axes-clip)" onclick="selectPart('markers', event)" onmouseenter="hoverPart('markers')" onmouseleave="unhoverPart()">
                                <!-- Curated scatter points matching classic Matplotlib anatomy plot -->
                                <g fill="#ffffff" stroke="#0f172a" stroke-width="1.8">
                                    <circle cx="215" cy="218" r="5" />
                                    <circle cx="235" cy="250" r="5" />
                                    <circle cx="252" cy="312" r="5" />
                                    <circle cx="268" cy="278" r="5" />
                                    <circle cx="290" cy="348" r="5" />
                                    <circle cx="315" cy="242" r="5" />
                                    <circle cx="335" cy="210" r="5" />
                                    <circle cx="352" cy="322" r="5" />
                                    <circle cx="378" cy="260" r="5" />
                                    <circle cx="395" cy="368" r="5" />
                                    <circle cx="412" cy="292" r="5" />
                                    <circle cx="442" cy="345" r="5" />
                                    <circle cx="468" cy="272" r="5" />
                                    <circle cx="495" cy="330" r="5" />
                                    <circle cx="518" cy="290" r="5" />
                                    <circle cx="545" cy="358" r="5" />
                                    <circle cx="572" cy="310" r="5" />
                                    <circle cx="602" cy="328" r="5" />
                                    <circle cx="618" cy="312" r="5" />
                                    <circle cx="635" cy="318" r="5" />
                                    <circle cx="652" cy="296" r="5" />
                                </g>
                            </g>

                            <!-- ============================================================== -->
                            <!-- 8. SPINES (ax.spines['top'|'bottom'|'left'|'right'])           -->
                            <!-- ============================================================== -->
                            <g id="part-spines" class="mpl-part" onclick="selectPart('spines', event)" onmouseenter="hoverPart('spines')" onmouseleave="unhoverPart()">
                                <!-- Top, Right, Bottom, Left Spines -->
                                <line x1="110" y1="90" x2="750" y2="90" stroke="#0f172a" stroke-width="2" />
                                <line x1="750" y1="90" x2="750" y2="480" stroke="#0f172a" stroke-width="2" />
                                <line x1="110" y1="480" x2="750" y2="480" stroke="#0f172a" stroke-width="2" />
                                <line x1="110" y1="90" x2="110" y2="480" stroke="#0f172a" stroke-width="2" />
                                <!-- Wider invisible click targets along borders -->
                                <line x1="110" y1="90" x2="750" y2="90" stroke="transparent" stroke-width="10" />
                                <line x1="750" y1="90" x2="750" y2="480" stroke="transparent" stroke-width="10" />
                                <line x1="110" y1="480" x2="750" y2="480" stroke="transparent" stroke-width="10" />
                                <line x1="110" y1="90" x2="110" y2="480" stroke="transparent" stroke-width="10" />
                            </g>

                            <!-- ============================================================== -->
                            <!-- 9. MAJOR TICKS (ax.xaxis / yaxis Major Ticks)                  -->
                            <!-- ============================================================== -->
                            <g id="part-major-ticks" class="mpl-part" onclick="selectPart('major-ticks', event)" onmouseenter="hoverPart('major-ticks')" onmouseleave="unhoverPart()">
                                <!-- Y-Axis Major Ticks (0, 1, 2, 3, 4) -->
                                <g stroke="#0f172a" stroke-width="2.2">
                                    <line x1="98" y1="480" x2="110" y2="480" />
                                    <line x1="98" y1="382.5" x2="110" y2="382.5" />
                                    <line x1="98" y1="285" x2="110" y2="285" />
                                    <line x1="98" y1="187.5" x2="110" y2="187.5" />
                                    <line x1="98" y1="90" x2="110" y2="90" />
                                    <!-- X-Axis Major Ticks (0, 1, 2, 3, 4) -->
                                    <line x1="110" y1="480" x2="110" y2="492" />
                                    <line x1="270" y1="480" x2="270" y2="492" />
                                    <line x1="430" y1="480" x2="430" y2="492" />
                                    <line x1="590" y1="480" x2="590" y2="492" />
                                    <line x1="750" y1="480" x2="750" y2="492" />
                                </g>
                            </g>

                            <!-- ============================================================== -->
                            <!-- 10. MINOR TICKS (ax.xaxis / yaxis Minor Ticks)                 -->
                            <!-- ============================================================== -->
                            <g id="part-minor-ticks" class="mpl-part" onclick="selectPart('minor-ticks', event)" onmouseenter="hoverPart('minor-ticks')" onmouseleave="unhoverPart()">
                                <g stroke="#334155" stroke-width="1.4">
                                    <!-- Y-Axis Minor Ticks (every 0.25 -> 24.375px) -->
                                    <line x1="103" y1="455.6" x2="110" y2="455.6" />
                                    <line x1="103" y1="431.2" x2="110" y2="431.2" />
                                    <line x1="103" y1="406.9" x2="110" y2="406.9" />
                                    <line x1="103" y1="358.1" x2="110" y2="358.1" />
                                    <line x1="103" y1="333.8" x2="110" y2="333.8" />
                                    <line x1="103" y1="309.4" x2="110" y2="309.4" />
                                    <line x1="103" y1="260.6" x2="110" y2="260.6" />
                                    <line x1="103" y1="236.2" x2="110" y2="236.2" />
                                    <line x1="103" y1="211.9" x2="110" y2="211.9" />
                                    <line x1="103" y1="163.1" x2="110" y2="163.1" />
                                    <line x1="103" y1="138.8" x2="110" y2="138.8" />
                                    <line x1="103" y1="114.4" x2="110" y2="114.4" />

                                    <!-- X-Axis Minor Ticks (every 0.25 -> 40px) -->
                                    <line x1="150" y1="480" x2="150" y2="486" />
                                    <line x1="190" y1="480" x2="190" y2="486" />
                                    <line x1="230" y1="480" x2="230" y2="486" />
                                    <line x1="310" y1="480" x2="310" y2="486" />
                                    <line x1="350" y1="480" x2="350" y2="486" />
                                    <line x1="390" y1="480" x2="390" y2="486" />
                                    <line x1="470" y1="480" x2="470" y2="486" />
                                    <line x1="510" y1="480" x2="510" y2="486" />
                                    <line x1="550" y1="480" x2="550" y2="486" />
                                    <line x1="630" y1="480" x2="630" y2="486" />
                                    <line x1="670" y1="480" x2="670" y2="486" />
                                    <line x1="710" y1="480" x2="710" y2="486" />
                                </g>
                            </g>

                            <!-- ============================================================== -->
                            <!-- 11. MAJOR TICK LABELS (Text artists on X/Y major ticks)        -->
                            <!-- ============================================================== -->
                            <g id="part-major-ticklabels" class="mpl-part" onclick="selectPart('major-ticklabels', event)" onmouseenter="hoverPart('major-ticklabels')" onmouseleave="unhoverPart()">
                                <g font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#0f172a">
                                    <!-- Y Major Tick Labels -->
                                    <text x="90" y="485" text-anchor="end">0</text>
                                    <text x="90" y="387" text-anchor="end">1</text>
                                    <text x="90" y="290" text-anchor="end">2</text>
                                    <text x="90" y="192" text-anchor="end">3</text>
                                    <text x="90" y="95" text-anchor="end">4</text>
                                    <!-- X Major Tick Labels -->
                                    <text x="110" y="512" text-anchor="middle">0</text>
                                    <text x="270" y="512" text-anchor="middle">1</text>
                                    <text x="430" y="512" text-anchor="middle">2</text>
                                    <text x="590" y="512" text-anchor="middle">3</text>
                                    <text x="750" y="512" text-anchor="middle">4</text>
                                </g>
                            </g>

                            <!-- ============================================================== -->
                            <!-- 12. MINOR TICK LABELS (Text artists on X minor ticks)          -->
                            <!-- ============================================================== -->
                            <g id="part-minor-ticklabels" class="mpl-part" onclick="selectPart('minor-ticklabels', event)" onmouseenter="hoverPart('minor-ticklabels')" onmouseleave="unhoverPart()">
                                <g font-family="Inter, sans-serif" font-size="10.5" fill="#64748b">
                                    <text x="150" y="502" text-anchor="middle">0.25</text>
                                    <text x="190" y="502" text-anchor="middle">0.50</text>
                                    <text x="230" y="502" text-anchor="middle">0.75</text>
                                    <text x="310" y="502" text-anchor="middle">1.25</text>
                                    <text x="350" y="502" text-anchor="middle">1.50</text>
                                    <text x="390" y="502" text-anchor="middle">1.75</text>
                                    <text x="470" y="502" text-anchor="middle">2.25</text>
                                    <text x="510" y="502" text-anchor="middle">2.50</text>
                                    <text x="550" y="502" text-anchor="middle">2.75</text>
                                    <text x="630" y="502" text-anchor="middle">3.25</text>
                                    <text x="670" y="502" text-anchor="middle">3.50</text>
                                    <text x="710" y="502" text-anchor="middle">3.75</text>
                                </g>
                            </g>

                            <!-- ============================================================== -->
                            <!-- 13. AXES TITLE (ax.set_title)                                  -->
                            <!-- ============================================================== -->
                            <g id="part-title" class="mpl-part" onclick="selectPart('title', event)" onmouseenter="hoverPart('title')" onmouseleave="unhoverPart()">
                                <rect x="290" y="52" width="280" height="32" rx="4" fill="transparent" />
                                <text x="430" y="75" text-anchor="middle" font-family="Inter, sans-serif" font-size="20" font-weight="700" fill="#0f172a">
                                    Signal Response Over Time
                                </text>
                            </g>

                            <!-- ============================================================== -->
                            <!-- 14. X-AXIS LABEL (ax.set_xlabel)                               -->
                            <!-- ============================================================== -->
                            <g id="part-xlabel" class="mpl-part" onclick="selectPart('xlabel', event)" onmouseenter="hoverPart('xlabel')" onmouseleave="unhoverPart()">
                                <rect x="350" y="526" width="160" height="28" rx="4" fill="transparent" />
                                <text x="430" y="545" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="#0f172a">
                                    X axis label (Time s)
                                </text>
                            </g>

                            <!-- ============================================================== -->
                            <!-- 15. Y-AXIS LABEL (ax.set_ylabel)                               -->
                            <!-- ============================================================== -->
                            <g id="part-ylabel" class="mpl-part" onclick="selectPart('ylabel', event)" onmouseenter="hoverPart('ylabel')" onmouseleave="unhoverPart()">
                                <rect x="34" y="210" width="32" height="150" rx="4" fill="transparent" />
                                <text x="54" y="285" text-anchor="middle" transform="rotate(-90, 54, 285)" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="#0f172a">
                                    Y axis label (Voltage mV)
                                </text>
                            </g>

                            <!-- ============================================================== -->
                            <!-- 16. LEGEND (matplotlib.legend.Legend - zorder 5.0)             -->
                            <!-- ============================================================== -->
                            <g id="part-legend" class="mpl-part" onclick="selectPart('legend', event)" onmouseenter="hoverPart('legend')" onmouseleave="unhoverPart()">
                                <rect x="595" y="104" width="140" height="62" rx="5" fill="#ffffff" fill-opacity="0.92" stroke="#cbd5e1" stroke-width="1.5" />
                                <!-- Legend Row 1: Blue signal -->
                                <line x1="607" y1="124" x2="637" y2="124" stroke="#2563eb" stroke-width="3.2" stroke-linecap="round" />
                                <text x="646" y="128" font-family="Inter, sans-serif" font-size="12.5" font-weight="500" fill="#0f172a">Blue signal</text>
                                <!-- Legend Row 2: Red signal -->
                                <line x1="607" y1="148" x2="637" y2="148" stroke="#e11d48" stroke-width="3" stroke-linecap="round" />
                                <text x="646" y="152" font-family="Inter, sans-serif" font-size="12.5" font-weight="500" fill="#0f172a">Red signal</text>
                            </g>

                            <!-- ============================================================== -->
                            <!-- 17. ANNOTATION (matplotlib.text.Annotation / ax.annotate)      -->
                            <!-- ============================================================== -->
                            <g id="part-annotation" class="mpl-part" onclick="selectPart('annotation', event)" onmouseenter="hoverPart('annotation')" onmouseleave="unhoverPart()">
                                <rect x="445" y="212" width="118" height="28" rx="5" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5" />
                                <text x="504" y="230" text-anchor="middle" font-family="Inter, sans-serif" font-size="11.5" font-weight="600" fill="#92400e">
                                    Local Minimum
                                </text>
                                <path d="M 482 240 L 448 302" stroke="#0f172a" stroke-width="1.8" fill="none" marker-end="url(#annot-arrow)" />
                            </g>

                            <!-- ============================================================== -->
                            <!-- LAYER OVERLAY: ANATOMY CALLOUT CIRCLES (Like official docs)    -->
                            <!-- ============================================================== -->
                            <g id="anatomy-callouts-layer">
                                <!-- Major Tick Callout -->
                                <g class="anatomy-pin" data-part="major-ticks" onclick="selectPart('major-ticks', event)">
                                    <circle cx="104" cy="90" r="18" fill="#eff6ff" fill-opacity="0.7" stroke="#1d4ed8" stroke-width="2" />
                                    <text x="104" y="123" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" class="pin-label">Major tick</text>
                                </g>

                                <!-- Minor Tick Callout -->
                                <g class="anatomy-pin" data-part="minor-ticks" onclick="selectPart('minor-ticks', event)">
                                    <circle cx="106" cy="138.8" r="16" fill="#eff6ff" fill-opacity="0.7" stroke="#1d4ed8" stroke-width="2" />
                                    <text x="106" y="168" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" class="pin-label">Minor tick</text>
                                </g>

                                <!-- Major Tick Label Callout -->
                                <g class="anatomy-pin" data-part="major-ticklabels" onclick="selectPart('major-ticklabels', event)">
                                    <circle cx="86" cy="188" r="16" fill="#eff6ff" fill-opacity="0.7" stroke="#1d4ed8" stroke-width="2" />
                                    <text x="64" y="218" text-anchor="middle" font-family="Inter, sans-serif" font-size="10.5" font-weight="700" fill="#1d4ed8" class="pin-label">Major tick label</text>
                                </g>

                                <!-- Y-Axis Label Callout -->
                                <g class="anatomy-pin" data-part="ylabel" onclick="selectPart('ylabel', event)">
                                    <circle cx="54" cy="285" r="18" fill="#eff6ff" fill-opacity="0.7" stroke="#1d4ed8" stroke-width="2" />
                                    <text x="54" y="317" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" class="pin-label">Y axis label</text>
                                </g>

                                <!-- Figure Callout -->
                                <g class="anatomy-pin" data-part="figure" onclick="selectPart('figure', event)">
                                    <circle cx="52" cy="425" r="20" fill="#eff6ff" fill-opacity="0.7" stroke="#1d4ed8" stroke-width="2" />
                                    <text x="52" y="458" text-anchor="middle" font-family="Inter, sans-serif" font-size="11.5" font-weight="700" fill="#1d4ed8" class="pin-label">Figure</text>
                                </g>

                                <!-- Axes Callout -->
                                <g class="anatomy-pin" data-part="axes" onclick="selectPart('axes', event)">
                                    <circle cx="165" cy="415" r="20" fill="#eff6ff" fill-opacity="0.7" stroke="#1d4ed8" stroke-width="2" />
                                    <text x="165" y="448" text-anchor="middle" font-family="Inter, sans-serif" font-size="11.5" font-weight="700" fill="#1d4ed8" class="pin-label">Axes</text>
                                </g>

                                <!-- Minor Tick Label Callout -->
                                <g class="anatomy-pin" data-part="minor-ticklabels" onclick="selectPart('minor-ticklabels', event)">
                                    <circle cx="190" cy="498" r="17" fill="#eff6ff" fill-opacity="0.7" stroke="#1d4ed8" stroke-width="2" />
                                    <text x="190" y="528" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" class="pin-label">Minor tick label</text>
                                </g>

                                <!-- X-Axis Label Callout -->
                                <g class="anatomy-pin" data-part="xlabel" onclick="selectPart('xlabel', event)">
                                    <circle cx="430" cy="541" r="18" fill="#eff6ff" fill-opacity="0.7" stroke="#1d4ed8" stroke-width="2" />
                                    <text x="430" y="571" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" class="pin-label">X axis label</text>
                                </g>

                                <!-- Title Callout -->
                                <g class="anatomy-pin" data-part="title" onclick="selectPart('title', event)">
                                    <circle cx="430" cy="69" r="20" fill="#eff6ff" fill-opacity="0.7" stroke="#1d4ed8" stroke-width="2" />
                                    <text x="430" y="103" text-anchor="middle" font-family="Inter, sans-serif" font-size="11.5" font-weight="700" fill="#1d4ed8" class="pin-label">Title</text>
                                </g>

                                <!-- Grid Callout -->
                                <g class="anatomy-pin" data-part="grid" onclick="selectPart('grid', event)">
                                    <circle cx="590" cy="187.5" r="20" fill="#eff6ff" fill-opacity="0.7" stroke="#1d4ed8" stroke-width="2" />
                                    <text x="590" y="220" text-anchor="middle" font-family="Inter, sans-serif" font-size="11.5" font-weight="700" fill="#1d4ed8" class="pin-label">Grid</text>
                                </g>

                                <!-- Line Plot Callout -->
                                <g class="anatomy-pin" data-part="line" onclick="selectPart('line', event)">
                                    <circle cx="358" cy="236" r="20" fill="#eff6ff" fill-opacity="0.7" stroke="#1d4ed8" stroke-width="2" />
                                    <text x="358" y="269" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" class="pin-label">Line (line plot)</text>
                                </g>

                                <!-- Markers Callout -->
                                <g class="anatomy-pin" data-part="markers" onclick="selectPart('markers', event)">
                                    <circle cx="618" cy="312" r="20" fill="#eff6ff" fill-opacity="0.7" stroke="#1d4ed8" stroke-width="2" />
                                    <text x="618" y="346" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8" class="pin-label">Markers (scatter)</text>
                                </g>

                                <!-- Legend Callout -->
                                <g class="anatomy-pin" data-part="legend" onclick="selectPart('legend', event)">
                                    <circle cx="665" cy="135" r="20" fill="#eff6ff" fill-opacity="0.7" stroke="#1d4ed8" stroke-width="2" />
                                    <text x="665" y="180" text-anchor="middle" font-family="Inter, sans-serif" font-size="11.5" font-weight="700" fill="#1d4ed8" class="pin-label">Legend</text>
                                </g>

                                <!-- Spines Callout with Arrows -->
                                <g class="anatomy-pin" data-part="spines" onclick="selectPart('spines', event)">
                                    <text x="692" y="425" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#1d4ed8" class="pin-label">Spines</text>
                                    <line x1="682" y1="432" x2="652" y2="475" stroke="#1d4ed8" stroke-width="1.8" marker-end="url(#callout-arrow)" />
                                    <line x1="712" y1="428" x2="745" y2="448" stroke="#1d4ed8" stroke-width="1.8" marker-end="url(#callout-arrow)" />
                                </g>
                            </g>

                            <!-- Dynamic Active Selection Bounding Box Highlight -->
                            <rect id="dynamic-highlight-rect" x="0" y="0" width="0" height="0" rx="6"
                                  fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="8,4"
                                  class="highlight-overlay-box hidden" />
                        </svg>
                    </div>

                    <!-- Quick Component Pills Footer inside Left Card -->
                    <div class="bg-slate-950/80 border-t border-slate-800 px-4 py-3">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                                <i class="ph-bold ph-tree-structure text-sky-400"></i>
                                Click any Matplotlib Artist Component to Highlight on Plot:
                            </span>
                            <span class="text-[11px] text-slate-500">Blue = Container · Emerald = Primitive</span>
                        </div>
                        <div id="component-pills-bar" class="flex flex-wrap gap-1.5">
                            <!-- Populated dynamically by JS -->
                        </div>
                    </div>
                </div>
            </div>

            <!-- RIGHT COLUMN: Contextual Panel (5 cols on large screens) -->
            <div class="lg:col-span-5 flex flex-col gap-4">

                <!-- ========================================================== -->
                <!-- PANEL 1: VISUAL ANATOMY INSPECTOR (MODE: 'explore')        -->
                <!-- ========================================================== -->
                <div id="panel-explore" class="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl flex flex-col gap-4">
                    <!-- Component Header Badge & Title -->
                    <div class="flex items-start justify-between gap-3 border-b border-slate-800 pb-4">
                        <div>
                            <div class="flex flex-wrap items-center gap-2 mb-1.5">
                                <span id="inspect-category-badge" class="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide bg-sky-500/20 text-sky-300 border border-sky-500/30">
                                    Container Artist
                                </span>
                                <span id="inspect-zorder-badge" class="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                                    zorder: 0.0
                                </span>
                            </div>
                            <h2 id="inspect-title" class="text-xl sm:text-2xl font-bold text-white">Axes (The Plotting Region)</h2>
                            <p id="inspect-Beginner-subtitle" class="text-xs sm:text-sm text-sky-400 font-medium mt-0.5">
                                "What you visually think of as an individual plot or subplot"
                            </p>
                        </div>
                        <div class="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-sky-400">
                            <i id="inspect-icon" class="ph-bold ph-frame-corners text-2xl"></i>
                        </div>
                    </div>

                    <!-- Beginner Visual Perspective vs Matplotlib Term -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div class="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
                            <div class="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1 flex items-center gap-1">
                                <i class="ph-fill ph-eye text-amber-400"></i> Visual Appearance
                            </div>
                            <p id="inspect-visual-desc" class="text-xs text-slate-200 leading-relaxed">
                                The white rectangular data area bounded by four border lines where your lines, bars, and points are drawn.
                            </p>
                        </div>
                        <div class="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
                            <div class="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1 flex items-center gap-1">
                                <i class="ph-fill ph-brackets-curly text-sky-400"></i> Artist Class & Access
                            </div>
                            <code id="inspect-artist-class" class="text-xs font-mono text-emerald-400 block break-all">
                                matplotlib.axes.Axes
                            </code>
                            <span id="inspect-container-path" class="text-[11px] font-mono text-slate-400 mt-1 block">
                                Stored in: fig.axes[0]
                            </span>
                        </div>
                    </div>

                    <!-- Detailed Explanation -->
                    <div class="bg-slate-950/50 border border-slate-800/80 rounded-xl p-3.5">
                        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                            <i class="ph-bold ph-book-open-text text-sky-400"></i>
                            How It Works & Common Confusion
                        </h3>
                        <p id="inspect-deep-desc" class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            Don't confuse <strong>Axes</strong> with <strong>Axis</strong>! An <code>Axes</code> is the entire 2D plotting box (coordinate frame), whereas an <code>Axis</code> (<code>ax.xaxis</code> or <code>ax.yaxis</code>) is just a single number line that manages ticks and tick labels.
                        </p>
                    </div>

                    <!-- Code Comparison: Object-Oriented vs Pyplot -->
                    <div class="flex flex-col gap-2">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                                <i class="ph-bold ph-terminal-window text-emerald-400"></i>
                                How to Create or Customize It in Code
                            </span>
                            <button onclick="copyInspectCode()" id="copy-inspect-btn" class="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1 bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700 transition">
                                <i class="ph-bold ph-copy"></i> Copy
                            </button>
                        </div>
                        <pre class="bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed"><code id="inspect-code-snippet"></code></pre>
                    </div>

                    <!-- Interactive Artist Tree Breadcrumb -->
                    <div class="bg-slate-950/70 border border-slate-800 rounded-xl p-3">
                        <div class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                            <span>Artist Tree Hierarchy Path</span>
                            <span class="text-[10px] text-sky-400 font-mono">stale = True cascades upward ↑</span>
                        </div>
                        <div id="inspect-hierarchy-chain" class="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                            <!-- Populated by JS -->
                        </div>
                    </div>
                </div>

                <!-- ========================================================== -->
                <!-- PANEL 2: BEGINNER NAMING QUIZ (MODE: 'quiz')               -->
                <!-- ========================================================== -->
                <div id="panel-quiz" class="hidden bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl flex flex-col gap-4">
                    <div class="flex items-center justify-between border-b border-slate-800 pb-3.5">
                        <div>
                            <span class="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">Interactive Beginner Practice</span>
                            <h2 class="text-xl font-bold text-white">Assign the Matplotlib Name</h2>
                        </div>
                        <div class="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                            <i class="ph-fill ph-trophy text-amber-400 text-lg"></i>
                            <span class="text-xs font-semibold text-slate-400">Score:</span>
                            <span id="quiz-score-display" class="font-mono text-sm font-bold text-emerald-400">0 / 0</span>
                        </div>
                    </div>

                    <!-- Target Visual Prompt Box -->
                    <div class="bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 border border-amber-500/30 rounded-xl p-4">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                                <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
                                Look at the Highlighted Region on the Plot
                            </span>
                            <span id="quiz-question-counter" class="text-xs font-mono text-slate-400">Challenge #1</span>
                        </div>
                        <p id="quiz-clue-text" class="text-sm text-slate-200 font-medium leading-relaxed">
                            Look at the glowing region on the plot: What is the official Matplotlib term for this component?
                        </p>
                        <p id="quiz-visual-hint" class="text-xs text-slate-400 mt-1.5 italic">
                            Hint: Visual description appears here.
                        </p>
                    </div>

                    <!-- 4 Multiple Choice Options -->
                    <div id="quiz-options-grid" class="grid grid-cols-1 gap-2.5">
                        <!-- Populated by JS -->
                    </div>

                    <!-- Quiz Feedback Box -->
                    <div id="quiz-feedback-box" class="hidden rounded-xl p-3.5 border text-xs sm:text-sm leading-relaxed"></div>

                    <!-- Quiz Action Buttons -->
                    <div class="flex items-center justify-between pt-2 border-t border-slate-800">
                        <button onclick="resetQuiz()" class="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-slate-800 transition">
                            <i class="ph-bold ph-arrows-clockwise"></i> Reset Score
                        </button>
                        <button onclick="nextQuizQuestion()" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-sky-600 hover:bg-sky-500 text-white shadow flex items-center gap-1.5 transition">
                            <span>Next Component</span>
                            <i class="ph-bold ph-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <!-- ========================================================== -->
                <!-- PANEL 3: CODE-TO-PLOT X-RAY (MODE: 'code')                 -->
                <!-- ========================================================== -->
                <div id="panel-code" class="hidden bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl flex flex-col gap-4">
                    <!-- Snippet Selector Tabs -->
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                                <i class="ph-bold ph-sliders-horizontal"></i>
                                Select Progressive Code Snippet (1 to 5):
                            </span>
                            <label class="flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer select-none">
                                <input type="checkbox" id="progressive-build-toggle" checked onchange="toggleProgressiveBuild()" class="rounded bg-slate-800 border-slate-700 text-sky-500 focus:ring-0">
                                <span>Build Plot Step-by-Step</span>
                            </label>
                        </div>
                        <div id="snippet-selector-tabs" class="grid grid-cols-5 gap-1.5">
                            <!-- Populated by JS -->
                        </div>
                    </div>

                    <!-- Current Snippet Header & Step Controls -->
                    <div class="flex flex-wrap items-center justify-between gap-2 bg-slate-950/80 px-3.5 py-2.5 rounded-xl border border-slate-800">
                        <div>
                            <h3 id="snippet-title" class="text-sm font-bold text-white">1. Foundations: Figure, Axes & Plotting</h3>
                            <p id="snippet-subtitle" class="text-[11px] text-slate-400">Click any line of code below or step through line-by-line</p>
                        </div>
                        <div class="flex items-center gap-1.5">
                            <button onclick="stepCodeLine(-1)" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition" title="Previous Line">
                                <i class="ph-bold ph-caret-left"></i>
                            </button>
                            <span id="code-step-indicator" class="font-mono text-xs px-2.5 py-1 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">
                                Line 1 / 7
                            </span>
                            <button onclick="stepCodeLine(1)" class="p-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white shadow transition" title="Next Line">
                                <i class="ph-bold ph-caret-right"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Interactive Line-by-Line Code Editor Box -->
                    <div class="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-inner">
                        <div class="bg-slate-900/80 px-3.5 py-1.5 border-b border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                            <span>plot_script.py — Click or hover any line</span>
                            <button onclick="copyCurrentSnippet()" id="copy-snippet-btn" class="hover:text-white flex items-center gap-1">
                                <i class="ph-bold ph-copy"></i> Copy All
                            </button>
                        </div>
                        <div id="interactive-code-lines" class="py-2 font-mono text-xs leading-relaxed overflow-x-auto">
                            <!-- Populated by JS -->
                        </div>
                    </div>

                    <!-- Active Code Line Explanation Card -->
                    <div class="bg-gradient-to-br from-sky-500/10 via-slate-950 to-slate-950 border border-sky-500/30 rounded-xl p-4 flex flex-col gap-2.5">
                        <div class="flex items-center justify-between gap-2">
                            <span class="text-[11px] font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                                <i class="ph-fill ph-lightning text-amber-400"></i>
                                What This Line Changes on the Plot
                            </span>
                            <span id="code-line-target-pill" class="px-2 py-0.5 rounded text-[11px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                Target: Axes
                            </span>
                        </div>

                        <code id="active-line-code-preview" class="text-xs font-mono text-white bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 block">
                            fig, ax = plt.subplots(figsize=(8, 5))
                        </code>

                        <p id="active-line-beginner-desc" class="text-xs sm:text-sm text-slate-200 leading-relaxed">
                            Creates the outer Figure window and the inner Axes plotting region in one call.
                        </p>

                        <div class="bg-slate-900/90 border border-slate-800 rounded-lg p-2.5 mt-1">
                            <div class="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-0.5 flex items-center gap-1">
                                <i class="ph-bold ph-gear"></i> Under the Hood (Artist & Engine)
                            </div>
                            <p id="active-line-internal-desc" class="text-xs text-slate-400 leading-relaxed">
                                Instantiates a <code>Figure</code> container and registers an <code>Axes</code> inside <code>fig.axes</code>.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
`,await o(`/Visual_Interactive_Learning_Python/assets/app-BbFOPtD0.js`),typeof window.initMatplotlibApp==`function`?window.initMatplotlibApp():e.innerHTML=`<div class="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-6 text-sm text-rose-200">Matplotlib app failed to initialize.</div>`)};document.title=`${r.number} · ${r.title} | Matplotlib Field Guide`,(async()=>{await l(),u(),d(),await f()})().catch(e=>{console.error(e);let t=document.getElementById(`course-root`);t&&(t.innerHTML=`<div class="p-6"><div class="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-6 text-sm text-rose-200">${a(e.message)}</div></div>`)});