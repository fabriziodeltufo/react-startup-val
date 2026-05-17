import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './style/DashBoard.css';

function DashBoard() {
  const navigate = useNavigate();

  const handleBackToInput = () => {
    navigate('/');
  };

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
          <h1 className="header-title">Autonomous Micro-SaaS for Sustainable Urban Farming Yield Analytics</h1>
          <p className="header-desc">
            Advanced diagnostic run mapping technical feasibility against high-density urban agricultural environments. Analysis focuses on real-time nutrient calibration, spectral imaging data streams, and predictive harvest cycle optimization for vertical infrastructures.
          </p>
        </header>

        {/* Bento Grid Layout */}
        <div className="dashboard-grid">
          {/* Success Score Gauge Card */}
          <section className="gauge-card">
            <div className="gauge-status">
              Status: Verified
            </div>
            
            <div className="gauge-svg-container">
              <svg className="gauge-svg" viewBox="0 0 192 192">
                <circle className="gauge-circle-bg" cx="96" cy="96" r="88" />
                <circle className="gauge-circle-fill" cx="96" cy="96" r="88" />
              </svg>
              <div className="gauge-text">
                <span className="gauge-val">85</span>
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
              {/* Barriers Column */}
              <div className="difficulty-col">
                <div>
                  <h2 className="difficulty-title">
                    <span className="material-symbols-outlined">grid_view</span>
                    MARKET ENTRY BARRIERS
                  </h2>
                  <p className="difficulty-desc">
                    Initial capital requirements for high-spec IoT sensor arrays present a primary friction point. Integration with existing heritage irrigation systems requires custom middleware development, extending the deployment timeline by approximately 18% compared to greenfield installations.
                  </p>
                </div>
                <div className="progress-track">
                  <div className="progress-bar bar-45"></div>
                </div>
              </div>

              {/* Scalability Column */}
              <div className="difficulty-col">
                <div>
                  <h2 className="difficulty-title">
                    <span className="material-symbols-outlined">rocket_launch</span>
                    SCALABILITY VECTORS
                  </h2>
                  <p className="difficulty-desc">
                    The modular architecture allows for seamless horizontal scaling across metropolitan farming hubs. Automated API-driven data normalization ensures that as more nodes are added, the global yield prediction model improves logarithmically, reducing per-unit operational costs.
                  </p>
                </div>
                <div className="progress-track">
                  <div className="progress-bar bar-82"></div>
                </div>
              </div>
            </div>
          </section>

          {/* User Personas Section */}
          <div className="section-wrapper">
            <h2 className="section-title">Target User Segments</h2>
            <div className="personas-grid">
              {/* Persona Card 1 */}
              <div className="persona-card">
                <div className="persona-header">
                  <span className="material-symbols-outlined persona-icon">person</span>
                  <span className="persona-sec">SEC-01</span>
                </div>
                <h3 className="persona-name">Marcus Thorne</h3>
                <p className="persona-role">Vertical Farm Owner</p>
                <p className="persona-quote">
                  Focuses on operational overhead reduction and maximizing yield per square meter through rigorous automation.
                </p>
              </div>

              {/* Persona Card 2 */}
              <div className="persona-card">
                <div className="persona-header">
                  <span className="material-symbols-outlined persona-icon">account_circle</span>
                  <span className="persona-sec">SEC-02</span>
                </div>
                <h3 className="persona-name">Elena Rodriguez</h3>
                <p className="persona-role">Sustainability Director</p>
                <p className="persona-quote">
                  Prioritizes resource circularity and transparent environmental impact metrics for institutional reporting.
                </p>
              </div>

              {/* Persona Card 3 */}
              <div className="persona-card">
                <div className="persona-header">
                  <span className="material-symbols-outlined persona-icon">science</span>
                  <span className="persona-sec">SEC-03</span>
                </div>
                <h3 className="persona-name">Dr. Aris Varma</h3>
                <p className="persona-role">Agricultural Consultant</p>
                <p className="persona-quote">
                  Requires high-fidelity data exports and granular control over algorithmic growth parameters.
                </p>
              </div>
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
                  <tr>
                    <td className="competitor-name">AgroPulse</td>
                    <td>Large-scale rural soil monitoring sensors</td>
                    <td className="competitor-weakness">Poor integration with vertical hydroponic stacks</td>
                  </tr>
                  <tr>
                    <td className="competitor-name">GreenSense</td>
                    <td>Consumer-level greenhouse automation kits</td>
                    <td className="competitor-weakness">Lacks enterprise-grade predictive analytics</td>
                  </tr>
                  <tr>
                    <td className="competitor-name">YieldBot</td>
                    <td>AI-driven crop selection marketplace</td>
                    <td className="competitor-weakness">Hardware agnostic; zero real-time monitoring</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Final Verdict Banner */}
          <section className="verdict-card">
            <div className="verdict-badge">
              <span className="verdict-go">G O</span>
              <span className="material-symbols-outlined verdict-icon">offline_bolt</span>
            </div>
            <div className="verdict-text-container">
              <p className="verdict-text">
                MARKET CONDITIONS OPTIMAL FOR IMMEDIATE TECHNICAL PROTOTYPE DEPLOYMENT.
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
