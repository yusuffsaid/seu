const asyncErrorHandler = require("express-async-handler");
const Category = require("../model/category.model");
const Question = require("../model/questions.model");
const createRegister = asyncErrorHandler(async (req, res, next) => {
  const information = req.body;

  const category = await Category.create({ ...information });

  res.json({
    status: true,
    category,
  });
});

const getAllCategory = asyncErrorHandler(async (req, res, next) => {
  const categories = await Category.find();

  res.json({
    success: true,
    categories,
  });
});

const deleteCategory = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;

  await Category.findByIdAndDelete(id);
  await Question.deleteMany({ category: id });

  res.json({ success: true });
});

module.exports = {
  createRegister,
  getAllCategory,
  deleteCategory,
};
