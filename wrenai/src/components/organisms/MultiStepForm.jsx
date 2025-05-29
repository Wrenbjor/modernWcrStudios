import React, { useState } from 'react';
import FormProgress from '../molecules/FormProgress';
import ContactForm from '../molecules/ContactForm';
import ContactSuccess from '../molecules/ContactSuccess';
import AutoSave from '../molecules/AutoSave';

const STEPS = [
  { title: 'Basic Info' },
  { title: 'Project Details' },
  { title: 'Requirements' },
  { title: 'Review' },
];

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => setStep(s => Math.min(s + 1, STEPS.length - 1));
  const handlePrev = () => setStep(s => Math.max(s - 1, 0));
  const handleChange = (data) => setFormData(f => ({ ...f, ...data }));
  const handleSubmit = () => setSubmitted(true);

  if (submitted) return <ContactSuccess nextSteps="We'll be in touch soon!" timeline="1-2 business days" contactInfo={formData.email} />;

  return (
    <form className="multi-step-form" onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
      <FormProgress currentStep={step} totalSteps={STEPS.length} stepTitles={STEPS.map(s => s.title)} onStepClick={setStep} />
      <ContactForm
        step={step}
        data={formData}
        onChange={handleChange}
        onNext={handleNext}
        onPrevious={handlePrev}
        onSubmit={handleSubmit}
        totalSteps={STEPS.length}
      />
      <AutoSave data={formData} />
    </form>
  );
} 