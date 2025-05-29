import React from 'react';
import clsx from 'clsx';

const variantClass = {
  'body-large': 'text-body-large',
  body: 'text-body',
  'body-small': 'text-body-small',
  caption: 'text-caption',
};

export default function Text({ variant = 'body', children, color, accent = '' }) {
  let content = children;
  if (accent) {
    const regex = new RegExp(`(${accent})`, 'gi');
    content = String(children).split(regex).map((part, i) =>
      part.toLowerCase() === accent.toLowerCase() ? (
        <span key={i} style={{ color: 'var(--color-primary-bright-green)' }}>{part}</span>
      ) : (
        part
      )
    );
  }
  return (
    <span
      className={clsx(variantClass[variant])}
      style={color ? { color } : undefined}
    >
      {content}
    </span>
  );
} 