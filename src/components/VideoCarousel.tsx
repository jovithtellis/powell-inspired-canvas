
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useTheme } from './ThemeProvider';

// Placeholder images
const placeholders = [
  'https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?q=80&w=1920&h=1080',
  'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1920&h=1080',
  'https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?q=80&w=1920&h=1080', 
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1920&h=1080',
  'https://images.unsplash.com/photo-1452802447250-470a88ac82bc?q=80&w=1920&h=1080',
  'https://images.unsplash.com/photo-1551749006-7faf602a84d3?q=80&w=1920&h=1080',
  'https://images.unsplash.com/photo-1575327652584-615c3c4edc01?q=80&w=1920&h=1080',
  'https://images.unsplash.com/photo-1521986329282-0436c1f1e212?q=80&w=1920&h=1080',
  'https://images.unsplash.com/photo-1591022560022-0ca688ba6d2d?q=80&w=1920&h=1080',
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1920&h=1080',
];

const VideoCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [randomizedPlaceholders, setRandomizedPlaceholders] = useState<string[]>([]);
  const { theme } = useTheme();
  
  // Randomize images on initial load
  useEffect(() => {
    const shuffled = [...placeholders]
      .sort(() => Math.random() - 0.5);
    setRandomizedPlaceholders(shuffled);
  }, []);
  
  // Handle mouse wheel scrolling
  const handleWheel = (e: React.WheelEvent) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += e.deltaY;
    }
  };

  if (randomizedPlaceholders.length === 0) {
    return null; // Wait until randomization is complete
  }

  return (
    <div 
      className="w-full h-screen overflow-hidden"
      ref={carouselRef}
      onWheel={handleWheel}
    >
      <Carousel
        className="w-full h-full"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className="h-screen">
          {randomizedPlaceholders.map((src, index) => (
            <CarouselItem key={index} className="w-full h-screen">
              <div className="h-screen w-full">
                {/* This is where video will go in the future */}
                <img 
                  src={src} 
                  alt={`Showcase ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                {/* Later replace with: 
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover"
                  src={`/videos/showcase-${index + 1}.mp4`}
                /> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="flex justify-center gap-4">
            <CarouselPrevious className="relative transform-none h-10 w-10" />
            <CarouselNext className="relative transform-none h-10 w-10" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
