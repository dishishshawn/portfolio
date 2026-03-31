document.documentElement.classList.add('has-js');

const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');
const revealItems = document.querySelectorAll('.reveal');
const projectTiles = document.querySelectorAll('[data-project]');

navLinks.forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        const href = anchor.getAttribute('href');
        if (!href || !href.startsWith('#')) {
            return;
        }

        const target = document.querySelector(href);
        if (!target) {
            return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

const setActiveLink = () => {
    let current = 'top';

    sections.forEach((section) => {
        const offset = section.offsetTop - 180;
        if (window.scrollY >= offset) {
            current = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
};

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

projectTiles.forEach((tile) => {
    const openProject = () => {
        const slug = tile.dataset.project;
        if (slug) {
            window.location.href = `project.html?project=${encodeURIComponent(slug)}`;
        }
    };

    tile.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
            return;
        }
        openProject();
    });

    tile.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openProject();
        }
    });
});
