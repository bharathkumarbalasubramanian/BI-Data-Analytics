import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Copy, Check, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" class="section-padding bg-alt">
      <div class="section-header">
        <span class="section-tag">GET IN TOUCH</span>
        <h2 class="section-title">Let's Discuss Business Intelligence & Data</h2>
        <p class="section-description">Available for BI Analyst roles, data analytics projects, and dashboard development.</p>
      </div>

      <div class="contact-wrapper">
        <div class="contact-info-column">
          <div class="info-card">
            <div class="info-icon emerald-icon"><Mail size={20} /></div>
            <div>
              <span class="info-label">Direct Email</span>
              <span class="info-value">b_bharath.sde.2005@zohomail.in</span>
            </div>
            <button
              class="copy-btn"
              onClick={() => handleCopy('b_bharath.sde.2005@zohomail.in', 'email')}
              title="Copy Email"
            >
              {copiedField === 'email' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
            </button>
          </div>

          <div class="info-card">
            <div class="info-icon cyan-icon"><Phone size={20} /></div>
            <div>
              <span class="info-label">Phone</span>
              <span class="info-value">+91 6374427735</span>
            </div>
            <button
              class="copy-btn"
              onClick={() => handleCopy('+916374427735', 'phone')}
              title="Copy Phone"
            >
              {copiedField === 'phone' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
            </button>
          </div>

          <div class="info-card">
            <div class="info-icon purple-icon"><Linkedin size={20} /></div>
            <div>
              <span class="info-label">LinkedIn Profile</span>
              <span class="info-value">linkedin.com/in/bharathkumar-b-a583932a5</span>
            </div>
            <a
              href="https://linkedin.com/in/bharathkumar-b-a583932a5"
              target="_blank"
              rel="noopener noreferrer"
              class="copy-btn"
            >
              <ExternalLink size={16} />
            </a>
          </div>

          <div class="info-card">
            <div class="info-icon amber-icon"><Github size={20} /></div>
            <div>
              <span class="info-label">GitHub Repository</span>
              <span class="info-value">github.com/bharathkumarbalasubramanian</span>
            </div>
            <a
              href="https://github.com/bharathkumarbalasubramanian/BI-Data-Analytics.git"
              target="_blank"
              rel="noopener noreferrer"
              class="copy-btn"
            >
              <ExternalLink size={16} />
            </a>
          </div>

          <div class="status-callout">
            <div class="status-header">
              <span class="pulse-status"></span>
              <strong>Current Status: Open for BI Roles</strong>
            </div>
            <p>Hosur / Bangalore / Remote • Actively evaluating Junior BI Analyst & Data Analytics opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
