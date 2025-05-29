import React from 'react';
import clsx from 'clsx';

const variantClass = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
};

const sizeClass = {
  md: '', // default 48px height
  sm: 'btn-sm', // can be extended
  lg: 'btn-lg', // can be extended
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  loading = false,
  ...props
}) {
  return (
    <button
      className={clsx('btn', variantClass[variant], sizeClass[size])}
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      style={{ minHeight: 44 }}
      {...props}
    >
      {loading ? <span className="btn-spinner" aria-label="Loading..." /> : children}
    </button>
  );
} 