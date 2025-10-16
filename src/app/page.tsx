'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Flower, Gift, Star, Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, Instagram, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { SubtleSlideshow } from '@/components/ui/subtle-slideshow';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Flower className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Flower Finance</h1>
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
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Slideshow Background */}
        <SubtleSlideshow 
          images={[
            '/images/flowers/roses-bouquet.svg',
            '/images/flowers/sunflowers.svg',
            '/images/flowers/mixed-bouquet.svg',
            '/images/flowers/red-roses-bouquet.svg'
          ]}
          className="z-0"
          interval={6000}
          opacity={0.15}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Flores que <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">encantam</span> e <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">emocionam</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Há mais de 15 anos criando momentos especiais com as mais belas flores e arranjos personalizados. 
                Cada bouquet conta uma história única de amor e carinho.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.open('https://wa.me/5511984327691?text=Olá! Gostaria de fazer um pedido de flores.', '_blank')}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                  Fazer Pedido
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-pink-300 text-pink-700 hover:bg-pink-50"
                  onClick={() => window.open('tel:+5511984327691', '_self')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (11) 98432-7691
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl p-4 text-center">
                      <svg className="w-8 h-8 text-pink-600 mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17C15.24 5.06 14.32 5.12 13.5 5.34C11.97 5.74 10.63 6.7 9.91 8.1C8.66 10.25 9.12 13.1 10.91 14.89L4 21.91L6.09 24L13.11 17C14.89 18.78 17.75 19.25 19.9 18C21.3 17.28 22.26 15.94 22.66 14.41C22.88 13.59 22.94 12.67 22.83 11.74L20.5 14.07L19 12.57L21 10.57C21.03 10.39 21.03 10.21 21 10.03V9Z"/>
                      </svg>
                      <p className="text-sm font-semibold text-pink-900">Arranjos Frescos</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl p-4 text-center">
                      <svg className="w-8 h-8 text-purple-600 mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9ZM12 18C15.31 18 18 20.69 18 24H6C6 20.69 8.69 18 12 18Z"/>
                      </svg>
                      <p className="text-sm font-semibold text-purple-900">Entrega Rápida</p>
                    </div>
                    <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl p-4 text-center">
                      <svg className="w-8 h-8 text-rose-600 mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2ZM8 16L9.09 18.26L14 19L9.09 19.74L8 22L6.91 19.74L2 19L6.91 18.26L8 16ZM16 16L17.09 18.26L22 19L17.09 19.74L16 22L14.91 19.74L10 19L14.91 18.26L16 16Z"/>
                      </svg>
                      <p className="text-sm font-semibold text-rose-900">Feito com Amor</p>
                    </div>
                    <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl p-4 text-center">
                      <svg className="w-8 h-8 text-violet-600 mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13C6 9.69 8.69 7 12 7ZM12 9C9.79 9 8 10.79 8 13C8 15.21 9.79 17 12 17C14.21 17 16 15.21 16 13C16 10.79 14.21 9 12 9ZM12 20C15.87 20 19 23.13 19 27H5C5 23.13 8.13 20 12 20Z"/>
                      </svg>
                      <p className="text-sm font-semibold text-violet-900">Qualidade Premium</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma ampla gama de serviços florais para tornar seus momentos ainda mais especiais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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

            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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

            <Card className="bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Flower className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-emerald-900">Plantas Ornamentais</CardTitle>
                <CardDescription className="text-emerald-700">
                  Plantas para decoração de ambientes internos e externos
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-2 text-sm text-emerald-800">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />Vasos decorativos</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />Cuidados inclusos</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-emerald-600" />Garantia de qualidade</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8">
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h3>
            <p className="text-xl text-gray-600">Depoimentos reais de quem confia em nosso trabalho</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Flores lindíssimas e atendimento excepcional! Minha esposa ficou emocionada com o buquê de aniversário."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-semibold">
                    J
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">João Silva</p>
                    <p className="text-gray-600 text-sm">Cliente há 3 anos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "A decoração do meu casamento ficou perfeita! Superou todas as minhas expectativas. Recomendo muito!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Ana Costa</p>
                    <p className="text-gray-600 text-sm">Noiva 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Sempre que preciso de flores, é aqui que venho. Qualidade impecável e preços justos!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white font-semibold">
                    M
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Maria Santos</p>
                    <p className="text-gray-600 text-sm">Cliente fiel</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Pronto para criar momentos especiais?
          </h3>
          <p className="text-xl text-pink-100 mb-8">
            Entre em contato conosco e deixe que nossas flores falem por você
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-pink-600 hover:bg-pink-50 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('tel:+5511984327691', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </Button>
            <Button 
              size="lg" 
              className="bg-green-500 text-white hover:bg-green-600 border-green-500 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://wa.me/5511984327691?text=Olá! Gostaria de fazer um pedido de flores.', '_blank')}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
              Enviar WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Visite Nossa Loja</h3>
            <p className="text-xl text-gray-600">Venha conhecer nosso espaço e escolher suas flores pessoalmente</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Endereço */}
            <Card className="bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-semibold text-emerald-900 mb-4">Nossa Localização</h4>
                <p className="text-lg text-emerald-700 mb-2">Av. Dom Pedro Primeiro, 450</p>
                <p className="text-lg text-emerald-700 mb-2">Vila Osasco - Osasco/SP</p>
                <p className="text-sm text-emerald-600">CEP: 06083-005</p>
              </CardContent>
            </Card>

            {/* Horário */}
            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-semibold text-purple-900 mb-4">Horário de Funcionamento</h4>
                <div className="space-y-2 text-purple-700">
                  <p className="text-lg"><span className="font-medium">Segunda a Sexta:</span> 8h às 18h</p>
                  <p className="text-lg"><span className="font-medium">Sábado:</span> 8h às 16h</p>
                  <p className="text-lg"><span className="font-medium">Domingo:</span> Fechado</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Informações adicionais */}
          <div className="mt-12 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-200">
            <div className="text-center">
              <h5 className="text-xl font-semibold text-pink-900 mb-4">💐 Dica Especial</h5>
              <p className="text-pink-700 text-lg">
                Visite nossa loja para ver de perto a qualidade e frescor das nossas flores. 
                Oferecemos consultoria gratuita para arranjos personalizados!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Flower className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold">Flower Finance</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Espalhando beleza e alegria através das mais belas flores há mais de 15 anos.
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
                <li>@yasminflores.oficial</li>
                <li>Av. Dom Pedro Primeiro, 450</li>
                <li>Vila Osasco - Osasco/SP</li>
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
                  href="https://instagram.com/yasminflores.oficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@yasminflores.oficial</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Flower Finance. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}