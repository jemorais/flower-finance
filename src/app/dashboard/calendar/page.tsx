'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Calendar, 
  Heart, 
  Gift, 
  Flower, 
  Bell, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Plus,
  Clock,
  Target
} from 'lucide-react'
import { SeasonalEvent } from '@/types'

// Mock data para eventos sazonais
const mockSeasonalEvents: SeasonalEvent[] = [
  {
    id: '1',
    name: 'Dia dos Namorados',
    date: new Date('2024-06-12'),
    type: 'romantic',
    description: 'Principal data comemorativa para vendas de flores',
    suggestedProducts: ['Buquê de Rosas Vermelhas', 'Arranjo Romântico', 'Cesta de Flores'],
    promotionSuggestion: '15% de desconto em arranjos românticos',
    expectedDemandIncrease: 300,
    preparationDays: 15,
    isActive: true
  },
  {
    id: '2',
    name: 'Dia das Mães',
    date: new Date('2024-05-12'),
    type: 'family',
    description: 'Segunda maior data para floricultura',
    suggestedProducts: ['Orquídeas', 'Arranjo Misto', 'Plantas Decorativas'],
    promotionSuggestion: '20% de desconto para compras acima de R$ 100',
    expectedDemandIncrease: 250,
    preparationDays: 10,
    isActive: true
  },
  {
    id: '3',
    name: 'Páscoa',
    date: new Date('2024-03-31'),
    type: 'religious',
    description: 'Decorações e arranjos temáticos',
    suggestedProducts: ['Arranjos Pastel', 'Flores Brancas', 'Decoração Temática'],
    promotionSuggestion: 'Kit Páscoa com 10% de desconto',
    expectedDemandIncrease: 150,
    preparationDays: 7,
    isActive: false
  },
  {
    id: '4',
    name: 'Dia da Mulher',
    date: new Date('2024-03-08'),
    type: 'celebration',
    description: 'Homenagem às mulheres',
    suggestedProducts: ['Tulipas', 'Rosas Coloridas', 'Arranjos Delicados'],
    promotionSuggestion: 'Frete grátis para entregas no dia',
    expectedDemandIncrease: 180,
    preparationDays: 5,
    isActive: false
  },
  {
    id: '5',
    name: 'Natal',
    date: new Date('2024-12-25'),
    type: 'religious',
    description: 'Decorações natalinas e arranjos festivos',
    suggestedProducts: ['Arranjos Natalinos', 'Poinsétias', 'Decoração Festiva'],
    promotionSuggestion: 'Combo Natal com 25% de desconto',
    expectedDemandIncrease: 200,
    preparationDays: 20,
    isActive: true
  }
]

const getEventTypeIcon = (type: string) => {
  switch (type) {
    case 'romantic': return <Heart className="w-4 h-4 text-red-500" />
    case 'family': return <Gift className="w-4 h-4 text-pink-500" />
    case 'religious': return <Flower className="w-4 h-4 text-purple-500" />
    case 'celebration': return <TrendingUp className="w-4 h-4 text-blue-500" />
    default: return <Calendar className="w-4 h-4 text-gray-500" />
  }
}

const getEventTypeColor = (type: string) => {
  switch (type) {
    case 'romantic': return 'bg-red-50 border-red-200 text-red-800'
    case 'family': return 'bg-pink-50 border-pink-200 text-pink-800'
    case 'religious': return 'bg-purple-50 border-purple-200 text-purple-800'
    case 'celebration': return 'bg-blue-50 border-blue-200 text-blue-800'
    default: return 'bg-gray-50 border-gray-200 text-gray-800'
  }
}

const getDaysUntilEvent = (eventDate: Date) => {
  const today = new Date()
  const diffTime = eventDate.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

export default function CalendarPage() {
  const [selectedEvent, setSelectedEvent] = useState<SeasonalEvent | null>(null)
  const [activeTab, setActiveTab] = useState('overview')

  const upcomingEvents = mockSeasonalEvents
    .filter(event => getDaysUntilEvent(event.date) >= 0)
    .sort((a, b) => getDaysUntilEvent(a.date) - getDaysUntilEvent(b.date))
    .slice(0, 3)

  const activeEvents = mockSeasonalEvents.filter(event => event.isActive)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-green-50 dark:from-pink-950 dark:via-gray-900 dark:to-green-950">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-pink-500 to-green-500 rounded-xl">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-green-600 bg-clip-text text-transparent">
                  Calendário Sazonal
                </h1>
                <p className="text-muted-foreground text-lg">
                  Gerencie eventos sazonais e promoções estratégicas
                </p>
              </div>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg">
            <Plus className="h-5 w-5 mr-2" />
            Novo Evento
          </Button>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-pink-700">Próximos Eventos</p>
                  <p className="text-3xl font-bold text-pink-600">{upcomingEvents.length}</p>
                </div>
                <div className="p-3 bg-pink-100 rounded-xl">
                  <Clock className="h-6 w-6 text-pink-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-green-700">Eventos Ativos</p>
                  <p className="text-3xl font-bold text-green-600">{activeEvents.length}</p>
                </div>
                <div className="p-3 bg-green-100 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-purple-700">Aumento Esperado</p>
                  <p className="text-3xl font-bold text-purple-600">
                    {Math.round(activeEvents.reduce((acc, event) => acc + event.expectedDemandIncrease, 0) / activeEvents.length || 0)}%
                  </p>
                </div>
                <div className="p-3 bg-purple-100 rounded-xl">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-muted/50 p-1 rounded-xl">
            <TabsTrigger 
              value="overview" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-lg transition-all duration-200"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Visão Geral
            </TabsTrigger>
            <TabsTrigger 
              value="upcoming" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-lg transition-all duration-200"
            >
              <Clock className="h-4 w-4 mr-2" />
              Próximos
            </TabsTrigger>
            <TabsTrigger 
              value="active" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-lg transition-all duration-200"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Ativos
            </TabsTrigger>
            <TabsTrigger 
              value="analytics" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-green-500 data-[state=active]:text-white rounded-lg transition-all duration-200"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Análises
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Urgent Alerts */}
            {upcomingEvents.filter(event => getDaysUntilEvent(event.date) <= 7 && getDaysUntilEvent(event.date) >= 0).length > 0 && (
              <Alert className="border-destructive/20 bg-destructive/5">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <AlertDescription className="text-destructive font-medium">
                  <strong>Atenção!</strong> Você tem {upcomingEvents.filter(event => getDaysUntilEvent(event.date) <= 7 && getDaysUntilEvent(event.date) >= 0).length} evento(s) 
                  acontecendo nos próximos 7 dias. Prepare-se!
                </AlertDescription>
              </Alert>
            )}

            {/* Events Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockSeasonalEvents.map((event) => {
                const daysUntil = getDaysUntilEvent(event.date)
                const isUpcoming = daysUntil >= 0 && daysUntil <= 30
                const isUrgent = daysUntil >= 0 && daysUntil <= 7

                return (
                  <Card 
                    key={event.id} 
                    className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                      isUrgent ? 'ring-2 ring-destructive/20 bg-gradient-to-br from-destructive/5 to-card' :
                      isUpcoming ? 'ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-card' :
                      'bg-gradient-to-br from-card to-card/50'
                    }`}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${getEventTypeColor(event.type)}`}>
                            {getEventTypeIcon(event.type)}
                          </div>
                          <div>
                            <CardTitle className="text-lg font-semibold">{event.name}</CardTitle>
                            <CardDescription className="text-sm">
                              {event.date.toLocaleDateString('pt-BR')}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge 
                            variant={event.isActive ? "default" : "secondary"}
                            className={event.isActive ? "bg-secondary text-secondary-foreground" : ""}
                          >
                            {event.isActive ? 'Ativo' : 'Inativo'}
                          </Badge>
                          {daysUntil >= 0 && (
                            <Badge 
                              variant={isUrgent ? "destructive" : "outline"}
                              className="text-xs"
                            >
                              {daysUntil === 0 ? 'Hoje' : `${daysUntil} dias`}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-chart-2" />
                          <span className="text-sm font-medium text-chart-2">
                            +{event.expectedDemandIncrease}% de demanda esperada
                          </span>
                        </div>
                        
                        <div className="bg-muted/30 rounded-lg p-3">
                          <p className="text-xs font-medium text-muted-foreground mb-2">Promoção Sugerida:</p>
                          <p className="text-sm font-medium">{event.promotionSuggestion}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => {
                const daysUntil = getDaysUntilEvent(event.date)
                const isUrgent = daysUntil <= event.preparationDays

                return (
                  <Card 
                    key={event.id} 
                    className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                      isUrgent ? 'ring-2 ring-destructive/30 bg-gradient-to-br from-destructive/10 to-card' :
                      'bg-gradient-to-br from-card to-card/50'
                    }`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${getEventTypeColor(event.type)}`}>
                            {getEventTypeIcon(event.type)}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{event.name}</CardTitle>
                            <CardDescription>{event.date.toLocaleDateString('pt-BR')}</CardDescription>
                          </div>
                        </div>
                        <Badge variant={isUrgent ? "destructive" : "secondary"}>
                          {daysUntil} dias
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground mb-2">Produtos Sugeridos:</p>
                          <div className="flex flex-wrap gap-1">
                            {event.suggestedProducts.slice(0, 2).map(product => (
                              <Badge key={product} variant="outline" className="text-xs">
                                {product}
                              </Badge>
                            ))}
                            {event.suggestedProducts.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{event.suggestedProducts.length - 2}
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="bg-muted/30 rounded-lg p-3">
                          <p className="text-xs font-medium text-muted-foreground mb-1">Promoção:</p>
                          <p className="text-sm font-medium text-secondary">{event.promotionSuggestion}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-chart-2 font-medium">
                          +{event.expectedDemandIncrease}% demanda
                        </span>
                        <Button 
                          size="sm" 
                          variant={event.isActive ? "secondary" : "default"}
                          className="text-xs"
                        >
                          {event.isActive ? 'Ativa' : 'Ativar'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="active" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {activeEvents.map((event) => (
                <Card key={event.id} className="border-0 shadow-lg bg-gradient-to-br from-secondary/5 to-card hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-secondary/10 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-secondary">{event.name}</CardTitle>
                          <CardDescription>{event.date.toLocaleDateString('pt-BR')}</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-secondary text-secondary-foreground">Ativa</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-card border rounded-lg p-4">
                      <p className="text-sm font-medium text-muted-foreground mb-2">Promoção Atual:</p>
                      <p className="text-secondary font-semibold">{event.promotionSuggestion}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-1">
                        <p className="text-muted-foreground">Dias Restantes:</p>
                        <p className="font-semibold text-lg">{getDaysUntilEvent(event.date)} dias</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground">Aumento Esperado:</p>
                        <p className="font-semibold text-lg text-chart-2">+{event.expectedDemandIncrease}%</p>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1 text-pink-700 hover:text-pink-800 hover:bg-pink-100">
                        Editar
                      </Button>
                      <Button size="sm" variant="destructive" className="flex-1">
                        Desativar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-chart-2" />
                    Performance por Tipo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {['romantic', 'family', 'religious', 'celebration'].map((type) => {
                    const events = mockSeasonalEvents.filter(e => e.type === type)
                    const avgIncrease = events.reduce((acc, e) => acc + e.expectedDemandIncrease, 0) / events.length || 0
                    
                    return (
                      <div key={type} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                        <div className="flex items-center gap-3">
                          {getEventTypeIcon(type)}
                          <span className="font-medium capitalize">
                            {type === 'romantic' ? 'Romântico' : 
                             type === 'family' ? 'Família' :
                             type === 'religious' ? 'Religioso' : 'Celebração'}
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-chart-2">+{Math.round(avgIncrease)}%</p>
                          <p className="text-xs text-muted-foreground">{events.length} eventos</p>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Calendário Anual
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {mockSeasonalEvents
                    .sort((a, b) => a.date.getMonth() - b.date.getMonth())
                    .map((event) => (
                      <div key={event.id} className={`p-3 rounded-lg border-l-4 ${
                        event.isActive ? 'border-l-secondary bg-secondary/5' : 'border-l-muted bg-muted/10'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {getEventTypeIcon(event.type)}
                            <div>
                              <p className="font-medium">{event.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {event.date.toLocaleDateString('pt-BR', { month: 'long', day: 'numeric' })}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant={event.isActive ? "default" : "secondary"} className="mb-1">
                              {event.isActive ? 'Ativa' : 'Inativa'}
                            </Badge>
                            <p className="text-xs text-chart-2 font-medium">
                              +{event.expectedDemandIncrease}%
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  )
}