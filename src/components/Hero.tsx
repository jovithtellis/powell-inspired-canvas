
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
      </section>
    </>
  );
};

export default Hero;
