
import React, { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import VideoCarousel from './VideoCarousel';

// Featured project for hero section
const featuredProjects = [
  {
    title: "Director's Reel",
    videoSrc: "/videos/showreel.mp4"
  }
];

const Hero = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <>
      <AnimatedBackground active={activeProject} projects={featuredProjects} />
      
      <section className="h-screen relative">
        <div className="absolute inset-0 z-0">
          <VideoCarousel />
        </div>
        <div className="absolute bottom-20 left-0 right-0 px-4 md:px-12 z-10">
          <div className="slide-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
              Jovith Tellis
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              Creative Director & Filmmaker crafting immersive visual experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
