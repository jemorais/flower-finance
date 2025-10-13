'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Flower, Gift, Star, Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

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
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
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
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Heart className="w-5 h-5 mr-2" />
                  Fazer Pedido
                </Button>
                <Button size="lg" variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50">
                  <Phone className="w-5 h-5 mr-2" />
                  (11) 99999-9999
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl p-4 text-center">
                      <Flower className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-pink-900">Arranjos Frescos</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl p-4 text-center">
                      <Gift className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-purple-900">Entrega Rápida</p>
                    </div>
                    <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl p-4 text-center">
                      <Heart className="w-8 h-8 text-rose-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-rose-900">Feito com Amor</p>
                    </div>
                    <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl p-4 text-center">
                      <Star className="w-8 h-8 text-violet-600 mx-auto mb-2" />
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
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-pink-900">Buquês Românticos</CardTitle>
                <CardDescription className="text-pink-700">
                  Arranjos especiais para declarações de amor e momentos íntimos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-pink-800">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-pink-600" />Rosas premium</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-pink-600" />Embalagem elegante</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-pink-600" />Cartão personalizado</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-purple-900">Eventos Especiais</CardTitle>
                <CardDescription className="text-purple-700">
                  Decoração floral completa para casamentos, aniversários e celebrações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-purple-800">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-purple-600" />Consultoria personalizada</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-purple-600" />Montagem no local</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-purple-600" />Flores sazonais</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Flower className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-emerald-900">Plantas Ornamentais</CardTitle>
                <CardDescription className="text-emerald-700">
                  Plantas para decoração de ambientes internos e externos
                </CardDescription>
              </CardHeader>
              <CardContent>
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
            <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 shadow-lg hover:shadow-xl transition-all duration-300">
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Mail className="w-5 h-5 mr-2" />
              Enviar WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h3>
            <p className="text-xl text-gray-600">Estamos aqui para tornar seus momentos ainda mais especiais</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-pink-900 mb-2">Telefone</h4>
                <p className="text-pink-700">(11) 99999-9999</p>
                <p className="text-pink-700">(11) 3333-3333</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-purple-900 mb-2">E-mail</h4>
                <p className="text-purple-700">contato@bellarosa.com.br</p>
                <p className="text-purple-700">pedidos@bellarosa.com.br</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-emerald-900 mb-2">Endereço</h4>
                <p className="text-emerald-700">Rua das Flores, 123</p>
                <p className="text-emerald-700">Centro - São Paulo/SP</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Horário de Funcionamento:</span>
              </div>
              <div className="text-gray-700">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 16h</p>
              </div>
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
                <li>(11) 99999-9999</li>
                <li>contato@bellarosa.com.br</li>
                <li>Rua das Flores, 123</li>
                <li>Centro - São Paulo/SP</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Horários</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Segunda a Sexta: 8h às 18h</li>
                <li>Sábado: 8h às 16h</li>
                <li>Domingo: Fechado</li>
              </ul>
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