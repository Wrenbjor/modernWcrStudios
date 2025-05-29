import React from 'react';

export default function CompanyLogo({ src, alt, company }) {
  return (
    <img
      src={src}
      alt={alt || company}
      style={{ maxWidth: 80, position: 'absolute', right: 16, bottom: 16, opacity: 0.7, transition: 'opacity 200ms' }}
      className="company-logo"
    />
  );
} 