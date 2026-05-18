import React from 'react';

function DashboardHeader({ title, description }) {
  return (
    <header className="dashboard-header">
      <p className="header-tag">IDEA SUMMARY</p>
      <div className="header-columns">
        <h1 className="header-title">{title}</h1>
        <p className="header-desc">
          {description}
        </p>
      </div>
    </header>
  );
}

export default DashboardHeader;
