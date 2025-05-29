import React from 'react';

export default function SearchHighlight({ text, searchTerm }) {
  if (!searchTerm) return <>{text}</>;
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  const parts = String(text).split(regex);
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <span key={i} style={{ background: 'var(--color-primary-teal)', color: 'var(--color-background-primary)', borderRadius: 4, padding: '0 2px' }}>{part}</span>
        ) : (
          part
        )
      )}
    </>
  );
} 