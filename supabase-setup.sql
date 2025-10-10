-- =============================================
-- FLOWER FINANCE - CONFIGURAÇÃO SUPABASE
-- =============================================

-- 1. TABELA DE PERFIS DE USUÁRIO
-- =============================================
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  business_name TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. TABELA DE TRANSAÇÕES
-- =============================================
CREATE TABLE public.transactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  amount DECIMAL(10,2) NOT NULL,
  type TEXT CHECK (type IN ('income', 'expense')) NOT NULL,
  category TEXT NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. TABELA DE CATEGORIAS
-- =============================================
CREATE TABLE public.categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  type TEXT CHECK (type IN ('income', 'expense')) NOT NULL,
  color TEXT DEFAULT '#6366f1',
  icon TEXT DEFAULT 'folder',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. TABELA DE ORÇAMENTOS
-- =============================================
CREATE TABLE public.budgets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  category_id UUID REFERENCES public.categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  period TEXT CHECK (period IN ('monthly', 'yearly')) DEFAULT 'monthly',
  start_date DATE NOT NULL,
  end_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. TABELA DE CLIENTES
-- =============================================
CREATE TABLE public.customers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  address TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- CONFIGURAÇÃO DE SEGURANÇA (RLS)
-- =============================================

-- Habilitar RLS em todas as tabelas
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.budgets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;

-- =============================================
-- POLÍTICAS DE SEGURANÇA
-- =============================================

-- PROFILES: Usuários só veem seus próprios dados
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- TRANSACTIONS: Usuários só veem suas próprias transações
CREATE POLICY "Users can view own transactions" ON public.transactions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own transactions" ON public.transactions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own transactions" ON public.transactions
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own transactions" ON public.transactions
  FOR DELETE USING (auth.uid() = user_id);

-- CATEGORIES: Usuários só veem suas próprias categorias
CREATE POLICY "Users can view own categories" ON public.categories
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own categories" ON public.categories
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own categories" ON public.categories
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own categories" ON public.categories
  FOR DELETE USING (auth.uid() = user_id);

-- BUDGETS: Usuários só veem seus próprios orçamentos
CREATE POLICY "Users can view own budgets" ON public.budgets
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own budgets" ON public.budgets
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own budgets" ON public.budgets
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own budgets" ON public.budgets
  FOR DELETE USING (auth.uid() = user_id);

-- CUSTOMERS: Usuários só veem seus próprios clientes
CREATE POLICY "Users can view own customers" ON public.customers
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own customers" ON public.customers
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own customers" ON public.customers
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own customers" ON public.customers
  FOR DELETE USING (auth.uid() = user_id);

-- =============================================
-- FUNÇÃO PARA CRIAR PERFIL AUTOMATICAMENTE
-- =============================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger para criar perfil quando usuário se registra
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =============================================
-- CATEGORIAS PADRÃO PARA FLORICULTURA
-- =============================================
-- Estas serão inseridas automaticamente para novos usuários
CREATE OR REPLACE FUNCTION public.create_default_categories()
RETURNS TRIGGER AS $$
BEGIN
  -- Categorias de Receita
  INSERT INTO public.categories (user_id, name, type, color, icon) VALUES
  (NEW.id, 'Vendas de Arranjos', 'income', '#10b981', 'flower'),
  (NEW.id, 'Vendas de Buquês', 'income', '#f59e0b', 'gift'),
  (NEW.id, 'Eventos e Casamentos', 'income', '#8b5cf6', 'heart'),
  (NEW.id, 'Decorações', 'income', '#06b6d4', 'sparkles');

  -- Categorias de Despesa
  INSERT INTO public.categories (user_id, name, type, color, icon) VALUES
  (NEW.id, 'Compra de Flores', 'expense', '#ef4444', 'shopping-cart'),
  (NEW.id, 'Materiais e Suprimentos', 'expense', '#f97316', 'package'),
  (NEW.id, 'Aluguel da Loja', 'expense', '#6366f1', 'home'),
  (NEW.id, 'Energia e Água', 'expense', '#84cc16', 'zap'),
  (NEW.id, 'Marketing', 'expense', '#ec4899', 'megaphone'),
  (NEW.id, 'Transporte', 'expense', '#64748b', 'truck');

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger para criar categorias padrão
CREATE TRIGGER on_profile_created
  AFTER INSERT ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.create_default_categories();