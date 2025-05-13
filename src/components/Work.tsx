
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Digital Experience for Artisan Ceramics",
    description: "A complete brand identity and e-commerce experience for a boutique ceramic studio.",
    category: "Branding & Development",
    imageSrc: "https://images.unsplash.com/photo-1565193298595-2a841844b346?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNlcmFtaWNzfGVufDB8MHwwfHx8MA%3D%3D"
  },
  {
    title: "Modern Interior Design Portfolio",
    description: "A minimalist website showcasing the work of an award-winning interior design studio.",
    category: "Web Design & Development",
    imageSrc: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHwwfDB8fHww"
  },
  {
    title: "Photography Exhibition Platform",
    description: "An interactive platform for a contemporary photography exhibition with virtual gallery tours.",
    category: "UI Design & Development",
    imageSrc: "https://images.unsplash.com/photo-1621600411688-4be93c2c1208?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FsbGVyeXxlbnwwfDB8MHx8fDA%3D"
  }
];

const Work = () => {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Selected Work</h2>
          <p className="text-gray-600 max-w-xl">A curated selection of projects I've worked on across branding, product design, and development.</p>
        </div>
        
        <div className="mt-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              category={project.category}
              imageSrc={project.imageSrc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
