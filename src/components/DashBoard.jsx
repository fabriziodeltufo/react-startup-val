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

  const techIcons = [
    {
      name: 'React',
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" transform="rotate(30 12 12)" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" transform="rotate(90 12 12)" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" transform="rotate(150 12 12)" />
        </svg>
      )
    },
    {
      name: 'Javascript',
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm11.525 11.233c-.34-.208-.755-.383-1.242-.383-.683 0-1.125.35-1.125.933 0 .492.366.742.983 1.008l.742.317c1.175.5 1.775 1.158 1.775 2.275 0 1.583-1.258 2.533-3 2.533-1.6 0-2.525-.792-2.95-1.783l1.533-.942c.317.583.742.983 1.392.983.675 0 1.05-.333 1.05-.883 0-.583-.45-.817-1.117-1.108l-.75-.325c-1.183-.5-1.75-1.217-1.75-2.225 0-1.475 1.15-2.433 2.767-2.433 1.342 0 2.25.6 2.7 1.508l-1.375.867zm3.708-3.041h1.767v10.583c0 1.808-1.075 2.733-2.875 2.733-1.575 0-2.492-.725-2.958-1.792l1.6-.95c.342.617.725.933 1.333.933.725 0 1.133-.367 1.133-1.225V11.192z" />
        </svg>
      )
    },
    {
      name: 'HTML',
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm10.5 4.125v15.688l5.813-1.625.687-7.688H12V8.375h6.688l-.25-2.625L12 4.125z" />
        </svg>
      )
    },
    {
      name: 'CSS',
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm10.5 4.125v15.688l5.813-1.625.687-7.688H12v2.125h4.375l-.25 2.625L12 16.75v-2.125h2.188l.188-2.125H12V4.125z" />
        </svg>
      )
    },
    {
      name: 'Supabase',
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12.986 2.014a1 1 0 0 0-1.127.307L5.053 11.238a1 1 0 0 0 .78 1.637H11.5v9.111a1 1 0 0 0 1.834.542l6.806-8.917a1 1 0 0 0-.787-1.611H12.5V2.014z" />
        </svg>
      )
    },
    {
      name: 'Google Stitch',
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <path d="M10 6.5h4" />
          <path d="M17 10v4" />
          <path d="M10 17.5h4" />
          <path d="M6.5 10v4" />
        </svg>
      )
    },
    {
      name: 'Antigravity',
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 17v-10" />
          <path d="M9 10l3-3 3 3" />
          <path d="M6 20h12" />
        </svg>
      )
    },
    {
      name: 'ChatGPT',
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5-2.5-.5-5.5 2-7s5.5-.5 7 2" />
          <path d="M7.5 7.5c0-3 2.5-5 5-5s5 2 5 5" />
          <path d="M16.5 4.5c2.5 1.5 3.5 4.5 2 7s-4.5 3.5-7 2" />
          <path d="M19.5 16.5c1.5 2.5.5 5.5-2 7s-5.5.5-7-2" />
          <path d="M16.5 19.5c0 3-2.5 5-5 5s-5-2-5-5" />
          <path d="M7.5 19.5c-2.5-1.5-3.5-4.5-2-7s4.5-3.5 7-2" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    }
  ];

  return (
    <div className="dashboard-page-container">
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
          <div className="header-columns">
            <h1 className="header-title">{dashboardData.ideaSummary.Title}</h1>
            <p className="header-desc">
              {dashboardData.ideaSummary.Description}
            </p>
          </div>
        </header>

        {/* Bento Grid Layout */}
        <div className="dashboard-grid">
          {/* Success Score Gauge Card */}
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
                <span className="gauge-val">{dashboardData.successScore.value}</span>
                <span className="gauge-total">/ 100</span>
              </div>
            </div>

            <div className="gauge-description">
              STATUS: {dashboardData.successScore.description || "Verified"}
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

      {/* Footer Stats - Tech Stack */}
      <footer className="stats-footer" style={{ marginTop: '64px' }}>
        <div className="stats-container">
          <div className="tech-stack-wrapper">
            <p className="tech-stack-title">POWERED BY INTEGRATED ECOSYSTEM</p>
            <div className="tech-stack-grid">
              {techIcons.map((tech, index) => (
                <div key={index} className="tech-item" title={tech.name}>
                  <div className="tech-icon-container">
                    {tech.svg}
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>

            <p className="footer-copyright">Copyright &copy; 2026 FDT - All Rights Reserved.</p>
          </div>
        </div>
      </footer>

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
