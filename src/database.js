import './setup.js';
import pg from 'pg';

const { Pool } = pg;

let config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT, 10),
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
};

if (process.env.NODE_ENV === 'prod') {
  config = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const pool = new Pool(config);

export default pool;
