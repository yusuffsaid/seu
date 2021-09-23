const express = require("express");
const router = express.Router();

const auth = require("./auth.router");
const category = require("./category.router");
const question = require("./question.router");
const answer = require("./answer.router");
const request = require("./request.router");

router.use("/auth", auth);
router.use("/category", category);
router.use("/question", question);
router.use("/answer", answer);
router.use("/request", request);

module.exports = router;
