import React from 'react';
import StepCard from './StepCard';
import StepIndicator from './StepIndicator';

export default function ProcessStep({ step, index, total }) {
  const isLeft = index % 2 === 0;
  return (
    <div className={`process-step ${isLeft ? 'left' : 'right'}`} style={{ display: 'flex', flexDirection: isLeft ? 'row' : 'row-reverse', alignItems: 'center', gap: 32, position: 'relative' }}>
      <StepIndicator number={step.number} active={false} completed={false} />
      <StepCard step={step} />
    </div>
  );
} 