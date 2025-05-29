import React from 'react';
import PricingCard from '../molecules/PricingCard';

export default function PricingGrid({ plans = [], billingPeriod, featuredPlan }) {
  return (
    <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, width: '100%', alignItems: 'stretch', marginTop: 32 }}>
      {plans.map((plan, i) => (
        <PricingCard key={plan.name} plan={plan} billingPeriod={billingPeriod} featured={plan.name === featuredPlan} />
      ))}
      <style>{`
        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </div>
  );
} 