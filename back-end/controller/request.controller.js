const asyncErrorHandler = require("express-async-handler");
const Request = require("../model/request.model");

const createRequest = asyncErrorHandler(async (req, res, next) => {
  const information = req.body;

  console.log(information);

  const request = await Request.create(information);

  res.json({ success: true, request });
});

const allRequest = asyncErrorHandler(async (req, res, next) => {
  const request = await Request.find()
    .populate({ path: "user" })
    .populate({ path: "answers" })
    .populate({ path: "category" });

  res.json({ success: true, request });
});

const changeRequestStatus = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.query;
  console.log({ id, status });
  await Request.findByIdAndUpdate(id, { status: status });

  res.json({ success: true });
});

module.exports = { createRequest, allRequest, changeRequestStatus };
