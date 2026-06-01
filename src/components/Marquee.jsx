// src/components/Marquee.jsx
export default function Marquee() {
  const items = [
    'Video Editing', 'Content Creation', 'Personal Branding',
    'Canva Design', 'Social Media', 'Photography', 'CapCut',
    'InShot', 'PicsArt', 'Meitu', 'Creative Direction',
  ];
  const doubled = [...items, ...items];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
