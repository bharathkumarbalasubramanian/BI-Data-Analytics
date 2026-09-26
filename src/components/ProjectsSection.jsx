import React, { useState } from 'react';
import { Search, ArrowRight, Bolt } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const ProjectsSection = ({ onSelectProject }) => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredProjects = projectsData.filter(p => {
    const matchesCat = filter === 'all' || p.category === filter;
    const searchLower = search.toLowerCase().trim();
    const matchesSearch =
      !searchLower ||
      p.title.toLowerCase().includes(searchLower) ||
      p.shortDesc.toLowerCase().includes(searchLower) ||
      p.techStack.some(t => t.toLowerCase().includes(searchLower));
    return matchesCat && matchesSearch;
  });

  const generateMockupSVG = (type) => {
    if (type === 'bar') {
      return (
        <svg viewBox="0 0 200 70" style={{ width: '100%', height: '70px' }}>
          <rect x="20" y="30" width="20" height="35" rx="3" fill="#10b981" />
          <rect x="55" y="15" width="20" height="50" rx="3" fill="#06b6d4" />
          <rect x="90" y="25" width="20" height="40" rx="3" fill="#f59e0b" />
          <rect x="125" y="10" width="20" height="55" rx="3" fill="#8b5cf6" />
          <rect x="160" y="20" width="20" height="45" rx="3" fill="#10b981" />
        </svg>
      );
    } else if (type === 'line') {
      return (
        <svg viewBox="0 0 200 70" style={{ width: '100%', height: '70px' }}>
          <path d="M10,50 Q50,10 100,40 T190,15" fill="none" stroke="#06b6d4" strokeWidth="3" />
          <circle cx="190" cy="15" r="4" fill="#10b981" />
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 200 70" style={{ width: '100%', height: '70px' }}>
          <circle cx="100" cy="35" r="28" fill="#10b981" />
          <path d="M100,35 L128,35 A28,28 0 0,0 100,7 Z" fill="#f59e0b" />
        </svg>
      );
    }
  };

  return (
    <section id="projects" class="section-padding bg-alt">
      <div class="section-header">
        <span class="section-tag">PORTFOLIO CASE STUDIES</span>
        <h2 class="section-title">Featured Business Intelligence Projects</h2>
        <p class="section-description">Real-world data analytics projects detailing ETL pipeline design, star schema models, and business ROI.</p>

        {/* Filter Controls */}
        <div class="project-filter-bar">
          <div class="filter-buttons">
            <button class={`p-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Projects</button>
            <button class={`p-btn ${filter === 'powerbi' ? 'active' : ''}`} onClick={() => setFilter('powerbi')}>Power BI</button>
            <button class={`p-btn ${filter === 'sql' ? 'active' : ''}`} onClick={() => setFilter('sql')}>SQL Warehousing</button>
            <button class={`p-btn ${filter === 'python' ? 'active' : ''}`} onClick={() => setFilter('python')}>Python Analytics</button>
            <button class={`p-btn ${filter === 'excel' ? 'active' : ''}`} onClick={() => setFilter('excel')}>Excel Modeling</button>
          </div>
          <div class="project-search">
            <Search size={16} className="text-subtle" />
            <input
              type="text"
              placeholder="Search case studies by keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div class="projects-grid" id="projects-grid">
        {filteredProjects.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
            <i class="fa-solid fa-folder-open" style={{ fontSize: '2rem', marginBottom: '12px' }}></i>
            <p>No matching case studies found.</p>
          </div>
        ) : (
          filteredProjects.map((p) => (
            <div key={p.id} class="project-card" onClick={() => onSelectProject(p)}>
              <div class="project-card-header">
                <div class="project-badge-row">
                  <span class="category-tag">{p.categoryLabel}</span>
                  <span class="roi-badge"><Bolt size={12} style={{ display: 'inline', marginRight: 4 }} />{p.roiTag}</span>
                </div>
                
                <h3 class="project-title">{p.title}</h3>
                <p class="project-snippet">{p.shortDesc}</p>
              </div>

              <div class="project-mockup-area">
                {generateMockupSVG(p.chartType)}
              </div>

              <div class="project-card-footer">
                <div class="tech-pill-group">
                  {p.techStack.slice(0, 3).map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
                <span class="case-study-link">View Details <ArrowRight size={14} /></span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
