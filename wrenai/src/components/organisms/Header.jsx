import React, { useState } from 'react';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';
import DesktopNavigation from '../organisms/DesktopNavigation';
import MobileNavigation from '../organisms/MobileNavigation';

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header
      className="main-navigation"
      style={{
        background: 'rgba(10,10,10,0.85)',
        height: '80px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        transition: 'background 300ms cubic-bezier(0.4,0,0.2,1), height 200ms',
      }}
    >
      <Logo variant="full" />
      <nav className="nav-links-wrapper" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <DesktopNavigation links={NAV_LINKS} ctaText="Get Started" ctaLink="/get-started" />
      </nav>
      <div className="nav-cta" style={{ marginLeft: 24 }}>
        <Button variant="primary" size="md" as="a" href="/get-started">
          Get Started
        </Button>
      </div>
      <button
        className="mobile-menu-toggle"
        aria-label="Open mobile menu"
        onClick={() => setMobileOpen(true)}
        style={{ display: 'none' }}
      >
        <span className="sr-only">Open menu</span>
        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
      <MobileNavigation
        links={NAV_LINKS}
        ctaText="Get Started"
        ctaLink="/get-started"
        isOpen={mobileOpen}
        onToggle={() => setMobileOpen(false)}
      />
    </header>
  );
} 