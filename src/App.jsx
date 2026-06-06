import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './components/HomePage';
import DashBoard from './components/DashBoard';
import PageNotFound from './components/PageNotFound';
import LoginPage from './components/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

import { useAuth } from './context/AuthContext';
import { supabase } from './services/supabase';

function AppLayout() {
  const { user } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.assign(import.meta.env.BASE_URL + 'login');
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="app-nav">
        <div className="nav-brand">
          <span className="brand-accent">⚡</span>
          <span className="brand-text">START UP VALIDATION SYSTEM</span>
        </div>

        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            HOME
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            DASHBOARD
          </NavLink>

          {/* LOGOUT SOLO SE LOGGATO */}
          {user && (
            <button
              onClick={handleLogout}
              style={{
                marginLeft: '10px',
                color: 'red',
                background: 'transparent',
                border: '1px solid red',
                padding: '6px 12px',
                cursor: 'pointer'
              }}
            >
              LOGOUT
            </button>
          )}

        </div>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;