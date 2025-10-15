'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Database,
  Download,
  Upload,
  Trash2,
  Save
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface UserSettings {
  name: string;
  email: string;
  phone: string;
  language: string;
  timezone: string;
}

interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  transactionAlerts: boolean;
  goalReminders: boolean;
  weeklyReports: boolean;
}

interface SecuritySettings {
  twoFactorAuth: boolean;
  loginAlerts: boolean;
  sessionTimeout: string;
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [userSettings, setUserSettings] = useState<UserSettings>({
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 99999-9999',
    language: 'pt-BR',
    timezone: 'America/Sao_Paulo'
  });

  const [notifications, setNotifications] = useState<NotificationSettings>({
    emailNotifications: true,
    pushNotifications: false,
    transactionAlerts: true,
    goalReminders: true,
    weeklyReports: false
  });

  const [security, setSecurity] = useState<SecuritySettings>({
    twoFactorAuth: false,
    loginAlerts: true,
    sessionTimeout: '30'
  });

  const tabs = [
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'notifications', label: 'Notificações', icon: Bell },
    { id: 'security', label: 'Segurança', icon: Shield },
    { id: 'data', label: 'Dados', icon: Database }
  ];

  const handleSaveProfile = () => {
    console.log('Salvando perfil:', userSettings);
  };

  const handleExportData = () => {
    const data = [
      ['Nome', userSettings.name],
      ['Email', userSettings.email],
      ['Telefone', userSettings.phone],
    ];
    const csvContent = 'data:text/csv;charset=utf-8,' + data.map(row => row.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'user_settings.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [showImportModal, setShowImportModal] = useState(false);
  
  const handleImportData = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const lines = text.split('\n').map(line => line.split(','));
      if (lines.length >= 4) {
        setUserSettings({
          name: lines[0][1] || userSettings.name,
          email: lines[1][1] || userSettings.email,
          phone: lines[2][1] || userSettings.phone,
          language: userSettings.language,
          timezone: userSettings.timezone
        });
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-pink-25 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Settings className="w-6 h-6 text-pink-600" />
          Configurações
        </h1>
        <p className="text-gray-600 mt-1">Gerencie suas preferências e configurações da conta</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-pink-50 text-pink-700 border-b-2 border-pink-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Informações do Perfil</CardTitle>
            <CardDescription>Atualize suas informações pessoais</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  value={userSettings.name}
                  onChange={(e) => setUserSettings({...userSettings, name: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={userSettings.email}
                  onChange={(e) => setUserSettings({...userSettings, email: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  value={userSettings.phone}
                  onChange={(e) => setUserSettings({...userSettings, phone: e.target.value})}
                />
              </div>
            </div>
            <Button onClick={handleSaveProfile} className="bg-pink-600 hover:bg-pink-700">
              <Save className="w-4 h-4 mr-2" />
              Salvar Alterações
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Preferências de Notificação</CardTitle>
            <CardDescription>Configure como você deseja receber notificações</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <Label>Notificações por Email</Label>
                <p className="text-sm text-gray-600">Receba atualizações por email</p>
              </div>
              <Switch
                checked={notifications.emailNotifications}
                onCheckedChange={(checked) => setNotifications({...notifications, emailNotifications: checked})}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Notificações Push</Label>
                <p className="text-sm text-gray-600">Receba notificações no navegador</p>
              </div>
              <Switch
                checked={notifications.pushNotifications}
                onCheckedChange={(checked) => setNotifications({...notifications, pushNotifications: checked})}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Alertas de Transação</Label>
                <p className="text-sm text-gray-600">Seja notificado sobre novas transações</p>
              </div>
              <Switch
                checked={notifications.transactionAlerts}
                onCheckedChange={(checked) => setNotifications({...notifications, transactionAlerts: checked})}
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Configurações de Segurança</CardTitle>
            <CardDescription>Mantenha sua conta segura</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <Label>Autenticação de Dois Fatores</Label>
                <p className="text-sm text-gray-600">Adicione uma camada extra de segurança</p>
              </div>
              <Switch
                checked={security.twoFactorAuth}
                onCheckedChange={(checked) => setSecurity({...security, twoFactorAuth: checked})}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Alertas de Login</Label>
                <p className="text-sm text-gray-600">Seja notificado sobre novos logins</p>
              </div>
              <Switch
                checked={security.loginAlerts}
                onCheckedChange={(checked) => setSecurity({...security, loginAlerts: checked})}
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Data Tab */}
      {activeTab === 'data' && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Gerenciamento de Dados</CardTitle>
            <CardDescription>Exporte ou importe seus dados</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-2">
            <div className="flex gap-4">
              <Button onClick={handleExportData} variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Exportar Dados
              </Button>
              
              <Dialog open={showImportModal} onOpenChange={setShowImportModal}>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Importar Dados
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Importar Dados</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input
                      type="file"
                      accept=".csv"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleImportData(file);
                          setShowImportModal(false);
                        }
                      }}
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}