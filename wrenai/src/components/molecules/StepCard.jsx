import React from 'react';
import DeliverablesList from './DeliverablesList';

export default function StepCard({ step }) {
  return (
    <div className="step-card" style={{ background: 'var(--color-background-card)', borderRadius: 12, boxShadow: 'var(--shadow-card)', padding: 32, minWidth: 280, flex: 1, transition: 'box-shadow 200ms, transform 200ms' }}>
      <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>{step.title}</div>
      <div style={{ color: 'var(--color-text-secondary)', marginBottom: 16 }}>{step.description}</div>
      <DeliverablesList deliverables={step.deliverables} />
      <div style={{ fontSize: 14, color: 'var(--color-text-muted)', marginTop: 16 }}>{step.timeline}</div>
    </div>
  );
} 