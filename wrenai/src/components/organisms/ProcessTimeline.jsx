import React from 'react';
import TimelineConnector from '../molecules/TimelineConnector';
import ProcessStep from '../molecules/ProcessStep';

export default function ProcessTimeline({ steps = [] }) {
  return (
    <div className="process-timeline" style={{ position: 'relative', padding: '32px 0' }}>
      <TimelineConnector steps={steps} />
      <div className="timeline-steps" style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
        {steps.map((step, i) => (
          <ProcessStep key={i} step={step} index={i} total={steps.length} />
        ))}
      </div>
    </div>
  );
} 