import React, { useState, useEffect } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import RepoBanner from './components/RepoBanner';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import CaseStudyModal from './components/CaseStudyModal';
import Footer from './components/Footer';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  return (
    <div class="app-root">
      {/* 3D Three.js Animated Background Canvas */}
      <ThreeBackground />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />
        <RepoBanner />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Detail Modal Popup */}
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
