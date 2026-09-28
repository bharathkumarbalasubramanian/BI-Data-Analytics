import React, { useState } from 'react';
import { Github, Briefcase, MapPin, PieChart, RefreshCw } from 'lucide-react';
import profileImg from '../../assets/profile.png';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('revenue');

  return (
    <section id="hero" class="hero-section">
      <div class="hero-container">
        <div class="hero-text-content">
          <div class="hero-badge">
            <span class="pulse-status"></span>
            <span>Available for BI Analyst Roles & Consulting</span>
          </div>

          <h1 class="hero-title">
            Transforming Complex Datasets into <span class="text-gradient">Strategic Business Intelligence</span>
          </h1>

          <p class="hero-subtitle">
            Hi, I'm <strong>Bharathkumar B</strong>. I engineer end-to-end SQL data pipelines, star schema PostgreSQL data models, and interactive Power BI dashboards that drive data-backed executive decision making.
          </p>

          <div class="hero-cta-group">
            <a href="#projects" class="btn btn-primary btn-lg">
              <i class="fa-solid fa-cubes"></i> Explore Case Studies
            </a>
            <a href="https://github.com/bharathkumarbalasubramanian/BI-Data-Analytics.git" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-lg">
              <i class="fa-brands fa-github"></i> BI Repository
            </a>
          </div>

          {/* Micro KPI Highlights */}
          <div class="hero-kpi-row">
            <div class="kpi-box">
              <span class="kpi-value">100K+</span>
              <span class="kpi-label">ETL Records Ingested</span>
            </div>
            <div class="kpi-divider"></div>
            <div class="kpi-box">
              <span class="kpi-value">12%</span>
              <span class="kpi-label">Revenue Leakage Solved</span>
            </div>
            <div class="kpi-divider"></div>
            <div class="kpi-box">
              <span class="kpi-value">10+ Hrs</span>
              <span class="kpi-label">Weekly Automation Saved</span>
            </div>
          </div>
        </div>

        {/* Hero 3D Profile & Live Widget Card */}
        <div class="hero-visual-card hero-profile-card">
          <div class="hero-profile-banner">
            <div className="profile-avatar-wrapper">
              <img src={profileImg} alt="Bharathkumar B - BI Analyst" className="profile-photo-img" />
            </div>
            <div class="profile-info-content">
              <h3>Bharathkumar B</h3>
              <p><i class="fa-solid fa-briefcase"></i> Junior Business Intelligence Analyst</p>
              <div class="profile-location-tag">
                <i class="fa-solid fa-location-dot text-cyan"></i> Hosur, Tamil Nadu • DSU B.Tech AI & Data Science
              </div>
            </div>
          </div>

          <div class="widget-header">
            <div class="widget-title">
              <i class="fa-solid fa-chart-pie text-emerald"></i>
              <span>Live Analytics Dashboard Widget</span>
            </div>
            <div class="widget-tabs">
              <button
                class={`w-tab ${activeTab === 'revenue' ? 'active' : ''}`}
                onClick={() => setActiveTab('revenue')}
              >
                SaaS MRR
              </button>
              <button
                class={`w-tab ${activeTab === 'churn' ? 'active' : ''}`}
                onClick={() => setActiveTab('churn')}
              >
                Retention
              </button>
              <button
                class={`w-tab ${activeTab === 'pipeline' ? 'active' : ''}`}
                onClick={() => setActiveTab('pipeline')}
              >
                ETL Speed
              </button>
            </div>
          </div>

          <div class="widget-body" id="hero-widget-canvas">
            {activeTab === 'revenue' && (
              <svg viewBox="0 0 460 200" style={{ width: '100%', height: '100%', fontFamily: 'var(--font-sans)' }}>
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                <line x1="40" y1="30" x2="440" y2="30" stroke="var(--border-color)" strokeDasharray="3 3" />
                <line x1="40" y1="80" x2="440" y2="80" stroke="var(--border-color)" strokeDasharray="3 3" />
                <line x1="40" y1="130" x2="440" y2="130" stroke="var(--border-color)" strokeDasharray="3 3" />
                <line x1="40" y1="170" x2="440" y2="170" stroke="var(--border-color)" />

                <path d="M40,170 L40,120 Q100,60 160,90 T280,50 T400,30 L440,25 L440,170 Z" fill="url(#areaGrad)" />
                <path d="M40,120 Q100,60 160,90 T280,50 T400,30 L440,25" fill="none" stroke="#10b981" strokeWidth="3" />

                <circle cx="160" cy="90" r="5" fill="#10b981" />
                <circle cx="280" cy="50" r="5" fill="#06b6d4" />
                <circle cx="440" cy="25" r="6" fill="#f59e0b" />

                <rect x="290" y="70" width="140" height="42" rx="6" fill="var(--bg-card)" stroke="#10b981" strokeWidth="1.5" />
                <text x="300" y="88" fill="var(--text-primary)" fontSize="11" fontWeight="bold">Q4 Revenue: +34.2%</text>
                <text x="300" y="102" fill="#10b981" fontSize="10">DAX Target Exceeded</text>
              </svg>
            )}

            {activeTab === 'churn' && (
              <svg viewBox="0 0 460 200" style={{ width: '100%', height: '100%', fontFamily: 'var(--font-sans)' }}>
                <rect x="50" y="120" width="40" height="50" rx="4" fill="#10b981" />
                <text x="70" y="110" fill="var(--text-primary)" fontSize="10" textAnchor="middle">Low Risk</text>

                <rect x="130" y="80" width="40" height="90" rx="4" fill="#06b6d4" />
                <text x="150" y="70" fill="var(--text-primary)" fontSize="10" textAnchor="middle">Medium</text>

                <rect x="210" y="40" width="40" height="130" rx="4" fill="#f59e0b" />
                <text x="230" y="30" fill="var(--text-primary)" fontSize="10" textAnchor="middle">High Risk</text>

                <rect x="290" y="140" width="40" height="30" rx="4" fill="#10b981" />
                <text x="310" y="130" fill="var(--text-primary)" fontSize="10" textAnchor="middle">Retained</text>

                <rect x="350" y="40" width="100" height="70" rx="6" fill="var(--bg-card)" stroke="var(--border-color)" />
                <text x="360" y="60" fill="var(--text-secondary)" fontSize="10">Leakage Saved</text>
                <text x="360" y="82" fill="#10b981" fontSize="16" fontWeight="bold">12%</text>
              </svg>
            )}

            {activeTab === 'pipeline' && (
              <svg viewBox="0 0 460 200" style={{ width: '100%', height: '100%', fontFamily: 'var(--font-mono)' }}>
                <text x="50" y="40" fill="var(--text-secondary)" fontSize="11">Legacy SQL Query (45 mins)</text>
                <rect x="50" y="50" width="360" height="24" rx="4" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" />

                <text x="50" y="120" fill="var(--text-primary)" fontSize="11" fontWeight="bold">PostgreSQL Star Schema ETL (4 secs)</text>
                <rect x="50" y="130" width="60" height="24" rx="4" fill="#10b981" />
                <text x="120" y="146" fill="#10b981" fontSize="11" fontWeight="bold">⚡ 75% Latency Reduction</text>
              </svg>
            )}
          </div>

          <div class="widget-footer">
            <span class="sync-tag"><i class="fa-solid fa-arrows-rotate fa-spin"></i> Live Data Feed Sync: 100%</span>
            <span class="engine-tag">PostgreSQL // Power BI Engine</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
