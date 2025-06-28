import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, X } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  image: string;
}

interface FloatingPlayerProps {
  currentTrack: Track | null;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const FloatingPlayer: React.FC<FloatingPlayerProps> = ({ currentTrack, isPlaying, setIsPlaying }) => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [isVisible, setIsVisible] = useState(false);
  const progressInterval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (currentTrack) {
      setIsVisible(true);
      setProgress(0);
      setCurrentTime('0:00');
    }
  }, [currentTrack]);

  useEffect(() => {
    if (isPlaying && currentTrack) {
      // Simulate audio progress
      progressInterval.current = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + (100 / 240); // Assume 4 minute track
          if (newProgress >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return newProgress;
        });
        
        setCurrentTime(prev => {
          const [minutes, seconds] = prev.split(':').map(Number);
          const totalSeconds = minutes * 60 + seconds + 1;
          const newMinutes = Math.floor(totalSeconds / 60);
          const newSeconds = totalSeconds % 60;
          return `${newMinutes}:${newSeconds.toString().padStart(2, '0')}`;
        });
      }, 1000);
    } else {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isPlaying, currentTrack, setIsPlaying]);

  if (!currentTrack || !isVisible) return null;

  const getGenreColors = (genre: string) => {
    const colors = {
      electronic: 'from-cyan-500 to-blue-500',
      hiphop: 'from-purple-500 to-pink-500',
      rock: 'from-red-500 to-orange-500',
      jazz: 'from-yellow-500 to-green-500'
    };
    return colors[genre as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <div className="max-w-md mx-auto bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Track Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-800">
            <img src={currentTrack.image} alt={currentTrack.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-white truncate">{currentTrack.title}</h4>
            <p className="text-sm text-gray-400 truncate">{currentTrack.artist}</p>
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getGenreColors(currentTrack.genre)} text-white`}>
            {currentTrack.genre.toUpperCase()}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>{currentTime}</span>
            <span>{currentTrack.duration}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div 
              className={`h-1 rounded-full bg-gradient-to-r ${getGenreColors(currentTrack.genre)} transition-all duration-300`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button className="text-gray-400 hover:text-white transition-colors duration-200">
            <SkipBack className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`w-12 h-12 rounded-full bg-gradient-to-r ${getGenreColors(currentTrack.genre)} flex items-center justify-center text-white hover:scale-105 transition-transform duration-200`}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>
          
          <button className="text-gray-400 hover:text-white transition-colors duration-200">
            <SkipForward className="w-5 h-5" />
          </button>
          
          <button className="text-gray-400 hover:text-white transition-colors duration-200 ml-2">
            <Volume2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingPlayer;