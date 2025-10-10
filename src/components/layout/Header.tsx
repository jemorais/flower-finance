'use client';

import { useState } from 'react';
import { Bell, Search, User, LogOut, Settings } from 'lucide-react';
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
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/auth/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header 
      className="h-[60px] fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50 backdrop-blur-sm"
      style={{ backgroundColor: 'var(--petal-pink)' }}
    >
      <div className="flex h-full items-center px-6">
        {/* Logo/Brand - Esquerda */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <span className="text-white text-lg">🌸</span>
          </div>
          <span className="text-white font-semibold text-lg font-poppins">Flower Finance</span>
        </div>

        {/* Search Bar - Central */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Buscar flores e finanças..."
              className="pl-10 pr-4 py-2 w-full bg-white/90 backdrop-blur-sm border-0 rounded-[20px] text-sm placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-white/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Right Side Actions - Direita */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white border-0"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-400 rounded-full text-[10px] text-white flex items-center justify-center font-medium">
              3
            </span>
          </Button>

          {/* User Menu */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border-0">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.avatar || ''} alt={user?.name || 'Usuário'} crossOrigin="anonymous" />
                    <AvatarFallback className="bg-white text-gray-600 text-sm font-medium">
                      {user?.name ? getUserInitials(user.name) : user?.email?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mt-2 bg-white rounded-xl shadow-lg border-0" align="end" forceMount>
                <DropdownMenuLabel className="font-normal p-3">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium text-gray-900">
                      {user?.name || 'Usuário'}
                    </p>
                    <p className="text-xs text-gray-500">
                      {user?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-100" />
                <DropdownMenuItem 
                  onClick={() => router.push('/dashboard/profile')}
                  className="p-3 hover:bg-gray-50 cursor-pointer"
                >
                  <User className="mr-3 h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => router.push('/dashboard/settings')}
                  className="p-3 hover:bg-gray-50 cursor-pointer"
                >
                  <Settings className="mr-3 h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Configurações</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-100" />
                <DropdownMenuItem 
                  onClick={handleLogout}
                  className="p-3 hover:bg-red-50 cursor-pointer"
                >
                  <LogOut className="mr-3 h-4 w-4 text-red-500" />
                  <span className="text-sm text-red-600">Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => router.push('/auth/login')}
                className="text-white hover:bg-white/20 border-0"
              >
                Entrar
              </Button>
              <Button 
                size="sm" 
                onClick={() => router.push('/auth/register')}
                className="bg-white text-gray-700 hover:bg-white/90 border-0 rounded-lg"
              >
                Criar conta
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}