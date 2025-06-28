import React from 'react';
import { Headphones, Award, Users, Zap } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Award, title: 'Grammy Nominated', description: 'Best Engineered Album 2023' },
    { icon: Users, title: 'Platinum Artists', description: 'Worked with chart-toppers' },
    { icon: Headphones, title: 'Studio Owner', description: 'State-of-the-art facility' },
    { icon: Zap, title: 'Innovation Leader', description: 'Cutting-edge techniques' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-1">
              <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/7876704/pexels-photo-7876704.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Audio Engineer in Studio"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-cyan-500 text-gray-900 p-4 rounded-xl shadow-2xl">
              <Headphones className="w-8 h-8" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-4 rounded-xl shadow-2xl">
              <Award className="w-8 h-8" />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                About Me
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With over 15 years of experience in the music industry, I've dedicated my career to 
              perfecting the art of audio engineering and music production. From intimate acoustic 
              sessions to massive electronic productions, I bring a unique blend of technical 
              expertise and creative vision to every project.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              My passion lies in helping artists realize their sonic dreams, whether it's capturing 
              the perfect vocal take, crafting a massive drum sound, or creating an immersive mix 
              that translates beautifully across all playback systems.
            </p>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 p-4 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <achievement.icon className="w-8 h-8 text-cyan-400 mb-2" />
                  <h3 className="font-semibold text-white mb-1">{achievement.title}</h3>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;