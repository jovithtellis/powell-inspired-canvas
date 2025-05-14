
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FilteredWork from '../components/FilteredWork';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import GradientBackground from '../components/GradientBackground';

const Index = () => {
  useEffect(() => {
    document.title = 'Jovith Tellis - Creative Director & Filmmaker';

    // Initialize animation observers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('fade-in-element')) {
              entry.target.classList.add('animate-fadeIn');
            } else if (
              entry.target.classList.contains('slide-in-left') ||
              entry.target.classList.contains('slide-in-right') ||
              entry.target.classList.contains('slide-in-up') ||
              entry.target.classList.contains('slide-in-down')
            ) {
              entry.target.classList.add('animate-slideIn');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all animatable elements
    setTimeout(() => {
      document.querySelectorAll(
        '.fade-in-element, .slide-in-left, .slide-in-right, .slide-in-up, .slide-in-down'
      ).forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-background text-foreground">
      <CustomCursor />
      <GradientBackground />
      <Navbar />
      <Hero />
      <FilteredWork />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
