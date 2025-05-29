import React from 'react';
import Icon from '../atoms/Icon';

export default function SocialLinks({ links = [], size = 24, variant = '' }) {
  return (
    <div className={`social-links ${variant}`.trim()} style={{ display: 'flex', gap: 16 }}>
      {links.map(({ href, name, label }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label || name}
          className="social-link"
        >
          <Icon name={name} size={size} />
        </a>
      ))}
    </div>
  );
} 