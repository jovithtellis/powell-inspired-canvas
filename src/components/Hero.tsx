
import React, { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

// Featured project for hero section
const featuredProjects = [
  {
    title: "Director's Reel",
    videoSrc: "/videos/showreel.mp4"
  }
];

const Hero = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AnimatedBackground active={activeProject} projects={featuredProjects} />
      
      <section className={`${isMobile ? 'h-[100svh]' : 'h-screen'} relative`}>
        {/* Single video background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/showreel.mp4" type="video/mp4" />
            {/* Fallback image */}
            <img 
              src="https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?q=80&w=1920&h=1080" 
              alt="Hero background" 
              className="w-full h-full object-cover"
            />
          </video>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center animate-bounce">
          <button 
            onClick={scrollToWork}
            className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center border border-white/30"
            aria-label="Scroll down"
          >
            <ChevronDown className="text-white/80" size={20} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
