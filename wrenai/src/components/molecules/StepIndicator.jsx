import React from 'react';

export default function StepIndicator({ number, active, completed }) {
  return (
    <div className="step-indicator" style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--color-primary-teal)', color: 'var(--color-background-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.12)', position: 'relative', animation: active ? 'pulse 1.5s infinite' : 'none' }}>
      {completed ? '✓' : number}
    </div>
  );
} 