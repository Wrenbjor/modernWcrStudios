import React from 'react';
import ProjectOverlay from './ProjectOverlay';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card" style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', boxShadow: 'var(--shadow-card)', background: 'var(--color-background-card)', minHeight: 240 }}>
      <img src={project.image} alt={project.title} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
      <ProjectOverlay project={project} />
    </div>
  );
} 