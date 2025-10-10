'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';
import { Settings, User, Save } from 'lucide-react';


export default function SettingsPage() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleSave = () => {
    // TODO: Implementar salvamento
    console.log('Salvando configurações:', { name, email });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center shadow-lg">
              <Settings className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-pink-800">
                Configurações
              </h1>
              <p className="text-pink-600 mt-1">Gerencie suas configurações de conta</p>
            </div>
          </div>
        </div>

      <Card className="bg-gradient-to-br from-white to-rose-50 border-rose-200 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center text-xl text-rose-800">
            <User className="mr-3 h-5 w-5 text-rose-600" />
            Perfil do Usuário
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700 font-medium">Nome</Label>
            <Input 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="border-gray-200 focus:border-rose-400 focus:ring-rose-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="border-gray-200 focus:border-rose-400 focus:ring-rose-400"
            />
          </div>
          <Button 
            onClick={handleSave}
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg"
          >
            <Save className="mr-2 h-4 w-4" />
            Salvar Alterações
          </Button>
        </CardContent>
      </Card>
      </div>
    </DashboardLayout>
  );
}