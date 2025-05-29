import React from 'react';

export default function Copyright({ year, company }) {
  return (
    <div className="copyright" style={{ color: 'var(--color-text-muted)', fontSize: 13 }}>
      &copy; {year} {company}. All rights reserved.
    </div>
  );
} 