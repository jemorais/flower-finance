import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/session';

export async function middleware(req: NextRequest) {
  const session = await getSession();

  // Se o usuário não estiver logado e tentar acessar o dashboard, redirecione para o login
  if (!session.isLoggedIn && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  // Se o usuário estiver logado e tentar acessar a página de login, redirecione para o dashboard
  if (session.isLoggedIn && req.nextUrl.pathname.startsWith('/auth/login')) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/login'],
};