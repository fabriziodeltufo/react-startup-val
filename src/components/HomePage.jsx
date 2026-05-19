import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useGlobal } from '../context/globalContext';
import Loader from './Loader';
import './style/HomePage.css';

function HomePage() {
  const { idea: globalIdea, setIdea: setGlobalIdea, isLoading, setIsLoading } = useGlobal();
  const [idea, setIdea] = useState(globalIdea || '');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleValidate = (e) => {
    e.preventDefault();
    const trimmedIdea = idea.trim();
    if (!trimmedIdea) {
      setError('Please describe your business idea in detail to proceed.');
      return;
    }

    // Check if the idea is too short (e.g. less than 15 characters or fewer than 3 words)
    const wordCount = trimmedIdea.split(/\s+/).filter(Boolean).length;
    if (trimmedIdea.length < 50 || wordCount < 15) {
      setError('Your idea is too short. Please describe it in more detail (at least 15 words and 50 characters).');
      return;
    }

    setError('');
    setGlobalIdea(trimmedIdea);
    // Trigger premium scanner loader
    setIsLoading(true);
  };

  const handleReset = () => {
    setIdea('');
    setError('');
    setGlobalIdea('');
  };

  const techIcons = [
    {
      name: 'React',
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" transform="rotate(30 12 12)" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" transform="rotate(90 12 12)" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" transform="rotate(150 12 12)" />
        </svg>
      )
    },
    {
      name: 'Javascript',
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm11.525 11.233c-.34-.208-.755-.383-1.242-.383-.683 0-1.125.35-1.125.933 0 .492.366.742.983 1.008l.742.317c1.175.5 1.775 1.158 1.775 2.275 0 1.583-1.258 2.533-3 2.533-1.6 0-2.525-.792-2.95-1.783l1.533-.942c.317.583.742.983 1.392.983.675 0 1.05-.333 1.05-.883 0-.583-.45-.817-1.117-1.108l-.75-.325c-1.183-.5-1.75-1.217-1.75-2.225 0-1.475 1.15-2.433 2.767-2.433 1.342 0 2.25.6 2.7 1.508l-1.375.867zm3.708-3.041h1.767v10.583c0 1.808-1.075 2.733-2.875 2.733-1.575 0-2.492-.725-2.958-1.792l1.6-.95c.342.617.725.933 1.333.933.725 0 1.133-.367 1.133-1.225V11.192z" />
        </svg>
      )
    },
    {
      name: 'HTML',
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm10.5 4.125v15.688l5.813-1.625.687-7.688H12V8.375h6.688l-.25-2.625L12 4.125z" />
        </svg>
      )
    },
    {
      name: 'CSS',
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm10.5 4.125v15.688l5.813-1.625.687-7.688H12v2.125h4.375l-.25 2.625L12 16.75v-2.125h2.188l.188-2.125H12V4.125z" />
        </svg>
      )
    },
    {
      name: 'Supabase',
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12.986 2.014a1 1 0 0 0-1.127.307L5.053 11.238a1 1 0 0 0 .78 1.637H11.5v9.111a1 1 0 0 0 1.834.542l6.806-8.917a1 1 0 0 0-.787-1.611H12.5V2.014z" />
        </svg>
      )
    },
    {
      name: 'Google Stitch',
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <path d="M10 6.5h4" />
          <path d="M17 10v4" />
          <path d="M10 17.5h4" />
          <path d="M6.5 10v4" />
        </svg>
      )
    },
    {
      name: 'Antigravity',
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 17v-10" />
          <path d="M9 10l3-3 3 3" />
          <path d="M6 20h12" />
        </svg>
      )
    },
    {
      name: 'ChatGPT',
      svg: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5-2.5-.5-5.5 2-7s5.5-.5 7 2" />
          <path d="M7.5 7.5c0-3 2.5-5 5-5s5 2 5 5" />
          <path d="M16.5 4.5c2.5 1.5 3.5 4.5 2 7s-4.5 3.5-7 2" />
          <path d="M19.5 16.5c1.5 2.5.5 5.5-2 7s-5.5.5-7-2" />
          <path d="M16.5 19.5c0 3-2.5 5-5 5s-5-2-5-5" />
          <path d="M7.5 19.5c-2.5-1.5-3.5-4.5-2-7s4.5-3.5 7-2" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    }
  ];

  return (
    <div className="home-page-container">
      {isLoading && (
        <Loader
          onComplete={() => {
            setIsLoading(false);
            navigate('/dashboard');
          }}
        />
      )}
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
          <form onSubmit={handleValidate} className={`input-card ${error ? 'has-error' : ''}`}>
            <div className="input-body">
              <label className="sr-only" htmlFor="idea-input">Describe your business idea here:</label>
              <textarea
                id="idea-input"
                className="textarea-input"
                placeholder="Describe your business idea in detail (e.g., An AI-powered logistics platform for carbon-neutral maritime shipping)..."
                value={idea}
                onChange={(e) => {
                  setIdea(e.target.value);
                  if (error) setError('');
                }}
              />
              {error && (
                <div className="error-message">
                  <span className="material-symbols-outlined error-icon">warning</span>
                  <span className="error-text">{error}</span>
                </div>
              )}
            </div>
            <div className="input-footer">
              <button type="button" className="reset-btn" onClick={handleReset}>
                RESET
                <span className="material-symbols-outlined">restart_alt</span>
              </button>
              <button type="submit" className="validate-btn">
                VALIDATE IDEA
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </form>

          {/* Decorative HUD elements */}
          {/* <div className="hud-line-left"></div> */}
          {/* <div className="hud-line-right"></div> */}
        </section>
      </main>

      {/* Footer Stats - Tech Stack */}
      <footer className="stats-footer">
        <div className="stats-container">
          <div className="tech-stack-wrapper">
            <p className="tech-stack-title">POWERED BY INTEGRATED ECOSYSTEM</p>
            <div className="tech-stack-grid">
              {techIcons.map((tech, index) => (
                <div key={index} className="tech-item" title={tech.name}>
                  <div className="tech-icon-container">
                    {tech.svg}
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>

            <p className="footer-copyright">Copyright &copy; 2026 Fabrizio Del Tufo - Released under MIT License.</p>
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
