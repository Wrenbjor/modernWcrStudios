import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import StatIcon from './StatIcon';

export default function StatBlock({ number, label, icon, suffix, prefix }) {
  return (
    <div className="stat-block" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, minHeight: 120 }}>
      <StatIcon name={icon} size={32} />
      <AnimatedCounter endValue={number} duration={2} suffix={suffix} prefix={prefix} />
      <div style={{ fontSize: 16, fontWeight: 500, marginTop: 8 }}>{label}</div>
    </div>
  );
} 