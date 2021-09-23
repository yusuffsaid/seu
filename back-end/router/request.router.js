const express = require("express");
const { RequestHeaderFieldsTooLarge } = require("http-errors");
const request = express.Router();

const {
  createRequest,
  allRequest,
  changeRequestStatus,
} = require("../controller/request.controller");

request.post("/create", createRequest);
request.get("/allrequest", allRequest);
request.get("/updatestatus/:id", changeRequestStatus);
module.exports = request;
