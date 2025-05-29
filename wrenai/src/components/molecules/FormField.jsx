import React from 'react';
import Input from '../atoms/Input';

export default function FormField({ label, error = '', required = false, ...inputProps }) {
  const id = inputProps.id || `input-${label.replace(/\s+/g, '-').toLowerCase()}`;
  return (
    <div className="form-field" style={{ width: '100%' }}>
      {label && (
        <label htmlFor={id} style={{ fontWeight: 500, marginBottom: 8, display: 'block' }}>
          {label} {required && <span style={{ color: 'var(--color-error-coral)' }}>*</span>}
        </label>
      )}
      <Input id={id} {...inputProps} error={error} />
      {error && (
        <div style={{ color: 'var(--color-error-coral)', fontSize: 12, marginTop: 4 }}>{error}</div>
      )}
    </div>
  );
} 