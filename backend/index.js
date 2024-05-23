import express from "express";
import dotenv from "dotenv";
import { pool } from "./db.js";
import user from "./src/router/user.js";
import cors from "cors";
import category from "./src/router/category.js";
import transaction from "./src/router/transaction.js";

dotenv.config();
pool.connect();
const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/users", user);
app.use("/categorys", category);
app.use("/transactions", transaction);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

app.post("/createTable", async (req, res) => {
  try {
    const tableQueryText = `
        CREATE TABLE IF NOT EXISTS users (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE,
            password VARCHAR(255) NOT NULL,
            avatar_img BYTEA,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            currency_type VARCHAR(3) CHECK (currency_type IN ('MNT', '$'))
        )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});

app.post("/createCategoryTable", async (req, res) => {
  try {
    const tableQueryText = `
        CREATE TABLE IF NOT EXISTS categorys (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
            user_id uuid REFERENCES users(id),
            name VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            category_image VARCHAR(50)
        )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});

app.post("/createTransactionTable", async (req, res) => {
  try {
    const tableQueryText = `
        CREATE TABLE IF NOT EXISTS transactions (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
            user_id uuid REFERENCES users(id),
            name VARCHAR(255) NOT NULL,
            amount VARCHAR(255) NOT NULL,
            transaction_type VARCHAR(3) CHECK (transaction_type IN ('INC', 'EXP')),
            description VARCHAR(255) NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            category_id uuid REFERENCES categorys(id)
        )`;
    await pool.query(tableQueryText);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});
app.post("/delete", async (req, res) => {
  try {
    const queryText = `DROP TABLE IF EXISTS categorys`;
    await pool.query(queryText);
    res.send("deleted transaction table");
  } catch (error) {
    console.log(error);
  }
});
app.post("/alterTable", async (req, res) => {
  try {
    const queryText = `ALTER TABLE IF EXISTS categorys`;
    await pool.query(queryText);
    res.send("deleted transaction table");
  } catch (error) {
    console.log(error);
  }
});
