const express = require("express");
const Card = require("../models/Card");
const router = express.Router();
const mongoose = require('mongoose');
const Images = mongoose.model("ImageDetails");

router.post("/", async (req, res) => {
  const { base64 } = req.body;

  try {
    Images.create({ image: base64 });

    res.send({ Status: "ok" });
  } catch (error) {
    res.send({ Status: "error", data: error });
  }
});

module.exports = router;

