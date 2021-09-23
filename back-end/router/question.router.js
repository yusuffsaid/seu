const express = require("express");
const {
  createQuestion,
  getQuestions,
  getAllQuestions,
  deleteQuestion,
  addAnswer,
} = require("../controller/question.controller");
const question = express.Router();

question.post("/create", createQuestion);
question.get("/all", getAllQuestions);
question.post("/addanswer", addAnswer);
question.delete("/:id", deleteQuestion);
question.get("/all/:id", getQuestions);

module.exports = question;
