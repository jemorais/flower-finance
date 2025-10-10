'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { 
  Users, 
  UserPlus, 
  Search, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Gift,
  Heart,
  Star,
  TrendingUp,
  ShoppingBag,
  Filter,
  Download,
  MoreVertical,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';
import { Customer, Sale } from '@/types';

// Mock data para demonstracao
const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'Maria Silva',
    email: 'maria.silva@email.com',
    phone: '(11) 99999-1234',
    birthDate: new Date('1985-03-15'),
    address: {
      street: 'Rua das Flores',
      number: '123',
      neighborhood: 'Centro',
      city: 'Sao Paulo',
      state: 'SP',
      zipCode: '01234-567'
    },
    loyaltyPoints: 150,
    totalSpent: 2450.00,
    registrationDate: new Date('2023-06-15'),
    preferredContactMethod: 'whatsapp',
    lastPurchase: new Date('2024-01-10'),
    createdAt: new Date('2023-06-15')
  },
  {
    id: '2',
    name: 'Joao Santos',
    email: 'joao.santos@email.com',
    phone: '(11) 98888-5678',
    birthDate: new Date('1978-08-22'),
    address: {
      street: 'Av. Paulista',
      number: '456',
      neighborhood: 'Bela Vista',
      city: 'Sao Paulo',
      state: 'SP',
      zipCode: '01310-100'
    },
    loyaltyPoints: 320,
    totalSpent: 5680.00,
    registrationDate: new Date('2023-02-10'),
    preferredContactMethod: 'sms',
    lastPurchase: new Date('2024-01-08'),
    createdAt: new Date('2023-02-10')
  },
  {
    id: '3',
    name: 'Ana Costa',
    email: 'ana.costa@email.com',
    phone: '(11) 97777-9012',
    birthDate: new Date('1992-12-05'),
    address: {
      street: 'Rua dos Jardins',
      number: '789',
      neighborhood: 'Jardins',
      city: 'Sao Paulo',
      state: 'SP',
      zipCode: '04567-890'
    },
    loyaltyPoints: 85,
    totalSpent: 1230.00,
    registrationDate: new Date('2023-09-20'),
    preferredContactMethod: 'email',
    lastPurchase: new Date('2024-01-12'),
    createdAt: new Date('2023-09-20')
  }
];

// Mock data para historico de compras
const mockPurchaseHistory: Record<string, Sale[]> = {
  '1': [
    {
      id: 'sale-1',
      customerId: '1',
      date: new Date('2024-01-10'),
      items: [
        { id: 'item-1', productId: 'prod-1', product: {} as any, quantity: 2, unitPrice: 45.00, total: 90.00 },
        { id: 'item-2', productId: 'prod-2', product: {} as any, quantity: 1, unitPrice: 120.00, total: 120.00 }
      ],
      subtotal: 210.00,
      discount: 10.00,
      total: 200.00,
      paymentMethod: 'card',
      status: 'completed',
      createdAt: new Date('2024-01-10'),
      updatedAt: new Date('2024-01-10')
    }
  ],
  '2': [
    {
      id: 'sale-2',
      customerId: '2',
      date: new Date('2024-01-08'),
      items: [
        { id: 'item-3', productId: 'prod-3', product: {} as any, quantity: 1, unitPrice: 350.00, total: 350.00 }
      ],
      subtotal: 350.00,
      discount: 0,
      total: 350.00,
      paymentMethod: 'pix',
      status: 'completed',
      createdAt: new Date('2024-01-08'),
      updatedAt: new Date('2024-01-08')
    }
  ]
};

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    birthDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const filteredCustomers = mockCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCustomerLevel = (totalSpent: number) => {
    if (totalSpent >= 5000) return { level: 'VIP', color: 'bg-purple-100 text-purple-800' };
    if (totalSpent >= 2000) return { level: 'Gold', color: 'bg-yellow-100 text-yellow-800' };
    if (totalSpent >= 500) return { level: 'Silver', color: 'bg-gray-100 text-gray-800' };
    return { level: 'Bronze', color: 'bg-orange-100 text-orange-800' };
  };

  const getUpcomingBirthdays = () => {
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    
    return mockCustomers.filter(customer => {
      const birthday = new Date(customer.birthDate);
      birthday.setFullYear(today.getFullYear());
      return birthday >= today && birthday <= nextMonth;
    });
  };

  const handleAddCustomer = () => {
    // TODO: Implementar adicao de cliente
    console.log('Novo cliente:', newCustomer);
    setIsDialogOpen(false);
    setNewCustomer({
      name: '',
      email: '',
      phone: '',
      birthDate: '',
      street: '',
      city: '',
      state: '',
      zipCode: ''
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-8 p-8 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Gestao de Clientes
            </h1>
            <p className="text-gray-600 mt-2">Gerencie seus clientes e relacionamentos</p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg">
                <UserPlus className="mr-2 h-4 w-4" />
                Novo Cliente
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Adicionar Novo Cliente</DialogTitle>
                <DialogDescription>
                  Preencha as informacoes do cliente abaixo.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      placeholder="Nome completo"
                      value={newCustomer.name}
                      onChange={(e) => setNewCustomer({...newCustomer, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@exemplo.com"
                      value={newCustomer.email}
                      onChange={(e) => setNewCustomer({...newCustomer, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      placeholder="(11) 99999-9999"
                      value={newCustomer.phone}
                      onChange={(e) => setNewCustomer({...newCustomer, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthDate">Data de Nascimento</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={newCustomer.birthDate}
                      onChange={(e) => setNewCustomer({...newCustomer, birthDate: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="street">Endereco</Label>
                  <Input
                    id="street"
                    placeholder="Rua, numero, complemento"
                    value={newCustomer.street}
                    onChange={(e) => setNewCustomer({...newCustomer, street: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade</Label>
                    <Input
                      id="city"
                      placeholder="Sao Paulo"
                      value={newCustomer.city}
                      onChange={(e) => setNewCustomer({...newCustomer, city: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">Estado</Label>
                    <Select value={newCustomer.state} onValueChange={(value) => setNewCustomer({...newCustomer, state: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="UF" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SP">SP</SelectItem>
                        <SelectItem value="RJ">RJ</SelectItem>
                        <SelectItem value="MG">MG</SelectItem>
                        <SelectItem value="RS">RS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">CEP</Label>
                    <Input
                      id="zipCode"
                      placeholder="00000-000"
                      value={newCustomer.zipCode}
                      onChange={(e) => setNewCustomer({...newCustomer, zipCode: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={handleAddCustomer}>
                  Adicionar Cliente
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Estatisticas Rapidas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-pink-700">Total de Clientes</CardTitle>
              <div className="p-2 bg-pink-100 rounded-lg">
                <Users className="h-4 w-4 text-pink-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-pink-600">{mockCustomers.length}</div>
              <p className="text-xs text-pink-500 mt-1">
                +12% relacao ao mes anterior
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-700">Ticket Medio</CardTitle>
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">
                R$ {(mockCustomers.reduce((acc, c) => acc + c.totalSpent, 0) / mockCustomers.length).toFixed(0)}
              </div>
              <p className="text-xs text-blue-500 mt-1">
                +8% relacao ao mes anterior
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-700">Clientes VIP</CardTitle>
              <div className="p-2 bg-purple-100 rounded-lg">
                <Star className="h-4 w-4 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">
                {mockCustomers.filter(c => c.totalSpent >= 5000).length}
              </div>
              <p className="text-xs text-purple-500 mt-1">
                {((mockCustomers.filter(c => c.totalSpent >= 5000).length / mockCustomers.length) * 100).toFixed(1)}% do total
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-700">Aniversarios</CardTitle>
              <div className="p-2 bg-green-100 rounded-lg">
                <Gift className="h-4 w-4 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{getUpcomingBirthdays().length}</div>
              <p className="text-xs text-green-500 mt-1">
                Proximos 30 dias
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Busca e Filtros */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Search className="h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Buscar clientes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-0 bg-transparent focus:ring-0 text-lg"
                  />
                </div>
              </CardHeader>
            </Card>

            {/* Lista de Clientes */}
            <div className="space-y-3">
              {filteredCustomers.map((customer) => {
                const level = getCustomerLevel(customer.totalSpent);
                return (
                  <Card 
                    key={customer.id}
                    className="border-0 shadow-soft hover:shadow-lg transition-all duration-300 cursor-pointer bg-off-white/80 hover:bg-petal-pink/10"
                    onClick={() => setSelectedCustomer(customer)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between h-14">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full bg-petal-pink flex items-center justify-center text-white font-semibold text-sm shadow-soft">
                            {customer.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-soft-gray">{customer.name}</h3>
                            <div className="flex items-center space-x-4 text-xs text-soft-gray/70 mt-1">
                              <span className="flex items-center">
                                <Mail className="h-3 w-3 mr-1" />
                                {customer.email}
                              </span>
                              <span className="flex items-center">
                                <Phone className="h-3 w-3 mr-1" />
                                {customer.phone}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right space-y-1">
                          <Badge 
                            variant="secondary" 
                            className="bg-leaf-green/20 text-leaf-green border-0 text-xs"
                          >
                            {level.level}
                          </Badge>
                          <div className="text-xs text-soft-gray">
                            <div className="font-semibold">
                              R$ {customer.totalSpent.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </div>
                            <div>
                              {customer.loyaltyPoints} pontos
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            {/* Aniversarios */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-pink-50">
              <CardHeader>
                <CardTitle className="flex items-center text-pink-700">
                  <Gift className="mr-2 h-5 w-5" />
                  Aniversarios
                </CardTitle>
                <CardDescription>Proximos 30 dias</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {getUpcomingBirthdays().map((customer) => (
                  <Card key={customer.id} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-card to-card/80">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 flex items-center justify-center text-white font-bold shadow-lg">
                          {customer.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-lg">{customer.name}</p>
                          <p className="text-sm text-gray-600 flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {customer.birthDate.toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {getUpcomingBirthdays().length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <Gift className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Nenhum aniversario nos proximos 30 dias</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Top Clientes por Pontos */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-700">
                  <Star className="mr-2 h-5 w-5" />
                  Top Clientes
                </CardTitle>
                <CardDescription>Maiores pontuadores</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockCustomers
                  .sort((a, b) => b.loyaltyPoints - a.loyaltyPoints)
                  .slice(0, 5)
                  .map((customer, index) => (
                    <div key={customer.id} className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-card/50 to-card/30 hover:from-card/70 hover:to-card/50 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white' :
                          index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-500 text-white' :
                          index === 2 ? 'bg-gradient-to-r from-orange-400 to-orange-500 text-white' :
                          'bg-gradient-to-r from-purple-400 to-purple-500 text-white'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-semibold">{customer.name}</p>
                          <p className="text-sm text-gray-600">
                            {customer.loyaltyPoints} pontos
                          </p>
                        </div>
                      </div>
                      <Badge className={`${getCustomerLevel(customer.totalSpent).color} font-medium`} variant="secondary">
                        {getCustomerLevel(customer.totalSpent).level}
                      </Badge>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Modal de Detalhes do Cliente */}
        {selectedCustomer && (
          <Dialog open={!!selectedCustomer} onOpenChange={() => setSelectedCustomer(null)}>
            <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {selectedCustomer.name.charAt(0)}
                  </div>
                  <div>
                    <DialogTitle className="text-2xl">
                      <span>{selectedCustomer.name}</span>
                      <Badge 
                        className={`ml-3 ${getCustomerLevel(selectedCustomer.totalSpent).color}`}
                        variant="secondary"
                      >
                        {getCustomerLevel(selectedCustomer.totalSpent).level}
                      </Badge>
                    </DialogTitle>
                    <DialogDescription className="text-lg">
                      Detalhes completos do cliente
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <Tabs defaultValue="info" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="info">Informacoes</TabsTrigger>
                  <TabsTrigger value="history">Historico</TabsTrigger>
                  <TabsTrigger value="loyalty">Fidelidade</TabsTrigger>
                </TabsList>

                <TabsContent value="info" className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <Card className="border-0 shadow-md">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <Mail className="mr-2 h-5 w-5 text-blue-500" />
                          Contato
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Email:</span>
                          <span>{selectedCustomer.email}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Telefone:</span>
                          <span>{selectedCustomer.phone}</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-md">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <MapPin className="mr-2 h-5 w-5 text-green-500" />
                          Endereco
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-1">
                          <p>{selectedCustomer.address.street}</p>
                          <p>{selectedCustomer.address.city}, {selectedCustomer.address.state}</p>
                          <p>{selectedCustomer.address.zipCode}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <Card className="border-0 shadow-md">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <Calendar className="mr-2 h-5 w-5 text-purple-500" />
                          Datas Importantes
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Nascimento:</span>
                          <span>{selectedCustomer.birthDate.toLocaleDateString('pt-BR')}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Cliente desde:</span>
                          <span>{selectedCustomer.createdAt?.toLocaleDateString('pt-BR') || 'Não informado'}</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-md">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <ShoppingBag className="mr-2 h-5 w-5 text-orange-500" />
                          Resumo de Compras
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Total gasto:</span>
                          <span className="font-semibold">R$ {selectedCustomer.totalSpent.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Pontos:</span>
                          <span className="font-semibold">{selectedCustomer.loyaltyPoints}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Ultima compra:</span>
                          <span>{selectedCustomer.lastPurchase?.toLocaleDateString('pt-BR') || 'Nenhuma compra'}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="history" className="space-y-4">
                  <div className="space-y-4">
                    {mockPurchaseHistory[selectedCustomer.id]?.map((sale) => (
                      <Card key={sale.id}>
                        <CardHeader>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Pedido #{sale.id}</p>
                              <p className="text-sm text-gray-500">{sale.date.toLocaleDateString('pt-BR')}</p>
                            </div>
                            <Badge variant={sale.status === 'completed' ? 'default' : 'secondary'}>
                              {sale.status === 'completed' ? 'Concluido' : 'Pendente'}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {sale.items.map((item, index) => (
                              <div key={index} className="flex justify-between text-sm">
                                <span>{item.quantity}x Produto #{item.productId}</span>
                                <span>R$ {item.total.toFixed(2)}</span>
                              </div>
                            ))}
                          </div>
                          <div className="border-t pt-2 mt-2">
                            <div className="flex justify-between font-semibold">
                              <span>Total:</span>
                              <span>R$ {sale.total.toFixed(2)}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    {!mockPurchaseHistory[selectedCustomer.id] && (
                      <div className="text-center py-8 text-gray-500">
                        <ShoppingBag className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>Nenhuma compra registrada</p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="loyalty" className="space-y-6">
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
                    <CardHeader className="text-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Star className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">{selectedCustomer.loyaltyPoints} pontos</h3>
                      <div className="mt-2">
                        <Badge className={getCustomerLevel(selectedCustomer.totalSpent).color} variant="secondary">
                          Nivel {getCustomerLevel(selectedCustomer.totalSpent).level}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Proximo nivel: {selectedCustomer.totalSpent < 500 ? 'Silver (R$ 500)' :
                        selectedCustomer.totalSpent < 2000 ? 'Gold (R$ 2.000)' :
                        selectedCustomer.totalSpent < 5000 ? 'VIP (R$ 5.000)' : 'Maximo atingido!'}
                      </p>
                    </CardHeader>
                  </Card>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </DashboardLayout>
  );
}