import React from 'react';

export default function BillingToggle({ monthly, annual, onToggle, savings }) {
  return (
    <div className="billing-toggle" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
      <button
        className={`btn btn-ghost${monthly ? ' btn-primary' : ''}`}
        style={{ fontWeight: 500, borderRadius: 20, padding: '8px 20px', transition: 'all 200ms' }}
        onClick={() => !monthly && onToggle()}
        aria-pressed={monthly}
      >
        Monthly
      </button>
      <div style={{ width: 40, height: 24, background: 'var(--color-background-card)', borderRadius: 12, position: 'relative', cursor: 'pointer' }} onClick={onToggle}>
        <div style={{ position: 'absolute', top: 2, left: annual ? 22 : 2, width: 20, height: 20, borderRadius: '50%', background: 'var(--color-primary-teal)', transition: 'left 200ms' }} />
      </div>
      <button
        className={`btn btn-ghost${annual ? ' btn-primary' : ''}`}
        style={{ fontWeight: 500, borderRadius: 20, padding: '8px 20px', transition: 'all 200ms' }}
        onClick={() => !annual && onToggle()}
        aria-pressed={annual}
      >
        Annual
      </button>
      {savings && <span style={{ color: 'var(--color-primary-bright-green)', fontWeight: 600, marginLeft: 12 }}>{savings}</span>}
    </div>
  );
} 