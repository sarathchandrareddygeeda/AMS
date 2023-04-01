const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  bcompany: { type: String, required: true, unique: true },
  bmodel: { type: String, required: true },
  bnumber:{ type: String, required: true },
  problem:{ type: String, required: true },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
