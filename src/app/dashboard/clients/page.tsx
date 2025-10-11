'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Users, 
  DollarSign, 
  Star, 
  Calendar,
  Search,
  Plus,
  Gift,
  Phone,
  Mail,
  MapPin,
  MoreVertical
} from 'lucide-react';

const clientsData = [
  {
    id: 1,
    name: 'João Santos',
    email: 'joao.santos@email.com',
    phone: '(11) 99999-9999',
    totalSpent: 'R$ 2.450,00',
    lastPurchase: '5 dias atrás',
    status: 'VIP',
    statusColor: 'bg-yellow-100 text-yellow-800',
    avatar: 'JS',
    avatarColor: 'bg-pink-500'
  },
  {
    id: 2,
    name: 'Maria Silva',
    email: 'maria.silva@email.com',
    phone: '(11) 88888-8888',
    totalSpent: 'R$ 1.890,00',
    lastPurchase: '2 dias atrás',
    status: 'Gold',
    statusColor: 'bg-orange-100 text-orange-800',
    avatar: 'MS',
    avatarColor: 'bg-blue-500'
  },
  {
    id: 3,
    name: 'Ana Costa',
    email: 'ana.costa@email.com',
    phone: '(11) 77777-7777',
    totalSpent: 'R$ 1.230,00',
    lastPurchase: '1 semana atrás',
    status: 'Silver',
    statusColor: 'bg-gray-100 text-gray-800',
    avatar: 'AC',
    avatarColor: 'bg-purple-500'
  }
];

const topClients = [
  { name: 'João Santos', category: 'VIP', color: 'text-yellow-600' },
  { name: 'Maria Silva', category: 'Gold', color: 'text-orange-600' },
  { name: 'Ana Costa', category: 'Silver', color: 'text-gray-600' }
];

export default function ClientsPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-pink-600 mb-1">Gestão de Clientes</h1>
          <p className="text-gray-600 text-sm">Gerencie seus clientes e relacionamentos</p>
        </div>
        <Button className="bg-pink-500 hover:bg-pink-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Novo Cliente
        </Button>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Total de Clientes */}
          <Card className="bg-pink-50 border-pink-100 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-pink-700">Total de Clientes</CardTitle>
                <div className="flex items-center mt-1">
                  <Users className="h-4 w-4 text-pink-600 mr-1" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-pink-900">3</div>
              <div className="flex items-center text-xs text-pink-600 mt-1">
                +2 novos este mês
              </div>
            </CardContent>
          </Card>

          {/* Ticket Médio */}
          <Card className="bg-blue-50 border-blue-100 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-blue-700">Ticket Médio</CardTitle>
                <div className="flex items-center mt-1">
                  <DollarSign className="h-4 w-4 text-blue-600 mr-1" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">R$ 3120</div>
              <div className="flex items-center text-xs text-blue-600 mt-1">
                por cliente no período
              </div>
            </CardContent>
          </Card>

          {/* Clientes VIP */}
          <Card className="bg-purple-50 border-purple-100 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-purple-700">Clientes VIP</CardTitle>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-purple-600 mr-1" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-900">1</div>
              <div className="flex items-center text-xs text-purple-600 mt-1">
                33,3% do total
              </div>
            </CardContent>
          </Card>

          {/* Aniversários */}
          <Card className="bg-green-50 border-green-100 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-green-700">Aniversários</CardTitle>
                <div className="flex items-center mt-1">
                  <Gift className="h-4 w-4 text-green-600 mr-1" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">0</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                próximos 30 dias
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar clientes..."
                  className="pl-10"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Clients List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">Lista de Clientes</CardTitle>
                    <CardDescription className="text-gray-600">Gerencie informações dos seus clientes</CardDescription>
                  </div>
                  <Badge className="bg-red-100 text-red-800">
                    Aniversários
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clientsData.map((client) => (
                    <div key={client.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className={`${client.avatarColor} text-white font-semibold`}>
                            {client.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-gray-900">{client.name}</div>
                          <div className="text-sm text-gray-500 flex items-center space-x-4">
                            <span className="flex items-center">
                              <Mail className="w-3 h-3 mr-1" />
                              {client.email}
                            </span>
                            <span className="flex items-center">
                              <Phone className="w-3 h-3 mr-1" />
                              {client.phone}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{client.totalSpent}</div>
                        <div className="text-xs text-gray-500">{client.lastPurchase}</div>
                        <Badge className={`mt-1 ${client.statusColor}`}>
                          {client.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Clients Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  Top Clientes
                </CardTitle>
                <CardDescription className="text-gray-600">Maiores compradores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topClients.map((client, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        index === 0 ? 'bg-yellow-100 text-yellow-800' :
                        index === 1 ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{client.name}</div>
                        <div className={`text-xs ${client.color}`}>{client.category}</div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {index === 0 ? 'VIP' : index === 1 ? 'Gold' : 'Silver'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Birthday Alert */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                  <Gift className="w-5 h-5 text-pink-500 mr-2" />
                  Aniversários
                </CardTitle>
                <CardDescription className="text-gray-600">Próximos 30 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Gift className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500 text-sm">Nenhum aniversário nos próximos 30 dias</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  );
}