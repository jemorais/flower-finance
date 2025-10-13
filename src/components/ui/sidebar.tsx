'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BarChart3, 
  DollarSign, 
  FileText, 
  Users, 
  Settings, 
  Bell,
  Search,
  ChevronDown,
  User,
  Menu,
  X,
  LogOut,
  UserCircle,
  Package,
  Tag
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const menuItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: BarChart3,
    description: 'Visão geral das finanças'
  },
  {
    title: 'Transações',
    href: '/dashboard/transactions',
    icon: DollarSign,
    description: 'Histórico de movimentações'
  },
  {
    title: 'Produtos',
    href: '/dashboard/products',
    icon: Package,
    description: 'Catálogo de produtos'
  },
  {
    title: 'Categorias',
    href: '/dashboard/categories',
    icon: Tag,
    description: 'Gerenciar categorias'
  },
  {
    title: 'Relatórios',
    href: '/dashboard/reports',
    icon: FileText,
    description: 'Análises e relatórios'
  },
  {
    title: 'Clientes',
    href: '/dashboard/clients',
    icon: Users,
    description: 'Gestão de relacionamentos'
  }
];

interface SidebarProps {
  children: React.ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile e ajustar comportamento inicial
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsCollapsed(true); // Iniciar colapsado no mobile
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Overlay para mobile quando sidebar está aberto */}
      {isMobile && !isCollapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "bg-white border-r border-gray-200 flex flex-col transition-all duration-300 z-50",
        isMobile ? "fixed left-0 top-0 h-full" : "relative",
        isCollapsed 
          ? isMobile 
            ? "-translate-x-full w-64" 
            : "w-16" 
          : "w-64"
      )}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className={cn(
              "flex items-center space-x-3 transition-opacity duration-300",
              isCollapsed && !isMobile ? "opacity-0" : "opacity-100"
            )}>
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              {(!isCollapsed || isMobile) && (
                <div>
                  <h1 className="text-lg font-bold text-gray-900">Flower Finance</h1>
                  <p className="text-xs text-gray-500">Sistema Financeiro</p>
                </div>
              )}
            </div>
            
            {/* Botão Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSidebar}
              className="p-2"
            >
              {isCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
            </Button>
          </div>
          
          {/* Search - só mostra quando expandido */}
          {(!isCollapsed || isMobile) && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Buscar transações, relatórios..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-sm"
              />
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link key={item.href} href={item.href}>
                <div className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors relative group",
                  isActive 
                    ? "bg-pink-50 text-pink-700 border border-pink-200" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  isCollapsed && !isMobile ? "justify-center" : ""
                )}>
                  <Icon className={cn(
                    "w-4 h-4 flex-shrink-0",
                    isActive ? "text-pink-600" : "text-gray-400"
                  )} />
                  
                  {(!isCollapsed || isMobile) && (
                    <div className="flex-1">
                      <div className="font-medium">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                  )}

                  {/* Tooltip para modo colapsado no desktop */}
                  {isCollapsed && !isMobile && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                      {item.title}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className={cn(
            "flex items-center space-x-3",
            isCollapsed && !isMobile ? "justify-center" : ""
          )}>
            <Avatar className="w-8 h-8 flex-shrink-0">
              <AvatarFallback className="bg-pink-500 text-white text-sm">
                <User className="w-4 h-4" />
              </AvatarFallback>
            </Avatar>
            
            {(!isCollapsed || isMobile) && (
              <>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">Usuário</div>
                  <div className="text-xs text-gray-500">Administrador</div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>Usuário</DropdownMenuLabel>
                    <div className="px-2 py-1.5 text-sm text-gray-500">Administrador</div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/settings" className="flex items-center cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Configurações</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600 focus:text-red-600 cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sair</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Botão toggle para mobile no top bar */}
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
            
            <div className="flex items-center justify-end space-x-4 ml-auto">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <div className="text-sm text-gray-600">
                Últimos 30 dias
              </div>
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