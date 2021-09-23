const express = require("express");
const category = express.Router();

const {
  createRegister,
  getAllCategory,
  deleteCategory,
} = require("../controller/category.controller");

category.post("/create", createRegister);
category.get("/all", getAllCategory);
category.delete("/delete/:id", deleteCategory);

module.exports = category;
