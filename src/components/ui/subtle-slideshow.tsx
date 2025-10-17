'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface SubtleSlideshowProps {
  images: string[]
  className?: string
  interval?: number
  opacity?: number
  showControls?: boolean
}

export function SubtleSlideshow({ 
  images, 
  className, 
  interval = 5000,
  opacity = 0.3,
  showControls = false
}: SubtleSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (images.length === 0 || isPaused) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval, isPaused])

  useEffect(() => {
    // Preload images for smooth transitions
    images.forEach((src) => {
      const img = new window.Image()
      img.src = src
    })
    setIsLoaded(true)
  }, [images])

  if (!isLoaded || images.length === 0) {
    return null
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {images.map((image, index) => (
        <div
          key={image}
          className={cn(
            "absolute inset-0 transition-opacity duration-2000 ease-in-out",
            index === currentIndex ? "opacity-100" : "opacity-0"
          )}
          style={{ opacity: index === currentIndex ? opacity : 0 }}
        >
          <Image
            src={image}
            alt={`Flower background ${index + 1}`}
            fill
            className="object-cover object-center"
            priority={index === 0}
            quality={85}
            sizes="100vw"
          />
        </div>
      ))}
      
      {/* Controls opcionais */}
      {showControls && (
        <div className="absolute bottom-4 right-4 pointer-events-auto">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  )
}