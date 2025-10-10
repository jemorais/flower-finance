'use client'

import { ReactNode } from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface AnimatedCardProps extends React.ComponentProps<"div"> {
  children: ReactNode
  delay?: number
}

export function AnimatedCard({ 
  children, 
  className, 
  delay = 0, 
  ...props 
}: AnimatedCardProps) {
  return (
    <Card
      className={cn(
        "animate-fade-in opacity-0",
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
      {...props}
    >
      {children}
    </Card>
  )
}