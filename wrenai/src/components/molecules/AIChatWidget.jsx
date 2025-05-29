import React, { useState } from 'react';
import ChatContainer from './ChatContainer';

export default function AIChatWidget() {
  const [expanded, setExpanded] = useState(false);
  // Placeholder messages
  const [messages, setMessages] = useState([
    { type: 'ai', message: 'Hi! How can I help you today?', timestamp: Date.now() },
  ]);

  return (
    <div
      className="ai-chat-widget"
      style={{
        width: expanded ? 480 : 400,
        height: expanded ? 600 : 480,
        background: 'var(--color-background-card)',
        borderRadius: 12,
        boxShadow: 'var(--shadow-card)',
        transition: 'all 300ms cubic-bezier(0.4,0,0.2,1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        maxWidth: '100%',
      }}
    >
      <ChatContainer
        messages={messages}
        isExpanded={expanded}
        onExpand={() => setExpanded(true)}
      />
      <style>{`
        @media (max-width: 600px) {
          .ai-chat-widget {
            width: 343px !important;
            height: 180px !important;
            min-width: 0;
          }
        }
      `}</style>
    </div>
  );
} 