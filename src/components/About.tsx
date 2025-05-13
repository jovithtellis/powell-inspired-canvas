
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">About</h2>
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                I'm a designer and developer with over 8 years of experience creating digital products and experiences. 
                I specialize in translating complex ideas into intuitive user experiences.
              </p>
              <p className="text-lg mb-4">
                My approach is grounded in understanding user needs and business goals to deliver thoughtful 
                and effective solutions. I love working at the intersection of design and technology.
              </p>
              <p className="text-lg mb-8">
                When I'm not designing or coding, you can find me exploring new hiking trails, experimenting with 
                cooking techniques, or reading about art history and architecture.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-6">Experience</h3>
            
            <div className="space-y-12">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium">Design Lead</h4>
                  <span className="text-sm text-gray-500">2020 — Present</span>
                </div>
                <p className="text-gray-600">Studio Nova / New York</p>
                <p className="mt-2">Leading digital product design and creative direction for clients across various industries.</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium">Senior Designer</h4>
                  <span className="text-sm text-gray-500">2017 — 2020</span>
                </div>
                <p className="text-gray-600">Creatif Agency / San Francisco</p>
                <p className="mt-2">Developed brand systems and digital products for technology companies and startups.</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium">UI/UX Designer</h4>
                  <span className="text-sm text-gray-500">2015 — 2017</span>
                </div>
                <p className="text-gray-600">TechSolutions Inc. / Boston</p>
                <p className="mt-2">Designed user interfaces and experiences for consumer applications.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills section */}
        <div className="mt-20">
          <h3 className="text-xl font-medium mb-8">Skills & Tools</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
            <div>
              <h4 className="text-sm text-gray-500 mb-3">Design</h4>
              <ul className="space-y-2">
                <li>UI/UX Design</li>
                <li>Visual Design</li>
                <li>Brand Identity</li>
                <li>Prototyping</li>
                <li>User Research</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm text-gray-500 mb-3">Development</h4>
              <ul className="space-y-2">
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Frontend Architecture</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm text-gray-500 mb-3">Tools</h4>
              <ul className="space-y-2">
                <li>Figma</li>
                <li>Adobe Creative Suite</li>
                <li>Webflow</li>
                <li>Framer</li>
                <li>VS Code</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm text-gray-500 mb-3">Other</h4>
              <ul className="space-y-2">
                <li>Project Management</li>
                <li>Content Strategy</li>
                <li>Responsive Design</li>
                <li>Design Systems</li>
                <li>Accessibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
