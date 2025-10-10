'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email.trim()) {
      setError('Email é obrigatório');
      setIsLoading(false);
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
    } catch (err: any) {
      switch (err.code) {
        case 'auth/user-not-found':
          setError('Usuário não encontrado com este email');
          break;
        case 'auth/invalid-email':
          setError('Email inválido');
          break;
        case 'auth/too-many-requests':
          setError('Muitas tentativas. Tente novamente mais tarde');
          break;
        default:
          setError('Erro ao enviar email de recuperação');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4">
        <Card className="w-full max-w-md bg-gradient-to-br from-white to-green-50 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 rounded-full p-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center">Email Enviado!</CardTitle>
            <CardDescription className="text-center">
              Verifique sua caixa de entrada e siga as instruções para redefinir sua senha
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Mail className="h-4 w-4" />
              <AlertDescription>
                Enviamos um link de recuperação para <strong>{email}</strong>
              </AlertDescription>
            </Alert>

            <div className="text-sm text-muted-foreground space-y-2">
              <p>• Verifique também sua pasta de spam</p>
              <p>• O link expira em 1 hora</p>
              <p>• Você pode solicitar um novo link se necessário</p>
            </div>

            <div className="space-y-2">
              <Button
                onClick={() => {
                  setSuccess(false);
                  setEmail('');
                }}
                variant="outline"
                className="w-full"
              >
                Enviar Novamente
              </Button>

              <Link href="/auth/login">
                <Button variant="ghost" className="w-full">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar ao Login
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <Card className="w-full max-w-md bg-gradient-to-br from-white to-green-50 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary rounded-full p-3">
              <Mail className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl text-center">Esqueceu a Senha?</CardTitle>
          <CardDescription className="text-center">
            Digite seu email para receber um link de recuperação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Enviando...
                </div>
              ) : (
                <>
                  <Mail className="h-4 w-4 mr-2" />
                  Enviar Link de Recuperação
                </>
              )}
            </Button>

            <div className="text-center">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar ao Login
                </Button>
              </Link>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">
                Não tem uma conta?{' '}
                <Link href="/auth/register" className="text-primary hover:underline">
                  Criar conta
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}