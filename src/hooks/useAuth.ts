'use client';

import { useState, useEffect } from 'react';
import { signIn, signUp, signOut, updateUserProfile, onAuthStateChange, signInWithGoogle } from '@/lib/supabase/auth';
import type { User, UseAuthReturn, UserProfileFormData } from '@/types';

export const useAuth = (): UseAuthReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const { data: { subscription } } = onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignIn = async (email: string, password: string): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      await signIn(email, password);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro ao fazer login';
      setError(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (email: string, password: string, name: string): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      await signUp(email, password, name);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro ao criar conta';
      setError(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      await signOut();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro ao fazer logout';
      setError(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async (data: Partial<UserProfileFormData>): Promise<void> => {
    if (!user) throw new Error('Usuário não autenticado');

    try {
      setLoading(true);
      setError(null);
      await updateUserProfile(user.id, data);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro ao atualizar perfil';
      setError(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleSignInWithGoogle = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      await signInWithGoogle();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro ao fazer login com Google';
      setError(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    signIn: handleSignIn,
    signUp: handleSignUp,
    signOut: handleSignOut,
    signInWithGoogle: handleSignInWithGoogle,
    updateProfile: handleUpdateProfile,
  };
};