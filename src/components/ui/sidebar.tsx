'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BarChart3, 
  DollarSign, 
  FileText, 
  Users, 
  Menu,
  X,
  User,
  Package,
  Tag
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const menuItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: BarChart3
  },
  {
    title: 'Transações',
    href: '/dashboard/transactions',
    icon: DollarSign
  },
  {
    title: 'Produtos',
    href: '/dashboard/products',
    icon: Package
  },
  {
    title: 'Categorias',
    href: '/dashboard/categories',
    icon: Tag
  },
  {
    title: 'Relatórios',
    href: '/dashboard/reports',
    icon: FileText
  },
  {
    title: 'Clientes',
    href: '/dashboard/clients',
    icon: Users
  }
];

interface SidebarProps {
  children: React.ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsCollapsed(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const shouldExpand = isMobile ? !isCollapsed : isHovered;

  return (
    <div className="flex h-screen">
      {/* Overlay para mobile */}
      {isMobile && !isCollapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      {/* Sidebar com fundo branco forçado */}
      <div 
        className={cn(
          "flex flex-col transition-all duration-300 z-50",
          isMobile ? "fixed left-0 top-0 h-full" : "relative",
          // No desktop: sempre começa com w-16, expande para w-64 no hover
          // No mobile: funciona com toggle normal
          isMobile 
            ? (isCollapsed ? "-translate-x-full w-64" : "w-64")
            : (isHovered ? "w-64" : "w-16")
        )}
        style={{
          backgroundColor: '#ffffff',
          borderRight: '4px solid #f472b6',
          boxShadow: '4px 0 20px rgba(0, 0, 0, 0.15)',
          minHeight: '100vh',
          height: '100%'
        }}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200" style={{ backgroundColor: 'transparent' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3 transition-all duration-300">
              {/* Ícone do logo - sempre visível */}
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              
              {/* Texto do logo - só aparece quando expandido */}
              <div className={cn(
                "transition-all duration-300 overflow-hidden",
                shouldExpand ? "w-auto opacity-100" : "w-0 opacity-0"
              )}>
                <h1 className="text-lg font-bold text-gray-900 whitespace-nowrap">Flower Finance</h1>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSidebar}
              className={cn(
                "p-2 transition-all duration-300 flex-shrink-0",
                isMobile ? "block" : "hidden"
              )}
            >
              {shouldExpand ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2" style={{ backgroundColor: 'transparent' }}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link key={item.href} href={item.href}>
                <div className={cn(
                  "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group",
                  isActive 
                    ? "bg-pink-100 text-pink-700 border border-pink-200" 
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}>
                  <Icon className={cn(
                    "w-4 h-4 flex-shrink-0",
                    isActive ? "text-pink-600" : "text-gray-500"
                  )} />
                  
                  <div className={cn(
                    "ml-3 transition-all duration-300 overflow-hidden",
                    shouldExpand ? "w-auto opacity-100" : "w-0 opacity-0"
                  )}>
                    <span className="font-medium whitespace-nowrap">{item.title}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200" style={{ backgroundColor: 'transparent' }}>
          <Link href="/dashboard/settings" className="flex items-center hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors">
            <Avatar className="w-8 h-8 flex-shrink-0">
              <AvatarFallback className="bg-pink-500 text-white text-sm">
                <User className="w-4 h-4" />
              </AvatarFallback>
            </Avatar>
            
            <div className={cn(
              "ml-3 transition-all duration-300 overflow-hidden",
              shouldExpand ? "w-auto opacity-100" : "w-0 opacity-0"
            )}>
              <span className="text-sm text-gray-600 whitespace-nowrap">Usuário</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            {isMobile && (
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleSidebar}
                className="md:hidden"
              >
                <Menu className="w-4 h-4" />
              </Button>
            )}
            
            <div className="flex items-center justify-end ml-auto">
              {/* Espaço reservado para futuras funcionalidades */}
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}