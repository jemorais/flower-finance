'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, DollarSign, Target, FileText, TrendingUp, Package, Percent } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Flower Finance</h1>
              <p className="text-gray-600 text-sm">Sistema de gestão financeira para floricultura</p>
            </div>
          </div>
          <Link href="/dashboard">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">
              Acessar Dashboard
            </Button>
          </Link>
        </div>

        {/* Metric Cards Preview */}
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

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Dashboard */}
          <Link href="/dashboard">
            <Card className="bg-pink-50 border-pink-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-pink-900">Dashboard</CardTitle>
                <CardDescription className="text-pink-700">
                  Visão geral do negócio
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          {/* Relatórios */}
          <Link href="/dashboard/reports">
            <Card className="bg-purple-50 border-purple-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-purple-900">Relatórios</CardTitle>
                <CardDescription className="text-purple-700">
                  Análises detalhadas e métricas
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          {/* Transações */}
          <Link href="/dashboard/transactions">
            <Card className="bg-blue-50 border-blue-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-blue-900">Transações</CardTitle>
                <CardDescription className="text-blue-700">
                  Histórico de vendas e compras
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>


        </div>
      </div>
    </div>
  );
}