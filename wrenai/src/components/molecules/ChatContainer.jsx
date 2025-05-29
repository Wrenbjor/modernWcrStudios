import React from 'react';

export default function ChatContainer({ messages = [], isExpanded, onExpand }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 16 }}>
      <div style={{ flex: 1, overflowY: 'auto', marginBottom: 12 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: 8, textAlign: msg.type === 'ai' ? 'left' : 'right' }}>
            <span style={{ background: msg.type === 'ai' ? 'var(--color-primary-teal)' : 'var(--color-background-secondary)', color: '#fff', borderRadius: 8, padding: '6px 12px', display: 'inline-block' }}>
              {msg.message}
            </span>
          </div>
        ))}
      </div>
      {!isExpanded && (
        <button onClick={onExpand} style={{ alignSelf: 'center', marginTop: 8 }}>Expand</button>
      )}
    </div>
  );
} 