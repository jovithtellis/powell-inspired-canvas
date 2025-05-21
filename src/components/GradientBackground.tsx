
import React, { useState, useEffect } from 'react';

const GradientBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 });
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Get normalized mouse position (0-1)
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      // Calculate velocity based on previous position
      const velX = x - prevPosition.x;
      const velY = y - prevPosition.y;
      
      setMousePosition({ x, y });
      setPrevPosition({ x, y });
      setMouseVelocity({ 
        x: Math.abs(velX) * 10, 
        y: Math.abs(velY) * 10 
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [prevPosition]);
  
  // Calculate gradient position based on mouse
  const gradientX = mousePosition.x * 100;
  const gradientY = mousePosition.y * 100;
  
  // Calculate taper effect (opposite of velocity)
  const taperX = 50 + (mouseVelocity.x * 100);
  const taperY = 50 + (mouseVelocity.y * 100);
  
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse at ${gradientX}% ${gradientY}%, 
            rgba(138, 43, 226, 0.6) 0%, 
            rgba(34, 20, 80, 0.3) ${taperX}%, 
            rgba(0, 0, 0, 0) ${taperY}%)`,
        }}
      />
    </div>
  );
};

export default GradientBackground;
