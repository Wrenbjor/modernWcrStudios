import React from 'react';

export default function AboutContent({ headline, bodyText, stats = [], pullQuote }) {
  return (
    <div className="about-content-inner" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>{headline}</h2>
      <p style={{ fontSize: 18, color: 'var(--color-text-secondary)', marginBottom: 16 }}>{bodyText}</p>
      <div className="about-stats" style={{ display: 'flex', gap: 24, marginBottom: 16 }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{stat.number}</div>
            <div style={{ fontSize: 15, color: 'var(--color-text-secondary)' }}>{stat.label}</div>
          </div>
        ))}
      </div>
      {pullQuote && (
        <blockquote style={{ fontStyle: 'italic', color: 'var(--color-primary-teal)', borderLeft: '4px solid var(--color-primary-teal)', paddingLeft: 16, margin: 0 }}>
          {pullQuote.quote}
          <footer style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginTop: 8 }}>— {pullQuote.author}</footer>
        </blockquote>
      )}
    </div>
  );
} 