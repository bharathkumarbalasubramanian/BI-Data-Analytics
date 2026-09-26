import React from 'react';
import { X, Check, Github, Bolt } from 'lucide-react';

const CaseStudyModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div class="modal-backdrop active" aria-hidden="false" onClick={onClose}>
      <div class="modal-box" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <div class="modal-header">
          <h3>{project.title}</h3>
          <button class="modal-close-icon" aria-label="Close Modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div class="modal-body">
          <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
            <div>
              <span class="category-tag">{project.categoryLabel}</span>
              <span class="roi-badge" style={{ marginLeft: 8 }}><Bolt size={12} style={{ display: 'inline', marginRight: 4 }} /> {project.roiTag}</span>
            </div>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style={{ padding: '4px 12px', fontSize: '0.8rem' }}>
              <Github size={14} /> Repository
            </a>
          </div>

          <h4 style={{ color: 'var(--emerald-primary)', marginBottom: 6 }}>Business Problem</h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 16, fontSize: '0.95rem' }}>{project.problem}</p>

          <h4 style={{ color: 'var(--emerald-primary)', marginBottom: 6 }}>Technical Solution & Architecture</h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 16, fontSize: '0.95rem' }}>{project.solution}</p>

          <h4 style={{ color: 'var(--emerald-primary)', marginBottom: 6 }}>SQL / DAX / Python Code Snippet</h4>
          <div class="code-snippet-box">
            <pre><code>{project.daxSnippet}</code></pre>
          </div>

          <h4 style={{ color: 'var(--emerald-primary)', marginBottom: 6, marginTop: 16 }}>Verified Impact & Key Deliverables</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {project.results.map((r, idx) => (
              <li key={idx} style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                <Check size={16} className="text-emerald" style={{ display: 'inline', marginRight: 8 }} /> {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
