// src/lib/db.ts
import sql from "mssql";

const config: sql.config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER as string,
  options: {
    encrypt: true, // required for Azure
    trustServerCertificate: true, // for local dev
  },
};

let pool: sql.ConnectionPool;

export async function getDb() {
  if (!pool) {
    pool = await sql.connect(config);
  }
  return pool;
}
