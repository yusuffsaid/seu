const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestsSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  status: { default: "waiting", type: String },
  answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  days: Number,
  cost: Number,
});

module.exports = mongoose.model("Requests", requestsSchema);
