
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import AnimatedBackground from './AnimatedBackground';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

// Extended set of projects with additional metadata
const allProjects = [
  { title: "Clay", description: "Short film exploring the tactile nature of ceramic arts", category: "Brand videos", videoSrc: "/videos/clay.mp4", imageSrc: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1000" },
  { title: "Monument Valley", description: "Commercial spot for the award-winning mobile game", category: "SaaS explainer videos", videoSrc: "/videos/monument-valley.mp4", imageSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000" },
  { title: "Moodnotes", description: "Motion graphics for mental health application", category: "Motion Graphics", videoSrc: "/videos/moodnotes.mp4", imageSrc: "https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?q=80&w=1000" },
  { title: "Iceland in Winter", description: "Documentary-style travel film featuring Iceland's landscapes", category: "Brand videos", videoSrc: "/videos/iceland.mp4", imageSrc: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=1000" },
  { title: "US Road Trip", description: "Travel series highlighting American landscapes", category: "Social Media videos", videoSrc: "/videos/roadtrip.mp4", imageSrc: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000" },
  { title: "From Australia", description: "Brand identity animations for Australian tourism", category: "Brand videos", videoSrc: "/videos/australia.mp4", imageSrc: "https://images.unsplash.com/photo-1493375366763-3ed5e0e6d8ec?q=80&w=1000" },
  { title: "Copenhagen", description: "City profile and architectural showcase", category: "Brand videos", videoSrc: "/videos/copenhagen.mp4", imageSrc: "https://images.unsplash.com/photo-1552560880-2482cef14240?q=80&w=1000" },
  { title: "Neon Dreams", description: "Experimental short exploring night cityscapes", category: "Music Videos", videoSrc: "/videos/neon.mp4", imageSrc: "https://images.unsplash.com/photo-1545481571-0a6a423c0ed3?q=80&w=1000" },
  { title: "Pulse", description: "Music video direction for electronic artist", category: "Music Videos", videoSrc: "/videos/pulse.mp4", imageSrc: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000" },
  { title: "Elements", description: "Visual effects showreel featuring the four elements", category: "Motion Graphics", videoSrc: "/videos/elements.mp4", imageSrc: "https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?q=80&w=1000" },
  { title: "Digital Dreams", description: "VFX showcase for tech conference", category: "Motion Graphics", videoSrc: "/videos/tech.mp4", imageSrc: "https://images.unsplash.com/photo-1593508195009-a7ac0e510a4d?q=80&w=1000" },
  { title: "Nexus Flow", description: "AI-generated visual narrative", category: "AI videos", videoSrc: "/videos/ai.mp4", imageSrc: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1000" },
  { title: "Animate Everything", description: "2D animation explainer series", category: "2D animation", videoSrc: "/videos/2d.mp4", imageSrc: "https://images.unsplash.com/photo-1633976976526-a10a19880d9a?q=80&w=1000" },
  { title: "SAAS Launch", description: "Product demonstration for software startup", category: "SaaS explainer videos", videoSrc: "/videos/saas.mp4", imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000" },
  { title: "Immersive Beat", description: "Visual album for indie band", category: "Music Videos", videoSrc: "/videos/album.mp4", imageSrc: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000" },
  { title: "Illustrated Journey", description: "Hand-drawn animation series", category: "2D animation", videoSrc: "/videos/handdrawn.mp4", imageSrc: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?q=80&w=1000" },
  { title: "Social Shorts", description: "Vertical video campaign for fashion brand", category: "Social Media videos", videoSrc: "/videos/social.mp4", imageSrc: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1000" },
  { title: "AI Vision", description: "Futuristic AI-generated art film", category: "AI videos", videoSrc: "/videos/aivision.mp4", imageSrc: "https://images.unsplash.com/photo-1679958157996-81deac1a9329?q=80&w=1000" },
  { title: "Cloud Platform", description: "Tech explainer for cloud computing service", category: "SaaS explainer videos", videoSrc: "/videos/cloud.mp4", imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000" },
  { title: "Motion Theory", description: "Educational motion graphics series", category: "Motion Graphics", videoSrc: "/videos/education.mp4", imageSrc: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000" }
];

// Filter categories
const categories = [
  "All",
  "Brand videos",
  "SaaS explainer videos",
  "Motion Graphics",
  "2D animation",
  "AI videos",
  "Music Videos",
  "Social Media videos"
];

const FilteredWork = () => {
  const [filter, setFilter] = useState("All");
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [visibleProjects, setVisibleProjects] = useState(10);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const toggleRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  const filteredProjects = filter === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);
    
  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = filteredProjects.length > visibleProjects;
  
  // Reset visible projects count when filter changes
  useEffect(() => {
    setVisibleProjects(10);
    
    // Find the active toggle and update indicator position
    const activeIndex = categories.findIndex(cat => cat === filter);
    if (activeIndex >= 0 && toggleRefs.current[activeIndex]) {
      const activeToggle = toggleRefs.current[activeIndex];
      if (activeToggle) {
        setIndicator({
          left: activeToggle.offsetLeft,
          width: activeToggle.offsetWidth,
        });
      }
    }
  }, [filter]);

  // Initialize toggle refs
  useEffect(() => {
    toggleRefs.current = toggleRefs.current.slice(0, categories.length);
    
    // Set initial indicator position
    const activeIndex = categories.findIndex(cat => cat === filter);
    if (activeIndex >= 0 && toggleRefs.current[activeIndex]) {
      const activeToggle = toggleRefs.current[activeIndex];
      if (activeToggle) {
        setIndicator({
          left: activeToggle.offsetLeft,
          width: activeToggle.offsetWidth,
        });
      }
    }
  }, []);
  
  const loadMore = () => {
    setVisibleProjects(prev => prev + 10);
  };

  // Animation observer for fade-in items
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('fade-in-element')) {
              entry.target.classList.add('animate-fadeIn');
            } else if (entry.target.classList.contains('slide-in-left') || 
                       entry.target.classList.contains('slide-in-right') ||
                       entry.target.classList.contains('slide-in-up') ||
                       entry.target.classList.contains('slide-in-down')) {
              entry.target.classList.add('animate-slideIn');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-element, .slide-in-left, .slide-in-right, .slide-in-up, .slide-in-down').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.fade-in-element, .slide-in-left, .slide-in-right, .slide-in-up, .slide-in-down').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [displayedProjects]);

  const titleTextClass = theme === 'light' ? 'text-black' : 'text-white';
  const descriptionTextClass = theme === 'light' ? 'text-gray-800' : 'text-gray-300';
  const categoryTextClass = theme === 'light' ? 'text-gray-600' : 'text-gray-400';

  return (
    <>
      <AnimatedBackground 
        active={activeProject} 
        projects={allProjects} 
      />
      
      <section id="work" className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className={`text-3xl md:text-4xl font-medium mb-6 ${titleTextClass} slide-in-left opacity-0`}>Selected Work</h2>
            
            {/* Filter Toggle Group */}
            <div className="overflow-x-auto pb-4 slide-in-right opacity-0 relative" style={{ animationDelay: '0.2s' }}>
              {/* Animated selection indicator */}
              <div 
                className="absolute bottom-0 h-0.5 bg-primary transition-all duration-300 ease-out"
                style={{ 
                  left: `${indicator.left}px`, 
                  width: `${indicator.width}px` 
                }}
              />
              
              <ToggleGroup 
                type="single" 
                value={filter} 
                onValueChange={(value) => value && setFilter(value)}
                className="inline-flex flex-nowrap space-x-2"
              >
                {categories.map((category, idx) => (
                  <ToggleGroupItem 
                    key={category} 
                    value={category}
                    className={`whitespace-nowrap border-b-2 border-transparent data-[state=on]:border-primary rounded-none px-3 py-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}
                    ref={el => toggleRefs.current[idx] = el}
                    onFocus={() => {
                      if (toggleRefs.current[idx]) {
                        const toggle = toggleRefs.current[idx];
                        if (toggle) {
                          setIndicator({
                            left: toggle.offsetLeft,
                            width: toggle.offsetWidth,
                          });
                        }
                      }
                    }}
                  >
                    {category}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </div>
          
          <div className="mt-16 relative z-10">
            {displayedProjects.map((project, index) => (
              <div 
                key={project.title}
                className={`mb-8 py-8 opacity-0 slide-in-left border-t ${theme === 'light' ? 'border-gray-300' : 'border-gray-800'} relative group`}
                style={{ animationDelay: `${0.1 * index}s` }}
                onMouseEnter={() => {
                  setActiveProject(project.title);
                  setHoveredProject(project.title);
                }}
                onMouseLeave={() => {
                  setActiveProject(null);
                  setHoveredProject(null);
                }}
              >
                <a href="#" className="block">
                  <div className="flex items-start justify-between relative z-10">
                    <div>
                      <p className={`text-sm ${categoryTextClass} mb-2`}>{project.category}</p>
                      <h3 className={`text-4xl md:text-5xl lg:text-6xl font-medium mb-3 transition-transform group-hover:translate-x-4 ${titleTextClass}`}>
                        {project.title.startsWith("→") ? project.title : `→${project.title}`}
                      </h3>
                      <p className={`${descriptionTextClass} mb-4 max-w-2xl`}>{project.description}</p>
                    </div>
                    <div className="mt-1 hidden md:block">
                      <span className={`inline-flex items-center text-sm font-medium hover-underline group-hover:translate-x-2 transition-transform ${titleTextClass}`}>
                        View <ArrowRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
            
            {/* View More Button */}
            {hasMoreProjects && (
              <div className="flex justify-center mt-16 slide-in-up opacity-0" ref={loadMoreRef} style={{ animationDelay: '0.5s' }}>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={loadMore}
                  className={`border-gray-700 ${theme === 'light' ? 'text-black' : 'text-white'} group overflow-hidden relative`}
                >
                  <span className="relative z-10">View More</span>
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 overflow-hidden">
                    <div className="w-full h-full bg-cover animate-pulse" 
                      style={{ backgroundImage: 'url(https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp)' }}>
                    </div>
                  </div>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default FilteredWork;
