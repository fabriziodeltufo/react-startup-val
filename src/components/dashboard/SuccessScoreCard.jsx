import React from 'react';

function SuccessScoreCard({ value, description }) {
  const scoreVal = parseInt(value, 10) || 0;
  const strokeDasharray = 552.92;
  const strokeDashoffset = strokeDasharray - (scoreVal / 100) * strokeDasharray;

  return (
    <section className="gauge-card">
      <div className="gauge-svg-container">
        <svg className="gauge-svg" viewBox="0 0 192 192">
          <circle className="gauge-circle-bg" cx="96" cy="96" r="88" />
          <circle
            className="gauge-circle-fill"
            cx="96"
            cy="96"
            r="88"
            style={{ strokeDashoffset }}
          />
        </svg>
        <div className="gauge-text">
          <span className="gauge-val">{value}</span>
          <span className="gauge-total">/ 100</span>
        </div>
      </div>

      <div className="gauge-description">
        STATUS: {description || 'Verified'}
      </div>
    </section>
  );
}

export default SuccessScoreCard;
