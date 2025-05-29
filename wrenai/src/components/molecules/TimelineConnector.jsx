import React from 'react';

export default function TimelineConnector({ steps = [] }) {
  return (
    <div className="timeline-connector" style={{ position: 'absolute', left: 32, top: 0, bottom: 0, width: 4, background: 'var(--color-primary-teal)', borderRadius: 2, zIndex: 0 }}>
      {steps.map((step, i) => (
        <div key={i} className="timeline-indicator" style={{ position: 'absolute', top: `calc(${i} * 80px)`, left: -22, width: 48, height: 48, borderRadius: '50%', background: 'var(--color-primary-teal)', color: 'var(--color-background-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>
          {step.number}
        </div>
      ))}
    </div>
  );
} 