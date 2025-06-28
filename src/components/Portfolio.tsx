import React, { useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  image: string;
  audioUrl?: string;
}

interface PortfolioProps {
  setCurrentTrack: (track: Track) => void;
  setIsPlaying: (playing: boolean) => void;
  setCurrentTheme: (theme: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ setCurrentTrack, setIsPlaying, setCurrentTheme }) => {
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const tracks: Track[] = [
    {
      id: 1,
      title: "Neon Dreams",
      artist: "Synthwave Collective",
      genre: "electronic",
      duration: "4:23",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Urban Rhythms",
      artist: "MC Flow",
      genre: "hiphop",
      duration: "3:45",
      image: "https://images.pexels.com/photos/7876705/pexels-photo-7876705.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Thunder Road",
      artist: "Electric Storm",
      genre: "rock",
      duration: "5:12",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "Midnight Jazz",
      artist: "Smooth Operators",
      genre: "jazz",
      duration: "6:30",
      image: "https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      title: "Digital Pulse",
      artist: "Cyber Nexus",
      genre: "electronic",
      duration: "3:58",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      title: "Street Vibes",
      artist: "Underground Kings",
      genre: "hiphop",
      duration: "4:15",
      image: "https://images.pexels.com/photos/7876704/pexels-photo-7876704.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const genres = ['all', 'electronic', 'hiphop', 'rock', 'jazz'];
  
  const filteredTracks = filter === 'all' ? tracks : tracks.filter(track => track.genre === filter);

  const getGenreColors = (genre: string) => {
    const colors = {
      electronic: 'from-cyan-500 to-blue-500',
      hiphop: 'from-purple-500 to-pink-500',
      rock: 'from-red-500 to-orange-500',
      jazz: 'from-yellow-500 to-green-500'
    };
    return colors[genre as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const handleTrackPlay = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    setCurrentTheme(track.genre);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              My Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my latest productions across various genres
          </p>
        </div>

        {/* Genre Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-gray-800 p-2 rounded-full">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setFilter(genre)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === genre
                    ? 'bg-cyan-500 text-gray-900'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTracks.map((track) => (
            <div
              key={track.id}
              className="group relative bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredTrack(track.id)}
              onMouseLeave={() => setHoveredTrack(null)}
              onClick={() => handleTrackPlay(track)}
            >
              {/* Track Image */}
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Genre Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getGenreColors(track.genre)} text-white`}>
                  {track.genre.toUpperCase()}
                </div>

                {/* Play Button Overlay */}
                <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredTrack === track.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                    <Play className="w-6 h-6 text-gray-900 ml-1" />
                  </button>
                </div>
              </div>

              {/* Track Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-200">
                  {track.title}
                </h3>
                <p className="text-gray-400 mb-2">{track.artist}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{track.duration}</span>
                  <Volume2 className="w-4 h-4 text-gray-500" />
                </div>
              </div>

              {/* Waveform Animation */}
              {hoveredTrack === track.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500">
                  <div className="h-full bg-white/30 animate-pulse"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;