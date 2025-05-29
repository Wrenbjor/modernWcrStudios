import React from 'react';
import PlanHeader from './PlanHeader';
import PriceDisplay from './PriceDisplay';
import FeaturesList from './FeaturesList';
import PlanCTA from './PlanCTA';
import PlanBadge from './PlanBadge';

export default function PricingCard({ plan, billingPeriod, featured }) {
  return (
    <div className={`pricing-card${featured ? ' featured' : ''}`} style={{ background: 'var(--color-background-card)', borderRadius: 16, boxShadow: 'var(--shadow-card)', padding: 32, border: featured ? '2px solid var(--color-primary-teal)' : '1px solid rgba(255,255,255,0.08)', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'stretch', minHeight: 420 }}>
      <PlanHeader name={plan.name} badge={plan.badge} featured={featured} />
      <PriceDisplay price={plan.price} period={billingPeriod} featured={featured} />
      <FeaturesList features={plan.features} highlights={plan.highlights} />
      <PlanCTA text={plan.cta} featured={featured} />
      {plan.badge && <PlanBadge text={plan.badge} type={plan.badge.toLowerCase().replace(/\s/g, '-')}/>} 
    </div>
  );
} 