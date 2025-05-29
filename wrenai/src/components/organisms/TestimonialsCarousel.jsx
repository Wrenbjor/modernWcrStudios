import React, { useState, useEffect, useRef } from 'react';
import TestimonialCard from '../molecules/TestimonialCard';
import CarouselControls from '../molecules/CarouselControls';

export default function TestimonialsCarousel({ testimonials = [], autoRotate = false, visibleCards = 3 }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    if (autoRotate) {
      intervalRef.current = setInterval(() => {
        setCurrent(c => (c + 1) % testimonials.length);
      }, 8000);
      return () => clearInterval(intervalRef.current);
    }
  }, [autoRotate, testimonials.length]);

  const handlePrev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const handleNext = () => setCurrent(c => (c + 1) % testimonials.length);

  const visible = testimonials.slice(current, current + visibleCards).concat(
    testimonials.slice(0, Math.max(0, current + visibleCards - testimonials.length))
  );

  return (
    <div className="testimonials-carousel" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 24 }}>
      <CarouselControls onPrevious={handlePrev} onNext={handleNext} currentIndex={current} totalItems={testimonials.length} />
      <div className="carousel-cards" style={{ display: 'flex', gap: 24, flex: 1, overflow: 'hidden' }}>
        {visible.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} />
        ))}
      </div>
    </div>
  );
} 