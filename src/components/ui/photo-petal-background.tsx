'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface Petal {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  rotationSpeed: number
  fallSpeed: number
  swaySpeed: number
  swayAmount: number
  opacity: number
  color: string
  shape: 'petal1' | 'petal2' | 'petal3'
}

interface PhotoPetalBackgroundProps {
  images: string[]
  className?: string
  petalCount?: number
  slideInterval?: number
}

export default function PhotoPetalBackground({
  images,
  className = '',
  petalCount = 30,
  slideInterval = 4000
}: PhotoPetalBackgroundProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [petals, setPetals] = useState<Petal[]>([])
  const animationRef = useRef<number>()

  // Cores realistas de pétalas
  const petalColors = [
    '#ffb3d9', '#ff99cc', '#ff80bf', '#ff66b3', '#ff4da6',
    '#ffccdd', '#ffd9e6', '#ffe6f0', '#fff0f5', '#fff5f8',
    '#f8d7da', '#f5c6cb', '#f1b0b7', '#ec999a', '#e8838f',
    '#ffeaa7', '#fdcb6e', '#e17055', '#d63031', '#74b9ff'
  ]

  // Inicializar pétalas
  useEffect(() => {
    const newPetals: Petal[] = []
    for (let i = 0; i < petalCount; i++) {
      newPetals.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 120 - 20,
        size: Math.random() * 15 + 8, // 8-23px
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2, // -1 a 1
        fallSpeed: Math.random() * 0.8 + 0.3, // 0.3-1.1
        swaySpeed: Math.random() * 0.02 + 0.01, // 0.01-0.03
        swayAmount: Math.random() * 30 + 10, // 10-40
        opacity: Math.random() * 0.6 + 0.3, // 0.3-0.9
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        shape: ['petal1', 'petal2', 'petal3'][Math.floor(Math.random() * 3)] as 'petal1' | 'petal2' | 'petal3'
      })
    }
    setPetals(newPetals)
  }, [petalCount])

  // Animação das pétalas com movimento realista
  useEffect(() => {
    let lastTime = 0
    const targetFPS = 60
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= frameInterval) {
        setPetals(prevPetals => 
          prevPetals.map(petal => {
            const newY = petal.y + petal.fallSpeed * 0.4 // Reduzindo velocidade para 40%
            const swayOffset = Math.sin(currentTime * petal.swaySpeed) * petal.swayAmount * 0.06 // Balanço mais suave
            const newX = petal.x + swayOffset * 0.06
            const newRotation = petal.rotation + petal.rotationSpeed * 0.6 // Rotação mais lenta

            // Reset pétala quando sai da tela
            if (newY > 110) {
              return {
                ...petal,
                x: Math.random() * 100,
                y: -10,
                rotation: Math.random() * 360,
                opacity: Math.random() * 0.6 + 0.3
              }
            }

            return {
              ...petal,
              x: newX,
              y: newY,
              rotation: newRotation
            }
          })
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
  }, [])

  // Slideshow das imagens
  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, slideInterval)

    return () => clearInterval(interval)
  }, [images.length, slideInterval])

  // Formas de pétalas em SVG
  const getPetalShape = (shape: string, color: string, size: number) => {
    const svgSize = size
    
    switch (shape) {
      case 'petal1':
        return (
          <svg width={svgSize} height={svgSize} viewBox="0 0 24 24" className="drop-shadow-sm">
            <path
              d="M12 2C8 2 5 8 5 12C5 16 8 22 12 22C16 22 19 16 19 12C19 8 16 2 12 2Z"
              fill={color}
              opacity="0.9"
            />
          </svg>
        )
      case 'petal2':
        return (
          <svg width={svgSize} height={svgSize} viewBox="0 0 24 24" className="drop-shadow-sm">
            <ellipse
              cx="12"
              cy="12"
              rx="4"
              ry="10"
              fill={color}
              opacity="0.8"
            />
          </svg>
        )
      case 'petal3':
        return (
          <svg width={svgSize} height={svgSize} viewBox="0 0 24 24" className="drop-shadow-sm">
            <path
              d="M12 2C10 4 8 8 8 12C8 16 10 20 12 22C14 20 16 16 16 12C16 8 14 4 12 2Z"
              fill={color}
              opacity="0.85"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Slideshow de fotos no fundo */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-50' : 'opacity-0'
            }`}
          >
            <Image
              src={`/images/flowers/${image}`}
              alt={`Flower ${index + 1}`}
              fill
              className="object-cover object-center"
              quality={85}
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlay sutil para melhor legibilidade */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Pétalas flutuantes */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="absolute transition-transform duration-100"
            style={{
              left: `${petal.x}%`,
              top: `${petal.y}%`,
              transform: `rotate(${petal.rotation}deg)`,
              opacity: petal.opacity * 1.5, // Aumentando opacidade das pétalas
            }}
          >
            {getPetalShape(petal.shape, petal.color, petal.size)}
          </div>
        ))}
      </div>
    </div>
  )
}