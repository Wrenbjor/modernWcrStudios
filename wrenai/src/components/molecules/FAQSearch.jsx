import React from 'react';
import Icon from '../atoms/Icon';

export default function FAQSearch({ searchTerm, onSearch, resultCount }) {
  return (
    <div className="faq-search" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
      <div style={{ position: 'relative', flex: 1 }}>
        <Icon name="Search" size={20} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
        <input
          type="text"
          value={searchTerm}
          onChange={e => onSearch(e.target.value)}
          placeholder="Search FAQs..."
          style={{ width: '100%', padding: '10px 12px 10px 40px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)', background: 'var(--color-background-card)', color: 'var(--color-text-primary)', fontSize: 16 }}
        />
        {searchTerm && (
          <button onClick={() => onSearch('')} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--color-text-muted)', fontSize: 18, cursor: 'pointer' }} aria-label="Clear search">&times;</button>
        )}
      </div>
      <span style={{ color: 'var(--color-text-muted)', fontSize: 14 }}>{resultCount} results</span>
    </div>
  );
} 