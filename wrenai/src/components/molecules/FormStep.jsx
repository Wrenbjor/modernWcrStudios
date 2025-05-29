import React from 'react';

export default function FormStep({ step, data, onChange, onNext, onPrevious, onSubmit, totalSteps }) {
  const handleInput = e => onChange({ [e.target.name]: e.target.value });
  return (
    <div className="form-step">
      {step === 0 && (
        <>
          <input name="name" placeholder="Name" value={data.name || ''} onChange={handleInput} style={{ display: 'block', marginBottom: 12, width: '100%' }} />
          <input name="email" placeholder="Email" value={data.email || ''} onChange={handleInput} style={{ display: 'block', marginBottom: 12, width: '100%' }} />
        </>
      )}
      {step === 1 && (
        <>
          <input name="projectType" placeholder="Project Type" value={data.projectType || ''} onChange={handleInput} style={{ display: 'block', marginBottom: 12, width: '100%' }} />
        </>
      )}
      {step === 2 && (
        <>
          <textarea name="requirements" placeholder="Requirements" value={data.requirements || ''} onChange={handleInput} style={{ display: 'block', marginBottom: 12, width: '100%' }} />
        </>
      )}
      {step === 3 && (
        <>
          <div>Review your info:</div>
          <pre style={{ background: '#222', color: '#fff', padding: 12 }}>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
      <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
        {step > 0 && <button type="button" onClick={onPrevious}>Previous</button>}
        {step < totalSteps - 1 && <button type="button" onClick={onNext}>Next</button>}
        {step === totalSteps - 1 && <button type="submit">Submit</button>}
      </div>
    </div>
  );
} 