import React from 'react';

function UserPersonasCard({ personas }) {
  if (!personas || !Array.isArray(personas)) return null;

  return (
    <div className="section-wrapper">
      <h2 className="section-title">Segmenti di Utenti Target</h2>
      <div className="personas-grid">
        {personas.map((persona, index) => {
          const icons = ['person', 'account_circle', 'science'];
          const icon = icons[index % icons.length];
          const sec = `SEC-0${index + 1}`;
          return (
            <div key={index} className="persona-card">
              <div className="persona-header">
                <span className="material-symbols-outlined persona-icon">{icon}</span>
                <span className="persona-sec">{sec}</span>
              </div>
              <h3 className="persona-name">{persona.name}</h3>
              <p className="persona-role">{persona.role}</p>
              <p className="persona-quote">{persona.quote}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserPersonasCard;
