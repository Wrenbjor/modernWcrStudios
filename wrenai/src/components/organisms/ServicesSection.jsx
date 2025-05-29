import React, { useState } from 'react';
import ServicesGrid from './ServicesGrid';
// import FilterTabs from '../molecules/FilterTabs'; // Uncomment if implementing filter tabs
import Heading from '../atoms/Heading';

const SERVICES = [
  {
    icon: 'Code',
    title: 'AI Development',
    description: 'Custom AI solutions for your business needs.',
    features: ['Custom Models', 'API Integration', 'Automation'],
    ctaLink: '/services/ai-development',
    category: 'Development',
  },
  {
    icon: 'PenTool',
    title: 'AI Design',
    description: 'Conversational UI and AI-driven design.',
    features: ['Chatbots', 'UX Optimization', 'Brand AI'],
    ctaLink: '/services/ai-design',
    category: 'Design',
  },
  {
    icon: 'TrendingUp',
    title: 'AI Strategy',
    description: 'Strategic consulting for AI adoption.',
    features: ['Roadmapping', 'Workshops', 'AI Readiness'],
    ctaLink: '/services/ai-strategy',
    category: 'Strategy',
  },
  // Add more services as needed
];

const CATEGORIES = ['All', 'Development', 'Design', 'Strategy', 'Consulting'];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredServices =
    activeCategory === 'All'
      ? SERVICES
      : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section
      className="services-section"
      style={{
        background: 'var(--color-background-secondary)',
        padding: '48px 0',
        width: '100%',
      }}
    >
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <Heading level={2} accent="AI" style={{ marginBottom: 32 }}>
          Our AI Services
        </Heading>
        {/*
        <FilterTabs
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        */}
        <ServicesGrid services={filteredServices} filteredCategory={activeCategory} />
      </div>
    </section>
  );
} 