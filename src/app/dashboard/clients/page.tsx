'use client';

import { useState } from 'react';
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const [clients, setClients] = useState([
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
  ]);

  // Filtrar clientes baseado no termo de busca
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newEmail || !newPhone) return;
    
    const newId = clients.length + 1;
    const newClient = {
      id: newId,
      name: newName,
      email: newEmail,
      phone: newPhone,
      totalSpent: 'R$ 0,00',
      lastPurchase: 'Nenhuma',
      status: 'Novo',
      statusColor: 'bg-green-100 text-green-800',
      avatar: newName.split(' ').map(n => n[0]).join('').toUpperCase(),
      avatarColor: 'bg-green-500'
    };
    setClients([...clients, newClient]);
    setNewName('');
    setNewEmail('');
    setNewPhone('');
    setIsOpen(false);
  };

  return (
    <div className="p-8 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-lg">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Gestão de Clientes</h1>
          <p className="text-white/80 text-sm">Gerencie seus clientes e relacionamentos</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button 
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
            >
              <Plus className="w-4 h-4 mr-2" />
              Novo Cliente
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cadastrar Novo Cliente</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                placeholder="Nome" 
                value={newName} 
                onChange={(e) => setNewName(e.target.value)} 
              />
              <Input 
                placeholder="Email" 
                value={newEmail} 
                onChange={(e) => setNewEmail(e.target.value)} 
              />
              <Input 
                placeholder="Telefone" 
                value={newPhone} 
                onChange={(e) => setNewPhone(e.target.value)} 
              />
              <DialogFooter>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Total de Clientes */}
        <Card className="border-l-4 border-l-rose-400 bg-rose-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-sm font-medium text-rose-700">Total de Clientes</CardTitle>
              <div className="flex items-center mt-1">
                <Users className="h-4 w-4 text-rose-500 mr-1" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-rose-800">{clients.length}</div>
            <div className="flex items-center text-xs text-rose-600 mt-1">
              +2 novos este mês
            </div>
          </CardContent>
        </Card>

        {/* Clientes VIP */}
        <Card className="border-l-4 border-l-red-400 bg-red-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-sm font-medium text-red-700">Clientes VIP</CardTitle>
              <div className="flex items-center mt-1">
                <Star className="h-4 w-4 text-red-500 mr-1" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-800">1</div>
            <div className="flex items-center text-xs text-red-600 mt-1">
              33% do total de clientes
            </div>
          </CardContent>
        </Card>

        {/* Ticket Médio */}
        <Card className="border-l-4 border-l-green-400 bg-green-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-sm font-medium text-green-700">Ticket Médio</CardTitle>
              <div className="flex items-center mt-1">
                <DollarSign className="h-4 w-4 text-green-500 mr-1" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">R$ 3120</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              por cliente no período
            </div>
          </CardContent>
        </Card>

        {/* Aniversários */}
        <Card className="border-l-4 border-l-rose-400 bg-rose-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-sm font-medium text-rose-700">Aniversários</CardTitle>
              <div className="flex items-center mt-1">
                <Gift className="h-4 w-4 text-rose-500 mr-1" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-rose-800">2</div>
            <div className="flex items-center text-xs text-rose-600 mt-1">
              este mês
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">Buscar Clientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar por nome, email ou telefone..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Clients List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">Lista de Clientes</CardTitle>
          <CardDescription className="text-gray-600">
            {filteredClients.length} cliente{filteredClients.length !== 1 ? 's' : ''} encontrado{filteredClients.length !== 1 ? 's' : ''}
            {searchTerm && ` para "${searchTerm}"`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredClients.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                {searchTerm ? 'Nenhum cliente encontrado para a busca realizada.' : 'Nenhum cliente cadastrado.'}
              </div>
            ) : (
              filteredClients.map((client) => (
                <div key={client.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className={`${client.avatarColor} text-white font-semibold`}>
                        {client.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-gray-900 flex items-center gap-2">
                        {client.name}
                        <Badge className={`text-xs ${client.statusColor}`}>
                          {client.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-4 mt-1">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {client.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {client.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{client.totalSpent}</div>
                    <div className="text-xs text-gray-500">Última compra: {client.lastPurchase}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}