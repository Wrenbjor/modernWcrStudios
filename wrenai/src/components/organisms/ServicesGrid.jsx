import React from 'react';
import ServiceCard from '../molecules/ServiceCard';

export default function ServicesGrid({ services = [], filteredCategory }) {
  return (
    <div
      className="services-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
        transition: 'all 300ms cubic-bezier(0.4,0,0.2,1)',
        width: '100%',
      }}
    >
      {services.map((service, i) => (
        <ServiceCard key={i} {...service} />
      ))}
      <style>{`
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
} 