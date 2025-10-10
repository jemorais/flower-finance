'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Package, DollarSign, Percent, Download, BarChart3 } from 'lucide-react';

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30');

  const topProductsData = [
    { name: 'Buquê de Rosas Vermelhas', quantity: 156, revenue: 14024.40 },
    { name: 'Orquídea Phalaenopsis', quantity: 89, revenue: 11125.00 },
    { name: 'Arranjo Tropical', quantity: 67, revenue: 11055.00 },
    { name: 'Lírio Branco', quantity: 45, revenue: 8950.00 },
    { name: 'Girassol Premium', quantity: 38, revenue: 7600.00 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Relatórios Gerenciais</h1>
            <p className="text-gray-600 text-sm">Análise detalhada de vendas e performance</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40 bg-white">
              <SelectValue placeholder="Últimos 30 dias" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Últimos 7 dias</SelectItem>
              <SelectItem value="30">Últimos 30 dias</SelectItem>
              <SelectItem value="90">Últimos 90 dias</SelectItem>
              <SelectItem value="365">Último ano</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white">
            <Download className="w-4 h-4 mr-2" />
            Exportar PDF
          </Button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Receita Total */}
        <Card className="bg-green-50 border-green-100 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-sm font-medium text-green-700">Receita Total</CardTitle>
              <div className="flex items-center mt-1">
                <DollarSign className="h-4 w-4 text-green-600 mr-1" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">R$ 46.670,00</div>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12,5% em relação ao período anterior
            </div>
          </CardContent>
        </Card>

        {/* Lucro Total */}
        <Card className="bg-blue-50 border-blue-100 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-sm font-medium text-blue-700">Lucro Total</CardTitle>
              <div className="flex items-center mt-1">
                <TrendingUp className="h-4 w-4 text-blue-600 mr-1" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">R$ 24.587,50</div>
            <div className="flex items-center text-xs text-blue-600 mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +8,2% em relação ao período anterior
            </div>
          </CardContent>
        </Card>

        {/* Produtos Vendidos */}
        <Card className="bg-purple-50 border-purple-100 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-sm font-medium text-purple-700">Produtos Vendidos</CardTitle>
              <div className="flex items-center mt-1">
                <Package className="h-4 w-4 text-purple-600 mr-1" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">479</div>
            <div className="flex items-center text-xs text-purple-600 mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +15,3% em relação ao período anterior
            </div>
          </CardContent>
        </Card>

        {/* Margem Média */}
        <Card className="bg-red-50 border-red-100 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-sm font-medium text-red-700">Margem Média</CardTitle>
              <div className="flex items-center mt-1">
                <Percent className="h-4 w-4 text-red-600 mr-1" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-900">52,7%</div>
            <div className="flex items-center text-xs text-red-600 mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +2,1% em relação ao período anterior
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 mb-6">
        <Button variant="default" className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6">
          Produtos Mais Vendidos
        </Button>
        <Button variant="ghost" className="text-gray-600 hover:text-gray-900 rounded-full px-6">
          Margens por Categoria
        </Button>
        <Button variant="ghost" className="text-gray-600 hover:text-gray-900 rounded-full px-6">
          Performance Geral
        </Button>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Produtos por Quantidade */}
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-pink-500" />
              <CardTitle className="text-lg font-semibold text-gray-900">Top Produtos por Quantidade</CardTitle>
            </div>
            <CardDescription className="text-gray-600">Produtos mais vendidos no período</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topProductsData.slice(0, 3)}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => value.length > 15 ? value.substring(0, 15) + '...' : value}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip 
                    formatter={(value, name) => [value, name === 'quantity' ? 'Quantidade' : 'Receita']}
                    labelFormatter={(label) => `Produto: ${label}`}
                  />
                  <Bar dataKey="quantity" fill="#ec4899" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Ranking de Produtos */}
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <CardTitle className="text-lg font-semibold text-gray-900">Ranking de Produtos</CardTitle>
            </div>
            <CardDescription className="text-gray-600">Performance detalhada por produto</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProductsData.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{product.name}</div>
                      <div className="text-xs text-gray-500">🌹 Buquês</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 text-sm">{product.quantity} vendidos</div>
                    <div className="text-xs text-green-600 font-medium">R$ {product.revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}