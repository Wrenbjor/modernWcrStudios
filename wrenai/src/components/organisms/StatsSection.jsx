import React from 'react';
import StatsGrid from './StatsGrid';

const STATS = [
  { number: 120, label: 'Projects', icon: 'CheckCircle', suffix: '+', prefix: '', },
  { number: 24, label: 'Team Members', icon: 'Users', suffix: '', prefix: '', },
  { number: 98, label: 'Satisfaction (%)', icon: 'Smile', suffix: '%', prefix: '', },
  { number: 12, label: 'Awards', icon: 'Award', suffix: '', prefix: '', },
];

export default function StatsSection() {
  return (
    <section className="stats-section" style={{ background: 'var(--color-primary-teal)', color: 'var(--color-background-primary)', padding: '48px 0', width: '100%' }}>
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <StatsGrid stats={STATS} />
      </div>
    </section>
  );
} 