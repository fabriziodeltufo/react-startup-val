import React from 'react';

function CompetitorAnalysisCard({ competitors }) {
  if (!competitors || !Array.isArray(competitors)) return null;

  return (
    <div className="section-wrapper">
      <h2 className="section-title">Analisi dei Concorrenti</h2>
      <div className="table-container">
        <table className="benchmarking-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Attività Principale</th>
              <th>Punto Debole</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((competitor, index) => (
              <tr key={index}>
                <td className="competitor-name">{competitor.name}</td>
                <td>{competitor.coreBusiness}</td>
                <td className="competitor-weakness">{competitor.weakness}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompetitorAnalysisCard;
