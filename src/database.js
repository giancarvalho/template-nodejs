import './setup.js';
import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT, 10),
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
});

export default pool;
