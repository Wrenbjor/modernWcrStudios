import React from 'react';
import HeroContent from './HeroContent';
import AIChatWidget from '../molecules/AIChatWidget';

export default function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{
        background: 'var(--color-background-primary)',
        padding: '96px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 48,
        minHeight: 600,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="hero-content" style={{ flex: 3, minWidth: 0 }}>
        <HeroContent
          headline="Next-gen AI for your business."
          subheadline="WrenAI helps you automate, create, and grow with the power of conversational AI."
          primaryCTA={{ text: 'Get Started', href: '/get-started' }}
          secondaryCTA={{ text: 'Learn More', href: '/about' }}
        />
      </div>
      <div className="hero-chat" style={{ flex: 2, minWidth: 0, display: 'flex', justifyContent: 'center' }}>
        <AIChatWidget />
      </div>
      <style>{`
        @media (max-width: 900px) {
          .hero-section {
            flex-direction: column;
            padding: 64px 0;
            gap: 32px;
          }
          .hero-content, .hero-chat {
            width: 100%;
            min-width: 0;
          }
        }
      `}</style>
    </section>
  );
} 