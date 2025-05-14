
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
  const [isOverDark, setIsOverDark] = useState(false);
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
      
      // Check if cursor is over a dark or light area by evaluating the element's background
      const elementBg = window.getComputedStyle(hoveredElement || document.body).backgroundColor;
      // Simple check - can be expanded with more sophisticated detection
      setIsOverDark(elementBg.includes('0, 0, 0') || elementBg.includes('rgb(0,') || 
                   hoveredElement?.closest('.dark-section') !== null);
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

  const cursorColor = isOverDark ? 'bg-white' : 'bg-black';

  return (
    <>
      {/* Main cursor (blend difference) */}
      <div 
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`rounded-full ${cursorColor} transition-all duration-100 ${
          isPointer ? 'w-12 h-12 opacity-70' : 'w-8 h-8 opacity-50'
        }`}></div>
      </div>
      
      {/* Echo trail */}
      {trail.map((pos, index) => (
        <div 
          key={pos.timestamp}
          className="fixed pointer-events-none z-50 mix-blend-difference"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            transform: 'translate(-50%, -50%)',
            opacity: (1 - index * 0.15), // Decreasing opacity for trail
          }}
        >
          <div className={`rounded-full ${cursorColor} ${
            isPointer ? 'w-10 h-10' : 'w-6 h-6'
          }`} style={{ 
            opacity: (0.4 - index * 0.07),
            transform: `scale(${1 - index * 0.15})`,
          }}></div>
        </div>
      ))}
      
      {/* Inner cursor */}
      <div 
        className={`fixed pointer-events-none z-50 w-2 h-2 rounded-full ${cursorColor}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
