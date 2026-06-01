// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { useLang } from '../hooks/useLang.js';

const LINKS = ['home', 'about', 'projects', 'services', 'contact'];

export default function Navbar({ activeSection }) {
  const { t, lang, setLang, isRTL } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''} dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="nav-inner">
          {/* Logo */}
          <button
            className="nav-logo"
            onClick={() => scrollTo('home')}
            style={{ background: 'none', border: 'none', cursor: 'none' }}
            aria-label="Home"
          >
            <span className="nav-logo-dot" />
            ZB
          </button>

          {/* Desktop Links */}
          <ul className="nav-links">
            {LINKS.map(link => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className={activeSection === link ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollTo(link); }}
                >
                  {t.nav[link]}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div className="lang-switcher">
              {['en', 'fr', 'ar'].map(l => (
                <button
                  key={l}
                  className={`lang-btn ${lang === l ? 'active' : ''}`}
                  onClick={() => setLang(l)}
                  aria-label={`Switch to ${l}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Hamburger */}
            <button
              className="hamburger"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
              <span style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : 'none' }} />
              <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="mobile-nav"
          dir={isRTL ? 'rtl' : 'ltr'}
          style={{
            opacity: menuOpen ? 1 : 0,
            transition: 'opacity 0.3s',
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', cursor: 'none', color: 'rgba(255,255,255,0.5)', fontSize: '1.5rem' }}
            aria-label="Close menu"
          >
            ✕
          </button>
          {LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={(e) => { e.preventDefault(); scrollTo(link); }}
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.4s ${i * 80}ms, transform 0.4s ${i * 80}ms`,
              }}
            >
              {t.nav[link]}
            </a>
          ))}
          <div className="lang-switcher" style={{ marginTop: 16 }}>
            {['en', 'fr', 'ar'].map(l => (
              <button key={l} className={`lang-btn ${lang === l ? 'active' : ''}`} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
