
import React from 'react';

interface Project {
  title: string;
  videoSrc?: string;
  imageSrc?: string;
}

interface AnimatedBackgroundProps {
  active: string | null;
  projects: Project[];
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ active, projects }) => {
  const activeProject = projects.find(p => p.title === active);

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
            <>
              {project.videoSrc && (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  src={project.videoSrc}
                />
              )}
              {!project.videoSrc && project.imageSrc && (
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
