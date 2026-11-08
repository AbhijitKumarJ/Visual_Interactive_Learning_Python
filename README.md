# Python Visual Interactive Learning — User Guide

An interactive, browser-based learning app for Python's data ecosystem. Every
lesson is a hands-on visualization: adjust controls, step through code, and
watch the concepts respond. No installation, no account, and no Python
required.

**URL: https://abhijitkumarj.github.io/Visual_Interactive_Learning_Python/**


## Opening the app

- Open the web address where this folder is hosted (for example
  `https://your-host/your-folder/index.html`). If someone shared a link with
  you, simply open that link.
- The app must be served from a web address. Double-clicking `index.html` on
  your computer will not work, because the browser blocks the app's scripts
  when opened as a local file.
- Use a current version of Chrome, Edge, Firefox, or Safari. A laptop or
  desktop screen gives the best experience; on phones and small tablets the
  menu becomes a slide-out panel.

## What is inside

The left-hand panel lists everything in the app. Items with a **code icon**
are interactive visualizers; items with a **globe icon** are multi-page field
guides.

### Interactive visualizers

Each visualizer is a set of numbered lessons ending with a quiz. Lessons
include interactive diagrams, live code samples, and "Try this" suggestions.

| Visualizer | Lessons |
| --- | --- |
| **NumPy** | Memory & Strides · Views vs. Copies · Broadcasting · Axis Reductions · Reshape, Transpose & Flatten · Vectorization & Matmul · Check Yourself |
| **Pandas** | Core Structures & Inspection · Selection & Filtering · GroupBy Pipeline · Merge, Join & Concat · Pivot & Melt · Missing Data & Speed · Check Yourself |
| **Scikit-learn** | Core API & Pipeline · Decision Boundaries & Ensembles · Cross-Validation Splitters · Hyperparameter Search · Unsupervised & Features · Estimator Mind-Map · Check Yourself |
| **Polars** | Arrow & Rust Core · Contexts & Expressions · GroupBy & Windows · Lazy DAG & Streaming · Pandas Translator · Mastery Quiz · Cheat Sheet |
| **LiteRT** | Package Graph · Architecture Pipeline · Code & Buffer Debugger · Quantization Lab · CLI Sandbox · Migration Diff · Diagnostic Quiz |

### Field guides

Open the visual anatomy of each library, select parts of a chart, and see what
each piece is called and where it lives in the library's object model.

| Guide | Lessons |
| --- | --- |
| **Matplotlib** | Canvas & Containers · Data Artists · Axes & Annotations · Code X-Ray: Core & Layers · Code X-Ray: Axes & Text · Name That Part · Cheat Sheet |
| **Seaborn** | Theme & Data Binding · Facets & Semantics · Statistical Layers · Code X-Ray: Relational & Regression · Code X-Ray: Distributions & Matrices · Code X-Ray: Publication Polish · Name That Part · Cheat Sheet |

The field guides open at their first lesson. Use the navigation inside the
page to move between lessons, or open the guide's own menu to jump anywhere.

## Using the viewer

- **Choose content** — click an item in the left panel. The selected item is
  highlighted.
- **Hide or show the panel** — click the collapse icon at the top of the panel
  to give the lesson the full window. When hidden, a button in the top-left
  corner brings it back.
- **Reload a lesson** — the circular-arrow button at the bottom of the panel
  restarts the current demo from scratch.
- **Move between lessons** — interactive visualizers have previous/next
  controls and an "All … lessons" menu. Field guides keep their navigation
  inside the lesson frame.
- **Nothing is saved** — progress and settings live only in the page, so a
  reload or a different lesson starts fresh.

## Tips

- Most demos are educational simulations. They illustrate how the libraries
  behave; they do not execute real Python on your machine.
- An internet connection is recommended. A few lessons load fonts, icons, or
  the LiteRT WebAssembly runtime from public CDNs.
- The LiteRT lessons also describe an optional local model server. That part
  only applies if you run the companion server yourself; you can still read
  and interact with the lesson without it.

## Troubleshooting

- **A lesson area is blank** — hard-refresh the page (Ctrl+Shift+R on
  Windows/Linux, Cmd+Shift+R on macOS). Then confirm the whole hosted folder
  was uploaded, including `assets/`, `matplotlib_lessons/`, and
  `seaborn_lessons/`.
- **Icons or fonts look wrong** — the network may be blocking the public font
  and icon CDNs. The lessons still work; only decorations are affected.
- **A LiteRT demo does not start** — it may need to download its
  WebAssembly runtime. Check that the network allows access to public CDNs.
- **The page does not load at all** — make sure you are opening the app
  through a web server address and not as a local `file://` path, and try an
  up-to-date browser.

---

*Built with React and Vite. Lesson content is for learning and illustration;
always verify details against the official library documentation when writing
production code.*

