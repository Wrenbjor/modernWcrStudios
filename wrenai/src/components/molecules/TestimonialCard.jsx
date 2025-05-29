import React from 'react';
import QuoteText from './QuoteText';
import ClientAttribution from './ClientAttribution';
import StarRating from './StarRating';
import CompanyLogo from './CompanyLogo';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card" style={{ background: 'var(--color-background-card)', borderRadius: 12, boxShadow: 'var(--shadow-card)', padding: 32, minWidth: 320, maxWidth: 360, transition: 'box-shadow 200ms, transform 200ms', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative' }}>
      <QuoteText>{testimonial.quote}</QuoteText>
      <StarRating rating={testimonial.rating} />
      <ClientAttribution {...testimonial} />
      <CompanyLogo src={testimonial.logo} alt={testimonial.company} company={testimonial.company} />
    </div>
  );
} 