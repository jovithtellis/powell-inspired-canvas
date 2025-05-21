
import React, { useState, useEffect } from 'react';

interface CursorPosition {
  x: number;
  y: number;
  timestamp: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: -100, y: -100, timestamp: Date.now() });
  const [trail, setTrail] = useState<CursorPosition[]>([]);
  const [isPointer, setIsPointer] = useState(false);
  const [cursorColor, setCursorColor] = useState('white');
  const trailLength = 5; // Number of echo elements

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      const newPosition = { 
        x: e.clientX, 
        y: e.clientY,
        timestamp: Date.now()
      };
      setPosition(newPosition);
      
      // Update trail with new position
      setTrail(prevTrail => {
        const newTrail = [newPosition, ...prevTrail.slice(0, trailLength - 1)];
        return newTrail;
      });
      
      // Dynamically change cursor color based on element underneath
      updateCursorColor(e.clientX, e.clientY);
    };

    const updateCursorColor = (x: number, y: number) => {
      const element = document.elementFromPoint(x, y);
      const bgColor = window.getComputedStyle(element || document.body).backgroundColor;
      
      // Default to white for dark backgrounds, black for light backgrounds
      if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
        setCursorColor('white'); // Default color
      } else if (bgColor.includes('rgb(255, 255, 255)') || 
                bgColor.includes('rgba(255, 255, 255,')) {
        setCursorColor('#333');
      }
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
      {/* Main cursor */}
      <div 
        className="fixed pointer-events-none z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`rounded-full transition-all duration-100 ${
          isPointer ? 'w-12 h-12 opacity-70' : 'w-8 h-8 opacity-50'
        }`} style={{ backgroundColor: cursorColor }}></div>
      </div>
      
      {/* Echo trail */}
      {trail.map((pos, index) => (
        <div 
          key={pos.timestamp}
          className="fixed pointer-events-none z-50"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            transform: 'translate(-50%, -50%)',
            opacity: (1 - index * 0.15), // Decreasing opacity for trail
          }}
        >
          <div className={`rounded-full ${
            isPointer ? 'w-10 h-10' : 'w-6 h-6'
          }`} style={{ 
            opacity: (0.4 - index * 0.07),
            transform: `scale(${1 - index * 0.15})`,
            backgroundColor: cursorColor,
          }}></div>
        </div>
      ))}
      
      {/* Inner cursor without glow */}
      <div 
        className="fixed pointer-events-none z-50 w-2 h-2 rounded-full"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          backgroundColor: cursorColor,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
