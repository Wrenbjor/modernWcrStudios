import React from 'react';
import Icon from '../atoms/Icon';

export default function TechnologyIcons({ technologies = [] }) {
  return (
    <div className="technology-icons" style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
      {technologies.map((tech, i) => (
        <Icon key={i} name={tech} size={16} />
      ))}
    </div>
  );
} 