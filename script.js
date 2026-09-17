/* --------------------------------------------------------------------------
   Optional imagery.
   Research figures are referenced before the files exist. If one 404s, drop
   the whole figure rather than showing a broken-image icon; the layout is
   built to read correctly without it.
   -------------------------------------------------------------------------- */
const collapseHeroIfBare = () => {
  const heroBody = document.querySelector(".hero-body");
  if (heroBody && !heroBody.querySelector("figure")) {
    heroBody.classList.add("is-textonly");
  }
};

const pruneEmptyMedia = () => {
  document.querySelectorAll(".case-media").forEach((grid) => {
    if (!grid.children.length) {
      (grid.closest(".block") || grid).remove();
    }
  });
};

document.querySelectorAll("img[data-optional]").forEach((img) => {
  const drop = () => {
    (img.closest("figure") || img).remove();
    pruneEmptyMedia();
    collapseHeroIfBare();
  };
  img.addEventListener("error", drop);
  // Cached failures can resolve before this listener attaches.
  if (img.complete && img.naturalWidth === 0) {
    drop();
  }
});

/* --------------------------------------------------------------------------
   Nav: smooth in-page scrolling and an active-section marker.
   -------------------------------------------------------------------------- */
const navLinks = Array.from(
  document.querySelectorAll('.nav-links a[href^="#"]'),
);

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) {
      return;
    }
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", link.getAttribute("href"));
  });
});

const tracked = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (tracked.length && "IntersectionObserver" in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        navLinks.forEach((link) => {
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === `#${entry.target.id}`,
          );
        });
      });
    },
    // Only the band just below the sticky nav counts as "current".
    { rootMargin: "-60px 0px -65% 0px", threshold: 0 },
  );

  tracked.forEach((section) => spy.observe(section));
}
