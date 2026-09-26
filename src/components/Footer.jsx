import React from 'react';
import { LineChart, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="footer-container">
        <div class="footer-left">
          <a href="#hero" class="nav-logo">
            <span class="logo-mark"><LineChart size={18} /></span>
            <span class="logo-text">Bharathkumar B</span>
          </a>
          <p>© 2026 Bharathkumar B. Built with React, Three.js & Data Intelligence.</p>
        </div>
        <div class="footer-right">
          <span class="footer-status">
            <Shield size={14} className="text-emerald" style={{ display: 'inline', marginRight: 6 }} /> Data Engine: Active
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
