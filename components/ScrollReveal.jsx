'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ScrollReveal = ({ children }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    const element = revealRef.current;
    if (!element) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let animation;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        animation = gsap.fromTo(
          element,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            clearProps: 'all',
          },
        );
        observer.disconnect();
      },
      { threshold: 0.12 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      animation?.kill();
    };
  }, []);

  return <div ref={revealRef}>{children}</div>;
};

export default ScrollReveal;
