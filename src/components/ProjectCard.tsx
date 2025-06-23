
import React from 'react';
import { ArrowRight } from 'lucide-react';

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
            <p className="text-sm text-gray-500 mb-2">{category}</p>
            <h3 className="text-3xl font-medium mb-3 transition-transform group-hover:translate-x-2 text-white">
              {title.startsWith("→") ? title : `→${title}`}
            </h3>
            <p className="text-gray-600 mb-4 max-w-2xl">{description}</p>
          </div>
          <div className="mt-1">
            <span className="inline-flex items-center text-sm font-medium hover-underline group-hover:translate-x-2 transition-transform text-white">
              View <ArrowRight size={16} className="ml-1" />
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
