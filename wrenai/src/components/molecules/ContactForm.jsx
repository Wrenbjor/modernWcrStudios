import React from 'react';
import FormStep from './FormStep';

export default function ContactForm({ step, data, onChange, onNext, onPrevious, onSubmit, totalSteps }) {
  return (
    <div className="contact-form">
      <FormStep
        step={step}
        data={data}
        onChange={onChange}
        onNext={onNext}
        onPrevious={onPrevious}
        onSubmit={onSubmit}
        totalSteps={totalSteps}
      />
    </div>
  );
} 