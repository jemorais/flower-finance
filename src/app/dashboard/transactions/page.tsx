'use client';

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
  ArrowDownCircle
} from 'lucide-react';

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
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-pink-600 mb-1">Transações</h1>
          <p className="text-gray-600 text-sm">Gerencie todas as movimentações financeiras da floricultura</p>
        </div>
        <Button className="bg-pink-500 hover:bg-pink-600 text-white">
          <Download className="w-4 h-4 mr-2" />
          Nova Transação
        </Button>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Receita do Mês */}
          <Card className="bg-green-50 border-green-100 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-green-700">Receita do Mês</CardTitle>
                <div className="flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">R$ 8.450,00</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +15,2% em relação ao mês anterior
              </div>
            </CardContent>
          </Card>

          {/* Despesas do Mês */}
          <Card className="bg-blue-50 border-blue-100 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-blue-700">Despesas do Mês</CardTitle>
                <div className="flex items-center mt-1">
                  <TrendingDown className="h-4 w-4 text-blue-600 mr-1" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">R$ 3.200,00</div>
              <div className="flex items-center text-xs text-blue-600 mt-1">
                <TrendingDown className="w-3 h-3 mr-1" />
                -8,5% em relação ao mês anterior
              </div>
            </CardContent>
          </Card>

          {/* Lucro Líquido */}
          <Card className="bg-red-50 border-red-100 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-red-700">Lucro Líquido</CardTitle>
                <div className="flex items-center mt-1">
                  <DollarSign className="h-4 w-4 text-red-600 mr-1" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-900">R$ 5.250,00</div>
              <div className="flex items-center text-xs text-red-600 mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +24,8% em relação ao mês anterior
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
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
                />
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-pink-100 text-pink-700 hover:bg-pink-200">
                  Hoje
                </Badge>
                <Badge variant="outline" className="hover:bg-gray-50">
                  Receitas
                </Badge>
                <Badge variant="outline" className="hover:bg-gray-50">
                  Despesas
                </Badge>
                <Badge variant="outline" className="hover:bg-gray-50">
                  Nova Transação
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Histórico de Transações</CardTitle>
            <CardDescription className="text-gray-600">4 transações encontradas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactionData.map((transaction) => {
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
              })}
            </div>
          </CardContent>
        </Card>
      </div>
  );
}