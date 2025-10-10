'use client'

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Eye,
  ArrowUpDown,
  Calendar,
  DollarSign,
  TrendingUp
} from 'lucide-react';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'

interface Transaction {
  id: string
  type: 'income' | 'expense'
  description: string
  amount: number
  category: string
  date: string
  status: 'completed' | 'pending'
}

type NewTransactionForm = Omit<Transaction, 'id'>;

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'income',
    description: 'Venda de arranjo de rosas vermelhas',
    amount: 150.00,
    category: 'Arranjos',
    date: '2024-01-15',
    status: 'completed'
  },
  {
    id: '2',
    type: 'income',
    description: 'Venda de plantas ornamentais',
    amount: 200.00,
    category: 'Plantas',
    date: '2024-01-15',
    status: 'completed'
  },
  {
    id: '3',
    type: 'expense',
    description: 'Compra de flores frescas - Fornecedor A',
    amount: 80.00,
    category: 'Estoque',
    date: '2024-01-14',
    status: 'completed'
  },
  {
    id: '4',
    type: 'expense',
    description: 'Pagamento de fornecedor - Vasos e acessórios',
    amount: 300.00,
    category: 'Fornecedores',
    date: '2024-01-14',
    status: 'completed'
  },
  {
    id: '5',
    type: 'income',
    description: 'Venda de buquê de noiva',
    amount: 450.00,
    category: 'Eventos',
    date: '2024-01-13',
    status: 'completed'
  },
  {
    id: '6',
    type: 'expense',
    description: 'Conta de energia elétrica',
    amount: 120.00,
    category: 'Utilidades',
    date: '2024-01-12',
    status: 'completed'
  },
  {
    id: '7',
    type: 'income',
    description: 'Venda de coroa de flores',
    amount: 180.00,
    category: 'Funerário',
    date: '2024-01-12',
    status: 'completed'
  },
  {
    id: '8',
    type: 'expense',
    description: 'Aluguel da loja',
    amount: 800.00,
    category: 'Fixas',
    date: '2024-01-10',
    status: 'completed'
  }
]

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState<'all' | 'income' | 'expense'>('all')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newTransaction, setNewTransaction] = useState<NewTransactionForm>({
    type: 'income',
    description: '',
    amount: 0,
    category: '',
    date: new Date().toISOString().split('T')[0],
    status: 'completed'
  })

  const filteredTransactions = transactions.filter((transaction: Transaction) => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === 'all' || transaction.type === filterType
    return matchesSearch && matchesFilter
  })

  const totalIncome = transactions
    .filter((t: Transaction) => t.type === 'income' && t.status === 'completed')
    .reduce((sum: number, t: Transaction) => sum + t.amount, 0)

  const totalExpenses = transactions
    .filter((t: Transaction) => t.type === 'expense' && t.status === 'completed')
    .reduce((sum: number, t: Transaction) => sum + t.amount, 0)

  const handleInputChange = (field: keyof NewTransactionForm, value: string) => {
    let parsedValue: string | number | ('income' | 'expense') = value;
    if (field === 'amount') {
      parsedValue = Number(value);
    } else if (field === 'type') {
      parsedValue = value as 'income' | 'expense';
    }
    setNewTransaction((prev: NewTransactionForm) => ({ ...prev, [field]: parsedValue }));
  }

  const handleSave = () => {
    const transaction: Transaction = {
      ...newTransaction,
      id: (transactions.length + 1).toString(),
    }
    setTransactions([...transactions, transaction])
    setIsDialogOpen(false)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-pink-800">
            Transações
          </h1>
          <p className="text-pink-600">
            Gerencie todas as movimentações financeiras da floricultura
          </p>
        </div>

        {/* Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-700">
                Receitas do Mês
              </CardTitle>
              <div className="p-2 bg-green-100 rounded-lg">
                <ArrowTrendingUpIcon className="h-4 w-4 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">R$ 8.450,00</div>
              <p className="text-xs text-green-600/70">
                +12% em relação ao mês anterior
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-700">
                Despesas do Mês
              </CardTitle>
              <div className="p-2 bg-blue-100 rounded-lg">
                <ArrowTrendingDownIcon className="h-4 w-4 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">R$ 3.200,00</div>
              <p className="text-xs text-blue-600/70">
                -5% em relação ao mês anterior
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-pink-700">
                Lucro Líquido
              </CardTitle>
              <div className="p-2 bg-pink-100 rounded-lg">
                <DollarSign className="h-4 w-4 text-pink-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-pink-600">R$ 5.250,00</div>
              <p className="text-xs text-pink-600/70">
                Margem de 62% sobre as receitas
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filtros */}
        <Card className="bg-gradient-to-br from-white to-orange-50 dark:from-orange-900 dark:to-orange-800 border-orange-200 dark:border-orange-700">
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Buscar transações..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filterType === 'all' ? 'default' : 'outline'}
                  onClick={() => setFilterType('all')}
                  size="sm"
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg"
                >
                  Todas
                </Button>
                <Button
                  variant={filterType === 'income' ? 'default' : 'outline'}
                  onClick={() => setFilterType('income')}
                  size="sm"
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg"
                >
                  Receitas
                </Button>
                <Button
                  variant={filterType === 'expense' ? 'default' : 'outline'}
                  onClick={() => setFilterType('expense')}
                  size="sm"
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg"
                >
                  Despesas
                </Button>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg">
                    <Plus className="mr-2 h-4 w-4" />
                    Nova Transação
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Nova Transação</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="type">Tipo</Label>
                      <Select value={newTransaction.type} onValueChange={(v) => handleInputChange('type', v)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="income">Receita</SelectItem>
                          <SelectItem value="expense">Despesa</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="description">Descrição</Label>
                      <Input id="description" value={newTransaction.description} onChange={(e) => handleInputChange('description', e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="amount">Valor (R$)</Label>
                      <Input id="amount" type="number" value={newTransaction.amount} onChange={(e) => handleInputChange('amount', e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="category">Categoria</Label>
                      <Input id="category" value={newTransaction.category} onChange={(e) => handleInputChange('category', e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="date">Data</Label>
                      <Input id="date" type="date" value={newTransaction.date} onChange={(e) => handleInputChange('date', e.target.value)} />
                    </div>
                    <Button onClick={handleSave} className="bg-gradient-to-r from-pink-500 to-green-500 hover:from-pink-600 hover:to-green-600 text-white border-0">
                      Salvar
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* Lista de Transações */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Histórico de Transações
            </CardTitle>
            <CardDescription>
              {filteredTransactions.length} transação(ões) encontrada(s)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {filteredTransactions.map((transaction: Transaction, index: number) => (
                <div
                  key={transaction.id}
                  className={`flex items-center justify-between p-4 h-[60px] border-b hover:bg-gray-50 transition-all duration-300 ${
                    index % 2 === 0 ? 'bg-gray-50/30' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-soft ${
                      transaction.type === 'income' 
                        ? 'bg-leaf-green/20 text-leaf-green' 
                        : 'bg-soft-red/20 text-soft-red'
                    }`}>
                      {transaction.type === 'income' ? (
                        <ArrowTrendingUpIcon className="h-4 w-4" />
                      ) : (
                        <ArrowTrendingDownIcon className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-soft-gray">{transaction.description}</p>
                      <div className="flex items-center gap-2 text-sm text-soft-gray/70">
                        <Calendar className="h-3 w-3" />
                        {new Date(transaction.date).toLocaleDateString('pt-BR')}
                        <span>•</span>
                        <span>{transaction.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge 
                      variant="secondary"
                      className={`${
                        transaction.status === 'completed' 
                          ? 'bg-leaf-green/10 text-leaf-green border-leaf-green/20' 
                          : 'bg-petal-pink/10 text-petal-pink border-petal-pink/20'
                      }`}
                    >
                      {transaction.status === 'completed' ? 'Concluída' : 'Pendente'}
                    </Badge>
                    <div className={`text-lg font-semibold ${
                      transaction.type === 'income' ? 'text-leaf-green' : 'text-soft-red'
                    }`}>
                      {transaction.type === 'income' ? '+' : '-'}R$ {transaction.amount.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}