const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionsSchema = new Schema({
  /* id: { required: true, type: Number }, */
  name: {
    type: String,
    required: [true, "Lütfen bir soru giriniz!"],
  },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  isMultiple: {
    type: Boolean,
    default: false,
  },
  answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
});

module.exports = mongoose.model("Question", questionsSchema);
