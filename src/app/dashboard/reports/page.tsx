'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Download, 
  Calendar, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Users,
  Target,
  Package,
  BarChart3,
  ShoppingBag
} from 'lucide-react';

const monthlyData = [
  { month: 'Jan', revenue: 45000, expenses: 32000 },
  { month: 'Fev', revenue: 52000, expenses: 35000 },
  { month: 'Mar', revenue: 48000, expenses: 33000 },
  { month: 'Abr', revenue: 61000, expenses: 38000 },
  { month: 'Mai', revenue: 55000, expenses: 36000 },
  { month: 'Jun', revenue: 67000, expenses: 41000 }
];

const topProducts = [
  { name: 'Buquê de Rosas Vermelhas', sales: 156, revenue: 'R$ 15.600,00' },
  { name: 'Arranjo Tropical', sales: 89, revenue: 'R$ 8.900,00' },
  { name: 'Cesta de Flores Mistas', sales: 67, revenue: 'R$ 6.700,00' },
  { name: 'Orquídea Phalaenopsis', sales: 45, revenue: 'R$ 4.500,00' },
  { name: 'Buquê de Girassóis', sales: 34, revenue: 'R$ 3.400,00' }
];

const handleExport = () => {
  let csv = 'Monthly Data\nMonth,Revenue,Expenses\n';
  monthlyData.forEach(d => csv += `${d.month},${d.revenue},${d.expenses}\n`);
  csv += '\nTop Products\nName,Sales,Revenue\n';
  topProducts.forEach(p => csv += `${p.name},${p.sales},${p.revenue}\n`);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'reports.csv';
  link.click();
  URL.revokeObjectURL(url);
};

export default function ReportsPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-lg">
          <div>
            <h1 className="text-2xl font-bold text-white">Relatórios Gerenciais</h1>
            <p className="text-white/80 mt-1 text-sm">Análise detalhada do seu negócio e performance</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
              <Calendar className="w-4 h-4 mr-2" />
              Último 30 dias
            </Button>
            <Button onClick={handleExport} className="bg-white/20 hover:bg-white/30 text-white border border-white/30">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        {/* Main Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Receita Total */}
          <Card className="border-l-4 border-l-rose-400 bg-rose-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-rose-700">Receita Total</CardTitle>
                <div className="flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 text-rose-500 mr-1" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-rose-800">R$ 46.670,00</div>
              <div className="flex items-center text-xs text-rose-600 mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +15% em relação ao mês anterior
              </div>
            </CardContent>
          </Card>

          {/* Despesas */}
          <Card className="border-l-4 border-l-red-400 bg-red-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-red-700">Despesas</CardTitle>
                <div className="flex items-center mt-1">
                  <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-800">R$ 24.567,50</div>
              <div className="flex items-center text-xs text-red-600 mt-1">
                <TrendingDown className="w-3 h-3 mr-1" />
                -5% em relação ao mês anterior
              </div>
            </CardContent>
          </Card>

          {/* Produtos Vendidos */}
          <Card className="border-l-4 border-l-green-400 bg-green-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-green-700">Produtos Vendidos</CardTitle>
                <div className="flex items-center mt-1">
                  <Package className="h-4 w-4 text-green-500 mr-1" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-800">479</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                +7% em relação ao mês anterior
              </div>
            </CardContent>
          </Card>

          {/* Margem de Lucro */}
          <Card className="border-l-4 border-l-rose-400 bg-rose-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-rose-700">Margem de Lucro</CardTitle>
                <div className="flex items-center mt-1">
                  <BarChart3 className="h-4 w-4 text-rose-500 mr-1" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-rose-800">52.7%</div>
              <div className="flex items-center text-xs text-rose-600 mt-1">
                +2.1% em relação ao mês anterior
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">Produtos Mais Vendidos</CardTitle>
                    <CardDescription className="text-gray-600">Performance dos produtos no período</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver Todos
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {/* Simple Bar Chart Representation */}
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-pink-600">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{product.name}</div>
                          <div className="text-sm text-gray-500">{product.sales} vendas</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{product.revenue}</div>
                        <div className="w-24 h-2 bg-gray-200 rounded-full mt-1">
                          <div 
                            className="h-2 bg-pink-500 rounded-full" 
                            style={{ width: `${(product.sales / 156) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Monthly Performance */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Margem por Categoria</CardTitle>
                <CardDescription className="text-gray-600">Análise de rentabilidade por categoria</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-medium text-gray-900">Buquês Premium</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">68.5%</div>
                      <div className="text-xs text-gray-500">R$ 18.450,00</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="font-medium text-gray-900">Arranjos Decorativos</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-blue-600">45.2%</div>
                      <div className="text-xs text-gray-500">R$ 12.300,00</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="font-medium text-gray-900">Plantas e Vasos</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-purple-600">38.7%</div>
                      <div className="text-xs text-gray-500">R$ 8.920,00</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Ranking de Produtos</CardTitle>
                <CardDescription className="text-gray-600">Produtos mais populares</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800">1º</Badge>
                      <span className="text-sm font-medium">Buquê de Rosas Vermelhas</span>
                    </div>
                    <span className="text-xs text-gray-500">156 vendas</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-blue-100 text-blue-800">2º</Badge>
                      <span className="text-sm font-medium">Arranjo Tropical</span>
                    </div>
                    <span className="text-xs text-gray-500">89 vendas</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-orange-100 text-orange-800">3º</Badge>
                      <span className="text-sm font-medium">Cesta de Flores Mistas</span>
                    </div>
                    <span className="text-xs text-gray-500">67 vendas</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Geral */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Performance Geral</CardTitle>
                <CardDescription className="text-gray-600">Indicadores principais</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-600">Novos Clientes</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">23</div>
                      <div className="text-xs text-green-600">+15%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <ShoppingBag className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-600">Pedidos Médios</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">R$ 187</div>
                      <div className="text-xs text-green-600">+8%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Receita por Cliente</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">R$ 2.031</div>
                      <div className="text-xs text-green-600">+12%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}