import React from 'react';
import Icon from './Icon';

export default function Logo({ variant = 'full', ...props }) {
  return (
    <a href="/" className="nav-logo" {...props}>
      <Icon name="Zap" size={32} color="var(--color-primary-teal)" aria-label="Logo" />
      {variant === 'full' && (
        <span style={{ color: 'var(--color-text-primary)', fontWeight: 700, fontSize: 24 }}>
          Wren<span className="logo-accent">AI</span>
        </span>
      )}
      {variant === 'compressed' && (
        <span style={{ color: 'var(--color-text-primary)', fontWeight: 700, fontSize: 20 }}>
          W<span className="logo-accent">AI</span>
        </span>
      )}
    </a>
  );
} 