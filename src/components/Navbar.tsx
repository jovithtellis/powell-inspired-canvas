
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeProvider';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#" 
          className="text-xl font-medium hover:text-gray-700 dark:hover:text-gray-300 transition-colors text-white dark:text-white"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          brian powell
        </a>

        <div className="flex items-center space-x-4">
          {/* Theme toggle */}
          <ThemeToggle />

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink title="Work" onClick={() => scrollToSection('work')} />
            <NavLink title="About" onClick={() => scrollToSection('about')} />
            <NavLink title="Contact" onClick={() => scrollToSection('contact')} />
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden text-white dark:text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-40 flex flex-col items-center pt-10 space-y-6 text-lg">
          <NavLink title="Work" onClick={() => scrollToSection('work')} />
          <NavLink title="About" onClick={() => scrollToSection('about')} />
          <NavLink title="Contact" onClick={() => scrollToSection('contact')} />
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ title, onClick }: { title: string; onClick: () => void }) => (
  <button 
    className="hover-underline font-medium text-white dark:text-white hover:text-white/80 transition-colors"
    onClick={onClick}
  >
    {title}
  </button>
);

export default Navbar;
