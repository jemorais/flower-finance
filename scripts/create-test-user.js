const { Pool } = require('pg');
const bcrypt = require('bcrypt');
require('dotenv').config({ path: '.env' });

async function createTestUser() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const email = 'test@example.com';
  const password = 'password123';
  const fullName = 'Test User';

  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const result = await pool.query(
      'INSERT INTO users (email, password_hash, full_name) VALUES ($1, $2, $3) RETURNING *',
      [email, passwordHash, fullName]
    );

    console.log('Usuário de teste criado com sucesso:', result.rows[0]);
  } catch (error) {
    console.error('Erro ao criar usuário de teste:', error);
  } finally {
    await pool.end();
  }
}

createTestUser();