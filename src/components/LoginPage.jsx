import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style/LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('--- LOGIN SUBMISSION ---');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Timestamp:', timestamp);
    console.log('------------------------');
  };

  return (
    <div className="login-container">
      <main className="login-main">
        {/* Login HUD Card */}
        <div className="login-card">
          {/* Card Header */}
          <div className="login-header">
            <div className="login-badge">
              <span className="login-ping">
                <span className="animate-ping-cyan"></span>
                <span className="bg-dot-cyan"></span>
              </span>
              <span className="login-label">AUTH_MODULE // SECURE</span>
            </div>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: '#849495'
            }}>
              CON_SYS_V2.0
            </span>
          </div>

          {/* Card Body */}
          <div className="login-body">
            <h1 className="login-title">Accesso</h1>
            <p className="login-desc">Inserisci le tue credenziali per accedere al sistema di validazione.</p>

            <form className="login-form" onSubmit={handleSubmit} noValidate>
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="login-email">Indirizzo Email</label>
                <div className="input-wrapper">
                  <input
                    id="login-email"
                    type="email"
                    className="login-input"
                    placeholder="utente@esempio.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                  <span
                    className="material-symbols-outlined input-icon"
                    style={{ left: '12px', position: 'absolute', color: '#556667', fontSize: '18px', pointerEvents: 'none' }}
                  >
                    mail
                  </span>
                </div>
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <div className="input-wrapper">
                  <input
                    id="login-password"
                    type="password"
                    className="login-input"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                  />
                  <span
                    className="material-symbols-outlined input-icon"
                    style={{ left: '12px', position: 'absolute', color: '#556667', fontSize: '18px', pointerEvents: 'none' }}
                  >
                    lock
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button id="login-submit-btn" type="submit" className="submit-btn">
                <span className="material-symbols-outlined">login</span>
                ACCEDI AL SISTEMA
              </button>
            </form>
          </div>
        </div>

        {/* Telemetry readout below card */}
        <div className="login-telemetry">
          <span>AUTH_ENDPOINT: /api/v1/login</span>
          <span>TIMESTAMP: {timestamp} UTC</span>
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

export default LoginPage;
