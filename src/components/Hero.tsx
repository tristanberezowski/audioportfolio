import React from 'react';
import { Play, Music } from 'lucide-react';
import WaveformAnimation from './WaveformAnimation';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      </div>

      {/* Background Waveform */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <WaveformAnimation />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <Music className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-bounce" />
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            Mixed by Woo
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Professional Audio Recording & Processing
        </p>
        
        <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Welcome to Mixed by Woo, your destination for top-tier audio services
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
            <span className="flex items-center gap-2">
              <Play className="w-5 h-5 group-hover:animate-pulse" />
              Listen to My Work
            </span>
          </button>
          
          <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-cyan-400 hover:text-gray-900 hover:scale-105">
            Get In Touch
          </button>
        </div>
        
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">500+</div>
            <div className="text-sm text-gray-400">Tracks Mixed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">15</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400">100+</div>
            <div className="text-sm text-gray-400">Artists Worked With</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
