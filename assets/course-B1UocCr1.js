var e=[{id:`theme-binding`,number:`01`,file:`01_theme_binding.html`,icon:`ph-palette`,title:`Theme & Data Binding`,summary:`Global style, tidy DataFrames, and automatic labels.`,objective:`See how set_theme() changes the canvas and how data= column names replace manual Series slicing.`,tryThis:[`Select the theme, DataFrame binding, and axis labels.`,`Compare the figure-level and axes-level syntax cards.`,`Notice which parts disappear when you focus on one component.`],check:`Which argument lets Seaborn read column names directly from a DataFrame?`},{id:`facets-semantics`,number:`02`,file:`02_facets_semantics.html`,icon:`ph-grid-four`,title:`Facets & Semantics`,summary:`Small multiples, hue, size, and the automatic legend.`,objective:`Read a Figure-level FacetGrid as a grid of Axes, then trace semantic columns into color, marker, size, and legend.`,tryThis:[`Select the FacetGrid and compare the Lunch and Dinner panels.`,`Trace hue and size to the corresponding visual channels.`,`Find the unified legend outside the subplot canvas.`],check:`Which object owns the row and column subplots in a relplot() figure?`},{id:`statistical-layers`,number:`03`,file:`03_statistical_layers.html`,icon:`ph-chart-scatter`,title:`Statistical Layers`,summary:`Regression fits, uncertainty bands, distributions, matrices, and despine.`,objective:`Identify the statistical layers Seaborn adds on top of raw data: fits, bootstrap intervals, density summaries, heatmaps, and cleaned spines.`,tryThis:[`Select the regression line and the confidence band separately.`,`Trace the histogram/KDE layer and the boxplot summary.`,`Select the heatmap, then compare its colorbar with the matrix cells.`],check:`What does the translucent band around a regression line represent?`},{id:`code-relational`,number:`04`,file:`04_code_relational.html`,icon:`ph-code-block`,title:`Code X-Ray: Relational & Regression`,summary:`Build a multivariate relplot and an lmplot line by line.`,objective:`Map each declarative Seaborn call to the Figure, FacetGrid, semantic channels, and statistical artist it creates.`,tryThis:[`Step through the relplot recipe and watch layers reveal.`,`Switch to the lmplot recipe and compare the fitted groups.`,`Toggle progressive build to see the order of construction.`],check:`Which line separates the regression fits by time of day?`},{id:`code-distributions`,number:`05`,file:`05_code_distributions.html`,icon:`ph-chart-bar`,title:`Code X-Ray: Distributions & Matrices`,summary:`Move from histograms and boxplots to an annotated correlation matrix.`,objective:`See how axes-level distribution plots and a matrix heatmap reuse the same DataFrame binding.`,tryThis:[`Step through the histogram and boxplot lines.`,`Switch to the heatmap recipe and inspect annot=True.`,`Watch the colorbar appear in the final step.`],check:`Which matrix operation creates the values fed to sns.heatmap()?`},{id:`code-polish`,number:`06`,file:`06_code_polish.html`,icon:`ph-sparkle`,title:`Code X-Ray: Publication Polish`,summary:`Theme, labels, and despine a FacetGrid for presentation.`,objective:`Finish a figure with Seaborn methods that update every subplot without touching Matplotlib directly.`,tryThis:[`Step through the final recipe from theme to despine.`,`Compare the figure before and after set_axis_labels().`,`Notice which spines disappear at the end.`],check:`Which FacetGrid method removes the top and right spines?`},{id:`quiz`,number:`07`,file:`07_name_that_part.html`,icon:`ph-target`,title:`Name That Part`,summary:`Retrieve the Seaborn vocabulary from the figure.`,objective:`Identify Seaborn components from their visual position and scientific role without labels.`,tryThis:[`Answer every component question.`,`Read the explanation after each answer.`,`Reset and retry until the API names feel automatic.`],check:`Can you name each highlighted component before revealing the answer?`},{id:`cheatsheet`,number:`08`,file:`08_cheatsheet.html`,icon:`ph-book-open-text`,title:`Cheat Sheet`,summary:`Levels, semantics, statistical layers, and recipes in one place.`,objective:`Keep Seaborn’s figure-level and axes-level vocabulary within reach while writing statistical graphics.`,tryThis:[`Use the level table when a plot returns the wrong object.`,`Check the semantic table before adding another encoding.`,`Copy a recipe and adapt it to your own DataFrame.`],check:`Which Seaborn calls return a FacetGrid instead of an Axes?`}],t=typeof window<`u`&&window.SEABORN_LESSON?window.SEABORN_LESSON:{},n=Math.max(0,e.findIndex(e=>e.id===t.id)),r=e[n],i=e[n+1]??null,a=e=>String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`),o=(e,t=!1)=>new Promise((n,r)=>{let i=document.createElement(`script`);i.src=e,i.async=!0,i.onload=()=>n(),i.onerror=()=>t?n():r(Error(`Failed to load ${e}`)),document.head.appendChild(i)}),s=e=>new Promise(t=>{let n=document.createElement(`link`);n.rel=`stylesheet`,n.href=e,n.onload=()=>t(),n.onerror=()=>t(),document.head.appendChild(n)}),c=(e,t)=>Promise.race([e,new Promise(e=>setTimeout(e,t))]),l=async()=>{await Promise.all([c(s(`https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap`),8e3),c(o(`https://unpkg.com/@phosphor-icons/web`,!0),8e3)])},u=()=>{let t=i?`<a id="course-next-link" href="./${i.file}" title="Next: ${a(i.title)}" aria-label="Next lesson: ${a(i.title)}" class="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/15 text-sky-200 shadow-lg shadow-sky-950/30 backdrop-blur transition-colors hover:bg-sky-500/25"><i class="ph-bold ph-arrow-right"></i></a>`:`<span id="course-next-link" title="Last lesson" aria-label="Last lesson" aria-disabled="true" class="flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-lg border border-slate-700 bg-slate-900/85 text-slate-500 opacity-40 shadow-lg shadow-black/30 backdrop-blur"><i class="ph-bold ph-arrow-right"></i></span>`,n=r.tryThis.map(e=>`<li class="flex gap-1.5"><span class="text-sky-400">•</span><span>${a(e)}</span></li>`).join(``),o=document.getElementById(`course-root`);o.innerHTML=`
    <div class="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500/30 selection:text-sky-200">
      <div class="fixed right-3 top-3 z-40 flex items-center gap-1.5">
        <span class="hidden rounded-lg border border-slate-700 bg-slate-900/85 px-2 py-1 font-mono text-[10px] font-bold text-slate-400 shadow-lg shadow-black/30 backdrop-blur sm:inline-flex">
          ${r.number} / ${e.length}
        </span>
        <button
          id="course-menu-btn"
          title="All Seaborn lessons"
          aria-label="All Seaborn lessons"
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
              <div class="text-[10px] font-semibold uppercase tracking-wider text-sky-400">Seaborn Field Guide</div>
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
    `}).join(``)},d=()=>{let e=document.getElementById(`course-drawer`),t=document.getElementById(`course-menu-btn`),n=document.getElementById(`course-close-btn`),r=document.getElementById(`course-backdrop`),i=n=>{e.classList.toggle(`hidden`,!n),t.setAttribute(`aria-expanded`,String(n))};t.addEventListener(`click`,()=>i(e.classList.contains(`hidden`))),n.addEventListener(`click`,()=>i(!1)),r.addEventListener(`click`,()=>i(!1)),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&i(!1)})},f=async()=>{let e=document.getElementById(`lesson-mount`),t=document.getElementById(`lesson-content`);t?e.innerHTML=t.innerHTML:(e.innerHTML=`  <main class="workspace">
    <!-- Left Column: Interactive Target Artifact SVG -->
    <section class="stage-column">
      <div class="canvas-card">
        <div class="canvas-toolbar">
          <div class="canvas-title">
            <span>Figure Output:</span>
            <strong>FacetGrid + Relational / Regression / Distribution / Matrix Layers (tips dataset)</strong>
          </div>
          <div class="toolbar-actions">
            <button class="mini-btn" id="btn-show-all">Highlight All Layers</button>
            <button class="mini-btn active" id="btn-toggle-badges">Callout Badges: ON</button>
          </div>
        </div>

        <div class="svg-wrapper">
          <!-- Interactive SVG representing a complete Seaborn Figure-Level & Axes-Level Statistical Output -->
          <svg id="seaborn-svg" viewBox="0 0 920 620" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="heatGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#3b82f6" />
                <stop offset="50%" stop-color="#f8fafc" />
                <stop offset="100%" stop-color="#ef4444" />
              </linearGradient>
              <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="110%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.4" />
              </filter>
            </defs>

            <!-- ================================================================= -->
            <!-- 1. THEME & AXES STYLE (sns.set_theme(style="whitegrid"))          -->
            <!-- ================================================================= -->
            <g class="svg-part" data-part="theme-grid">
              <!-- Outer Figure Canvas -->
              <rect x="14" y="14" width="892" height="592" rx="12" fill="#101932" stroke="#283766" stroke-width="2" filter="url(#cardShadow)" />
              <!-- Left Subplot Whitegrid Background -->
              <rect x="75" y="128" width="295" height="310" rx="4" fill="#152244" />
              <!-- Right Subplot Whitegrid Background -->
              <rect x="405" y="128" width="295" height="310" rx="4" fill="#152244" />
              <!-- Grid Lines (Left Facet) -->
              <g stroke="#293d6e" stroke-width="1" stroke-dasharray="3,3">
                <line x1="75" y1="185" x2="370" y2="185" />
                <line x1="75" y1="245" x2="370" y2="245" />
                <line x1="75" y1="305" x2="370" y2="305" />
                <line x1="75" y1="365" x2="370" y2="365" />
                <line x1="135" y1="128" x2="135" y2="438" />
                <line x1="205" y1="128" x2="205" y2="438" />
                <line x1="275" y1="128" x2="275" y2="438" />
                <line x1="345" y1="128" x2="345" y2="438" />
              </g>
              <!-- Grid Lines (Right Facet) -->
              <g stroke="#293d6e" stroke-width="1" stroke-dasharray="3,3">
                <line x1="405" y1="185" x2="700" y2="185" />
                <line x1="405" y1="245" x2="700" y2="245" />
                <line x1="405" y1="305" x2="700" y2="305" />
                <line x1="405" y1="365" x2="700" y2="365" />
                <line x1="465" y1="128" x2="465" y2="438" />
                <line x1="535" y1="128" x2="535" y2="438" />
                <line x1="605" y1="128" x2="605" y2="438" />
                <line x1="675" y1="128" x2="675" y2="438" />
              </g>
              <!-- Callout Badge #1 -->
              <g class="callout-badge" transform="translate(26, 24)">
                <rect x="0" y="0" width="158" height="24" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
                <text class="badge-text" data-num="#1" data-label="#1 set_theme('whitegrid')" x="79" y="16" fill="#f8fafc" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">#1 set_theme('whitegrid')</text>
              </g>
            </g>

            <!-- ================================================================= -->
            <!-- 2. DATAFRAME BINDING BAR (data=tips, x="total_bill", y="tip")     -->
            <!-- ================================================================= -->
            <g class="svg-part" data-part="dataframe-binding">
              <rect x="200" y="22" width="500" height="52" rx="8" fill="#17254a" stroke="#38bdf8" stroke-width="1.5" />
              <text x="215" y="41" fill="#38bdf8" font-family="monospace" font-size="11.5" font-weight="bold">DataFrame Input: data = sns.load_dataset("tips")  [244 rows × 7 cols]</text>
              <!-- Mini Column Pills -->
              <g font-family="monospace" font-size="10.5">
                <rect x="215" y="48" width="92" height="19" rx="4" fill="#0f172a" stroke="#2dd4bf" />
                <text x="261" y="61" fill="#2dd4bf" text-anchor="middle">x="total_bill"</text>

                <rect x="314" y="48" width="64" height="19" rx="4" fill="#0f172a" stroke="#2dd4bf" />
                <text x="346" y="61" fill="#2dd4bf" text-anchor="middle">y="tip"</text>

                <rect x="385" y="48" width="90" height="19" rx="4" fill="#0f172a" stroke="#fb7185" />
                <text x="430" y="61" fill="#fb7185" text-anchor="middle">hue="smoker"</text>

                <rect x="482" y="48" width="82" height="19" rx="4" fill="#0f172a" stroke="#fbbf24" />
                <text x="523" y="61" fill="#fbbf24" text-anchor="middle">size="size"</text>

                <rect x="571" y="48" width="82" height="19" rx="4" fill="#0f172a" stroke="#a78bfa" />
                <text x="612" y="61" fill="#a78bfa" text-anchor="middle">col="time"</text>
              </g>
              <!-- Callout Badge #2 -->
              <g class="callout-badge" transform="translate(712, 26)">
                <rect x="0" y="0" width="136" height="24" rx="6" fill="#1e293b" stroke="#2dd4bf" stroke-width="1.5" />
                <text class="badge-text" data-num="#2" data-label="#2 data=tips Mapping" x="68" y="16" fill="#f8fafc" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">#2 data=tips Mapping</text>
              </g>
            </g>

            <!-- ================================================================= -->
            <!-- 3. FACETGRID SUBPLOT HEADERS (FacetGrid: col="time")              -->
            <!-- ================================================================= -->
            <g class="svg-part" data-part="facet-grid">
              <!-- Facet 1 Header Strip -->
              <rect x="75" y="96" width="295" height="28" rx="5" fill="#1e3163" stroke="#a78bfa" stroke-width="1.5" />
              <text x="222" y="114" fill="#e9d5ff" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">time = Lunch (Facet Col 0)</text>

              <!-- Facet 2 Header Strip -->
              <rect x="405" y="96" width="295" height="28" rx="5" fill="#1e3163" stroke="#a78bfa" stroke-width="1.5" />
              <text x="552" y="114" fill="#e9d5ff" font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">time = Dinner (Facet Col 1)</text>

              <!-- Callout Badge #3 -->
              <g class="callout-badge" transform="translate(310, 79)">
                <rect x="0" y="0" width="155" height="23" rx="6" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5" />
                <text class="badge-text" data-num="#3" data-label="#3 FacetGrid (col='time')" x="77" y="15" fill="#f8fafc" font-family="monospace" font-size="10.5" font-weight="bold" text-anchor="middle">#3 FacetGrid (col='time')</text>
              </g>
            </g>

            <!-- ================================================================= -->
            <!-- 8. BOOTSTRAP 95% CONFIDENCE INTERVAL BAND (ci=95 / errorbar)      -->
            <!-- ================================================================= -->
            <g class="svg-part" data-part="ci-band">
              <!-- Left Facet CI Shaded Polygon -->
              <polygon points="90,395 160,342 250,272 355,190 355,244 250,310 160,374 90,422" fill="#2dd4bf" fill-opacity="0.22" stroke="#2dd4bf" stroke-opacity="0.45" stroke-dasharray="2,2" />
              <!-- Right Facet CI Shaded Polygon (Smoker=No) -->
              <polygon points="420,392 500,330 600,255 688,182 688,236 600,295 500,362 420,418" fill="#2dd4bf" fill-opacity="0.20" stroke="#2dd4bf" stroke-opacity="0.4" stroke-dasharray="2,2" />
              <!-- Right Facet CI Shaded Polygon (Smoker=Yes) -->
              <polygon points="420,360 515,315 610,268 688,225 688,278 610,310 515,352 420,395" fill="#fb7185" fill-opacity="0.22" stroke="#fb7185" stroke-opacity="0.45" stroke-dasharray="2,2" />

              <!-- Callout Badge #8 -->
              <g class="callout-badge" transform="translate(86, 140)">
                <rect x="0" y="0" width="152" height="23" rx="6" fill="#1e293b" stroke="#2dd4bf" stroke-width="1.5" />
                <text class="badge-text" data-num="#8" data-label="#8 95% Bootstrap CI Band" x="76" y="15" fill="#f8fafc" font-family="monospace" font-size="10.5" font-weight="bold" text-anchor="middle">#8 95% Bootstrap CI Band</text>
              </g>
              <line x1="162" y1="163" x2="245" y2="278" stroke="#2dd4bf" stroke-width="1.2" stroke-dasharray="3,2" />
            </g>

            <!-- ================================================================= -->
            <!-- 7. REGRESSION / STATISTICAL TREND LINE (lmplot / regplot)         -->
            <!-- ================================================================= -->
            <g class="svg-part" data-part="reg-line">
              <!-- Transparent wide hit targets for easy clicking -->
              <line x1="90" y1="408" x2="355" y2="216" stroke="transparent" stroke-width="14" />
              <line x1="420" y1="405" x2="688" y2="208" stroke="transparent" stroke-width="14" />
              <line x1="420" y1="378" x2="688" y2="252" stroke="transparent" stroke-width="14" />

              <!-- Left Facet Regression Fit Line -->
              <line x1="90" y1="408" x2="355" y2="216" stroke="#2dd4bf" stroke-width="3" stroke-linecap="round" />
              <!-- Right Facet Regression Fit Line (No) -->
              <line x1="420" y1="405" x2="688" y2="208" stroke="#2dd4bf" stroke-width="3" stroke-linecap="round" />
              <!-- Right Facet Regression Fit Line (Yes) -->
              <line x1="420" y1="378" x2="688" y2="252" stroke="#fb7185" stroke-width="3" stroke-dasharray="7,4" stroke-linecap="round" />

              <!-- Callout Badge #7 -->
              <g class="callout-badge" transform="translate(418, 140)">
                <rect x="0" y="0" width="158" height="23" rx="6" fill="#1e293b" stroke="#fb7185" stroke-width="1.5" />
                <text class="badge-text" data-num="#7" data-label="#7 Regression Fit (lmplot)" x="79" y="15" fill="#f8fafc" font-family="monospace" font-size="10.5" font-weight="bold" text-anchor="middle">#7 Regression Fit (lmplot)</text>
              </g>
              <line x1="510" y1="163" x2="585" y2="282" stroke="#fb7185" stroke-width="1.2" stroke-dasharray="3,2" />
            </g>

            <!-- ================================================================= -->
            <!-- 5. SEMANTIC HUE & STYLE SCATTER POINTS (hue="smoker", style=...)  -->
            <!-- ================================================================= -->
            <g class="svg-part" data-part="scatter-hue">
              <!-- Left Facet: Smoker = No (Teal Circles) -->
              <circle cx="112" cy="396" r="5.5" fill="#2dd4bf" fill-opacity="0.88" stroke="#0f172a" stroke-width="1.2" />
              <circle cx="138" cy="372" r="5.5" fill="#2dd4bf" fill-opacity="0.88" stroke="#0f172a" stroke-width="1.2" />
              <circle cx="164" cy="355" r="6" fill="#2dd4bf" fill-opacity="0.88" stroke="#0f172a" stroke-width="1.2" />
              <circle cx="192" cy="336" r="5.5" fill="#2dd4bf" fill-opacity="0.88" stroke="#0f172a" stroke-width="1.2" />
              <circle cx="218" cy="312" r="6.5" fill="#2dd4bf" fill-opacity="0.88" stroke="#0f172a" stroke-width="1.2" />
              <circle cx="262" cy="285" r="6" fill="#2dd4bf" fill-opacity="0.88" stroke="#0f172a" stroke-width="1.2" />
              <circle cx="296" cy="252" r="6.5" fill="#2dd4bf" fill-opacity="0.88" stroke="#0f172a" stroke-width="1.2" />

              <!-- Left Facet: Smoker = Yes (Coral X/Cross Markers) -->
              <g stroke="#fb7185" stroke-width="2.6" stroke-linecap="round">
                <path d="M144,344 L154,354 M154,344 L144,354" />
                <path d="M180,315 L190,325 M190,315 L180,325" />
                <path d="M235,288 L245,298 M245,288 L235,298" />
                <path d="M310,224 L320,234 M320,224 L310,234" />
              </g>

              <!-- Right Facet: Smoker = No (Teal Circles) -->
              <circle cx="442" cy="390" r="5.5" fill="#2dd4bf" fill-opacity="0.88" stroke="#0f172a" stroke-width="1.2" />
              <circle cx="475" cy="364" r="6" fill="#2dd4bf" fill-opacity="0.88" stroke="#0f172a" stroke-width="1.2" />
              <circle cx="515" cy="332" r="6" fill="#2dd4bf" fill-opacity="0.88" stroke="#0f172a" stroke-width="1.2" />
              <circle cx="548" cy="306" r="6.5" fill="#2dd4bf" fill-opacity="0.88" stroke="#0f172a" stroke-width="1.2" />
              <circle cx="592" cy="272" r="6" fill="#2dd4bf" fill-opacity="0.88" stroke="#0f172a" stroke-width="1.2" />
              <circle cx="640" cy="242" r="6.5" fill="#2dd4bf" fill-opacity="0.88" stroke="#0f172a" stroke-width="1.2" />

              <!-- Right Facet: Smoker = Yes (Coral Cross Markers) -->
              <g stroke="#fb7185" stroke-width="2.8" stroke-linecap="round">
                <path d="M454,355 L464,365 M464,355 L454,365" />
                <path d="M495,338 L505,348 M505,338 L495,348" />
                <path d="M558,310 L568,320 M568,310 L558,320" />
                <path d="M612,272 L622,282 M622,272 L612,282" />
                <path d="M664,254 L674,264 M674,254 L664,264" />
              </g>

              <!-- Callout Badge #5 -->
              <g class="callout-badge" transform="translate(88, 200)">
                <rect x="0" y="0" width="144" height="23" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
                <text class="badge-text" data-num="#5" data-label="#5 hue & style Markers" x="72" y="15" fill="#f8fafc" font-family="monospace" font-size="10.5" font-weight="bold" text-anchor="middle">#5 hue &amp; style Markers</text>
              </g>
              <line x1="160" y1="223" x2="185" y2="318" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="3,2" />
            </g>

            <!-- ================================================================= -->
            <!-- 6. SEMANTIC SIZE MAPPING (size="size" bubble points)              -->
            <!-- ================================================================= -->
            <g class="svg-part" data-part="size-encoding">
              <!-- Large party size bubbles (size=5 and size=6) -->
              <circle cx="276" cy="264" r="11.5" fill="#2dd4bf" fill-opacity="0.85" stroke="#fbbf24" stroke-width="2.2" />
              <circle cx="338" cy="212" r="13.5" fill="#fb7185" fill-opacity="0.85" stroke="#fbbf24" stroke-width="2.2" />
              <circle cx="576" cy="285" r="11" fill="#2dd4bf" fill-opacity="0.85" stroke="#fbbf24" stroke-width="2.2" />
              <circle cx="628" cy="232" r="13" fill="#2dd4bf" fill-opacity="0.85" stroke="#fbbf24" stroke-width="2.2" />
              <circle cx="672" cy="216" r="14" fill="#fb7185" fill-opacity="0.85" stroke="#fbbf24" stroke-width="2.2" />

              <!-- Callout Badge #6 -->
              <g class="callout-badge" transform="translate(495, 392)">
                <rect x="0" y="0" width="152" height="23" rx="6" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5" />
                <text class="badge-text" data-num="#6" data-label="#6 size='size' Scaling" x="76" y="15" fill="#f8fafc" font-family="monospace" font-size="10.5" font-weight="bold" text-anchor="middle">#6 size='size' Scaling</text>
              </g>
              <line x1="576" y1="392" x2="628" y2="246" stroke="#fbbf24" stroke-width="1.3" stroke-dasharray="3,2" />
            </g>

            <!-- ================================================================= -->
            <!-- 12. DESPINE FRAME (sns.despine(trim=True) — Left & Bottom Spines) -->
            <!-- ================================================================= -->
            <g class="svg-part" data-part="despine-frame">
              <!-- Hit areas for spines -->
              <polyline points="75,128 75,438 370,438" fill="none" stroke="transparent" stroke-width="14" />
              <polyline points="405,128 405,438 700,438" fill="none" stroke="transparent" stroke-width="14" />

              <!-- Left & Bottom Active Spines -->
              <polyline points="75,128 75,438 370,438" fill="none" stroke="#94a3b8" stroke-width="2.2" />
              <polyline points="405,128 405,438 700,438" fill="none" stroke="#94a3b8" stroke-width="2.2" />

              <!-- Dashed Ghost Indicator where Top & Right Spines were removed by sns.despine() -->
              <polyline points="75,128 370,128 370,438" fill="none" stroke="#f43f5e" stroke-width="1.2" stroke-dasharray="4,4" stroke-opacity="0.65" />
              <polyline points="405,128 700,128 700,438" fill="none" stroke="#f43f5e" stroke-width="1.2" stroke-dasharray="4,4" stroke-opacity="0.65" />

              <!-- Callout Badge #12 -->
              <g class="callout-badge" transform="translate(242, 398)">
                <rect x="0" y="0" width="122" height="23" rx="6" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5" />
                <text class="badge-text" data-num="#12" data-label="#12 sns.despine()" x="61" y="15" fill="#f8fafc" font-family="monospace" font-size="10.5" font-weight="bold" text-anchor="middle">#12 sns.despine()</text>
              </g>
            </g>

            <!-- ================================================================= -->
            <!-- 4. AUTO-GENERATED AXIS LABELS & TICKS (g.set_axis_labels)         -->
            <!-- ================================================================= -->
            <g class="svg-part" data-part="axes-labels">
              <!-- Y-Axis Title & Ticks -->
              <text x="34" y="285" fill="#e2e8f0" font-family="sans-serif" font-size="12.5" font-weight="bold" text-anchor="middle" transform="rotate(-90, 34, 285)">tip ($ USD)</text>
              <g fill="#94a3b8" font-family="monospace" font-size="10.5" text-anchor="end">
                <text x="68" y="369">$2</text>
                <text x="68" y="309">$4</text>
                <text x="68" y="249">$6</text>
                <text x="68" y="189">$8</text>
              </g>

              <!-- X-Axis Titles & Ticks -->
              <g fill="#94a3b8" font-family="monospace" font-size="10.5" text-anchor="middle">
                <text x="135" y="455">$10</text>
                <text x="205" y="455">$20</text>
                <text x="275" y="455">$30</text>
                <text x="345" y="455">$40</text>

                <text x="465" y="455">$10</text>
                <text x="535" y="455">$20</text>
                <text x="605" y="455">$30</text>
                <text x="675" y="455">$40</text>
              </g>
              <text x="222" y="476" fill="#e2e8f0" font-family="sans-serif" font-size="12.5" font-weight="bold" text-anchor="middle">total_bill ($ USD)</text>
              <text x="552" y="476" fill="#e2e8f0" font-family="sans-serif" font-size="12.5" font-weight="bold" text-anchor="middle">total_bill ($ USD)</text>

              <!-- Callout Badge #4 -->
              <g class="callout-badge" transform="translate(28, 462)">
                <rect x="0" y="0" width="132" height="23" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
                <text class="badge-text" data-num="#4" data-label="#4 Auto Axis Labels" x="66" y="15" fill="#f8fafc" font-family="monospace" font-size="10.5" font-weight="bold" text-anchor="middle">#4 Auto Axis Labels</text>
              </g>
            </g>

            <!-- ================================================================= -->
            <!-- 11. AUTOMATIC EXTERNAL SEMANTIC LEGEND (g.legend / move_legend)   -->
            <!-- ================================================================= -->
            <g class="svg-part" data-part="semantic-legend">
              <rect x="722" y="128" width="166" height="196" rx="8" fill="#162344" stroke="#38bdf8" stroke-width="1.5" />
              <text x="736" y="150" fill="#f8fafc" font-family="monospace" font-size="11.5" font-weight="bold">smoker (hue/style)</text>
              <!-- Smoker = No -->
              <circle cx="744" cy="169" r="5.5" fill="#2dd4bf" />
              <line x1="734" y1="169" x2="754" y2="169" stroke="#2dd4bf" stroke-width="2" />
              <text x="764" y="173" fill="#cbd5e1" font-family="monospace" font-size="11">No (Non-Smoker)</text>
              <!-- Smoker = Yes -->
              <g stroke="#fb7185" stroke-width="2.4">
                <path d="M739,185 L749,195 M749,185 L739,195" />
                <line x1="734" y1="190" x2="754" y2="190" stroke-dasharray="3,2" />
              </g>
              <text x="764" y="194" fill="#cbd5e1" font-family="monospace" font-size="11">Yes (Smoker)</text>

              <line x1="734" y1="208" x2="874" y2="208" stroke="#283766" stroke-width="1" />
              <text x="736" y="226" fill="#f8fafc" font-family="monospace" font-size="11.5" font-weight="bold">size (party size)</text>
              <circle cx="745" cy="245" r="4" fill="#94a3b8" stroke="#fbbf24" stroke-width="1.2" />
              <text x="768" y="249" fill="#cbd5e1" font-family="monospace" font-size="11">2 guests</text>
              <circle cx="745" cy="268" r="7.5" fill="#94a3b8" stroke="#fbbf24" stroke-width="1.5" />
              <text x="768" y="272" fill="#cbd5e1" font-family="monospace" font-size="11">4 guests</text>
              <circle cx="745" cy="296" r="11" fill="#94a3b8" stroke="#fbbf24" stroke-width="1.8" />
              <text x="768" y="300" fill="#cbd5e1" font-family="monospace" font-size="11">6 guests</text>

              <!-- Callout Badge #11 -->
              <g class="callout-badge" transform="translate(730, 96)">
                <rect x="0" y="0" width="150" height="23" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
                <text class="badge-text" data-num="#11" data-label="#11 Semantic Legend" x="75" y="15" fill="#f8fafc" font-family="monospace" font-size="10.5" font-weight="bold" text-anchor="middle">#11 Semantic Legend</text>
              </g>
            </g>

            <!-- ================================================================= -->
            <!-- 9. DISTRIBUTIONAL SUMMARY LAYER (histplot + kdeplot + boxplot)    -->
            <!-- ================================================================= -->
            <g class="svg-part" data-part="dist-layer">
              <rect x="75" y="492" width="435" height="98" rx="8" fill="#152244" stroke="#2dd4bf" stroke-width="1.5" />
              <text x="88" y="510" fill="#2dd4bf" font-family="monospace" font-size="11" font-weight="bold">Distribution &amp; 5-Number Summary: histplot(kde=True) + boxplot()</text>

              <!-- Histogram Bins -->
              <g fill="#38bdf8" fill-opacity="0.32" stroke="#38bdf8" stroke-width="1">
                <rect x="95" y="562" width="28" height="18" />
                <rect x="125" y="544" width="28" height="36" />
                <rect x="155" y="524" width="28" height="56" />
                <rect x="185" y="532" width="28" height="48" />
                <rect x="215" y="548" width="28" height="32" />
                <rect x="245" y="560" width="28" height="20" />
                <rect x="275" y="569" width="28" height="11" />
              </g>

              <!-- Smooth KDE Curve -->
              <path d="M 88 578 Q 125 555, 168 522 T 245 552 T 312 578" fill="none" stroke="#2dd4bf" stroke-width="2.6" />

              <!-- Horizontal Boxplot (Q1, Median, Q3, Whiskers, Outliers) -->
              <g transform="translate(335, 524)">
                <!-- Whisker line -->
                <line x1="8" y1="24" x2="132" y2="24" stroke="#fbbf24" stroke-width="2" />
                <line x1="8" y1="14" x2="8" y2="34" stroke="#fbbf24" stroke-width="2" />
                <line x1="132" y1="14" x2="132" y2="34" stroke="#fbbf24" stroke-width="2" />
                <!-- IQR Box (Q1 to Q3) -->
                <rect x="34" y="8" width="64" height="32" rx="3" fill="#1e3a8a" stroke="#fbbf24" stroke-width="2" />
                <!-- Median Line (Q2) -->
                <line x1="62" y1="8" x2="62" y2="40" stroke="#4ade80" stroke-width="3" />
                <!-- Outlier Diamond -->
                <polygon points="150,24 155,18 160,24 155,30" fill="#fb7185" />
                <text x="66" y="54" fill="#cbd5e1" font-family="monospace" font-size="9.5" text-anchor="middle">Q1 | Median | Q3 + Outlier</text>
              </g>

              <!-- Callout Badge #9 -->
              <g class="callout-badge" transform="translate(352, 496)">
                <rect x="0" y="0" width="150" height="22" rx="6" fill="#1e293b" stroke="#2dd4bf" stroke-width="1.5" />
                <text class="badge-text" data-num="#9" data-label="#9 Hist / KDE / Boxplot" x="75" y="15" fill="#f8fafc" font-family="monospace" font-size="10.5" font-weight="bold" text-anchor="middle">#9 Hist / KDE / Boxplot</text>
              </g>
            </g>

            <!-- ================================================================= -->
            <!-- 10. CORRELATION MATRIX HEATMAP (sns.heatmap(annot=True))          -->
            <!-- ================================================================= -->
            <g class="svg-part" data-part="heatmap-inset">
              <rect x="526" y="340" width="362" height="250" rx="8" fill="#152244" stroke="#fb7185" stroke-width="1.5" />
              <text x="540" y="361" fill="#fb7185" font-family="monospace" font-size="11.5" font-weight="bold">Matrix Plot: sns.heatmap(tips.corr(), annot=True)</text>

              <!-- 3x3 Correlation Grid -->
              <g transform="translate(590, 374)" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">
                <!-- Row 0 -->
                <rect x="0" y="0" width="72" height="46" fill="#ef4444" stroke="#0f172a" stroke-width="2" />
                <text x="36" y="27" fill="#ffffff">1.00</text>
                <rect x="72" y="0" width="72" height="46" fill="#f87171" stroke="#0f172a" stroke-width="2" />
                <text x="108" y="27" fill="#0f172a">0.68</text>
                <rect x="144" y="0" width="72" height="46" fill="#fca5a5" stroke="#0f172a" stroke-width="2" />
                <text x="180" y="27" fill="#0f172a">0.60</text>

                <!-- Row 1 -->
                <rect x="0" y="46" width="72" height="46" fill="#f87171" stroke="#0f172a" stroke-width="2" />
                <text x="36" y="73" fill="#0f172a">0.68</text>
                <rect x="72" y="46" width="72" height="46" fill="#ef4444" stroke="#0f172a" stroke-width="2" />
                <text x="108" y="73" fill="#ffffff">1.00</text>
                <rect x="144" y="46" width="72" height="46" fill="#93c5fd" stroke="#0f172a" stroke-width="2" />
                <text x="180" y="73" fill="#0f172a">0.49</text>

                <!-- Row 2 -->
                <rect x="0" y="92" width="72" height="46" fill="#fca5a5" stroke="#0f172a" stroke-width="2" />
                <text x="36" y="119" fill="#0f172a">0.60</text>
                <rect x="72" y="92" width="72" height="46" fill="#93c5fd" stroke="#0f172a" stroke-width="2" />
                <text x="108" y="119" fill="#0f172a">0.49</text>
                <rect x="144" y="92" width="72" height="46" fill="#ef4444" stroke="#0f172a" stroke-width="2" />
                <text x="180" y="119" fill="#ffffff">1.00</text>

                <!-- Matrix Labels -->
                <g fill="#cbd5e1" font-size="10" font-weight="normal">
                  <text x="-28" y="27">bill</text>
                  <text x="-28" y="73">tip</text>
                  <text x="-28" y="119">size</text>

                  <text x="36" y="154">bill</text>
                  <text x="108" y="154">tip</text>
                  <text x="180" y="154">size</text>
                </g>
              </g>

              <!-- Colorbar (cbar=True) -->
              <rect x="828" y="374" width="14" height="138" rx="3" fill="url(#heatGrad)" transform="rotate(-90 835 443)" />
              <text x="845" y="384" fill="#cbd5e1" font-family="monospace" font-size="9.5">1.0</text>
              <text x="845" y="446" fill="#cbd5e1" font-family="monospace" font-size="9.5">0.5</text>
              <text x="845" y="510" fill="#cbd5e1" font-family="monospace" font-size="9.5">0.0</text>

              <!-- Callout Badge #10 -->
              <g class="callout-badge" transform="translate(728, 558)">
                <rect x="0" y="0" width="148" height="22" rx="6" fill="#1e293b" stroke="#fb7185" stroke-width="1.5" />
                <text class="badge-text" data-num="#10" data-label="#10 heatmap(annot=True)" x="74" y="15" fill="#f8fafc" font-family="monospace" font-size="10.5" font-weight="bold" text-anchor="middle">#10 heatmap(annot=True)</text>
              </g>
            </g>
          </svg>
        </div>

        <!-- Live Domain Status Bar -->
        <div class="status-bar">
          <div class="status-item">
            <span class="status-dot"></span>
            <span id="status-hover">Hover or click any plot layer to inspect its Seaborn API mapping</span>
          </div>
          <div class="status-item" id="status-coords">
            API Level: Figure-Level (FacetGrid) &amp; Axes-Level (matplotlib.axes.Axes)
          </div>
        </div>
      </div>

      <!-- Component Filter & Chips Bar -->
      <div class="chips-card">
        <div class="chips-header">
          <span class="chips-title" id="chips-title">12 Interactive Seaborn Components (Click to Inspect)</span>
          <div class="category-filters" id="category-filters">
            <button class="cat-btn active" data-cat="all">All</button>
            <button class="cat-btn" data-cat="Data & Grids">Data &amp; Grids</button>
            <button class="cat-btn" data-cat="Semantics">Semantics</button>
            <button class="cat-btn" data-cat="Statistics & Plots">Statistics &amp; Plots</button>
            <button class="cat-btn" data-cat="Aesthetics">Aesthetics</button>
          </div>
        </div>
        <div class="component-chips" id="component-chips"></div>
      </div>
    </section>

    <!-- Right Column: Synchronized Workspace (Mode 1, Mode 2, Mode 3) -->
    <aside class="inspector-column">
      <div class="panel-card">

        <!-- =============================================================== -->
        <!-- MODE 1: VISUAL ANATOMY INSPECTOR                                -->
        <!-- =============================================================== -->
        <div class="mode-panel active" id="panel-anatomy">
          <div class="part-header">
            <div>
              <div class="part-badge-row">
                <span class="chip-num" id="insp-num">#1</span>
                <span class="cat-tag" id="insp-cat">Aesthetics</span>
              </div>
              <h2 class="part-title" id="insp-title">Theme &amp; Axes Style (sns.set_theme)</h2>
            </div>
          </div>

          <div class="section-block">
            <h3>What You See / Visual Intuition</h3>
            <p id="insp-role"></p>
          </div>

          <div class="info-grid">
            <div class="meta-box">
              <div class="meta-label">Official Package Term &amp; Type</div>
              <div class="meta-value" id="insp-type"></div>
            </div>
            <div class="meta-box">
              <div class="meta-label">Where It Lives / Access Path</div>
              <div class="meta-value" id="insp-access"></div>
            </div>
          </div>

          <div class="section-block">
            <h3>Idiomatic Syntax Comparison (Figure-Level vs. Axes-Level / Custom)</h3>
            <div class="syntax-compare">
              <div class="code-card">
                <div class="code-card-header">
                  <span>Declarative / Figure-Level</span>
                  <span style="color: var(--accent-teal);">Recommended</span>
                </div>
                <pre id="insp-syntax-1"></pre>
              </div>
              <div class="code-card">
                <div class="code-card-header">
                  <span>Axes-Level / Fine-Grained</span>
                  <span style="color: var(--accent-amber);">Customizable</span>
                </div>
                <pre id="insp-syntax-2"></pre>
              </div>
            </div>
          </div>
        </div>

        <!-- =============================================================== -->
        <!-- MODE 2: BEGINNER TERMINOLOGY PRACTICE ("NAME THAT PART")        -->
        <!-- =============================================================== -->
        <div class="mode-panel" id="panel-quiz">
          <div class="quiz-topbar">
            <div>
              <strong style="font-size: 14px;">Name That Seaborn Component</strong>
              <p style="font-size: 11.5px; color: var(--text-muted);">Identify the highlighted \`?\` part on the figure</p>
            </div>
            <div class="score-pills">
              <span class="score-pill" id="quiz-score">Score: 0 / 0</span>
              <span class="score-pill" id="quiz-streak">Streak: 0</span>
            </div>
          </div>

          <div class="quiz-prompt-box">
            <div class="quiz-prompt-label" id="quiz-badge-indicator">Target Spotlight: Badge #?</div>
            <div class="quiz-clue" id="quiz-clue">Loading challenge...</div>
          </div>

          <div class="quiz-options" id="quiz-options"></div>

          <div class="quiz-feedback" id="quiz-feedback"></div>

          <div class="quiz-actions">
            <button class="mini-btn" id="btn-reset-quiz">Reset Score</button>
            <button class="primary-btn" id="btn-next-question">Next Component &rarr;</button>
          </div>
        </div>

        <!-- =============================================================== -->
        <!-- MODE 3: STEP-BY-STEP CODE-TO-OUTPUT X-RAY                       -->
        <!-- =============================================================== -->
        <div class="mode-panel" id="panel-xray">
          <div class="xray-controls">
            <select class="snippet-select" id="snippet-select" aria-label="Select Seaborn Code Recipe"></select>
            <label class="step-toggle">
              <input type="checkbox" id="chk-build-step" checked />
              <span>Build Step-by-Step</span>
            </label>
          </div>

          <div class="code-lines-box" id="code-lines-box"></div>

          <div class="xray-nav-bar">
            <div class="nav-btn-group">
              <button class="mini-btn" id="btn-prev-line">&larr; Prev Line</button>
              <button class="mini-btn" id="btn-next-line">Next Line &rarr;</button>
            </div>
            <span style="font-size: 11.5px; font-family: var(--font-mono); color: var(--text-muted);" id="xray-step-counter">Line 1 of 6</span>
          </div>

          <div class="xray-explain-card">
            <div class="xray-explain-header">
              <span id="xray-line-title">Line 1 Execution X-Ray</span>
              <span>Updates SVG Live</span>
            </div>
            <div class="xray-explain-body" id="xray-explanation"></div>
            <div class="affected-pills" id="xray-affected-pills"></div>
          </div>
        </div>

      </div>
    </aside>
  </main>
`,await o(`/Visual_Interactive_Learning_Python/assets/app-D9XjJ25X.js`),typeof window.initSeabornApp==`function`?window.initSeabornApp():e.innerHTML=`<div class="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-6 text-sm text-rose-200">Seaborn app failed to initialize.</div>`)};document.title=`${r.number} · ${r.title} | Seaborn Field Guide`,(async()=>{await l(),u(),d(),await f()})().catch(e=>{console.error(e);let t=document.getElementById(`course-root`);t&&(t.innerHTML=`<div class="p-6"><div class="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-6 text-sm text-rose-200">${a(e.message)}</div></div>`)});