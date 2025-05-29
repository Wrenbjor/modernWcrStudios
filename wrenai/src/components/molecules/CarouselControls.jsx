import React from 'react';
import Icon from '../atoms/Icon';

export default function CarouselControls({ onPrevious, onNext, currentIndex, totalItems }) {
  return (
    <div className="carousel-controls" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <button onClick={onPrevious} aria-label="Previous" style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--color-primary-teal)', color: 'var(--color-background-primary)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="ChevronLeft" size={20} />
      </button>
      <div className="carousel-dots" style={{ display: 'flex', gap: 4 }}>
        {Array.from({ length: totalItems }).map((_, i) => (
          <span key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: i === currentIndex ? 'var(--color-primary-teal)' : 'var(--color-text-muted)', display: 'inline-block' }} />
        ))}
      </div>
      <button onClick={onNext} aria-label="Next" style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--color-primary-teal)', color: 'var(--color-background-primary)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="ChevronRight" size={20} />
      </button>
    </div>
  );
} 