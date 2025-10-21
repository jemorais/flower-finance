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
  ShoppingBag,
  CreditCard,
  Star,
  Zap,
  Banknote,
  Smartphone
} from 'lucide-react';
import { CategoryMarginChart } from '@/components/ui/category-margin-chart';

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
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-pink-25 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 bg-gradient-to-r from-pink-500 to-rose-500 p-4 rounded-lg">
          <div>
            <h1 className="text-2xl font-bold text-white">Relatórios Gerenciais</h1>
            <p className="text-white/80 mt-1 text-sm">Análise detalhada do seu negócio e performance</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="bg-white text-pink-600 hover:bg-pink-50">
              <Download className="w-4 h-4 mr-2" />
              Baixar PDF
            </Button>
            <Button onClick={handleExport} className="bg-white text-pink-600 hover:bg-pink-50">
              <FileText className="w-4 h-4 mr-2" />
              Exportar Excel
            </Button>
          </div>
        </div>

        {/* Main Metrics - Cards Superiores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="border-l-4 border-l-green-400 bg-green-50/50 transform hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-700">Receita Total</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl font-bold text-green-800">R$ 46.670,00</div>
              <p className="text-xs text-green-600">+15% vs mês anterior</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-400 bg-red-50/50 transform hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-red-700">Despesas</CardTitle>
              <TrendingDown className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl font-bold text-red-800">R$ 28.340,00</div>
              <p className="text-xs text-red-600">+8% vs mês anterior</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-400 bg-blue-50/50 transform hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-700">Produtos Vendidos</CardTitle>
              <Package className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl font-bold text-blue-800">479</div>
              <p className="text-xs text-blue-600">+7% vs mês anterior</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-rose-400 bg-rose-50/50 transform hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-rose-700">Margem de Lucro</CardTitle>
              <BarChart3 className="h-4 w-4 text-rose-500" />
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl font-bold text-rose-800">52.7%</div>
              <p className="text-xs text-rose-600">+2.1% vs mês anterior</p>
            </CardContent>
          </Card>
        </div>

        {/* Grade Principal - 2 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Produtos Mais Vendidos */}
          <Card className="transform hover:scale-105 transition-all duration-300">
            <CardHeader className="p-0">
              {/* Header com gradiente */}
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      Top Produtos
                    </h3>
                    <p className="text-gray-500 mt-1 text-sm">
                      Produtos mais vendidos no período
                    </p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-bold text-pink-600">{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.sales} vendas</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 text-sm">{product.revenue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Margem por Categoria */}
          <Card className="shadow-lg border-0 transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              <CategoryMarginChart />
            </CardContent>
          </Card>
        </div>

        {/* Segunda Linha - 2 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Performance Geral */}
          <Card className="transform hover:scale-105 transition-all duration-300">
            <CardHeader className="p-0">
              {/* Header com gradiente */}
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Performance Geral
                    </h3>
                    <p className="text-gray-500 mt-1 text-sm">
                      Resumo das principais métricas
                    </p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 p-4">
              <div className="space-y-4">
                {/* Novos Clientes */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:shadow-md transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-500 rounded-full">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Novos Clientes</h4>
                      <p className="text-sm text-gray-600">Este mês</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600">23</div>
                    <div className="text-sm text-green-500 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +12% vs anterior
                    </div>
                  </div>
                </div>

                {/* Pedido Médio */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100 hover:shadow-md transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-500 rounded-full">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Pedido Médio</h4>
                      <p className="text-sm text-gray-600">Valor por transação</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">R$ 187</div>
                    <div className="text-sm text-blue-500 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +8% vs anterior
                    </div>
                  </div>
                </div>

                {/* Receita por Cliente */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-100 hover:shadow-md transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-rose-500 rounded-full">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Receita por Cliente</h4>
                      <p className="text-sm text-gray-600">Lifetime value médio</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-rose-600">R$ 2.031</div>
                    <div className="text-sm text-rose-500 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +15% vs anterior
                    </div>
                  </div>
                </div>

                {/* Taxa de Satisfação */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100 hover:shadow-md transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-orange-500 rounded-full">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Taxa de Satisfação</h4>
                      <p className="text-sm text-gray-600">Avaliações positivas</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-orange-600">89%</div>
                    <div className="text-sm text-orange-500 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +3% vs anterior
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Formas de Pagamento */}
          <Card className="transform hover:scale-105 transition-all duration-300">
            <CardHeader className="p-0">
              {/* Header com gradiente */}
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      Formas de Pagamento
                    </h3>
                    <p className="text-gray-500 mt-1 text-sm">
                      Distribuição por método de pagamento
                    </p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0 p-4">
              <div className="space-y-4">
                {/* PIX */}
                 <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:shadow-md transition-all">
                   <div className="flex items-center space-x-4">
                     <div className="p-3 bg-green-500 rounded-full">
                       <Zap className="h-6 w-6 text-white" />
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900">PIX</h4>
                       <p className="text-sm text-gray-600">Pagamento instantâneo</p>
                     </div>
                   </div>
                   <div className="text-right">
                     <div className="text-2xl font-bold text-green-600">45%</div>
                     <div className="text-sm text-gray-600">R$ 21.000</div>
                   </div>
                 </div>

                 {/* Cartão de Crédito */}
                 <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100 hover:shadow-md transition-all">
                   <div className="flex items-center space-x-4">
                     <div className="p-3 bg-blue-500 rounded-full">
                       <CreditCard className="h-6 w-6 text-white" />
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900">Cartão Crédito</h4>
                       <p className="text-sm text-gray-600">Parcelado e à vista</p>
                     </div>
                   </div>
                   <div className="text-right">
                     <div className="text-2xl font-bold text-blue-600">25%</div>
                     <div className="text-sm text-gray-600">R$ 11.675</div>
                   </div>
                 </div>

                 {/* Cartão de Débito */}
                 <div className="flex items-center justify-between p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-100 hover:shadow-md transition-all">
                   <div className="flex items-center space-x-4">
                     <div className="p-3 bg-rose-500 rounded-full">
                       <CreditCard className="h-6 w-6 text-white" />
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900">Cartão Débito</h4>
                       <p className="text-sm text-gray-600">Débito em conta</p>
                     </div>
                   </div>
                   <div className="text-right">
                     <div className="text-2xl font-bold text-rose-600">15%</div>
                     <div className="text-sm text-gray-600">R$ 7.005</div>
                   </div>
                 </div>

                 {/* Dinheiro */}
                 <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100 hover:shadow-md transition-all">
                   <div className="flex items-center space-x-4">
                     <div className="p-3 bg-orange-500 rounded-full">
                       <Banknote className="h-6 w-6 text-white" />
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900">Dinheiro</h4>
                       <p className="text-sm text-gray-600">Pagamento em espécie</p>
                     </div>
                   </div>
                   <div className="text-right">
                     <div className="text-2xl font-bold text-orange-600">10%</div>
                     <div className="text-sm text-gray-600">R$ 4.670</div>
                   </div>
                 </div>

                 {/* iFood */}
                 <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-100 hover:shadow-md transition-all">
                   <div className="flex items-center space-x-4">
                     <div className="p-3 bg-red-500 rounded-full">
                       <Smartphone className="h-6 w-6 text-white" />
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-900">iFood</h4>
                       <p className="text-sm text-gray-600">Plataforma de delivery</p>
                     </div>
                   </div>
                   <div className="text-right">
                     <div className="text-2xl font-bold text-red-600">5%</div>
                     <div className="text-sm text-gray-600">R$ 2.335</div>
                   </div>
                 </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Canais de Venda - Linha Completa */}
        <Card className="transform hover:scale-105 transition-all duration-300">
          <CardHeader className="p-0">
            {/* Header com gradiente */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    Canais de Venda
                  </h3>
                  <p className="text-gray-500 mt-1 text-sm">
                    Performance por canal de vendas
                  </p>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            {/* Gráfico de Linhas Interativo */}
            <div className="relative h-64 mb-6">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                {/* Grid de fundo */}
                <defs>
                  <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Linhas dos canais */}
                {/* Loja Física - Rosa */}
                <path
                  d="M 50 160 Q 120 140 150 120 T 250 100 T 350 80"
                  fill="none"
                  stroke="#ec4899"
                  strokeWidth="3"
                  className="animate-pulse"
                />
                <circle cx="50" cy="160" r="4" fill="#ec4899" />
                <circle cx="150" cy="120" r="4" fill="#ec4899" />
                <circle cx="250" cy="100" r="4" fill="#ec4899" />
                <circle cx="350" cy="80" r="4" fill="#ec4899" />
                
                {/* iFood - Vermelho */}
                <path
                  d="M 50 140 Q 120 130 150 125 T 250 115 T 350 110"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="3"
                  className="animate-pulse"
                  style={{animationDelay: '0.3s'}}
                />
                <circle cx="50" cy="140" r="4" fill="#dc2626" />
                <circle cx="150" cy="125" r="4" fill="#dc2626" />
                <circle cx="250" cy="115" r="4" fill="#dc2626" />
                <circle cx="350" cy="110" r="4" fill="#dc2626" />
                
                {/* WhatsApp - Verde */}
                <path
                  d="M 50 170 Q 120 165 150 160 T 250 150 T 350 140"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="3"
                  className="animate-pulse"
                  style={{animationDelay: '0.6s'}}
                />
                <circle cx="50" cy="170" r="4" fill="#22c55e" />
                <circle cx="150" cy="160" r="4" fill="#22c55e" />
                <circle cx="250" cy="150" r="4" fill="#22c55e" />
                <circle cx="350" cy="140" r="4" fill="#22c55e" />
                
                {/* Site/Online - Azul */}
                <path
                  d="M 50 180 Q 120 175 150 170 T 250 165 T 350 160"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  className="animate-pulse"
                  style={{animationDelay: '0.9s'}}
                />
                <circle cx="50" cy="180" r="4" fill="#3b82f6" />
                <circle cx="150" cy="170" r="4" fill="#3b82f6" />
                <circle cx="250" cy="165" r="4" fill="#3b82f6" />
                <circle cx="350" cy="160" r="4" fill="#3b82f6" />
                
                {/* Labels dos eixos */}
                <text x="30" y="25" className="text-xs fill-gray-500">100%</text>
                <text x="30" y="105" className="text-xs fill-gray-500">50%</text>
                <text x="30" y="185" className="text-xs fill-gray-500">0%</text>
                
                <text x="45" y="195" className="text-xs fill-gray-500">Jan</text>
                <text x="145" y="195" className="text-xs fill-gray-500">Mar</text>
                <text x="245" y="195" className="text-xs fill-gray-500">Mai</text>
                <text x="345" y="195" className="text-xs fill-gray-500">Jul</text>
              </svg>
            </div>
            
            {/* Legenda e Estatísticas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg border border-pink-200 hover:shadow-lg transition-all duration-300">
                <div className="w-4 h-4 bg-pink-500 rounded-full mb-3 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-900">Loja Física</span>
                <div className="font-bold text-2xl text-pink-600 mt-2">60%</div>
                <div className="text-xs text-green-600 mt-1 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12% vs mês anterior
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200 hover:shadow-lg transition-all duration-300">
                <div className="w-4 h-4 bg-red-600 rounded-full mb-3 animate-pulse" style={{animationDelay: '0.3s'}}></div>
                <span className="text-sm font-medium text-gray-900">iFood</span>
                <div className="font-bold text-2xl text-red-600 mt-2">25%</div>
                <div className="text-xs text-green-600 mt-1 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +18% vs mês anterior
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="w-4 h-4 bg-green-500 rounded-full mb-3 animate-pulse" style={{animationDelay: '0.6s'}}></div>
                <span className="text-sm font-medium text-gray-900">WhatsApp</span>
                <div className="font-bold text-2xl text-green-600 mt-2">10%</div>
                <div className="text-xs text-green-600 mt-1 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +5% vs mês anterior
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="w-4 h-4 bg-blue-500 rounded-full mb-3 animate-pulse" style={{animationDelay: '0.9s'}}></div>
                <span className="text-sm font-medium text-gray-900">Site/Online</span>
                <div className="font-bold text-2xl text-blue-600 mt-2">5%</div>
                <div className="text-xs text-red-600 mt-1 flex items-center">
                  <TrendingDown className="w-3 h-3 mr-1" />
                  -2% vs mês anterior
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}