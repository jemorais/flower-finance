import { getIronSession, IronSession } from 'iron-session';
import { cookies } from 'next/headers';

if (!process.env.SESSION_SECRET || process.env.SESSION_SECRET.length < 32) {
  throw new Error('A variável de ambiente SESSION_SECRET precisa ser definida e ter no mínimo 32 caracteres.');
}

export const sessionOptions = {
  cookieName: 'flower-finance-session',
  password: process.env.SESSION_SECRET,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

// Tipagem para os dados da sessão
export interface SessionData {
  userId?: string;
  isLoggedIn?: boolean;
}

// Função para obter a sessão no lado do servidor
export function getSession(): Promise<IronSession<SessionData>> {
  return getIronSession<SessionData>(cookies(), sessionOptions);
}