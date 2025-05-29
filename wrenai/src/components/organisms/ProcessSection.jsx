import React from 'react';
import Heading from '../atoms/Heading';
import ProcessTimeline from './ProcessTimeline';

const STEPS = [
  { number: 1, title: 'Discovery', description: 'We learn about your needs.', deliverables: ['Kickoff Call', 'Requirements'], timeline: 'Week 1', icon: 'Search' },
  { number: 2, title: 'Planning', description: 'We design your solution.', deliverables: ['Wireframes', 'Roadmap'], timeline: 'Week 2', icon: 'Map' },
  { number: 3, title: 'Execution', description: 'We build and iterate.', deliverables: ['MVP', 'Testing'], timeline: 'Weeks 3-6', icon: 'Code' },
  { number: 4, title: 'Launch', description: 'We deploy and support.', deliverables: ['Go Live', 'Support'], timeline: 'Week 7', icon: 'Rocket' },
];

export default function ProcessSection() {
  return (
    <section className="process-section" style={{ background: 'var(--color-background-primary)', padding: '64px 0', width: '100%' }}>
      <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <Heading level={2} accent="AI" style={{ marginBottom: 32 }}>Our Process</Heading>
        <ProcessTimeline steps={STEPS} />
      </div>
    </section>
  );
} 