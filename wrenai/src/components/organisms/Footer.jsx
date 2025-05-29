import React from 'react';
import FooterGrid from './FooterGrid';
import Copyright from '../molecules/Copyright';
import LegalLinks from '../molecules/LegalLinks';

const COLUMNS = [
  { type: 'logo', title: '', content: null },
  { type: 'navigation', title: 'Navigation', content: null },
  { type: 'resources', title: 'Resources', content: null },
  { type: 'newsletter', title: 'Newsletter', content: null },
];

export default function Footer() {
  return (
    <footer className="footer" style={{ background: 'var(--color-background-secondary)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '48px 24px' }}>
      <FooterGrid columns={COLUMNS} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 32, flexWrap: 'wrap', gap: 16 }}>
        <Copyright year={new Date().getFullYear()} company="WrenAI" />
        <LegalLinks links={[{ text: 'Privacy Policy', href: '#' }, { text: 'Terms of Service', href: '#' }, { text: 'Accessibility', href: '#' }]} />
      </div>
    </footer>
  );
} 