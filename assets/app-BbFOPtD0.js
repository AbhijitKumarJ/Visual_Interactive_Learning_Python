        // =========================================================================
        // 1. COMPREHENSIVE MATPLOTLIB ANATOMY DATA STORE
        // =========================================================================
        const MPL_PARTS = {
            'figure': {
                id: 'figure',
                name: 'Figure',
                beginnerSubtitle: 'The entire outer window, page, or image canvas',
                category: 'Container Artist',
                isContainer: true,
                zorder: '0.0 (Root)',
                icon: 'ph-app-window',
                artistClass: 'matplotlib.figure.Figure',
                storedIn: 'Root object (Background: fig.patch)',
                bbox: { x: 4, y: 4, w: 812, h: 572 },
                visualDesc: 'The outermost rectangular boundary (light gray dashed border here) that holds one or more subplots (Axes), suptitles, and figure-level legends.',
                deepDesc: 'The Figure is the top-level Artist container. It does not draw data directly; instead, it manages child Axes in fig.axes and owns a background Rectangle artist called fig.patch. When saving a PNG or PDF, the Figure coordinates the Renderer across the entire page.',
                hierarchy: ['Figure (fig)', 'fig.patch (Rectangle)'],
                code: `# Object-Oriented (Explicit)
fig, ax = plt.subplots(figsize=(8, 5), dpi=100)
fig.patch.set_facecolor('#f8fafc')  # Outer background color

# Pyplot (Implicit)
plt.figure(figsize=(8, 5), facecolor='#f8fafc')`
            },
            'suptitle': {
                id: 'suptitle',
                name: 'Figure Suptitle',
                beginnerSubtitle: 'Centered overarching heading across the whole Figure window',
                category: 'Primitive Artist (Text)',
                isContainer: false,
                zorder: '3.0',
                icon: 'ph-text-h-one',
                artistClass: 'matplotlib.text.Text',
                storedIn: 'fig.texts (or fig._suptitle)',
                bbox: { x: 230, y: 10, w: 360, h: 32 },
                visualDesc: 'The top-most bold title centered at the very top of the entire window, sitting above individual subplot titles.',
                deepDesc: 'Unlike ax.set_title() which belongs to a single subplot, fig.suptitle() places a Text artist in Figure coordinates (where 0.5, 0.98 is top-center of the whole window). Essential when you have a 2x2 grid of subplots sharing one main heading.',
                hierarchy: ['Figure (fig)', 'fig.texts', 'Text (suptitle)'],
                code: `# Object-Oriented
fig.suptitle("Anatomy of a Matplotlib Figure", fontsize=15, fontweight='bold')

# Pyplot
plt.suptitle("Anatomy of a Matplotlib Figure")`
            },
            'axes': {
                id: 'axes',
                name: 'Axes (Subplot Region)',
                beginnerSubtitle: 'What you visually think of as "a plot" — the inner data box',
                category: 'Container Artist',
                isContainer: true,
                zorder: '0.0 (ax.patch)',
                icon: 'ph-frame-corners',
                artistClass: 'matplotlib.axes.Axes',
                storedIn: 'fig.axes[0] (Background: ax.patch)',
                bbox: { x: 110, y: 90, w: 640, h: 390 },
                visualDesc: 'The white interior plotting area where data coordinates (x, y) live and where curves, scatter points, and bars are drawn.',
                deepDesc: 'The center of the Matplotlib universe! Do not confuse Axes (the whole plotting area) with Axis (just the x or y number line). An Axes contains ax.lines, ax.patches, ax.collections, ax.texts, plus ax.xaxis and ax.yaxis, and maps data coordinates to screen pixels via ax.transData.',
                hierarchy: ['Figure (fig)', 'fig.axes[0] (Axes)', 'ax.patch (Rectangle)'],
                code: `# Object-Oriented (Recommended)
fig, ax = plt.subplots()
ax.set_facecolor('#ffffff')       # Shortcut for ax.patch.set_facecolor()
ax.set_xlim(0, 4)                 # Control X data limits
ax.set_ylim(0, 4)                 # Control Y data limits`
            },
            'title': {
                id: 'title',
                name: 'Title (Axes Title)',
                beginnerSubtitle: 'The heading attached directly above a specific plot (Axes)',
                category: 'Primitive Artist (Text)',
                isContainer: false,
                zorder: '3.0',
                icon: 'ph-text-t',
                artistClass: 'matplotlib.text.Text',
                storedIn: 'ax.title',
                bbox: { x: 280, y: 52, w: 300, h: 34 },
                visualDesc: 'The large bold title ("Signal Response Over Time") positioned immediately above the top spine of the Axes.',
                deepDesc: 'Each Axes instance actually pre-allocates three title Text artists: ax.title (center), ax._left_title, and ax._right_title. Calling ax.set_title() mutates the Text string and marks the artist stale = True.',
                hierarchy: ['Figure', 'Axes (ax)', 'ax.title (Text)'],
                code: `# Object-Oriented
ax.set_title("Signal Response Over Time", fontsize=16, pad=12)

# Pyplot
plt.title("Signal Response Over Time")`
            },
            'line': {
                id: 'line',
                name: 'Line (Line2D Plot)',
                beginnerSubtitle: 'Continuous curves or connected data segments drawn by plot()',
                category: 'Primitive Artist',
                isContainer: false,
                zorder: '2.0',
                icon: 'ph-chart-line',
                artistClass: 'matplotlib.lines.Line2D',
                storedIn: 'ax.lines',
                bbox: { x: 180, y: 104, w: 500, h: 366 },
                visualDesc: 'The smooth Blue signal and Red signal curves connecting (x, y) data coordinates across the plotting box.',
                deepDesc: 'When you call ax.plot(x, y), Matplotlib converts your arrays into a Line2D primitive, binds its coordinate transform to ax.transData, clips it to ax.bbox, appends it to ax.lines, and recalculates ax.dataLim for autoscaling.',
                hierarchy: ['Figure', 'Axes (ax)', 'ax.lines', 'Line2D'],
                code: `# Object-Oriented
line1, = ax.plot(x, y_blue, color='#2563eb', linewidth=3, label='Blue signal')
line2, = ax.plot(x, y_red, color='#e11d48', linewidth=2.5, label='Red signal')

# Modify an existing Line2D later without redrawing from scratch:
line1.set_linestyle('--')`
            },
            'markers': {
                id: 'markers',
                name: 'Markers (Scatter Plot)',
                beginnerSubtitle: 'Individual symbols (circles, squares, dots) at discrete (x, y) points',
                category: 'Primitive Collection',
                isContainer: false,
                zorder: '2.5',
                icon: 'ph-dots-six',
                artistClass: 'matplotlib.collections.PathCollection',
                storedIn: 'ax.collections',
                bbox: { x: 205, y: 200, w: 460, h: 180 },
                visualDesc: 'The circular white-filled dots with dark outlines scattered across the center of the plot.',
                deepDesc: 'Markers can be drawn either via ax.plot(x, y, "o") (inside a Line2D) or via ax.scatter(x, y) which returns a vectorized PathCollection stored in ax.collections. PathCollection renders thousands of points in a single C++ pass without creating thousands of separate Python Artist objects.',
                hierarchy: ['Figure', 'Axes (ax)', 'ax.collections', 'PathCollection'],
                code: `# Using ax.scatter (creates a fast PathCollection in ax.collections)
pts = ax.scatter(x_pts, y_pts, s=50, facecolor='white', edgecolor='black', lw=1.5)

# Or adding markers directly to a Line2D:
ax.plot(x, y, marker='o', markerfacecolor='white', markeredgecolor='black')`
            },
            'grid': {
                id: 'grid',
                name: 'Grid (Grid Lines)',
                beginnerSubtitle: 'Dashed reference lines extending across the plot from tick positions',
                category: 'Primitive Artist (Line2D)',
                isContainer: false,
                zorder: '0.5 (Behind data)',
                icon: 'ph-grid-four',
                artistClass: 'matplotlib.lines.Line2D (inside Tick)',
                storedIn: 'ax.xaxis.majorTicks[i].gridline',
                bbox: { x: 110, y: 90, w: 640, h: 390 },
                visualDesc: 'The vertical and horizontal dashed gray lines crossing the interior of the Axes aligned with major numbers (1, 2, 3).',
                deepDesc: 'Internally, grid lines are not a separate grid object! Every Tick container inside ax.xaxis and ax.yaxis owns a gridline (a Line2D instance). Calling ax.grid(True) iterates over the Tick objects and toggles their gridline visibility on.',
                hierarchy: ['Figure', 'Axes', 'XAxis / YAxis', 'Tick', 'tick.gridline (Line2D)'],
                code: `# Object-Oriented
ax.grid(True, which='major', linestyle='--', color='#cbd5e1', alpha=0.8)

# Or enable minor grid lines too:
ax.minorticks_on()
ax.grid(True, which='minor', linestyle=':', alpha=0.4)`
            },
            'spines': {
                id: 'spines',
                name: 'Spines (Axes Borders)',
                beginnerSubtitle: 'The 4 border lines (top, bottom, left, right) framing the plot area',
                category: 'Primitive Artist (Patch/Path)',
                isContainer: false,
                zorder: '2.5',
                icon: 'ph-bounding-box',
                artistClass: 'matplotlib.spines.Spine',
                storedIn: "ax.spines['top' | 'bottom' | 'left' | 'right']",
                bbox: { x: 106, y: 86, w: 648, h: 398 },
                visualDesc: 'The four solid black border lines enclosing the data area on the left, bottom, right, and top edges.',
                deepDesc: 'Spines are specialized Patch subclasses that connect the axis tick marks and mark the boundaries of the data area. A very popular clean styling pattern is hiding the top and right spines via ax.spines[["top", "right"]].set_visible(False).',
                hierarchy: ['Figure', 'Axes (ax)', 'ax.spines (dict)', 'Spine'],
                code: `# Hide top and right borders for a clean publication look
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)

# Style bottom and left spines
ax.spines['left'].set_linewidth(1.5)
ax.spines['bottom'].set_color('#0f172a')`
            },
            'major-ticks': {
                id: 'major-ticks',
                name: 'Major Ticks',
                beginnerSubtitle: 'Primary graduation marks sticking out from the axis spine',
                category: 'Container / Line2D',
                isContainer: true,
                zorder: '2.01',
                icon: 'ph-ruler',
                artistClass: 'matplotlib.axis.XTick / YTick',
                storedIn: 'ax.xaxis.majorTicks / ax.yaxis.majorTicks',
                bbox: { x: 94, y: 86, w: 660, h: 410 },
                visualDesc: 'The longer black dash marks along the left and bottom borders at whole numbers (0, 1, 2, 3, 4).',
                deepDesc: 'Positions of major ticks are calculated dynamically by a Locator (default: AutoLocator) inside ax.xaxis and ax.yaxis. Each Tick container holds tick1line (the little mark), tick2line (opposite side), gridline, and label1.',
                hierarchy: ['Figure', 'Axes', 'XAxis / YAxis', 'Major XTick / YTick', 'tick1line (Line2D)'],
                code: `# Customize major tick length, width, and direction
ax.tick_params(axis='both', which='major', length=7, width=1.8, direction='out')

# Explicitly set major tick positions
ax.set_xticks([0, 1, 2, 3, 4])
ax.set_yticks([0, 1, 2, 3, 4])`
            },
            'minor-ticks': {
                id: 'minor-ticks',
                name: 'Minor Ticks',
                beginnerSubtitle: 'Smaller subdivision marks between major ticks',
                category: 'Container / Line2D',
                isContainer: true,
                zorder: '2.01',
                icon: 'ph-sliders',
                artistClass: 'matplotlib.axis.XTick / YTick (minor)',
                storedIn: 'ax.xaxis.minorTicks / ax.yaxis.minorTicks',
                bbox: { x: 99, y: 110, w: 620, h: 380 },
                visualDesc: 'The shorter, finer tick marks located at 0.25, 0.50, 0.75 intervals between the main whole numbers.',
                deepDesc: 'Minor ticks are controlled by a minor Locator (e.g., AutoMinorLocator or MultipleLocator(0.25)). By default on linear plots, minor ticks are turned off unless you call ax.minorticks_on() or assign a minor locator.',
                hierarchy: ['Figure', 'Axes', 'XAxis / YAxis', 'Minor XTick / YTick', 'tick1line'],
                code: `from matplotlib.ticker import AutoMinorLocator

# Turn on minor ticks and customize their size
ax.minorticks_on()
ax.xaxis.set_minor_locator(AutoMinorLocator(4))
ax.tick_params(axis='both', which='minor', length=4, color='#334155')`
            },
            'major-ticklabels': {
                id: 'major-ticklabels',
                name: 'Major Tick Labels',
                beginnerSubtitle: 'The primary numbers or text strings next to each major tick mark',
                category: 'Primitive Artist (Text)',
                isContainer: false,
                zorder: '3.0',
                icon: 'ph-hash',
                artistClass: 'matplotlib.text.Text',
                storedIn: 'ax.xaxis.get_majorticklabels()',
                bbox: { x: 74, y: 80, w: 685, h: 440 },
                visualDesc: 'The bold whole numbers (0, 1, 2, 3, 4) printed along the left Y-axis and bottom X-axis.',
                deepDesc: 'Tick numbers are converted into strings by a Formatter (like ScalarFormatter or StrMethodFormatter) managed by the Axis. Every Tick container holds a Text primitive in tick.label1.',
                hierarchy: ['Figure', 'Axes', 'XAxis / YAxis', 'Tick', 'label1 (Text)'],
                code: `# Format tick labels or change their font size / rotation
ax.tick_params(axis='both', which='major', labelsize=11)

# Or use a Formatter (e.g. add units or decimals):
ax.xaxis.set_major_formatter('{x:.0f}')`
            },
            'minor-ticklabels': {
                id: 'minor-ticklabels',
                name: 'Minor Tick Labels',
                beginnerSubtitle: 'Smaller secondary numbers printed under minor tick subdivisions',
                category: 'Primitive Artist (Text)',
                isContainer: false,
                zorder: '3.0',
                icon: 'ph-number-circle-two',
                artistClass: 'matplotlib.text.Text',
                storedIn: 'ax.xaxis.get_minorticklabels()',
                bbox: { x: 132, y: 490, w: 595, h: 18 },
                visualDesc: 'The smaller gray decimal numbers (0.25, 0.50, 0.75...) along the bottom X-axis between major numbers.',
                deepDesc: 'Usually hidden by NullFormatter() to avoid visual clutter, minor tick labels can be enabled by assigning a FormatStrFormatter or ScalarFormatter to ax.xaxis.set_minor_formatter().',
                hierarchy: ['Figure', 'Axes', 'XAxis', 'Minor XTick', 'label1 (Text)'],
                code: `from matplotlib.ticker import FormatStrFormatter

# Display 2-decimal labels on minor X ticks
ax.xaxis.set_minor_formatter(FormatStrFormatter("%.2f"))
ax.tick_params(axis='x', which='minor', labelsize=8, labelcolor='#64748b')`
            },
            'xlabel': {
                id: 'xlabel',
                name: 'X Axis Label',
                beginnerSubtitle: 'The title describing what variable and unit the horizontal X-axis measures',
                category: 'Primitive Artist (Text)',
                isContainer: false,
                zorder: '3.0',
                icon: 'ph-arrows-horizontal',
                artistClass: 'matplotlib.text.Text',
                storedIn: 'ax.xaxis.label',
                bbox: { x: 345, y: 526, w: 170, h: 28 },
                visualDesc: 'The horizontal text ("X axis label (Time s)") centered underneath the bottom tick labels.',
                deepDesc: 'Stored as a Text instance in ax.xaxis.label. Its vertical position automatically adjusts below the lowest tick label bounding box during the draw() layout pass.',
                hierarchy: ['Figure', 'Axes', 'XAxis (ax.xaxis)', 'ax.xaxis.label (Text)'],
                code: `# Object-Oriented
ax.set_xlabel("X axis label (Time s)", fontsize=12, fontweight='bold', labelpad=8)

# Pyplot
plt.xlabel("X axis label (Time s)")`
            },
            'ylabel': {
                id: 'ylabel',
                name: 'Y Axis Label',
                beginnerSubtitle: 'The rotated title describing what variable the vertical Y-axis measures',
                category: 'Primitive Artist (Text)',
                isContainer: false,
                zorder: '3.0',
                icon: 'ph-arrows-vertical',
                artistClass: 'matplotlib.text.Text',
                storedIn: 'ax.yaxis.label',
                bbox: { x: 34, y: 205, w: 34, h: 160 },
                visualDesc: 'The 90-degree rotated text ("Y axis label (Voltage mV)") along the far left margin of the plot.',
                deepDesc: 'Stored as a Text artist in ax.yaxis.label with rotation=90 by default. When you call ax.set_ylabel(), Matplotlib delegates the call to ax.yaxis.set_label_text().',
                hierarchy: ['Figure', 'Axes', 'YAxis (ax.yaxis)', 'ax.yaxis.label (Text)'],
                code: `# Object-Oriented
ax.set_ylabel("Y axis label (Voltage mV)", fontsize=12, fontweight='bold')

# Pyplot
plt.ylabel("Y axis label (Voltage mV)")`
            },
            'legend': {
                id: 'legend',
                name: 'Legend',
                beginnerSubtitle: 'The key box matching line colors/markers to their dataset names',
                category: 'Container Artist',
                isContainer: true,
                zorder: '5.0 (Topmost)',
                icon: 'ph-list-bullets',
                artistClass: 'matplotlib.legend.Legend',
                storedIn: 'ax.get_legend() (or ax.legend_)',
                bbox: { x: 592, y: 100, w: 146, h: 70 },
                visualDesc: 'The bordered box in the upper-right corner showing "Blue signal" and "Red signal" next to color samples.',
                deepDesc: 'Legend is a high-zorder Container Artist (zorder=5) so it floats above lines and grids. It inspects child artists in ax.lines/ax.collections that have a label="..." property, builds proxy handles, and wraps them in a FancyBboxPatch frame.',
                hierarchy: ['Figure', 'Axes (ax)', 'Legend (ax.legend_)', 'FancyBboxPatch + Texts + Lines'],
                code: `# Automatically collects artists that have label='...'
ax.plot(x, y1, label='Blue signal')
ax.plot(x, y2, label='Red signal')
ax.legend(loc='upper right', frameon=True, facecolor='white', framealpha=0.9)`
            },
            'annotation': {
                id: 'annotation',
                name: 'Annotation (Callout)',
                beginnerSubtitle: 'Text box with an optional arrow pointing to a specific (x, y) data feature',
                category: 'Primitive Artist (Text)',
                isContainer: false,
                zorder: '3.0',
                icon: 'ph-chat-centered-text',
                artistClass: 'matplotlib.text.Annotation',
                storedIn: 'ax.texts',
                bbox: { x: 440, y: 208, w: 128, h: 100 },
                visualDesc: 'The amber callout box ("Local Minimum") with a black arrow pointing to the dip in the curve.',
                deepDesc: 'Subclasses Text and combines two coordinate systems: xy (the point being annotated, usually in data coordinates) and xytext (where the label sits), connected by a FancyArrowPatch created when arrowprops is provided.',
                hierarchy: ['Figure', 'Axes (ax)', 'ax.texts', 'Annotation (Text + FancyArrowPatch)'],
                code: `ax.annotate(
    "Local Minimum",
    xy=(2.1, 1.75),        # Arrow tip in data coordinates
    xytext=(2.45, 2.65),   # Text box location
    arrowprops=dict(arrowstyle="->", lw=1.5, color='black'),
    bbox=dict(boxstyle="round,pad=0.3", fc="#fef3c7", ec="#f59e0b")
)`
            },
            'patch': {
                id: 'patch',
                name: 'Patch / Shaded Region',
                beginnerSubtitle: '2D filled geometric shape or shaded confidence band (Polygon / Rectangle)',
                category: 'Primitive Artist (Patch/Collection)',
                isContainer: false,
                zorder: '1.0',
                icon: 'ph-Selection-background',
                artistClass: 'matplotlib.collections.PolyCollection / Patch',
                storedIn: 'ax.collections / ax.patches',
                bbox: { x: 185, y: 298, w: 490, h: 175 },
                visualDesc: 'The translucent pink shaded confidence band surrounding the lower Red signal curve.',
                deepDesc: 'In Matplotlib, any 2D filled region with a facecolor and edgecolor is a Patch (like Rectangle bars in histograms) or a PolyCollection (created by ax.fill_between). With default zorder=1.0, patches render above grid lines (0.5) but behind lines (2.0).',
                hierarchy: ['Figure', 'Axes (ax)', 'ax.collections / ax.patches', 'PolyCollection / Polygon'],
                code: `# Shade confidence interval around the red curve
ax.fill_between(
    x, y_red - 0.25, y_red + 0.25,
    color='#fecdd3', alpha=0.55, label='Confidence Band'
)`
            }
        };

        // Order of pills in the bottom bar
        const PART_ORDER = [
            'figure', 'axes', 'title', 'suptitle', 'line', 'markers',
            'spines', 'major-ticks', 'minor-ticks', 'major-ticklabels',
            'minor-ticklabels', 'xlabel', 'ylabel', 'grid', 'legend',
            'annotation', 'patch'
        ];

        // =========================================================================
        // 2. PROGRESSIVE CODE SNIPPETS DATA STORE (5 Snippets)
        // =========================================================================
        const CODE_SNIPPETS = [
            {
                id: 0,
                tabLabel: '1. Core Setup',
                title: '1. Foundations: Figure, Axes & Basic Plotting',
                subtitle: 'See how each line builds the canvas, plotting box, and primary curves',
                lines: [
                    {
                        code: `import matplotlib.pyplot as plt`,
                        targets: [],
                        visibleUpTo: [],
                        targetLabel: 'Engine Bootstrap',
                        beginnerDesc: 'Imports the pyplot scripting interface so we can create figures and axes.',
                        internalDesc: 'Loads matplotlibrc defaults into rcParams and initializes the global figure manager (_pylab_helpers.Gcf).'
                    },
                    {
                        code: `fig, ax = plt.subplots(figsize=(8, 5), dpi=100)`,
                        targets: ['figure', 'axes', 'spines'],
                        visibleUpTo: ['figure', 'axes', 'spines', 'major-ticks', 'major-ticklabels'],
                        targetLabel: 'Figure + Axes + Spines',
                        beginnerDesc: 'Creates the outer window (fig) and the inner plotting box (ax) with default borders and 0–1 ticks.',
                        internalDesc: 'Instantiates Figure (with fig.patch) and appends a rectilinear Axes (with ax.patch, 4 Spines, XAxis, and YAxis) into fig.axes.'
                    },
                    {
                        code: `ax.plot(x, y_blue, color='#2563eb', lw=3.5, label='Blue signal')`,
                        targets: ['line'],
                        visibleUpTo: ['figure', 'axes', 'spines', 'major-ticks', 'major-ticklabels', 'line'],
                        targetLabel: 'Line2D (ax.lines)',
                        beginnerDesc: 'Draws the primary smooth blue signal curve across the Axes data area.',
                        internalDesc: 'Creates a matplotlib.lines.Line2D primitive, binds its transform to ax.transData, appends it to ax.lines, and updates ax.dataLim.'
                    },
                    {
                        code: `ax.set_title("Signal Response Over Time", fontsize=16)`,
                        targets: ['title'],
                        visibleUpTo: ['figure', 'axes', 'spines', 'major-ticks', 'major-ticklabels', 'line', 'title'],
                        targetLabel: 'Axes Title (ax.title)',
                        beginnerDesc: 'Places the main plot heading centered directly above the Axes border.',
                        internalDesc: 'Updates the Text primitive stored in ax.title and marks the Axes stale = True.'
                    },
                    {
                        code: `ax.set_xlabel("X axis label (Time s)")`,
                        targets: ['xlabel'],
                        visibleUpTo: ['figure', 'axes', 'spines', 'major-ticks', 'major-ticklabels', 'line', 'title', 'xlabel'],
                        targetLabel: 'X Axis Label',
                        beginnerDesc: 'Adds the horizontal description label underneath the bottom X-axis numbers.',
                        internalDesc: 'Sets the string on the Text artist located at ax.xaxis.label.'
                    },
                    {
                        code: `ax.set_ylabel("Y axis label (Voltage mV)")`,
                        targets: ['ylabel'],
                        visibleUpTo: ['figure', 'axes', 'spines', 'major-ticks', 'major-ticklabels', 'line', 'title', 'xlabel', 'ylabel'],
                        targetLabel: 'Y Axis Label',
                        beginnerDesc: 'Adds the vertical 90°-rotated label along the left Y-axis.',
                        internalDesc: 'Sets the string on the Text artist located at ax.yaxis.label.'
                    }
                ]
            },
            {
                id: 1,
                tabLabel: '2. Data Layers',
                title: '2. Multi-Layer Data: Lines, Scatter & Confidence Bands',
                subtitle: 'How Matplotlib stacks patches (zorder=1), lines (zorder=2), and markers',
                lines: [
                    {
                        code: `fig, ax = plt.subplots(figsize=(8, 5))`,
                        targets: ['figure', 'axes'],
                        visibleUpTo: ['figure', 'axes', 'spines', 'major-ticks', 'major-ticklabels'],
                        targetLabel: 'Figure & Axes Containers',
                        beginnerDesc: 'Initializes the Figure canvas and Axes plotting coordinate frame.',
                        internalDesc: 'Allocates fig.patch and ax.patch at zorder=0.0.'
                    },
                    {
                        code: `ax.fill_between(x, y_red - 0.25, y_red + 0.25, color='#fecdd3', alpha=0.55)`,
                        targets: ['patch'],
                        visibleUpTo: ['figure', 'axes', 'spines', 'major-ticks', 'major-ticklabels', 'patch'],
                        targetLabel: 'PolyCollection (Shaded Band)',
                        beginnerDesc: 'Draws the soft pink shaded tolerance region before the curves.',
                        internalDesc: 'Creates a PolyCollection artist in ax.collections with zorder=1.0 so it stays behind lines and text.'
                    },
                    {
                        code: `ax.plot(x, y_blue, color='#2563eb', lw=3.5, label='Blue signal')`,
                        targets: ['line'],
                        visibleUpTo: ['figure', 'axes', 'spines', 'major-ticks', 'major-ticklabels', 'patch', 'line'],
                        targetLabel: 'Line2D (Blue & Red Curves)',
                        beginnerDesc: 'Plots the continuous signal trajectories on top of the shaded region.',
                        internalDesc: 'Appends Line2D primitives to ax.lines with default zorder=2.0.'
                    },
                    {
                        code: `ax.scatter(x_pts, y_pts, s=50, fc='white', ec='#0f172a', lw=1.8)`,
                        targets: ['markers'],
                        visibleUpTo: ['figure', 'axes', 'spines', 'major-ticks', 'major-ticklabels', 'patch', 'line', 'markers'],
                        targetLabel: 'Markers (PathCollection)',
                        beginnerDesc: 'Draws discrete circular markers at each sampled noisy measurement point.',
                        internalDesc: 'Instantiates a vectorized PathCollection in ax.collections, rendering all circles in a single C-level pass.'
                    },
                    {
                        code: `ax.legend(loc='upper right', frameon=True)`,
                        targets: ['legend'],
                        visibleUpTo: ['figure', 'axes', 'spines', 'major-ticks', 'major-ticklabels', 'patch', 'line', 'markers', 'legend'],
                        targetLabel: 'Legend (zorder=5.0)',
                        beginnerDesc: 'Builds the legend box in the top-right corner matching colors to signal names.',
                        internalDesc: 'Creates a Legend container at zorder=5.0 so it floats cleanly above all data primitives.'
                    }
                ]
            },
            {
                id: 2,
                tabLabel: '3. Ticks & Grid',
                title: '3. Precision Axes: Major/Minor Ticks, Formatters & Grids',
                subtitle: 'Controlling XAxis and YAxis Locators, Formatters, and Tick containers',
                lines: [
                    {
                        code: `ax.set_xlim(0, 4); ax.set_ylim(0, 4)`,
                        targets: ['axes', 'spines'],
                        visibleUpTo: ['figure', 'axes', 'spines', 'line', 'markers'],
                        targetLabel: 'View Limits (ax.viewLim)',
                        beginnerDesc: 'Locks the X and Y coordinate ranges from 0 to 4.',
                        internalDesc: 'Updates ax.viewLim and invalidates the ax.transData affine transformation matrix.'
                    },
                    {
                        code: `ax.set_xticks([0, 1, 2, 3, 4]); ax.set_yticks([0, 1, 2, 3, 4])`,
                        targets: ['major-ticks', 'major-ticklabels'],
                        visibleUpTo: ['figure', 'axes', 'spines', 'line', 'markers', 'major-ticks', 'major-ticklabels'],
                        targetLabel: 'Major Ticks & Labels',
                        beginnerDesc: 'Places primary graduation marks and bold whole numbers at 0, 1, 2, 3, and 4.',
                        internalDesc: 'Installs a FixedLocator on ax.xaxis and ax.yaxis, generating XTick and YTick containers.'
                    },
                    {
                        code: `ax.minorticks_on()`,
                        targets: ['minor-ticks'],
                        visibleUpTo: ['figure', 'axes', 'spines', 'line', 'markers', 'major-ticks', 'major-ticklabels', 'minor-ticks'],
                        targetLabel: 'Minor Ticks (Subdivisions)',
                        beginnerDesc: 'Adds smaller subdivision tick marks at every 0.25 interval along both axes.',
                        internalDesc: 'Assigns an AutoMinorLocator to ax.xaxis and ax.yaxis, populating ax.xaxis.minorTicks.'
                    },
                    {
                        code: `ax.xaxis.set_minor_formatter(FormatStrFormatter("%.2f"))`,
                        targets: ['minor-ticklabels'],
                        visibleUpTo: ['figure', 'axes', 'spines', 'line', 'markers', 'major-ticks', 'major-ticklabels', 'minor-ticks', 'minor-ticklabels'],
                        targetLabel: 'Minor Tick Labels',
                        beginnerDesc: 'Prints the smaller decimal labels (0.25, 0.50, 0.75) underneath the minor X-axis ticks.',
                        internalDesc: 'Replaces the default NullFormatter on minor ticks with a 2-decimal string formatter.'
                    },
                    {
                        code: `ax.grid(True, which='major', linestyle='--', color='#cbd5e1')`,
                        targets: ['grid'],
                        visibleUpTo: ['figure', 'axes', 'spines', 'line', 'markers', 'major-ticks', 'major-ticklabels', 'minor-ticks', 'minor-ticklabels', 'grid'],
                        targetLabel: 'Major Grid Lines (zorder=0.5)',
                        beginnerDesc: 'Turns on the dashed alignment grid lines extending across the plot from major ticks.',
                        internalDesc: 'Sets visible=True on the tick.gridline (Line2D) inside each major Tick container.'
                    }
                ]
            },
            {
                id: 3,
                tabLabel: '4. Annotations',
                title: '4. Typography & Callouts: Suptitle, Titles & Annotations',
                subtitle: 'How Matplotlib positions text in Figure space, Axes space, and Data space',
                lines: [
                    {
                        code: `fig.suptitle("Anatomy of a Matplotlib Figure", fontsize=15, weight='bold')`,
                        targets: ['suptitle'],
                        visibleUpTo: ['figure', 'axes', 'spines', 'line', 'major-ticks', 'major-ticklabels', 'suptitle'],
                        targetLabel: 'Figure Suptitle (fig.texts)',
                        beginnerDesc: 'Adds an overarching heading at the top of the whole Figure window.',
                        internalDesc: 'Uses fig.transFigure coordinates (0.5, 0.98) so it stays centered regardless of subplot count.'
                    },
                    {
                        code: `ax.set_title("Signal Response Over Time", fontsize=18, pad=12)`,
                        targets: ['title'],
                        visibleUpTo: ['figure', 'axes', 'spines', 'line', 'major-ticks', 'major-ticklabels', 'suptitle', 'title'],
                        targetLabel: 'Axes Title (ax.title)',
                        beginnerDesc: 'Sets the title belonging specifically to this Axes plotting box.',
                        internalDesc: 'Uses blended Axes coordinates (x=0.5 centered horizontally, y=1.0 + pad above top spine).'
                    },
                    {
                        code: `ax.set_xlabel("X axis label (Time s)"); ax.set_ylabel("Y axis label (Voltage mV)")`,
                        targets: ['xlabel', 'ylabel'],
                        visibleUpTo: ['figure', 'axes', 'spines', 'line', 'major-ticks', 'major-ticklabels', 'suptitle', 'title', 'xlabel', 'ylabel'],
                        targetLabel: 'Axis Labels (X & Y)',
                        beginnerDesc: 'Labels both coordinate axes with variable names and measurement units.',
                        internalDesc: 'Mutates ax.xaxis.label and ax.yaxis.label Text primitives.'
                    },
                    {
                        code: `ax.annotate("Local Minimum", xy=(2.1, 1.75), xytext=(2.45, 2.65), arrowprops=...)`,
                        targets: ['annotation'],
                        visibleUpTo: ['figure', 'axes', 'spines', 'line', 'major-ticks', 'major-ticklabels', 'suptitle', 'title', 'xlabel', 'ylabel', 'annotation'],
                        targetLabel: 'Annotation + Arrow Patch',
                        beginnerDesc: 'Places a callout box with an arrow pointing directly at the dip in the curve.',
                        internalDesc: 'Creates an Annotation artist in ax.texts combining data coordinates (xy) with a FancyArrowPatch.'
                    }
                ]
            },
            {
                id: 4,
                tabLabel: '5. Direct Artist API',
                title: '5. Under the Hood: Direct Artist & Container Inspection',
                subtitle: 'Modifying existing primitives & patches directly via the Object-Oriented tree',
                lines: [
                    {
                        code: `fig.patch.set_facecolor('#f8fafc')`,
                        targets: ['figure'],
                        visibleUpTo: PART_ORDER,
                        targetLabel: 'fig.patch (Rectangle)',
                        beginnerDesc: 'Directly colors the background Rectangle of the outer Figure window.',
                        internalDesc: 'Mutates fig.patch._facecolor and triggers fig.stale = True.'
                    },
                    {
                        code: `ax.patch.set_facecolor('#ffffff')`,
                        targets: ['axes'],
                        visibleUpTo: PART_ORDER,
                        targetLabel: 'ax.patch (Rectangle)',
                        beginnerDesc: 'Directly colors the interior data area background Rectangle of the Axes.',
                        internalDesc: 'ax.set_facecolor() is simply a helper wrapper that mutates ax.patch.'
                    },
                    {
                        code: `ax.spines[['top', 'right', 'left', 'bottom']].set_linewidth(2.0)`,
                        targets: ['spines'],
                        visibleUpTo: PART_ORDER,
                        targetLabel: 'ax.spines Dict',
                        beginnerDesc: 'Accesses the Spine border objects directly to thicken the plot frame.',
                        internalDesc: 'Iterates over the Spine artists in ax.spines and updates their stroke width.'
                    },
                    {
                        code: `ax.lines[0].set_color('#2563eb')  # Inspect first Line2D`,
                        targets: ['line'],
                        visibleUpTo: PART_ORDER,
                        targetLabel: 'ax.lines[0] (Line2D)',
                        beginnerDesc: 'Reaches directly into the ax.lines container list to update the curve color.',
                        internalDesc: 'Demonstrates that every plotted line lives inside ax.lines and can be mutated in place without re-plotting.'
                    },
                    {
                        code: `for label in ax.get_xticklabels(): label.set_fontweight('bold')`,
                        targets: ['major-ticklabels'],
                        visibleUpTo: PART_ORDER,
                        targetLabel: 'Tick Text Primitives',
                        beginnerDesc: 'Loops over the Text objects of the X-axis tick labels to make them bold.',
                        internalDesc: 'Queries ax.xaxis.get_majorticklabels() and mutates each Text artist in place.'
                    }
                ]
            }
        ];

        // =========================================================================
        // 3. APPLICATION STATE
        // =========================================================================
        let currentMode = 'explore'; // 'explore' | 'quiz' | 'code'
        let selectedPartId = 'axes';
        let hoveredPartId = null;
        let showCalloutPins = true;
        let showContainerMode = false;

        // Quiz State
        let quizTargetId = null;
        let quizScore = 0;
        let quizTotal = 0;
        let quizAnswered = false;
        let quizQueue = [];

        // Code Mode State
        let currentSnippetIdx = 0;
        let currentLineIdx = 0;
        let progressiveBuild = true;

        // =========================================================================
        // 4. INITIALIZATION & UI RENDERING
        // =========================================================================
        // =========================================================================
        // 4. COURSE INTEGRATION
        // =========================================================================
        const COURSE_CONFIG = typeof window !== 'undefined' && window.MPL_LESSON ? window.MPL_LESSON : {};

        function lessonParts() {
            const requested = Array.isArray(COURSE_CONFIG.parts) ? COURSE_CONFIG.parts : PART_ORDER;
            const valid = requested.filter((id) => Boolean(MPL_PARTS[id]));
            return valid.length ? valid : PART_ORDER;
        }

        function visibleSnippetIndices() {
            const requested = Array.isArray(COURSE_CONFIG.snippets) ? COURSE_CONFIG.snippets : null;
            const all = CODE_SNIPPETS.map((_, index) => index);
            if (!requested || requested.length === 0) return all;
            const valid = requested.filter((index) => Number.isInteger(index) && Boolean(CODE_SNIPPETS[index]));
            return valid.length ? valid : all;
        }

        function applyLessonFilters() {
            const allowed = new Set(lessonParts());
            PART_ORDER.forEach((id) => {
                const el = document.getElementById(`part-${id}`);
                if (!el) return;
                if (!allowed.has(id)) {
                    el.classList.add('lesson-muted');
                    el.setAttribute('aria-disabled', 'true');
                }
            });
            document.querySelectorAll('.anatomy-pin').forEach((pin) => {
                if (!allowed.has(pin.dataset.part)) pin.classList.add('hidden');
            });
        }

        function initMatplotlibApp() {
            applyLessonFilters();
            renderComponentPills();
            renderSnippetTabs();

            const mode = COURSE_CONFIG.mode || 'explore';
            switchAppMode(mode);

            if (mode === 'explore') {
                selectPart(COURSE_CONFIG.initialPart || 'axes');
            } else if (mode === 'code') {
                loadCodeSnippet(COURSE_CONFIG.initialSnippet || 0, 0);
            }

            const promptEl = document.getElementById('toolbar-prompt');
            if (promptEl && COURSE_CONFIG.prompt) promptEl.innerHTML = COURSE_CONFIG.prompt;
        }

        window.initMatplotlibApp = initMatplotlibApp;

        function renderComponentPills() {
            const bar = document.getElementById('component-pills-bar');
            bar.innerHTML = lessonParts().map(id => {
                const p = MPL_PARTS[id];
                const badgeColor = p.isContainer
                    ? 'border-sky-500/40 bg-sky-500/10 text-sky-300 hover:bg-sky-500/25'
                    : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/25';
                return `
                    <button id="pill-${id}"
                            onclick="selectPart('${id}', event)"
                            onmouseenter="hoverPart('${id}')"
                            onmouseleave="unhoverPart()"
                            class="part-pill px-2.5 py-1 rounded-lg text-xs font-medium border transition flex items-center gap-1.5 ${badgeColor}">
                        <i class="ph-bold ${p.icon} text-xs"></i>
                        <span>${p.name.split(' (')[0]}</span>
                    </button>
                `;
            }).join('');
        }

        // =========================================================================
        // 5. MODE SWITCHING ('explore' | 'quiz' | 'code')
        // =========================================================================
        function switchAppMode(mode) {
            currentMode = mode;

            // Update Mode Tab Buttons
            ['explore', 'quiz', 'code'].forEach(m => {
                const btn = document.getElementById(`mode-btn-${m}`);
                const panel = document.getElementById(`panel-${m}`);
                if (!panel) return;
                if (m === mode) {
                    if (btn) btn.className = 'mode-tab flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all bg-sky-600 text-white shadow';
                    panel.classList.remove('hidden');
                } else {
                    if (btn) btn.className = 'mode-tab flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all text-slate-400 hover:text-slate-200';
                    panel.classList.add('hidden');
                }
            });

            // Reset any progressive hidden steps on SVG
            PART_ORDER.forEach(id => {
                const el = document.getElementById(`part-${id}`);
                if (el) el.classList.remove('step-hidden');
            });

            const promptEl = document.getElementById('toolbar-prompt');
            const pinsLayer = document.getElementById('anatomy-callouts-layer');

            if (mode === 'explore') {
                promptEl.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span><strong class="text-white">Visual Explorer Mode:</strong> Click or hover any part of the plot, blue callout circle, or bottom chip to inspect its Matplotlib name & code.</span>`;
                if (showCalloutPins) pinsLayer.classList.remove('hidden');
                document.querySelectorAll('.pin-label').forEach(el => el.classList.remove('hidden'));
                selectPart(selectedPartId || 'axes');
            } else if (mode === 'quiz') {
                promptEl.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
                    <span><strong class="text-amber-300">Beginner Naming Quiz:</strong> Look at the highlighted component on the plot (or click any mystery circle) and assign its Matplotlib name!</span>`;
                // In quiz mode, hide the text labels under pins so they don't give away the answer!
                document.querySelectorAll('.pin-label').forEach(el => el.classList.add('hidden'));
                startOrContinueQuiz();
            } else if (mode === 'code') {
                promptEl.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></span>
                    <span><strong class="text-sky-300">Code-to-Plot X-Ray Mode:</strong> Click any line of Python code or use the Next/Prev buttons to see the exact plot components it creates or modifies.</span>`;
                pinsLayer.classList.add('hidden');
                loadCodeSnippet(currentSnippetIdx, 0);
            }
        }

        // =========================================================================
        // 6. INTERACTIVE PLOT SELECTION & HIGHLIGHTING
        // =========================================================================
        function selectPart(partId, evt) {
            if (evt) evt.stopPropagation();

            // If in Quiz Mode and user clicks a part on the plot, let them practice that part!
            if (currentMode === 'quiz') {
                setQuizQuestionForPart(partId);
                return;
            }

            // If in Code Mode and user clicks a part on the plot, switch to Explore or highlight matching code line
            if (currentMode === 'code') {
                const snippet = CODE_SNIPPETS[currentSnippetIdx];
                const matchingIdx = snippet.lines.findIndex(l => l.targets.includes(partId));
                if (matchingIdx !== -1) {
                    selectCodeLine(matchingIdx);
                    return;
                }
            }

            selectedPartId = partId;
            applySvgHighlight([partId]);
            updateInspectorPanel(partId);
            updatePillStates([partId]);
        }

        function hoverPart(partId) {
            if (currentMode !== 'explore') return;
            hoveredPartId = partId;
            applySvgHighlight([partId]);
            updateInspectorPanel(partId);
        }

        function unhoverPart() {
            if (currentMode !== 'explore') return;
            hoveredPartId = null;
            if (selectedPartId) {
                applySvgHighlight([selectedPartId]);
                updateInspectorPanel(selectedPartId);
            } else {
                clearActiveSelection();
            }
        }

        function applySvgHighlight(targetIds) {
            const svg = document.getElementById('mpl-svg');
            const dynRect = document.getElementById('dynamic-highlight-rect');

            if (!targetIds || targetIds.length === 0) {
                svg.classList.remove('svg-has-focus');
                PART_ORDER.forEach(id => {
                    const el = document.getElementById(`part-${id}`);
                    if (el) el.classList.remove('mpl-active');
                });
                document.querySelectorAll('.anatomy-pin').forEach(pin => pin.classList.remove('pin-active'));
                dynRect.classList.add('hidden');
                return;
            }

            svg.classList.add('svg-has-focus');

            PART_ORDER.forEach(id => {
                const el = document.getElementById(`part-${id}`);
                if (!el) return;
                if (targetIds.includes(id)) {
                    el.classList.add('mpl-active');
                } else {
                    el.classList.remove('mpl-active');
                }
            });

            // Highlight corresponding callout pin
            document.querySelectorAll('.anatomy-pin').forEach(pin => {
                const pId = pin.getAttribute('data-part');
                if (targetIds.includes(pId)) {
                    pin.classList.add('pin-active');
                } else {
                    pin.classList.remove('pin-active');
                }
            });

            // Position the animated dashed bounding box around the primary target
            const primary = MPL_PARTS[targetIds[0]];
            if (primary && primary.bbox) {
                dynRect.setAttribute('x', primary.bbox.x);
                dynRect.setAttribute('y', primary.bbox.y);
                dynRect.setAttribute('width', primary.bbox.w);
                dynRect.setAttribute('height', primary.bbox.h);
                dynRect.classList.remove('hidden');
                document.getElementById('active-zorder-pill').textContent = `zorder: ${primary.zorder}`;
            }
        }

        function clearActiveSelection() {
            selectedPartId = null;
            applySvgHighlight([]);
            updatePillStates([]);
            document.getElementById('active-zorder-pill').textContent = 'zorder: all';
        }

        function updatePillStates(activeIds) {
            PART_ORDER.forEach(id => {
                const pill = document.getElementById(`pill-${id}`);
                if (!pill) return;
                if (activeIds.includes(id)) {
                    pill.classList.add('ring-2', 'ring-amber-400', 'scale-105');
                } else {
                    pill.classList.remove('ring-2', 'ring-amber-400', 'scale-105');
                }
            });
        }

        // =========================================================================
        // 7. UPDATE VISUAL ANATOMY INSPECTOR PANEL
        // =========================================================================
        function updateInspectorPanel(partId) {
            const data = MPL_PARTS[partId];
            if (!data) return;

            const catBadge = document.getElementById('inspect-category-badge');
            catBadge.textContent = data.category;
            catBadge.className = data.isContainer
                ? 'px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide bg-sky-500/20 text-sky-300 border border-sky-500/30'
                : 'px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';

            document.getElementById('inspect-zorder-badge').textContent = `zorder: ${data.zorder}`;
            document.getElementById('inspect-title').textContent = data.name;
            document.getElementById('inspect-Beginner-subtitle').textContent = `"${data.beginnerSubtitle}"`;
            document.getElementById('inspect-icon').className = `ph-bold ${data.icon} text-2xl`;
            document.getElementById('inspect-visual-desc').textContent = data.visualDesc;
            document.getElementById('inspect-artist-class').textContent = data.artistClass;
            document.getElementById('inspect-container-path').textContent = `Stored in: ${data.storedIn}`;
            document.getElementById('inspect-deep-desc').innerHTML = data.deepDesc;
            document.getElementById('inspect-code-snippet').textContent = data.code;

            // Render Artist Hierarchy Breadcrumb
            const chainEl = document.getElementById('inspect-hierarchy-chain');
            chainEl.innerHTML = data.hierarchy.map((node, i) => {
                const isLast = i === data.hierarchy.length - 1;
                const pillStyle = isLast
                    ? 'bg-sky-500/20 text-sky-300 border-sky-500/40 font-bold'
                    : 'bg-slate-900 text-slate-400 border-slate-800';
                return `
                    <span class="px-2 py-0.5 rounded border ${pillStyle}">${node}</span>
                    ${!isLast ? '<i class="ph-bold ph-arrow-right text-slate-600"></i>' : ''}
                `;
            }).join('');
        }

        // =========================================================================
        // 8. MODE 2: BEGINNER "ASSIGN THE NAME" INTERACTIVE QUIZ
        // =========================================================================
        function startOrContinueQuiz() {
            if (quizQueue.length === 0) {
                quizQueue = [...PART_ORDER].sort(() => Math.random() - 0.5);
            }
            if (!quizTargetId) {
                nextQuizQuestion();
            } else {
                applySvgHighlight([quizTargetId]);
            }
        }

        function nextQuizQuestion() {
            if (quizQueue.length === 0) {
                quizQueue = [...PART_ORDER].sort(() => Math.random() - 0.5);
            }
            const nextId = quizQueue.pop();
            setQuizQuestionForPart(nextId);
        }

        function setQuizQuestionForPart(partId) {
            quizTargetId = partId;
            quizAnswered = false;
            const target = MPL_PARTS[partId];

            applySvgHighlight([partId]);
            updatePillStates([]);

            document.getElementById('quiz-question-counter').textContent = `Component Challenge #${quizTotal + 1}`;
            document.getElementById('quiz-clue-text').innerHTML =
                `Look at the highlighted component on the plot: <span class="text-amber-300">"${target.beginnerSubtitle}"</span>. What is its Matplotlib name?`;
            document.getElementById('quiz-visual-hint').textContent = `Visual Cue: ${target.visualDesc}`;

            // Build 4 options (1 correct + 3 plausible distractors)
            const distractors = PART_ORDER
                .filter(id => id !== partId)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3);
            const options = [partId, ...distractors].sort(() => Math.random() - 0.5);

            const grid = document.getElementById('quiz-options-grid');
            grid.innerHTML = options.map(optId => {
                const p = MPL_PARTS[optId];
                return `
                    <button id="quiz-opt-${optId}"
                            onclick="submitQuizAnswer('${optId}')"
                            class="w-full text-left px-4 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 transition flex items-center justify-between group">
                        <div>
                            <div class="text-sm font-bold text-white group-hover:text-sky-300">${p.name}</div>
                            <div class="text-[11px] font-mono text-slate-400">${p.artistClass} · ${p.storedIn}</div>
                        </div>
                        <i class="ph-bold ph-caret-right text-slate-600 group-hover:text-sky-400"></i>
                    </button>
                `;
            }).join('');

            document.getElementById('quiz-feedback-box').classList.add('hidden');
        }

        function submitQuizAnswer(chosenId) {
            if (quizAnswered) return;
            quizAnswered = true;
            quizTotal++;

            const isCorrect = chosenId === quizTargetId;
            if (isCorrect) quizScore++;

            document.getElementById('quiz-score-display').textContent = `${quizScore} / ${quizTotal}`;

            const correctPart = MPL_PARTS[quizTargetId];
            const chosenBtn = document.getElementById(`quiz-opt-${chosenId}`);
            const correctBtn = document.getElementById(`quiz-opt-${quizTargetId}`);

            if (correctBtn) {
                correctBtn.className = 'w-full text-left px-4 py-3 rounded-xl bg-emerald-500/20 border-2 border-emerald-500 transition flex items-center justify-between';
            }
            if (!isCorrect && chosenBtn) {
                chosenBtn.className = 'w-full text-left px-4 py-3 rounded-xl bg-rose-500/20 border-2 border-rose-500 transition flex items-center justify-between';
            }

            const fb = document.getElementById('quiz-feedback-box');
            fb.classList.remove('hidden');
            if (isCorrect) {
                fb.className = 'rounded-xl p-3.5 border bg-emerald-950/60 border-emerald-500/40 text-emerald-200 text-xs sm:text-sm leading-relaxed';
                fb.innerHTML = `<strong class="text-emerald-400 block mb-1">Spot On! That is ${correctPart.name}.</strong>
                    ${correctPart.deepDesc}`;
            } else {
                const wrongPart = MPL_PARTS[chosenId];
                fb.className = 'rounded-xl p-3.5 border bg-rose-950/60 border-rose-500/40 text-rose-200 text-xs sm:text-sm leading-relaxed';
                fb.innerHTML = `<strong class="text-rose-400 block mb-1">Not quite! You picked ${wrongPart.name}, but the highlighted region is ${correctPart.name}.</strong>
                    ${correctPart.deepDesc}`;
            }
        }

        function resetQuiz() {
            quizScore = 0;
            quizTotal = 0;
            document.getElementById('quiz-score-display').textContent = '0 / 0';
            nextQuizQuestion();
        }

        // =========================================================================
        // 9. MODE 3: INTERACTIVE LINE-BY-LINE CODE SNIPPETS
        // =========================================================================
        function renderSnippetTabs() {
            const container = document.getElementById('snippet-selector-tabs');
            container.innerHTML = visibleSnippetIndices().map((idx) => {
                const s = CODE_SNIPPETS[idx];
                return `
                <button id="snippet-tab-${idx}"
                        onclick="loadCodeSnippet(${idx}, 0)"
                        class="px-2 py-2 rounded-lg text-[11px] font-semibold border transition text-center truncate">
                    ${s.tabLabel}
                </button>
            `;
            }).join('');
        }

        function loadCodeSnippet(snippetIdx, lineIdx = 0) {
            const allowedSnippets = visibleSnippetIndices();
            if (!allowedSnippets.includes(snippetIdx)) snippetIdx = allowedSnippets[0] ?? 0;
            currentSnippetIdx = snippetIdx;
            const snippet = CODE_SNIPPETS[snippetIdx];

            // Update tab button styles
            allowedSnippets.forEach((idx) => {
                const btn = document.getElementById(`snippet-tab-${idx}`);
                if (!btn) return;
                if (idx === snippetIdx) {
                    btn.className = 'px-2 py-2 rounded-lg text-[11px] font-bold border transition text-center truncate bg-sky-600 text-white border-sky-400 shadow';
                } else {
                    btn.className = 'px-2 py-2 rounded-lg text-[11px] font-medium border transition text-center truncate bg-slate-950 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800';
                }
            });

            document.getElementById('snippet-title').textContent = snippet.title;
            document.getElementById('snippet-subtitle').textContent = snippet.subtitle;

            // Render interactive lines
            const codeContainer = document.getElementById('interactive-code-lines');
            codeContainer.innerHTML = snippet.lines.map((lineObj, i) => `
                <div id="code-line-${i}"
                     onclick="selectCodeLine(${i})"
                     class="code-line px-3.5 py-2 cursor-pointer flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3 min-w-0">
                        <span class="text-slate-600 select-none w-4 text-right shrink-0">${i + 1}</span>
                        <span class="text-slate-200 whitespace-pre">${escapeHtml(lineObj.code)}</span>
                    </div>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0">
                        ${lineObj.targetLabel}
                    </span>
                </div>
            `).join('');

            selectCodeLine(lineIdx);
        }

        function selectCodeLine(lineIdx) {
            const snippet = CODE_SNIPPETS[currentSnippetIdx];
            if (!snippet || lineIdx < 0 || lineIdx >= snippet.lines.length) return;

            currentLineIdx = lineIdx;
            const lineObj = snippet.lines[lineIdx];

            // Highlight active code line
            snippet.lines.forEach((_, i) => {
                const row = document.getElementById(`code-line-${i}`);
                if (!row) return;
                if (i === lineIdx) {
                    row.classList.add('line-active');
                } else {
                    row.classList.remove('line-active');
                }
            });

            document.getElementById('code-step-indicator').textContent = `Line ${lineIdx + 1} / ${snippet.lines.length}`;
            document.getElementById('code-line-target-pill').textContent = `Affects: ${lineObj.targetLabel}`;
            document.getElementById('active-line-code-preview').textContent = lineObj.code;
            document.getElementById('active-line-beginner-desc').textContent = lineObj.beginnerDesc;
            document.getElementById('active-line-internal-desc').textContent = lineObj.internalDesc;

            // Apply progressive visibility if toggled on
            PART_ORDER.forEach(partId => {
                const el = document.getElementById(`part-${partId}`);
                if (!el) return;
                if (progressiveBuild && lineObj.visibleUpTo.length > 0 && !lineObj.visibleUpTo.includes(partId)) {
                    el.classList.add('step-hidden');
                } else {
                    el.classList.remove('step-hidden');
                }
            });

            // Highlight the target components changed by this specific line
            applySvgHighlight(lineObj.targets);
            updatePillStates(lineObj.targets);
        }

        function stepCodeLine(delta) {
            const snippet = CODE_SNIPPETS[currentSnippetIdx];
            let nextIdx = currentLineIdx + delta;
            if (nextIdx < 0) nextIdx = snippet.lines.length - 1;
            if (nextIdx >= snippet.lines.length) nextIdx = 0;
            selectCodeLine(nextIdx);
        }

        function toggleProgressiveBuild() {
            progressiveBuild = document.getElementById('progressive-build-toggle').checked;
            selectCodeLine(currentLineIdx);
        }

        // =========================================================================
        // 10. UTILITY HELPERS (CALLOUT TOGGLE, COORDS, CLIPBOARD)
        // =========================================================================
        function toggleCalloutPins() {
            showCalloutPins = !showCalloutPins;
            const layer = document.getElementById('anatomy-callouts-layer');
            const label = document.getElementById('toggle-pins-label');
            const btn = document.getElementById('toggle-pins-btn');

            if (showCalloutPins) {
                layer.classList.remove('hidden');
                label.textContent = 'Anatomy Callout Circles: ON';
                btn.className = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 hover:bg-indigo-500/30 transition';
            } else {
                layer.classList.add('hidden');
                label.textContent = 'Anatomy Callout Circles: OFF';
                btn.className = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700 transition';
            }
        }

        function toggleCoordOverlay() {
            showContainerMode = !showContainerMode;
            const btn = document.getElementById('toggle-coords-btn');
            if (showContainerMode) {
                btn.className = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-sky-500/20 text-sky-300 border border-sky-500/40 transition';
                applySvgHighlight(['figure', 'axes', 'major-ticks', 'legend']);
                updatePillStates(['figure', 'axes', 'major-ticks', 'legend']);
            } else {
                btn.className = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition';
                clearActiveSelection();
            }
        }

        function updateMouseDataCoords(evt) {
            const svg = document.getElementById('mpl-svg');
            const pt = svg.createSVGPoint();
            pt.x = evt.clientX;
            pt.y = evt.clientY;
            const svgP = pt.matrixTransform(svg.getScreenCTM().inverse());

            // Convert SVG pixels (Axes box: X 110..750 => 0..4, Y 480..90 => 0..4)
            const dataX = (svgP.x - 110) / 160;
            const dataY = (480 - svgP.y) / 97.5;

            const coordLabel = document.getElementById('cursor-coords');
            if (dataX >= 0 && dataX <= 4 && dataY >= 0 && dataY <= 4) {
                coordLabel.textContent = `transData: x = ${dataX.toFixed(2)}, y = ${dataY.toFixed(2)}`;
                coordLabel.className = 'font-mono text-[11px] text-emerald-400 bg-slate-900 px-2.5 py-0.5 rounded border border-emerald-500/30';
            } else {
                const figX = Math.max(0, Math.min(1, svgP.x / 820));
                const figY = Math.max(0, Math.min(1, (580 - svgP.y) / 580));
                coordLabel.textContent = `transFigure: (${figX.toFixed(2)}, ${figY.toFixed(2)})`;
                coordLabel.className = 'font-mono text-[11px] text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800';
            }
        }

        function copyTextToClipboard(text, btnId) {
            const ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);

            const btn = document.getElementById(btnId);
            if (btn) {
                const orig = btn.innerHTML;
                btn.innerHTML = `<i class="ph-bold ph-check text-emerald-400"></i> Copied!`;
                setTimeout(() => { btn.innerHTML = orig; }, 1500);
            }
        }

        function copyInspectCode() {
            const text = document.getElementById('inspect-code-snippet').textContent;
            copyTextToClipboard(text, 'copy-inspect-btn');
        }

        function copyCurrentSnippet() {
            const snippet = CODE_SNIPPETS[currentSnippetIdx];
            const fullCode = snippet.lines.map(l => l.code).join('\n');
            copyTextToClipboard(fullCode, 'copy-snippet-btn');
        }

        function escapeHtml(str) {
            return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
    
