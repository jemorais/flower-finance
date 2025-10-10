'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, Search, Filter, Check, X, Clock, MessageSquare, Gift, Calendar, TrendingUp } from 'lucide-react';


// Mock data para demonstracao
const mockNotifications = [
  {
    id: 1,
    type: 'Aniversario',
    title: 'Aniversario de Cliente',
    message: 'Maria Silva faz aniversario hoje!',
    customer: 'Maria Silva',
    city: 'Sao Paulo',
    timestamp: '2024-01-15T10:30:00Z',
    status: 'unread',
    priority: 'high',
    action: 'Mensagem de aniversario enviada'
  },
  {
    id: 2,
    type: 'Promocao',
    title: 'Promocao Enviada',
    message: 'Promocao Dia das Maes enviada para Joao Santos',
    customer: 'Joao Santos',
    city: 'Rio de Janeiro',
    timestamp: '2024-01-15T09:15:00Z',
    status: 'read',
    priority: 'medium',
    action: 'Promocao Dia das Maes'
  },
  {
    id: 3,
    type: 'Venda',
    title: 'Nova Venda Registrada',
    message: 'Ana Costa realizou uma compra de R$ 250,00',
    customer: 'Ana Costa',
    city: 'Belo Horizonte',
    timestamp: '2024-01-15T08:45:00Z',
    status: 'unread',
    priority: 'high',
    action: 'Venda confirmada'
  },
  {
    id: 4,
    type: 'Sistema',
    title: 'Backup Realizado',
    message: 'Backup automatico dos dados concluido com sucesso',
    customer: null,
    city: null,
    timestamp: '2024-01-15T02:00:00Z',
    status: 'read',
    priority: 'low',
    action: 'Sistema atualizado'
  }
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Filtrar notificacoes
  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (notification.customer && notification.customer.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = filterType === 'all' || notification.type === filterType;
    const matchesStatus = filterStatus === 'all' || notification.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, status: 'read' }
          : notification
      )
    );
  };

  const markAsUnread = (id: number) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, status: 'unread' }
          : notification
      )
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'Aniversario':
        return <Calendar className="h-4 w-4" />;
      case 'Promocao':
        return <Gift className="h-4 w-4" />;
      case 'Venda':
        return <TrendingUp className="h-4 w-4" />;
      case 'Sistema':
        return <Bell className="h-4 w-4" />;
      default:
        return <MessageSquare className="h-4 w-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('pt-BR');
  };

  const unreadCount = notifications.filter(n => n.status === 'unread').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-100 to-purple-100 flex items-center justify-center shadow-lg">
            <Bell className="w-6 h-6 text-rose-600" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Notificações
            </h1>
            <p className="text-gray-600 mt-1">
              Gerencie suas notificações e alertas do sistema
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="text-sm bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 border-rose-200">
            {unreadCount} nao lidas
          </Badge>
          <Button variant="outline" size="sm" className="text-pink-700 hover:text-pink-800 hover:bg-pink-100">
            <Bell className="h-4 w-4 mr-2" />
            Marcar todas como lidas
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Buscar notificacoes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="all">Todos os tipos</option>
            <option value="Aniversario">Aniversario</option>
            <option value="Promocao">Promocao</option>
            <option value="Venda">Venda</option>
            <option value="Sistema">Sistema</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="all">Todos os status</option>
            <option value="unread">Nao lidas</option>
            <option value="read">Lidas</option>
          </select>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">Todas</TabsTrigger>
          <TabsTrigger value="Aniversario">Aniversarios</TabsTrigger>
          <TabsTrigger value="Promocao">Promocoes</TabsTrigger>
          <TabsTrigger value="Venda">Vendas</TabsTrigger>
          <TabsTrigger value="Sistema">Sistema</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <Card className="bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="flex items-center justify-center py-8">
                <div className="text-center">
                  <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Nenhuma notificacao encontrada
                  </h3>
                  <p className="text-gray-500">
                    Tente ajustar os filtros ou termos de busca
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {filteredNotifications.map((notification) => (
                <Card 
                  key={notification.id} 
                  className={`bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    notification.status === 'unread' 
                      ? 'border-l-4 border-l-blue-500' 
                      : ''
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        <div className={`p-2 rounded-full ${
                          notification.status === 'unread' 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {getNotificationIcon(notification.type)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className={`text-sm font-medium ${
                              notification.status === 'unread' 
                                ? 'text-gray-900' 
                                : 'text-gray-700'
                            }`}>
                              {notification.title}
                            </h3>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${getPriorityColor(notification.priority)}`}
                            >
                              {notification.priority}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {notification.type}
                            </Badge>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-2">
                            {notification.message}
                          </p>
                          
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{formatTimestamp(notification.timestamp)}</span>
                            </div>
                            {notification.customer && (
                              <div className="flex items-center space-x-1">
                                <span>Cliente: {notification.customer}</span>
                              </div>
                            )}
                            {notification.city && (
                              <div className="flex items-center space-x-1">
                                <span>Cidade: {notification.city}</span>
                              </div>
                            )}
                          </div>
                          
                          {notification.action && (
                            <div className="mt-2">
                              <Badge variant="outline" className="text-xs">
                                {notification.action}
                              </Badge>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1 ml-4">
                        {notification.status === 'unread' ? (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => markAsRead(notification.id)}
                            className="h-8 w-8 p-0"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => markAsUnread(notification.id)}
                            className="h-8 w-8 p-0"
                          >
                            <Bell className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteNotification(notification.id)}
                          className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {['Aniversario', 'Promocao', 'Venda', 'Sistema'].map((type) => (
          <TabsContent key={type} value={type} className="space-y-4">
            <div className="space-y-3">
              {filteredNotifications
                .filter(notification => notification.type === type)
                .map((notification) => (
                  <Card 
                    key={notification.id} 
                    className={`bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 ${
                      notification.status === 'unread' 
                        ? 'border-l-4 border-l-blue-500' 
                        : ''
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3 flex-1">
                          <div className={`p-2 rounded-full ${
                            notification.status === 'unread' 
                              ? 'bg-blue-100 text-blue-600' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {getNotificationIcon(notification.type)}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className={`text-sm font-medium ${
                                notification.status === 'unread' 
                                  ? 'text-gray-900' 
                                  : 'text-gray-700'
                              }`}>
                                {notification.title}
                              </h3>
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${getPriorityColor(notification.priority)}`}
                              >
                                {notification.priority}
                              </Badge>
                            </div>
                            
                            <p className="text-sm text-gray-600 mb-2">
                              {notification.message}
                            </p>
                            
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" />
                                <span>{formatTimestamp(notification.timestamp)}</span>
                              </div>
                              {notification.customer && (
                                <div className="flex items-center space-x-1">
                                  <span>Cliente: {notification.customer}</span>
                                </div>
                              )}
                              {notification.city && (
                                <div className="flex items-center space-x-1">
                                  <span>Cidade: {notification.city}</span>
                                </div>
                              )}
                            </div>
                            
                            {notification.action && (
                              <div className="mt-2">
                                <Badge variant="outline" className="text-xs">
                                  {notification.action}
                                </Badge>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-1 ml-4">
                          {notification.status === 'unread' ? (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => markAsRead(notification.id)}
                              className="h-8 w-8 p-0"
                            >
                              <Check className="h-4 w-4" />
                            </Button>
                          ) : (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => markAsUnread(notification.id)}
                              className="h-8 w-8 p-0"
                            >
                              <Bell className="h-4 w-4" />
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteNotification(notification.id)}
                            className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}