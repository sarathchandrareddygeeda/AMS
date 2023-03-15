const mongoose = require("mongoose");

const Card = new mongoose.Schema(
  {
    image: String,
  },
  {
    collection: "ImageDetails",
  }
);

mongoose.model("ImageDetails", Card);
