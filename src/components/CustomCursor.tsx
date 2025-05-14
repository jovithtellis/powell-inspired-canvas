
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      setIsPointer(
        hoveredElement?.tagName === 'BUTTON' || 
        hoveredElement?.tagName === 'A' ||
        hoveredElement?.closest('button') !== null ||
        hoveredElement?.closest('a') !== null ||
        window.getComputedStyle(hoveredElement || document.body).cursor === 'pointer'
      );
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousemove', updateCursorType);
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousemove', updateCursorType);
      document.body.style.cursor = 'auto';
    };
  }, [position]);

  return (
    <>
      {/* Outer cursor (blend difference) */}
      <div 
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`rounded-full bg-white transition-all duration-100 ${
          isPointer ? 'w-12 h-12 opacity-70' : 'w-8 h-8 opacity-50'
        }`}></div>
      </div>
      
      {/* Inner cursor with motion blur */}
      <div 
        className="fixed pointer-events-none z-50 w-2 h-2 rounded-full bg-white"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(0.5px)',
          boxShadow: '0 0 10px 1px rgba(255, 255, 255, 0.7)',
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
