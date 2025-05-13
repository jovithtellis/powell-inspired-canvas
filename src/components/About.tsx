
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* About and Artist Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {/* About Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 dark:text-white">About</h2>
            <div className="prose max-w-none dark:prose-invert">
              <p className="text-lg mb-4 dark:text-gray-300">
                I'm a designer and developer with over 8 years of experience creating digital products and experiences. 
                I specialize in translating complex ideas into intuitive user experiences.
              </p>
              <p className="text-lg mb-4 dark:text-gray-300">
                My approach is grounded in understanding user needs and business goals to deliver thoughtful 
                and effective solutions. I love working at the intersection of design and technology.
              </p>
              <p className="text-lg mb-8 dark:text-gray-300">
                When I'm not designing or coding, you can find me exploring new hiking trails, experimenting with 
                cooking techniques, or reading about art history and architecture.
              </p>
            </div>
          </div>
          
          {/* Artist Image */}
          <div className="flex items-center justify-center">
            <div className="aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000" 
                alt="Brian Powell - Creative Director"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Skills and Experience Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Skills section */}
          <div>
            <h3 className="text-xl font-medium mb-8 dark:text-white">Skills & Tools</h3>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-3">Design</h4>
                <ul className="space-y-2 dark:text-gray-300">
                  <li>UI/UX Design</li>
                  <li>Visual Design</li>
                  <li>Brand Identity</li>
                  <li>Prototyping</li>
                  <li>User Research</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-3">Development</h4>
                <ul className="space-y-2 dark:text-gray-300">
                  <li>HTML & CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Frontend Architecture</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-3">Tools</h4>
                <ul className="space-y-2 dark:text-gray-300">
                  <li>Figma</li>
                  <li>Adobe Creative Suite</li>
                  <li>Webflow</li>
                  <li>Framer</li>
                  <li>VS Code</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-3">Other</h4>
                <ul className="space-y-2 dark:text-gray-300">
                  <li>Project Management</li>
                  <li>Content Strategy</li>
                  <li>Responsive Design</li>
                  <li>Design Systems</li>
                  <li>Accessibility</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Experience section - moved from above */}
          <div>
            <h3 className="text-xl font-medium mb-8 dark:text-white">Experience</h3>
            
            <div className="space-y-12">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium dark:text-white">Design Lead</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2020 — Present</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Studio Nova / New York</p>
                <p className="mt-2 dark:text-gray-300">Leading digital product design and creative direction for clients across various industries.</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium dark:text-white">Senior Designer</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2017 — 2020</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Creatif Agency / San Francisco</p>
                <p className="mt-2 dark:text-gray-300">Developed brand systems and digital products for technology companies and startups.</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium dark:text-white">UI/UX Designer</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2015 — 2017</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">TechSolutions Inc. / Boston</p>
                <p className="mt-2 dark:text-gray-300">Designed user interfaces and experiences for consumer applications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
