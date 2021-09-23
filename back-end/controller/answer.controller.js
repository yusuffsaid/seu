const asyncErrorHandler = require("express-async-handler");
const Answer = require("../model/answer.model");

const createAnswer = asyncErrorHandler(async (req, res, next) => {
  const information = req.body;

  const answer = await Answer.create({ ...information });

  res.json({
    status: true,
    answer,
  });
});

const updateAnswer = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const information = req.body;

  const answer = await Answer.findByIdAndUpdate(id, information);
  res.json({ sucess: true, answer });
});

const deleteAnswer = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  await Answer.findByIdAndDelete(id);
  res.json({ sucess: true });
});

module.exports = {
  createAnswer,
  updateAnswer,
  deleteAnswer,
};
