
import React, { useState, useEffect } from 'react';

const GradientBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Get normalized mouse position (0-1)
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Calculate gradient position based on mouse
  const gradientX = mousePosition.x * 100;
  const gradientY = mousePosition.y * 100;
  
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(138, 43, 226, 0.6) 0%, rgba(34, 20, 80, 0.3) 25%, rgba(0, 0, 0, 0) 50%)`,
        }}
      />
    </div>
  );
};

export default GradientBackground;
