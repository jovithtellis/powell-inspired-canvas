
import React from 'react';
import { MapPin, Mail, Calendar } from 'lucide-react';

const About = () => {
  const skills = [
    'Creative Direction', 'Video Production', 'Motion Graphics', 
    'Color Grading', 'Sound Design', 'Brand Strategy',
    'Visual Storytelling', 'Post-Production', 'Cinematography'
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column - Bio */}
          <div className="space-y-6 slide-in-left opacity-0">
            <h2 className="text-3xl md:text-4xl font-medium text-white">About</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a creative director and filmmaker with over 8 years of experience 
                crafting visual stories that resonate. My work spans across brand films, 
                music videos, and commercial content for clients worldwide.
              </p>
              <p>
                Based between London and Berlin, I collaborate with agencies, startups, 
                and established brands to create compelling visual narratives that drive 
                engagement and build lasting connections.
              </p>
              <p>
                My approach combines technical precision with creative intuition, 
                ensuring every project delivers both artistic excellence and commercial success.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 pt-6">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} />
                <span>London / Berlin</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} />
                <span>hello@jovithtellis.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Calendar size={18} />
                <span>Available for projects</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Skills with Premium Glass Morphism */}
          <div className="slide-in-right opacity-0" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-medium mb-6 text-white">Skills & Expertise</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="silver-gradient-border glass-box p-3 rounded-lg text-center text-sm font-medium text-white hover:bg-white/10 transition-all duration-300"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {skill}
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
