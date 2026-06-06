import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabase';
import './style/LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(''); // Stato per mostrare errori a video
  const navigate = useNavigate();

  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(''); // Reset errori

    // MODIFICA: Controllo se supabase è inizializzato
    if (!supabase) {
      console.warn('⚠️ Modalità Demo: Supabase non configurato.');
      setErrorMsg('Sistema in modalità dimostrativa: autenticazione disabilitata.');
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log('❌ Login error:', error.message);
      setErrorMsg(error.message); // Mostriamo l'errore all'utente
      return;
    }

    console.log('✅ Login OK:', data);
    navigate('/');
  };

  return (
    <div className="login-container">
      <main className="login-main">
        <div className="login-card">
          <div className="login-header">
            <div className="login-badge">
              <span className="login-ping">
                <span className="animate-ping-cyan"></span>
                <span className="bg-dot-cyan"></span>
              </span>
              <span className="login-label">AUTH_MODULE // SECURE</span>
            </div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#849495' }}>
              CON_SYS_V2.0
            </span>
          </div>

          <div className="login-body">
            <h1 className="login-title">Accesso</h1>
            <p className="login-desc">Inserisci le tue credenziali per accedere al sistema di validazione.</p>

            {/* Visualizzazione errori */}
            {errorMsg && (
              <div style={{ color: '#ff3131', fontSize: '12px', marginBottom: '15px', fontFamily: "'JetBrains Mono', monospace" }}>
                {errorMsg}
              </div>
            )}

            <form className="login-form" onSubmit={handleSubmit} noValidate>
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
                  <span className="material-symbols-outlined input-icon" style={{ left: '12px', position: 'absolute', color: '#556667', fontSize: '18px', pointerEvents: 'none' }}>
                    mail
                  </span>
                </div>
              </div>

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
                  <span className="material-symbols-outlined input-icon" style={{ left: '12px', position: 'absolute', color: '#556667', fontSize: '18px', pointerEvents: 'none' }}>
                    lock
                  </span>
                </div>
              </div>

              <button id="login-submit-btn" type="submit" className="submit-btn">
                <span className="material-symbols-outlined">login</span>
                ACCEDI AL SISTEMA
              </button>
            </form>
          </div>
        </div>

        <div className="login-telemetry">
          <span>AUTH_ENDPOINT: {supabase ? '/login' : 'DEMO_MODE'}</span>
          <span>TIMESTAMP: {timestamp} UTC</span>
        </div>
      </main>

      <nav className="mobile-bottom-nav">
        <NavLink to="/" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`} end>
          <span className="material-symbols-outlined">home</span>
          <span className="mobile-nav-label">HOME</span>
        </NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
          <span className="material-symbols-outlined">analytics</span>
          <span className="mobile-nav-label">DASHBOARD</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default LoginPage;