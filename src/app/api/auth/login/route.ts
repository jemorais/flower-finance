import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import bcrypt from 'bcrypt';
import { getSession, SessionData } from '@/lib/session';

export async function POST(req: NextRequest) {
  const session = await getSession();
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: 'Email e senha são obrigatórios' }, { status: 400 });
  }

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return NextResponse.json({ message: 'Credenciais inválidas' }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Credenciais inválidas' }, { status: 401 });
    }

    // Armazena o ID do usuário na sessão
    session.userId = user.id;
    session.isLoggedIn = true;
    await session.save();

    return NextResponse.json({ message: 'Login bem-sucedido' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}