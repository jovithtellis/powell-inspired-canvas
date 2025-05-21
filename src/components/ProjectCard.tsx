
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageSrc?: string;
  videoSrc?: string;
  index: number;
  onHover?: (title: string) => void;
  onLeave?: () => void;
}

const ProjectCard = ({ 
  title, 
  description, 
  category, 
  imageSrc, 
  videoSrc,
  index,
  onHover,
  onLeave 
}: ProjectCardProps) => {
  const { theme } = useTheme();
  
  const titleClass = theme === 'light' ? 'text-black' : 'text-inherit';
  const descriptionClass = theme === 'light' ? 'text-gray-800' : 'text-gray-600';
  const categoryClass = theme === 'light' ? 'text-gray-600' : 'text-gray-500';
  
  return (
    <div 
      className={`mb-12 opacity-0 animate-fadeIn`}
      style={{ animationDelay: `${0.2 * index}s` }}
      onMouseEnter={() => onHover && onHover(title)}
      onMouseLeave={() => onLeave && onLeave()}
    >
      <a href="#" className="block group">
        {imageSrc && (
          <div className="overflow-hidden mb-6 image-container">
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-auto object-cover aspect-[16/9]"
            />
          </div>
        )}
        
        <div className="flex items-start justify-between">
          <div>
            <p className={`text-sm ${categoryClass} mb-2`}>{category}</p>
            <h3 className={`text-3xl font-medium mb-3 transition-transform group-hover:translate-x-2 ${titleClass}`}>
              {title.startsWith("→") ? title : `→${title}`}
            </h3>
            <p className={`${descriptionClass} mb-4 max-w-2xl`}>{description}</p>
          </div>
          <div className="mt-1">
            <span className={`inline-flex items-center text-sm font-medium hover-underline group-hover:translate-x-2 transition-transform ${titleClass}`}>
              View <ArrowRight size={16} className="ml-1" />
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
