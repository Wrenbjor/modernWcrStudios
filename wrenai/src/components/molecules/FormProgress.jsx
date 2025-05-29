import React from 'react';

export default function FormProgress({ currentStep, totalSteps, stepTitles, onStepClick }) {
  return (
    <div className="form-progress" style={{ marginBottom: 32 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {stepTitles.map((title, i) => (
          <React.Fragment key={i}>
            <button
              type="button"
              onClick={() => onStepClick(i)}
              style={{
                background: i === currentStep ? 'var(--color-primary-teal)' : 'var(--color-background-card)',
                color: i === currentStep ? 'var(--color-background-primary)' : 'var(--color-text-secondary)',
                border: 'none',
                borderRadius: 20,
                padding: '8px 16px',
                fontWeight: 600,
                fontSize: 14,
                cursor: 'pointer',
                transition: 'background 200ms',
              }}
              aria-current={i === currentStep ? 'step' : undefined}
            >
              {title}
            </button>
            {i < totalSteps - 1 && <span style={{ width: 32, height: 2, background: 'var(--color-primary-teal)', display: 'inline-block', borderRadius: 1 }} />}
          </React.Fragment>
        ))}
      </div>
      <div style={{ height: 4, background: 'var(--color-background-card)', borderRadius: 2, marginTop: 12, position: 'relative' }}>
        <div style={{ width: `${((currentStep + 1) / totalSteps) * 100}%`, height: 4, background: 'var(--color-primary-teal)', borderRadius: 2, transition: 'width 300ms' }} />
      </div>
    </div>
  );
} 