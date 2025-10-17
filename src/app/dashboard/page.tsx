'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { TrendingUp, Package, DollarSign, Percent, BarChart3, Users, Target, FileText, Home, PieChart, Plus, UserCheck, ArrowUpRight, ArrowDownRight, Calendar, Clock, Flower, TrendingDown, Star } from 'lucide-react';
import Link from 'next/link';
import { RevenueExpenseChart } from '@/components/ui/revenue-expense-chart';
import { CategoryPieChart } from '@/components/ui/category-pie-chart';
import { VIPCustomersSection } from '@/components/ui/vip-customers-section';
import { mockCustomers } from '@/lib/mock-data/customers';
import { getVIPStatistics } from '@/lib/vip-classification';

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [transactionFilter, setTransactionFilter] = useState('todas');
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
  // Calcular estatísticas VIP
  const vipStats = getVIPStatistics(mockCustomers);
  
  // Estados para o formulário de nova transação
  const [newTransaction, setNewTransaction] = useState({
    type: 'receita',
    description: '',
    amount: '',
    category: '',
    paymentMethod: 'PIX',
    date: new Date().toLocaleDateString('pt-BR')
  });

  const [transactions] = useState([
    { id: 1, type: 'receita', description: 'Venda de Rosas', amount: 'R$ 450,00', date: '16/01/2024', category: 'Vendas' },
    { id: 2, type: 'despesa', description: 'Compra de Fertilizantes', amount: 'R$ 120,00', date: '15/01/2024', category: 'Suprimentos' },
    { id: 3, type: 'receita', description: 'Arranjo para Casamento', amount: 'R$ 850,00', date: '14/01/2024', category: 'Eventos' },
    { id: 4, type: 'despesa', description: 'Manutenção da Estufa', amount: 'R$ 300,00', date: '14/01/2024', category: 'Manutenção' },
    { id: 5, type: 'receita', description: 'Venda de Orquídeas', amount: 'R$ 280,00', date: '13/01/2024', category: 'Vendas' }
  ]);

  // Filtrar transações baseado no filtro selecionado
  const filteredTransactions = transactions.filter(transaction => {
    if (transactionFilter === 'todas') return true;
    if (transactionFilter === 'entradas') return transaction.type === 'receita';
    if (transactionFilter === 'saidas') return transaction.type === 'despesa';
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-pink-25">
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
              <Dialog open={isNewTransactionModalOpen} onOpenChange={setIsNewTransactionModalOpen}>
                <DialogTrigger asChild>
                  <Button size="sm" className="bg-white text-pink-600 hover:bg-pink-50">
                    <Plus className="w-4 h-4 mr-2" />
                    Nova Transação
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Cards de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-l-green-400 bg-green-50/50 transform hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-sm font-medium text-green-700">Receita Total</CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent className="pt-1">
              <div className="text-2xl font-bold text-green-800">R$ 12.450,00</div>
              <p className="text-xs text-green-600">
                +15% vs mês anterior
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-400 bg-green-50/50 transform hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-sm font-medium text-green-700">Lucro Total</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent className="pt-1">
              <div className="text-2xl font-bold text-green-800">R$ 8.320,00</div>
              <p className="text-xs text-green-600">
                +8% vs mês anterior
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-400 bg-green-50/50 transform hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-sm font-medium text-green-700">Vendas do Mês</CardTitle>
              <Package className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent className="pt-1">
              <div className="text-2xl font-bold text-green-800">342</div>
              <p className="text-xs text-green-600">
                +12% vs mês anterior
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-400 bg-yellow-50/50 transform hover:scale-105 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              <CardTitle className="text-sm font-medium text-yellow-700">Clientes VIP</CardTitle>
              <Star className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent className="pt-1">
              <div className="text-2xl font-bold text-yellow-800">{vipStats.totalVIPs}</div>
              <p className="text-xs text-yellow-600">
                {vipStats.vipPercentage}% da base total
              </p>
            </CardContent>
          </Card>


        </div>

        {/* Pequeno gráfico de Formas de Pagamento */}
        <Card className="mb-6 shadow-lg border-0 transform hover:scale-105 transition-all duration-300">
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
                    Distribuição por método
                  </p>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-3">
            <div className="flex items-end gap-1 h-10">
              <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '45%' }} title="PIX - 45%"></div>
              <div className="flex-1 bg-green-500 rounded-t" style={{ height: '25%' }} title="Cartão Crédito - 25%"></div>
              <div className="flex-1 bg-purple-500 rounded-t" style={{ height: '15%' }} title="Cartão Débito - 15%"></div>
              <div className="flex-1 bg-yellow-500 rounded-t" style={{ height: '10%' }} title="Dinheiro - 10%"></div>
              <div className="flex-1 bg-red-500 rounded-t" style={{ height: '5%' }} title="iFood - 5%"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span className="text-center">PIX</span>
              <span className="text-center">Crédito</span>
              <span className="text-center">Débito</span>
              <span className="text-center">Dinheiro</span>
              <span className="text-center">iFood</span>
            </div>
          </CardContent>
        </Card>

        {/* Seção principal com gráficos e transações */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Gráfico de vendas */}
          <Card className="lg:col-span-2 shadow-lg border-0 transform hover:scale-105 transition-all duration-300">
            <CardHeader className="p-0">
              {/* Header com gradiente */}
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                      <BarChart3 className="h-4 w-4" />
                      Vendas dos Últimos 7 Dias
                    </h3>
                    <p className="text-gray-500 mt-1 text-sm">
                      Acompanhe o desempenho dentro da semana
                    </p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-3">
              <div className="h-56 flex items-end justify-between gap-2">
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
                        style={{ height: `${item.value * 1.8}px` }}
                      ></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {item.amount}
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{item.day}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                <span>Menor: R$ 890</span>
                <span>Média: R$ 1.263</span>
                <span>Maior: R$ 1.650</span>
              </div>
            </CardContent>
          </Card>

          {/* Top produtos */}
          <Card className="shadow-lg border-0 transform hover:scale-105 transition-all duration-300">
            <CardHeader className="p-0">
              {/* Header com gradiente */}
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Top Produtos
                    </h3>
                    <p className="text-gray-500 mt-1 text-sm">
                      Produtos mais vendidos no período
                    </p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-3">
              <div className="space-y-3">
                {[
                  { name: 'Rosas Vermelhas', sales: 89, percentage: 95 },
                  { name: 'Orquídeas Brancas', sales: 67, percentage: 72 },
                  { name: 'Arranjos Casamento', sales: 45, percentage: 48 },
                  { name: 'Buquê Misto', sales: 38, percentage: 41 },
                  { name: 'Plantas Decorativas', sales: 29, percentage: 31 }
                ].map((product, index) => (
                  <div key={index} className="space-y-1">
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

        {/* Seção de Gráficos Interativos */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          {/* Gráfico de Receitas vs Despesas */}
          <Card className="shadow-lg border-0 transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              <RevenueExpenseChart />
            </CardContent>
          </Card>

          {/* Gráfico de Distribuição por Categorias */}
          <Card className="shadow-lg border-0 transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              <CategoryPieChart />
            </CardContent>
          </Card>
        </div>

        {/* Transações Recentes */}
        <Card className="mb-8 shadow-lg border-0 transform hover:scale-105 transition-all duration-300">
          <CardContent className="p-0">
            {/* Header com gradiente */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Transações Recentes
                  </h3>
                  <p className="text-gray-500 mt-1 text-sm">
                    Últimas movimentações financeiras
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Select value={transactionFilter} onValueChange={setTransactionFilter}>
                    <SelectTrigger className="w-36 bg-white/70 hover:bg-white/90 text-gray-600 border-gray-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todas">Todas</SelectItem>
                      <SelectItem value="entradas">Entradas</SelectItem>
                      <SelectItem value="saidas">Saídas</SelectItem>
                    </SelectContent>
                  </Select>
                  <Link href="/dashboard/transactions">
                    <Button variant="outline" size="sm" className="bg-white/70 hover:bg-white/90 text-gray-600 border-gray-200">
                      Ver Todas
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Conteúdo das transações */}
            <div className="p-6">
              <div className="space-y-2">
                {filteredTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${transaction.type === 'receita' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <div>
                        <p className="font-medium text-sm">{transaction.description}</p>
                        <p className="text-xs text-gray-500">{transaction.category} • {transaction.date}</p>
                      </div>
                    </div>
                    <span className={`font-semibold text-sm ${transaction.type === 'receita' ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.type === 'receita' ? '+' : '-'} {transaction.amount}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">+R$ 1.580,00</div>
                    <div className="text-sm text-gray-500">Total Receitas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">-R$ 420,00</div>
                    <div className="text-sm text-gray-500">Total Despesas</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modal de Nova Transação */}
        <Dialog open={isNewTransactionModalOpen} onOpenChange={setIsNewTransactionModalOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Cadastrar Nova Transação</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="type">Tipo</Label>
                <Select 
                  value={newTransaction.type} 
                  onValueChange={(value) => setNewTransaction({...newTransaction, type: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="receita">Receita</SelectItem>
                    <SelectItem value="despesa">Despesa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  placeholder="Descreva a transação..."
                  value={newTransaction.description}
                  onChange={(e) => setNewTransaction({...newTransaction, description: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Categoria</Label>
                <Select 
                  value={newTransaction.category} 
                  onValueChange={(value) => setNewTransaction({...newTransaction, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {newTransaction.type === 'receita' ? (
                      // Categorias para RECEITAS
                      <>
                        <SelectItem value="buques">Buquês</SelectItem>
                        <SelectItem value="arranjos">Arranjos Florais</SelectItem>
                        <SelectItem value="decoracao">Decoração de Eventos</SelectItem>
                        <SelectItem value="cestas">Cestas de Chocolate</SelectItem>
                        <SelectItem value="plantas-vendas">Plantas Ornamentais</SelectItem>
                        <SelectItem value="coroas">Coroas de Flores</SelectItem>
                        <SelectItem value="casamentos">Casamentos</SelectItem>
                        <SelectItem value="aniversarios">Aniversários</SelectItem>
                        <SelectItem value="presentes">Presentes Especiais</SelectItem>
                        <SelectItem value="delivery">Delivery</SelectItem>
                      </>
                    ) : (
                      // Categorias para DESPESAS
                      <>
                        <SelectItem value="vasos">Compra de Vasos</SelectItem>
                        <SelectItem value="flores-estoque">Reposição de Flores</SelectItem>
                        <SelectItem value="plantas-estoque">Compra de Plantas</SelectItem>
                        <SelectItem value="fertilizantes">Fertilizantes e Adubos</SelectItem>
                        <SelectItem value="embalagens">Embalagens e Papel</SelectItem>
                        <SelectItem value="ferramentas">Ferramentas de Jardinagem</SelectItem>
                        <SelectItem value="transporte">Transporte e Combustível</SelectItem>
                        <SelectItem value="fornecedores">Pagamento a Fornecedores</SelectItem>
                        <SelectItem value="manutencao">Manutenção da Loja</SelectItem>
                        <SelectItem value="utilidades">Água, Luz e Internet</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Valor</Label>
                <Input
                  id="amount"
                  type="text"
                  placeholder="R$ 0,00"
                  value={newTransaction.amount}
                  onChange={(e) => setNewTransaction({...newTransaction, amount: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Data</Label>
                <Input
                  id="date"
                  type="text"
                  placeholder="dd/mm/aaaa"
                  value={newTransaction.date}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length >= 2) value = value.substring(0,2) + '/' + value.substring(2);
                    if (value.length >= 5) value = value.substring(0,5) + '/' + value.substring(5,9);
                    setNewTransaction({...newTransaction, date: value});
                  }}
                  maxLength={10}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="paymentMethod">Forma de Pagamento</Label>
                <Select 
                  value={newTransaction.paymentMethod} 
                  onValueChange={(value) => setNewTransaction({...newTransaction, paymentMethod: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a forma de pagamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PIX">PIX</SelectItem>
                    <SelectItem value="Dinheiro">Dinheiro</SelectItem>
                    <SelectItem value="Cartão de Débito">Cartão de Débito</SelectItem>
                    <SelectItem value="Cartão de Crédito">Cartão de Crédito</SelectItem>
                    <SelectItem value="Débito Automático">Débito Automático</SelectItem>
                    <SelectItem value="iFood">iFood</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                className="w-full" 
                onClick={() => {
                  // Aqui você pode adicionar a lógica para salvar a transação
                  console.log('Nova transação:', newTransaction);
                  setIsNewTransactionModalOpen(false);
                  // Reset do formulário
                  setNewTransaction({
                    type: 'receita',
                    description: '',
                    amount: '',
                    category: '',
                    paymentMethod: 'PIX',
                    date: new Date().toLocaleDateString('pt-BR')
                  });
                }}
              >
                Salvar
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Seção de Clientes VIP */}
        <div className="mb-8">
          <VIPCustomersSection />
        </div>

      </div>
    </div>
  );
}