const mongoose = require("mongoose");

const Card = new mongoose.Schema(
  {
    name: String,
    price: Number,
    image: String,
  },
  {
    collection: "ImageDetails",
  }
);

mongoose.model("ImageDetails", Card);

