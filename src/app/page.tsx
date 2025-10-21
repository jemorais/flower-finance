'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Flower, Gift, Star, Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, Instagram, MessageCircle, User, MessageSquare, Shield } from 'lucide-react';
import { ScrollReveal, ScrollStagger } from '@/components/ui/scroll-reveal';
import Link from 'next/link';

// Componente customizado do ícone do WhatsApp
const WhatsAppIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
);

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

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
              transform: translateX(-50%);
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

        /* Animações de entrada suaves */
        .animate-fade-in-right {
          animation: fadeInRight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Animações de hover suaves */
        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        /* Animação de float suave */
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(3deg);
          }
          50% {
            transform: translateY(-10px) rotate(3deg);
          }
        }

        /* Gradiente animado */
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Animações de slide com delay */
        .animate-slide-up-delay-1 {
          animation: slideUpDelay 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
        }

        .animate-slide-up-delay-2 {
          animation: slideUpDelay 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both;
        }

        .animate-slide-up-delay-3 {
          animation: slideUpDelay 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s both;
        }

        @keyframes slideUpDelay {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Animação de pulse sutil */
        .animate-pulse-subtle {
          animation: pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulseSubtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.95;
          }
        }

        /* Animação de bounce sutil */
        .animate-bounce-subtle {
          animation: bounceSubtle 2s infinite;
        }

        @keyframes bounceSubtle {
          0%, 20%, 53%, 80%, 100% {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            transform: translate3d(0, 0, 0);
          }
          40%, 43% {
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            transform: translate3d(0, -5px, 0);
          }
          70% {
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            transform: translate3d(0, -3px, 0);
          }
          90% {
            transform: translate3d(0, -1px, 0);
          }
        }

        /* Efeito ripple para botões */
        .ripple-button {
          position: relative;
          overflow: hidden;
        }

        .ripple-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .ripple-button:hover::before {
          width: 300px;
          height: 300px;
        }

        /* Background hero com overlay */
        .hero-background {
          position: relative;
        }

        .hero-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%);
          z-index: 1;
        }

        .hero-background > * {
          position: relative;
          z-index: 2;
        }

        /* Animação de loading suave */
        .loading-shimmer {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        /* Scroll suave para toda a página */
        html {
          scroll-behavior: smooth;
        }

        /* Customização da scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #db2777, #7c3aed);
        }
      `}</style>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-2 rounded-xl shadow-lg">
                <Flower className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Yasmin Flores</h1>
                <p className="text-sm text-gray-600">Flores & Arranjos</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Serviços</a>
              <a href="#gallery" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Galeria</a>
              <a href="#testimonials" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Depoimentos</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Faça seu Pedido</a>
              <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white" onClick={() => window.location.href = '/dashboard'}>
                Área Administrativa
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-6 hero-background" style={{ backgroundImage: 'url(/images/flowers/hero-background.jpg)', backgroundSize: 'cover' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up-delay-1">
                Flores que <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 animate-gradient-x">encantam</span> e <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 animate-gradient-x">emocionam</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-slide-up-delay-2">
                Há mais de 15 anos criando momentos especiais com as mais belas flores e arranjos personalizados. 
                Cada bouquet conta uma história única de amor e carinho.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delay-3">
                <Button size="lg" className="ripple-button bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 hover:scale-105 hover:shadow-lg transition-all duration-300 animate-pulse-subtle">
                  <Phone className="w-5 h-5 mr-2 animate-bounce-subtle" />
                  Fazer Pedido
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl p-8 transform rotate-3 shadow-xl animate-float hover:rotate-6 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 transform -rotate-6 shadow-lg hover:-rotate-3 transition-transform duration-500">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl p-4 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 group">
                      <Flower className="w-12 h-12 text-pink-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    </div>
                    <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl p-4 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 group">
                      <Gift className="w-12 h-12 text-rose-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    </div>
                    <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl p-4 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 group">
                      <Heart className="w-12 h-12 text-rose-500 group-hover:scale-125 group-hover:animate-pulse transition-all duration-300" />
                    </div>
                    <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl p-4 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 group">
                      <Star className="w-12 h-12 text-pink-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência Única Section */}
      <ScrollReveal delay={200}>
        <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-pink-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Experiência <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Única</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cada arranjo é uma obra de arte criada especialmente para você
              </p>
            </div>

            <ScrollStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <ScrollReveal delay={400}>
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 shadow-sm">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Flower className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Flores Frescas</h4>
                  <p className="text-gray-600 text-sm">
                    Selecionamos as melhores flores diariamente para garantir máxima qualidade
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 shadow-sm">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Entrega Rápida</h4>
                  <p className="text-gray-600 text-sm">
                    Entregamos em até 2 horas na região metropolitana com todo cuidado
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 shadow-sm">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Feito com Amor</h4>
                  <p className="text-gray-600 text-sm">
                    Cada arranjo é criado com dedicação pelos nossos floristas especializados
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={700}>
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 shadow-sm">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Qualidade Premium</h4>
                  <p className="text-gray-600 text-sm">
                    Trabalhamos apenas com fornecedores reconhecidos e flores de primeira
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={800}>
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 shadow-sm">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Personalização</h4>
                  <p className="text-gray-600 text-sm">
                    Criamos arranjos únicos e personalizados para cada ocasião especial
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={900}>
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 shadow-sm">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Suporte 24h</h4>
                  <p className="text-gray-600 text-sm">
                    Atendimento especializado disponível 24 horas para suas necessidades
                  </p>
                </div>
              </ScrollReveal>
            </ScrollStagger>
          </div>
        </section>
      </ScrollReveal>

      {/* Services & Creations Unified Section */}
      <ScrollReveal delay={200}>
        <section id="services" className="py-12 px-6 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Nossas <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Especialidades</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada arranjo é uma obra de arte única, criada com amor e dedicação para tornar seus momentos ainda mais especiais
              </p>
            </div>

            <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ScrollReveal delay={400}>
                <Card className="hover-lift bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 hover:rotate-1">
                  <CardContent className="p-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 to-rose-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-700 transition-colors duration-300">Bouquets Românticos</h3>
                      <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">
                        Arranjos apaixonantes com rosas, lírios e flores especiais
                      </p>
                      <div className="flex justify-center gap-1 mb-4">
                        <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs group-hover:bg-pink-200 transition-colors duration-300">Rosas</span>
                        <span className="bg-rose-100 text-rose-800 px-2 py-1 rounded-full text-xs group-hover:bg-rose-200 transition-colors duration-300">Lírios</span>
                        <span className="bg-rose-100 text-rose-800 px-2 py-1 rounded-full text-xs group-hover:bg-rose-200 transition-colors duration-300">Orquídeas</span>
                      </div>
                      <p className="text-xl font-bold text-pink-600 mb-3 group-hover:text-pink-700 transition-colors duration-300">A partir de R$ 89</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <Card className="hover-lift bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 hover:-rotate-1">
                  <CardContent className="p-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-100/20 to-pink-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-700 transition-colors duration-300">Cestas Especiais</h3>
                      <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">
                        Cestas personalizadas com flores, chocolates e mimos especiais
                      </p>
                      <div className="flex justify-center gap-1 mb-4">
                        <span className="bg-rose-100 text-rose-800 px-2 py-1 rounded-full text-xs group-hover:bg-rose-200 transition-colors duration-300">Flores Mistas</span>
                        <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs group-hover:bg-pink-200 transition-colors duration-300">Chocolates</span>
                        <span className="bg-rose-100 text-rose-800 px-2 py-1 rounded-full text-xs group-hover:bg-rose-200 transition-colors duration-300">Cartão</span>
                      </div>
                      <p className="text-xl font-bold text-rose-600 mb-3 group-hover:text-rose-700 transition-colors duration-300">A partir de R$ 129</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <Card className="hover-lift bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 hover:rotate-1">
                  <CardContent className="p-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-100/20 to-pink-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-700 transition-colors duration-300">Arranjos Corporativos</h3>
                      <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">
                        Arranjos elegantes e sofisticados para escritórios e eventos
                      </p>
                      <div className="flex justify-center gap-1 mb-4">
                        <span className="bg-rose-100 text-rose-800 px-2 py-1 rounded-full text-xs group-hover:bg-rose-200 transition-colors duration-300">Arranjos Grandes</span>
                        <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs group-hover:bg-pink-200 transition-colors duration-300">Flores Nobres</span>
                        <span className="bg-rose-100 text-rose-800 px-2 py-1 rounded-full text-xs group-hover:bg-rose-200 transition-colors duration-300">Entrega Expressa</span>
                      </div>
                      <p className="text-xl font-bold text-rose-600 mb-3 group-hover:text-rose-700 transition-colors duration-300">A partir de R$ 199</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </ScrollStagger>
          </div>
        </section>
      </ScrollReveal>

      {/* Nossa História Section */}
      <ScrollReveal delay={300}>
        <section className="py-12 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <ScrollReveal delay={100}>
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">
                    Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">História</span>
                  </h3>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Fundada em 2008 pela florista Maria Silva, a Flower Finance nasceu do sonho de espalhar beleza e alegria através das flores. Com mais de 15 anos de experiência, nos tornamos referência em qualidade e atendimento personalizado.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Cada arranjo é cuidadosamente criado com flores frescas selecionadas diariamente, garantindo que nossos clientes recebam sempre o melhor em qualidade e durabilidade.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={400}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-600 mb-2">15+</div>
                      <div className="text-gray-600">Anos de Experiência</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-rose-600 mb-2">5000+</div>
                      <div className="text-gray-600">Clientes Satisfeitos</div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              
              <ScrollReveal delay={500}>
                <div className="relative">
                  <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Por que nos escolher?</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 bg-white rounded-2xl p-4 shadow-sm">
                        <div className="bg-pink-500 rounded-full p-2">
                          <Flower className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900">Flores Sempre Frescas</h5>
                          <p className="text-sm text-gray-600">Recebemos flores diariamente de produtores locais</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 bg-white rounded-2xl p-4 shadow-sm">
                        <div className="bg-rose-500 rounded-full p-2">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900">Entrega Rápida</h5>
                          <p className="text-sm text-gray-600">Entregamos em até 2 horas na região metropolitana</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 bg-white rounded-2xl p-4 shadow-sm">
                        <div className="bg-rose-500 rounded-full p-2">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900">Atendimento Personalizado</h5>
                          <p className="text-sm text-gray-600">Cada cliente é único e merece atenção especial</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Gallery Section */}
      <ScrollReveal delay={700}>
        <section id="gallery" className="py-12 px-6 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Galeria</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Confira alguns dos nossos trabalhos mais especiais e se inspire para seu próximo pedido
              </p>
            </div>

            <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  image: "/images/flowers/arranjos/Arranhos-premium.png",
                  title: "Arranjos Premium",
                  description: "Arranjos sofisticados com flores nobres e acabamento premium"
                },
                {
                  id: 2,
                  image: "/images/flowers/arranjos/Flores-diversas.png",
                  title: "Flores Diversas",
                  description: "Variedade de flores frescas em composições únicas"
                },
                {
                  id: 3,
                  image: "/images/flowers/arranjos/Flores-e-chocolates.png",
                  title: "Flores e Chocolates",
                  description: "Combinação perfeita de flores e chocolates especiais"
                },
                {
                  id: 4,
                  image: "/images/flowers/arranjos/Personalizados.png",
                  title: "Arranjos Personalizados",
                  description: "Criações exclusivas feitas sob medida para você"
                },
                {
                  id: 5,
                  image: "/images/flowers/arranjos/Vasos-de-vidro.png",
                  title: "Vasos de Vidro",
                  description: "Elegantes arranjos em vasos de vidro artesanais"
                },
                {
                  id: 6,
                  image: "/images/flowers/arranjos/Diversos.png",
                  title: "Arranjos Diversos",
                  description: "Variedade de estilos para todas as ocasiões"
                }
              ].map((item) => (
                <ScrollReveal key={item.id}>
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift transform hover:rotate-2 hover:scale-105 gallery-card-tilt">
                    <div className="aspect-square relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-700 ease-out"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-sm opacity-90">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </ScrollStagger>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3" onClick={() => window.open('https://instagram.com/yasmin_flores', '_blank')}>
                <Instagram className="w-5 h-5 mr-2" />
                Ver Mais no Instagram
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials Section */}
      <ScrollReveal delay={500}>
        <section id="testimonials" className="py-12 px-6 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                O que nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">clientes</span> dizem
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mais de 15 anos espalhando alegria e amor através das flores
              </p>
            </div>

            <div className="testimonials-slider-continuous overflow-hidden">
              <div className="flex animate-slide-continuous">
                {/* Primeiro conjunto de depoimentos */}
                {[...Array(6)].map((_, index) => (
                  <Card key={`first-${index}`} className="flex-shrink-0 w-80 mx-4 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Cliente {index + 1}</h4>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        "Arranjos simplesmente perfeitos! A Yasmin tem um talento único para criar bouquets que emocionam. Recomendo de olhos fechados!"
                      </p>
                    </CardContent>
                  </Card>
                ))}
                {/* Segundo conjunto de depoimentos (duplicado para loop contínuo) */}
                {[...Array(6)].map((_, index) => (
                  <Card key={`second-${index}`} className="flex-shrink-0 w-80 mx-4 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">Cliente {index + 1}</h4>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        "Arranjos simplesmente perfeitos! A Yasmin tem um talento único para criar bouquets que emocionam. Recomendo de olhos fechados!"
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal delay={300}>
        <section id="contact" className="py-12 px-6 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Faça Seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Pedido</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Entre em contato conosco e crie momentos inesquecíveis com nossas flores especiais
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="shadow-xl">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                            placeholder="Seu nome completo"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
                          <input 
                            type="tel" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                            placeholder="(11) 99999-9999"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Arranjo</label>
                          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200">
                            <option>Bouquet Romântico</option>
                            <option>Cesta Especial</option>
                            <option>Arranjo Corporativo</option>
                            <option>Personalizado</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Orçamento Desejado</label>
                          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200">
                            <option>Até R$ 50</option>
                            <option>R$ 50 - R$ 100</option>
                            <option>R$ 100 - R$ 200</option>
                            <option>R$ 200 - R$ 300</option>
                            <option>Acima de R$ 300</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Data de Entrega</label>
                          <input 
                            type="date" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Horário Preferido</label>
                          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200">
                            <option>Manhã (8h - 12h)</option>
                            <option>Tarde (12h - 18h)</option>
                            <option>Noite (18h - 20h)</option>
                            <option>Horário comercial</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Endereço de Entrega</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                            placeholder="Rua, número, bairro, cidade"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Ocasião</label>
                          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200">
                            <option>Aniversário</option>
                            <option>Casamento</option>
                            <option>Namoro/Romance</option>
                            <option>Luto/Pêsames</option>
                            <option>Nascimento</option>
                            <option>Formatura</option>
                            <option>Corporativo</option>
                            <option>Outros</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Observações Importantes</label>
                        <textarea 
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                          placeholder="Cores preferidas, mensagem do cartão, instruções especiais, alergias..."
                        ></textarea>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-3 text-lg" onClick={(e) => {
                        e.preventDefault();
                        const form = (e.target as HTMLElement).closest('form');
                        if (!form) return;
                        
                        const formData = new FormData(form);
                        const nome = formData.get('nome');
                        const whatsapp = formData.get('whatsapp');
                        const tipoArranjo = formData.get('tipoArranjo');
                        const orcamento = formData.get('orcamento');
                        const dataEntrega = formData.get('dataEntrega');
                        const horario = formData.get('horario');
                        const endereco = formData.get('endereco');
                        const ocasiao = formData.get('ocasiao');
                        const observacoes = formData.get('observacoes');
                        
                        const mensagem = `Olá! Gostaria de fazer um pedido:
                        
*Nome:* ${nome}
*WhatsApp:* ${whatsapp}
*Tipo de Arranjo:* ${tipoArranjo}
*Orçamento:* ${orcamento}
*Data de Entrega:* ${dataEntrega}
*Horário:* ${horario}
*Endereço:* ${endereco}
*Ocasião:* ${ocasiao}
*Observações:* ${observacoes}`;
                        
                        const whatsappUrl = `https://wa.me/5511984327691?text=${encodeURIComponent(mensagem)}`;
                        window.open(whatsappUrl, '_blank');
                      }}>
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                        </svg>
                        Enviar Pedido
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <Phone className="w-5 h-5 text-green-500 mr-2" />
                      WhatsApp Direto
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span className="text-gray-600">(11) 98432-7691</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 text-blue-500 mr-3" />
                        <span className="text-gray-600">yasmin@flores.com</span>
                      </div>
                      <div className="flex items-center">
                        <Instagram className="w-4 h-4 text-pink-500 mr-3" />
                        <span className="text-gray-600">@yasminflores</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <Clock className="w-5 h-5 text-rose-500 mr-2" />
                      Horário de Atendimento
                    </h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Segunda - Sexta</span>
                        <span>8h às 18h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábado</span>
                        <span>8h às 16h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingo</span>
                        <span>Fechado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <Shield className="w-5 h-5 text-green-500 mr-2" />
                      Garantias
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Flores sempre frescas
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Entrega no prazo
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Satisfação garantida
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-2 rounded-xl">
                  <Flower className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Yasmin Flores</h3>
                  <p className="text-gray-400">Flores & Arranjos</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Há mais de 15 anos criando momentos especiais com as mais belas flores e arranjos personalizados. 
                Cada bouquet é uma obra de arte única.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/yasmin_flores" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/5511984327691" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Bouquets Românticos</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Cestas Especiais</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Arranjos Corporativos</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Eventos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <WhatsAppIcon className="w-4 h-4 mr-2 text-green-400" />
                  (11) 98432-7691
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-pink-400" />
                  yasmin@flores.com
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-pink-400" />
                  São Paulo, SP
                </li>
              </ul>
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