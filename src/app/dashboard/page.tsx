'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, Package, DollarSign, Percent, BarChart3, Users, Target, FileText, Home, PieChart, CreditCard, UserCheck, ArrowUpRight, ArrowDownRight, Calendar, Clock, Flower, TrendingDown } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  const recentTransactions = [
    { id: 1, type: 'receita', description: 'Venda de Rosas', amount: 'R$ 450,00', date: '2024-01-16', category: 'Vendas' },
    { id: 2, type: 'despesa', description: 'Compra de Fertilizantes', amount: 'R$ 120,00', date: '2024-01-15', category: 'Suprimentos' },
    { id: 3, type: 'receita', description: 'Arranjo para Casamento', amount: 'R$ 850,00', date: '2024-01-14', category: 'Eventos' },
    { id: 4, type: 'despesa', description: 'Manutenção da Estufa', amount: 'R$ 300,00', date: '2024-01-14', category: 'Manutenção' },
    { id: 5, type: 'receita', description: 'Venda de Orquídeas', amount: 'R$ 280,00', date: '2024-01-13', category: 'Vendas' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50/30">
      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        {/* Header aprimorado */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 mb-8 shadow-xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <Flower className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Dashboard Flower Finance</h1>
                <p className="text-white/90 mt-1">Visão completa do seu negócio de floricultura</p>
                <div className="flex items-center gap-2 mt-2 text-white/80 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>Atualizado hoje às 14:30</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-44 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Últimos 7 dias</SelectItem>
                  <SelectItem value="30d">Últimos 30 dias</SelectItem>
                  <SelectItem value="90d">Últimos 90 dias</SelectItem>
                  <SelectItem value="1y">Último ano</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm">
                <Clock className="w-4 h-4 mr-2" />
                Tempo Real
              </Button>
            </div>
          </div>
        </div>

        {/* Cards de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-l-green-400 bg-green-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-700">Receita Total</CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-800">R$ 12.450,00</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +15% vs mês anterior
              </div>
              <p className="text-xs text-green-600 mt-1">Meta: R$ 15.000,00</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-400 bg-blue-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-700">Lucro Total</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-800">R$ 8.320,00</div>
              <div className="flex items-center text-xs text-blue-600 mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +8% vs mês anterior
              </div>
              <p className="text-xs text-blue-600 mt-1">Margem: 66.8%</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-400 bg-purple-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-700">Produtos Vendidos</CardTitle>
              <Package className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-800">342</div>
              <div className="flex items-center text-xs text-purple-600 mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12% vs mês anterior
              </div>
              <p className="text-xs text-purple-600 mt-1">Média: 11.4 por dia</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-rose-400 bg-rose-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-rose-700">Margem Média</CardTitle>
              <Percent className="h-4 w-4 text-rose-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-rose-800">68%</div>
              <div className="flex items-center text-xs text-rose-600 mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +2% vs mês anterior
              </div>
              <p className="text-xs text-rose-600 mt-1">Objetivo: 70%</p>
            </CardContent>
          </Card>
        </div>

        {/* Seção principal com gráficos e transações */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Gráfico de vendas */}
          <Card className="lg:col-span-2 shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-indigo-800">
                <BarChart3 className="h-5 w-5" />
                Vendas dos Últimos 7 Dias
              </CardTitle>
              <CardDescription className="text-indigo-600">
                Acompanhe o desempenho diário das suas vendas
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-64 flex items-end justify-between gap-2">
                {[
                  { day: 'Seg', value: 85, amount: 'R$ 1.200' },
                  { day: 'Ter', value: 92, amount: 'R$ 1.350' },
                  { day: 'Qua', value: 78, amount: 'R$ 980' },
                  { day: 'Qui', value: 95, amount: 'R$ 1.480' },
                  { day: 'Sex', value: 88, amount: 'R$ 1.290' },
                  { day: 'Sáb', value: 100, amount: 'R$ 1.650' },
                  { day: 'Dom', value: 72, amount: 'R$ 890' }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center flex-1 group">
                    <div className="relative w-full max-w-12 mb-2">
                      <div 
                        className="bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-lg transition-all duration-300 group-hover:from-indigo-600 group-hover:to-purple-600 cursor-pointer"
                        style={{ height: `${item.value * 2}px` }}
                      ></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {item.amount}
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{item.day}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <span>Menor: R$ 890</span>
                <span>Média: R$ 1.263</span>
                <span>Maior: R$ 1.650</span>
              </div>
            </CardContent>
          </Card>

          {/* Top produtos */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-rose-800">
                <Target className="h-5 w-5" />
                Top Produtos
              </CardTitle>
              <CardDescription className="text-rose-600">
                Mais vendidos este mês
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { name: 'Rosas Vermelhas', sales: 89, percentage: 95 },
                  { name: 'Orquídeas Brancas', sales: 67, percentage: 72 },
                  { name: 'Arranjos Casamento', sales: 45, percentage: 48 },
                  { name: 'Buquê Misto', sales: 38, percentage: 41 },
                  { name: 'Plantas Decorativas', sales: 29, percentage: 31 }
                ].map((product, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{product.name}</span>
                      <span className="text-sm text-gray-500">{product.sales}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-rose-400 to-pink-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${product.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transações Recentes */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Transações Recentes
                </CardTitle>
                <CardDescription>
                  Últimas movimentações financeiras
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Ver Todas
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction, index) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${
                      transaction.type === 'receita' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {transaction.type === 'receita' ? (
                        <ArrowUpRight className="h-4 w-4" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-gray-500">{transaction.category} • {transaction.date}</p>
                    </div>
                  </div>
                  <div className={`font-semibold ${
                    transaction.type === 'receita' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'receita' ? '+' : '-'}{transaction.amount}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">+R$ 1.580,00</div>
                  <div className="text-sm text-gray-500">Total Receitas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">-R$ 420,00</div>
                  <div className="text-sm text-gray-500">Total Despesas</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>



        {/* Footer do Dashboard */}
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-2xl p-6 text-white">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                <Flower className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Flower Finance</h3>
                <p className="text-gray-300 text-sm">Sistema de Gestão Financeira</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-300">
              <span>Versão 1.0.0</span>
              <span>•</span>
              <span>Última atualização: Janeiro 2024</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                Sistema Online
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}