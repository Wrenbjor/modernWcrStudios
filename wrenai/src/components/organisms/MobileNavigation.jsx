import React, { useRef, useEffect } from 'react';
import NavigationLink from '../molecules/NavigationLink';
import Button from '../atoms/Button';

export default function MobileNavigation({ links = [], ctaText, ctaLink, isOpen, onToggle }) {
  const overlayRef = useRef();

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onToggle();
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onToggle]);

  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) onToggle();
  }

  return (
    <div
      className="mobile-menu-overlay"
      ref={overlayRef}
      style={{
        display: isOpen ? 'block' : 'none',
        animation: isOpen ? 'fadeIn 300ms cubic-bezier(0.4,0,0.2,1)' : 'none',
      }}
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <div
        className="mobile-menu-content"
        style={{
          transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 300ms cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="mobile-menu-header">
          <span style={{ fontWeight: 700, fontSize: 24, color: 'var(--color-text-primary)' }}>Menu</span>
          <button
            aria-label="Close menu"
            onClick={onToggle}
            style={{ background: 'none', border: 'none', color: 'var(--color-text-primary)', fontSize: 32 }}
          >
            &times;
          </button>
        </div>
        <div className="mobile-menu-links">
          {links.map(link => (
            <NavigationLink
              key={link.href}
              href={link.href}
              mobile
              onClick={onToggle}
            >
              {link.label}
            </NavigationLink>
          ))}
        </div>
        {ctaText && ctaLink && (
          <div className="mobile-menu-cta">
            <Button variant="primary" as="a" href={ctaLink} style={{ width: '100%' }}>
              {ctaText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
} 