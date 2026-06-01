// src/components/Particles.jsx
import { useMemo } from 'react';

export default function Particles({ count = 25 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      color: Math.random() > 0.6
        ? 'rgba(139,92,246,0.6)'
        : Math.random() > 0.5
          ? 'rgba(190,18,60,0.5)'
          : 'rgba(255,255,255,0.25)',
    }));
  }, [count]);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map(p => (
        <span
          key={p.id}
          className="particle"
          style={{
            left:            `${p.x}%`,
            top:             `${p.y}%`,
            width:           `${p.size}px`,
            height:          `${p.size}px`,
            background:      p.color,
            animationDuration:`${p.duration}s`,
            animationDelay:  `${p.delay}s`,
            boxShadow:       `0 0 ${p.size * 3}px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}
