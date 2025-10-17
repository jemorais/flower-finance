'use client'

import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  rotation: number
  rotationSpeed: number
  color: string
  shape: 'petal' | 'leaf' | 'circle'
}

interface ParticleSystemProps {
  className?: string
  particleCount?: number
  colors?: string[]
  shapes?: ('petal' | 'leaf' | 'circle')[]
  speed?: number
  opacity?: number
}

export function ParticleSystem({ 
  className,
  particleCount = 15,
  colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1', '#98fb98', '#90ee90'],
  shapes = ['petal', 'leaf'],
  speed = 1,
  opacity = 0.6
}: ParticleSystemProps) {
  const [particles, setParticles] = useState<Particle[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  // Inicializar partículas
  useEffect(() => {
    const initParticles = () => {
      const newParticles: Particle[] = []
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 10,
          speed: (Math.random() * 0.5 + 0.2) * speed,
          opacity: Math.random() * opacity + 0.2,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          shape: shapes[Math.floor(Math.random() * shapes.length)]
        })
      }
      
      setParticles(newParticles)
    }

    initParticles()
  }, [particleCount, colors, shapes, speed, opacity])

  // Animação das partículas com otimização de performance
  useEffect(() => {
    let lastTime = 0
    const targetFPS = 60
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= frameInterval) {
        setParticles(prevParticles => 
          prevParticles.map(particle => ({
            ...particle,
            y: particle.y - particle.speed,
            x: particle.x + Math.sin(particle.y * 0.01) * 0.1,
            rotation: particle.rotation + particle.rotationSpeed,
            // Reset particle when it goes off screen
            ...(particle.y < -10 ? {
              y: 110,
              x: Math.random() * 100,
              opacity: Math.random() * opacity + 0.2
            } : {})
          }))
        )
        lastTime = currentTime
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [opacity])

  const renderParticle = (particle: Particle) => {
    const baseStyle = {
      position: 'absolute' as const,
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      opacity: particle.opacity,
      transform: `rotate(${particle.rotation}deg)`,
      transition: 'none',
      pointerEvents: 'none' as const
    }

    if (particle.shape === 'petal') {
      return (
        <div
          key={particle.id}
          style={baseStyle}
          className="animate-pulse"
        >
          <svg viewBox="0 0 24 24" fill={particle.color} className="w-full h-full">
            <path d="M12 2C8 2 5 5 5 9c0 4 3 7 7 7s7-3 7-7c0-4-3-7-7-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" opacity="0.8"/>
            <ellipse cx="12" cy="9" rx="3" ry="6" fill={particle.color}/>
          </svg>
        </div>
      )
    }

    if (particle.shape === 'leaf') {
      return (
        <div
          key={particle.id}
          style={baseStyle}
          className="animate-pulse"
        >
          <svg viewBox="0 0 24 24" fill={particle.color} className="w-full h-full">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22.45C8.66,16.06 11.26,10.26 17,8.29C17,8.19 17,8.1 17,8Z" opacity="0.7"/>
          </svg>
        </div>
      )
    }

    // Circle fallback
    return (
      <div
        key={particle.id}
        style={{
          ...baseStyle,
          backgroundColor: particle.color,
          borderRadius: '50%'
        }}
        className="animate-pulse"
      />
    )
  }

  return (
    <div 
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      style={{ zIndex: 0 }}
    >
      {particles.map(renderParticle)}
    </div>
  )
}