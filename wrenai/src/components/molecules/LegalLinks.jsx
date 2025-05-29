import React from 'react';

export default function LegalLinks({ links = [] }) {
  return (
    <div className="legal-links" style={{ display: 'flex', gap: 16 }}>
      {links.map((link, i) => (
        <a key={i} href={link.href} style={{ color: 'var(--color-text-muted)', fontSize: 13, textDecoration: 'none', transition: 'color 200ms' }} onMouseOver={e => e.target.style.color = 'var(--color-primary-teal)'} onMouseOut={e => e.target.style.color = 'var(--color-text-muted)'}>
          {link.text}
        </a>
      ))}
    </div>
  );
} 