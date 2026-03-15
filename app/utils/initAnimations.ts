import { setupScrollAnimation, setupCounterAnimations, setupParallaxEffect } from './animationUtils';

export const initAnimations = () => {
  // Initialize scroll reveal animations with enhanced settings for smoother transitions
  const cleanupScrollAnimation = setupScrollAnimation('.reveal', {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  });
  
  // Initialize counter animations with higher threshold for better visibility
  const cleanupCounterAnimation = setupCounterAnimations('.stats-counter', {
    threshold: 0.7
  });
  
  // Initialize parallax effects with enhanced sensitivity
  const cleanupParallaxEffect = setupParallaxEffect('.parallax-container');
  
  // Return a cleanup function that calls all cleanup functions
  return () => {
    // Only call cleanup functions if they exist
    if (typeof cleanupScrollAnimation === 'function') {
      cleanupScrollAnimation();
    }
    
    if (typeof cleanupCounterAnimation === 'function') {
      cleanupCounterAnimation();
    }
    
    if (typeof cleanupParallaxEffect === 'function') {
      cleanupParallaxEffect();
    }  };
};

// Add a global function to initialize animations only in browser environment
if (typeof window !== 'undefined') {
  (window as any).initNathCorpAnimations = initAnimations;
}

export default initAnimations;
