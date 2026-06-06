import React, { useState, useEffect, useRef } from 'react';
import './style/Loader.css';

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const consoleRef = useRef(null);

  const STAGES = [
    { text: 'INIZIALIZZAZIONE MOTORE DI VALIDAZIONE...', duration: 500 },
    { text: 'ANALISI DEI PARAMETRI CHIAVE DEL PROGETTO...', duration: 600 },
    { text: 'RICERCA NEI DATABASE GLOBALI DEI CONCORRENTI...', duration: 800 },
    { text: 'ESTRAZIONE DEI DATI DEMOGRAFICI SEGMENTATI...', duration: 700 },
    { text: 'VALUTAZIONE DELLE METRICHE DI SOSTENIBILITÀ FINANZIARIA...', duration: 600 },
    { text: 'SIMULAZIONE DEL COINVOLGIMENTO DELLE USER PERSONA...', duration: 700 },
    { text: 'CALCOLO DEI PUNTEGGI DI ACCURATEZZA PREVISIONALE...', duration: 500 },
    { text: 'SINCRONIZZAZIONE DEL PANNELLO DI TELEMETRIA...', duration: 400 }
  ];

  useEffect(() => {
    let currentStage = 0;
    let timer = null;
    let progressInterval = null;

    const startStage = (index) => {
      if (index >= STAGES.length) {
        setProgress(100);
        if (onComplete) {
          // Allow the 100% state to be visible briefly
          setTimeout(() => {
            onComplete();
          }, 400);
        }
        return;
      }

      setCurrentStepIndex(index);
      const stage = STAGES[index];

      // Add stage to logs in "active" status
      setVisibleLogs(prev => {
        // Replace previous active with success
        const updated = prev.map(log =>
          log.status === 'active' ? { ...log, status: 'success' } : log
        );
        return [...updated, { text: stage.text, status: 'active', id: `stage-${index}-${Date.now()}` }];
      });

      // Calculate progress increment per interval
      const steps = 10;
      const stepDuration = stage.duration / steps;
      const targetProgress = Math.min(((index + 1) / STAGES.length) * 100, 100);
      const startProgress = progress;
      const progressStep = (targetProgress - startProgress) / steps;
      
      let stepCount = 0;
      progressInterval = setInterval(() => {
        stepCount++;
        setProgress(prev => {
          const next = prev + progressStep;
          return next >= targetProgress ? targetProgress : next;
        });
        if (stepCount >= steps) {
          clearInterval(progressInterval);
        }
      }, stepDuration);

      timer = setTimeout(() => {
        startStage(index + 1);
      }, stage.duration);
    };

    startStage(0);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  // Auto scroll console to bottom
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [visibleLogs]);

  return (
    <div className="loader-overlay">
      {/* Background cybernetics telemetry */}
      <div className="loader-bg-telemetry">
        {`SYS_KERN_ADDR: 0x7FFF5BE3F418\nINIT_THREAD_ID: 0x00002E4C\nALLOC_BLOCK: 4096 BYTES\nSTATUS_CODE: STABLE_200\nBUFFER_STATE: OK`}
      </div>
      <div className="loader-bg-telemetry-right">
        {`LATENCY_VAL: 14ms\nGRID_SECTOR: B-12\nCONNETTIVITÀ: 100%\nCYBER_SYNC: ATTIVO\nMOTORE: ONLINE`}
      </div>

      {/* Laser Scanning Line */}
      <div className="loader-scan-line"></div>

      {/* Scanner HUD Container */}
      <div className="loader-hud-card">
        {/* Soft Industrial corners */}
        <div className="loader-corner top-left"></div>
        <div className="loader-corner top-right"></div>
        <div className="loader-corner bottom-left"></div>
        <div className="loader-corner bottom-right"></div>

        {/* Card Header */}
        <div className="loader-card-header">
          <div className="loader-system-badge">
            <span className="loader-status-dot">
              <span className="loader-status-dot-ping"></span>
              <span className="loader-status-dot-core"></span>
            </span>
            <span className="loader-badge-text">SCANNER ATTIVO</span>
          </div>
          <span className="loader-telemetry-tag">PROC_SHIELD//v1.0.4</span>
        </div>

        {/* Card Body */}
        <div className="loader-card-body">
          <h2 className="loader-title">VALIDAZIONE DEL PROGETTO</h2>

          {/* Telemetry Console */}
          <div className="loader-console" ref={consoleRef}>
            {visibleLogs.map((log) => (
              <div 
                key={log.id} 
                className={`loader-console-line ${log.status}`}
              >
                <span className="font-mono" style={{ marginRight: '8px' }}>
                  {log.status === 'success' ? '✔' : '▶'}
                </span>
                <span>{log.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar Section */}
        <div className="loader-progress-section">
          <div className="loader-progress-meta">
            <span>STATO DI SCANSIONE DEL MOTORE</span>
            <span className="loader-progress-percentage">{Math.round(progress)}%</span>
          </div>
          <div className="loader-progress-track">
            <div 
              className="loader-progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
