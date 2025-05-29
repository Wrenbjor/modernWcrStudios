import React from 'react';
import ProjectOverlay from './ProjectOverlay';

export default function FeaturedProjectCard({ project }) {
  return (
    <div className="featured-project-card" style={{ gridColumn: 'span 2', gridRow: 'span 2', position: 'relative', borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-elevated)', background: 'var(--color-background-card)', minHeight: 400 }}>
      <img src={project.image} alt={project.title} style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }} />
      <div className="featured-badge" style={{ position: 'absolute', top: 16, left: 16, background: 'var(--color-primary-bright-green)', color: 'var(--color-background-primary)', fontWeight: 700, borderRadius: 6, padding: '4px 12px', fontSize: 14 }}>Featured Project</div>
      <ProjectOverlay project={project} />
    </div>
  );
} 