(function () {
    const root = document.getElementById('report-root');

    if (!root || typeof reportData === 'undefined') {
        return;
    }

    const escapeHtml = (value = '') =>
        String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

    const formatContent = (value = '') => {
        let safe = escapeHtml(value);
        
        safe = safe.replace(/&lt;strong&gt;/g, '<strong>')
                .replace(/&lt;\/strong&gt;/g, '</strong>')
                .replace(/&lt;b&gt;/g, '<b>')
                .replace(/&lt;\/b&gt;/g, '</b>');
        
        safe = safe.replace(/\n/g, '<br>');
        
        return safe;
    };
    const chapterThemePalette = [
        { accent: '#25b8ea', soft: '#eefbff' },
        { accent: '#7c6cff', soft: '#f1eeff' },
        { accent: '#ff7a59', soft: '#fff1ea' },
        { accent: '#2ec7a4', soft: '#ebfbf4' },
        { accent: '#f2a93b', soft: '#fff7e8' }
    ];

    const getChapterTheme = (chapter, index) => {
        if (chapter.themeColor || chapter.color || chapter.accent) {
            return {
                accent: chapter.themeColor || chapter.color || chapter.accent,
                soft: chapter.themeSoft || '#f7fbff'
            };
        }

        return chapterThemePalette[index % chapterThemePalette.length];
    };

    const buildCardImage = (card, theme) => {
        if (card.image) {
            return card.image;
        }

        const label = String(card.title || '洞察').slice(0, 16);
        const safeLabel = label
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="800" height="420" viewBox="0 0 800 420">
                <rect width="800" height="420" rx="32" fill="${theme.accent}" />
                <rect x="36" y="36" width="728" height="348" rx="24" fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.35)" />
                <circle cx="670" cy="120" r="86" fill="rgba(255,255,255,0.16)" />
                <path d="M92 318c60-96 130-146 220-146 78 0 139 34 199 98" stroke="rgba(255,255,255,0.82)" stroke-width="18" fill="none" stroke-linecap="round" />
                <text x="52" y="160" font-family="Arial, sans-serif" font-size="54" font-weight="700" fill="white">${safeLabel}</text>
                <text x="52" y="226" font-family="Arial, sans-serif" font-size="24" fill="rgba(255,255,255,0.9)">AI Research Insight</text>
            </svg>
        `;

        return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    };

    const renderCardMeta = (card, theme) => `
        <div class="card-media">
            <img class="card-image" src="${escapeHtml(buildCardImage(card, theme))}" alt="${escapeHtml(card.title || '')}">
        </div>
        <div class="card-subtitle">${escapeHtml(card.subtitle || '专题洞察')}</div>
        <div class="card-source-wrap">
            <a class="card-source" href="${escapeHtml(card.sourceUrl || '#')}" target="_blank" rel="noopener">${escapeHtml(card.source || '来源说明')}</a>
        </div>
    `;

    const renderHero = (hero) => `
        <header class="hero">
            <div class="hero-logo">
                <img src="${escapeHtml(hero.logo || 'assets/logo.svg')}" alt="logo">
            </div>

            <p class="hero-subtitle">${escapeHtml(hero.subtitle || '')}</p>

            <h1>${formatContent(hero.title || '')}</h1>

            <p class="hero-desc">${escapeHtml(hero.description || '')}</p>

            <!-- 
            <a class="hero-button" href="#summary">
                ${escapeHtml(hero.button || '')}
            </a> 
            -->

        </header>
    `;

    const renderSummary = (summary) => `
        <section id="summary" class="summary">
            <div class="summary-card">
                <h2>${escapeHtml(summary.title || '')}</h2>
                <p>${formatContent(summary.content || '')}</p>
            </div>
        </section>
    `;

    const renderTextCard = (card, theme) => `
        <article class="card" style="--chapter-accent:${escapeHtml(theme.accent)}; --chapter-accent-soft:${escapeHtml(theme.soft)};">
            <div class="card-title">${escapeHtml(card.title || '')}</div>
            ${renderCardMeta(card, theme)}
            <div class="card-content">${formatContent(card.content || '')}</div>
        </article>
    `;

    const renderMetricsCard = (card, theme) => `
        <article class="card" style="--chapter-accent:${escapeHtml(theme.accent)}; --chapter-accent-soft:${escapeHtml(theme.soft)};">
            <div class="card-title">${escapeHtml(card.title || '')}</div>
            ${renderCardMeta(card, theme)}
            <div class="card-content">
                <div class="metrics">
                    ${(card.items || []).map((item) => `
                        <div
                            class="metric"
                            data-value="${escapeHtml(item.value || 0)}"
                            data-unit="${escapeHtml(item.unit || '')}"
                        >
                            <div class="metric-value">
                                <span class="metric-number">0</span>
                                <span class="metric-unit"></span>
                            </div>
                            <div class="metric-label">${escapeHtml(item.label || '')}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </article>
    `;

    const renderTimelineCard = (card, theme) => `
        <article class="card" style="--chapter-accent:${escapeHtml(theme.accent)}; --chapter-accent-soft:${escapeHtml(theme.soft)};">
            <div class="card-title">${escapeHtml(card.title || '')}</div>
            ${renderCardMeta(card, theme)}
            <div class="card-content">
                <div class="timeline">
                    ${(card.items || []).map((item) => `
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-card">
                                <div class="timeline-year">${escapeHtml(item.year || '')}</div>
                                <div>${escapeHtml(item.text || '')}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </article>
    `;

    const renderFlowCard = (card, theme) => `
        <article class="card" style="--chapter-accent:${escapeHtml(theme.accent)}; --chapter-accent-soft:${escapeHtml(theme.soft)};">
            <div class="card-title">${escapeHtml(card.title || '')}</div>
            ${renderCardMeta(card, theme)}
            <div class="card-content">
                <div class="flow">
                    ${(card.items || []).map((item, index) => `
                        <div class="flow-item">
                            <h4>${escapeHtml(item || '')}</h4>
                        </div>
                        ${index < (card.items || []).length - 1 ? '<div class="flow-arrow"></div>' : ''}
                    `).join('')}
                </div>
            </div>
        </article>
    `;

    const renderMatrixCard = (card, theme) => `
        <article class="card" style="--chapter-accent:${escapeHtml(theme.accent)}; --chapter-accent-soft:${escapeHtml(theme.soft)};">
            <div class="card-title">${escapeHtml(card.title || '')}</div>
            ${renderCardMeta(card, theme)}
            <div class="card-content">
                <div class="matrix">
                    ${(card.items || []).map((item) => `
                        <div class="matrix-item">
                            <div class="matrix-icon"></div>
                            <div class="matrix-title">${escapeHtml(item.title || '')}</div>
                            <div class="matrix-desc">${escapeHtml(item.desc || '')}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </article>
    `;

    const renderQuoteCard = (card, theme) => `
        <article class="card" style="--chapter-accent:${escapeHtml(theme.accent)}; --chapter-accent-soft:${escapeHtml(theme.soft)};">
            <div class="card-title">${escapeHtml(card.title || '')}</div>
            ${renderCardMeta(card, theme)}
            <div class="card-content">
                <div class="quote">${formatContent(card.content || '')}</div>
            </div>
        </article>
    `;

    const renderCard = (card, theme) => {
        switch (card.type) {
            case 'metrics':
                return renderMetricsCard(card, theme);
            case 'timeline':
                return renderTimelineCard(card, theme);
            case 'flow':
                return renderFlowCard(card, theme);
            case 'matrix':
                return renderMatrixCard(card, theme);
            case 'quote':
                return renderQuoteCard(card, theme);
            default:
                return renderTextCard(card, theme);
        }
    };

    const renderChapter = (chapter, index) => {
        const theme = getChapterTheme(chapter, index);

        return `
            <section class="chapter" style="--chapter-accent:${escapeHtml(theme.accent)}; --chapter-accent-soft:${escapeHtml(theme.soft)};">
                <div class="chapter-header">
                    <div class="chapter-index">${escapeHtml(chapter.id || index + 1)}</div>
                    <div class="chapter-title">${escapeHtml(chapter.title || '')}</div>
                </div>

                <div class="chapter-body">
                    ${(chapter.cards || []).map((card) => renderCard(card, theme)).join('')}
                </div>
            </section>
        `;
    };

    const renderFooter = () => `
        <footer class="footer">
            <div class="footer-logo">西岸科创产业研究</div>
            <p>Copyright © 2026</p>
        </footer>
    `;

    const animateMetricValue = (metricEl) => {
        const numberEl = metricEl.querySelector('.metric-number');
        const unitEl = metricEl.querySelector('.metric-unit');

        if (!numberEl || !unitEl) {
            return;
        }

        const rawValue = metricEl.dataset.value || '0';
        const unit = metricEl.dataset.unit || '';
        const targetValue = Number.parseFloat(rawValue);

        if (!Number.isFinite(targetValue)) {
            numberEl.textContent = rawValue;
            unitEl.textContent = unit;
            return;
        }

        const duration = 1400;
        const startTime = performance.now();

        const tick = (now) => {
            const progress = Math.min(1, (now - startTime) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(targetValue * eased);

            numberEl.textContent = current.toLocaleString('en-US');
            unitEl.textContent = unit;

            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                numberEl.textContent = targetValue.toLocaleString('en-US');
                unitEl.textContent = unit;
            }
        };

        requestAnimationFrame(tick);
    };

    const setupRevealAnimation = () => {
        const targets = document.querySelectorAll('.chapter-header, .card, .metric, .timeline-item, .matrix-item, .flow-item');

        if (!('IntersectionObserver' in window)) {
            targets.forEach((el) => el.classList.add('show'));
            document.querySelectorAll('.metric').forEach((el) => animateMetricValue(el));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add('show');

                if (entry.target.classList.contains('metric') && !entry.target.dataset.animated) {
                    animateMetricValue(entry.target);
                    entry.target.dataset.animated = 'true';
                }

                observer.unobserve(entry.target);
            });
        }, { threshold: 0.2 });

        targets.forEach((el) => observer.observe(el));
    };

    const getWeekData = (data, weekIndex = -1) => {
        const weeks = Array.isArray(data.weeks) && data.weeks.length > 0
            ? data.weeks
            : [{
                label: data.weekLabel || '第1周',
                hero: data.hero || {},
                chapters: data.chapters || []
            }];

        const normalizedIndex = weekIndex < 0 ? weeks.length - 1 : weekIndex;
        const safeIndex = Math.min(Math.max(normalizedIndex, 0), weeks.length - 1);
        return weeks[safeIndex] || weeks[0];
    };

    const renderPagination = (weeks, activeIndex) => `
        <section class="report-pagination">
            <div class="pagination-head">
                <span class="pagination-label">切换查看不同时间段的报告内容</span>
            </div>
            <div class="pagination-list">
                ${(weeks || []).map((week, index) => `
                    <button
                        class="pagination-btn${index === activeIndex ? ' is-active' : ''}"
                        type="button"
                        data-week-index="${index}"
                    >
                        ${escapeHtml(week.label || `第${index + 1}周`)}
                    </button>
                `).join('')}
            </div>
        </section>
    `;

    const renderReport = (data, weekIndex = -1) => {
        const weeks = Array.isArray(data.weeks) && data.weeks.length > 0
            ? data.weeks
            : [{
                label: data.weekLabel || '第1周',
                hero: data.hero || {},
                chapters: data.chapters || []
            }];
        const normalizedIndex = weekIndex < 0 ? weeks.length - 1 : weekIndex;
        const activeWeek = getWeekData(data, normalizedIndex);

        root.innerHTML = `
            ${renderHero(activeWeek.hero || data.hero || {})}
            ${renderPagination(weeks, normalizedIndex)}
            <!-- ${renderSummary(activeWeek.summary || data.summary || {})} -->
            ${(activeWeek.chapters || []).map((chapter, index) => renderChapter(chapter, index)).join('')}
            ${renderFooter()}
        `;

        root.querySelectorAll('.pagination-btn').forEach((button) => {
            button.addEventListener('click', () => {
                const nextIndex = Number(button.dataset.weekIndex || 0);
                renderReport(data, nextIndex);
            });
        });

        setupRevealAnimation();
    };

    const init = () => {
        renderReport(reportData, -1);
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
