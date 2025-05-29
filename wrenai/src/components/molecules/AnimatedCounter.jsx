import React, { useEffect, useState } from 'react';

function formatNumber(value) {
  if (value >= 1e6) return (value / 1e6).toFixed(1) + 'M';
  if (value >= 1e3) return (value / 1e3).toFixed(1) + 'K';
  return value;
}

export default function AnimatedCounter({ endValue, duration = 2, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * (endValue - start) + start));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(endValue);
    };
    animate();
  }, [endValue, duration]);
  return (
    <div className="animated-counter" style={{ fontWeight: 800, fontSize: 48, color: 'var(--color-background-primary)', marginTop: 8 }}>
      {prefix}{formatNumber(count)}{suffix}
    </div>
  );
} 