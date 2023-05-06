const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productId: String,
  email: String,
  name: String,
  price: Number,
  image: String,
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
