import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { ArrowRight, BarChart3, Shield, Smartphone, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20 bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 dark:from-green-950 dark:to-red-950">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-green-900 dark:text-red-100 mb-6">
            Gerencie as finanças da sua floricultura com
            <span className="text-red-600 dark:text-red-400 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent"> inteligência</span>
          </h1>
          <p className="text-xl text-green-700 dark:text-red-200 mb-8 max-w-2xl mx-auto">
            Acompanhe vendas de flores, controle estoque de arranjos e gerencie despesas de forma simples e eficiente. 
            Tome decisões mais inteligentes com dados em tempo real sobre sua loja.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700">
              Começar agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-red-600 text-red-600 hover:bg-red-50 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-950">
              Ver demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-red-50 dark:from-green-950 dark:to-green-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 dark:text-red-100 mb-4">
              Funcionalidades que florescem o seu negócio
            </h2>
            <p className="text-xl text-green-700 dark:text-red-200 max-w-2xl mx-auto">
              Ferramentas poderosas para cultivar o sucesso da sua floricultura
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg border border-red-200 dark:border-red-800 hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-red-50 dark:from-green-900 dark:to-green-800">
              <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900 dark:to-pink-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-green-900 dark:text-red-100 mb-2">
                Dashboard Floral
              </h3>
              <p className="text-green-700 dark:text-red-200">
                Visualize vendas de arranjos e métricas de estoque com gráficos interativos
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-red-200 dark:border-red-800 hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-red-50 dark:from-green-900 dark:to-green-800">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-green-900 dark:text-red-100 mb-2">
                Análise de Crescimento
              </h3>
              <p className="text-green-700 dark:text-red-200">
                Identifique tendências em vendas sazonais e otimize compras de flores
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-red-200 dark:border-red-800 hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-red-50 dark:from-green-900 dark:to-green-800">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900 dark:to-rose-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-green-900 dark:text-red-100 mb-2">
                Segurança Robusta
              </h3>
              <p className="text-green-700 dark:text-red-200">
                Proteja os dados da sua floricultura com criptografia avançada
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-red-200 dark:border-red-800 hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-red-50 dark:from-green-900 dark:to-green-800">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-green-900 dark:text-red-100 mb-2">
                Acesso Móvel
              </h3>
              <p className="text-green-700 dark:text-red-200">
                Gerencie sua floricultura de qualquer lugar, a qualquer hora
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 dark:from-red-800 dark:via-pink-800 dark:to-rose-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para fazer sua floricultura florescer?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Junte-se a donos de floriculturas que já otimizam suas finanças
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-red-600 hover:bg-red-50">
            Criar conta gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gradient-to-r from-red-50 to-pink-50 dark:from-green-950 dark:to-red-950 border-t border-red-200 dark:border-red-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-green-700 dark:text-red-300">
            © 2025 Flower Finance. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
