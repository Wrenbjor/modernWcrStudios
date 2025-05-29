import React from 'react';

export default function MediaContainer({ type = 'image', src, alt }) {
  if (type === 'image') {
    return (
      <div className="media-container" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={src} alt={alt} style={{ maxWidth: '100%', maxHeight: 360, borderRadius: 12, boxShadow: 'var(--shadow-card)' }} />
      </div>
    );
  }
  // Add support for other media types (e.g., video) as needed
  return null;
} 