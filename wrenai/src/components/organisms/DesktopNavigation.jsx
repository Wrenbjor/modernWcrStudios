import React from 'react';
import NavigationLink from '../molecules/NavigationLink';
import Button from '../atoms/Button';

export default function DesktopNavigation({ links = [], ctaText, ctaLink }) {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  return (
    <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      {links.map(link => (
        <NavigationLink
          key={link.href}
          href={link.href}
          active={currentPath === link.href}
        >
          {link.label}
        </NavigationLink>
      ))}
      {ctaText && ctaLink && (
        <Button variant="primary" as="a" href={ctaLink} style={{ marginLeft: 24 }}>
          {ctaText}
        </Button>
      )}
    </div>
  );
} 