// src/components/ServicesSection.jsx
import { useLang } from '../hooks/useLang.js';
import { FadeIn } from './AnimatedText.jsx';

const SERVICE_ACCENTS = [
  { grad: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, transparent 70%)', border: 'rgba(139,92,246,0.2)' },
  { grad: 'linear-gradient(135deg, rgba(190,18,60,0.12) 0%, transparent 70%)',  border: 'rgba(190,18,60,0.2)' },
  { grad: 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, transparent 70%)', border: 'rgba(139,92,246,0.15)' },
  { grad: 'linear-gradient(135deg, rgba(190,18,60,0.1) 0%, transparent 70%)',   border: 'rgba(190,18,60,0.15)' },
  { grad: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, transparent 70%)',  border: 'rgba(139,92,246,0.12)' },
];

export default function ServicesSection() {
  const { t, isRTL } = useLang();

  return (
    <section id="services" className="section" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="blob" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', top: '10%', right: '10%', animationDuration: '22s' }} />
      <div className="blob" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(190,18,60,0.08) 0%, transparent 70%)', bottom: '10%', left: '5%', animationDuration: '18s', animationDelay: '4s' }} />

      <div className="section-inner">
        <FadeIn delay={0}>
          <div className="section-label-wrap">
            <div className="section-label-line" />
            <span className="label">{t.services.label}</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>{t.services.heading}</h2>
          <p className="body-lg" style={{ maxWidth: 560, marginBottom: 64 }}>{t.services.desc}</p>
        </FadeIn>

        <div className="services-grid">
          {t.services.items.map((service, i) => {
            const acc = SERVICE_ACCENTS[i % SERVICE_ACCENTS.length];
            return (
              <FadeIn key={i} delay={i * 100} direction="up">
                <div
                  className="service-card"
                  style={{
                    background: acc.grad,
                    border: `1px solid ${acc.border}`,
                  }}
                >
                  <span className="service-icon">{service.icon}</span>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>

                  {/* subtle glow dot */}
                  <div style={{
                    position: 'absolute', bottom: 24, right: isRTL ? 'auto' : 24, left: isRTL ? 24 : 'auto',
                    width: 6, height: 6, borderRadius: '50%',
                    background: i % 2 === 0 ? 'var(--purple-bright)' : 'var(--red-bright)',
                    boxShadow: i % 2 === 0 ? '0 0 12px var(--purple-glow)' : '0 0 12px var(--red-glow)',
                    animation: 'pulse-dot 2.5s ease-in-out infinite',
                    animationDelay: `${i * 0.4}s`,
                  }} />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
