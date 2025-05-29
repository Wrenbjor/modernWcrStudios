import React from 'react';
import Icon from '../atoms/Icon';
import SearchHighlight from './SearchHighlight';

export default function FAQQuestion({ children, isOpen, onClick, searchHighlight }) {
  return (
    <button
      className="faq-question"
      onClick={onClick}
      style={{ width: '100%', background: 'none', border: 'none', textAlign: 'left', padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 18, fontWeight: 600, color: 'var(--color-text-primary)', cursor: 'pointer' }}
      aria-expanded={isOpen}
    >
      <span><SearchHighlight text={children} searchTerm={searchHighlight} /></span>
      <Icon name={isOpen ? 'ChevronUp' : 'ChevronDown'} size={20} color="var(--color-primary-teal)" />
    </button>
  );
} 