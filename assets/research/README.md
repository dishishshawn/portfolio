# Research imagery

Every image here is optional at runtime. If a file is missing, `script.js`
removes the whole figure (and prunes the Media block if it empties) rather than
showing a broken image, so nothing looks wrong while a slot is empty. Drop a
file in with the exact name below and it appears.

| File | Where it appears | Status |
|---|---|---|
| `rsm.png` | Hero figure on the home page, and the BaTiO3 case study | **Wanted.** Rocking curve or reciprocal-space map. Highest-value image on the site — it is the one that says "materials characterization" to anyone who knows what they are looking at. |
| `xrdc-ui.png` | XRDC case study | **Wanted.** Screenshot of the scan analyzer, or an output figure. |
| `lab.jpg` | BaTiO3 case study | Present — still frame from `assets/inside_chamber.MOV`, cropped portrait to keep the viewport and flange. |
| `batio3.jpg` | Card art in the research section of the home page | Present — 16:10 crop of the same frame. |
| `xrdc.png` | Card art in the research section of the home page | Optional. Can be the same image as `xrdc-ui.png`. |

Portrait photos: set `portrait: true` on the media entry in `project-data.js`
so the figure uses a 3:4 box instead of centre-cropping to landscape.

Resize before committing — keep these around 1 MB or less:

    magick in.png -resize '1600x1600>' -strip -quality 85 out.jpg
