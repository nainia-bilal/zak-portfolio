// src/components/ContactSection.jsx
import { useState } from 'react';
import { ExternalLink, Camera, Mail, Download } from 'lucide-react';
import { useLang } from '../hooks/useLang.js';
import { FadeIn } from './AnimatedText.jsx';
import Particles from './Particles.jsx';

const SOCIAL = [
  {
    key: 'linkedin',
    icon: ExternalLink,
    href: 'https://www.linkedin.com/in/zakaria-boubkeraoui-2a55a13a9',
    label: 'LinkedIn',
    sub: '/in/zakaria-boubkeraoui',
  },
  {
    key: 'instagram',
    icon: Camera,
    href: 'https://www.instagram.com/_d_zekoo',
    label: 'Instagram',
    sub: '@_d_zekoo',
  },
  {
    key: 'email',
    icon: Mail,
    href: 'mailto:zaki200615@gmail.com',
    label: 'Email',
    sub: 'zaki200615@gmail.com',
  },
];

export default function ContactSection() {
  const { t, isRTL } = useLang();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [toast, setToast] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setToast({ type: 'error', msg: t.contact.errorMsg });
      setTimeout(() => setToast(null), 3000);
      return;
    }
    setSending(true);
    // Simulate submission
    setTimeout(() => {
      setSending(false);
      setForm({ name: '', email: '', subject: '', message: '' });
      setToast({ type: 'success', msg: t.contact.successMsg });
      setTimeout(() => setToast(null), 3500);
    }, 1200);
  };

  return (
    <section id="contact" className="section" dir={isRTL ? 'rtl' : 'ltr'} style={{ position: 'relative' }}>
      <Particles count={20} />

      <div className="blob" style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', top: '20%', left: '50%', transform: 'translateX(-50%)', animationDuration: '20s' }} />

      <div className="section-inner">
        <FadeIn delay={0}>
          <div className="section-label-wrap">
            <div className="section-label-line" />
            <span className="label">{t.contact.label}</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>{t.contact.heading}</h2>
          <p className="body-lg" style={{ maxWidth: 520, marginBottom: 64 }}>{t.contact.desc}</p>
        </FadeIn>

        <div className="contact-grid">
          {/* Info Side */}
          <FadeIn delay={150} direction="left">
            <div className="contact-info">
              <p className="label" style={{ marginBottom: 8 }}>{t.contact.connectLabel}</p>

              {SOCIAL.map(s => {
                const IconComponent = s.icon;
                return (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link glass icon-hover"
                  >
                    <div className="contact-link-icon">
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="heading-sm">{t.contact.social[s.key]}</p>
                      <p className="body-sm">{s.sub}</p>
                    </div>
                  </a>
                );
              })}

              {/* Download CV */}
              <a
                href="/cv/zakaria-cv.pdf"
                download="Zakaria_Boubkeraoui_CV.pdf"
                className="btn btn-red"
                style={{ marginTop: 8, width: 'fit-content', display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <Download size={16} strokeWidth={2} />
                {t.contact.cvBtn}
              </a>
            </div>
          </FadeIn>

          {/* Form Side */}
          <FadeIn delay={200} direction="right">
            <div className="contact-form glass" style={{ padding: '40px 36px', borderRadius: 24 }}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name *</label>
                  <input
                    id="name" name="name" type="text"
                    className="form-input"
                    placeholder={t.contact.namePlaceholder}
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email *</label>
                  <input
                    id="email" name="email" type="email"
                    className="form-input"
                    placeholder={t.contact.emailPlaceholder}
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  id="subject" name="subject" type="text"
                  className="form-input"
                  placeholder={t.contact.subjectPlaceholder}
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea
                  id="message" name="message"
                  className="form-textarea"
                  placeholder={t.contact.messagePlaceholder}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                className="btn btn-primary"
                onClick={handleSubmit}
                style={{ width: '100%', justifyContent: 'center', opacity: sending ? 0.7 : 1 }}
                disabled={sending}
              >
                {sending ? '⏳ Sending...' : `${t.contact.sendBtn} →`}
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className={`toast toast-${toast.type}`} style={{ animation: 'slideInToast 0.3s var(--ease)' }}>
          {toast.msg}
        </div>
      )}

      <style>{`
        @keyframes slideInToast {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
