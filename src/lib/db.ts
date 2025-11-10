import { Pool } from 'pg';

// Cria um novo pool de conexões com a string de conexão do Neon
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Necessário para conexões com o Neon
  },
});

export default pool;