// src/components/HeroSection.jsx
import { useLang } from '../hooks/useLang.js';
import { FadeIn, RevealText } from './AnimatedText.jsx';
import Particles from './Particles.jsx';

export default function HeroSection() {
  const { t, isRTL } = useLang();

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Blobs */}
      <div className="blob" style={{
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
        top: '10%', left: '5%', animationDuration: '18s',
      }} />
      <div className="blob" style={{
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(190,18,60,0.12) 0%, transparent 70%)',
        bottom: '5%', right: '5%', animationDuration: '22s', animationDelay: '3s',
      }} />
      <div className="blob" style={{
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
        top: '50%', right: '25%', animationDuration: '15s', animationDelay: '6s',
      }} />

      <Particles count={30} />

      <div className="hero-inner">
        {/* Text Side */}
        <div>
          <FadeIn delay={0}>
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              <span className="label">{t.hero.tag}</span>
            </div>
          </FadeIn>

          <h1 className="hero-title" style={{ overflow: 'hidden' }}>
            <FadeIn delay={100}>
              <span style={{ display: 'block' }}>{t.hero.title1}</span>
            </FadeIn>
            <FadeIn delay={200}>
              <span className="accent" style={{ display: 'block' }}>{t.hero.title2}</span>
            </FadeIn>
            <FadeIn delay={300}>
              <span className="accent-red" style={{ display: 'block' }}>{t.hero.title3}</span>
            </FadeIn>
          </h1>

          <FadeIn delay={400}>
            <p className="hero-desc">{t.hero.desc}</p>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="hero-btns">
              <button
                className="btn btn-primary"
                onClick={() => scrollTo('projects')}
              >
                {t.hero.cta1}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="btn btn-outline"
                onClick={() => scrollTo('contact')}
              >
                {t.hero.cta2}
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Image Side */}
        <FadeIn delay={300} direction="scale" className="hero-image-wrap">
          <div style={{ position: 'relative' }}>
            {/* Rotating border glow */}
            <div style={{
              position: 'absolute', inset: -3,
              borderRadius: 28,
              background: 'conic-gradient(from 0deg, var(--purple), transparent, var(--red), transparent, var(--purple))',
              animation: 'rotate-glow 4s linear infinite',
              zIndex: 0,
            }} />
            <div className="hero-image-frame" style={{ position: 'relative', zIndex: 1 }}>
              <img
                src="/images/zakaria-profile.jpg"
                alt="Zakaria Boubkeraoui"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hero-image-placeholder" style={{ display: 'none' }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--purple-dim), var(--red-dim))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2rem',
                }}>
                  ZB
                </div>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                  Place profile image at
                </p>
                <p style={{ color: 'rgba(139,92,246,0.7)', fontSize: '0.7rem', fontFamily: 'var(--font-mono)' }}>
                  /public/images/zakaria-profile.jpg
                </p>
              </div>
            </div>

            {/* Floating badges */}
            <div style={{
              position: 'absolute', bottom: -20, left: isRTL ? 'auto' : -30, right: isRTL ? -30 : 'auto',
              background: 'rgba(139,92,246,0.15)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(139,92,246,0.3)',
              borderRadius: 16, padding: '12px 20px',
              animation: 'float-badge1 4s ease-in-out infinite',
              zIndex: 2,
            }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--purple-bright)' }}>30+</p>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>Projects</p>
            </div>

            <div style={{
              position: 'absolute', top: 20, right: isRTL ? 'auto' : -30, left: isRTL ? -30 : 'auto',
              background: 'rgba(190,18,60,0.12)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(190,18,60,0.25)',
              borderRadius: 16, padding: '12px 20px',
              animation: 'float-badge2 5s ease-in-out infinite',
              zIndex: 2,
            }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--red-bright)' }}>2+</p>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>Years</p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)' }}>
          {t.hero.scrollText}
        </span>
        <div className="hero-scroll-line" />
      </div>

      <style>{`
        @keyframes float-badge1 {
          0%,100% { transform: translateY(0) rotate(-2deg); }
          50%      { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes float-badge2 {
          0%,100% { transform: translateY(0) rotate(2deg); }
          50%      { transform: translateY(-14px) rotate(-1deg); }
        }
      `}</style>
    </section>
  );
}
