import { pool } from "../../db.js";
pool.connect();

export const getCategorys = async (req, res) => {
  const id = req.query.user_id;
  try {
    const queryText = `SELECT * FROM users u INNER JOIN categorys c ON u.id = c.user_id WHERE u.id = $1  `;
    const response = await pool.query(queryText, [id]);
    res.send(response.rows);
  } catch (error) {
    console.log(error);
  }
};
export const createCategory = async (req, response) => {
  const { user_id, name, description } = req.body;
  try {
    const queryText = `INSERT INTO categorys (id, user_id, name, description) VALUES (gen_random_uuid (), $1,  $2, $3) RETURNING *`;
    const res = await pool.query(queryText, [user_id, name, description]);
    response.send(res.rows[0]);
  } catch (error) {
    console.error(error);
    response.send("error query");
  }
};
export const updateCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    const queryText = `UPDATE categorys SET name='${name}' WHERE description='${description}'`;
    const response = await pool.query(queryText);
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
};
