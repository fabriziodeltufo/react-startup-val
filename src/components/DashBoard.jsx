import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './style/DashBoard.css';
import initialData from '../dataDasboard';

function DashBoard() {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(initialData);

  const handleBackToInput = () => {
    navigate('/');
  };

  const scoreVal = parseInt(dashboardData.successScore.value, 10) || 0;
  const strokeDasharray = 552.92;
  const strokeDashoffset = strokeDasharray - (scoreVal / 100) * strokeDasharray;

  const colorMap = {
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
  const verdictColor = colorMap[dashboardData.verdict.color] || colorMap.cyan;

  return (
    <div className="dashboard-container">
      <main className="dashboard-main">
        {/* Top bar back action (Mobile & Desktop helper) */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '32px' }}>
          <button 
            onClick={handleBackToInput}
            className="font-label-sm text-label-sm uppercase tracking-widest px-4 py-2 border border-outline-variant hover:border-primary-container transition-colors"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: '8px 16px',
              backgroundColor: 'transparent',
              border: '1px solid #3a494a',
              color: '#c8c6c5',
              cursor: 'pointer',
              transition: 'border-color 0.2s, color 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#00f5ff';
              e.currentTarget.style.color = '#e9feff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = '#3a494a';
              e.currentTarget.style.color = '#c8c6c5';
            }}
          >
            Back to Input
          </button>
        </div>

        {/* Header Section */}
        <header className="dashboard-header">
          <p className="header-tag">IDEA SUMMARY</p>
          <h1 className="header-title">{dashboardData.ideaSummary.Title}</h1>
          <p className="header-desc">
            {dashboardData.ideaSummary.Description}
          </p>
        </header>

        {/* Bento Grid Layout */}
        <div className="dashboard-grid">
          {/* Success Score Gauge Card */}
          <section className="gauge-card">
            <div className="gauge-status">
              Status: {dashboardData.successScore.description || "Verified"}
            </div>
            
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
                <span className="gauge-val">{dashboardData.successScore.value}</span>
                <span className="gauge-total">/ 100</span>
              </div>
            </div>

            <div className="score-breakdown">
              <div className="breakdown-box">
                <p className="breakdown-label">Confidence</p>
                <p className="breakdown-val">HIGH</p>
              </div>
              <div className="breakdown-box">
                <p className="breakdown-label">Volatility</p>
                <p className="breakdown-val">LOW</p>
              </div>
            </div>
          </section>

          {/* Difficulty Analysis Section */}
          <section className="difficulty-card">
            <div className="difficulty-grid">
              {dashboardData.difficulty.map((item, index) => {
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

          {/* User Personas Section */}
          <div className="section-wrapper">
            <h2 className="section-title">Target User Segments</h2>
            <div className="personas-grid">
              {dashboardData.personas.map((persona, index) => {
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

          {/* Competitor Analysis Table */}
          <div className="section-wrapper">
            <h2 className="section-title">Competitor Benchmarking</h2>
            <div className="table-container">
              <table className="benchmarking-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Core Business</th>
                    <th>Weakness</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardData.competitors.map((competitor, index) => (
                    <tr key={index}>
                      <td className="competitor-name">{competitor.name}</td>
                      <td>{competitor.coreBusiness}</td>
                      <td className="competitor-weakness">{competitor.weakness}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Final Verdict Banner */}
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
                {dashboardData.verdict.text}
              </span>
              <span className="material-symbols-outlined verdict-icon" style={{ color: verdictColor.main }}>
                {dashboardData.verdict.text === 'GO' ? 'offline_bolt' : 'cancel'}
              </span>
            </div>
            <div className="verdict-text-container">
              <p className="verdict-text">
                {dashboardData.verdict.description}
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Bottom Nav for Mobile */}
      <nav className="mobile-bottom-nav">
        <NavLink
          to="/"
          className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
          end
        >
          <span className="material-symbols-outlined">home</span>
          <span className="mobile-nav-label">HOME</span>
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
        >
          <span className="material-symbols-outlined">analytics</span>
          <span className="mobile-nav-label">DASHBOARD</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default DashBoard;

