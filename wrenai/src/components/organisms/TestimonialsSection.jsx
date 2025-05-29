import React from 'react';
import Heading from '../atoms/Heading';
import TestimonialsCarousel from './TestimonialsCarousel';

const TESTIMONIALS = [
  { quote: 'WrenAI transformed our workflow!', author: 'Jane Doe', company: 'Acme Corp', rating: 5, photo: '/client1.jpg', logo: '/acme-logo.png' },
  { quote: 'Amazing results and support.', author: 'John Smith', company: 'Brandify', rating: 5, photo: '/client2.jpg', logo: '/brandify-logo.png' },
  // Add more testimonials as needed
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" style={{ background: 'var(--color-background-primary)', padding: '64px 0', width: '100%' }}>
      <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <Heading level={2} accent="AI" style={{ marginBottom: 32 }}>What Our Clients Say</Heading>
        <TestimonialsCarousel testimonials={TESTIMONIALS} autoRotate visibleCards={3} />
      </div>
    </section>
  );
} 