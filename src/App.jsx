import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './components/HomePage';
import DashBoard from './components/DashBoard';
import PageNotFound from './components/PageNotFound';
import LoginPage from './components/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import Loader from './components/Loader';


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



      {/* {isLoading && <Loader />} */}
      <Routes>
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>

        {/* Public Route  */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </BrowserRouter>
  );



}

export default App;
