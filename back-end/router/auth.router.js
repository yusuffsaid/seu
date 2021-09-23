const express = require("express");
const auth = express.Router();

const {
  register,
  login,
  getUser,
  allUser,
} = require("../controller/auth.controller");

auth.post("/register", register);
auth.post("/login", login);
auth.post("/getuser", getUser);
auth.get("/alluser", allUser);

module.exports = auth;
