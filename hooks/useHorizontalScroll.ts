'use client';

import { RefObject } from 'react';

export function useHorizontalScroll(containerRef: RefObject<HTMLDivElement>) {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element && containerRef.current) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      });
    }
  };

  return { scrollToElement };
}