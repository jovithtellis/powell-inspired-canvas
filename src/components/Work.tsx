
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

// Creative director portfolio projects
const projects = [
  {
    title: "Clay",
    description: "Short film exploring the tactile nature of ceramic arts",
    category: "Film",
    videoSrc: "/videos/clay.mp4"
  },
  {
    title: "Monument Valley",
    description: "Commercial spot for the award-winning mobile game",
    category: "Advertisement",
    videoSrc: "/videos/monument-valley.mp4"
  },
  {
    title: "Moodnotes",
    description: "Motion graphics for mental health application",
    category: "Motion Graphics",
    videoSrc: "/videos/moodnotes.mp4"
  },
  {
    title: "Iceland in Winter",
    description: "Documentary-style travel film featuring Iceland's landscapes",
    category: "Documentary",
    videoSrc: "/videos/iceland.mp4"
  },
  {
    title: "US Road Trip",
    description: "Travel series highlighting American landscapes",
    category: "Travel Series",
    videoSrc: "/videos/roadtrip.mp4"
  },
  {
    title: "From Australia",
    description: "Brand identity animations for Australian tourism",
    category: "Branding",
    videoSrc: "/videos/australia.mp4"
  },
  {
    title: "Copenhagen",
    description: "City profile and architectural showcase",
    category: "Architecture",
    videoSrc: "/videos/copenhagen.mp4"
  },
  {
    title: "Neon Dreams",
    description: "Experimental short exploring night cityscapes",
    category: "Experimental",
    videoSrc: "/videos/neon.mp4"
  },
  {
    title: "Pulse",
    description: "Music video direction for electronic artist",
    category: "Music Video",
    videoSrc: "/videos/pulse.mp4"
  },
  {
    title: "Elements",
    description: "Visual effects showreel featuring the four elements",
    category: "VFX",
    videoSrc: "/videos/elements.mp4"
  }
];

const Work = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <>
      <AnimatedBackground active={activeProject} projects={projects} />
      
      <section id="work" className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Selected Work</h2>
            <p className="text-gray-600 max-w-xl">
              A collection of films, commercials, and motion graphics projects directed and produced over the past decade.
            </p>
          </div>
          
          <div className="mt-16 relative z-10">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`mb-8 py-8 opacity-0 animate-fadeIn border-t border-gray-100`}
                style={{ animationDelay: `${0.1 * index}s` }}
                onMouseEnter={() => setActiveProject(project.title)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <a href="#" className="block group">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">{project.category}</p>
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-3 transition-transform group-hover:translate-x-4">
                        {project.title.startsWith("→") ? project.title : `→${project.title}`}
                      </h3>
                      <p className="text-gray-600 mb-4 max-w-2xl">{project.description}</p>
                    </div>
                    <div className="mt-1 hidden md:block">
                      <span className="inline-flex items-center text-sm font-medium hover-underline group-hover:translate-x-2 transition-transform">
                        View <ArrowRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
