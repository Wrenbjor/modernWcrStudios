import React from 'react';

export default function QuoteText({ children, featured }) {
  return (
    <div className="quote-text" style={{ fontSize: 20, color: 'var(--color-text-primary)', lineHeight: 1.6, marginBottom: 16, position: 'relative' }}>
      <span style={{ color: 'var(--color-primary-bright-green)', fontSize: 32, fontWeight: 700, position: 'absolute', left: -24, top: -8 }}>&ldquo;</span>
      {children}
      <span style={{ color: 'var(--color-primary-bright-green)', fontSize: 32, fontWeight: 700, position: 'absolute', right: -24, bottom: -8 }}>&rdquo;</span>
    </div>
  );
} 