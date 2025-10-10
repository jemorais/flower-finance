'use client';

import { useAuth } from '@/hooks/useAuth';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--off-white)' }}>
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: 'var(--petal-pink)' }}></div>
          <p className="text-sm" style={{ color: 'var(--soft-gray)' }}>Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Redirect will happen in useEffect
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--off-white)' }}>
      {/* Header */}
      <Header />
      
      <div className="flex pt-[60px]"> {/* Padding-top para compensar header fixo */}
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto ml-64"> {/* Margin-left para compensar sidebar fixo */}
          <div className="p-6 grid-spacing">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}