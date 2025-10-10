import { createClient } from '@supabase/supabase-js'

// Configuração padrão para desenvolvimento
const defaultConfig = {
  url: 'https://demo.supabase.co',
  anonKey: 'demo-anon-key'
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || defaultConfig.url
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || defaultConfig.anonKey

// Aviso para desenvolvimento
if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_SUPABASE_URL) {
  console.warn('⚠️ Usando configuração Supabase de desenvolvimento. Configure as variáveis de ambiente para produção.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})