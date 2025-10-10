'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { 
  Target, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  Plus,
  Edit,
  DollarSign,
  Calendar
} from 'lucide-react'


interface BudgetGoal {
  id: string
  title: string
  targetAmount: number
  currentAmount: number
  category: string
  deadline: string
  status: 'on-track' | 'at-risk' | 'completed' | 'overdue'
}

interface NewGoalForm {
  title: string
  targetAmount: number
  currentAmount: number
  category: string
  deadline: string
  status: 'on-track' | 'at-risk' | 'completed' | 'overdue'
}

const mockBudgetGoals: BudgetGoal[] = [
  {
    id: '1',
    title: 'Meta de Faturamento Mensal',
    targetAmount: 5000,
    currentAmount: 4500,
    category: 'Receita',
    deadline: '2024-01-31',
    status: 'on-track'
  },
  {
    id: '2',
    title: 'Controle de Despesas Operacionais',
    targetAmount: 2500,
    currentAmount: 2800,
    category: 'Despesas',
    deadline: '2024-01-31',
    status: 'at-risk'
  },
  {
    id: '3',
    title: 'Reserva de Emergência',
    targetAmount: 10000,
    currentAmount: 7500,
    category: 'Reserva',
    deadline: '2024-06-30',
    status: 'on-track'
  },
  {
    id: '4',
    title: 'Investimento em Equipamentos',
    targetAmount: 3000,
    currentAmount: 3000,
    category: 'Investimento',
    deadline: '2024-01-15',
    status: 'completed'
  }
]

const monthlyBudget = {
  totalIncome: 5000,
  currentIncome: 4500,
  totalExpenses: 2500,
  currentExpenses: 2800,
  categories: [
    { name: 'Fornecedores', budget: 1200, spent: 1350, percentage: 112.5 },
    { name: 'Aluguel e Utilidades', budget: 800, spent: 800, percentage: 100 },
    { name: 'Marketing', budget: 300, spent: 250, percentage: 83.3 },
    { name: 'Transporte', budget: 200, spent: 180, percentage: 90 },
    { name: 'Outros', budget: 200, spent: 220, percentage: 110 }
  ]
}

export default function BudgetPage() {
  const [goals, setGoals] = useState<BudgetGoal[]>(mockBudgetGoals)
  const [showNewGoalForm, setShowNewGoalForm] = useState(false)
  const [newGoal, setNewGoal] = useState<NewGoalForm>({
    title: '',
    targetAmount: 0,
    currentAmount: 0,
    category: '',
    deadline: '',
    status: 'on-track'
  })

  const handleInputChange = (field: keyof NewGoalForm, value: string) => {
    let parsedValue: string | number = value
    if (field === 'targetAmount' || field === 'currentAmount') {
      parsedValue = Number(value)
    }
    setNewGoal(prev => ({ ...prev, [field]: parsedValue }))
  }

  const handleSave = () => {
    const goal: BudgetGoal = {
      ...newGoal,
      id: (goals.length + 1).toString(),
    }
    setGoals([...goals, goal])
    setNewGoal({
      title: '',
      targetAmount: 0,
      currentAmount: 0,
      category: '',
      deadline: '',
      status: 'on-track'
    })
    setShowNewGoalForm(false)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'on-track': return 'bg-green-100 text-green-800'
      case 'at-risk': return 'bg-yellow-100 text-yellow-800'
      case 'overdue': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4" />
      case 'on-track': return <TrendingUp className="h-4 w-4" />
      case 'at-risk': return <AlertCircle className="h-4 w-4" />
      case 'overdue': return <AlertCircle className="h-4 w-4" />
      default: return <Target className="h-4 w-4" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Concluída'
      case 'on-track': return 'No Prazo'
      case 'at-risk': return 'Em Risco'
      case 'overdue': return 'Atrasada'
      default: return 'Pendente'
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center shadow-sm">
              <Target className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-pink-800">
                Orçamento e Metas
              </h1>
              <p className="text-pink-600 mt-1">Gerencie suas metas financeiras e orçamento</p>
            </div>
          </div>
          <Button 
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
            onClick={() => setShowNewGoalForm(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Nova Meta
          </Button>
        </div>

      {/* Resumo do Orçamento Mensal */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-white border shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-900">Receita Mensal</CardTitle>
            <div className="p-2 bg-green-100 rounded-lg">
              <DollarSign className="h-4 w-4 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">R$ {monthlyBudget.totalIncome.toLocaleString('pt-BR')}</div>
             <p className="text-xs text-gray-500">
               Atual: R$ {monthlyBudget.currentIncome.toLocaleString('pt-BR')}
             </p>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min((monthlyBudget.currentIncome / monthlyBudget.totalIncome) * 100, 100)}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 shadow-lg hover:shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-red-800">Despesas Mensais</CardTitle>
            <div className="p-2 bg-red-100 rounded-lg">
              <TrendingUp className="h-4 w-4 text-red-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-700">R$ {monthlyBudget.totalExpenses.toLocaleString('pt-BR')}</div>
             <p className="text-xs text-red-600">
               Gasto: R$ {monthlyBudget.currentExpenses.toLocaleString('pt-BR')}
             </p>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  monthlyBudget.currentExpenses > monthlyBudget.totalExpenses ? 'bg-red-600' : 'bg-yellow-600'
                }`}
                style={{ width: `${Math.min((monthlyBudget.currentExpenses / monthlyBudget.totalExpenses) * 100, 100)}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 shadow-lg hover:shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-800">Saldo Líquido</CardTitle>
            <div className="p-2 bg-blue-100 rounded-lg">
              <Target className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700">
               R$ {(monthlyBudget.totalIncome - monthlyBudget.totalExpenses).toLocaleString('pt-BR')}
             </div>
             <p className="text-xs text-blue-600">
               Atual: R$ {(monthlyBudget.currentIncome - monthlyBudget.currentExpenses).toLocaleString('pt-BR')}
             </p>
          </CardContent>
        </Card>
      </div>

      {/* Orçamento por Categoria */}
      <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 shadow-lg hover:shadow-xl">
        <CardHeader>
          <CardTitle className="text-purple-800">Orçamento por Categoria</CardTitle>
          <CardDescription className="text-purple-600">
            Acompanhe seus gastos por categoria
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyBudget.categories.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{category.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                         R$ {category.spent.toLocaleString('pt-BR')} / R$ {category.budget.toLocaleString('pt-BR')}
                       </span>
                      <Badge 
                        variant={category.percentage > 100 ? 'destructive' : 'secondary'}
                        className="text-xs"
                      >
                        {category.percentage.toFixed(1)}%
                      </Badge>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        category.percentage > 100 ? 'bg-red-600' : 'bg-blue-600'
                      }`}
                      style={{ width: `${Math.min(category.percentage, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Metas Financeiras */}
      <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 shadow-lg hover:shadow-xl">
        <CardHeader>
          <CardTitle className="text-pink-800">Metas Financeiras</CardTitle>
          <CardDescription className="text-pink-600">
            Acompanhe o progresso das suas metas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {goals.map((goal) => {
              const progress = (goal.currentAmount / goal.targetAmount) * 100
              return (
                <div key={goal.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(goal.status)}>
                        {getStatusIcon(goal.status)}
                        <span className="ml-1">{getStatusText(goal.status)}</span>
                      </Badge>
                      <span className="font-medium">{goal.title}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{goal.category}</span>
                  </div>
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progresso</span>
                      <span>
                         R$ {goal.currentAmount.toLocaleString('pt-BR')} / R$ {goal.targetAmount.toLocaleString('pt-BR')}
                       </span>
                    </div>
                    <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          progress >= 100 ? 'bg-green-600' : 'bg-blue-600'
                        }`}
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Prazo: {new Date(goal.deadline).toLocaleDateString('pt-BR')}</span>
                    <span>{progress.toFixed(1)}% concluído</span>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Formulário Nova Meta */}
      {showNewGoalForm && (
        <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 shadow-lg hover:shadow-xl">
          <CardHeader>
            <CardTitle className="text-orange-800">Nova Meta Financeira</CardTitle>
            <CardDescription className="text-orange-600">
              Defina uma nova meta para acompanhar seu progresso
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="goal-title">Título da Meta</Label>
                <Input 
                  id="goal-title" 
                  placeholder="Ex: Meta de vendas do mês" 
                  value={newGoal.title} 
                  onChange={(e) => handleInputChange('title', e.target.value)} 
                />
              </div>
              <div>
                <Label htmlFor="goal-category">Categoria</Label>
                <Input 
                  id="goal-category" 
                  placeholder="Ex: Receita, Despesas, Reserva" 
                  value={newGoal.category} 
                  onChange={(e) => handleInputChange('category', e.target.value)} 
                />
              </div>
              <div>
                <Label htmlFor="goal-amount">Valor Alvo (R$)</Label>
                <Input 
                  id="goal-amount" 
                  type="number" 
                  placeholder="0,00" 
                  value={newGoal.targetAmount} 
                  onChange={(e) => handleInputChange('targetAmount', e.target.value)} 
                />
              </div>
              <div>
                <Label htmlFor="goal-deadline">Prazo</Label>
                <Input 
                  id="goal-deadline" 
                  type="date" 
                  value={newGoal.deadline} 
                  onChange={(e) => handleInputChange('deadline', e.target.value)} 
                />
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg" onClick={handleSave}>Criar Meta</Button>
              <Button variant="outline" className="text-pink-700 hover:text-pink-800 hover:bg-pink-100" onClick={() => setShowNewGoalForm(false)}>
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      </div>
    </DashboardLayout>
  )
}