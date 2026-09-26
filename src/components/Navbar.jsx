import React, { useState } from 'react';
import { LineChart, FileDown, Send, Menu } from 'lucide-react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav class="navbar" id="navbar">
      <div class="nav-container">
        <a href="#hero" class="nav-logo">
          <span class="logo-mark"><LineChart size={20} /></span>
          <span class="logo-text">Bharathkumar B <span class="logo-subtitle">// BI Analyst</span></span>
        </a>

        <div class={`nav-links ${mobileOpen ? 'mobile-active' : ''}`} id="nav-links">
          <a href="#hero" class="nav-link active" onClick={() => setMobileOpen(false)}>Overview</a>
          <a href="#skills" class="nav-link" onClick={() => setMobileOpen(false)}>Skills & Stack</a>
          <a href="#projects" class="nav-link" onClick={() => setMobileOpen(false)}>Case Studies</a>
          <a href="#experience" class="nav-link" onClick={() => setMobileOpen(false)}>Experience</a>
          <a href="#contact" class="nav-link" onClick={() => setMobileOpen(false)}>Contact</a>
        </div>

        <div class="nav-actions">
          <a
            href="assets/Bharathkumar_B_Resume.pdf"
            download="Bharathkumar_B_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-secondary"
            id="download-resume-btn"
          >
            <FileDown size={16} className="text-emerald" /> Resume
          </a>
          <a href="#contact" class="btn btn-primary">
            <Send size={16} /> Let's Connect
          </a>
        </div>

        <button
          class="mobile-menu-btn"
          id="mobile-menu-toggle"
          aria-label="Toggle Navigation Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Menu size={22} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
