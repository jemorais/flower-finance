'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Download,
  Search,
  Filter,
  Calendar,
  ArrowUpCircle,
  ArrowDownCircle,
  Plus
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const transactionData = [
  {
    id: 1,
    type: 'receita',
    description: 'Venda de arranjo de rosas vermelhas',
    date: '15/01/2024',
    category: 'Arranjos',
    amount: 150.00,
    icon: ArrowUpCircle,
    color: 'text-green-600'
  },
  {
    id: 2,
    type: 'receita',
    description: 'Venda de plantas ornamentais',
    date: '14/01/2024',
    category: 'Plantas',
    amount: 200.00,
    icon: ArrowUpCircle,
    color: 'text-green-600'
  },
  {
    id: 3,
    type: 'despesa',
    description: 'Compra de flores frescas - Fornecedor A',
    date: '13/01/2024',
    category: 'Estoque',
    amount: -80.00,
    icon: ArrowDownCircle,
    color: 'text-red-600'
  },
  {
    id: 4,
    type: 'despesa',
    description: 'Pagamento de fornecedor - Vasos e acessórios',
    date: '12/01/2024',
    category: 'Fornecedores',
    amount: -300.00,
    icon: ArrowDownCircle,
    color: 'text-red-600'
  },
  {
    id: 5,
    type: 'receita',
    description: 'Venda de buquê de rosas',
    date: '12/01/2024',
    category: 'Buquês',
    amount: 480.00,
    icon: ArrowUpCircle,
    color: 'text-green-600'
  },
  {
    id: 6,
    type: 'despesa',
    description: 'Conta de energia elétrica',
    date: '11/01/2024',
    category: 'Utilidades',
    amount: -120.00,
    icon: ArrowDownCircle,
    color: 'text-red-600'
  },
  {
    id: 7,
    type: 'receita',
    description: 'Venda de coroa de flores',
    date: '10/01/2024',
    category: 'Especiais',
    amount: 180.00,
    icon: ArrowUpCircle,
    color: 'text-green-600'
  }
];

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('todos');
  const [isOpen, setIsOpen] = useState(false);
  const [newDescription, setNewDescription] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newType, setNewType] = useState('receita');

  // Categorias por tipo
  const categoriesByType = {
    receita: ['Arranjos', 'Plantas', 'Buquês', 'Especiais'],
    despesa: ['Estoque', 'Fornecedores', 'Utilidades']
  };

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: 'receita',
      description: 'Venda de arranjo de rosas vermelhas',
      date: '15/01/2024',
      category: 'Arranjos',
      amount: 150.00,
      icon: ArrowUpCircle,
      color: 'text-green-600'
    },
    {
      id: 2,
      type: 'receita',
      description: 'Venda de plantas ornamentais',
      date: '14/01/2024',
      category: 'Plantas',
      amount: 200.00,
      icon: ArrowUpCircle,
      color: 'text-green-600'
    },
    {
      id: 3,
      type: 'despesa',
      description: 'Compra de flores frescas - Fornecedor A',
      date: '13/01/2024',
      category: 'Estoque',
      amount: -80.00,
      icon: ArrowDownCircle,
      color: 'text-red-600'
    },
    {
      id: 4,
      type: 'despesa',
      description: 'Pagamento de fornecedor - Vasos e acessórios',
      date: '12/01/2024',
      category: 'Fornecedores',
      amount: -300.00,
      icon: ArrowDownCircle,
      color: 'text-red-600'
    },
    {
      id: 5,
      type: 'receita',
      description: 'Venda de buquê de rosas',
      date: '12/01/2024',
      category: 'Buquês',
      amount: 480.00,
      icon: ArrowUpCircle,
      color: 'text-green-600'
    },
    {
      id: 6,
      type: 'despesa',
      description: 'Conta de energia elétrica',
      date: '11/01/2024',
      category: 'Utilidades',
      amount: -120.00,
      icon: ArrowDownCircle,
      color: 'text-red-600'
    },
    {
      id: 7,
      type: 'receita',
      description: 'Venda de coroa de flores',
      date: '10/01/2024',
      category: 'Especiais',
      amount: 180.00,
      icon: ArrowUpCircle,
      color: 'text-green-600'
    }
  ]);

  // Filtrar transações baseado no filtro ativo e termo de busca
  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeFilter === 'receitas') return transaction.type === 'receita' && matchesSearch;
    if (activeFilter === 'despesas') return transaction.type === 'despesa' && matchesSearch;
    if (activeFilter === 'hoje') {
      const today = new Date().toLocaleDateString('pt-BR');
      return transaction.date === today && matchesSearch;
    }
    return matchesSearch;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = transactions.length + 1;
    const amountValue = parseFloat(newAmount);
    const newTransaction = {
      id: newId,
      type: newType,
      description: newDescription,
      date: new Date().toLocaleDateString('pt-BR'),
      category: newCategory,
      amount: newType === 'receita' ? amountValue : -amountValue,
      icon: newType === 'receita' ? ArrowUpCircle : ArrowDownCircle,
      color: newType === 'receita' ? 'text-green-600' : 'text-red-600'
    };
    setTransactions([...transactions, newTransaction]);
    setNewDescription('');
    setNewCategory('');
    setNewAmount('');
    setNewType('receita');
    setIsOpen(false);
  };

  // Função para lidar com mudança de tipo e resetar categoria
  const handleTypeChange = (type: string) => {
    setNewType(type);
    setNewCategory(''); // Resetar categoria quando mudar o tipo
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="p-8 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-lg">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Transações</h1>
          <p className="text-white/80 text-sm">Gerencie todas as movimentações financeiras da floricultura</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button 
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
            >
              <Plus className="w-4 h-4 mr-2" />
              Nova Transação
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cadastrar Nova Transação</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Select value={newType} onValueChange={handleTypeChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="receita">Receita</SelectItem>
                  <SelectItem value="despesa">Despesa</SelectItem>
                </SelectContent>
              </Select>
              <Input 
                placeholder="Descrição" 
                value={newDescription} 
                onChange={(e) => setNewDescription(e.target.value)} 
              />
              <Select value={newCategory} onValueChange={setNewCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categoriesByType[newType as keyof typeof categoriesByType].map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input 
                type="number" 
                placeholder="Valor" 
                value={newAmount} 
                onChange={(e) => setNewAmount(e.target.value)} 
              />
              <DialogFooter>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Saldo Líquido */}
        <Card className="border-l-4 border-l-rose-400 bg-rose-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-sm font-medium text-rose-700">Saldo Líquido</CardTitle>
              <div className="flex items-center mt-1">
                <DollarSign className="h-4 w-4 text-rose-500 mr-1" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-rose-800">R$ 5.250,00</div>
            <div className="flex items-center text-xs text-rose-600 mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +18,7% em relação ao mês anterior
            </div>
          </CardContent>
        </Card>

        {/* Despesas do Mês */}
        <Card className="border-l-4 border-l-red-400 bg-red-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-sm font-medium text-red-700">Despesas do Mês</CardTitle>
              <div className="flex items-center mt-1">
                <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-800">R$ 3.200,00</div>
            <div className="flex items-center text-xs text-red-600 mt-1">
              <TrendingDown className="w-3 h-3 mr-1" />
              +8,5% em relação ao mês anterior
            </div>
          </CardContent>
        </Card>

        {/* Receita do Mês */}
        <Card className="border-l-4 border-l-green-400 bg-green-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-sm font-medium text-green-700">Receita do Mês</CardTitle>
              <div className="flex items-center mt-1">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">R$ 8.450,00</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +15,2% em relação ao mês anterior
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative flex-1 min-w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Buscar transações..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Badge 
                variant={activeFilter === 'hoje' ? 'default' : 'secondary'} 
                className={`cursor-pointer ${activeFilter === 'hoje' ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-700 hover:bg-pink-200'}`}
                onClick={() => handleFilterClick('hoje')}
              >
                Hoje
              </Badge>
              <Badge 
                variant={activeFilter === 'receitas' ? 'default' : 'outline'} 
                className={`cursor-pointer ${activeFilter === 'receitas' ? 'bg-green-500 text-white' : 'hover:bg-gray-50'}`}
                onClick={() => handleFilterClick('receitas')}
              >
                Receitas
              </Badge>
              <Badge 
                variant={activeFilter === 'despesas' ? 'default' : 'outline'} 
                className={`cursor-pointer ${activeFilter === 'despesas' ? 'bg-red-500 text-white' : 'hover:bg-gray-50'}`}
                onClick={() => handleFilterClick('despesas')}
              >
                Despesas
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">Histórico de Transações</CardTitle>
          <CardDescription className="text-gray-600">
            {filteredTransactions.length} transação{filteredTransactions.length !== 1 ? 'ões' : ''} encontrada{filteredTransactions.length !== 1 ? 's' : ''}
            {activeFilter !== 'todos' && ` (filtro: ${activeFilter})`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredTransactions.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Nenhuma transação encontrada para os filtros aplicados.
              </div>
            ) : (
              filteredTransactions.map((transaction) => {
                const Icon = transaction.icon;
                return (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${transaction.type === 'receita' ? 'bg-green-100' : 'bg-red-100'}`}>
                        <Icon className={`w-4 h-4 ${transaction.color}`} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{transaction.description}</div>
                        <div className="text-sm text-gray-500">
                          {transaction.date} • {transaction.category}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-bold ${transaction.color}`}>
                        {transaction.amount > 0 ? '+' : ''}R$ {Math.abs(transaction.amount).toFixed(2).replace('.', ',')}
                      </div>
                      <div className="text-xs text-gray-500">Concluída</div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}