import React from 'react';
import Icon from '../atoms/Icon';

export default function FeatureList({ features = [] }) {
  return (
    <ul className="feature-list" style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
      {features.map((feature, i) => (
        <li key={i} className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-text-secondary)', fontSize: 14, marginBottom: 8 }}>
          <Icon name="Check" size={16} color="var(--color-primary-teal)" />
          {feature}
        </li>
      ))}
    </ul>
  );
} 