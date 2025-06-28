import React from 'react';
import { Mic, Settings, Zap, Music2, Headphones, Radio } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Mic,
      title: 'Recording',
      description: 'Professional recording in my state-of-the-art studio with top-tier equipment and acoustics.',
      features: ['Multi-track recording', 'Vocal booths', 'Live room', 'Remote sessions']
    },
    {
      icon: Settings,
      title: 'Mixing',
      description: 'Transform your raw tracks into polished, radio-ready productions that translate across all systems.',
      features: ['Stereo mixing', 'Stem mastering', 'Reference matching', 'Unlimited revisions']
    },
    {
      icon: Zap,
      title: 'Mastering',
      description: 'Final polish for your tracks with professional mastering that makes your music shine.',
      features: ['Loudness optimization', 'EQ balancing', 'Stereo enhancement', 'Format delivery']
    },
    {
      icon: Music2,
      title: 'Production',
      description: 'Full music production services from concept to completion across all genres.',
      features: ['Beat making', 'Arrangement', 'Instrumentation', 'Creative direction']
    },
    {
      icon: Headphones,
      title: 'Sound Design',
      description: 'Custom sound design for music, film, games, and multimedia projects.',
      features: ['SFX creation', 'Ambient design', 'Foley work', 'Audio branding']
    },
    {
      icon: Radio,
      title: 'Podcast Mixing',
      description: 'Professional podcast production and post-production services.',
      features: ['Voice enhancement', 'Noise reduction', 'Music integration', 'Distribution prep']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional audio services tailored to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Contact Button */}
              <div className="border-t border-gray-700 pt-4">
                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200">
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to elevate your sound?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. 
              Contact me for a free consultation and quote.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-200">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;