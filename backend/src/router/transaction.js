import express from "express";
import {
  createTransaction,
  getOneTransaction,
  getTransactions,
} from "../controller/transaction.js";

const transaction = express.Router();
transaction.route("/").post(createTransaction).get(getTransactions)
transaction.route("/transaction").get(getOneTransaction)
export default transaction;
