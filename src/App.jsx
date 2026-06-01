// src/App.jsx
import { useEffect, useState } from 'react';
import { LangContext, useLangState } from './hooks/useLang.js';
import Cursor from './components/Cursor.jsx';
import Navbar from './components/Navbar.jsx';
import Marquee from './components/Marquee.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

const SECTIONS = ['home', 'about', 'projects', 'services', 'contact'];

export default function App() {
  const langState = useLangState();
  const [activeSection, setActiveSection] = useState('home');
  const [loaded, setLoaded] = useState(false);

  // Set dir/lang on html element
  useEffect(() => {
    document.documentElement.lang = langState.lang;
    document.documentElement.dir  = langState.isRTL ? 'rtl' : 'ltr';
  }, [langState.lang, langState.isRTL]);

  // Intro load
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  // Intersection observer for active nav
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <LangContext.Provider value={langState}>
      {/* Cursor */}
      <Cursor />

      {/* Background decorations */}
      <div className="noise-overlay" />
      <div className="grid-overlay" />

      {/* Page intro animation */}
      <div
        style={{
          opacity:    loaded ? 1 : 0,
          transform:  loaded ? 'none' : 'translateY(12px)',
          transition: 'opacity 0.6s, transform 0.6s',
        }}
      >
        <Navbar activeSection={activeSection} />

        <main>
          <HeroSection />
          <Marquee />
          <AboutSection />
          <Marquee />
          <ProjectsSection />
          <Marquee />
          <ServicesSection />
          <Marquee />
          <ContactSection />
        </main>

        <Footer />
      </div>

      {/* Loading screen */}
      {!loaded && (
        <div style={{
          position: 'fixed', inset: 0, background: 'var(--black)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 99999, flexDirection: 'column', gap: 16,
        }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800,
            color: 'var(--purple-bright)',
            animation: 'pulse 1s ease-in-out infinite',
          }}>ZB</div>
          <div style={{
            width: 60, height: 2, background: 'var(--black-4)',
            borderRadius: 2, overflow: 'hidden',
          }}>
            <div style={{
              height: '100%', background: 'var(--purple)',
              animation: 'loadBar 1.5s ease-in-out infinite',
            }} />
          </div>
          <style>{`
            @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
            @keyframes loadBar { 0% { width: 0; transform: translateX(0); } 100% { width: 100%; transform: translateX(0); } }
          `}</style>
        </div>
      )}
    </LangContext.Provider>
  );
}
