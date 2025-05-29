import React from 'react';
import clsx from 'clsx';

const headingMap = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
};

export default function Heading({ level = 1, children, accent = '', color }) {
  const Tag = headingMap[level] || 'h1';
  let content = children;
  if (accent) {
    const regex = new RegExp(`(${accent})`, 'gi');
    content = String(children).split(regex).map((part, i) =>
      part.toLowerCase() === accent.toLowerCase() ? (
        <span key={i} style={{ color: 'var(--color-primary-bright-green)' }}>{part}</span>
      ) : (
        part
      )
    );
  }
  return (
    <Tag
      className={clsx(`text-h${level}`)}
      style={color ? { color } : undefined}
    >
      {content}
    </Tag>
  );
} 