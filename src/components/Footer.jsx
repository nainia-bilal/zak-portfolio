// src/components/Footer.jsx
import { useLang } from '../hooks/useLang.js';

export default function Footer() {
  const { t, isRTL } = useLang();

  return (
    <footer dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="footer-inner">
        <p className="footer-copy">{t.footer.copy}</p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
          <span>{t.footer.madeWith}</span>
          <span style={{ color: 'var(--red-bright)', fontSize: '1rem' }}>♥</span>
          <span>by Zakaria</span>
        </div>

        <div className="footer-socials">
          <a className="footer-social" href="https://www.linkedin.com/in/zakaria-boubkeraoui-2a55a13a9" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            in
          </a>
          <a className="footer-social" href="https://www.instagram.com/_d_zekoo" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            📸
          </a>
          <a className="footer-social" href="mailto:zaki200615@gmail.com" aria-label="Email">
            ✉
          </a>
        </div>
      </div>
    </footer>
  );
}
