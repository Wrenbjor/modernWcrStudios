import React from 'react';

export default function PlanBadge({ text, type }) {
  return (
    <div className={`plan-badge ${type}`} style={{ position: 'absolute', top: -18, left: '50%', transform: 'translateX(-50%)', background: 'var(--color-primary-bright-green)', color: 'var(--color-background-primary)', borderRadius: 8, padding: '4px 16px', fontWeight: 700, fontSize: 14, boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
      {text}
    </div>
  );
} 