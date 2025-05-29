import React from 'react';
import clsx from 'clsx';

export default function Input({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error = '',
  disabled = false,
  ...props
}) {
  const isTextarea = type === 'textarea';
  const inputProps = {
    className: clsx('input-field', { 'input-error': !!error }),
    placeholder,
    value,
    onChange,
    disabled,
    'aria-invalid': !!error,
    ...props,
  };
  return (
    <div style={{ width: '100%' }}>
      {isTextarea ? (
        <textarea {...inputProps} style={{ minHeight: 52, width: '100%' }} />
      ) : (
        <input type={type} {...inputProps} style={{ height: 52, width: '100%' }} />
      )}
      {error && <div style={{ color: 'var(--color-error-coral)', fontSize: 12, marginTop: 4 }}>{error}</div>}
    </div>
  );
} 