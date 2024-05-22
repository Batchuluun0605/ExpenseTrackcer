import pg from "pg";
import dotev from "dotenv";

const { Pool } = pg;
dotev.config();
export const pool = new Pool({
  ssl: true,
  connectionString: process.env.DB_URL,
});
