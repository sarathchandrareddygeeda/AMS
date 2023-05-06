const mongoose = require("mongoose");

const Card = new mongoose.Schema(
  {
    name: String,
    price: String,
    image: String,
  },
  {
    collection: "ImageDetails",
  }
);

mongoose.model("ImageDetails", Card);

