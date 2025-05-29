import React from 'react';
import MultiStepForm from './MultiStepForm';
import ContactInformation from '../molecules/ContactInformation';

export default function ContactSection() {
  return (
    <section className="contact-section" style={{ background: 'var(--color-background-primary)', padding: '64px 0', width: '100%' }}>
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 48, alignItems: 'flex-start' }}>
        <div style={{ flex: 3, minWidth: 0 }}>
          <MultiStepForm />
        </div>
        <div style={{ flex: 2, minWidth: 0 }}>
          <ContactInformation
            phone="(555) 123-4567"
            email="hello@wrenai.com"
            address="123 AI Lane, Tech City, USA"
            hours="Mon-Fri 9am-6pm"
            social={[{ name: 'LinkedIn', url: '#' }, { name: 'Twitter', url: '#' }]}
          />
        </div>
      </div>
    </section>
  );
} 