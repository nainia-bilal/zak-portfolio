// src/components/AnimatedText.jsx
import { useEffect, useRef, useState } from 'react';

export function RevealText({ children, className = '', delay = 0, as: Tag = 'span' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

export function FadeIn({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const transforms = {
    up:    visible ? 'translateY(0)'   : 'translateY(40px)',
    down:  visible ? 'translateY(0)'   : 'translateY(-40px)',
    left:  visible ? 'translateX(0)'   : 'translateX(-40px)',
    right: visible ? 'translateX(0)'   : 'translateX(40px)',
    scale: visible ? 'scale(1)'        : 'scale(0.92)',
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  transforms[direction],
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function StaggerChildren({ children, className = '', staggerMs = 100, startDelay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              style={{
                opacity:    visible ? 1 : 0,
                transform:  visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${startDelay + i * staggerMs}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${startDelay + i * staggerMs}ms`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
