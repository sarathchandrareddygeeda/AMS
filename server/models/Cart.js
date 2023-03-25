const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productId: String,
  email: String,
  name: String,
  price: String,
  image: String,
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
