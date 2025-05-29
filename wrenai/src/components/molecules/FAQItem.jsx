import React from 'react';
import FAQQuestion from './FAQQuestion';
import FAQAnswer from './FAQAnswer';

export default function FAQItem({ question, answer, isOpen, onToggle, searchTerm }) {
  return (
    <div className="faq-item" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', transition: 'height 300ms cubic-bezier(0.4,0,0.2,1)' }}>
      <FAQQuestion isOpen={isOpen} onClick={onToggle} searchHighlight={searchTerm}>
        {question}
      </FAQQuestion>
      <FAQAnswer isOpen={isOpen} searchHighlight={searchTerm}>
        {answer}
      </FAQAnswer>
    </div>
  );
} 