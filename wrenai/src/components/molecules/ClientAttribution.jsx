import React from 'react';

export default function ClientAttribution({ author, title, company, photo }) {
  return (
    <div className="client-attribution" style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 16 }}>
      {photo && <img src={photo} alt={author} style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-primary-teal)' }} />}
      <div>
        <div style={{ fontWeight: 600, fontSize: 16 }}>{author}</div>
        <div style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>{title} @ {company}</div>
      </div>
    </div>
  );
} 