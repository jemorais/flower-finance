import React from 'react';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | React.ReactElement;
  variation?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  change?: {
    value: string;
    type: 'positive' | 'negative' | 'neutral';
  };
  borderColor?: 'green' | 'pink' | 'red' | 'yellow';
  className?: string;
}

export function MetricCard({ 
  title, 
  value, 
  icon, 
  variation,
  changeType,
  change, 
  borderColor = 'pink',
  className 
}: MetricCardProps) {
  const getBorderColor = () => {
    switch (borderColor) {
      case 'green':
        return '#10b981';
      case 'pink':
        return '#ec4899';
      case 'red':
        return '#ef4444';
      case 'yellow':
        return '#f59e0b';
      default:
        return '#ec4899';
    }
  };

  const getChangeColor = () => {
    if (!change && !changeType) return '#6b7280';
    const type = change?.type || changeType;
    switch (type) {
      case 'positive':
        return '#10b981';
      case 'negative':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  return (
    <div
      className={cn(
        'bg-white transition-all duration-300 hover:scale-102 cursor-pointer fade-in',
        className
      )}
      style={{
        width: '280px',
        height: '140px',
        borderRadius: '12px',
        borderLeft: `4px solid ${getBorderColor()}`,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 6px 20px rgba(16, 185, 129, 0.15)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
      }}
    >
      {/* Header com ícone e título */}
      <div className="flex items-center gap-2">
        {React.isValidElement(icon) ? (
          React.cloneElement(icon as React.ReactElement<any>, {
            className: "h-6 w-6 flex-shrink-0",
            style: { color: getBorderColor() }
          })
        ) : (
          React.createElement(icon as React.ComponentType<any>, {
            className: "h-6 w-6 flex-shrink-0",
            style: { color: getBorderColor() }
          })
        )}
        <h3 
          className="font-poppins text-sm font-medium truncate text-gray-600"
        >
          {title}
        </h3>
      </div>

      {/* Valor central */}
      <div className="flex-1 flex items-center">
        <span 
          className="font-poppins text-2xl font-bold text-gray-700"
        >
          {value}
        </span>
      </div>

      {/* Variação no bottom */}
      {(change || variation || changeType) && (
        <div className="flex items-center gap-1">
          {(change?.type === 'positive' || changeType === 'positive') ? (
            <TrendingUp className="h-4 w-4" style={{ color: getChangeColor() }} />
          ) : (change?.type === 'negative' || changeType === 'negative') ? (
            <TrendingDown className="h-4 w-4" style={{ color: getChangeColor() }} />
          ) : null}
          <span 
            className="font-poppins text-sm font-medium"
            style={{ color: getChangeColor() }}
          >
            {change?.value || variation || ''}
          </span>
        </div>
      )}
    </div>
  );
}