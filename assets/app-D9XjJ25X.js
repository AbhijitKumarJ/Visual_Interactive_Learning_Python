    // =========================================================================
    // 1. SEABORN COMPONENT METADATA (12 CORE VISUAL ARTIFACT PARTS)
    // =========================================================================
    const SEABORN_PARTS = [
      {
        id: "theme-grid",
        num: "#1",
        name: "Theme & Axes Style (set_theme)",
        category: "Aesthetics",
        objectType: "sns.set_theme() / sns.axes_style()",
        accessPath: "sns.set_theme(style='whitegrid', context='notebook')",
        visualRole: "Controls the background canvas color, reference grid lines ('darkgrid', 'whitegrid', 'ticks', 'white', 'dark'), and context-based typography scaling ('paper', 'notebook', 'talk', 'poster') across all Matplotlib and Seaborn figures.",
        syntaxPrimary: `import seaborn as sns\n\n# Set global style + context scaling\nsns.set_theme(\n    style="whitegrid",\n    context="notebook",\n    font_scale=1.1\n)`,
        syntaxAlternative: `# Scoped style for a single subplot\nwith sns.axes_style("ticks"):\n    sns.scatterplot(\n        data=tips, x="total_bill", y="tip"\n    )`
      },
      {
        id: "dataframe-binding",
        num: "#2",
        name: "Tidy DataFrame Binding (data=df)",
        category: "Data & Grids",
        objectType: "pandas.DataFrame + Column Strings",
        accessPath: "sns.relplot(data=tips, x='total_bill', y='tip')",
        visualRole: "Eliminates manual Series slicing. You pass the entire tidy DataFrame to data= and map column names as plain strings to visual roles (x, y, hue, size, style, col), letting Seaborn handle type inference, grouping, and labeling automatically.",
        syntaxPrimary: `tips = sns.load_dataset("tips")\n\nsns.relplot(\n    data=tips,\n    x="total_bill",\n    y="tip"\n)`,
        syntaxAlternative: `# Objects API (Seaborn v0.12+ / v0.13+)\nimport seaborn.objects as so\n(\n    so.Plot(tips, x="total_bill", y="tip")\n    .add(so.Dot())\n)`
      },
      {
        id: "facet-grid",
        num: "#3",
        name: "Small-Multiple FacetGrid (col / row)",
        category: "Data & Grids",
        objectType: "seaborn.axisgrid.FacetGrid",
        accessPath: "g = sns.relplot(..., col='time') -> g.axes",
        visualRole: "Splits the dataset by categorical variables into a conditional grid of subplots ('time = Lunch' vs 'time = Dinner') with shared axes scales, allowing instant visual comparison across subsets.",
        syntaxPrimary: `# Figure-level automatic faceting\ng = sns.relplot(\n    data=tips,\n    x="total_bill", y="tip",\n    col="time", col_wrap=2\n)`,
        syntaxAlternative: `# Explicit FacetGrid controller\ng = sns.FacetGrid(tips, col="time")\ng.map_dataframe(\n    sns.scatterplot, x="total_bill", y="tip"\n)`
      },
      {
        id: "axes-labels",
        num: "#4",
        name: "Auto Axis Labels & Ticks",
        category: "Aesthetics",
        objectType: "FacetGrid.set_axis_labels() / Axes",
        accessPath: "g.set_axis_labels('Total Bill ($)', 'Tip ($)')",
        visualRole: "Automatically populates x and y axis titles directly from the DataFrame column names ('total_bill' and 'tip'), while providing high-level methods on the returned grid to customize units, limits, and tick formatting.",
        syntaxPrimary: `g = sns.relplot(\n    data=tips, x="total_bill", y="tip"\n)\ng.set_axis_labels(\n    "Total Bill ($ USD)", "Tip ($ USD)"\n)`,
        syntaxAlternative: `ax = sns.scatterplot(\n    data=tips, x="total_bill", y="tip"\n)\nax.set(xlabel="Total Bill ($)", ylim=(0, 12))`
      },
      {
        id: "scatter-hue",
        num: "#5",
        name: "Semantic Hue & Style Mapping",
        category: "Semantics",
        objectType: "hue='smoker', style='smoker', palette=...",
        accessPath: "sns.scatterplot(..., hue='smoker', style='smoker')",
        visualRole: "Translates a categorical or continuous DataFrame column into distinct colors (hue) and marker shapes or line dashes (style). Categorical columns receive qualitative palettes; numeric columns get continuous gradients.",
        syntaxPrimary: `sns.relplot(\n    data=tips,\n    x="total_bill", y="tip",\n    hue="smoker",\n    style="smoker",\n    palette="Set2"\n)`,
        syntaxAlternative: `sns.scatterplot(\n    data=tips,\n    x="total_bill", y="tip",\n    hue="smoker",\n    markers={"No": "o", "Yes": "X"}\n)`
      },
      {
        id: "size-encoding",
        num: "#6",
        name: "Semantic Size Scaling (size='size')",
        category: "Semantics",
        objectType: "size='size', sizes=(min_area, max_area)",
        accessPath: "sns.relplot(..., size='size', sizes=(30, 180))",
        visualRole: "Encodes a 4th or 5th variable into the plot by scaling marker area (in scatter plots) or line thickness (in line plots) proportionally to data values such as party size.",
        syntaxPrimary: `sns.relplot(\n    data=tips,\n    x="total_bill", y="tip",\n    hue="smoker",\n    size="size",\n    sizes=(30, 180)\n)`,
        syntaxAlternative: `sns.lineplot(\n    data=dots,\n    x="time", y="firing_rate",\n    size="coherence",\n    sizes=(1, 4)\n)`
      },
      {
        id: "reg-line",
        num: "#7",
        name: "Statistical Regression Fit (lmplot / regplot)",
        category: "Statistics & Plots",
        objectType: "sns.lmplot() / sns.regplot()",
        accessPath: "sns.lmplot(data=tips, x='total_bill', y='tip', hue='smoker')",
        visualRole: "Automatically fits and draws a linear (or polynomial/logistic) regression model relating x and y for each semantic group, revealing slope differences and correlation direction at a glance.",
        syntaxPrimary: `# Figure-level regression across facets\nsns.lmplot(\n    data=tips,\n    x="total_bill", y="tip",\n    hue="smoker", col="time"\n)`,
        syntaxAlternative: `# Axes-level regression on single subplot\nsns.regplot(\n    data=tips,\n    x="total_bill", y="tip",\n    ax=ax, line_kws={"color": "crimson"}\n)`
      },
      {
        id: "ci-band",
        num: "#8",
        name: "95% Bootstrap Confidence Interval Band",
        category: "Statistics & Plots",
        objectType: "errorbar=('ci', 95) / ci=95 translucent band",
        accessPath: "sns.lineplot(..., errorbar=('ci', 95)) / sns.lmplot(..., ci=95)",
        visualRole: "Computes non-parametric bootstrap resamples behind the scenes and draws a translucent shaded ribbon (or error bars) showing the 95% confidence interval around the estimated mean or regression trend.",
        syntaxPrimary: `# Shaded 95% CI band on line or regression\nsns.lineplot(\n    data=fmri,\n    x="timepoint", y="signal",\n    hue="event",\n    errorbar=("ci", 95)\n)`,
        syntaxAlternative: `# Switch to Standard Deviation or disable\nsns.barplot(\n    data=tips,\n    x="day", y="total_bill",\n    errorbar="sd", capsize=0.1\n)`
      },
      {
        id: "dist-layer",
        num: "#9",
        name: "Distribution & Summary (histplot / kde / boxplot)",
        category: "Statistics & Plots",
        objectType: "sns.displot() / sns.histplot() / sns.boxplot()",
        accessPath: "sns.histplot(data=tips, x='total_bill', kde=True)",
        visualRole: "Summarizes univariate or categorical spread using frequency bins (histogram), smooth Kernel Density Estimation curves (kde=True), and 5-number quartile summaries (median, IQR box, 1.5x IQR whiskers, and outliers).",
        syntaxPrimary: `# Histogram + smooth KDE curve\nsns.displot(\n    data=tips,\n    x="total_bill",\n    kde=True, bins=15\n)`,
        syntaxAlternative: `# 5-number summary + outliers per category\nsns.catplot(\n    data=tips,\n    x="day", y="total_bill",\n    hue="smoker", kind="box"\n)`
      },
      {
        id: "heatmap-inset",
        num: "#10",
        name: "Matrix Correlation Heatmap (sns.heatmap)",
        category: "Statistics & Plots",
        objectType: "sns.heatmap(corr_matrix, annot=True)",
        accessPath: "ax = sns.heatmap(tips.corr(numeric_only=True), annot=True)",
        visualRole: "Encodes 2D tabular matrices (such as correlation matrices or pivot tables) using color intensity, optional cell value annotations (annot=True), centered diverging colormaps (cmap='coolwarm'), and a colorbar scale.",
        syntaxPrimary: `corr = tips.corr(numeric_only=True)\nsns.heatmap(\n    corr,\n    annot=True, fmt=".2f",\n    cmap="coolwarm", center=0,\n    vmin=-1, vmax=1\n)`,
        syntaxAlternative: `# Clustered hierarchical heatmap\nsns.clustermap(\n    corr,\n    annot=True, cmap="vlag",\n    figsize=(6, 6)\n)`
      },
      {
        id: "semantic-legend",
        num: "#11",
        name: "Automatic Figure-Level Legend",
        category: "Semantics",
        objectType: "g.legend / sns.move_legend()",
        accessPath: "g.legend.set_title('Smoker Status') / sns.move_legend(g, ...)",
        visualRole: "Synthesizes a unified multi-variable legend outside the subplot canvas that documents every active semantic mapping (hue colors, style markers, and size scales) without overlapping data points.",
        syntaxPrimary: `g = sns.relplot(\n    data=tips, x="total_bill", y="tip",\n    hue="smoker", size="size"\n)\nsns.move_legend(g, "upper left", bbox_to_anchor=(1, 1))`,
        syntaxAlternative: `ax = sns.scatterplot(\n    data=tips, x="total_bill", y="tip", hue="smoker"\n)\nsns.move_legend(ax, "lower right", frameon=True)`
      },
      {
        id: "despine-frame",
        num: "#12",
        name: "Spine Removal & Trimming (sns.despine)",
        category: "Aesthetics",
        objectType: "sns.despine(top=True, right=True, trim=True)",
        accessPath: "sns.despine(trim=True, offset=5)",
        visualRole: "Removes the redundant top and right Matplotlib bounding box borders ('spines') and optionally trims the surviving left and bottom axes to the exact extent of the data ticks for clean, publication-ready graphics.",
        syntaxPrimary: `g = sns.relplot(\n    data=tips, x="total_bill", y="tip"\n)\ng.despine(trim=True)`,
        syntaxAlternative: `sns.boxplot(data=tips, x="day", y="total_bill")\nsns.despine(offset=10, trim=True, left=False)`
      }
    ];

    // =========================================================================
    // 2. PROGRESSIVE CODE-TO-OUTPUT X-RAY RECIPES (5 REAL-WORLD WORKFLOWS)
    // =========================================================================
    const CODE_SNIPPETS = [
      {
        title: "Recipe 1: Multivariate Relational Plot (relplot + 5 Variables)",
        lines: [
          {
            code: "import seaborn as sns",
            targetParts: ["theme-grid"],
            revealParts: ["theme-grid"],
            explanation: "Imports Seaborn under its standard alias `sns`. Behind the scenes, Seaborn uses Matplotlib to draw figures and pandas DataFrames to organize data."
          },
          {
            code: "sns.set_theme(style='whitegrid', context='notebook')",
            targetParts: ["theme-grid", "despine-frame"],
            revealParts: ["theme-grid", "despine-frame"],
            explanation: "Activates Seaborn's 'whitegrid' theme globally, adding clean quantitative lookup gridlines and scaling fonts for notebook readability."
          },
          {
            code: "tips = sns.load_dataset('tips')",
            targetParts: ["dataframe-binding"],
            revealParts: ["theme-grid", "despine-frame", "dataframe-binding"],
            explanation: "Loads the built-in `tips` tidy DataFrame (244 rows × 7 columns: `total_bill`, `tip`, `smoker`, `day`, `time`, `size`)."
          },
          {
            code: "g = sns.relplot(data=tips, x='total_bill', y='tip', col='time',",
            targetParts: ["dataframe-binding", "facet-grid", "axes-labels"],
            revealParts: ["theme-grid", "despine-frame", "dataframe-binding", "facet-grid", "axes-labels"],
            explanation: "Initializes a Figure-Level `FacetGrid` mapping `total_bill` to X, `tip` to Y, and splitting subplots horizontally by `col='time'` (Lunch vs. Dinner)."
          },
          {
            code: "                hue='smoker', style='smoker', size='size')",
            targetParts: ["scatter-hue", "size-encoding", "semantic-legend"],
            revealParts: ["theme-grid", "despine-frame", "dataframe-binding", "facet-grid", "axes-labels", "scatter-hue", "size-encoding", "semantic-legend"],
            explanation: "Encodes three additional variables declaratively: `hue` colors points by smoking status, `style` assigns circle vs. X markers, `size` scales bubbles by party size, and Seaborn builds the external legend automatically."
          }
        ]
      },
      {
        title: "Recipe 2: Linear Regression & 95% Bootstrap CI (lmplot)",
        lines: [
          {
            code: "sns.set_theme(style='whitegrid')",
            targetParts: ["theme-grid"],
            revealParts: ["theme-grid", "dataframe-binding"],
            explanation: "Configures the figure canvas with a subtle grid so slopes and confidence bands are easy to read."
          },
          {
            code: "g = sns.lmplot(data=tips, x='total_bill', y='tip',",
            targetParts: ["dataframe-binding", "axes-labels"],
            revealParts: ["theme-grid", "dataframe-binding", "axes-labels", "despine-frame"],
            explanation: "Calls `lmplot()`, Seaborn's figure-level linear model plotter, binding `x='total_bill'` and `y='tip'`."
          },
          {
            code: "               col='time', hue='smoker', markers=['o', 'x'],",
            targetParts: ["facet-grid", "scatter-hue", "semantic-legend"],
            revealParts: ["theme-grid", "dataframe-binding", "axes-labels", "despine-frame", "facet-grid", "scatter-hue", "semantic-legend"],
            explanation: "Splits the regression into Lunch and Dinner facets (`col='time'`) and separates observations by `hue='smoker'` with distinct markers."
          },
          {
            code: "               ci=95, palette='Set2')",
            targetParts: ["reg-line", "ci-band"],
            revealParts: ["theme-grid", "dataframe-binding", "axes-labels", "despine-frame", "facet-grid", "scatter-hue", "semantic-legend", "reg-line", "ci-band"],
            explanation: "Fits separate linear regression trend lines per group (`reg-line`) and computes 95% bootstrap confidence interval bands (`ci-band`) around each line."
          }
        ]
      },
      {
        title: "Recipe 3: Distributions & 5-Number Boxplot Summary",
        lines: [
          {
            code: "import matplotlib.pyplot as plt\nimport seaborn as sns",
            targetParts: ["theme-grid"],
            revealParts: ["theme-grid", "dataframe-binding"],
            explanation: "Imports Matplotlib alongside Seaborn so we can combine axes-level distribution and boxplot summaries."
          },
          {
            code: "sns.histplot(data=tips, x='total_bill', bins=15, kde=True)",
            targetParts: ["dist-layer", "axes-labels"],
            revealParts: ["theme-grid", "dataframe-binding", "axes-labels", "dist-layer"],
            explanation: "Draws univariate frequency bars (`bins=15`) and overlays a smooth Kernel Density Estimate curve (`kde=True`) showing the probability density shape."
          },
          {
            code: "sns.boxplot(data=tips, x='total_bill', color='navy')",
            targetParts: ["dist-layer"],
            revealParts: ["theme-grid", "dataframe-binding", "axes-labels", "dist-layer", "despine-frame"],
            explanation: "Renders the 5-number statistical summary: Q1 (25%), Median (50%), Q3 (75%), 1.5× IQR whiskers, and individual outlier diamonds beyond the whiskers."
          }
        ]
      },
      {
        title: "Recipe 4: Annotated Correlation Matrix Heatmap",
        lines: [
          {
            code: "corr_matrix = tips.corr(numeric_only=True)",
            targetParts: ["dataframe-binding", "heatmap-inset"],
            revealParts: ["theme-grid", "dataframe-binding"],
            explanation: "Computes the pairwise Pearson correlation matrix (`total_bill`, `tip`, `size`) directly from the pandas DataFrame."
          },
          {
            code: "sns.heatmap(corr_matrix, annot=True, fmt='.2f',",
            targetParts: ["heatmap-inset"],
            revealParts: ["theme-grid", "dataframe-binding", "heatmap-inset"],
            explanation: "Plots the 2D matrix as a color-encoded grid and prints exact correlation coefficients (`1.00`, `0.68`, `0.60`) inside every cell via `annot=True`."
          },
          {
            code: "            cmap='coolwarm', center=0, vmin=-1, vmax=1, cbar=True)",
            targetParts: ["heatmap-inset"],
            revealParts: ["theme-grid", "dataframe-binding", "heatmap-inset"],
            explanation: "Anchors the diverging blue-to-red colormap at `center=0` over `[-1, 1]` and renders the quantitative colorbar legend (`cbar=True`)."
          }
        ]
      },
      {
        title: "Recipe 5: Publication Polish (FacetGrid Methods & despine)",
        lines: [
          {
            code: "sns.set_theme(style='ticks', font_scale=1.15)",
            targetParts: ["theme-grid"],
            revealParts: ["theme-grid", "dataframe-binding"],
            explanation: "Switches to the minimalist `ticks` style and scales up typography by 15% for publication or slide decks."
          },
          {
            code: "g = sns.relplot(data=tips, x='total_bill', y='tip', col='time', hue='smoker', size='size')",
            targetParts: ["facet-grid", "scatter-hue", "size-encoding", "semantic-legend"],
            revealParts: ["theme-grid", "dataframe-binding", "facet-grid", "scatter-hue", "size-encoding", "semantic-legend"],
            explanation: "Generates the multi-dimensional figure and stores the controlling `FacetGrid` instance in `g`."
          },
          {
            code: "g.set_axis_labels('Total Bill ($ USD)', 'Tip ($ USD)')",
            targetParts: ["axes-labels"],
            revealParts: ["theme-grid", "dataframe-binding", "facet-grid", "scatter-hue", "size-encoding", "semantic-legend", "axes-labels"],
            explanation: "Updates the X and Y axis labels cleanly across all subplots in the `FacetGrid` with a single method call."
          },
          {
            code: "g.despine(trim=True)",
            targetParts: ["despine-frame"],
            revealParts: ["theme-grid", "dataframe-binding", "facet-grid", "scatter-hue", "size-encoding", "semantic-legend", "axes-labels", "despine-frame", "reg-line", "ci-band", "dist-layer", "heatmap-inset"],
            explanation: "Removes top and right borders (`despine`) and trims the remaining spines to the outermost tick marks (`trim=True`)."
          }
        ]
      }
    ];

    // =========================================================================
    // 3. APPLICATION STATE & DOM REFERENCES
    // =========================================================================
    let currentMode = "anatomy";
    let selectedPartId = "theme-grid";
    let activeCategory = "all";
    let showBadges = true;

    // Quiz State
    let quizOrder = [];
    let quizIndex = 0;
    let quizScore = 0;
    let quizTotal = 0;
    let quizStreak = 0;
    let quizAnswered = false;

    // Code X-Ray State
    let currentSnippetIdx = 0;
    let currentLineIdx = 0;
    let buildStepByStep = true;

    const LESSON =
      typeof window !== "undefined" && window.SEABORN_LESSON
        ? window.SEABORN_LESSON
        : {};

    const lessonPartIds =
      Array.isArray(LESSON.parts) && LESSON.parts.length
        ? LESSON.parts
        : SEABORN_PARTS.map((part) => part.id);

    const lessonSnippetIndices =
      Array.isArray(LESSON.snippets) && LESSON.snippets.length
        ? LESSON.snippets
            .map((index) => Number(index))
            .filter(
              (index) =>
                Number.isInteger(index) &&
                index >= 0 &&
                index < CODE_SNIPPETS.length
            )
        : CODE_SNIPPETS.map((_, index) => index);

    if (!lessonSnippetIndices.length) lessonSnippetIndices.push(0);

    const svgElement = document.getElementById("seaborn-svg");
    const svgParts = Array.from(document.querySelectorAll(".svg-part"));
    const chipsContainer = document.getElementById("component-chips");
    const statusHover = document.getElementById("status-hover");
    const statusCoords = document.getElementById("status-coords");

    // =========================================================================
    // 4. INITIALIZATION & HELPER FUNCTIONS
    // =========================================================================
    function getPartById(id) {
      return SEABORN_PARTS.find((p) => p.id === id) || SEABORN_PARTS[0];
    }

    function lessonParts() {
      return SEABORN_PARTS.filter((part) => lessonPartIds.includes(part.id));
    }

    function updateCategoryFilterLabels() {
      const available = lessonParts();
      document.querySelectorAll(".cat-btn").forEach((btn) => {
        const category = btn.dataset.cat;
        const count =
          category === "all"
            ? available.length
            : available.filter((part) => part.category === category).length;
        btn.textContent = category === "all" ? `All (${count})` : `${category} (${count})`;
        btn.style.display = count ? "" : "none";
      });
    }

    function renderChips() {
      chipsContainer.innerHTML = "";
      const available = lessonParts();
      if (
        activeCategory !== "all" &&
        !available.some((part) => part.category === activeCategory)
      ) {
        activeCategory = "all";
        document.querySelectorAll(".cat-btn").forEach((btn) => {
          btn.classList.toggle("active", btn.dataset.cat === "all");
        });
      }

      const filtered = activeCategory === "all"
        ? available
        : available.filter((p) => p.category === activeCategory);

      const chipsTitle = document.getElementById("chips-title");
      if (chipsTitle) {
        chipsTitle.textContent = `${available.length} Interactive Seaborn Components (Click to Inspect)`;
      }
      updateCategoryFilterLabels();

      filtered.forEach((part) => {
        const btn = document.createElement("button");
        btn.className = `part-chip ${part.id === selectedPartId && currentMode === "anatomy" ? "active" : ""}`;
        btn.innerHTML = `<span class="chip-num">${part.num}</span><span>${part.name}</span>`;
        btn.addEventListener("click", () => {
          if (currentMode === "quiz") {
            handleSvgQuizClick(part.id);
          } else {
            if (currentMode !== "anatomy") switchMode("anatomy");
            selectPart(part.id);
          }
        });
        chipsContainer.appendChild(btn);
      });
    }

    function updateBadgeLabelsForMode() {
      const badgeTexts = document.querySelectorAll(".badge-text");
      badgeTexts.forEach((txt) => {
        if (currentMode === "quiz") {
          txt.textContent = `${txt.dataset.num} ?`;
        } else {
          txt.textContent = txt.dataset.label;
        }
      });

      const badges = document.querySelectorAll(".callout-badge");
      badges.forEach((b) => {
        b.style.display = showBadges ? "block" : "none";
      });
    }

    // =========================================================================
    // 5. MODE 1: VISUAL ANATOMY EXPLORER LOGIC
    // =========================================================================
    function selectPart(partId, highlightAll = false) {
      const available = lessonParts();
      if (!available.some((part) => part.id === partId)) {
        partId = available[0]?.id || partId;
      }
      selectedPartId = partId;
      const part = getPartById(partId);

      // Update SVG visual states
      svgParts.forEach((el) => {
        el.classList.remove("hidden-step", "quiz-target");
        if (highlightAll) {
          el.classList.remove("dimmed", "selected");
        } else if (el.dataset.part === partId) {
          el.classList.add("selected");
          el.classList.remove("dimmed");
        } else {
          el.classList.remove("selected");
          el.classList.add("dimmed");
        }
      });

      // Update Inspector Panel
      document.getElementById("insp-num").textContent = part.num;
      document.getElementById("insp-cat").textContent = part.category;
      document.getElementById("insp-title").textContent = part.name;
      document.getElementById("insp-role").textContent = part.visualRole;
      document.getElementById("insp-type").textContent = part.objectType;
      document.getElementById("insp-access").textContent = part.accessPath;
      document.getElementById("insp-syntax-1").textContent = part.syntaxPrimary;
      document.getElementById("insp-syntax-2").textContent = part.syntaxAlternative;

      statusHover.textContent = `Selected ${part.num}: ${part.name} — ${part.objectType}`;
      renderChips();
    }

    // =========================================================================
    // 6. MODE 2: BEGINNER TERMINOLOGY QUIZ LOGIC
    // =========================================================================
    function shuffleArray(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    function startQuiz(resetScore = false) {
      if (resetScore) {
        quizScore = 0;
        quizTotal = 0;
        quizStreak = 0;
        updateQuizScoreUI();
      }
      quizOrder = shuffleArray(lessonParts().map((p) => p.id));
      quizIndex = 0;
      loadQuizQuestion();
    }

    function updateQuizScoreUI() {
      document.getElementById("quiz-score").textContent = `Score: ${quizScore} / ${quizTotal}`;
      document.getElementById("quiz-streak").textContent = `Streak: ${quizStreak}`;
    }

    function loadQuizQuestion() {
      quizAnswered = false;
      if (quizIndex >= quizOrder.length) {
        quizOrder = shuffleArray(lessonParts().map((p) => p.id));
        quizIndex = 0;
      }

      const targetId = quizOrder[quizIndex];
      const targetPart = getPartById(targetId);

      // Spotlight target on SVG
      svgParts.forEach((el) => {
        el.classList.remove("selected", "hidden-step");
        if (el.dataset.part === targetId) {
          el.classList.add("quiz-target");
          el.classList.remove("dimmed");
        } else {
          el.classList.remove("quiz-target");
          el.classList.add("dimmed");
        }
      });

      document.getElementById("quiz-badge-indicator").textContent =
        `Target Spotlight: Callout Badge ${targetPart.num} (?) — Or Click Matching Option`;
      document.getElementById("quiz-clue").textContent =
        `"${targetPart.visualRole}"`;

      const distractors = shuffleArray(
        SEABORN_PARTS.filter((p) => p.id !== targetId)
      ).slice(0, 3);
      const options = shuffleArray([targetPart, ...distractors]);

      const optionsBox = document.getElementById("quiz-options");
      optionsBox.innerHTML = "";
      options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.className = "quiz-opt-btn";
        btn.dataset.optId = opt.id;
        btn.innerHTML = `
          <span class="opt-name">${opt.name}</span>
          <span class="opt-code">${opt.objectType}</span>
        `;
        btn.addEventListener("click", () => evaluateQuizAnswer(opt.id));
        optionsBox.appendChild(btn);
      });

      const fb = document.getElementById("quiz-feedback");
      fb.className = "quiz-feedback";
      fb.innerHTML = "";
    }

    function evaluateQuizAnswer(chosenId) {
      if (quizAnswered) return;
      quizAnswered = true;

      const targetId = quizOrder[quizIndex];
      const targetPart = getPartById(targetId);
      const isCorrect = chosenId === targetId;

      quizTotal += 1;
      if (isCorrect) {
        quizScore += 1;
        quizStreak += 1;
      } else {
        quizStreak = 0;
      }
      updateQuizScoreUI();

      const buttons = document.querySelectorAll(".quiz-opt-btn");
      buttons.forEach((btn) => {
        btn.disabled = true;
        if (btn.dataset.optId === targetId) {
          btn.classList.add("correct");
        } else if (btn.dataset.optId === chosenId && !isCorrect) {
          btn.classList.add("wrong");
        }
      });

      const fb = document.getElementById("quiz-feedback");
      fb.className = "quiz-feedback visible";
      fb.innerHTML = isCorrect
        ? `<strong style="color: var(--accent-green);">Correct!</strong> Badge <code>${targetPart.num}</code> is <strong>${targetPart.name}</strong> (<code>${targetPart.accessPath}</code>).`
        : `<strong style="color: var(--accent-coral);">Not quite!</strong> The spotlighted component (${targetPart.num}) is <strong>${targetPart.name}</strong> (<code>${targetPart.objectType}</code>).`;
    }

    function handleSvgQuizClick(clickedPartId) {
      if (currentMode !== "quiz" || quizAnswered) return;
      evaluateQuizAnswer(clickedPartId);
    }

    // =========================================================================
    // 7. MODE 3: STEP-BY-STEP CODE-TO-OUTPUT X-RAY LOGIC
    // =========================================================================
    function initCodeXRay() {
      const select = document.getElementById("snippet-select");
      select.innerHTML = "";
      lessonSnippetIndices.forEach((idx) => {
        const snip = CODE_SNIPPETS[idx];
        const opt = document.createElement("option");
        opt.value = String(idx);
        opt.textContent = snip.title;
        select.appendChild(opt);
      });

      const requestedSnippet = Number(LESSON.initialSnippet);
      currentSnippetIdx = lessonSnippetIndices.includes(requestedSnippet)
        ? requestedSnippet
        : lessonSnippetIndices[0];
      currentLineIdx = 0;
      select.value = String(currentSnippetIdx);

      select.addEventListener("change", (e) => {
        currentSnippetIdx = parseInt(e.target.value, 10);
        currentLineIdx = 0;
        renderCodeSnippet();
      });

      document.getElementById("chk-build-step").addEventListener("change", (e) => {
        buildStepByStep = e.target.checked;
        applyXRayLineState();
      });

      document.getElementById("btn-prev-line").addEventListener("click", () => {
        if (currentLineIdx > 0) {
          currentLineIdx--;
          applyXRayLineState();
        }
      });

      document.getElementById("btn-next-line").addEventListener("click", () => {
        const lines = CODE_SNIPPETS[currentSnippetIdx].lines;
        if (currentLineIdx < lines.length - 1) {
          currentLineIdx++;
          applyXRayLineState();
        }
      });

      renderCodeSnippet();
    }

    function renderCodeSnippet() {
      const snippet = CODE_SNIPPETS[currentSnippetIdx];
      const box = document.getElementById("code-lines-box");
      box.innerHTML = "";

      snippet.lines.forEach((lineObj, idx) => {
        const row = document.createElement("div");
        row.className = `code-line ${idx === currentLineIdx ? "active" : ""}`;
        row.innerHTML = `
          <span class="line-num">${idx + 1}</span>
          <span class="line-text">${escapeHtml(lineObj.code)}</span>
        `;
        row.addEventListener("click", () => {
          currentLineIdx = idx;
          applyXRayLineState();
        });
        box.appendChild(row);
      });

      applyXRayLineState();
    }

    function applyXRayLineState() {
      const snippet = CODE_SNIPPETS[currentSnippetIdx];
      const lineObj = snippet.lines[currentLineIdx];

      // Highlight active code line
      const rows = document.querySelectorAll(".code-line");
      rows.forEach((r, idx) => {
        r.classList.toggle("active", idx === currentLineIdx);
      });

      document.getElementById("xray-step-counter").textContent =
        `Line ${currentLineIdx + 1} of ${snippet.lines.length}`;
      document.getElementById("xray-line-title").textContent =
        `Line ${currentLineIdx + 1}: ${lineObj.code.split("(")[0].trim()}`;
      document.getElementById("xray-explanation").textContent = lineObj.explanation;

      // Render affected component pills
      const pillsContainer = document.getElementById("xray-affected-pills");
      pillsContainer.innerHTML = "";
      lineObj.targetParts.forEach((partId) => {
        const p = getPartById(partId);
        const span = document.createElement("span");
        span.className = "affected-pill";
        span.textContent = `${p.num} ${p.name}`;
        pillsContainer.appendChild(span);
      });

      // Synchronize SVG highlight and progressive reveal
      svgParts.forEach((el) => {
        const partId = el.dataset.part;
        el.classList.remove("quiz-target");

        const isTarget = lineObj.targetParts.includes(partId);
        const isRevealed = lineObj.revealParts.includes(partId);

        if (buildStepByStep && !isRevealed) {
          el.classList.add("hidden-step");
          el.classList.remove("selected", "dimmed");
        } else {
          el.classList.remove("hidden-step");
          if (isTarget) {
            el.classList.add("selected");
            el.classList.remove("dimmed");
          } else {
            el.classList.remove("selected");
            el.classList.add("dimmed");
          }
        }
      });

      statusHover.textContent = `Code X-Ray Step ${currentLineIdx + 1}/${snippet.lines.length}: Highlighting [${lineObj.targetParts.join(", ")}]`;
    }

    function escapeHtml(str) {
      return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }

    // =========================================================================
    // 8. MODE SWITCHING & EVENT LISTENERS
    // =========================================================================
    function switchMode(newMode) {
      currentMode = newMode;
      document.querySelectorAll(".mode-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.mode === newMode);
      });

      document.getElementById("panel-anatomy").classList.toggle("active", newMode === "anatomy");
      document.getElementById("panel-quiz").classList.toggle("active", newMode === "quiz");
      document.getElementById("panel-xray").classList.toggle("active", newMode === "xray");

      updateBadgeLabelsForMode();

      if (newMode === "anatomy") {
        selectPart(selectedPartId);
      } else if (newMode === "quiz") {
        startQuiz(false);
      } else if (newMode === "xray") {
        applyXRayLineState();
      }
      renderChips();
    }

    document.querySelectorAll(".mode-btn").forEach((btn) => {
      btn.addEventListener("click", () => switchMode(btn.dataset.mode));
    });

    // SVG Part Click & Hover Events
    svgParts.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const partId = el.dataset.part;
        if (currentMode === "quiz") {
          handleSvgQuizClick(partId);
        } else {
          if (currentMode !== "anatomy") switchMode("anatomy");
          selectPart(partId);
        }
      });

      el.addEventListener("mouseenter", () => {
        const part = getPartById(el.dataset.part);
        if (currentMode === "quiz") {
          statusHover.textContent = `Spotlight Badge ${part.num}: Click to submit this component as your answer`;
        } else {
          statusHover.textContent = `${part.num} ${part.name} — ${part.accessPath}`;
        }
      });
    });

    // Live SVG Coordinate Readout on Mousemove
    svgElement.addEventListener("mousemove", (e) => {
      const rect = svgElement.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;
      const billEst = (5 + relX * 45).toFixed(1);
      const tipEst = Math.max(1, (10 - relY * 9)).toFixed(2);
      const facetCol = relX < 0.43 ? "col='Lunch'" : relX < 0.78 ? "col='Dinner'" : "Legend / Matrix";
      statusCoords.textContent = `Data Space: (total_bill ≈ $${billEst}, tip ≈ $${tipEst}) | Region: ${facetCol}`;
    });

    // Category filter buttons
    document.querySelectorAll(".cat-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".cat-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.dataset.cat;
        renderChips();
      });
    });

    // Toolbar buttons
    document.getElementById("btn-show-all").addEventListener("click", () => {
      svgParts.forEach((el) => el.classList.remove("dimmed", "selected", "hidden-step", "quiz-target"));
      statusHover.textContent = "Showing all 12 Seaborn statistical figure layers in full brightness";
    });

    document.getElementById("btn-toggle-badges").addEventListener("click", (e) => {
      showBadges = !showBadges;
      e.target.classList.toggle("active", showBadges);
      e.target.textContent = `Callout Badges: ${showBadges ? "ON" : "OFF"}`;
      updateBadgeLabelsForMode();
    });

    // Quiz buttons
    document.getElementById("btn-next-question").addEventListener("click", () => {
      quizIndex++;
      loadQuizQuestion();
    });

    document.getElementById("btn-reset-quiz").addEventListener("click", () => {
      startQuiz(true);
    });

    // Keyboard navigation for Code X-Ray
    window.addEventListener("keydown", (e) => {
      if (currentMode !== "xray") return;
      const lines = CODE_SNIPPETS[currentSnippetIdx].lines;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        if (currentLineIdx < lines.length - 1) {
          e.preventDefault();
          currentLineIdx++;
          applyXRayLineState();
        }
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        if (currentLineIdx > 0) {
          e.preventDefault();
          currentLineIdx--;
          applyXRayLineState();
        }
      }
    });

    // Boot Application
    function initSeabornApp() {
      if (lessonPartIds.includes(LESSON.initialPart)) {
        selectedPartId = LESSON.initialPart;
      } else if (lessonPartIds.length) {
        selectedPartId = lessonPartIds[0];
      }
      initCodeXRay();
      switchMode(LESSON.mode || "anatomy");
      if (LESSON.prompt) statusHover.innerHTML = LESSON.prompt;
    }

    window.initSeabornApp = initSeabornApp;
