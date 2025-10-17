'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
  MoreVertical,
  Bell,
  AlertCircle
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  address?: {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    zipCode: string;
    state: string;
  };
  totalSpent: string;
  lastPurchase: string;
  status: string;
  statusColor: string;
  avatar: string;
  avatarColor: string;
  birthday: string | null;
  specialDateType: string | null;
  specialDate: string | null;
}

interface ClientWithEvent extends Client {
  nextBirthday?: Date;
  nextAnniversary?: Date;
  daysUntil: number;
  formattedDate: string;
  eventType: string;
}

const topClients = [
  { name: 'João Santos', category: 'VIP', color: 'text-yellow-600' },
  { name: 'Maria Silva', category: '', color: 'text-gray-600' },
  { name: 'Ana Costa', category: '', color: 'text-gray-600' }
];

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newStreet, setNewStreet] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newComplement, setNewComplement] = useState('');
  const [newNeighborhood, setNewNeighborhood] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newZipCode, setNewZipCode] = useState('');
  const [newState, setNewState] = useState('');
  const [newBirthday, setNewBirthday] = useState('');
  const [specialDateType, setSpecialDateType] = useState('');
  const [specialDate, setSpecialDate] = useState('');
  const [reminderDays, setReminderDays] = useState(30); // Configuração de quantos dias antes avisar
  
  // Estados para edição
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const [clients, setClients] = useState<Client[]>([
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
      avatarColor: 'bg-pink-500',
      birthday: '15/03/1985',
      specialDateType: 'casamento',
      specialDate: '20/06/2010',
      address: {
        street: 'Rua das Flores',
        number: '123',
        complement: 'Apto 45',
        neighborhood: 'Jardim Botânico',
        city: 'São Paulo',
        zipCode: '01234-567',
        state: 'SP'
      }
    },
    {
      id: 2,
      name: 'Maria Silva',
      email: 'maria.silva@email.com',
      phone: '(11) 88888-8888',
      totalSpent: 'R$ 1.890,00',
      lastPurchase: '2 dias atrás',
      status: 'Ativo',
      statusColor: 'bg-green-100 text-green-800',
      avatar: 'MS',
      avatarColor: 'bg-purple-500',
      birthday: '25/12/1990',
      specialDateType: null,
      specialDate: null,
      address: {
        street: 'Avenida Paulista',
        number: '1000',
        complement: '',
        neighborhood: 'Bela Vista',
        city: 'São Paulo',
        zipCode: '01310-100',
        state: 'SP'
      }
    },
    {
      id: 3,
      name: 'Ana Costa',
      email: 'ana.costa@email.com',
      phone: '(11) 77777-7777',
      totalSpent: 'R$ 1.230,00',
      lastPurchase: '1 semana atrás',
      status: 'Ativo',
      statusColor: 'bg-green-100 text-green-800',
      avatar: 'AC',
      avatarColor: 'bg-blue-500',
      birthday: '10/07/1988',
      specialDateType: 'namoro',
      specialDate: '12/09/2015',
      address: {
        street: 'Rua Augusta',
        number: '456',
        complement: 'Casa 2',
        neighborhood: 'Consolação',
        city: 'São Paulo',
        zipCode: '01305-000',
        state: 'SP'
      }
    }
  ]);

  const getUpcomingBirthdays = (): ClientWithEvent[] => {
    const today = new Date();
    const reminderDaysFromNow = new Date(today.getTime() + reminderDays * 24 * 60 * 60 * 1000);
    
    const upcomingEvents: ClientWithEvent[] = [];
    
    clients
      .filter(client => client.birthday)
      .forEach(client => {
        if (!client.birthday) return;
        
        // Converter data brasileira (dd/mm/yyyy) para Date
        const [day, month, year] = client.birthday.split('/').map(Number);
        const birthday = new Date(year, month - 1, day);
        
        const currentYear = today.getFullYear();
        const birthdayThisYear = new Date(currentYear, month - 1, day);
        const birthdayNextYear = new Date(currentYear + 1, month - 1, day);
        
        let nextBirthday = birthdayThisYear >= today ? birthdayThisYear : birthdayNextYear;
        const daysUntil = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        
        if ((birthdayThisYear >= today && birthdayThisYear <= reminderDaysFromNow) ||
            (birthdayNextYear >= today && birthdayNextYear <= reminderDaysFromNow)) {
          upcomingEvents.push({
            ...client,
            nextBirthday,
            daysUntil,
            formattedDate: nextBirthday.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
            eventType: 'aniversario'
          });
        }
      });
    
    return upcomingEvents.sort((a, b) => a.daysUntil - b.daysUntil);
  };

  const getUpcomingSpecialDates = (): ClientWithEvent[] => {
    const today = new Date();
    const reminderDaysFromNow = new Date(today.getTime() + reminderDays * 24 * 60 * 60 * 1000);
    
    const upcomingEvents: ClientWithEvent[] = [];
    
    clients
      .filter(client => client.specialDate && client.specialDateType)
      .forEach(client => {
        if (!client.specialDate) return;
        
        // Converter data brasileira (dd/mm/yyyy) para Date
        const [day, month, year] = client.specialDate.split('/').map(Number);
        const specialDate = new Date(year, month - 1, day);
        
        const currentYear = today.getFullYear();
        const specialDateThisYear = new Date(currentYear, month - 1, day);
        const specialDateNextYear = new Date(currentYear + 1, month - 1, day);
        
        let nextSpecialDate = specialDateThisYear >= today ? specialDateThisYear : specialDateNextYear;
        const daysUntil = Math.ceil((nextSpecialDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        
        if ((specialDateThisYear >= today && specialDateThisYear <= reminderDaysFromNow) ||
            (specialDateNextYear >= today && specialDateNextYear <= reminderDaysFromNow)) {
          upcomingEvents.push({
            ...client,
            nextAnniversary: nextSpecialDate,
            daysUntil,
            formattedDate: nextSpecialDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
            eventType: client.specialDateType || 'evento'
          });
        }
      });
    
    return upcomingEvents.sort((a, b) => a.daysUntil - b.daysUntil);
  };

  const upcomingBirthdays = getUpcomingBirthdays();
  const upcomingSpecialDates = getUpcomingSpecialDates();
  const allUpcomingEvents = [...upcomingBirthdays, ...upcomingSpecialDates].sort((a, b) => a.daysUntil - b.daysUntil);

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newClient = {
      id: clients.length + 1,
      name: newName,
      email: newEmail,
      phone: newPhone,
      address: {
        street: newStreet,
        number: newNumber,
        complement: newComplement,
        neighborhood: newNeighborhood,
        city: newCity,
        zipCode: newZipCode,
        state: newState
      },
      birthday: newBirthday || null,
      specialDateType: specialDateType || null,
      specialDate: specialDate || null,
      totalSpent: 'R$ 0,00',
      lastPurchase: 'Nunca',
      status: 'Bronze',
      statusColor: 'bg-amber-100 text-amber-800',
      avatar: newName.split(' ').map(n => n[0]).join('').toUpperCase(),
      avatarColor: 'bg-gray-500'
    };
    
    setClients([...clients, newClient]);
    setNewName('');
    setNewEmail('');
    setNewPhone('');
    setNewStreet('');
    setNewNumber('');
    setNewComplement('');
    setNewNeighborhood('');
    setNewCity('');
    setNewZipCode('');
    setNewState('');
    setNewBirthday('');
    setSpecialDateType('');
    setSpecialDate('');
    setIsOpen(false);
  };

  const handleEditClient = (client: Client) => {
    setEditingClient(client);
    setNewName(client.name);
    setNewEmail(client.email);
    setNewPhone(client.phone);
    setNewStreet(client.address?.street || '');
    setNewNumber(client.address?.number || '');
    setNewComplement(client.address?.complement || '');
    setNewNeighborhood(client.address?.neighborhood || '');
    setNewCity(client.address?.city || '');
    setNewZipCode(client.address?.zipCode || '');
    setNewState(client.address?.state || '');
    setNewBirthday(client.birthday || '');
    setSpecialDateType(client.specialDateType || '');
    setSpecialDate(client.specialDate || '');
    setIsEditDialogOpen(true);
  };

  const handleUpdateClient = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!editingClient) return;
    
    const updatedClient = {
      ...editingClient,
      name: newName,
      email: newEmail,
      phone: newPhone,
      address: {
        street: newStreet,
        number: newNumber,
        complement: newComplement,
        neighborhood: newNeighborhood,
        city: newCity,
        zipCode: newZipCode,
        state: newState
      },
      birthday: newBirthday || null,
      specialDateType: specialDateType || null,
      specialDate: specialDate || null,
      avatar: newName.split(' ').map(n => n[0]).join('').toUpperCase(),
    };
    
    setClients(clients.map(client => 
      client.id === editingClient.id ? updatedClient : client
    ));
    
    // Limpar formulário
    setNewName('');
    setNewEmail('');
    setNewPhone('');
    setNewStreet('');
    setNewNumber('');
    setNewComplement('');
    setNewNeighborhood('');
    setNewCity('');
    setNewZipCode('');
    setNewState('');
    setNewBirthday('');
    setSpecialDateType('');
    setSpecialDate('');
    setEditingClient(null);
    setIsEditDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-pink-25 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-lg">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Gestão de Clientes</h1>
            <p className="text-white/80 text-sm">Gerencie seus clientes e relacionamentos</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Botão de Alertas */}
            {allUpcomingEvents.length > 0 && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="bg-white text-pink-600 hover:bg-pink-50"
                  >
                    <Bell className="h-4 w-4 mr-2" />
                    Alertas
                    <Badge variant="secondary" className="ml-2 bg-white text-pink-600">
                      {allUpcomingEvents.length}
                    </Badge>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                   <DialogHeader>
                     <DialogTitle className="flex items-center gap-2">
                       <Bell className="h-5 w-5 text-pink-600" />
                       Próximas Datas Especiais
                     </DialogTitle>
                   </DialogHeader>
                   
                   {/* Configuração de Lembretes */}
                   <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                     <div className="flex items-center justify-between">
                       <label className="text-sm font-medium text-gray-700">
                         Avisar com antecedência de:
                       </label>
                       <div className="flex items-center gap-2">
                         <Input
                           type="number"
                           value={reminderDays}
                           onChange={(e) => setReminderDays(Number(e.target.value))}
                           className="w-16 h-8 text-center"
                           min="1"
                           max="365"
                         />
                         <span className="text-sm text-gray-600">dias</span>
                       </div>
                     </div>
                   </div>
                   
                   <div className="space-y-3 max-h-96 overflow-y-auto">
                    {allUpcomingEvents.map((client, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className={client.avatarColor}>
                              {client.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-900">{client.name}</p>
                            <p className="text-sm text-gray-600">
                              {client.eventType === 'aniversario' ? 'Aniversário' : 
                               client.eventType === 'casamento' ? 'Aniversário de Casamento' :
                               client.eventType === 'namoro' ? 'Aniversário de Namoro' :
                               client.eventType === 'formatura' ? 'Formatura' :
                               client.eventType === 'primeiro-emprego' ? 'Primeiro Emprego' :
                               client.eventType === 'aposentadoria' ? 'Aposentadoria' :
                               client.eventType === 'outro' ? 'Data Especial' : 'Evento'}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-pink-600">
                            {client.formattedDate}
                          </p>
                          <p className="text-xs text-gray-500">
                            {client.daysUntil === 0 ? 'Hoje!' : 
                             client.daysUntil === 1 ? 'Amanhã' : 
                             `${client.daysUntil} dias`}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            )}
            
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="bg-white text-pink-600 hover:bg-pink-50">
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Cliente
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Adicionar Novo Cliente</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Nome</label>
                    <Input
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="Nome completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      type="email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      placeholder="email@exemplo.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Telefone</label>
                    <Input
                      value={newPhone}
                      onChange={(e) => setNewPhone(e.target.value)}
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-medium mb-3 text-gray-700">Endereço para Entrega</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="col-span-2">
                        <label className="text-sm font-medium text-gray-600">Rua/Avenida</label>
                        <Input
                          value={newStreet}
                          onChange={(e) => setNewStreet(e.target.value)}
                          placeholder="Ex: Rua das Flores"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Número</label>
                        <Input
                          value={newNumber}
                          onChange={(e) => setNewNumber(e.target.value)}
                          placeholder="123"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Complemento</label>
                        <Input
                          value={newComplement}
                          onChange={(e) => setNewComplement(e.target.value)}
                          placeholder="Apto, Casa, etc."
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Bairro</label>
                        <Input
                          value={newNeighborhood}
                          onChange={(e) => setNewNeighborhood(e.target.value)}
                          placeholder="Ex: Centro"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Cidade</label>
                        <Input
                          value={newCity}
                          onChange={(e) => setNewCity(e.target.value)}
                          placeholder="Ex: São Paulo"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">CEP</label>
                        <Input
                          value={newZipCode}
                          onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, '');
                            if (value.length >= 5) value = value.substring(0,5) + '-' + value.substring(5,8);
                            setNewZipCode(value);
                          }}
                          placeholder="12345-678"
                          maxLength={9}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Estado</label>
                        <Select value={newState} onValueChange={setNewState} required>
                          <SelectTrigger>
                            <SelectValue placeholder="UF" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="AC">AC</SelectItem>
                            <SelectItem value="AL">AL</SelectItem>
                            <SelectItem value="AP">AP</SelectItem>
                            <SelectItem value="AM">AM</SelectItem>
                            <SelectItem value="BA">BA</SelectItem>
                            <SelectItem value="CE">CE</SelectItem>
                            <SelectItem value="DF">DF</SelectItem>
                            <SelectItem value="ES">ES</SelectItem>
                            <SelectItem value="GO">GO</SelectItem>
                            <SelectItem value="MA">MA</SelectItem>
                            <SelectItem value="MT">MT</SelectItem>
                            <SelectItem value="MS">MS</SelectItem>
                            <SelectItem value="MG">MG</SelectItem>
                            <SelectItem value="PA">PA</SelectItem>
                            <SelectItem value="PB">PB</SelectItem>
                            <SelectItem value="PR">PR</SelectItem>
                            <SelectItem value="PE">PE</SelectItem>
                            <SelectItem value="PI">PI</SelectItem>
                            <SelectItem value="RJ">RJ</SelectItem>
                            <SelectItem value="RN">RN</SelectItem>
                            <SelectItem value="RS">RS</SelectItem>
                            <SelectItem value="RO">RO</SelectItem>
                            <SelectItem value="RR">RR</SelectItem>
                            <SelectItem value="SC">SC</SelectItem>
                            <SelectItem value="SP">SP</SelectItem>
                            <SelectItem value="SE">SE</SelectItem>
                            <SelectItem value="TO">TO</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-medium mb-3 text-gray-700">Datas Especiais (Opcional)</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Aniversário</label>
                        <Input
                          type="text"
                          placeholder="dd/mm/aaaa"
                          value={newBirthday}
                          onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, '');
                            if (value.length >= 2) value = value.substring(0,2) + '/' + value.substring(2);
                            if (value.length >= 5) value = value.substring(0,5) + '/' + value.substring(5,9);
                            setNewBirthday(value);
                          }}
                          maxLength={10}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Data Especial</label>
                        <Select value={specialDateType} onValueChange={setSpecialDateType}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o tipo de data especial" />
                          </SelectTrigger>
                          <SelectContent>
                        <SelectItem value="casamento">Aniversário de Casamento</SelectItem>
                        <SelectItem value="namoro">Aniversário de Namoro</SelectItem>
                      </SelectContent>
                        </Select>
                        {specialDateType && (
                          <Input
                            type="text"
                            placeholder="dd/mm/aaaa"
                            value={specialDate}
                            onChange={(e) => {
                              let value = e.target.value.replace(/\D/g, '');
                              if (value.length >= 2) value = value.substring(0,2) + '/' + value.substring(2);
                              if (value.length >= 5) value = value.substring(0,5) + '/' + value.substring(5,9);
                              setSpecialDate(value);
                            }}
                            maxLength={10}
                            className="mt-2"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <DialogFooter>
                    <Button type="submit" className="w-full">Adicionar Cliente</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            
            {/* Dialog de Edição */}
            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Editar Cliente</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleUpdateClient} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Nome</label>
                    <Input
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="Nome completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      type="email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      placeholder="email@exemplo.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Telefone</label>
                    <Input
                      value={newPhone}
                      onChange={(e) => setNewPhone(e.target.value)}
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-medium mb-3 text-gray-700">Endereço para Entrega</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="col-span-2">
                        <label className="text-sm font-medium">Rua/Avenida</label>
                        <Input
                          value={newStreet}
                          onChange={(e) => setNewStreet(e.target.value)}
                          placeholder="Nome da rua"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Número</label>
                        <Input
                          value={newNumber}
                          onChange={(e) => setNewNumber(e.target.value)}
                          placeholder="123"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Complemento</label>
                        <Input
                          value={newComplement}
                          onChange={(e) => setNewComplement(e.target.value)}
                          placeholder="Apto, casa..."
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Bairro</label>
                        <Input
                          value={newNeighborhood}
                          onChange={(e) => setNewNeighborhood(e.target.value)}
                          placeholder="Nome do bairro"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Cidade</label>
                        <Input
                          value={newCity}
                          onChange={(e) => setNewCity(e.target.value)}
                          placeholder="Nome da cidade"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">CEP</label>
                        <Input
                          value={newZipCode}
                          onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, '');
                            if (value.length > 5) {
                              value = value.replace(/(\d{5})(\d)/, '$1-$2');
                            }
                            setNewZipCode(value);
                          }}
                          placeholder="12345-678"
                          maxLength={9}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Estado</label>
                        <Select value={newState} onValueChange={setNewState}>
                          <SelectTrigger>
                            <SelectValue placeholder="UF" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="AC">AC</SelectItem>
                            <SelectItem value="AL">AL</SelectItem>
                            <SelectItem value="AP">AP</SelectItem>
                            <SelectItem value="AM">AM</SelectItem>
                            <SelectItem value="BA">BA</SelectItem>
                            <SelectItem value="CE">CE</SelectItem>
                            <SelectItem value="DF">DF</SelectItem>
                            <SelectItem value="ES">ES</SelectItem>
                            <SelectItem value="GO">GO</SelectItem>
                            <SelectItem value="MA">MA</SelectItem>
                            <SelectItem value="MT">MT</SelectItem>
                            <SelectItem value="MS">MS</SelectItem>
                            <SelectItem value="MG">MG</SelectItem>
                            <SelectItem value="PA">PA</SelectItem>
                            <SelectItem value="PB">PB</SelectItem>
                            <SelectItem value="PR">PR</SelectItem>
                            <SelectItem value="PE">PE</SelectItem>
                            <SelectItem value="PI">PI</SelectItem>
                            <SelectItem value="RJ">RJ</SelectItem>
                            <SelectItem value="RN">RN</SelectItem>
                            <SelectItem value="RS">RS</SelectItem>
                            <SelectItem value="RO">RO</SelectItem>
                            <SelectItem value="RR">RR</SelectItem>
                            <SelectItem value="SC">SC</SelectItem>
                            <SelectItem value="SP">SP</SelectItem>
                            <SelectItem value="SE">SE</SelectItem>
                            <SelectItem value="TO">TO</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Aniversário</label>
                    <Input
                      value={newBirthday}
                      onChange={(e) => setNewBirthday(e.target.value)}
                      placeholder="DD/MM"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">Data Especial</label>
                    <Select value={specialDateType} onValueChange={setSpecialDateType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de data especial" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="casamento">Aniversário de Casamento</SelectItem>
                        <SelectItem value="namoro">Aniversário de Namoro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {specialDateType && (
                    <div>
                      <Input
                        value={specialDate}
                        onChange={(e) => setSpecialDate(e.target.value)}
                        placeholder="DD/MM"
                      />
                    </div>
                  )}

                  <DialogFooter>
                    <Button type="submit" className="w-full">Atualizar Cliente</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Cards de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-l-blue-400 bg-blue-50/50 transform hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-sm font-medium text-blue-700">Total de Clientes</CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent className="pt-1">
              <div className="text-2xl font-bold text-blue-800">{clients.length}</div>
              <p className="text-xs text-blue-600">
                Clientes cadastrados
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-400 bg-green-50/50 transform hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-sm font-medium text-green-700">Receita Total</CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent className="pt-1">
              <div className="text-2xl font-bold text-green-800">R$ 5.570</div>
              <p className="text-xs text-green-600">
                Receita dos clientes
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-400 bg-yellow-50/50 transform hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-sm font-medium text-yellow-700">Clientes VIP</CardTitle>
              <Star className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent className="pt-1">
              <div className="text-2xl font-bold text-yellow-800">1</div>
              <p className="text-xs text-yellow-600">
                Cliente premium
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-400 bg-purple-50/50 transform hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-sm font-medium text-purple-700">Aniversários</CardTitle>
              <Calendar className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent className="pt-1">
              <div className="text-2xl font-bold text-purple-800">{upcomingBirthdays.length}</div>
              <p className="text-xs text-purple-600">
                Este mês
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Seção de Aniversários Próximos */}
        {upcomingBirthdays.length > 0 && (
          <Card className="mb-6 border-pink-200 bg-pink-50 transform hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-pink-700">
                <Gift className="h-5 w-5" />
                Aniversários Próximos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {upcomingBirthdays.slice(0, 3).map((client) => (
                  <div key={client.id} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-pink-200">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className={client.avatarColor + " text-white"}>
                        {client.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{client.name}</p>
                      <p className="text-sm text-gray-600">{client.formattedDate}</p>
                    </div>
                    <Badge variant={client.daysUntil === 0 ? "destructive" : "secondary"} className="text-xs">
                      {client.daysUntil === 0 ? "Hoje!" : `${client.daysUntil}d`}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Seção de Datas Especiais Próximas */}
        {upcomingSpecialDates.length > 0 && (
          <Card className="mb-6 border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700">
                <Calendar className="h-5 w-5" />
                Datas Especiais Próximas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {upcomingSpecialDates.slice(0, 3).map((client) => (
                  <div key={client.id} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-purple-200">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className={client.avatarColor + " text-white"}>
                        {client.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{client.name}</p>
                      <p className="text-sm text-gray-600">{client.formattedDate}</p>
                    </div>
                    <Badge variant={client.daysUntil === 0 ? "destructive" : "secondary"} className="text-xs">
                      {client.daysUntil === 0 ? "Hoje!" : `${client.daysUntil}d`}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Barra de Pesquisa */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Pesquisar clientes por nome ou email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Lista de Clientes */}
        <Card>
          <CardHeader className="p-0">
            {/* Header com gradiente */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Lista de Clientes
                  </h3>
                  <p className="text-gray-500 mt-1 text-sm">
                    {filteredClients.length} cliente(s) encontrado(s)
                  </p>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredClients.map((client) => {
                const today = new Date();
                
                // Verificar se é aniversário hoje
                const birthdayToday = client.birthday && (() => {
                  const [day, month] = client.birthday.split('/').map(Number);
                  const todayDay = today.getDate();
                  const todayMonth = today.getMonth() + 1;
                  return day === todayDay && month === todayMonth;
                })();
                
                // Verificar se é data especial hoje
                const specialDateToday = client.specialDate && (() => {
                  const [day, month] = client.specialDate.split('/').map(Number);
                  const todayDay = today.getDate();
                  const todayMonth = today.getMonth() + 1;
                  return day === todayDay && month === todayMonth;
                })();
                
                const upcomingEvent = allUpcomingEvents.find(e => e.id === client.id);
                const hasSpecialEvent = birthdayToday || specialDateToday || upcomingEvent;
                
                return (
                  <div 
                    key={client.id} 
                    className={`flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors ${
                      birthdayToday || specialDateToday ? 'border-pink-300 bg-pink-50' : 
                      hasSpecialEvent ? 'border-purple-200 bg-purple-50' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className={client.avatarColor + " text-white"}>
                            {client.avatar}
                          </AvatarFallback>
                        </Avatar>
                        {hasSpecialEvent && (
                          <div className="absolute -top-1 -right-1">
                            <Gift className="h-4 w-4 text-pink-500 bg-white rounded-full p-1" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900 text-sm">{client.name}</h3>
                          {birthdayToday && (
                            <Badge variant="destructive" className="text-xs">
                              Aniversário Hoje!
                            </Badge>
                          )}
                          {specialDateToday && (
                            <Badge variant="destructive" className="text-xs">
                              Data Especial Hoje!
                            </Badge>
                          )}
                          {upcomingEvent && !birthdayToday && !specialDateToday && (
                            <Badge variant="secondary" className="text-xs">
                              {upcomingEvent.eventType} em {upcomingEvent.daysUntil}d
                            </Badge>
                          )}
                        </div>
                        <Badge className={client.statusColor + " text-xs mb-2"}>{client.status}</Badge>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 text-xs text-gray-600">
                          <div className="flex items-center">
                            <Mail className="h-3 w-3 mr-1" />
                            <span className="truncate">{client.email}</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-3 w-3 mr-1" />
                            {client.phone}
                          </div>
                          {client.address && (
                            <div className="flex items-center col-span-1 lg:col-span-2">
                              <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                              <span className="truncate">
                                {client.address.street}, {client.address.number} - {client.address.neighborhood}, {client.address.city}/{client.address.state}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-semibold text-gray-900 text-sm">{client.totalSpent}</p>
                      <p className="text-xs text-gray-600 mb-2">{client.lastPurchase}</p>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => handleEditClient(client)}>
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}