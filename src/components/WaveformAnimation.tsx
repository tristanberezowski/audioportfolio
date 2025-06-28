import React from 'react';

const WaveformAnimation = () => {
  const bars = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="flex items-end justify-center gap-1 h-32">
      {bars.map((bar) => (
        <div
          key={bar}
          className="bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full"
          style={{
            width: '4px',
            height: `${Math.random() * 80 + 20}%`,
            animation: `waveform ${Math.random() * 1 + 0.5}s ease-in-out infinite alternate`,
            animationDelay: `${bar * 0.1}s`
          }}
        />
      ))}
    </div>
  );
};

export default WaveformAnimation;