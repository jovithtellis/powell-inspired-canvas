import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Play, X } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Button } from '@/components/ui/button';
import YouTubeEmbed from './YouTubeEmbed';

// Extended set of projects with additional metadata
const allProjects = [
  { title: "NuSummit", description: "Indigo Awards 2025 – Winner Video. Award-winning brand film celebrating NSEIT’s transformation into NuSummit. This high-impact piece marked the rebrand launch, earning recognition at the 2025 Indigo Awards for its bold creative direction, dynamic visuals, and clear communication of the brand’s evolved identity.", category: "Brand videos", youtubeUrl: "https://youtu.be/slcoyadmiPY", imageSrc: "https://drive.google.com/uc?export=view&id=1WKMjJGvXZmv5jSLwIaxZDmnqtbr3KZyd" },
  { title: "Walmart", description: "Walmart’s 'IAM' SaaS explainer videos blend motion graphics with realistic visuals to simplify complex concepts and showcase the power of SaaS solutions.", category: "SaaS explainer videos", youtubeUrl: "https://youtu.be/QqDtivzDB6c?si=hqirBcDpoLJ143co", imageSrc: "https://raw.githubusercontent.com/jovithtellis/portfolio-thumbnails/main/Walmart%20iam.png" },
  { title: "NuSummit Website", description: "A transformation video unveiling the shift from NSEIT’s legacy site to NuSummit’s sleek, modern digital presence. The film highlights the new website’s refined design, intuitive navigation, and feature-rich experience, symbolizing the brand’s evolution and forward-looking identity.", category: "SaaS explainer videos", youtubeUrl: "https://youtu.be/LzuSBgt_9Jw", imageSrc: "https://youtu.be/LzuSBgt_9Jw" },
  { title: "Ken42", description: "Ken42 elevates ICT Academy Chennai’s Awards Ceremony for newcomers and startups in this dynamic promo video-spotlighting innovation, recognition, and community energy.", category: "Motion Graphics", youtubeUrl: "https://youtu.be/Deo2SpRCIeY?si=UCoRfhnfc4gmYSWd", imageSrc: "https://raw.githubusercontent.com/jovithtellis/portfolio-thumbnails/main/Ken%2042%20awards.png" },
  { title: "Climaty.AI", description: "Climaty AI’s motion-graphics investor-deck video illuminates how its Agentic AI-driven CliMarTech platform measures, optimizes, and offsets marketers’ carbon footprints in real time redefining sustainable marketing performance.", category: "Motion Graphics", youtubeUrl: "https://youtu.be/r0ar-iuuQcY", imageSrc: "https://raw.githubusercontent.com/jovithtellis/portfolio-thumbnails/main/Climaty%20investor%20deck.png" },
  { title: "Realm", description: "Experience REALM where luxury real estate meets innovation, showcased through elegant mock-up animation.", category: "Motion Graphics", youtubeUrl: "https://youtu.be/CPVhnsgJjGA", imageSrc: "https://raw.githubusercontent.com/jovithtellis/portfolio-thumbnails/main/Realm.png" },
  { title: "Brillio", description: "Brillio’s About Us video combines AI-driven visuals and bold typography to showcase its digital innovation and transformative capabilities.", category: "Brand videos", youtubeUrl: "https://youtu.be/rMx6-WZ3kK8?si=0SMcJAVcJa2jwhdI", imageSrc: "https://raw.githubusercontent.com/jovithtellis/portfolio-thumbnails/main/Brillio%20about%20us.png" },
  { title: "Optimile", description: "Optimile’s product walkthrough video blends smooth 2D animation with AI-enhanced visuals to showcase how its intelligent platform transforms freight logistics with real-time tracking, optimized routing, and seamless integration.", category: "2D animation", youtubeUrl: "https://youtu.be/hd1Ooub_LJA?si=L-zllqtqJMyU9EdI", imageSrc: "https://raw.githubusercontent.com/jovithtellis/portfolio-thumbnails/main/Optimile.png" },
  { title: "Bosch Smart Digital", description: "Bosch’s smarter digital video, fully AI-generated with the latest 2024 tools, highlights next-gen innovation and intelligent solutions with sleek, future-ready storytelling.", category: "AI videos", youtubeUrl: "https://youtu.be/Phg48SAH1_A?si=1GiP1-Q8k47ZF1RN", imageSrc: "https://raw.githubusercontent.com/jovithtellis/portfolio-thumbnails/main/Bosch%20AI%20video.png" },
  { title: "TechM Sentindra", description: "Tech Mahindra’s Sentindra walkthrough unveils its next-gen, AI-enhanced virtual SOC built on Microsoft Sentinel to deliver unified global threat detection, orchestration, and robust security insights.", category: "SaaS explainer videos", youtubeUrl: "https://youtu.be/19wGKWYLslw?si=M1076CGGLPYiztN9", imageSrc: "https://raw.githubusercontent.com/jovithtellis/portfolio-thumbnails/main/TechM%20sentindra.png" },
  { title: "Digitate", description: "Digitate’s brand video uses high-impact SFX, trailer-style visuals, and AI-driven design to spotlight ignio™ and its enterprise-scale autonomous automation capabilities.", category: "Brand videos", youtubeUrl: "https://youtu.be/8-zs1MUfrnE?si=fAF8Cmgu5F4-bb6c", imageSrc: "https://raw.githubusercontent.com/jovithtellis/portfolio-thumbnails/main/Digitate%20brand%20video.png" },
  { title: "Ali Abdaal", description: "This demo video for Ali Abdaal showcases a journalling workflow through sleek animations and engaging storytelling, highlighting the power of reflective writing for productivity and clarity.", category: "Social Media videos", youtubeUrl: "https://youtu.be/YSjOV32ZsOQ?si=dxRFOVyro9k7AGe3", imageSrc: "https://raw.githubusercontent.com/jovithtellis/portfolio-thumbnails/main/Ali%20Abdaal.png" },
  { title: "Internet Monster", description: "Skytrip’s Internet Monster brings 2D animation and music together in a vibrant, surreal video that fuses bold visuals with an electrifying soundscape.", category: "Music Videos", youtubeUrl: "https://youtu.be/jOYaRP9UCdQ?si=sOaeeVui7U4VMK16", imageSrc: "https://raw.githubusercontent.com/jovithtellis/portfolio-thumbnails/main/Internet%20monster.png" },
  { title: "Gelo re Gelo", description: "Gelo Re Gelo” by Godgodo, directed by Jovith Tellis, is a vibrant in-house production that blends local textures and cinematic energy to bring the song’s coastal vibe to life.", category: "Music Videos", youtubeUrl: "https://youtu.be/EcRRVC9K5c8?si=g19ehMl-u_YC-c90", imageSrc: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1000" },
  { title: "Airo", description: "Airo’s brand video combines sleek 3D design and dynamic animation to showcase the brand’s innovation and vision with a modern cinematic touch.", category: "Brand videos", youtubeUrl: "https://youtu.be/CUGA17iEqFk?si=NoQwfSVISbjzU4zb", imageSrc: "https://raw.githubusercontent.com/jovithtellis/portfolio-thumbnails/main/Airo%20brand%20video.png" },
  { title: "Immersive Beat", description: "Visual album for indie band", category: "Music Videos", youtubeUrl: "/videos/album.mp4", imageSrc: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000" },
  { title: "Illustrated Journey", description: "Hand-drawn animation series", category: "2D animation", youtubeUrl: "/videos/handdrawn.mp4", imageSrc: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?q=80&w=1000" },
  { title: "Social Shorts", description: "Vertical video campaign for fashion brand", category: "Social Media videos", youtubeUrl: "/videos/social.mp4", imageSrc: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1000" },
  { title: "AI Vision", description: "Futuristic AI-generated art film", category: "AI videos", youtubeUrl: "/videos/aivision.mp4", imageSrc: "https://images.unsplash.com/photo-1679958157996-81deac1a9329?q=80&w=1000" },
  { title: "Cloud Platform", description: "Tech explainer for cloud computing service", category: "SaaS explainer videos", youtubeUrl: "/videos/cloud.mp4", imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000" },
  { title: "Motion Theory", description: "Educational motion graphics series", category: "Motion Graphics", youtubeUrl: "/videos/education.mp4", imageSrc: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000" }
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
