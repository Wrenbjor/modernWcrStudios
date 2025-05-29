import React from 'react';
import Icon from '../atoms/Icon';

export default function StatIcon({ name, size = 32 }) {
  return <Icon name={name} size={size} color="var(--color-background-primary)" />;
} 