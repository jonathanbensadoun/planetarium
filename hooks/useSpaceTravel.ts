'use client';

import { RefObject } from 'react';

export function useSpaceTravel(containerRef: RefObject<HTMLDivElement>) {
  const scrollWithEffect = (elementId: string, direction: 'next' | 'prev' = 'next') => {
    const element = document.getElementById(elementId);
    if (element && containerRef.current) {
      // Ajouter un effet de flou pendant le défilement
      containerRef.current.style.transition = 'filter 0.3s ease-in-out';
      containerRef.current.style.filter = 'blur(8px)';
      
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      });

      // Retirer l'effet de flou après le défilement
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.filter = 'none';
        }
      }, 500);
    }
  };

  return { scrollWithEffect };
}