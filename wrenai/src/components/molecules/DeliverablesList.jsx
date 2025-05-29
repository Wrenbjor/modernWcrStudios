import React from 'react';
import Icon from '../atoms/Icon';

export default function DeliverablesList({ deliverables = [] }) {
  return (
    <ul className="deliverables-list" style={{ listStyle: 'none', padding: 0, margin: '8px 0' }}>
      {deliverables.map((item, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-text-secondary)', fontSize: 14, marginBottom: 4 }}>
          <Icon name="Check" size={16} color="var(--color-primary-teal)" />
          {item}
        </li>
      ))}
    </ul>
  );
} 