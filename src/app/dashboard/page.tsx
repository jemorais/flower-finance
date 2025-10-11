'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, Package, DollarSign, Percent, BarChart3, Users, Target, FileText, Home, PieChart, CreditCard, UserCheck, ArrowUpRight, ArrowDownRight } from 'lucide-react';
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
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Visão geral do seu negócio de flores</p>
        </div>
        <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Últimos 7 dias</SelectItem>
            <SelectItem value="30d">Últimos 30 dias</SelectItem>
            <SelectItem value="90d">Últimos 90 dias</SelectItem>
          </SelectContent>
        </Select>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 12.450,00</div>
              <p className="text-xs text-muted-foreground">
                +15% em relação ao mês anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lucro Total</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 8.320,00</div>
              <p className="text-xs text-muted-foreground">
                +8% em relação ao mês anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Produtos Vendidos</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">342</div>
              <p className="text-xs text-muted-foreground">
                +12% em relação ao mês anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Margem Média</CardTitle>
              <Percent className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
              <p className="text-xs text-muted-foreground">
                +2% em relação ao mês anterior
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Transações Recentes</CardTitle>
              <CardDescription>Últimas 5 transações do seu negócio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        transaction.type === 'receita' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {transaction.type === 'receita' ? (
                          <ArrowUpRight className="w-4 h-4 text-green-600" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4 text-red-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{transaction.description}</p>
                        <p className="text-sm text-gray-500">{transaction.category} • {transaction.date}</p>
                      </div>
                    </div>
                    <span className={`font-semibold ${
                      transaction.type === 'receita' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'receita' ? '+' : '-'}{transaction.amount}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/dashboard/transactions">
                  <Button variant="outline" className="w-full">
                    Ver todas as transações
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
              <CardDescription>Acesso rápido às principais funcionalidades</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/dashboard/reports">
                  <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center space-y-2">
                    <FileText className="w-5 h-5" />
                    <span className="text-sm">Gerar Relatório</span>
                  </Button>
                </Link>
                <Link href="/dashboard/transactions">
                  <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center space-y-2">
                    <CreditCard className="w-5 h-5" />
                    <span className="text-sm">Nova Transação</span>
                  </Button>
                </Link>
                <Link href="/dashboard/clients">
                  <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center space-y-2">
                    <Users className="w-5 h-5" />
                    <span className="text-sm">Gerenciar Clientes</span>
                  </Button>
                </Link>

              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/dashboard">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Dashboard</CardTitle>
                <CardDescription>Visão geral completa</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/dashboard/reports">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <PieChart className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Relatórios</CardTitle>
                <CardDescription>Análises detalhadas</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/dashboard/transactions">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <CreditCard className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Transações</CardTitle>
                <CardDescription>Histórico financeiro</CardDescription>
              </CardHeader>
            </Card>
          </Link>


        </div>
      </div>
  );
}