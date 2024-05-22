import { pool } from "../../db.js";

pool.connect();

export const createTransaction = async (req, res) => {
  const { user_id, name, amount, transaction_type, description, category_id } =
    req.body;
  try {
    const queryText = `
      INSERT INTO transactions (user_id, name, amount, transaction_type, description, category_id)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *`;

    const result = await pool.query(queryText, [
      user_id,
      name,
      amount,
      transaction_type,
      description,
      category_id,
    ]);
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
};
export const getTransactions = async (req, res) => {
  const id = req.query.user_id;
  try {
    const queryText = `SELECT * FROM users u INNER JOIN transactions t ON u.id = t.user_id WHERE u.id = $1  `;
    const response = await pool.query(queryText, [id]);
    res.send(response.rows);
  } catch (error) {
    console.log(error);
  }
};
export const getOneTransaction = async (req, res) => {
  const { user_id } = req.body;
  try {
    const queryText = `SELECT * FROM transactions WHERE user_id='${user_id}'`;
    const response = await pool.query(queryText);
    res.send("success");
  } catch (error) {
    console.log(error);
  }
};
const updateTransaction = async (req, res) => {
  const { name, amount, description } = req.body;
  try {
    const queryText = `
      UPDATE transactions
      SET  name = $2, amount = $3,  description = $5
      WHERE id = $7
      RETURNING *`;

    const result = await pool.query(queryText, [name, amount, description]);
    res.send(result.rows[0]).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// const deletetransaction = async (req, res) => {
//   const
// }
