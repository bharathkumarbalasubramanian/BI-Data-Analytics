/**
 * DASHBOARD & INTERACTIVE CHARTS CONTROLLER
 * Handles Hero widget tab switching, animated KPI counters, and programmatic SVG charts.
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeroWidget();
    initKpiCounters();
    initSkillChart('tech');
    initSkillChartTabs();
});

/* --------------------------------------------------------------------------
   1. Hero Interactive Widget Tabs
   -------------------------------------------------------------------------- */
function initHeroWidget() {
    const canvas = document.getElementById('hero-widget-canvas');
    const tabs = document.querySelectorAll('.w-tab');

    if (!canvas) return;

    // Render default widget chart
    renderHeroChart('revenue');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const view = tab.getAttribute('data-wtab');
            renderHeroChart(view);
        });
    });
}

function renderHeroChart(view) {
    const canvas = document.getElementById('hero-widget-canvas');
    if (!canvas) return;

    if (view === 'revenue') {
        canvas.innerHTML = `
        <svg viewBox="0 0 460 200" style="width: 100%; height: 100%; font-family: var(--font-sans);">
            <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#10b981" stop-opacity="0.4" />
                    <stop offset="100%" stop-color="#10b981" stop-opacity="0.0" />
                </linearGradient>
            </defs>

            <!-- Grid -->
            <line x1="40" y1="30" x2="440" y2="30" stroke="var(--border-color)" stroke-dasharray="3 3" />
            <line x1="40" y1="80" x2="440" y2="80" stroke="var(--border-color)" stroke-dasharray="3 3" />
            <line x1="40" y1="130" x2="440" y2="130" stroke="var(--border-color)" stroke-dasharray="3 3" />
            <line x1="40" y1="170" x2="440" y2="170" stroke="var(--border-color)" />

            <!-- Area Path -->
            <path d="M40,170 L40,120 Q100,60 160,90 T280,50 T400,30 L440,25 L440,170 Z" fill="url(#areaGrad)" />
            
            <!-- Trend Line -->
            <path d="M40,120 Q100,60 160,90 T280,50 T400,30 L440,25" fill="none" stroke="#10b981" stroke-width="3" />

            <!-- Points -->
            <circle cx="160" cy="90" r="5" fill="#10b981" />
            <circle cx="280" cy="50" r="5" fill="#06b6d4" />
            <circle cx="440" cy="25" r="6" fill="#f59e0b" />

            <!-- Tooltip Card -->
            <rect x="290" y="70" width="140" height="42" rx="6" fill="var(--bg-card)" stroke="#10b981" stroke-width="1.5" />
            <text x="300" y="88" fill="var(--text-primary)" font-size="11" font-weight="bold">Q4 Revenue: +34.2%</text>
            <text x="300" y="102" fill="#10b981" font-size="10">DAX Target Exceeded</text>
        </svg>`;
    } else if (view === 'churn') {
        canvas.innerHTML = `
        <svg viewBox="0 0 460 200" style="width: 100%; height: 100%; font-family: var(--font-sans);">
            <!-- Churn Risk Bars -->
            <rect x="50" y="120" width="40" height="50" rx="4" fill="#10b981" />
            <text x="70" y="110" fill="var(--text-primary)" font-size="10" text-anchor="middle">Low Risk</text>
            
            <rect x="130" y="80" width="40" height="90" rx="4" fill="#06b6d4" />
            <text x="150" y="70" fill="var(--text-primary)" font-size="10" text-anchor="middle">Medium</text>
            
            <rect x="210" y="40" width="40" height="130" rx="4" fill="#f59e0b" />
            <text x="230" y="30" fill="var(--text-primary)" font-size="10" text-anchor="middle">High Risk</text>

            <rect x="290" y="140" width="40" height="30" rx="4" fill="#10b981" />
            <text x="310" y="130" fill="var(--text-primary)" font-size="10" text-anchor="middle">Retained</text>

            <!-- Metric Box -->
            <rect x="350" y="40" width="100" height="70" rx="6" fill="var(--bg-card)" stroke="var(--border-color)" />
            <text x="360" y="60" fill="var(--text-secondary)" font-size="10">Arr Saved</text>
            <text x="360" y="82" fill="#10b981" font-size="16" font-weight="bold">$140,000</text>
        </svg>`;
    } else if (view === 'pipeline') {
        canvas.innerHTML = `
        <svg viewBox="0 0 460 200" style="width: 100%; height: 100%; font-family: var(--font-mono);">
            <!-- Legacy vs Snowflake Pipeline -->
            <text x="50" y="40" fill="var(--text-secondary)" font-size="11">Legacy MySQL (45 mins)</text>
            <rect x="50" y="50" width="360" height="24" rx="4" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" />
            
            <text x="50" y="120" fill="var(--text-primary)" font-size="11" font-weight="bold">Snowflake + dbt Model (4 secs)</text>
            <rect x="50" y="130" width="60" height="24" rx="4" fill="#10b981" />
            <text x="120" y="146" fill="#10b981" font-size="11" font-weight="bold">⚡ 65% Latency Reduction</text>
        </svg>`;
    }
}


/* --------------------------------------------------------------------------
   2. KPI Counter Animation
   -------------------------------------------------------------------------- */
function initKpiCounters() {
    const kpiElements = document.querySelectorAll('.kpi-value[data-target]');
    let started = false;

    function startCount() {
        if (started) return;
        started = true;

        kpiElements.forEach(elem => {
            const target = parseFloat(elem.getAttribute('data-target'));
            const duration = 1600;
            const step = 20;
            const steps = duration / step;
            const inc = target / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += inc;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }

                if (elem.textContent.includes('$')) {
                    elem.textContent = `$${Math.round(current)}K+`;
                } else if (elem.textContent.includes('%')) {
                    elem.textContent = `${Math.round(current)}%`;
                } else {
                    elem.textContent = `${Math.round(current)}+`;
                }
            }, step);
        });
    }

    const hero = document.getElementById('hero');
    if (hero) {
        const obs = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) startCount();
        }, { threshold: 0.1 });
        obs.observe(hero);
    }
}


/* --------------------------------------------------------------------------
   3. Interactive Skill Matrix Chart
   -------------------------------------------------------------------------- */
function initSkillChartTabs() {
    const tabs = document.querySelectorAll('.c-pill');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const view = tab.getAttribute('data-view');
            initSkillChart(view);
        });
    });
}

function initSkillChart(view) {
    const container = document.getElementById('skill-chart-canvas');
    if (!container) return;

    if (view === 'tech') {
        container.innerHTML = `
        <svg viewBox="0 0 600 220" style="width: 100%; height: 100%; font-family: var(--font-sans);">
            <!-- Horizontal Bar Graph for Skills -->
            <text x="120" y="35" fill="var(--text-primary)" font-size="12" font-weight="600" text-anchor="end">Power BI & DAX</text>
            <rect x="130" y="22" width="400" height="18" rx="4" fill="var(--border-color)" />
            <rect x="130" y="22" width="368" height="18" rx="4" fill="#10b981" />
            <text x="505" y="36" fill="#10b981" font-size="11" font-weight="bold">92%</text>

            <text x="120" y="85" fill="var(--text-primary)" font-size="12" font-weight="600" text-anchor="end">SQL & Snowflake</text>
            <rect x="130" y="72" width="400" height="18" rx="4" fill="var(--border-color)" />
            <rect x="130" y="72" width="380" height="18" rx="4" fill="#06b6d4" />
            <text x="518" y="86" fill="#06b6d4" font-size="11" font-weight="bold">95%</text>

            <text x="120" y="135" fill="var(--text-primary)" font-size="12" font-weight="600" text-anchor="end">Advanced Excel</text>
            <rect x="130" y="122" width="400" height="18" rx="4" fill="var(--border-color)" />
            <rect x="130" y="122" width="384" height="18" rx="4" fill="#f59e0b" />
            <text x="522" y="136" fill="#f59e0b" font-size="11" font-weight="bold">96%</text>

            <text x="120" y="185" fill="var(--text-primary)" font-size="12" font-weight="600" text-anchor="end">Python Analytics</text>
            <rect x="130" y="172" width="400" height="18" rx="4" fill="var(--border-color)" />
            <rect x="130" y="172" width="352" height="18" rx="4" fill="#8b5cf6" />
            <text x="490" y="186" fill="#8b5cf6" font-size="11" font-weight="bold">88%</text>
        </svg>`;
    } else {
        container.innerHTML = `
        <svg viewBox="0 0 600 220" style="width: 100%; height: 100%; font-family: var(--font-sans);">
            <!-- Flow Architecture Diagram -->
            <rect x="30" y="80" width="110" height="60" rx="8" fill="var(--bg-canvas)" stroke="#06b6d4" stroke-width="2" />
            <text x="85" y="107" fill="var(--text-primary)" font-size="11" font-weight="bold" text-anchor="middle">Raw Data</text>
            <text x="85" y="124" fill="var(--text-secondary)" font-size="9" text-anchor="middle">APIs, CSV, SQL</text>

            <path d="M140,110 L190,110" stroke="var(--emerald-primary)" stroke-width="2" marker-end="url(#arrow)" />

            <rect x="190" y="80" width="130" height="60" rx="8" fill="var(--bg-canvas)" stroke="#10b981" stroke-width="2" />
            <text x="255" y="107" fill="var(--text-primary)" font-size="11" font-weight="bold" text-anchor="middle">Snowflake + dbt</text>
            <text x="255" y="124" fill="var(--text-secondary)" font-size="9" text-anchor="middle">ETL Transformation</text>

            <path d="M320,110 L370,110" stroke="var(--emerald-primary)" stroke-width="2" />

            <rect x="370" y="80" width="130" height="60" rx="8" fill="var(--bg-canvas)" stroke="#f59e0b" stroke-width="2" />
            <text x="435" y="107" fill="var(--text-primary)" font-size="11" font-weight="bold" text-anchor="middle">Power BI / DAX</text>
            <text x="435" y="124" fill="var(--text-secondary)" font-size="9" text-anchor="middle">Executive Insights</text>
        </svg>`;
    }
}
