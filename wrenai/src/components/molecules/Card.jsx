import React from 'react';
import clsx from 'clsx';

export default function Card({ children, hover = false, padding = '', className = '', ...props }) {
  return (
    <div
      className={clsx('card', className, { 'card-hover': hover })}
      style={{ padding: padding || undefined, width: '100%', maxWidth: '100%' }}
      {...props}
    >
      {children}
    </div>
  );
} 