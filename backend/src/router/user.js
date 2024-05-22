import express from "express";
import {
  createUser,
  deleteUser,
  getOneUser,
  getUsers,
  updateUser,
} from "../controller/user.js";
const user = express.Router();
user.route("/1").get(getUsers).post(createUser);
user.route("/user").get(getOneUser).put(updateUser).delete(deleteUser);
user.route("/oneuser").post(getOneUser);
export default user;
