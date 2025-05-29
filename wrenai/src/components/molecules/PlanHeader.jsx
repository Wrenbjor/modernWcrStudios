import React from 'react';

export default function PlanHeader({ name, badge, featured }) {
  return (
    <div className="plan-header" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
      <h3 style={{ fontSize: 24, fontWeight: 700, color: featured ? 'var(--color-primary-teal)' : 'var(--color-text-primary)', margin: 0 }}>{name}</h3>
      {badge && <span style={{ background: 'var(--color-primary-bright-green)', color: 'var(--color-background-primary)', borderRadius: 6, padding: '2px 10px', fontWeight: 600, fontSize: 14 }}>{badge}</span>}
    </div>
  );
} 