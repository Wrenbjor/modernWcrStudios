import React from 'react';
import AboutContent from './AboutContent';
import MediaContainer from './MediaContainer';

export default function AboutSection() {
  // Example props for AboutContent and MediaContainer
  const stats = [
    { number: 120, label: 'Projects', icon: 'CheckCircle' },
    { number: 24, label: 'Team Members', icon: 'Users' },
    { number: 98, label: 'Satisfaction', icon: 'Smile' },
  ];
  return (
    <section
      className="about-section"
      style={{
        background: 'var(--color-background-primary)',
        padding: '64px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 48,
        minHeight: 480,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="about-media" style={{ flex: 1, minWidth: 0 }}>
        <MediaContainer type="image" src="/about-hero.jpg" alt="About WrenAI" />
      </div>
      <div className="about-content" style={{ flex: 1, minWidth: 0 }}>
        <AboutContent
          headline="Empowering businesses with next-gen AI."
          bodyText="WrenAI is dedicated to helping organizations unlock the full potential of artificial intelligence. Our team of experts delivers tailored solutions that drive innovation, efficiency, and growth."
          stats={stats}
          pullQuote={{
            quote: '“AI is not just the future, it’s the now.”',
            author: 'WrenAI Team'
          }}
        />
      </div>
    </section>
  );
}

 