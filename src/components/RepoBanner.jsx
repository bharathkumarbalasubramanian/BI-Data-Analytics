import React from 'react';
import { GitBranch } from 'lucide-react';

const RepoBanner = () => {
  return (
    <div class="section-padding bg-alt" style={{ paddingTop: 0, paddingBottom: 60 }}>
      <div class="repo-banner-card">
        <div class="repo-banner-content">
          <h3><i class="fa-brands fa-github text-emerald"></i> Explore Complete Codebase on GitHub</h3>
          <p>Access the source code, SQL queries, Python ETL scripts, and Power BI models for all analytics projects in my repository.</p>
        </div>
        <a
          href="https://github.com/bharathkumarbalasubramanian/BI-Data-Analytics.git"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary btn-lg"
        >
          <GitBranch size={18} /> View GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default RepoBanner;
