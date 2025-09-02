
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
                I’m a Creative Director, Motion Graphics Artist, and Filmmaker who thrives on 
                bringing stories to life through design, movement, and cinematic vision. 
                My work bridges artistry with strategy creating visuals that don’t just look striking, 
                but also communicate with clarity and connect meaningfully with audiences.
              </p>
              <p>
                Over the years, I’ve led end-to-end creative processes across film, motion, and brand identity.
                I’ve partnered with startups, agencies, and established brands to deliver impactful projects 
                that cut through the noise and leave a lasting impression.
              </p>
              <p>
                I also believe that creativity should evolve alongside technology. 
                By integrating AI and emerging tools into my workflow, 
                I’m able to streamline production, accelerate timelines, and unlock new forms of storytelling.
              </p>
              <p>
              At the heart of my work is a simple goal: 
              to transform ideas into experiences that inspire, resonate, and move people. 
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 pt-6">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} />
                <span>Bengaluru, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} />
                <span>jovithozzy@gmail.com</span>
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
