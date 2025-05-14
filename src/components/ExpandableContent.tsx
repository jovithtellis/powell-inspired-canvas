
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableContentProps {
  title: string;
  shortContent: React.ReactNode;
  fullContent: React.ReactNode;
}

const ExpandableContent: React.FC<ExpandableContentProps> = ({ 
  title, 
  shortContent,
  fullContent 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      
      {/* Always show the short content */}
      <div className="text-gray-300 mb-2">
        {shortContent}
      </div>
      
      {/* Conditional expanded content with animation */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="pt-2 text-gray-300">
          {fullContent}
        </div>
      </div>
      
      {/* Read More/Less Toggle Button */}
      <button 
        onClick={toggleExpand}
        className="flex items-center text-sm text-gray-400 hover:text-gray-200 mt-2 transition-colors"
      >
        {isExpanded ? (
          <>
            Read Less <ChevronUp size={16} className="ml-1" />
          </>
        ) : (
          <>
            Read More <ChevronDown size={16} className="ml-1" />
          </>
        )}
      </button>
    </div>
  );
};

export default ExpandableContent;
