import React from 'react';
import * as LucideIcons from 'lucide-react';

const sizeMap = {
  16: 16,
  20: 20,
  24: 24,
  32: 32,
};

export default function Icon({ name, size = 24, color, ...props }) {
  const LucideIcon = LucideIcons[name] || LucideIcons['Circle'];
  return (
    <span
      className={`icon icon--size-${size === 16 ? 'sm' : size === 20 ? 'md' : size === 32 ? 'xl' : 'lg'}`}
      style={{ color: color || 'var(--color-text-muted)', display: 'inline-flex', transition: 'color 200ms' }}
      tabIndex={0}
      {...props}
    >
      <LucideIcon size={sizeMap[size] || 24} />
    </span>
  );
} 