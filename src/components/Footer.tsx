
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 md:px-8 lg:px-12 xl:px-24 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <p className="text-sm text-gray-600 dark:text-gray-400">© {currentYear} Jovith Tellis. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-8">
          <a href="#work" className="text-sm text-gray-600 dark:text-gray-400 hover-underline">Work</a>
          <a href="#about" className="text-sm text-gray-600 dark:text-gray-400 hover-underline">About</a>
          <a href="#contact" className="text-sm text-gray-600 dark:text-gray-400 hover-underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
