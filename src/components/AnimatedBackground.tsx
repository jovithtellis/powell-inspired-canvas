
import React from 'react';

interface AnimatedBackgroundProps {
  active: string | null;
  projects: {
    title: string;
    videoSrc: string;
  }[];
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ active, projects }) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {projects.map((project) => (
        <div
          key={project.title}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            active === project.title ? 'opacity-20' : 'opacity-0'
          }`}
        >
          {active === project.title && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              src={project.videoSrc}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
