import React from 'react';
import TechnologyIcons from './TechnologyIcons';
import Button from '../atoms/Button';

export default function ProjectOverlay({ project }) {
  return (
    <div className="project-overlay" style={{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 160,
      background: 'linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.85) 100%)',
      color: 'var(--color-text-primary)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      transform: 'translateY(100%)',
      transition: 'transform 250ms cubic-bezier(0.4,0,0.2,1)',
    }}>
      <div style={{ fontWeight: 700, fontSize: 20 }}>{project.title}</div>
      <div style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginBottom: 8 }}>{project.client} &mdash; {project.category}</div>
      <div style={{ fontSize: 14, marginBottom: 12 }}>{project.description}</div>
      <TechnologyIcons technologies={project.technologies || []} />
      <Button variant="primary" as="a" href={project.link} size="sm" style={{ marginTop: 12 }}>
        View Case Study
      </Button>
    </div>
  );
} 