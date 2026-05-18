import React from 'react';

function DifficultyAnalysisCard({ difficulty }) {
  if (!difficulty || !Array.isArray(difficulty)) return null;

  return (
    <section className="difficulty-card">
      <div className="difficulty-grid">
        {difficulty.map((item, index) => {
          const isFirst = index === 0;
          return (
            <div key={index} className="difficulty-col">
              <div>
                <h2 className="difficulty-title">
                  <span className="material-symbols-outlined">
                    {isFirst ? 'grid_view' : 'rocket_launch'}
                  </span>
                  {item.title}
                </h2>
                <p className="difficulty-desc">
                  {item.description}
                </p>
              </div>
              <div className="progress-track">
                <div
                  className="progress-bar"
                  style={{ width: isFirst ? '45%' : '82%' }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default DifficultyAnalysisCard;
