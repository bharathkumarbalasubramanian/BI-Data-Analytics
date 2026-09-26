/**
 * PROJECTS GALLERY & CASE STUDY MODAL SYSTEM
 * Bharathkumar B - BI Analyst Portfolio
 */

const projectsData = [
    {
        id: "p1",
        title: "SaaS Revenue & Churn Analytics Dashboard",
        category: "powerbi",
        categoryLabel: "Power BI & SQL",
        roiTag: "12% Revenue Leakage Solved",
        shortDesc: "Engineered an end-to-end ETL pipeline using Python and SQL to clean & load 100K+ records into PostgreSQL with a Star Schema for Power BI MRR & Churn tracking.",
        techStack: ["SQL", "Power BI", "Python (Pandas)", "PostgreSQL", "Star Schema"],
        problem: "Mid-tier SaaS subscription plans suffered from silent churn and unmonitored revenue leakage across 100,000+ transactional records, with no centralized data warehouse.",
        solution: "Engineered a robust Star Schema relational data model in PostgreSQL. Built an automated Python ETL pipeline and deployed an interactive Power BI dashboard tracking Monthly Recurring Revenue (MRR), Customer Acquisition Cost (CAC), and cohort-based churn rates.",
        daxSnippet: `-- Star Schema Dimensional ETL & Revenue Leakage Detection Query
WITH MonthlyBilling AS (
    SELECT 
        c.customer_id,
        c.subscription_plan,
        DATE_TRUNC('month', t.transaction_date) AS billing_month,
        SUM(t.amount) AS total_paid,
        p.expected_price
    FROM fact_transactions t
    JOIN dim_customers c ON t.customer_id = c.customer_id
    JOIN dim_plans p ON c.plan_id = p.plan_id
    GROUP BY 1, 2, 3, 5
)
SELECT 
    billing_month,
    subscription_plan,
    COUNT(customer_id) AS active_subscribers,
    SUM(expected_price - total_paid) AS revenue_leakage
FROM MonthlyBilling
WHERE total_paid < expected_price
GROUP BY 1, 2
ORDER BY billing_month DESC;`,
        results: [
            "Engineered end-to-end ETL pipeline ingesting 100K+ transactional records into PostgreSQL.",
            "Formulated actionable insights identifying a 12% revenue leakage in mid-tier subscription plans.",
            "Delivered real-time Power BI dashboard for tracking MRR, CAC, and cohort retention rates."
        ],
        chartType: "bar",
        githubUrl: "https://github.com/bharathkumarbalasubramanian/BI-Data-Analytics"
    },
    {
        id: "p2",
        title: "Supply Chain & Inventory Optimization Model",
        category: "excel",
        categoryLabel: "Python & Advanced Excel",
        roiTag: "Saved 10+ Hours/Wk",
        shortDesc: "Analyzed historical logistics data using Python & SQL to predict stockout risks, automating Power Query & DAX workflows across distribution centers.",
        techStack: ["Python", "Excel (Power Query)", "DAX", "SQL", "Statistical Modeling"],
        problem: "Distribution centers faced stockout risks and bloated holding costs due to manual weekly Excel reporting and static reorder point calculations.",
        solution: "Utilized Python for data wrangling and statistical demand forecasting. Automated end-to-end data transformation using Excel Power Query and built dynamic DAX measures for inventory turnover ratios.",
        daxSnippet: `// DAX Measure for Dynamic Reorder Point Alert Trigger
Reorder_Status = 
VAR CurrentStock = SUM(Inventory[Current_Units])
VAR SafetyStock = [Avg_Daily_Demand] * [Lead_Time_Days] * 1.2
VAR ReorderPoint = SafetyStock + [Avg_Daily_Demand] * [Lead_Time_Days]
RETURN
IF(
    CurrentStock <= ReorderPoint,
    "CRITICAL: REORDER REQUIRED",
    "OPTIMAL"
)`,
        results: [
            "Automated weekly data transformation workflows in Excel Power Query, cutting reporting time by 10+ hours.",
            "Mitigated excess inventory holding costs by identifying seasonal demand patterns using Python.",
            "Created dynamic DAX dashboards visualizing lead-time bottlenecks across multiple distribution centers."
        ],
        chartType: "line",
        githubUrl: "https://github.com/bharathkumarbalasubramanian/BI-Data-Analytics"
    },
    {
        id: "p3",
        title: "Customer Retention & Churn Prediction (WRINGG Intern)",
        category: "python",
        categoryLabel: "Python & Market BI",
        roiTag: "High-Risk Segment Targeted",
        shortDesc: "Spearheaded retention analysis and churn prediction initiatives at WRINGG, analyzing rider behavior and optimizing price management frameworks.",
        techStack: ["Python", "SQL", "Cohort Analysis", "Power BI", "A/B Testing"],
        problem: "Ride-hailing platform needed targeted mitigation strategies for high-risk user churn and optimized rider pricing models to balance acquisition with revenue.",
        solution: "Analyzed behavioral user datasets in Python and PostgreSQL to identify churn triggers. Defined core PRD Key Performance Indicators and built executive visualizations for cross-functional teams.",
        daxSnippet: `# Python Behavioral Churn Risk Score Segmentation
import pandas as pd
import numpy as np

def calculate_rider_churn_risk(df):
    # Recency, Frequency, Value Scoring
    df['Recency_Score'] = pd.qcut(df['days_since_last_ride'], q=5, labels=[5, 4, 3, 2, 1])
    df['Trip_Frequency_Score'] = pd.qcut(df['total_trips_completed'].rank(method='first'), q=5, labels=[1, 2, 3, 4, 5])
    df['Churn_Risk_Level'] = np.where(
        (df['Recency_Score'] <= 2) & (df['Trip_Frequency_Score'] <= 2),
        'High Risk Churn',
        'Healthy User'
    )
    return df`,
        results: [
            "Spearheaded retention initiatives analyzing user behavioral datasets for targeted mitigation.",
            "Optimized rider price management frameworks balancing user acquisition with revenue goals.",
            "Contributed to core PRDs by defining KPIs and executive visual dashboards."
        ],
        chartType: "pie",
        githubUrl: "https://github.com/bharathkumarbalasubramanian/BI-Data-Analytics"
    },
    {
        id: "p4",
        title: "Dimensional Modeling & Data Warehouse Architecture",
        category: "sql",
        categoryLabel: "SQL Warehousing",
        roiTag: "Star Schema Optimization",
        shortDesc: "Architected scalable Kimball Star Schema models in PostgreSQL/MySQL, designing CTEs and window functions for high-speed multi-year reporting.",
        techStack: ["PostgreSQL", "SQL Server", "ETL Concepts", "Star Schema", "BigQuery"],
        problem: "Unstructured transactional tables produced query latency over 30 seconds and redundant calculations in executive Power BI dashboards.",
        solution: "Designed a centralized dimensional star schema separating Fact tables from Dimension tables. Implemented optimized foreign key indexing and window functions.",
        daxSnippet: `-- Dimensional Window Query for Cohort Retention Trends
SELECT 
    customer_id,
    order_date,
    FIRST_VALUE(order_date) OVER(
        PARTITION BY customer_id 
        ORDER BY order_date ASC
    ) AS cohort_first_date,
    DENSE_RANK() OVER(
        PARTITION BY customer_id 
        ORDER BY DATE_TRUNC('month', order_date) ASC
    ) AS cohort_month_index
FROM fact_sales_transactions;`,
        results: [
            "Reduced query execution time by 75% across multi-year transactional datasets.",
            "Designed reusable dimensional models for scalable business intelligence reporting.",
            "Standardized ETL transformation logic across SQL and cloud data warehouses."
        ],
        chartType: "gauge",
        githubUrl: "https://github.com/bharathkumarbalasubramanian/BI-Data-Analytics"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initProjectsGrid();
    initFilterAndSearch();
    initModalEvents();
});

function initProjectsGrid() {
    renderProjects(projectsData);
}

function renderProjects(projects) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    if (projects.length === 0) {
        grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">
            <i class="fa-solid fa-folder-open" style="font-size: 2rem; margin-bottom: 12px;"></i>
            <p>No matching case studies found.</p>
        </div>`;
        return;
    }

    grid.innerHTML = projects.map(p => `
        <div class="project-card" data-id="${p.id}">
            <div class="project-card-header">
                <div class="project-badge-row">
                    <span class="category-tag">${p.categoryLabel}</span>
                    <span class="roi-badge"><i class="fa-solid fa-bolt"></i> ${p.roiTag}</span>
                </div>
                
                <h3 class="project-title">${p.title}</h3>
                <p class="project-snippet">${p.shortDesc}</p>
            </div>

            <div class="project-mockup-area">
                ${generateMockupSVG(p.chartType)}
            </div>

            <div class="project-card-footer">
                <div class="tech-pill-group">
                    ${p.techStack.slice(0, 3).map(t => `<span>${t}</span>`).join('')}
                </div>
                <span class="case-study-link">View Details <i class="fa-solid fa-arrow-right"></i></span>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            openCaseStudyModal(id);
        });
    });
}

function generateMockupSVG(type) {
    if (type === 'bar') {
        return `
        <svg viewBox="0 0 200 70" style="width: 100%; height: 70px;">
            <rect x="20" y="30" width="20" height="35" rx="3" fill="#10b981" />
            <rect x="55" y="15" width="20" height="50" rx="3" fill="#06b6d4" />
            <rect x="90" y="25" width="20" height="40" rx="3" fill="#f59e0b" />
            <rect x="125" y="10" width="20" height="55" rx="3" fill="#8b5cf6" />
            <rect x="160" y="20" width="20" height="45" rx="3" fill="#10b981" />
        </svg>`;
    } else if (type === 'line') {
        return `
        <svg viewBox="0 0 200 70" style="width: 100%; height: 70px;">
            <path d="M10,50 Q50,10 100,40 T190,15" fill="none" stroke="#06b6d4" stroke-width="3" />
            <circle cx="190" cy="15" r="4" fill="#10b981" />
        </svg>`;
    } else {
        return `
        <svg viewBox="0 0 200 70" style="width: 100%; height: 70px;">
            <circle cx="100" cy="35" r="28" fill="#10b981" />
            <path d="M100,35 L128,35 A28,28 0 0,0 100,7 Z" fill="#f59e0b" />
        </svg>`;
    }
}

function initFilterAndSearch() {
    const filterBtns = document.querySelectorAll('.p-btn');
    const searchInput = document.getElementById('project-search-input');

    let currentFilter = 'all';
    let searchQuery = '';

    function apply() {
        const filtered = projectsData.filter(p => {
            const matchesCat = currentFilter === 'all' || p.category === currentFilter;
            const matchesSearch = p.title.toLowerCase().includes(searchQuery) ||
                                  p.shortDesc.toLowerCase().includes(searchQuery) ||
                                  p.techStack.some(t => t.toLowerCase().includes(searchQuery));
            return matchesCat && matchesSearch;
        });

        renderProjects(filtered);
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            apply();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            apply();
        });
    }
}

function openCaseStudyModal(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;

    const modal = document.getElementById('case-study-modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body-content');

    if (title) title.textContent = project.title;
    if (body) {
        body.innerHTML = `
            <div style="margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                <div>
                    <span class="category-tag">${project.categoryLabel}</span>
                    <span class="roi-badge" style="margin-left: 8px;"><i class="fa-solid fa-bolt"></i> ${project.roiTag}</span>
                </div>
                <a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-secondary" style="padding: 4px 12px; font-size: 0.8rem;">
                    <i class="fa-brands fa-github"></i> Repository
                </a>
            </div>

            <h4 style="color: var(--emerald-primary); margin-bottom: 6px;">Business Problem</h4>
            <p style="color: var(--text-secondary); margin-bottom: 16px; font-size: 0.95rem;">${project.problem}</p>

            <h4 style="color: var(--emerald-primary); margin-bottom: 6px;">Technical Solution & Architecture</h4>
            <p style="color: var(--text-secondary); margin-bottom: 16px; font-size: 0.95rem;">${project.solution}</p>

            <h4 style="color: var(--emerald-primary); margin-bottom: 6px;">SQL / DAX / Python Code Snippet</h4>
            <div class="code-snippet-box"><pre><code>${escapeHTML(project.daxSnippet)}</code></pre></div>

            <h4 style="color: var(--emerald-primary); margin-bottom: 6px; margin-top: 16px;">Verified Impact & Key Deliverables</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
                ${project.results.map(r => `<li style="font-size: 0.9rem; color: var(--text-primary);"><i class="fa-solid fa-check text-emerald" style="margin-right: 8px;"></i> ${r}</li>`).join('')}
            </ul>
        `;
    }

    if (modal) {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    }
}

function initModalEvents() {
    const modal = document.getElementById('case-study-modal');
    const closeIcon = document.getElementById('modal-close');

    function close() {
        if (modal) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
        }
    }

    if (closeIcon) closeIcon.addEventListener('click', close);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) close();
        });
    }
}

function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
