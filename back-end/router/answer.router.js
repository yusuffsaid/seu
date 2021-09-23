const express = require("express");
const {
  createAnswer,
  updateAnswer,
  deleteAnswer,
} = require("../controller/answer.controller");
const answer = express.Router();

answer.post("/create", createAnswer);
answer.post("/update/:id", updateAnswer);
answer.delete("/delete/:id", deleteAnswer);

module.exports = answer;
