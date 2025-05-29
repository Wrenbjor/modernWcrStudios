import React from 'react';
import Icon from '../atoms/Icon';

export default function ServiceIcon({ name, size = 32 }) {
  return <Icon name={name} size={size} color="var(--color-primary-teal)" />;
} 