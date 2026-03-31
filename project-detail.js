const params = new URLSearchParams(window.location.search);
const slug = params.get('project');
const projectRoot = document.getElementById('project-detail');
const project = (window.PROJECT_DATA && slug) ? window.PROJECT_DATA[slug] : null;

const renderTags = (items = []) => items.map((item) => `<span class="tag">${item}</span>`).join('');
const renderList = (items = []) => items.map((item) => `<li>${item}</li>`).join('');
const getRenderableMedia = (items = []) => items.filter((item) => item.image);
const getMediaGridClass = (items = []) => items.length === 1 ? 'media-grid media-grid-single' : 'media-grid';
const getMediaCardClass = (items = []) => items.length === 1 ? 'media-card media-card-feature' : 'media-card';

const renderMedia = (items = []) => items.map((item) => `
    <article class="${getMediaCardClass(items)}">
        <img
            src="${item.image}"
            alt="${item.alt || item.title}"
            class="media-image"
            loading="lazy"
        >
        ${item.title || item.text ? `
        <div class="media-copy">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </div>` : ''}
    </article>
`).join('');

const renderViewer = (viewer) => window.ProjectPcbViewer ? window.ProjectPcbViewer.render(viewer) : '';

if (!project) {
    projectRoot.innerHTML = `
        <div class="detail-hero-card empty-state is-visible">
            <p class="section-kicker">Project Not Found</p>
            <h1 class="section-title">This case study isn't available yet.</h1>
            <p>Return to the portfolio to choose a project from the main list.</p>
            <a href="index.html#projects" class="cta-button">Back to Projects</a>
        </div>
    `;
} else {
    document.title = `${project.title} | Shawn Agarwal`;
    const mediaItems = getRenderableMedia(project.media);

    const githubAction = project.github
        ? `<a href="${project.github}" target="_blank" rel="noreferrer" class="cta-button">View GitHub Repo</a>`
        : `<span class="secondary-button">Private robotics work</span>`;

    projectRoot.innerHTML = `
        <section class="detail-hero-card is-visible">
            <div class="detail-eyebrow">
                <span class="project-type">${project.eyebrow}</span>
                <span class="project-status">${project.status}</span>
            </div>
            <h1 class="section-title section-title-left">${project.title}</h1>
            <p class="detail-intro">${project.summary}</p>
            <div class="project-tags">${renderTags(project.stack)}</div>
            <div class="detail-actions">
                ${githubAction}
            </div>
        </section>

        <div class="detail-grid">
            <div class="detail-main">
                <section class="detail-section">
                    <h2>Overview</h2>
                    <p>${project.description}</p>
                </section>

                ${project.altiumViewer ? renderViewer(project.altiumViewer) : ''}

                <section class="detail-section">
                    <h2>Technical Highlights</h2>
                    <ul class="detail-list">
                        ${renderList(project.highlights)}
                    </ul>
                </section>
            </div>

            <aside class="detail-side">
                <section class="meta-card">
                    <h3>Project Snapshot</h3>
                    <div class="detail-meta">
                        <div class="meta-row">
                            <span class="meta-label">Type</span>
                            <span class="meta-value">${project.type}</span>
                        </div>
                        ${project.visibility && project.visibility !== 'Public repository' ? `
                        <div class="meta-row">
                            <span class="meta-label">Visibility</span>
                            <span class="meta-value">${project.visibility}</span>
                        </div>` : ''}
                    </div>
                </section>
            </aside>
        </div>

        ${mediaItems.length ? `
            <section class="detail-section detail-section-wide">
                <h2>Media + Documentation</h2>
                <div class="${getMediaGridClass(mediaItems)}">
                    ${renderMedia(mediaItems)}
                </div>
            </section>
        ` : ''}
    `;

    if (window.ProjectPcbViewer) {
        window.ProjectPcbViewer.init(projectRoot);
    }
}
