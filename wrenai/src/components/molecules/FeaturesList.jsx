import React from 'react';
import Icon from '../atoms/Icon';

export default function FeaturesList({ features = [], highlights = [] }) {
  return (
    <ul className="features-list" style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
      {features.map((feature, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, color: highlights.includes(feature) ? 'var(--color-primary-bright-green)' : 'var(--color-text-secondary)', fontSize: 16, marginBottom: 8 }}>
          <Icon name="Check" size={16} color={highlights.includes(feature) ? 'var(--color-primary-bright-green)' : 'var(--color-primary-teal)'} />
          {feature}
        </li>
      ))}
    </ul>
  );
} 