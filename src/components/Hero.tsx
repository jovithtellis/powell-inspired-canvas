
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center section-padding relative">
      <div className="max-w-4xl animate-fadeIn opacity-0" style={{ animationDelay: '0.3s' }}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight mb-6">
          I craft digital experiences that create impact and delight
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
          I'm a designer and developer who creates purposeful and elegant solutions for brands & businesses. 
          Currently based in New York.
        </p>
        <button 
          onClick={scrollToWork}
          className="flex items-center group"
        >
          <span className="text-lg font-medium hover-underline mr-2">View my work</span>
          <ArrowDown size={20} className="transition-transform group-hover:translate-y-1" />
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="hidden md:block absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-fadeInSlow opacity-0">
        <div className="flex flex-col items-center">
          <div className="h-12 w-[1px] bg-gray-300 mb-2"></div>
          <span className="text-sm text-gray-500">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
