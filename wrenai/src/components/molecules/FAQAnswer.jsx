import React from 'react';
import SearchHighlight from './SearchHighlight';

export default function FAQAnswer({ children, isOpen, searchHighlight }) {
  return (
    <div
      className="faq-answer"
      style={{
        maxHeight: isOpen ? 500 : 0,
        overflow: 'hidden',
        transition: 'max-height 300ms cubic-bezier(0.4,0,0.2,1)',
        color: 'var(--color-text-secondary)',
        fontSize: 16,
        padding: isOpen ? '0 0 20px 0' : '0',
      }}
      aria-hidden={!isOpen}
    >
      {isOpen && <SearchHighlight text={children} searchTerm={searchHighlight} />}
    </div>
  );
} 