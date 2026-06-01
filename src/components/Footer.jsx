// src/components/Footer.jsx
import { Heart, Camera, Mail, ExternalLink } from 'lucide-react';
import { useLang } from '../hooks/useLang.js';

export default function Footer() {
  const { t, isRTL } = useLang();

  return (
    <footer dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="footer-inner">
        <p className="footer-copy">{t.footer.copy}</p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
          <span>{t.footer.madeWith}</span>
          <Heart size={16} strokeWidth={2} style={{ color: 'var(--red-bright)', marginBottom: 1 }} />
          <span>by Zakaria</span>
        </div>

        <div className="footer-socials">
          <a className="footer-social icon-hover" href="https://www.linkedin.com/in/zakaria-boubkeraoui-2a55a13a9" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <ExternalLink size={18} strokeWidth={1.5} />
          </a>
          <a className="footer-social icon-hover" href="https://www.instagram.com/_d_zekoo" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
            <Camera size={18} strokeWidth={1.5} />
          </a>
          <a className="footer-social icon-hover" href="mailto:zaki200615@gmail.com" aria-label="Email" title="Email">
            <Mail size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
