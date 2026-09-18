/* Interactive résumé: boxed entries fold out a sheet of project detail.
   Content comes from ../project-data.js (the same data as the case studies). */

const DATA = window.PROJECT_DATA || {};
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const FOLD_MS = 520;

// Stagger the one-time link-box draw in reading order.
document
  .querySelectorAll(".box")
  .forEach((box, i) => box.style.setProperty("--i", i));

// Project media paths are relative to the site root; this page is one level down.
const up = (path) => (/^(https?:|mailto:|\/)/.test(path) ? path : `../${path}`);

const renderSection = (s) => `
  <h4>${s.heading}</h4>
  ${(s.body || []).map((p) => `<p>${p}</p>`).join("")}
  ${s.list ? `<ul>${s.list.map((li) => `<li>${li}</li>`).join("")}</ul>` : ""}
  ${s.caveat ? `<p class="caveat">${s.caveat}</p>` : ""}`;

const renderFigures = (media = []) => {
  const shown = media.filter((m) => m.image);
  if (!shown.length) return "";
  return `<div class="figs">${shown
    .map(
      (m) => `
      <figure>
        <img src="${up(m.image)}" alt="${m.alt || ""}" loading="lazy">
        ${m.text ? `<figcaption>${m.text}</figcaption>` : ""}
      </figure>`,
    )
    .join("")}</div>`;
};

const renderLinks = (slug, p) => {
  const links = [
    `<a href="../project.html?project=${slug}">Full case study</a>`,
    p.github
      ? `<a href="${p.github}" target="_blank" rel="noreferrer">Source on GitHub</a>`
      : "",
    ...(p.links || []).map(
      (l) =>
        `<a href="${up(l.href)}" target="_blank" rel="noreferrer">${l.label}</a>`,
    ),
  ].filter(Boolean);
  return `<p class="more">${links.join(" &bull; ")}</p>`;
};

const sectionsFor = (p) =>
  p.sections ||
  [
    p.description && { heading: "Overview", body: [p.description] },
    p.highlights && { heading: "What it involved", list: p.highlights },
  ].filter(Boolean);

const buildInsert = (slug, id) => {
  const p = DATA[slug];
  const el = document.createElement("div");
  el.className = "insert";
  el.id = id;
  el.dataset.project = slug;
  el.innerHTML = `
    <div class="fold">
      <div class="paper" role="region" aria-labelledby="${id}-title">
        <div class="paper-head">
          <h3 id="${id}-title" tabindex="-1">${p.title}</h3>
          <button class="close" type="button">Close</button>
        </div>
        ${p.role || p.period ? `<p class="role">${[p.role, p.period].filter(Boolean).join(", ")}</p>` : ""}
        <p class="summary">${p.summary}</p>
        ${renderFigures(p.media)}
        ${sectionsFor(p).map(renderSection).join("")}
        ${renderLinks(slug, p)}
      </div>
    </div>`;
  // A figure whose file is missing is dropped rather than shown broken.
  el.querySelectorAll("img").forEach((img) =>
    img.addEventListener("error", () => img.closest("figure").remove()),
  );
  return el;
};

let open = null; // { trigger, insert }

const close = ({ restoreFocus = true, clearHash = true } = {}) => {
  if (!open) return;
  const { trigger, insert } = open;
  open = null;
  trigger.setAttribute("aria-expanded", "false");
  insert.classList.remove("is-open");
  setTimeout(() => insert.remove(), reduceMotion.matches ? 0 : FOLD_MS);
  if (restoreFocus) trigger.focus({ preventScroll: true });
  if (clearHash) history.replaceState(null, "", location.pathname);
};

const openFor = (trigger) => {
  const slug = trigger.dataset.project;
  if (!DATA[slug]) return;
  if (open && open.trigger === trigger) return close();
  close({ restoreFocus: false, clearHash: false });

  const id = `insert-${slug}`;
  const insert = buildInsert(slug, id);
  trigger.closest(".entry").after(insert);
  trigger.setAttribute("aria-expanded", "true");
  trigger.setAttribute("aria-controls", id);
  open = { trigger, insert };
  history.replaceState(null, "", `#${slug}`);

  // Two frames so the closed state paints before the transition starts.
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      insert.classList.add("is-open");
      const title = insert.querySelector("h3");
      setTimeout(
        () => {
          title.focus({ preventScroll: true });
          insert.scrollIntoView({
            behavior: reduceMotion.matches ? "auto" : "smooth",
            block: "nearest",
          });
        },
        reduceMotion.matches ? 0 : FOLD_MS * 0.6,
      );
    }),
  );
};

document.addEventListener("click", (e) => {
  const trigger = e.target.closest("button.box[data-project]");
  if (trigger) return openFor(trigger);
  if (e.target.closest(".insert .close")) close();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") close();
});

// Deep link: résumé/#xrdc opens that entry.
const fromHash = document.querySelector(
  `button.box[data-project="${CSS.escape(location.hash.slice(1))}"]`,
);
if (location.hash && fromHash) openFor(fromHash);
