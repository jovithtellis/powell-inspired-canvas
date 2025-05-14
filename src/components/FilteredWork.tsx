
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import AnimatedBackground from './AnimatedBackground';
import { ToggleGroup, ToggleGroupItem, AnimatedToggleGroup } from '@/components/ui/toggle-group';
import { useIsMobile } from '@/hooks/use-mobile';

// Sample projects
const projects = [
  {
    id: 1,
    title: "Urban Rhythms",
    category: "Documentary",
    description: "An exploration of underground music scenes across major global cities",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1920&h=1080",
    filters: ["documentary", "featured"]
  },
  {
    id: 2,
    title: "Beyond Limits",
    category: "Commercial",
    description: "A brand campaign for Toyota highlighting human potential",
    image: "https://images.unsplash.com/photo-1575327652584-615c3c4edc01?q=80&w=1920&h=1080",
    filters: ["commercial", "featured", "brand"]
  },
  {
    id: 3,
    title: "Echoes",
    category: "Short Film",
    description: "Award-winning narrative short about memory and perception",
    image: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?q=80&w=1920&h=1080",
    filters: ["narrative", "featured"]
  },
  {
    id: 4,
    title: "Digital Frontiers",
    category: "SaaS Explainer",
    description: "Visual explanation of a complex AI platform for enterprise clients",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1920&h=1080",
    filters: ["explainer", "tech"]
  },
  {
    id: 5,
    title: "The Artisan's Journey",
    category: "Documentary",
    description: "Following the lives of traditional craftspeople in a modern world",
    image: "https://images.unsplash.com/photo-1452802447250-470a88ac82bc?q=80&w=1920&h=1080",
    filters: ["documentary"]
  },
  {
    id: 6,
    title: "Pulse",
    category: "Brand Campaign",
    description: "Athletic wear commercial featuring olympic athletes",
    image: "https://images.unsplash.com/photo-1551749006-7faf602a84d3?q=80&w=1920&h=1080",
    filters: ["commercial", "brand"]
  },
  {
    id: 7,
    title: "Cloud Connect",
    category: "SaaS Explainer",
    description: "Explaining cloud infrastructure for a leading tech company",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&h=1080",
    filters: ["explainer", "tech"]
  },
  {
    id: 8,
    title: "Tomorrow's Promise",
    category: "Non-profit",
    description: "Fundraising video for children's education initiative",
    image: "https://images.unsplash.com/photo-1521986329282-0436c1f1e212?q=80&w=1920&h=1080",
    filters: ["commercial", "nonprofit"]
  }
];

// Filter categories
const filters = [
  { value: "all", label: "All" },
  { value: "featured", label: "Featured" },
  { value: "brand", label: "Brand videos" },
  { value: "explainer", label: "SaaS explainer videos" },
  { value: "documentary", label: "Documentaries" },
  { value: "narrative", label: "Narrative films" }
];

const FilteredWork = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.filters.includes(activeFilter));

  return (
    <section id="work" className="section-padding relative z-10">
      <AnimatedBackground 
        active={hoveredProject} 
        projects={projects.map(p => ({ title: p.title, imageSrc: p.image }))} 
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-8 slide-in-left">Featured Work</h2>
          
          <div className={`mb-8 slide-in-right ${isMobile ? 'overflow-x-scroll pb-4 -mx-4 px-4' : ''}`}
               style={{ animationDelay: '0.2s' }}>
            <AnimatedToggleGroup
              type="single"
              defaultValue="all"
              value={activeFilter}
              onValueChange={(value) => value && setActiveFilter(value)}
              className={`inline-flex ${isMobile ? 'w-max' : 'w-auto'}`}
            >
              {filters.map((filter) => (
                <ToggleGroupItem 
                  key={filter.value} 
                  value={filter.value}
                  className="px-4 py-2"
                >
                  {filter.label}
                </ToggleGroupItem>
              ))}
            </AnimatedToggleGroup>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="slide-in-up opacity-0"
              style={{ animationDelay: `${0.1 + project.id * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <ProjectCard
                title={project.title}
                category={project.category}
                description={project.description}
                imageSrc={project.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilteredWork;
