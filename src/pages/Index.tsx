
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FilteredWork from '../components/FilteredWork';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import GradientBackground from '../components/GradientBackground';
import VideoAssetGuide from '../components/VideoAssetGuide';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';

const Index = () => {
  const [showGuide, setShowGuide] = useState(false);
  
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
      
      {/* Video Assets Guide Dialog */}
      <Dialog open={showGuide} onOpenChange={setShowGuide}>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            size="icon" 
            className="fixed bottom-6 right-6 z-50 rounded-full bg-black border-gray-700 hover:bg-gray-900"
            onClick={() => setShowGuide(true)}
          >
            <Info size={20} />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl bg-black border-gray-800">
          <DialogHeader>
            <DialogTitle>Using Your Own Assets</DialogTitle>
            <DialogDescription>
              Follow this guide to add your videos and images to the portfolio.
            </DialogDescription>
          </DialogHeader>
          <VideoAssetGuide />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
