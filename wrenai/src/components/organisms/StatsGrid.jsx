import React from 'react';
import StatBlock from '../molecules/StatBlock';
import StatsDivider from '../molecules/StatsDivider';

export default function StatsGrid({ stats = [] }) {
  return (
    <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, alignItems: 'stretch', width: '100%' }}>
      {stats.map((stat, i) => (
        <React.Fragment key={i}>
          <StatBlock {...stat} />
          {i < stats.length - 1 && <StatsDivider />}
        </React.Fragment>
      ))}
      <style>{`
        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 24px;
          }
        }
        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 16px;
          }
        }
      `}</style>
    </div>
  );
} 