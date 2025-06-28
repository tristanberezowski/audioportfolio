import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import FloatingPlayer from './components/FloatingPlayer';
import Navigation from './components/Navigation';

function App() {
  const [currentTrack, setCurrentTrack] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('electronic');

  useEffect(() => {
    // Set CSS custom properties for dynamic theming
    const root = document.documentElement;
    const themes = {
      electronic: { primary: '#00f5ff', secondary: '#0080ff', accent: '#ff00ff' },
      hiphop: { primary: '#8b5cf6', secondary: '#a78bfa', accent: '#fbbf24' },
      rock: { primary: '#ef4444', secondary: '#f87171', accent: '#fb923c' },
      jazz: { primary: '#fbbf24', secondary: '#fcd34d', accent: '#10b981' }
    };
    
    const theme = themes[currentTheme as keyof typeof themes];
    root.style.setProperty('--color-primary', theme.primary);
    root.style.setProperty('--color-secondary', theme.secondary);
    root.style.setProperty('--color-accent', theme.accent);
  }, [currentTheme]);

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Portfolio 
        setCurrentTrack={setCurrentTrack}
        setIsPlaying={setIsPlaying}
        setCurrentTheme={setCurrentTheme}
      />
      <Services />
      <Contact />
      <FloatingPlayer 
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;