const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Lütfen bir kategori ismi giriniz!"],
  },
  icon: {
    type: String,
  },
});

module.exports = mongoose.model("Category", categorySchema);
