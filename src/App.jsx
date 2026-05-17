import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './components/HomePage';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* Premium Glassmorphic Top Navigation Header */}
      <nav className="app-nav">
        <div className="nav-brand">
          <span className="brand-accent">⚡</span>
          <span className="brand-text">START UP VALIDATION SYSTEM</span>
        </div>
        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end
          >
            HOME
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            DASHBOARD
          </NavLink>
        </div>
      </nav>

      {/* Route Views */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
