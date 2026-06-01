// src/components/ProjectsSection.jsx
import { useState } from 'react';
import { useLang } from '../hooks/useLang.js';
import { FadeIn } from './AnimatedText.jsx';
import projects from '../data/projects.js';

const CATEGORIES = ['All', 'Video Editing', 'Design', 'Presentations', 'Personal Branding'];
const CAT_COLORS = {
  'Video Editing':    { bg: 'rgba(139,92,246,0.12)', color: 'var(--purple-bright)' },
  'Design':           { bg: 'rgba(190,18,60,0.1)',   color: 'var(--red-bright)' },
  'Presentations':    { bg: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' },
  'Personal Branding':{ bg: 'rgba(139,92,246,0.08)', color: 'var(--purple-bright)' },
};

function ProjectCard({ project, t, onClick }) {
  const col = CAT_COLORS[project.category] || { bg: 'var(--white-5)', color: 'var(--white-50)' };
  
  const handleCardClick = () => {
    if (project.url) {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    } else {
      onClick(project);
    }
  };

  return (
    <div className="project-card glass" onClick={handleCardClick} style={{ cursor: project.url ? 'pointer' : 'default' }}>
      <div className="project-thumb">
        {project.thumbnail ? (
          <>
            <img
              src={project.thumbnail}
              alt={project.title}
              onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
            />
            <div className="project-thumb-placeholder" style={{ display: 'none' }}>📁</div>
          </>
        ) : (
          <div className="project-thumb-placeholder">📁</div>
        )}
        <div className="project-overlay">
          <span className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.78rem' }}>
            {t.projects.viewBtn} →
          </span>
        </div>
      </div>
      <div className="project-body">
        <p className="project-cat" style={{ color: col.color }}>{project.category}</p>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc || project.description}</p>
        <div className="project-tools">
          {project.tools?.map(tool => (
            <span key={tool} className="tool-tag">{tool}</span>
          ))}
          {project.year && (
            <span className="tool-tag" style={{ color: 'rgba(255,255,255,0.3)', borderColor: 'transparent' }}>
              {project.year}
            </span>
          )}
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-view-btn"
            onClick={(e) => e.stopPropagation()}
          >
            {t.projects.viewBtn} →
          </a>
        )}
      </div>
    </div>
  );
}

function Modal({ project, t, onClose }) {
  if (!project) return null;
  return (
    <div
      className="modal-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{ animation: 'fadeInBackdrop 0.2s ease' }}
    >
      <div
        className="modal-box glass"
        style={{ position: 'relative', animation: 'slideUpModal 0.3s cubic-bezier(0.16,1,0.3,1)' }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div style={{ aspectRatio: '16/9', background: 'var(--black-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }}
            />
          ) : null}
          <span style={{ display: project.thumbnail ? 'none' : 'block' }}>🎨</span>
        </div>
        <div className="modal-body">
          <p className="label" style={{ marginBottom: 8 }}>{project.category}</p>
          <h2 className="heading-md" style={{ marginBottom: 12 }}>{project.title}</h2>
          <p className="body-lg" style={{ marginBottom: 20 }}>{project.description}</p>
          <div className="project-tools">
            {project.tools?.map(t => <span key={t} className="tool-tag">{t}</span>)}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeInBackdrop { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUpModal { from { opacity: 0; transform: translateY(30px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </div>
  );
}

export default function ProjectsSection() {
  const { t, isRTL } = useLang();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const allLabel = t.projects.all;
  const cats = [allLabel, ...CATEGORIES.slice(1)];

  return (
    <section id="projects" className="section" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="blob" style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(190,18,60,0.08) 0%, transparent 70%)', bottom: 0, left: '50%', animationDuration: '25s' }} />

      <div className="section-inner">
        <FadeIn delay={0}>
          <div className="section-label-wrap">
            <div className="section-label-line" />
            <span className="label">{t.projects.label}</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>{t.projects.heading}</h2>
          <p className="body-lg" style={{ maxWidth: 560, marginBottom: 48 }}>{t.projects.desc}</p>
        </FadeIn>

        {/* Filter */}
        <FadeIn delay={150}>
          <div className="filter-bar">
            {cats.map((cat, i) => {
              const val = i === 0 ? 'All' : cat;
              return (
                <button
                  key={cat}
                  className={`filter-btn ${activeFilter === val ? 'active' : ''}`}
                  onClick={() => setActiveFilter(val)}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((project, i) => (
            <FadeIn key={project.id} delay={i * 80} direction="up">
              <ProjectCard project={project} t={t} onClick={setSelected} />
            </FadeIn>
          ))}
        </div>
      </div>

      {selected && <Modal project={selected} t={t} onClose={() => setSelected(null)} />}
    </section>
  );
}
