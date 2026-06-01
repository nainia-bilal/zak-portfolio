// src/components/AboutSection.jsx
import { useRef, useEffect, useState } from 'react';
import { useLang } from '../hooks/useLang.js';
import { FadeIn, RevealText, StaggerChildren } from './AnimatedText.jsx';

const SKILLS = [
  { name: 'Video Editing',         pct: 90 },
  { name: 'Content Creation',      pct: 92 },
  { name: 'Canva Design',          pct: 88 },
  { name: 'Photography',           pct: 80 },
  { name: 'Social Media Marketing',pct: 85 },
  { name: 'Branding',              pct: 78 },
  { name: 'CapCut',                pct: 92 },
  { name: 'InShot',                pct: 88 },
  { name: 'PicsArt',               pct: 84 },
  { name: 'Meitu',                 pct: 80 },
];

function SkillBar({ name, pct, delay = 0 }) {
  const ref = useRef(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setFilled(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="skill-item" style={{ opacity: filled ? 1 : 0, transform: filled ? 'none' : 'translateY(12px)', transition: `opacity 0.5s ${delay}ms, transform 0.5s ${delay}ms` }}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ transform: filled ? `scaleX(${pct / 100})` : 'scaleX(0)', transition: `transform 1.4s cubic-bezier(0.16,1,0.3,1) ${delay + 200}ms` }}
        />
      </div>
    </div>
  );
}

export default function AboutSection() {
  const { t, isRTL } = useLang();

  return (
    <section id="about" className="section" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Blobs */}
      <div className="blob" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', top: '10%', right: '-10%', animationDuration: '20s' }} />

      <div className="section-inner">
        <div className="about-grid">
          {/* Left: Bio + Stats */}
          <div>
            <FadeIn delay={0}>
              <div className="section-label-wrap">
                <div className="section-label-line" />
                <span className="label">{t.about.label}</span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h2 className="heading-lg" style={{ marginBottom: 28 }}>
                {t.about.heading}
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="body-lg" style={{ marginBottom: 20 }}>
                {t.about.bio}
              </p>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={300}>
              <p className="label" style={{ marginBottom: 16, marginTop: 36 }}>{t.about.statsLabel}</p>
              <div className="about-stats">
                {Object.values(t.about.stats).map((s, i) => (
                  <div key={i} className="stat-card glass-purple">
                    <div className="stat-num glow-purple">{s.num}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: Skills */}
          <div>
            <FadeIn delay={100}>
              <p className="label" style={{ marginBottom: 28 }}>{t.about.skillsLabel}</p>
            </FadeIn>
            <div>
              {SKILLS.map((s, i) => (
                <SkillBar key={s.name} name={s.name} pct={s.pct} delay={i * 80} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
