
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FilteredWork from '../components/FilteredWork';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

const Index = () => {
  useEffect(() => {
    document.title = 'Jovith Tellis - Creative Director & Filmmaker';
  }, []);

  return (
    <div className="bg-background text-foreground">
      <CustomCursor />
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
