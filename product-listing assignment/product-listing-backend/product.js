const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: String,
  description: String,
  thumbnail: String,
});

module.exports = mongoose.model("product", productSchema);
