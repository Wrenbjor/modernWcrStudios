import React, { useState } from 'react';
import FAQItem from '../molecules/FAQItem';

export default function FAQAccordion({ faqs = [], searchTerm }) {
  const [openIndexes, setOpenIndexes] = useState([]);
  const toggle = idx => setOpenIndexes(open => open.includes(idx) ? open.filter(i => i !== idx) : [...open, idx]);
  return (
    <div className="faq-accordion" style={{ width: '100%' }}>
      {faqs.map((faq, i) => (
        <FAQItem
          key={i}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndexes.includes(i)}
          onToggle={() => toggle(i)}
          searchTerm={searchTerm}
        />
      ))}
    </div>
  );
} 