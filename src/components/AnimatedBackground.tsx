
import React, { useState, useEffect } from 'react';

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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (active) {
      // Reset loaded state when active project changes
      setIsLoaded(false);
    }
  }, [active]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {projects.map((project) => (
        <div
          key={project.title}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
            active === project.title ? 'opacity-80 dark:opacity-60' : 'opacity-0'
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
                  className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  src={project.videoSrc}
                  onLoadedData={handleLoad}
                />
              )}
              {!project.videoSrc && project.imageSrc && (
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={handleLoad}
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
