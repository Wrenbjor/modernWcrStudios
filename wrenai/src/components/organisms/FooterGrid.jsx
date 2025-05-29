import React from 'react';
import FooterColumn from '../molecules/FooterColumn';

export default function FooterGrid({ columns = [] }) {
  return (
    <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, width: '100%', maxWidth: 1200, margin: '0 auto' }}>
      {columns.map((col, i) => (
        <FooterColumn key={i} title={col.title} type={col.type} content={col.content} />
      ))}
      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </div>
  );
} 