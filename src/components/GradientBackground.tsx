
import React, { useState, useEffect } from 'react';

const GradientBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 });
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const { theme } = { theme: 'dark' }; // Default to dark
  
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
  
  // Velocity determines taper effect in the opposite direction
  // Higher velocity = narrower gradient in opposite direction
  const taperX = 100 - (mouseVelocity.x * 200); // Opposite of velocity
  const taperY = 100 - (mouseVelocity.y * 200); // Opposite of velocity
  
  // Determine gradient color based on theme
  const gradientColor = theme === 'light' 
    ? 'rgba(255, 215, 0, 0.2)' // Gold tone for light mode
    : 'rgba(138, 43, 226, 0.3)'; // Purple tone for dark mode
  
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <div
        className="absolute inset-0 opacity-20 transition-all duration-300"
        style={{
          background: `radial-gradient(ellipse at ${gradientX}% ${gradientY}%, 
            ${gradientColor} 0%, 
            rgba(34, 20, 80, 0.2) ${Math.max(20, taperX)}%, 
            rgba(0, 0, 0, 0) ${Math.max(40, taperY)}%)`,
        }}
      />
    </div>
  );
};

export default GradientBackground;
