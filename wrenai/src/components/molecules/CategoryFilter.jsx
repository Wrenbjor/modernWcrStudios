import React from 'react';

export default function CategoryFilter({ categories = [], activeCategory, onFilterChange }) {
  return (
    <div className="category-filter" style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
      {categories.map(cat => (
        <button
          key={cat}
          className={`btn btn-ghost${activeCategory === cat ? ' btn-primary' : ''}`}
          style={{ fontWeight: 500, transition: 'all 200ms' }}
          onClick={() => onFilterChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
} 