
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
  const trailLength = 3; // Reduced trail length for less intensity

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
      {/* Main cursor - reduced opacity and size */}
      <div 
        className="fixed pointer-events-none z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`rounded-full transition-all duration-100 bg-white ${
          isPointer ? 'w-8 h-8 opacity-40' : 'w-6 h-6 opacity-30'
        }`}></div>
      </div>
      
      {/* Reduced echo trail */}
      {trail.map((pos, index) => (
        <div 
          key={pos.timestamp}
          className="fixed pointer-events-none z-50"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className={`rounded-full bg-white ${
            isPointer ? 'w-6 h-6' : 'w-4 h-4'
          }`} style={{ 
            opacity: (0.2 - index * 0.08),
            transform: `scale(${1 - index * 0.2})`,
          }}></div>
        </div>
      ))}
    </>
  );
};

export default CustomCursor;
