import React from 'react';

export default function ContactSuccess({ nextSteps, timeline, contactInfo }) {
  return (
    <div className="contact-success" style={{ padding: 32, background: 'var(--color-background-card)', borderRadius: 12, textAlign: 'center' }}>
      <h3 style={{ color: 'var(--color-primary-teal)' }}>Thank you for reaching out!</h3>
      <p>We received your message and will get back to you at <b>{contactInfo}</b>.</p>
      <p>Next steps: {nextSteps}</p>
      <p>Expected response: {timeline}</p>
    </div>
  );
} 