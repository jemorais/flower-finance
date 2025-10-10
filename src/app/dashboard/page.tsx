'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { MetricCard } from '@/components/ui/metric-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Eye, DollarSign, TrendingUp, Users } from 'lucide-react';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon, ArrowsRightLeftIcon, SparklesIcon } from '@heroicons/react/24/outline';


export default function DashboardPage() {

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Welcome Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold flex items-center text-pink-800">
              <TrendingUp className="w-5 h-5 mr-2 text-pink-600" />
              Dashboard
            </h1>
            <p className="text-pink-600 mt-2">Bem-vindo de volta! Aqui está um resumo das suas finanças.</p>
          </div>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Nova Transação
          </Button>
        </div>

        {/* Resumo Financeiro - Grid 2x2 */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <MetricCard
            title="Saldo Total"
            value="R$ 12.450,00"
            variation="+8.2% em relação ao mês anterior"
            icon={<DollarSign className="w-6 h-6" />}
            changeType="positive"
          />
          
          <MetricCard
            title="Vendas do Mês"
            value="R$ 4.500,00"
            variation="Meta: R$ 5.000,00 (90%)"
            icon={<TrendingUp className="w-6 h-6" />}
            changeType="positive"
          />
          
          <MetricCard
            title="Despesas Operacionais"
            value="R$ 2.800,00"
            variation="Limite: R$ 2.500,00 (112%)"
            icon={<DollarSign className="w-6 h-6" />}
            changeType="negative"
          />
          
          <MetricCard
            title="Lucro do Mês"
            value="R$ 1.700,00"
            variation="Margem: 37.8%"
            icon={<TrendingUp className="w-6 h-6" />}
            changeType="positive"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Transações Recentes */}
          <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-green-800 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                    Histórico de Transações
                  </CardTitle>
                  <CardDescription className="text-green-600">Últimas movimentações financeiras</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="text-green-700 hover:text-green-800 hover:bg-green-200">
                  <Eye className="h-4 w-4 mr-2" />
                  Ver Todas
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    description: 'Venda de arranjo de rosas',
                    amount: '+R$ 150,00',
                    date: 'Hoje',
                    type: 'income',
                    category: 'Vendas'
                  },
                  {
                    description: 'Venda de plantas ornamentais',
                    amount: '+R$ 200,00',
                    date: 'Hoje',
                    type: 'income',
                    category: 'Vendas'
                  },
                  {
                    description: 'Compra de flores frescas',
                    amount: '-R$ 80,00',
                    date: 'Ontem',
                    type: 'expense',
                    category: 'Estoque'
                  },
                  {
                    description: 'Pagamento de fornecedor',
                    amount: '-R$ 300,00',
                    date: 'Ontem',
                    type: 'expense',
                    category: 'Fornecedores'
                  }
                ].map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${
                        transaction.type === 'income' ? 'bg-green-100' :
                        transaction.type === 'expense' ? 'bg-red-100' : 'bg-blue-100'
                      }`}>
                        {transaction.type === 'income' && <ArrowTrendingUpIcon className="h-4 w-4 text-green-600" />}
                        {transaction.type === 'expense' && <ArrowTrendingDownIcon className="h-4 w-4 text-red-600" />}
                        {transaction.type === 'transfer' && <ArrowsRightLeftIcon className="h-4 w-4 text-blue-600" />}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{transaction.description}</p>
                        <p className="text-xs text-gray-500">{transaction.category} • {transaction.date}</p>
                      </div>
                    </div>
                    <div className={`font-semibold ${
                      transaction.type === 'income' ? 'text-green-600' :
                      transaction.type === 'expense' ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {transaction.amount}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Metas Financeiras */}
          <Card className="bg-gradient-to-br from-purple-50 to-pink-100 border-purple-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center text-purple-800">
                    <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                    Metas Financeiras
                  </CardTitle>
                  <CardDescription className="text-purple-600">Objetivos financeiros</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="text-purple-700 hover:text-purple-800 hover:bg-purple-200">
                  <SparklesIcon className="h-4 w-4 mr-2" />
                  Nova Meta
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: 'Meta de Vendas Mensais',
                    current: 8500,
                    target: 12000,
                    percentage: 71
                  },
                  {
                    name: 'Controle de Despesas Operacionais',
                    current: 3200,
                    target: 4000,
                    percentage: 80
                  },
                  {
                    name: 'Reserva para Emergências',
                    current: 2800,
                    target: 5000,
                    percentage: 56
                  }
                ].map((goal, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{goal.name}</p>
                        <p className="text-xs text-gray-500">
                          R$ {goal.current.toLocaleString()} de R$ {goal.target.toLocaleString()}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-purple-600">{goal.percentage}%</span>
                    </div>
                    <div className="w-full bg-gradient-to-r from-purple-200 to-pink-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${goal.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}