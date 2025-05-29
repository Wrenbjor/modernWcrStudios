import React, { useState } from 'react';
import Heading from '../atoms/Heading';
import FAQSearch from '../molecules/FAQSearch';
import FAQAccordion from './FAQAccordion';

const FAQS = [
  { question: 'How does WrenAI work?', answer: 'WrenAI uses advanced AI models to automate and enhance your business processes.' },
  { question: 'Can I integrate WrenAI with my tools?', answer: 'Yes, WrenAI offers API and integration options for most platforms.' },
  // Add more FAQs as needed
];

export default function FAQSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredFaqs = FAQS.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <section className="faq-section" style={{ background: 'var(--color-background-secondary)', padding: '48px 0', width: '100%' }}>
      <div className="container" style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
        <Heading level={2} accent="AI" style={{ marginBottom: 32 }}>Frequently Asked Questions</Heading>
        <FAQSearch searchTerm={searchTerm} onSearch={setSearchTerm} resultCount={filteredFaqs.length} />
        <FAQAccordion faqs={filteredFaqs} searchTerm={searchTerm} />
      </div>
    </section>
  );
} 