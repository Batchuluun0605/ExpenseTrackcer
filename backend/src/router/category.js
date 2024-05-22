import express from "express";
import { createCategory, getCategorys, updateCategory } from "../controller/category.js";
const category = express.Router();
category.route("/").post(createCategory).get(getCategorys);
category.route("/category").put(updateCategory);
export default category;
