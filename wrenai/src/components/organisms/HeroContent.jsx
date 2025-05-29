import React from 'react';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

export default function HeroContent({ headline, subheadline, primaryCTA, secondaryCTA }) {
  // Accent the word 'AI' in the headline
  const accentWord = 'AI';
  return (
    <div className="hero-content-inner" style={{ maxWidth: 540 }}>
      <Heading level={1} accent={accentWord}>
        {headline}
      </Heading>
      <Text variant="body-large" style={{ margin: '32px 0 40px 0', color: 'var(--color-text-secondary)' }}>
        {subheadline}
      </Text>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {primaryCTA && (
          <Button variant="primary" as="a" href={primaryCTA.href} size="md">
            {primaryCTA.text}
          </Button>
        )}
        {secondaryCTA && (
          <Button variant="ghost" as="a" href={secondaryCTA.href} size="md">
            {secondaryCTA.text}
          </Button>
        )}
      </div>
    </div>
  );
} 