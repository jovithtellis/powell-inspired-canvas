
import React, { useState } from 'react';
import ExpandableContent from './ExpandableContent';
import { Separator } from '@/components/ui/separator';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const About = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const isMobile = useIsMobile();
  
  const skills = [
    {
      title: "Direction",
      description: "Creative vision, actor guidance, set management"
    },
    {
      title: "Cinematography",
      description: "Lighting design, camera operation, visual composition"
    },
    {
      title: "Post-Production",
      description: "Editing, color grading, motion graphics"
    },
    {
      title: "Project Management",
      description: "Production planning, team coordination, budget control"
    },
    {
      title: "Visual Storytelling",
      description: "Narrative structure, visual metaphors, emotional pacing"
    },
    {
      title: "Sound Design",
      description: "Audio mixing, foley artistry, soundtrack selection"
    },
    {
      title: "Client Communication",
      description: "Brief interpretation, expectation management, feedback implementation"
    },
    {
      title: "Technical Direction",
      description: "Camera systems, lighting setups, specialized equipment operation"
    },
    {
      title: "Creative Strategy",
      description: "Brand alignment, target audience engagement, campaign development"
    },
    {
      title: "Team Leadership",
      description: "Crew direction, talent management, collaborative problem-solving"
    }
  ];

  const mobileSkillsToShow = 5;
  const displaySkills = isMobile && !showAllSkills ? skills.slice(0, mobileSkillsToShow) : skills;

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* About Me Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-10 slide-in-left">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {isMobile ? (
              // Mobile layout: Image first, then text
              <>
                <div className="slide-in-right opacity-0" style={{ animationDelay: '0.3s' }}>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg mb-8">
                    <img 
                      src="https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=1000" 
                      alt="Jovith Tellis" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="slide-in-left opacity-0" style={{ animationDelay: '0.1s' }}>
                  <div className="text-lg mb-6">
                    <p className="mb-4">I'm a filmmaker and creative director with over a decade of experience crafting compelling visual narratives across multiple formats.</p>
                    <p>My work spans commercial, documentary, and narrative projects, with a focus on emotive storytelling and visually striking cinematography.</p>
                  </div>
                </div>
              </>
            ) : (
              // Desktop layout: Text on left, image on right
              <>
                <div className="slide-in-left opacity-0" style={{ animationDelay: '0.1s' }}>
                  <div className="text-lg mb-6">
                    <p className="mb-4">I'm a filmmaker and creative director with over a decade of experience crafting compelling visual narratives across multiple formats.</p>
                    <p>My work spans commercial, documentary, and narrative projects, with a focus on emotive storytelling and visually striking cinematography.</p>
                  </div>
                </div>
                <div className="slide-in-right opacity-0" style={{ animationDelay: '0.3s' }}>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg mb-8">
                    <img 
                      src="https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=1000" 
                      alt="Jovith Tellis" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Elegant separator line */}
        <div className="py-8">
          <Separator className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50" />
        </div>
        
        {/* Skills and Experience Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Skills section */}
          <div className="slide-in-left opacity-0" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-medium mb-4">Skills</h3>
            <div className="grid grid-cols-1 gap-2">
              {displaySkills.map((skill, index) => (
                <div 
                  key={index}
                  className="p-3 bg-secondary bg-opacity-50 rounded-md hover:bg-opacity-70 transition-all border border-transparent hover:border-gray-600"
                >
                  <div className="font-medium">{skill.title}</div>
                  <div className="text-sm text-gray-400">{skill.description}</div>
                </div>
              ))}
            </div>
            
            {/* View more button for mobile */}
            {isMobile && skills.length > mobileSkillsToShow && (
              <button 
                onClick={() => setShowAllSkills(!showAllSkills)} 
                className="mt-4 text-gray-400 hover:text-gray-300 flex items-center"
              >
                {showAllSkills ? (
                  <>View Less <ChevronUp size={16} className="ml-1" /></>
                ) : (
                  <>View More <ChevronDown size={16} className="ml-1" /></>
                )}
              </button>
            )}
          </div>
          
          {/* Experience section */}
          <div className="slide-in-right opacity-0" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-medium mb-4">Experience</h3>
            
            <ExpandableContent 
              title="Creative Director, Immersion Studios (2019-Present)"
              shortContent={
                <p>Leading creative vision for all studio productions, managing a team of 15+ creatives, and delivering award-winning content for major brands.</p>
              }
              fullContent={
                <>
                  <p className="mb-2">As the Creative Director at Immersion Studios, I oversee all aspects of our creative output, from concept development to final delivery. I've established our unique visual style that has helped us win multiple industry awards.</p>
                  <p className="mb-2">My responsibilities include:</p>
                  <ul className="list-disc pl-5 mb-2">
                    <li>Developing creative concepts and pitches for major clients</li>
                    <li>Leading a multi-disciplinary team of designers, editors, and producers</li>
                    <li>Directing on-set productions for commercial and branded content</li>
                    <li>Establishing quality control standards across all studio outputs</li>
                  </ul>
                  <p>Notable clients include Nike, Apple, and Netflix.</p>
                </>
              }
            />
            
            <ExpandableContent 
              title="Senior Director, Visionary Films (2015-2019)"
              shortContent={
                <p>Directed commercial and documentary projects for international clients, with work featured at Cannes and Sundance film festivals.</p>
              }
              fullContent={
                <>
                  <p className="mb-2">At Visionary Films, I directed over 50 commercial productions and 3 documentary features that screened at major international film festivals.</p>
                  <p className="mb-2">Key achievements:</p>
                  <ul className="list-disc pl-5 mb-2">
                    <li>Won Gold at Cannes Lions for Toyota "Beyond Limits" campaign</li>
                    <li>"Urban Rhythms" documentary selected for Sundance Film Festival</li>
                    <li>Led the studio's transition to 4K production workflows</li>
                    <li>Mentored junior directors and cinematographers</li>
                  </ul>
                  <p>During this period I developed my signature visual style combining naturalistic lighting with dynamic camera movement.</p>
                </>
              }
            />
            
            <ExpandableContent 
              title="Cinematographer, Freelance (2012-2015)"
              shortContent={
                <p>Shot music videos, short films, and commercials, developing a strong visual style that led to collaborations with major directors.</p>
              }
              fullContent={
                <>
                  <p className="mb-2">I built my early career as a freelance cinematographer working across various formats while developing my technical skills and artistic voice.</p>
                  <p className="mb-2">Notable projects:</p>
                  <ul className="list-disc pl-5 mb-2">
                    <li>Shot 20+ music videos for Sony Music and Universal artists</li>
                    <li>Cinematographer for award-winning short film "Echoes"</li>
                    <li>Second unit DP on feature film "The Distant Shore"</li>
                    <li>Specialized in low-light and naturalistic cinematography</li>
                  </ul>
                  <p>This period was foundational in developing my eye for composition and lighting that continues to influence my directorial work.</p>
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
