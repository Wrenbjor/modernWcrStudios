import React from 'react';

export default function FooterColumn({ title, type, content }) {
  return (
    <div className={`footer-column ${type}`} style={{ minWidth: 0 }}>
      {title && <h5 style={{ color: 'var(--color-text-primary)', fontSize: 18, fontWeight: 700, marginBottom: 16 }}>{title}</h5>}
      {content || <div style={{ color: 'var(--color-text-secondary)', fontSize: 15 }}>Placeholder content for {type}</div>}
    </div>
  );
} 