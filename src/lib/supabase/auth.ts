import { supabase } from './config'
import type { User } from '@/types'

// Converter usuário do Supabase para nosso tipo
export const convertSupabaseUser = (supabaseUser: any): User => {
  return {
    id: supabaseUser.id,
    email: supabaseUser.email!,
    name: supabaseUser.user_metadata?.name || supabaseUser.user_metadata?.full_name || '',
    avatar: supabaseUser.user_metadata?.avatar_url || supabaseUser.user_metadata?.picture,
    createdAt: new Date(supabaseUser.created_at),
    updatedAt: new Date(supabaseUser.updated_at || supabaseUser.created_at),
  }
}

// Criar conta
export const signUp = async (email: string, password: string, name: string): Promise<User> => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          full_name: name
        }
      }
    })

    if (error) throw error
    if (!data.user) throw new Error('Erro ao criar usuário')

    return convertSupabaseUser(data.user)
  } catch (error) {
    console.error('Erro ao criar conta:', error)
    throw error
  }
}

// Fazer login
export const signIn = async (email: string, password: string): Promise<User> => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) throw error
    if (!data.user) throw new Error('Erro ao fazer login')

    return convertSupabaseUser(data.user)
  } catch (error) {
    console.error('Erro ao fazer login:', error)
    throw error
  }
}

// Login com Google
export const signInWithGoogle = async (): Promise<void> => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    })

    if (error) throw error
  } catch (error) {
    console.error('Erro ao fazer login com Google:', error)
    throw error
  }
}

// Fazer logout
export const signOut = async (): Promise<void> => {
  try {
    const { error } = await supabase.auth.signOut({ scope: 'local' })
    if (error) throw error
  } catch (error) {
    console.error('Erro ao fazer logout:', error)
    throw error
  }
}

// Atualizar perfil
export const updateUserProfile = async (
  userId: string,
  data: { name?: string; avatar?: string }
): Promise<void> => {
  try {
    const { error } = await supabase.auth.updateUser({
      data: {
        name: data.name,
        full_name: data.name,
        avatar_url: data.avatar
      }
    })

    if (error) throw error
  } catch (error) {
    console.error('Erro ao atualizar perfil:', error)
    throw error
  }
}

// Observer de mudanças de autenticação
export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return supabase.auth.onAuthStateChange((event, session) => {
    if (session?.user) {
      try {
        const user = convertSupabaseUser(session.user)
        callback(user)
      } catch (error) {
        console.error('Erro ao converter usuário:', error)
        callback(null)
      }
    } else {
      callback(null)
    }
  })
}