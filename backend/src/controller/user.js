import { pool } from "../../db.js";
pool.connect();

export const getUsers = async (req, res) => {
  try {
    const queryText = `SELECT * FROM users`;
    const response = await pool.query(queryText);
    res.send(response.rows);
  } catch (error) {
    console.error(error);
  }
};
console.log(pool);
export const getOneUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const queryText = `SELECT * FROM users WHERE email='${email}' AND password='${password}'`;
    const response = await pool.query(queryText);
    const user = response.rows[0];
    console.log(queryText);
    if (response.rows.length !== 0) {
      return res.send({ ...user });
    }
  } catch (error) {
    res.status(400).send("Wrong username and password");
  }
};

export const createUser = async (req, response) => {
  const { name, email, password } = req.body;
  try {
    const queryText = `INSERT INTO users (id, name, email, password) VALUES (gen_random_uuid (), $1, $2, $3) RETURNING *`;
    const res = await pool.query(queryText, [name, email, password]);
    response.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    response.send("error query");
  }
};
export const updateUser = async (req, res) => {
  const { name, email, id } = req.body;
  try {
    const queryText = `UPDATE users SET name = '${name}', email='${email}' WHERE id='${id}' `;
    const response = await pool.query(queryText);
    res.send("updated");
  } catch (error) {
    res.send("error");
    console.log(error);
  }
};
export const deleteUser = async (req, response) => {
  const { name, email, id } = req.body;
  try {
    const queryText = `DELETE FROM users WHERE (name='${name}' AND email='${email}') OR id='${id}'`;
    await pool.query(queryText);
    response.send("deleted");
  } catch (error) {
    console.error(error);
  }
};
