'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  distance?: number
  className?: string
  threshold?: number
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  duration = 800, 
  distance = 40,
  className = '',
  threshold = 0.1
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -80px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, threshold, isVisible])

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transform: isVisible ? 'translateY(0)' : `translateY(${distance}px)`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  )
}

interface ScrollStaggerProps {
  children: React.ReactNode
  staggerDelay?: number
  className?: string
  startDelay?: number
}

export function ScrollStagger({ 
  children, 
  staggerDelay = 150,
  className = '',
  startDelay = 0
}: ScrollStaggerProps) {
  const childrenArray = Array.isArray(children) ? children : [children]
  
  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <ScrollReveal 
          key={index} 
          delay={startDelay + (index * staggerDelay)}
          duration={600}
          distance={30}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  )
}