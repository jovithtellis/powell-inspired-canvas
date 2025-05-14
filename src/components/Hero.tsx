
import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import VideoCarousel from './VideoCarousel';
import { ChevronDown } from 'lucide-react';

// Featured project for hero section
const featuredProjects = [
  {
    title: "Director's Reel",
    videoSrc: "/videos/showreel.mp4"
  }
];

const Hero = () => {
  const [activeProject, setActiveProject] = React.useState<string | null>(null);
  
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AnimatedBackground active={activeProject} projects={featuredProjects} />
      
      <section className="h-screen md:h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <VideoCarousel />
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10 animate-bounce">
          <button 
            onClick={scrollToWork}
            className="p-2 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-all"
            aria-label="Scroll down"
          >
            <ChevronDown className="text-white" size={24} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
