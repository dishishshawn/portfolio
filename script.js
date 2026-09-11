document.documentElement.classList.add("has-js");

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
   Reveal on scroll. Deliberately slight — a short fade, once, then unobserved.
   -------------------------------------------------------------------------- */
const reveals = document.querySelectorAll(".reveal");

if (reveals.length && "IntersectionObserver" in window) {
  const revealer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Reveal anything on screen, and anything already scrolled past —
        // otherwise a deep link (index.html#contact), a restored scroll
        // position, or a fast flick leaves everything above permanently
        // stuck at opacity 0. The observer's initial callback reports those
        // with a negative top, which is what catches them.
        const scrolledPast = entry.boundingClientRect.bottom <= 0;
        if (entry.isIntersecting || scrolledPast) {
          entry.target.classList.add("is-visible");
          revealer.unobserve(entry.target);
        }
      });
    },
    // Expand the root well past the fold so a section has already faded in by
    // the time it is scrolled to. A negative bottom margin (the obvious
    // choice) does the opposite: it delays the reveal until the element is
    // already on screen, which reads as blank space during a fast scroll.
    { threshold: 0, rootMargin: "0px 0px 25% 0px" },
  );

  reveals.forEach((el) => revealer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}

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
