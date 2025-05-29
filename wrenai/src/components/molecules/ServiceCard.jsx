import React from 'react';
import Card from './Card';
import ServiceIcon from './ServiceIcon';
import FeatureList from './FeatureList';
import Button from '../atoms/Button';

export default function ServiceCard({ icon, title, description, features, ctaLink }) {
  return (
    <Card hover className="service-card" style={{ position: 'relative', padding: 32, transition: 'box-shadow 300ms, border-top 200ms' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
        <ServiceIcon name={icon} size={32} />
        <h3 className="card-title" style={{ margin: 0 }}>{title}</h3>
      </div>
      <div className="card-description" style={{ marginBottom: 24 }}>{description}</div>
      <FeatureList features={features} />
      <Button variant="secondary" as="a" href={ctaLink} style={{ marginTop: 24 }}>
        Learn More
      </Button>
      <style>{`
        .service-card:hover {
          box-shadow: 0px 8px 32px rgba(0, 212, 170, 0.15);
          border-top: 2px solid var(--color-primary-teal);
          transform: translateY(-2px);
        }
      `}</style>
    </Card>
  );
} 