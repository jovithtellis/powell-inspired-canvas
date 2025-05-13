
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageSrc: string;
  index: number;
}

const ProjectCard = ({ title, description, category, imageSrc, index }: ProjectCardProps) => {
  return (
    <div 
      className={`mb-32 opacity-0 animate-fadeIn`}
      style={{ animationDelay: `${0.2 * index}s` }}
    >
      <a href="#" className="block group">
        <div className="overflow-hidden mb-6 image-container">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-auto object-cover aspect-[16/9]"
          />
        </div>
        
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-2">{category}</p>
            <h3 className="text-2xl font-medium mb-3">{title}</h3>
            <p className="text-gray-600 mb-4 max-w-2xl">{description}</p>
          </div>
          <div className="mt-1">
            <span className="inline-flex items-center text-sm font-medium hover-underline group-hover:translate-x-2 transition-transform">
              View <ArrowRight size={16} className="ml-1" />
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
