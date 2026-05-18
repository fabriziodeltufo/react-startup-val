import React from 'react';

const COLOR_MAP = {
  cyan: {
    main: '#00f5ff',
    bg: 'rgba(0, 245, 255, 0.02)',
    glow: 'rgba(0, 245, 255, 0.2)',
  },
  red: {
    main: '#ff5252',
    bg: 'rgba(255, 82, 82, 0.02)',
    glow: 'rgba(255, 82, 82, 0.2)',
  }
};

function VerdictBanner({ verdict }) {
  if (!verdict) return null;

  const verdictColor = COLOR_MAP[verdict.color] || COLOR_MAP.cyan;

  return (
    <section
      className="verdict-card"
      style={{
        borderColor: verdictColor.main,
        backgroundColor: verdictColor.bg,
        boxShadow: `0 0 12px ${verdictColor.glow}`
      }}
    >
      <div className="verdict-badge">
        <span className="verdict-go" style={{ color: verdictColor.main }}>
          {verdict.text}
        </span>
        <span className="material-symbols-outlined verdict-icon" style={{ color: verdictColor.main }}>
          {verdict.text === 'GO' ? 'offline_bolt' : 'cancel'}
        </span>
      </div>

      <div className="verdict-text-container">
        <p className="verdict-text">
          {verdict.description}
        </p>
      </div>
    </section>
  );
}

export default VerdictBanner;
