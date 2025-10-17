'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Flower, Gift, Star, Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, Instagram, MessageCircle, User, MessageSquare, Shield } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Intersection Observer para animações escalonadas
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          
          // Adiciona classe de animação baseada no tipo de elemento
          if (target.classList.contains('stagger-item')) {
            const delay = parseInt(target.dataset.delay || '0')
            // Delay mais suave e progressivo
            setTimeout(() => {
              target.classList.add('animate-fade-in-up')
            }, delay * 1.5) // Multiplica por 1.5 para delays mais espaçados
          }
          
          // Remove o observer após a animação
          observer.unobserve(target)
        }
      })
    }, observerOptions)

    // Observa todos os elementos com classe stagger-item
    const staggerItems = document.querySelectorAll('.stagger-item')
    staggerItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <style jsx>{`
        .animate-slide-continuous {
          animation: slide-continuous 30s linear infinite;
        }
        
        @keyframes slide-continuous {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-200%);
          }
        }
        
        .testimonials-slider-continuous:hover .animate-slide-continuous {
          animation-play-state: paused;
        }

        /* Animações escalonadas para scroll - versão ultra suave */
        .stagger-item {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .animate-stagger-1 { transition-delay: 0.15s; }
        .animate-stagger-2 { transition-delay: 0.3s; }
        .animate-stagger-3 { transition-delay: 0.45s; }
        .animate-stagger-4 { transition-delay: 0.6s; }
        .animate-stagger-5 { transition-delay: 0.75s; }
        .animate-stagger-6 { transition-delay: 0.9s; }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(3deg);
          }
          50% {
            transform: translateY(-10px) rotate(3deg);
          }
        }

        @keyframes gradientX {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes bounceSubtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes pulseSubtle {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(236, 72, 153, 0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-slide-up-delay-1 {
          animation: slideUp 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-slide-up-delay-2 {
          animation: slideUp 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-slide-up-delay-3 {
          animation: slideUp 0.6s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient-x {
          animation: gradientX 3s ease infinite;
        }

        .animate-bounce-subtle {
          animation: bounceSubtle 2s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulseSubtle 2s ease-in-out infinite;
        }
      `}</style>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Flower className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Yasmin Flores</h1>
                <p className="text-gray-600 text-sm">Flores que falam por você</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-700 hover:text-pink-600 transition-colors">Serviços</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">Sobre</a>
              <a href="#testimonials" className="text-gray-700 hover:text-pink-600 transition-colors">Depoimentos</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contato</a>
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                  Área Administrativa
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up-delay-1">
                Flores que <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 animate-gradient-x">encantam</span> e <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 animate-gradient-x">emocionam</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-slide-up-delay-2">
                Há mais de 15 anos criando momentos especiais com as mais belas flores e arranjos personalizados. 
                Cada bouquet conta uma história única de amor e carinho.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delay-3">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 hover:scale-105 hover:shadow-lg transition-all duration-300 animate-pulse-subtle">
                  <Heart className="w-5 h-5 mr-2 animate-bounce-subtle" />
                  Fazer Pedido
                </Button>
                <Button size="lg" variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 hover:scale-105 hover:shadow-md transition-all duration-300">
                  Ver Catálogo
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl p-8 transform rotate-3 shadow-xl animate-float hover:rotate-6 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 transform -rotate-6 shadow-lg hover:-rotate-3 transition-transform duration-500">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl p-4 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 group">
                      <Flower className="w-12 h-12 text-pink-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    </div>
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-4 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 group">
                      <Gift className="w-12 h-12 text-purple-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    </div>
                    <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl p-4 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 group">
                      <Heart className="w-12 h-12 text-rose-500 group-hover:scale-125 group-hover:animate-pulse transition-all duration-300" />
                    </div>
                    <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-4 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 group">
                      <Star className="w-12 h-12 text-pink-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Creations Unified Section */}
      <section id="services" className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4 stagger-item" data-delay="0">Nossos Serviços</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto stagger-item" data-delay="100">
              Conheça nossos serviços florais e veja alguns dos nossos arranjos mais especiais
            </p>
          </div>
          
          {/* Buquês Românticos */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-rose-50 stagger-item" data-delay="200">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Buquês Românticos</CardTitle>
                  <CardDescription className="text-gray-600">
                    Arranjos especiais para declarações de amor e momentos íntimos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-pink-500 mr-2" />Rosas premium</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-pink-500 mr-2" />Embalagem especial</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-pink-500 mr-2" />Cartão personalizado</li>
                  </ul>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-2 gap-4 stagger-item" data-delay="300">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-500">
                  <div className="aspect-square relative">
                    <img 
                      src="/images/flowers/arranjos/Arranhos-premium.png" 
                      alt="Buquê Romântico - Rosas vermelhas premium"
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:saturate-110 transition-all duration-500 filter brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-600/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-3 left-3 right-3 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="font-semibold text-sm mb-1 drop-shadow-lg">Buquê Romântico</h4>
                      <p className="text-xs opacity-90 drop-shadow-md">Rosas vermelhas</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-rose-500/25 transition-all duration-500">
                  <div className="aspect-square relative">
                    <img 
                      src="/images/flowers/arranjos/Diversos.png" 
                      alt="Buquê Delicado - Arranjos diversos"
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:saturate-110 transition-all duration-500 filter brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-600/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-3 left-3 right-3 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="font-semibold text-sm mb-1 drop-shadow-lg">Buquê Delicado</h4>
                      <p className="text-xs opacity-90 drop-shadow-md">Rosas rosadas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Eventos Especiais */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-4 lg:order-1 stagger-item" data-delay="400">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
                  <div className="aspect-square relative">
                    <img 
                      src="/images/flowers/arranjos/Flores-e-chocolates.png" 
                      alt="Casamento - Decoração completa"
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:saturate-110 transition-all duration-500 filter brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-3 left-3 right-3 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="font-semibold text-sm mb-1 drop-shadow-lg">Casamento</h4>
                      <p className="text-xs opacity-90 drop-shadow-md">Decoração completa</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-500">
                  <div className="aspect-square relative">
                    <img 
                      src="/images/flowers/arranjos/Personalizados.png" 
                      alt="Aniversário - Arranjos festivos personalizados"
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:saturate-110 transition-all duration-500 filter brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-600/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-3 left-3 right-3 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="font-semibold text-sm mb-1 drop-shadow-lg">Aniversário</h4>
                      <p className="text-xs opacity-90 drop-shadow-md">Arranjos festivos</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50 lg:order-2 stagger-item" data-delay="500">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Eventos Especiais</CardTitle>
                  <CardDescription className="text-gray-600">
                    Decoração floral completa para casamentos, aniversários e celebrações
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" />Consultoria gratuita</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" />Montagem no local</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-500 mr-2" />Flores frescas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Plantas Ornamentais */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-rose-50 to-purple-50 stagger-item" data-delay="600">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Flower className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Plantas Ornamentais</CardTitle>
                  <CardDescription className="text-gray-600">
                    Plantas e arranjos para decorar sua casa ou escritório
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" />Vasos decorativos</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" />Manutenção inclusa</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rose-500 mr-2" />Entrega grátis</li>
                  </ul>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-2 gap-4 stagger-item" data-delay="700">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500">
                  <div className="aspect-square relative">
                    <img 
                      src="/images/flowers/arranjos/Flores-diversas.png" 
                      alt="Plantas Verdes - Para ambientes"
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:saturate-110 transition-all duration-500 filter brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-3 left-3 right-3 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="font-semibold text-sm mb-1 drop-shadow-lg">Plantas Verdes</h4>
                      <p className="text-xs opacity-90 drop-shadow-md">Para ambientes</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-rose-500/25 transition-all duration-500">
                  <div className="aspect-square relative">
                    <img 
                      src="/images/flowers/arranjos/Vasos-de-vidro.png" 
                      alt="Arranjos Florais - Vasos decorativos"
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:saturate-110 transition-all duration-500 filter brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-600/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-3 left-3 right-3 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="font-semibold text-sm mb-1 drop-shadow-lg">Arranjos Florais</h4>
                      <p className="text-xs opacity-90 drop-shadow-md">Vasos decorativos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6 stagger-item" data-delay="100">Nossa História</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed stagger-item" data-delay="200">
                Fundada em 2008, a Flower Finance nasceu do sonho de levar beleza e emoção através das flores. 
                Começamos como uma pequena floricultura familiar e hoje somos referência em arranjos personalizados.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed stagger-item" data-delay="300">
                Nossa missão é transformar momentos especiais em memórias inesquecíveis, sempre com o carinho 
                e a dedicação que nossos clientes merecem.
              </p>
              
              <div className="grid grid-cols-2 gap-6 stagger-item" data-delay="400">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">15+</div>
                  <div className="text-gray-600">Anos de experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5000+</div>
                  <div className="text-gray-600">Clientes satisfeitos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600 mb-2">50+</div>
                  <div className="text-gray-600">Tipos de flores</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">24h</div>
                  <div className="text-gray-600">Atendimento</div>
                </div>
              </div>
            </div>
            
            <div className="relative stagger-item" data-delay="500">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Star className="w-8 h-8 text-yellow-500 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Qualidade Premium</h4>
                    <p className="text-sm text-gray-600">Flores frescas selecionadas diariamente</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Clock className="w-8 h-8 text-blue-500 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Entrega Rápida</h4>
                    <p className="text-sm text-gray-600">Entregamos no mesmo dia em toda a cidade</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Heart className="w-8 h-8 text-pink-500 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Feito com Amor</h4>
                    <p className="text-sm text-gray-600">Cada arranjo é único e personalizado</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Garantia Total</h4>
                    <p className="text-sm text-gray-600">Satisfação garantida ou seu dinheiro de volta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4 stagger-item" data-delay="100">O que nossos clientes dizem</h3>
            <p className="text-xl text-gray-600 stagger-item" data-delay="200">Depoimentos reais de quem confia em nosso trabalho</p>
          </div>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden stagger-item" data-delay="300">
            <div className="testimonials-slider-continuous">
              {/* Continuous sliding testimonials */}
              <div className="flex animate-slide-continuous">
                {/* First set of testimonials */}
                <div className="flex-shrink-0 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-50 to-white hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-4 italic">
                          "Simplesmente perfeito! O buquê que encomendei para minha esposa ficou lindo demais. 
                          Ela ficou emocionada e eu super satisfeito com o atendimento."
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                            M
                          </div>
                          <div className="ml-3">
                            <div className="font-semibold text-gray-900">Marcos Silva</div>
                            <div className="text-sm text-gray-500">Cliente desde 2020</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-white hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-4 italic">
                          "Fiz a decoração do meu casamento com eles e foi um sonho realizado! 
                          Tudo impecável, flores lindas e um atendimento excepcional."
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                            A
                          </div>
                          <div className="ml-3">
                            <div className="font-semibold text-gray-900">Ana Costa</div>
                            <div className="text-sm text-gray-500">Noiva 2023</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-gradient-to-br from-rose-50 to-white hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-4 italic">
                          "Sempre que preciso de flores para eventos da empresa, recorro à Yasmin Flores. 
                          Nunca me decepcionaram, sempre superando as expectativas!"
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                            R
                          </div>
                          <div className="ml-3">
                            <div className="font-semibold text-gray-900">Roberto Lima</div>
                            <div className="text-sm text-gray-500">Empresário</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Second set of testimonials */}
                <div className="flex-shrink-0 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-white hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-4 italic">
                          "Comprei plantas para decorar meu apartamento e o resultado ficou incrível! 
                          Atendimento personalizado e plantas de excelente qualidade."
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                            C
                          </div>
                          <div className="ml-3">
                            <div className="font-semibold text-gray-900">Carla Mendes</div>
                            <div className="text-sm text-gray-500">Arquiteta</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-4 italic">
                          "Presenteei minha mãe com um arranjo no Dia das Mães e ela ficou emocionada! 
                          Flores frescas, embalagem linda e entrega pontual."
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                            F
                          </div>
                          <div className="ml-3">
                            <div className="font-semibold text-gray-900">Fernando Santos</div>
                            <div className="text-sm text-gray-500">Professor</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-white hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-4 italic">
                          "Serviço impecável! Fizeram a decoração floral da minha formatura e todos elogiaram. 
                          Recomendo de olhos fechados!"
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                            J
                          </div>
                          <div className="ml-3">
                            <div className="font-semibold text-gray-900">Juliana Alves</div>
                            <div className="text-sm text-gray-500">Formanda 2024</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Duplicate first set for seamless loop */}
                <div className="flex-shrink-0 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-50 to-white hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-4 italic">
                          "Simplesmente perfeito! O buquê que encomendei para minha esposa ficou lindo demais. 
                          Ela ficou emocionada e eu super satisfeito com o atendimento."
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                            M
                          </div>
                          <div className="ml-3">
                            <div className="font-semibold text-gray-900">Marcos Silva</div>
                            <div className="text-sm text-gray-500">Cliente desde 2020</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-white hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-4 italic">
                          "Fiz a decoração do meu casamento com eles e foi um sonho realizado! 
                          Tudo impecável, flores lindas e um atendimento excepcional."
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                            A
                          </div>
                          <div className="ml-3">
                            <div className="font-semibold text-gray-900">Ana Costa</div>
                            <div className="text-sm text-gray-500">Noiva 2023</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-gradient-to-br from-rose-50 to-white hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-4 italic">
                          "Sempre que preciso de flores para eventos da empresa, recorro à Yasmin Flores. 
                          Nunca me decepcionaram, sempre superando as expectativas!"
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                            R
                          </div>
                          <div className="ml-3">
                            <div className="font-semibold text-gray-900">Roberto Lima</div>
                            <div className="text-sm text-gray-500">Empresário</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4 stagger-item" data-delay="100">Faça Seu Pedido</h3>
            <p className="text-xl text-gray-600 stagger-item" data-delay="200">Preencha o formulário e receba um orçamento personalizado via WhatsApp!</p>
          </div>
          
          {/* Layout responsivo com duas colunas em telas grandes */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Formulário Principal - ocupa 2/3 do espaço em telas grandes */}
            <div className="xl:col-span-2 stagger-item" data-delay="300">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
                <form className="space-y-6">
                  {/* Dados Pessoais */}
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <User className="w-5 h-5 text-pink-500 mr-2" />
                      Seus Dados
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
                        <input 
                          type="tel" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Detalhes do Pedido */}
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Flower className="w-5 h-5 text-pink-500 mr-2" />
                      Detalhes do Arranjo
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Arranjo</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors">
                          <option>Buquê Romântico</option>
                          <option>Arranjo de Mesa</option>
                          <option>Coroa de Flores</option>
                          <option>Decoração de Evento</option>
                          <option>Personalizado</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Orçamento Desejado</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors">
                          <option>Até R$ 50</option>
                          <option>R$ 50 - R$ 100</option>
                          <option>R$ 100 - R$ 200</option>
                          <option>R$ 200 - R$ 500</option>
                          <option>Acima de R$ 500</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2 lg:col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Ocasião/Evento</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                          placeholder="Ex: Aniversário, Casamento..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Entrega */}
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <MapPin className="w-5 h-5 text-pink-500 mr-2" />
                      Entrega
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Data de Entrega</label>
                        <input 
                          type="date" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Horário Preferido</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors">
                          <option>Manhã (8h - 12h)</option>
                          <option>Tarde (12h - 18h)</option>
                          <option>Noite (18h - 22h)</option>
                          <option>Horário comercial</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Endereço de Entrega</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                        placeholder="Rua, número, bairro e cidade"
                      />
                    </div>
                  </div>

                  {/* Observações */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <MessageSquare className="w-5 h-5 text-pink-500 mr-2" />
                      Observações Especiais
                    </h4>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none transition-colors"
                      placeholder="Cores preferidas, mensagem do cartão, instruções especiais..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Enviar Pedido via WhatsApp
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar Informativa - ocupa 1/3 do espaço em telas grandes */}
            <div className="xl:col-span-1 space-y-6 stagger-item" data-delay="400">
              
              {/* Como Funciona */}
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200 shadow-lg">
                <h5 className="font-semibold text-gray-900 mb-4 flex items-center text-lg">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                  Como Funciona
                </h5>
                <ul className="text-sm text-gray-600 space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                    <span>Preencha o formulário com seus dados e preferências</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                    <span>Entraremos em contato via WhatsApp para confirmar detalhes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                    <span>Preparamos seu arranjo com flores frescas selecionadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">4</span>
                    <span>Entregamos no horário combinado com cartão personalizado</span>
                  </li>
                </ul>
              </div>

              {/* Garantias */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h5 className="font-semibold text-gray-900 mb-4 flex items-center text-lg">
                  <Shield className="w-6 h-6 text-green-500 mr-2" />
                  Nossas Garantias
                </h5>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Flores sempre frescas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Entrega pontual
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Cartão personalizado grátis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Atendimento especializado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Satisfação garantida
                  </li>
                </ul>
              </div>

              {/* Contato Direto */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 shadow-lg">
                <h5 className="font-semibold text-gray-900 mb-4 flex items-center text-lg">
                  <Phone className="w-6 h-6 text-green-500 mr-2" />
                  Contato Direto
                </h5>
                <p className="text-sm text-gray-600 mb-4">
                  Prefere falar conosco diretamente? Entre em contato via WhatsApp!
                </p>
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white transition-colors"
                  onClick={() => window.open('https://wa.me/5511984327691', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Direto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Flower className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Yasmin Flores</h4>
                  <p className="text-gray-400 text-sm">Flores que falam por você</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Há mais de 15 anos criando momentos especiais com as mais belas flores e arranjos personalizados.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Serviços</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Buquês Românticos</li>
                <li>Eventos Especiais</li>
                <li>Plantas Ornamentais</li>
                <li>Decoração Floral</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>(11) 98432-7691</li>
                <li>contato@yasminflores.com.br</li>
                <li>Av. Dom Pedro Primeiro, 450</li>
                <li>Vila Osasco, Osasco - SP, 06083-005</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Redes Sociais</h5>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/5511984327691" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="https://instagram.com/yasmin_flores" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@yasmin_flores</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Yasmin Flores. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}