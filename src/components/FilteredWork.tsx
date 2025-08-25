import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Play, X } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Button } from '@/components/ui/button';
import YouTubeEmbed from './YouTubeEmbed';

// Extended set of projects with additional metadata
const allProjects = [
  { title: "NuSummit Brand Video", description: "Indigo Awards 2025 – Winner Video. Award-winning brand film celebrating NSEIT’s transformation into NuSummit. This high-impact piece marked the rebrand launch, earning recognition at the 2025 Indigo Awards for its bold creative direction, dynamic visuals, and clear communication of the brand’s evolved identity.", category: "Brand videos", youtubeUrl: "https://youtu.be/slcoyadmiPY", imageSrc: "https://drive.google.com/uc?export=view&id=1WKMjJGvXZmv5jSLwIaxZDmnqtbr3KZyd" },
  { title: "NuSummit Website Revamp", description: "A transformation video unveiling the shift from NSEIT’s legacy site to NuSummit’s sleek, modern digital presence. The film highlights the new website’s refined design, intuitive navigation, and feature-rich experience, symbolizing the brand’s evolution and forward-looking identity.", category: "SaaS explainer videos", youtubeUrl: "https://youtu.be/LzuSBgt_9Jw", imageSrc: "https://youtu.be/LzuSBgt_9Jw" },
  { title: "Ken42 Awards", description: "Ken42 elevates ICT Academy Chennai’s Awards Ceremony for newcomers and startups in this dynamic promo video-spotlighting innovation, recognition, and community energy.", category: "Motion Graphics", youtubeUrl: "https://youtu.be/Deo2SpRCIeY?si=UCoRfhnfc4gmYSWd", imageSrc: "https://raw.githubusercontent.com/jovithtellis/portfolio-thumbnails/main/Ken%2042%20awards.png" },
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
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const toggleRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  
  const filteredProjects = filter === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);
    
  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = filteredProjects.length > visibleProjects;
  
  // Reset visible projects count when filter changes
  useEffect(() => {
    setVisibleProjects(6);
    setExpandedProject(null); // Close any expanded project when filter changes
    
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
    setVisibleProjects(prev => Math.min(prev + 6, filteredProjects.length));
  };

  const toggleProjectExpansion = (projectTitle: string) => {
    setExpandedProject(expandedProject === projectTitle ? null : projectTitle);
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

  return (
    <section id="work" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-white slide-in-left opacity-0">Selected Work</h2>
          
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
                  className="whitespace-nowrap border-b-2 border-transparent data-[state=on]:border-primary rounded-none px-3 py-2 text-white"
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
              className="mb-12 py-8 opacity-0 slide-in-left border-t border-gray-800 relative group"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Updated Layout for Inline Video */}
              <div className="cursor-pointer">
                {expandedProject === project.title ? (
                  /* Expanded Video View */
                  <div className="relative">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      {(project as any).youtubeUrl ? (
                        <YouTubeEmbed 
                          url={(project as any).youtubeUrl} 
                          title={project.title}
                          className="w-full"
                        />
                      ) : (
                        <div className="aspect-video">
                          <video 
                            controls 
                            autoPlay
                            className="w-full h-full object-cover"
                            poster={project.imageSrc}
                          >
                            <source src={project.videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      )}
                    </div>
                    
                    {/* Close button */}
                    <button
                      onClick={() => setExpandedProject(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-all duration-300 z-10"
                    >
                      <X size={20} className="text-white" />
                    </button>
                  </div>
                ) : (
                  /* Thumbnail View */
                  <div 
                    className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8"
                    onClick={() => toggleProjectExpansion(project.title)}
                  >
                    {/* Thumbnail Section */}
                    <div className="lg:col-span-3 order-1 lg:order-1">
                      <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-700 group-hover:shadow-xl transition-all duration-300">
                        <img 
                          src={project.imageSrc} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        
                        {/* Enhanced Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all duration-300 group-hover:bg-black/30">
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-black/80">
                            <Play 
                              size={24} 
                              className="text-white ml-1 transition-all duration-300 group-hover:scale-110" 
                              fill="white"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Text Content Section */}
                    <div className="lg:col-span-2 flex flex-col justify-center order-2 lg:order-2">
                      <p className="text-sm text-gray-400 mb-2">{project.category}</p>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-3 text-white">
                        <span className="text-gray-500 mr-2">→</span>
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">{project.description}</p>
                      
                      {/* Mobile/Tablet expand indicator */}
                      <div className="mt-4 lg:hidden">
                        <span className="inline-flex items-center text-sm font-medium text-white/60">
                          View <Play size={16} className="ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* View More Button */}
          {hasMoreProjects && (
            <div className="flex justify-center mt-16 slide-in-up opacity-0" ref={loadMoreRef} style={{ animationDelay: '0.5s' }}>
              <Button 
                variant="outline"
                size="lg"
                onClick={loadMore}
                className="border-gray-700 text-white hover:bg-gray-900/50 transition-colors"
              >
                View More Projects
                <ChevronDown size={16} className="ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FilteredWork;
