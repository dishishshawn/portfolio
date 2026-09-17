# Portfolio

Source for my personal site: **https://dishishshawn.github.io/portfolio/**

It covers my quantum materials research, hardware projects (PCBs such as [OpenCAN](https://github.com/dishishshawn/OpenCAN) and the [STORM control board](https://github.com/dishishshawn/STORM_Control_Board)), and software work.

## Stack

Plain HTML, CSS, and JavaScript, with no build step, hosted on GitHub Pages.

| File | Purpose |
| --- | --- |
| `index.html`, `styles.css`, `script.js` | Home page |
| `project.html`, `project-detail.js`, `project-data.js` | Project case-study pages |
| `altium-viewer.js` | Embedded interactive PCB viewer |
| `assets/` | Images, board files, and documents |

## Running locally

```bash
python3 -m http.server
```

Then open http://localhost:8000.
