'use client';

import { RocketIcon } from 'lucide-react';
import { useState } from 'react';

interface RocketButtonProps {
  onClick: () => void;
  className?: string;
}

export default function RocketButton({ onClick, className = '' }: RocketButtonProps) {
  const [isLaunching, setIsLaunching] = useState(false);

  const handleClick = () => {
    setIsLaunching(true);
    
    // Déclencher l'action après l'animation
    setTimeout(() => {
      onClick();
      setIsLaunching(false);
    }, 500);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        bg-gradient-to-r from-blue-600 to-purple-600 
        p-4 rounded-full shadow-lg 
        hover:shadow-2xl transition-all duration-300 
        hover:scale-110 relative
        ${isLaunching ? 'animate-rocket-launch' : ''}
        ${className}
      `}
      aria-label="Planète suivante"
      disabled={isLaunching}
    >
      <RocketIcon 
        className={`
          h-6 w-6 text-white transform -rotate-45
          transition-all duration-300
          ${isLaunching ? 'scale-90' : ''}
        `}
      />
      {isLaunching && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-transparent opacity-75 rounded-full animate-flame" />
        </div>
      )}
    </button>
  );
}