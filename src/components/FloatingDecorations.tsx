import React, { useMemo } from 'react';

interface FloatingItem {
  id: number;
  x: number; // percentage across screen
  size: number;
  duration: number; // seconds to float from bottom to top
  delay: number; // initial delay
  driftX: number; // horizontal drift in px
  rot: number; // rotation in deg
  content: string;
  type: 'emoji' | 'petal';
  opacity: number;
}

export const FloatingDecorations: React.FC = () => {
  const items = useMemo<FloatingItem[]>(() => {
    const emojis = ['❤️', '💖', '💕', '💗', '🌸', '✨', '🌷', '💓', '🧸'];
    
    return Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      x: 3 + (i * 93) / 28 + (Math.random() * 4 - 2), // well distributed across width
      size: 16 + Math.random() * 18,
      duration: 14 + Math.random() * 12, // slow rise (14s to 26s)
      delay: (i * 0.7) % 15, // staggered start delays so they fill the screen smoothly
      driftX: -30 + Math.random() * 60,
      rot: -45 + Math.random() * 90,
      content: emojis[i % emojis.length],
      type: i % 4 === 0 ? 'petal' : 'emoji',
      opacity: 0.35 + Math.random() * 0.45,
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Soft romantic ambient gradient meshes */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-pink-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-red-100/35 rounded-full blur-3xl pointer-events-none" />

      {/* Floating hearts and emojis rising slowly from bottom to top */}
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute will-change-transform select-none"
          style={
            {
              left: `${item.x}%`,
              bottom: 0,
              fontSize: `${item.size}px`,
              animation: `float-upward ${item.duration}s linear infinite`,
              animationDelay: `-${item.delay}s`,
              '--particle-opacity': item.opacity,
              '--drift-x': `${item.driftX}px`,
              '--rot': `${item.rot}deg`,
            } as React.CSSProperties
          }
        >
          {item.type === 'petal' ? (
            <div
              className="rounded-full bg-gradient-to-br from-rose-300 via-pink-400 to-rose-400 shadow-xs"
              style={{
                width: `${item.size * 0.8}px`,
                height: `${item.size * 1.2}px`,
                borderRadius: '60% 40% 60% 40%',
                transform: `rotate(${item.rot}deg)`,
              }}
            />
          ) : (
            <span className="drop-shadow-xs filter">{item.content}</span>
          )}
        </div>
      ))}
    </div>
  );
};
