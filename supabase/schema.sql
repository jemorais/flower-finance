-- Flower Finance Database Schema
-- Este arquivo contém todas as tabelas e configurações necessárias para o sistema

-- Extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabela de perfis de usuário (estende auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de categorias de transações
CREATE TABLE public.categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  color TEXT DEFAULT '#3B82F6',
  icon TEXT DEFAULT 'folder',
  type TEXT CHECK (type IN ('income', 'expense')) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, name)
);

-- Tabela de métodos de pagamento
CREATE TABLE public.payment_methods (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  type TEXT CHECK (type IN ('cash', 'debit_card', 'credit_card', 'pix', 'bank_transfer', 'other')) NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, name)
);

-- Tabela de transações
CREATE TABLE public.transactions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  payment_method_id UUID REFERENCES public.payment_methods(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT,
  amount DECIMAL(12,2) NOT NULL,
  type TEXT CHECK (type IN ('income', 'expense')) NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  tags TEXT[],
  is_recurring BOOLEAN DEFAULT FALSE,
  recurring_frequency TEXT CHECK (recurring_frequency IN ('daily', 'weekly', 'monthly', 'yearly')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de metas financeiras
CREATE TABLE public.financial_goals (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  target_amount DECIMAL(12,2) NOT NULL,
  current_amount DECIMAL(12,2) DEFAULT 0,
  target_date DATE,
  status TEXT CHECK (status IN ('active', 'completed', 'paused')) DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para melhor performance
CREATE INDEX idx_transactions_user_id ON public.transactions(user_id);
CREATE INDEX idx_transactions_date ON public.transactions(date);
CREATE INDEX idx_transactions_type ON public.transactions(type);
CREATE INDEX idx_transactions_category_id ON public.transactions(category_id);
CREATE INDEX idx_categories_user_id ON public.categories(user_id);
CREATE INDEX idx_payment_methods_user_id ON public.payment_methods(user_id);
CREATE INDEX idx_financial_goals_user_id ON public.financial_goals(user_id);

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para atualizar updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON public.categories FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_payment_methods_updated_at BEFORE UPDATE ON public.payment_methods FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_transactions_updated_at BEFORE UPDATE ON public.transactions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_financial_goals_updated_at BEFORE UPDATE ON public.financial_goals FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payment_methods ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.financial_goals ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para profiles
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Políticas RLS para categories
CREATE POLICY "Users can view own categories" ON public.categories FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own categories" ON public.categories FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own categories" ON public.categories FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own categories" ON public.categories FOR DELETE USING (auth.uid() = user_id);

-- Políticas RLS para payment_methods
CREATE POLICY "Users can view own payment methods" ON public.payment_methods FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own payment methods" ON public.payment_methods FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own payment methods" ON public.payment_methods FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own payment methods" ON public.payment_methods FOR DELETE USING (auth.uid() = user_id);

-- Políticas RLS para transactions
CREATE POLICY "Users can view own transactions" ON public.transactions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own transactions" ON public.transactions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own transactions" ON public.transactions FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own transactions" ON public.transactions FOR DELETE USING (auth.uid() = user_id);

-- Políticas RLS para financial_goals
CREATE POLICY "Users can view own goals" ON public.financial_goals FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own goals" ON public.financial_goals FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own goals" ON public.financial_goals FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own goals" ON public.financial_goals FOR DELETE USING (auth.uid() = user_id);

-- Inserir categorias padrão (será executado via função)
CREATE OR REPLACE FUNCTION create_default_categories_and_payment_methods()
RETURNS TRIGGER AS $$
BEGIN
  -- Categorias padrão de receita
  INSERT INTO public.categories (user_id, name, description, color, icon, type) VALUES
    (NEW.id, 'Salário', 'Salário mensal', '#10B981', 'briefcase', 'income'),
    (NEW.id, 'Freelance', 'Trabalhos extras', '#8B5CF6', 'laptop', 'income'),
    (NEW.id, 'Investimentos', 'Rendimentos de investimentos', '#F59E0B', 'trending-up', 'income'),
    (NEW.id, 'Outros', 'Outras receitas', '#6B7280', 'plus', 'income');

  -- Categorias padrão de despesa
  INSERT INTO public.categories (user_id, name, description, color, icon, type) VALUES
    (NEW.id, 'Alimentação', 'Supermercado e restaurantes', '#EF4444', 'utensils', 'expense'),
    (NEW.id, 'Transporte', 'Combustível, transporte público', '#3B82F6', 'car', 'expense'),
    (NEW.id, 'Moradia', 'Aluguel, condomínio, IPTU', '#F97316', 'home', 'expense'),
    (NEW.id, 'Saúde', 'Médicos, medicamentos', '#EC4899', 'heart', 'expense'),
    (NEW.id, 'Educação', 'Cursos, livros', '#8B5CF6', 'book', 'expense'),
    (NEW.id, 'Lazer', 'Entretenimento, hobbies', '#06B6D4', 'gamepad-2', 'expense'),
    (NEW.id, 'Outros', 'Outras despesas', '#6B7280', 'minus', 'expense');

  -- Métodos de pagamento padrão
  INSERT INTO public.payment_methods (user_id, name, type, description) VALUES
    (NEW.id, 'Dinheiro', 'cash', 'Pagamentos em espécie'),
    (NEW.id, 'PIX', 'pix', 'Transferências instantâneas'),
    (NEW.id, 'Cartão de Débito', 'debit_card', 'Pagamentos no débito'),
    (NEW.id, 'Cartão de Crédito', 'credit_card', 'Pagamentos no crédito'),
    (NEW.id, 'Transferência Bancária', 'bank_transfer', 'TED/DOC');

  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para criar dados padrão quando um novo usuário se registra
CREATE TRIGGER create_user_defaults
  AFTER INSERT ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION create_default_categories_and_payment_methods();