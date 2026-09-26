import React from 'react';

const SkillsSection = () => {
  return (
    <section id="skills" class="section-padding">
      <div class="section-header">
        <span class="section-tag">TECHNICAL ARCHITECTURE</span>
        <h2 class="section-title">Core Skills & Technical Competencies</h2>
        <p class="section-description">End-to-end expertise spanning advanced SQL warehousing, Python statistical modeling, and Power BI dashboards.</p>
      </div>

      <div class="skills-grid">
        {/* Skill Category Cards */}
        <div class="skills-card">
          <div class="card-icon emerald-icon"><i class="fa-solid fa-chart-pie"></i></div>
          <h3>BI & Data Visualization</h3>
          <p class="skill-desc">Interactive dashboard design, DAX measures, Power Query data wrangling, and KPI storytelling.</p>
          <ul class="skill-feature-list">
            <li><span>Power BI & Tableau</span></li>
            <li><span>Advanced DAX & Time Intelligence</span></li>
            <li><span>Excel Pivot Tables & VLOOKUP</span></li>
            <li><span>Google Data Studio</span></li>
          </ul>
        </div>

        <div class="skills-card">
          <div class="card-icon cyan-icon"><i class="fa-solid fa-database"></i></div>
          <h3>SQL & Data Warehousing</h3>
          <p class="skill-desc">Star Schema dimensional modeling, PostgreSQL ETL pipelines, and complex CTE queries.</p>
          <ul class="skill-feature-list">
            <li><span>Advanced SQL (PostgreSQL / MySQL)</span></li>
            <li><span>SQL Server & Relational Modeling</span></li>
            <li><span>Dimensional Modeling & Star Schema</span></li>
            <li><span>ETL Concepts & Query Optimization</span></li>
          </ul>
        </div>

        <div class="skills-card">
          <div class="card-icon purple-icon"><i class="fa-brands fa-python"></i></div>
          <h3>Python & Statistical Analytics</h3>
          <p class="skill-desc">Exploratory data analysis, customer churn modeling, and automated data wrangling scripts.</p>
          <ul class="skill-feature-list">
            <li><span>Python (Advanced Pandas & NumPy)</span></li>
            <li><span>Statistical Analysis & Cohort Analysis</span></li>
            <li><span>A/B Testing & Behavioral Scoring</span></li>
            <li><span>Git & Version Control</span></li>
          </ul>
        </div>

        <div class="skills-card">
          <div class="card-icon amber-icon"><i class="fa-solid fa-cloud"></i></div>
          <h3>Cloud & Big Data</h3>
          <p class="skill-desc">Modern cloud data infrastructure for scalable enterprise warehousing and analytics.</p>
          <ul class="skill-feature-list">
            <li><span>AWS (Redshift, S3)</span></li>
            <li><span>Google Cloud (BigQuery)</span></li>
            <li><span>Microsoft Azure</span></li>
            <li><span>Apache Spark Concepts</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
