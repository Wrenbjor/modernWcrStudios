import React from 'react';
import Button from '../atoms/Button';

export default function PlanCTA({ text, featured }) {
  return (
    <Button variant={featured ? 'primary' : 'secondary'} size="md" style={{ marginTop: 24, width: '100%' }}>
      {text}
    </Button>
  );
} 