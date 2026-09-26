import React from 'react';
import { Briefcase, GraduationCap, Award, BookOpen, Target, MessageSquare } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" class="section-padding">
      <div class="section-header">
        <span class="section-tag">TRACK RECORD</span>
        <h2 class="section-title">Experience & Education</h2>
        <p class="section-description">Practical market analytics internship experience backed by a solid academic background in AI & Data Science.</p>
      </div>

      <div class="timeline-container">
        {/* Timeline Item 1: Experience */}
        <div class="timeline-item">
          <div class="timeline-marker"><Briefcase size={20} /></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <div>
                <h3 class="role-title">Market Analyst Intern</h3>
                <span class="company-name">WRINGG • Bangalore, Karnataka</span>
              </div>
              <span class="time-period">June 2026 – August 2026</span>
            </div>
            <ul class="role-highlights">
              <li>Spearheaded customer retention analysis and churn prediction initiatives, analyzing behavioral datasets to identify high-risk user segments and propose targeted mitigation strategies.</li>
              <li>Optimized rider price management frameworks and conducted comprehensive competitor analysis, leveraging market trends to balance user acquisition with revenue goals.</li>
              <li>Contributed to core Application Product Requirements Documents (PRDs) by defining Key Performance Indicators (KPIs) and building data visualizations to deliver actionable insights to cross-functional teams.</li>
            </ul>
            <div class="tech-tags">
              <span>SQL</span><span>Python</span><span>Power BI</span><span>Customer Retention</span><span>Competitor Analysis</span><span>KPI PRDs</span>
            </div>
          </div>
        </div>

        {/* Timeline Item 2: Education */}
        <div class="timeline-item cert-item">
          <div class="timeline-marker cert-marker"><GraduationCap size={20} /></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <div>
                <h3 class="role-title">Bachelor of Technology in Artificial Intelligence and Data Science</h3>
                <span class="company-name">Dhanalakshmi Srinivasan University • Trichy, Tamil Nadu</span>
              </div>
              <span class="time-period">August 2023 – July 2027</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '12px' }}>
              Focus on Machine Learning, Database Management Systems, Data Structures, Statistical Analysis, and Big Data Technologies.
            </p>
            <div class="tech-tags">
              <span>Data Science</span><span>Artificial Intelligence</span><span>SQL Databases</span><span>Python Analytics</span><span>Machine Learning</span>
            </div>
          </div>
        </div>

        {/* Competencies Highlight */}
        <div class="timeline-item cert-item">
          <div class="timeline-marker cert-marker"><Award size={20} /></div>
          <div class="timeline-content">
            <h3 class="role-title">Core Competencies & Domain Expertise</h3>
            <div class="cert-grid">
              <div class="cert-card">
                <BookOpen size={22} className="text-amber" />
                <div>
                  <strong>Data Storytelling & Executive Reporting</strong>
                  <p>Translating complex technical metrics into actionable business clarity.</p>
                </div>
              </div>
              <div class="cert-card">
                <Target size={22} className="text-cyan" />
                <div>
                  <strong>Data-Driven Decision Making</strong>
                  <p>Conducting cohort analysis, A/B testing, and KPI tracking.</p>
                </div>
              </div>
              <div class="cert-card">
                <MessageSquare size={22} className="text-emerald" />
                <div>
                  <strong>Cross-Functional Communication</strong>
                  <p>Collaborating with product, business, and data engineering teams.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
