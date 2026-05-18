import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './style/DashBoard.css';
import initialData from '../dataDasboard';

// Subcomponents
import DashboardHeader from './dashboard/DashboardHeader';
import SuccessScoreCard from './dashboard/SuccessScoreCard';
import DifficultyAnalysisCard from './dashboard/DifficultyAnalysisCard';
import UserPersonasCard from './dashboard/UserPersonasCard';
import CompetitorAnalysisCard from './dashboard/CompetitorAnalysisCard';
import VerdictBanner from './dashboard/VerdictBanner';
import TechStackFooter from './dashboard/TechStackFooter';

function DashBoard() {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(initialData);

  const handleBackToInput = () => {
    navigate('/');
  };

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
        <DashboardHeader
          title={dashboardData.ideaSummary.Title}
          description={dashboardData.ideaSummary.Description}
        />

        {/* Bento Grid Layout */}
        <div className="dashboard-grid">
          {/* Success Score Gauge Card */}
          <SuccessScoreCard
            value={dashboardData.successScore.value}
            description={dashboardData.successScore.description}
          />

          {/* Difficulty Analysis Section */}
          <DifficultyAnalysisCard
            difficulty={dashboardData.difficulty}
          />

          {/* User Personas Section */}
          <UserPersonasCard
            personas={dashboardData.personas}
          />

          {/* Competitor Analysis Table */}
          <CompetitorAnalysisCard
            competitors={dashboardData.competitors}
          />

          {/* Final Verdict Banner */}
          <VerdictBanner
            verdict={dashboardData.verdict}
          />
        </div>
      </main>

      {/* Footer Stats - Tech Stack */}
      <TechStackFooter />

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
