'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel } from '@/components/ui/carousel';
import { Heart, Flower, Gift, Star, Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, Instagram, MessageCircle, Palette, User, Send } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <Flower className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Yasmin Flores</h1>
                <p className="text-gray-600 text-sm">Flores que falam por você</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-700 hover:text-pink-600 transition-all duration-300 hover:scale-105">Serviços</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-all duration-300 hover:scale-105">Sobre</a>
              <a href="#testimonials" className="text-gray-700 hover:text-pink-600 transition-all duration-300 hover:scale-105">Depoimentos</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-all duration-300 hover:scale-105">Contato</a>
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Área Administrativa
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-hero-advanced section-transition section-separator parallax-advanced relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="parallax-layer parallax-back absolute inset-0 opacity-30"></div>
        <div className="parallax-layer parallax-mid absolute inset-0 opacity-50"></div>
        <div className="gradient-overlay-soft absolute inset-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Flores que <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 animate-pulse">encantam</span> e <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 animate-pulse">emocionam</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Há mais de 15 anos criando momentos especiais com as mais belas flores e arranjos personalizados. 
                  Cada bouquet conta uma história única de amor e carinho.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Heart className="w-5 h-5 mr-2" />
                    Fazer Pedido
                  </Button>
                  <Button size="lg" variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50 transition-all duration-300 hover:scale-105">
                    <Phone className="w-5 h-5 mr-2" />
                    (11) 99999-9999
                  </Button>
                </div>
              </div>
              <div className="relative animate-slide-in-right">
                <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300">
                        <Flower className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-pink-900">Arranjos Frescos</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300">
                        <Gift className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-purple-900">Entrega Rápida</p>
                      </div>
                      <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300">
                        <Heart className="w-8 h-8 text-rose-600 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-rose-900">Feito com Amor</p>
                      </div>
                      <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300">
                        <Star className="w-8 h-8 text-violet-600 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-violet-900">Qualidade Premium</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-about-advanced section-transition section-separator py-20 px-6 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-up">Nossos Serviços</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-up">
              Oferecemos uma ampla gama de serviços florais para tornar seus momentos ainda mais especiais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-advanced shimmer-advanced bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-pink-900">Buquês Românticos</CardTitle>
                <CardDescription className="text-pink-700">
                  Arranjos especiais para declarações de amor e momentos íntimos
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-2 text-sm text-pink-800">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-pink-600" />Rosas premium</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-pink-600" />Embalagem elegante</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-pink-600" />Cartão personalizado</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-advanced shimmer-advanced bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-purple-900">Eventos Especiais</CardTitle>
                <CardDescription className="text-purple-700">
                  Decoração floral completa para casamentos, aniversários e celebrações
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-2 text-sm text-purple-800">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-purple-600" />Consultoria personalizada</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-purple-600" />Montagem no local</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-purple-600" />Flores sazonais</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-advanced shimmer-advanced bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-up">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Flower className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-purple-900">Plantas Ornamentais</CardTitle>
                <CardDescription className="text-purple-700">
                  Plantas para decoração de ambientes internos e externos
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-2 text-sm text-purple-800">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-purple-600" />Vasos decorativos</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-purple-600" />Cuidados inclusos</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-purple-600" />Garantia de qualidade</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-about-advanced section-transition section-separator parallax-advanced py-20 px-6 animate-fade-in relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Nossa História</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fundada em 2008 pela florista Maria Silva, a Flower Finance nasceu do sonho de 
                espalhar beleza e alegria através das flores. Com mais de 15 anos de experiência, 
                nos tornamos referência em qualidade e atendimento personalizado.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Cada arranjo é cuidadosamente criado com flores frescas selecionadas diariamente, 
                garantindo que nossos clientes recebam sempre o melhor em qualidade e durabilidade.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">15+</div>
                  <div className="text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5000+</div>
                  <div className="text-gray-600">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 animate-slide-in-right">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Por que nos escolher?</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Flores Sempre Frescas</h5>
                      <p className="text-gray-600 text-sm">Recebemos flores diariamente de produtores locais</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Entrega Rápida</h5>
                      <p className="text-gray-600 text-sm">Entregamos em até 2 horas na região metropolitana</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Atendimento Personalizado</h5>
                      <p className="text-gray-600 text-sm">Cada cliente é único e merece atenção especial</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência Única Section */}
      <section className="section-experience-advanced section-transition section-separator parallax-advanced py-20 px-6 animate-fade-in relative overflow-hidden">
        <div className="parallax-layer parallax-mid absolute inset-0 opacity-40"></div>
        <div className="gradient-overlay-soft absolute inset-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-4">Experiência Única</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Cada arranjo é uma obra de arte criada especialmente para você
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-white/15 backdrop-blur-sm border-white/30 text-white hover:bg-white/25 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/25 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flower className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Flores Frescas</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Selecionamos as melhores flores diariamente para garantir máxima qualidade
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/15 backdrop-blur-sm border-white/30 text-white hover:bg-white/25 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/25 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Entrega Rápida</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Entregamos em até 2 horas na região metropolitana com todo cuidado
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/15 backdrop-blur-sm border-white/30 text-white hover:bg-white/25 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/25 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Feito com Amor</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Cada arranjo é criado com dedicação pelos nossos floristas especializados
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/15 backdrop-blur-sm border-white/30 text-white hover:bg-white/25 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/25 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Qualidade Premium</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Trabalhamos apenas com fornecedores certificados e flores de primeira
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/15 backdrop-blur-sm border-white/30 text-white hover:bg-white/25 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/25 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Personalização</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Criamos arranjos únicos e personalizados para cada ocasião especial
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/15 backdrop-blur-sm border-white/30 text-white hover:bg-white/25 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/25 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Suporte 24h</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Atendimento especializado disponível 24 horas para suas necessidades
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 shadow-lg hover:shadow-xl transition-all duration-300">
              <MessageCircle className="w-5 h-5 mr-2" />
              Fazer Pedido
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Nossos Arranjos Section */}
      <section className="section-gallery-advanced section-transition section-separator parallax-advanced py-20 px-6 animate-fade-in relative overflow-hidden">
        <div className="parallax-layer parallax-front absolute inset-0 opacity-30"></div>
        <div className="gradient-overlay-soft absolute inset-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-4 animate-slide-in-up">Nossos Arranjos</h3>
          <p className="text-xl text-pink-100 mb-12 animate-slide-in-up">
            Conheça alguns dos nossos trabalhos mais especiais
          </p>
          
          <Carousel 
            itemsPerView={3}
            autoPlay={true}
            interval={3000}
            showDots={true}
            showArrows={true}
            className="animate-slide-in-up"
          >
            <div className="px-3">
              <Card className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/images/flowers/arranjos/Flores-diversas.png" 
                    alt="Arranjo Especial"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-semibold mb-1">Arranjo Especial</h4>
                    <p className="text-purple-100 text-sm">
                      Perfeito para momentos únicos
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="px-3">
              <Card className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/images/flowers/arranjos/Flores-e-chocolates.png" 
                    alt="Cesta de Flores"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-semibold mb-1">Cesta de Flores</h4>
                    <p className="text-pink-100 text-sm">
                      Ideal para presentear
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="px-3">
              <Card className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/images/flowers/arranjos/Arranhos-premium.png" 
                    alt="Arranjo Premium"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-semibold mb-1">Arranjo Premium</h4>
                    <p className="text-purple-100 text-sm">
                      Máxima qualidade e sofisticação
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="px-3">
              <Card className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/images/flowers/arranjos/Personalizados.png" 
                    alt="Buquê Personalizado"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-semibold mb-1">Buquê Personalizado</h4>
                    <p className="text-rose-100 text-sm">
                      Criado especialmente para você
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="px-3">
              <Card className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/images/flowers/arranjos/Vasos-de-vidro.png" 
                    alt="Vasos de Vidro"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-semibold mb-1">Vasos de Vidro</h4>
                    <p className="text-indigo-100 text-sm">
                      Elegância e durabilidade
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="px-3">
              <Card className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/images/flowers/arranjos/Diversos.png" 
                    alt="Arranjos Diversos"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-semibold mb-1">Arranjos Diversos</h4>
                    <p className="text-purple-100 text-sm">
                      Variedade para todos os gostos
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </Carousel>
        </div>
      </section>
      <section id="testimonials" className="section-testimonials-advanced section-transition section-separator parallax-advanced py-20 px-6 animate-fade-in relative overflow-hidden">
        <div className="parallax-layer parallax-back absolute inset-0 opacity-25"></div>
        <div className="gradient-overlay-soft absolute inset-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-up">O que nossos clientes dizem</h3>
            <p className="text-xl text-gray-600 animate-slide-in-up">Depoimentos reais de quem confia em nosso trabalho</p>
          </div>
          
          <Carousel 
            itemsPerView={2}
            autoPlay={true}
            interval={4000}
            showDots={true}
            showArrows={true}
            className="animate-slide-in-up"
          >
            <div className="px-4">
              <Card className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                    "Flores lindíssimas e atendimento excepcional! Minha esposa ficou emocionada com o buquê de aniversário. Recomendo muito!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      J
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">João Silva</p>
                      <p className="text-gray-600 text-sm">Cliente há 3 anos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="px-4">
              <Card className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                    "A decoração do meu casamento ficou perfeita! Superou todas as minhas expectativas. A qualidade é incomparável!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      A
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Ana Costa</p>
                      <p className="text-gray-600 text-sm">Noiva 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="px-4">
              <Card className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                    "Sempre que preciso de flores, é aqui que venho. Qualidade impecável e preços justos! Profissionalismo total!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      M
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Maria Santos</p>
                      <p className="text-gray-600 text-sm">Cliente fiel</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="px-4">
              <Card className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                    "Excelente custo-benefício e um carinho especial em cada detalhe. Yasmin Flores se tornou minha floricultura de confiança!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      C
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Carlos Oliveira</p>
                      <p className="text-gray-600 text-sm">Cliente há 3 anos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="px-4">
              <Card className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                    "Superou todas as expectativas! O arranjo para meu casamento ficou simplesmente deslumbrante. Obrigada por tornar nosso dia ainda mais especial!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      L
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Lucia Ferreira</p>
                      <p className="text-gray-600 text-sm">Cliente há 8 meses</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta-advanced section-transition section-separator parallax-advanced py-20 px-6 animate-fade-in relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6 animate-slide-in-up">
            Pronto para encantar alguém especial?
          </h3>
          <p className="text-xl text-purple-100 mb-8 animate-slide-in-up">
            Entre em contato conosco e crie momentos inesquecíveis com nossas flores
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-purple-50 hover:scale-105 transition-all duration-300 font-semibold px-8 py-4 text-lg shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-600 hover:scale-105 transition-all duration-300 font-semibold px-8 py-4 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-purple-50 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4 animate-slide-in-up">Faça Seu Pedido</h3>
            <p className="text-xl text-gray-600 animate-slide-in-up">
              Preencha o formulário abaixo e entraremos em contato rapidamente
            </p>
          </div>
          
          <Card className="bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-slide-in-up">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Nome Completo</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Telefone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Tipo de Arranjo</label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300">
                      <option>Selecione o tipo</option>
                      <option>Buquê Romântico</option>
                      <option>Arranjo para Mesa</option>
                      <option>Cesta de Flores</option>
                      <option>Decoração de Evento</option>
                      <option>Personalizado</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Data de Entrega</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Endereço de Entrega</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                    placeholder="Rua, número, bairro, cidade"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Observações</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300 resize-none"
                    placeholder="Descreva detalhes específicos, cores preferidas, ocasião especial..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar Pedido
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-white to-purple-50 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4 animate-slide-in-up">Entre em Contato</h3>
            <p className="text-xl text-gray-600 animate-slide-in-up">Estamos aqui para tornar seus momentos ainda mais especiais</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-in-up">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-pink-900 mb-2">Telefone</h4>
                <p className="text-pink-700 font-medium">(11) 99999-9999</p>
                <p className="text-pink-700 font-medium">(11) 3333-3333</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-in-up">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-purple-900 mb-2">E-mail</h4>
                <p className="text-purple-700 font-medium">contato@bellarosa.com.br</p>
                <p className="text-purple-700 font-medium">pedidos@bellarosa.com.br</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-in-up">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-purple-900 mb-2">Endereço</h4>
                <p className="text-purple-700 font-medium">Rua das Flores, 123</p>
                <p className="text-purple-700 font-medium">Centro - São Paulo/SP</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-lg animate-slide-in-up">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2 text-gray-700">
                <Clock className="w-5 h-5 text-purple-600" />
                <span className="font-semibold">Horário de Funcionamento:</span>
              </div>
              <div className="text-gray-700 text-center md:text-left">
                <p className="font-medium">Segunda a Sexta: 8h às 18h</p>
                <p className="font-medium">Sábado: 8h às 16h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-footer-advanced section-transition section-separator parallax-advanced text-white py-12 px-6 animate-fade-in relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="animate-slide-in-up">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Flower className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold">Yasmin Flores</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Espalhando beleza e alegria através das mais belas flores há mais de 15 anos.
              </p>
            </div>
            
            <div className="animate-slide-in-up">
              <h5 className="font-semibold mb-4 text-purple-200">Serviços</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-pink-300 transition-colors cursor-pointer">Buquês Românticos</li>
                <li className="hover:text-pink-300 transition-colors cursor-pointer">Eventos Especiais</li>
                <li className="hover:text-pink-300 transition-colors cursor-pointer">Plantas Ornamentais</li>
                <li className="hover:text-pink-300 transition-colors cursor-pointer">Decoração Floral</li>
              </ul>
            </div>
            
            <div className="animate-slide-in-up">
              <h5 className="font-semibold mb-4 text-purple-200">Contato</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-pink-300 transition-colors">(11) 99999-9999</li>
                <li className="hover:text-pink-300 transition-colors">contato@bellarosa.com.br</li>
                <li className="hover:text-pink-300 transition-colors">Rua das Flores, 123</li>
                <li className="hover:text-pink-300 transition-colors">Centro - São Paulo/SP</li>
              </ul>
            </div>
            
            <div className="animate-slide-in-up">
              <h5 className="font-semibold mb-4 text-purple-200">Redes Sociais</h5>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-300 hover:text-pink-400 hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="https://instagram.com/bellarosa_flores" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-300 hover:text-pink-400 hover:scale-105 transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@bellarosa_flores</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center animate-slide-in-up">
            <p className="text-gray-400 text-sm">
              © 2024 Yasmin Flores. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}