const express = require("express");
const Card = require("../models/Card");
const router = express.Router();
const mongoose = require('mongoose');
const Images = mongoose.model("ImageDetails");

router.post("/upload", async (req, res) => {
  const { name,price,base64 } = req.body;

  try {
   await Images.create({ name:name,price:price,image: base64 });

    res.send({ Status: "ok" });
  } catch (error) {
    res.send({ Status: "error", data: error });
  }
});


router.get("/card-get", async (req, res) => {
  const { base64 } = req.body;

  try {
   await Images.find({}).then(data =>{
    res.send({ Status: "success", data: data });
   })
  } catch (error) {
    res.send({ Status: "error", data: error });
  }
});

module.exports = router;

