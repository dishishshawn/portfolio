const params = new URLSearchParams(window.location.search);
const slug = params.get('project');
const projectRoot = document.getElementById('project-detail');
const project = (window.PROJECT_DATA && slug) ? window.PROJECT_DATA[slug] : null;

const renderTags = (items = []) => items.map((item) => `<span class="tag">${item}</span>`).join('');
const renderList = (items = []) => items.map((item) => `<li>${item}</li>`).join('');
const renderMedia = (items = []) => items.map((item) => `
    <article class="media-card">
        <div class="media-placeholder">${item.placeholder}</div>
        <div class="media-copy">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </div>
    </article>
`).join('');
const renderViewer = (viewer) => window.ProjectPcbViewer ? window.ProjectPcbViewer.render(viewer) : '';

if (!project) {
    projectRoot.innerHTML = `
        <div class="detail-hero-card empty-state is-visible">
            <p class="section-kicker">Project Not Found</p>
            <h1 class="section-title">This case study isn’t available yet.</h1>
            <p>Return to the portfolio to choose a project from the main list.</p>
            <a href="index.html#projects" class="cta-button">Back to Projects</a>
        </div>
    `;
} else {
    document.title = `${project.title} | Shawn Agarwal`;

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
                <a href="index.html#contact" class="secondary-button">Contact Me</a>
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

                <section class="detail-section">
                    <h2>Media + Documentation</h2>
                    <div class="media-grid">
                        ${renderMedia(project.media)}
                    </div>
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
                        <div class="meta-row">
                            <span class="meta-label">Visibility</span>
                            <span class="meta-value">${project.visibility}</span>
                        </div>
                        <div class="meta-row">
                            <span class="meta-label">Best For</span>
                            <span class="meta-value">Schematics, 3D PCB renders, UI screenshots, or short demos</span>
                        </div>
                    </div>
                </section>

                <section class="asset-tip">
                    <h3>Add Media Later</h3>
                    <p>This page is ready for your schematics, board renders, demo videos, or screenshots. As you collect assets, these cards can be replaced with real visuals.</p>
                </section>
            </aside>
        </div>
    `;

    if (window.ProjectPcbViewer) {
        window.ProjectPcbViewer.init(projectRoot);
    }
}