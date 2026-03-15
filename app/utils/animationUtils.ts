type AnimationOptions = {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  once?: boolean;
};

export const setupScrollAnimation = (
  selector: string = '.reveal',
  options: AnimationOptions = {}
) => {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    once = true
  } = options;

  const elements = document.querySelectorAll(selector);
  
  // Return a no-op function if no elements found
  if (!elements.length) return () => {};
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        if (once) {
          observer.unobserve(entry.target);
        }
      } else if (!once) {
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold,
    root,
    rootMargin
  });
  
  elements.forEach(element => {
    observer.observe(element);
  });
  
  return () => {
    elements.forEach(element => {
      observer.unobserve(element);
    });
  };
};

export const animateCounter = (
  element: HTMLElement, 
  start: number, 
  end: number, 
  duration: number = 2000
) => {
  let startTimestamp: number | null = null;
  
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentValue = Math.floor(progress * (end - start) + start);
    element.textContent = `${currentValue}`;
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = `${end}`;
    }
  };
  
  window.requestAnimationFrame(step);
};

export const setupCounterAnimations = (
  selector: string = '.counter', 
  options: AnimationOptions = {}
) => {
  const elements = document.querySelectorAll(selector);
  
  // Return a no-op function if no elements found
  if (!elements.length) return () => {};
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        const target = parseInt(element.dataset.target || '0', 10);
        animateCounter(element, 0, target);
        observer.unobserve(element);
      }
    });
  }, {
    threshold: options.threshold || 0.5,
    root: options.root || null,
    rootMargin: options.rootMargin || '0px'
  });
  
  elements.forEach(element => {
    observer.observe(element);
  });
  
  return () => {
    elements.forEach(element => {
      observer.unobserve(element);
    });
  };
};

export const setupParallaxEffect = (containerSelector: string = '.parallax-container') => {
  const container = document.querySelector(containerSelector);
  
  // Return a no-op function if no container found
  if (!container) return () => {};
  
  const elements = container.querySelectorAll('.parallax-element');
  
  const handleMouseMove = (e: MouseEvent) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    elements.forEach((el) => {
      const element = el as HTMLElement;
      const speed = parseFloat(element.getAttribute('data-speed') || '0');
      const offsetX = (x - 0.5) * speed;
      const offsetY = (y - 0.5) * speed;
      
      element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  };
  
  window.addEventListener('mousemove', handleMouseMove);
  
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
};
