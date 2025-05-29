import React, { useState } from 'react';
import Heading from '../atoms/Heading';
import BillingToggle from '../molecules/BillingToggle';
import PricingGrid from './PricingGrid';

const PLANS = [
  { name: 'Starter', price: 29, features: ['Basic AI tools', 'Email support'], cta: 'Get Started', featured: false, badge: '', highlights: ['Best for individuals'] },
  { name: 'Pro', price: 79, features: ['All Starter features', 'Advanced AI', 'Priority support'], cta: 'Upgrade', featured: true, badge: 'Most Popular', highlights: ['Best for teams'] },
  { name: 'Enterprise', price: 199, features: ['All Pro features', 'Custom AI', 'Dedicated manager'], cta: 'Contact Sales', featured: false, badge: 'Enterprise', highlights: ['Best for large orgs'] },
];

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  return (
    <section className="pricing-section" style={{ background: 'var(--color-background-secondary)', padding: '48px 0', width: '100%' }}>
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <Heading level={2} accent="AI" style={{ marginBottom: 32 }}>Pricing Plans</Heading>
        <BillingToggle monthly={billingPeriod === 'monthly'} annual={billingPeriod === 'annual'} onToggle={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')} savings="Save 20% annually" />
        <PricingGrid plans={PLANS} billingPeriod={billingPeriod} featuredPlan="Pro" />
      </div>
    </section>
  );
} 