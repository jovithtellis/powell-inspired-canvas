
import React, { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import { ChevronDown, Play } from 'lucide-react';
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

        {/* Video placeholder overlay */}
        <div className="absolute inset-0 z-5 flex items-center justify-center">
          <div className="w-64 h-36 bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center group hover:bg-black/60 transition-all duration-300 cursor-pointer">
            <div className="text-center">
              <Play className="w-8 h-8 text-white/80 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-white/80 text-sm font-medium">Director's Reel</p>
              <p className="text-white/60 text-xs mt-1">Click to play</p>
            </div>
          </div>
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
