import React from 'react';
import ProjectCard from '../molecules/ProjectCard';
import FeaturedProjectCard from '../molecules/FeaturedProjectCard';

export default function PortfolioGrid({ projects = [], activeFilter }) {
  return (
    <div className="portfolio-grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24,
      width: '100%',
      gridAutoRows: 'minmax(200px, auto)',
      alignItems: 'stretch',
      transition: 'all 300ms cubic-bezier(0.4,0,0.2,1)',
    }}>
      {projects.map((project, i) =>
        project.featured ? (
          <FeaturedProjectCard key={i} project={project} />
        ) : (
          <ProjectCard key={i} project={project} />
        )
      )}
      <style>{`
        @media (max-width: 900px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
} 