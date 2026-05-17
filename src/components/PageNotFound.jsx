import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/PageNotFound.css';

function PageNotFound() {
  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);

  return (
    <div className="notfound-container">
      <main className="notfound-main">
        {/* Soft-Industrial Console Card */}
        <div className="notfound-card">
          <div className="notfound-header">
            <div className="notfound-badge">
              <span className="error-ping">
                <span className="animate-ping-red"></span>
                <span className="bg-dot-red"></span>
              </span>
              <span className="notfound-label">404 // ROUTE_DISCONNECTED</span>
            </div>
            <span className="terminal-id">CON_SYS_V2.0</span>
          </div>

          <div className="notfound-body">
            <div className="error-code">404</div>
            <h2 className="notfound-title">Page Not Found</h2>
            <p className="notfound-desc">
              The requested system coordinate could not be resolved. Please verify the transmission parameters or return to the main validation console.
            </p>
            <NavLink to="/" className="console-btn">
              <span className="material-symbols-outlined">terminal</span>
              RETURN TO CONSOLE
            </NavLink>
          </div>
        </div>

        {/* Technical diagnostic readouts */}
        <div className="notfound-telemetry">
          <span>SYS_LOC: CORD_ERR_RESOLVE</span>
          <span>TIMESTAMP: {timestamp} UTC</span>
        </div>
      </main>

      {/* Bottom Nav for Mobile Tab Consistency */}
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

export default PageNotFound;
