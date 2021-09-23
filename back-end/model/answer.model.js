const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  question: { type: Schema.Types.ObjectId, ref: "Question" },
  text: {
    type: String,
  },
  days: {
    type: Number,
  },
  cost: {
    type: Number,
  },
});

module.exports = mongoose.model("Answer", answerSchema);
