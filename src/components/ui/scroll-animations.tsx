'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  duration?: number;
  threshold?: number;
}

export function ScrollAnimation({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  duration = 0.8,
  threshold = 0.15
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold, isVisible, isMounted]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    
    switch (direction) {
      case 'up':
        return 'translate3d(0, 60px, 0)';
      case 'down':
        return 'translate3d(0, -60px, 0)';
      case 'left':
        return 'translate3d(-60px, 0, 0)';
      case 'right':
        return 'translate3d(60px, 0, 0)';
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
}

// Componente para stagger animations (animações em sequência)
interface StaggerProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

export function Stagger({ 
  children, 
  className = '', 
  staggerDelay = 150,
  direction = 'up'
}: StaggerProps) {
  const childrenArray = React.Children.toArray(children);
  
  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <ScrollAnimation
          key={index}
          delay={index * staggerDelay}
          direction={direction}
          duration={0.8}
          threshold={0.1}
        >
          {child}
        </ScrollAnimation>
      ))}
    </div>
  );
}

// Componente para animações de seção completa
interface SectionAnimationProps {
  children: React.ReactNode;
  className?: string;
  animateChildren?: boolean;
  childrenDelay?: number;
}

export function SectionAnimation({ 
  children, 
  className = '',
  animateChildren = false,
  childrenDelay = 100
}: SectionAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible, isMounted]);

  if (animateChildren) {
    const childrenArray = React.Children.toArray(children);
    return (
      <section ref={sectionRef} className={className}>
        {childrenArray.map((child, index) => (
          <ScrollAnimation
            key={index}
            delay={isVisible ? index * childrenDelay : 0}
            direction="up"
            duration={0.8}
          >
            {child}
          </ScrollAnimation>
        ))}
      </section>
    );
  }

  return (
    <ScrollAnimation>
      <section ref={sectionRef} className={className}>
        {children}
      </section>
    </ScrollAnimation>
  );
}

// Hook para scroll suave
export function useSmoothScroll() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
}