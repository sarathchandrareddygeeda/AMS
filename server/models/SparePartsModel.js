const mongoose = require("mongoose");

const Cardspare = new mongoose.Schema(
  {
    name: String,
    price: Number,
    image: String,
  },
  {
    collection: "SparePartsInfo",
  }
);

mongoose.model("SparePartsModelling", Cardspare);

