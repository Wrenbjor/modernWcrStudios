import React, { useState } from 'react';
import CategoryFilter from '../molecules/CategoryFilter';
import PortfolioGrid from './PortfolioGrid';
import Heading from '../atoms/Heading';

const CATEGORIES = ['All Work', 'Web Development', 'AI Solutions', 'Branding', 'Mobile Apps'];
const PROJECTS = [
  // Example project objects
  { image: '/portfolio1.jpg', title: 'AI Web App', client: 'Acme Corp', category: 'AI Solutions', link: '#', featured: true, description: 'A next-gen AI-powered web application.' },
  { image: '/portfolio2.jpg', title: 'Brand Refresh', client: 'Brandify', category: 'Branding', link: '#', featured: false, description: 'Complete branding overhaul for a modern startup.' },
  // Add more projects as needed
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All Work');
  const filteredProjects = activeCategory === 'All Work' ? PROJECTS : PROJECTS.filter(p => p.category === activeCategory);
  return (
    <section className="portfolio-section" style={{ background: 'var(--color-background-secondary)', padding: '48px 0' }}>
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <Heading level={2} accent="AI" style={{ marginBottom: 32 }}>Our Portfolio</Heading>
        <CategoryFilter categories={CATEGORIES} activeCategory={activeCategory} onFilterChange={setActiveCategory} />
        <PortfolioGrid projects={filteredProjects} activeFilter={activeCategory} />
      </div>
    </section>
  );
} 