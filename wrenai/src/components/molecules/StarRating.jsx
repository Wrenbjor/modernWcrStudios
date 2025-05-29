import React from 'react';
import Icon from '../atoms/Icon';

export default function StarRating({ rating = 5, maxRating = 5, size = 16 }) {
  return (
    <div className="star-rating" style={{ display: 'flex', gap: 2, margin: '8px 0' }}>
      {Array.from({ length: maxRating }).map((_, i) => (
        <Icon
          key={i}
          name={i < rating ? 'Star' : 'StarOff'}
          size={size}
          color={i < rating ? 'var(--color-primary-teal)' : 'var(--color-text-muted)'}
        />
      ))}
    </div>
  );
} 