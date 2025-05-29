import React from 'react';

export default function PriceDisplay({ price, period, featured }) {
  // For demo, no discount logic. Add strikethrough/originalPrice if needed.
  return (
    <div className="price-display" style={{ marginBottom: 16 }}>
      <span style={{ fontSize: 40, fontWeight: 700, color: 'var(--color-primary-teal)' }}>${price}</span>
      <span style={{ fontSize: 16, color: 'var(--color-text-secondary)', marginLeft: 8 }}>/ {period}</span>
    </div>
  );
} 