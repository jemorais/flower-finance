'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  ArrowRightLeft, 
  Users, 
  Target, 
  BarChart3, 
  Settings, 
  LogOut,
  Menu,
  X,
  Wallet,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface SidebarProps {
  className?: string;
}

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: Home,
    description: 'Visão geral das finanças'
  },
  {
    name: 'Transações',
    href: '/dashboard/transactions',
    icon: ArrowRightLeft,
    description: 'Histórico de movimentações'
  },
  {
    name: 'Relatórios',
    href: '/dashboard/reports',
    icon: BarChart3,
    description: 'Análises e relatórios'
  },
  {
    name: 'Calendário',
    href: '/dashboard/calendar',
    icon: Target,
    description: 'Eventos e promoções'
  },
  {
    name: 'Clientes',
    href: '/dashboard/customers',
    icon: Users,
    description: 'Gestão de clientes'
  },
  {
    name: 'Notificações',
    href: '/dashboard/notifications',
    icon: Settings,
    description: 'Sistema de notificações'
  },
  {
    name: 'Orçamento & Metas',
    href: '/dashboard/budget',
    icon: Wallet,
    description: 'Planejamento financeiro'
  }
];

const bottomNavigation = [
  {
    name: 'Configurações',
    href: '/dashboard/settings',
    icon: Settings,
    description: 'Configurações da conta'
  }
];

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'flex flex-col transition-all duration-300 fixed left-0 top-[60px] h-[calc(100vh-60px)] z-40',
        collapsed ? 'w-16' : 'w-64',
        className
      )}
      style={{ 
        backgroundColor: 'var(--off-white)',
        borderRight: '1px solid rgba(0,0,0,0.08)'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4" style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div 
              className="rounded-lg p-2"
              style={{ backgroundColor: 'var(--petal-pink)' }}
            >
              <Home className="h-5 w-5" style={{ color: 'var(--gray-600)' }} />
            </div>
            <div>
              <h2 className="font-semibold font-poppins" style={{ color: 'var(--soft-gray)' }}>Flower Finance</h2>
              <p className="text-xs" style={{ color: 'var(--soft-gray)', opacity: 0.7 }}>Controle Financeiro</p>
            </div>
          </div>
        )}
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8 p-0 hover:scale-105 transition-transform"
          style={{ color: 'var(--soft-gray)' }}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link key={item.name} href={item.href}>
              <div
                className={cn(
                  'flex items-center gap-3 px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105',
                  'font-poppins'
                )}
                style={{
                  borderRadius: '12px',
                  backgroundColor: isActive 
                    ? 'var(--petal-pink)' 
                    : 'transparent',
                  color: isActive 
                    ? 'var(--soft-gray)' 
                    : 'var(--soft-gray)',
                  ...(isActive ? {} : {
                    ':hover': {
                      backgroundColor: 'rgba(247, 202, 201, 0.1)'
                    }
                  })
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'rgba(247, 202, 201, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && (
                  <div className="flex-1 min-w-0">
                    <div className="truncate">{item.name}</div>
                    {!isActive && (
                      <div className="text-xs truncate" style={{ color: 'var(--soft-gray)', opacity: 0.7 }}>
                        {item.description}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="p-2 space-y-1" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
        {bottomNavigation.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link key={item.name} href={item.href}>
              <div
                className={cn(
                  'flex items-center gap-3 px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105',
                  'font-poppins'
                )}
                style={{
                  borderRadius: '12px',
                  backgroundColor: isActive 
                    ? 'var(--petal-pink)' 
                    : 'transparent',
                  color: isActive 
                    ? 'var(--soft-gray)' 
                    : 'var(--soft-gray)'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'rgba(247, 202, 201, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && (
                  <div className="flex-1 min-w-0">
                    <div className="truncate">{item.name}</div>
                    <div className="text-xs truncate" style={{ color: 'var(--soft-gray)', opacity: 0.7 }}>
                      {item.description}
                    </div>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* User Info (collapsed state) */}
      {collapsed && (
        <div className="p-2" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          <div className="flex items-center justify-center">
            <div 
              className="rounded-full p-2"
              style={{ backgroundColor: 'var(--petal-pink)' }}
            >
              <Home className="h-4 w-4" style={{ color: 'var(--gray-600)' }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}