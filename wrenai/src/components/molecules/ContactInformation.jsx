import React from 'react';

export default function ContactInformation({ phone, email, address, hours, social }) {
  return (
    <div className="contact-information" style={{ background: 'var(--color-background-card)', borderRadius: 12, padding: 32 }}>
      <h4 style={{ color: 'var(--color-primary-teal)', marginBottom: 16 }}>Contact Us</h4>
      <div style={{ marginBottom: 8 }}><b>Phone:</b> {phone}</div>
      <div style={{ marginBottom: 8 }}><b>Email:</b> {email}</div>
      <div style={{ marginBottom: 8 }}><b>Address:</b> {address}</div>
      <div style={{ marginBottom: 8 }}><b>Hours:</b> {hours}</div>
      <div style={{ marginTop: 16 }}>
        <b>Social:</b>
        <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
          {social && social.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary-teal)' }}>{s.name}</a>
          ))}
        </div>
      </div>
    </div>
  );
} 