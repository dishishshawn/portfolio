/* Renders one case study from window.PROJECT_DATA into #project-detail.
   Content in project-data.js is authored alongside this file and may contain
   inline markup (subscripts, <code>, <b>), so it is injected as-is. */

const params = new URLSearchParams(window.location.search);
const slug = params.get("project");
const root = document.getElementById("project-detail");
const project = window.PROJECT_DATA && slug ? window.PROJECT_DATA[slug] : null;

const list = (items = []) => items.map((item) => `<li>${item}</li>`).join("");
const paras = (items = []) => items.map((item) => `<p>${item}</p>`).join("");

const renderSection = (section) => `
    <section class="block">
        <h2>${section.heading}</h2>
        ${section.body ? paras(section.body) : ""}
        ${section.list ? `<ul>${list(section.list)}</ul>` : ""}
        ${section.caveat ? `<p class="caveat">${section.caveat}</p>` : ""}
    </section>
`;

const renderSpec = (spec = []) =>
  spec
    .map(
      (row) => `
    <div class="spec-row">
        <span class="spec-k">${row.k}</span>
        <span class="spec-v">${row.v}</span>
    </div>`,
    )
    .join("");

const renderLinks = (project) => {
  const links = [...(project.links || [])];

  if (project.github) {
    links.unshift({
      label: "View source",
      href: project.github,
      primary: true,
    });
  }

  if (!links.length) {
    return project.unlinkedNote
      ? `<span class="case-note">${project.unlinkedNote}</span>`
      : "";
  }

  return links
    .map(
      (link) =>
        `<a href="${link.href}" target="_blank" rel="noreferrer" class="btn ${
          link.primary ? "btn-solid" : "btn-quiet"
        }">${link.label}</a>`,
    )
    .join("");
};

const renderMedia = (media = []) => {
  const shown = media.filter((item) => item.image);
  if (!shown.length) {
    return "";
  }

  return `
        <section class="block">
            <h2>Media</h2>
            <div class="case-media">
                ${shown
                  .map(
                    (item) => `
                    <figure class="figure${item.portrait ? " figure-portrait" : ""}">
                        <img src="${item.image}" alt="${item.alt || ""}" loading="lazy" data-optional>
                        ${
                          item.text
                            ? `<figcaption>${item.text}</figcaption>`
                            : ""
                        }
                    </figure>`,
                  )
                  .join("")}
            </div>
        </section>
    `;
};

/* Older entries used description + highlights instead of sections. */
const sectionsFor = (project) => {
  if (project.sections) {
    return project.sections;
  }

  const fallback = [];
  if (project.description) {
    fallback.push({ heading: "Overview", body: [project.description] });
  }
  if (project.highlights) {
    fallback.push({ heading: "What it involved", list: project.highlights });
  }
  return fallback;
};

if (!project) {
  root.innerHTML = `
        <div class="case-missing">
            <p class="label">Not found</p>
            <h1 class="hdr">That case study isn&rsquo;t here.</h1>
            <p class="lede" style="margin-inline:auto">It may have been renamed. Everything live is listed on the main page.</p>
            <p><a href="index.html#work" class="btn btn-solid">Back to all work</a></p>
        </div>
    `;
} else {
  document.title = `${project.plainTitle || project.title} | Shawn Agarwal`;

  const meta = document.querySelector('meta[name="description"]');
  if (meta && project.plainSummary) {
    meta.setAttribute("content", project.plainSummary);
  }

  const viewer =
    project.altiumViewer && window.ProjectPcbViewer
      ? window.ProjectPcbViewer.render(project.altiumViewer)
      : "";

  root.innerHTML = `
        <header class="case-head">
            <div class="case-eyebrow">
                <span class="label">${project.eyebrow}</span>
                ${project.period ? `<span class="slug">${project.period}</span>` : ""}
            </div>
            <h1 class="case-title">${project.title}</h1>
            ${project.role ? `<p class="slug">${project.role}</p>` : ""}
            <p class="case-intro">${project.summary}</p>
            <div class="case-actions">${renderLinks(project)}</div>
        </header>

        <div class="case-grid">
            <div class="case-main">
                ${sectionsFor(project).map(renderSection).join("")}
                ${viewer}
                ${renderMedia(project.media)}
            </div>

            <aside class="case-side">
                ${
                  project.spec && project.spec.length
                    ? `<div class="spec"><h3>Details</h3>${renderSpec(project.spec)}</div>`
                    : ""
                }
                ${
                  project.stack && project.stack.length
                    ? `<div class="spec"><h3>Stack</h3><div class="chips">${project.stack
                        .map((item) => `<span class="chip">${item}</span>`)
                        .join("")}</div></div>`
                    : ""
                }
            </aside>
        </div>
    `;

  if (window.ProjectPcbViewer) {
    window.ProjectPcbViewer.init(root);
  }
}
