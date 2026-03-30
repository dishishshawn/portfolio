window.ProjectPcbViewer = (() => {
    const DEFAULT_FALLBACK = 'assets/altium-viewer-placeholder.svg';
    const DEFAULT_ENABLED_VIEWS = '3d,pcb';
    const DEFAULT_ACTIVE_VIEW = '3d';
    const DEFAULT_HEIGHT = 560;
    const LOAD_TIMEOUT_MS = 12000;

    const escapeHtml = (value = '') => String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');

    const normalizeViews = (value) => {
        const uniqueViews = [...new Set(
            String(value || DEFAULT_ENABLED_VIEWS)
                .split(',')
                .map((item) => item.trim().toLowerCase())
                .filter((item) => ['3d', 'pcb', 'sch', 'bom'].includes(item))
        )];

        return uniqueViews.length ? uniqueViews : DEFAULT_ENABLED_VIEWS.split(',');
    };

    const normalizeActiveView = (value, enabledViews) => {
        const activeView = String(value || DEFAULT_ACTIVE_VIEW).trim().toLowerCase();
        return enabledViews.includes(activeView) ? activeView : enabledViews[0];
    };

    const normalizeHeight = (value) => {
        const parsedHeight = Number.parseInt(value, 10);
        return Number.isFinite(parsedHeight) && parsedHeight > 0 ? parsedHeight : DEFAULT_HEIGHT;
    };

    const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '::1']);
    const isLocalHost = () => window.location.protocol === 'file:' || LOCAL_HOSTS.has(window.location.hostname);

    const resolveUrl = (value = '') => {
        if (!value) {
            return '';
        }

        try {
            return new URL(String(value), window.location.href).href;
        } catch (error) {
            return String(value);
        }
    };

    const isLocalUrl = (value = '') => {
        if (!value) {
            return false;
        }

        try {
            const url = new URL(String(value), window.location.href);
            return url.protocol === 'file:' || LOCAL_HOSTS.has(url.hostname);
        } catch (error) {
            return false;
        }
    };

    const needsPublicHost = (viewer = {}) => (
        isLocalHost() && (
            Boolean(viewer.requiresPublicHost) ||
            isLocalUrl(viewer.projectSrc)
        )
    );

    const getViewerMode = (viewer = {}) => {
        if (needsPublicHost(viewer)) {
            return 'fallback';
        }

        if (viewer.projectToken || viewer.projectSrc) {
            return 'embed';
        }

        if (viewer.embedUrl) {
            return 'iframe';
        }

        return 'fallback';
    };

    const renderAction = (viewer, mode) => {
        if (viewer.openUrl) {
            return `
                <a href="${escapeHtml(viewer.openUrl)}" target="_blank" rel="noreferrer" class="cta-button">
                    ${escapeHtml(viewer.openLabel || 'Open board source')}
                </a>
            `;
        }

        const label = mode === 'fallback' ? 'Viewer source needed' : 'Live on this page';
        return `<span class="secondary-button viewer-disabled" aria-disabled="true">${label}</span>`;
    };

    const renderViewerSurface = (viewer, title, enabledViews, activeView, mode) => {
        if (mode === 'embed') {
            const projectSrc = resolveUrl(viewer.projectSrc);
            const projectSrcAttr = projectSrc
                ? ` data-project-src="${escapeHtml(projectSrc)}"`
                : '';
            const projectTokenAttr = viewer.projectToken
                ? ` data-project-token="${escapeHtml(viewer.projectToken)}"`
                : '';
            const sourceType = escapeHtml(viewer.sourceType || 'Design');
            const height = normalizeHeight(viewer.height);

            return `
                <div class="viewer-live-surface">
                    <div
                        class="altium-ecad-viewer viewer-embed-target"
                        ${projectSrcAttr}${projectTokenAttr}
                        data-enabled-views="${escapeHtml(enabledViews.join(','))}"
                        data-active-view="${escapeHtml(activeView)}"
                        data-src-type="${sourceType}"
                        use-border="false"
                        style="width: 100%; height: ${height}px;"
                    >
                        <a href="https://www.altium.com/altium-designer-viewer/" target="_blank" rel="noreferrer">
                            PCB File Viewer by Altium
                        </a>
                    </div>
                </div>
            `;
        }

        if (mode === 'iframe') {
            return `
                <div class="viewer-live-surface">
                    <iframe
                        class="viewer-frame"
                        src="${escapeHtml(viewer.embedUrl)}"
                        title="${title}"
                        loading="lazy"
                        allowfullscreen
                        referrerpolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </div>
            `;
        }

        return '';
    };

    const render = (viewer = {}) => {
        if (!viewer) {
            return '';
        }

        const mode = getViewerMode(viewer);
        const localFallback = needsPublicHost(viewer);
        const title = escapeHtml(viewer.title || 'Interactive PCB Viewer');
        const fallbackImage = escapeHtml(viewer.fallbackImage || DEFAULT_FALLBACK);
        const enabledViews = normalizeViews(viewer.enabledViews);
        const activeView = normalizeActiveView(viewer.activeView, enabledViews);
        const fallbackHeading = escapeHtml(
            (localFallback ? viewer.localFallbackHeading : viewer.fallbackHeading) || (
                mode === 'fallback'
                    ? 'Add a board source to turn on the live viewer'
                    : 'Preview stays visible while the live viewer loads'
            )
        );
        const note = escapeHtml(
            (localFallback ? viewer.localFallbackNote : viewer.note) || (
                mode === 'fallback'
                    ? 'Paste an Altium Personal Space embed, a project token, or a public ZIP archive to enable the 3D view.'
                    : 'This board is embedded directly in the project page using the official Altium web viewer.'
            )
        );

        return `
            <section class="detail-section altium-viewer-section">
                <div class="viewer-header">
                    <div class="viewer-copy">
                        <p class="section-kicker viewer-kicker">Embedded 3D PCB Viewer</p>
                        <h2>${title}</h2>
                    </div>
                    <div class="viewer-actions">
                        ${renderAction(viewer, mode)}
                    </div>
                </div>

                <div class="viewer-embed-shell ${mode !== 'fallback' ? 'has-embed' : 'show-fallback fallback-only'}" data-altium-viewer data-viewer-mode="${mode}">
                    ${renderViewerSurface(viewer, title, enabledViews, activeView, mode)}

                    <div class="viewer-fallback">
                        <img src="${fallbackImage}" alt="${title} fallback preview" class="viewer-fallback-image">
                        <div class="viewer-fallback-copy">
                            <strong>${fallbackHeading}</strong>
                            <p>${note}</p>
                        </div>
                    </div>
                </div>

                <p class="viewer-note">${note}</p>
            </section>
        `;
    };

    const initViewerFrame = (container, frameSelector) => {
        let loaded = false;

        const revealFallback = () => {
            if (!loaded) {
                container.classList.add('show-fallback');
            }
        };

        const hideFallback = () => {
            loaded = true;
            container.classList.add('is-loaded');
            container.classList.remove('show-fallback');
        };

        const timeoutId = window.setTimeout(revealFallback, LOAD_TIMEOUT_MS);

        const bindFrame = (frame) => {
            if (!frame || frame.dataset.viewerBound === 'true') {
                return false;
            }

            frame.dataset.viewerBound = 'true';
            frame.addEventListener('load', () => {
                window.clearTimeout(timeoutId);
                hideFallback();
            }, { once: true });
            frame.addEventListener('error', () => {
                window.clearTimeout(timeoutId);
                revealFallback();
            }, { once: true });

            return true;
        };

        if (bindFrame(container.querySelector(frameSelector))) {
            return;
        }

        const observer = new MutationObserver(() => {
            if (bindFrame(container.querySelector(frameSelector))) {
                observer.disconnect();
            }
        });

        observer.observe(container, { childList: true, subtree: true });

        window.setTimeout(() => {
            if (!loaded) {
                observer.disconnect();
            }
        }, LOAD_TIMEOUT_MS + 1000);
    };

    const init = (root = document) => {
        root.querySelectorAll('[data-altium-viewer]').forEach((container) => {
            const mode = container.dataset.viewerMode;

            if (mode === 'fallback') {
                container.classList.add('show-fallback', 'fallback-only');
                return;
            }

            if (mode === 'iframe') {
                initViewerFrame(container, '.viewer-frame');
                return;
            }

            initViewerFrame(container, '.altium-web-viewer, .viewer-embed-target iframe');
        });
    };

    return { render, init };
})();
