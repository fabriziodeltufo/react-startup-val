import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './style/HomePage.css';

function HomePage() {
  const [idea, setIdea] = useState('');
  const navigate = useNavigate();

  const handleValidate = (e) => {
    e.preventDefault();
    // Simulate validation and navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="home-page-container">
      <main className="home-main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="system-badge">
            <span className="status-indicator">
              <span className="animate-ping"></span>
              <span className="bg-dot"></span>
            </span>
            <span className="badge-text">SYSTEM ONLINE</span>
          </div>
          
          <h1 className="hero-title">
            STARTUP VALIDATION
          </h1>
          
          <p className="hero-subtitle">
            Validate your business idea in seconds using high-fidelity market data, competitive intelligence, and predictive failure analysis.
          </p>
        </section>

        {/* Input Area */}
        <section className="input-section">
          <form onSubmit={handleValidate} className="input-card">
            <div className="input-body">
              <label className="sr-only" htmlFor="idea-input">Describe your business idea</label>
              <textarea
                id="idea-input"
                className="textarea-input"
                placeholder="Describe your business idea in detail (e.g., An AI-powered logistics platform for carbon-neutral maritime shipping)..."
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
              />
            </div>
            <div className="input-footer">
              <button type="submit" className="validate-btn">
                VALIDATE IDEA
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </form>

          {/* Decorative HUD elements */}
          <div className="hud-line-left"></div>
          <div className="hud-line-right"></div>
        </section>
      </main>

      {/* Footer Stats */}
      <footer className="stats-footer">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">PRECISION</span>
              <span className="stat-val">99.8%</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">LATENCY</span>
              <span className="stat-val">124MS</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">SAMPLES</span>
              <span className="stat-val">4.2M</span>
            </div>
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

export default HomePage;
