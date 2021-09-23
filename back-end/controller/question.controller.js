const asyncErrorHandler = require("express-async-handler");

const Question = require("../model/questions.model");
const Answer = require("../model/answer.model");
const createQuestion = asyncErrorHandler(async (req, res, next) => {
  const information = req.body;

  const question = await Question.create({ ...information });

  res.json({
    status: true,
    question,
  });
});

const getQuestions = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const questions = await Question.find({ category: id }).populate({
    path: "answers",
  });

  res.json({
    sucess: true,
    questions,
  });
});

const getAllQuestions = asyncErrorHandler(async (req, res, next) => {
  const questions = await Question.find()
    .populate({
      path: "answers",
    })
    .populate({
      path: "category",
    });
  res.json({
    sucess: true,
    questions,
  });
});

const deleteQuestion = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  await Question.findByIdAndDelete(id);
  await Answer.deleteMany({ question: id });
  res.json({ success: true, id });
});

const addAnswer = asyncErrorHandler(async (req, res, next) => {
  const info = req.body;
  console.log(info);
  const answer = await Answer.create(info);

  await Question.findByIdAndUpdate(answer.question, {
    $addToSet: { answers: answer._id },
  });

  res.json({ success: true, answer });
});

module.exports = {
  createQuestion,
  getQuestions,
  getAllQuestions,
  deleteQuestion,
  addAnswer,
};
