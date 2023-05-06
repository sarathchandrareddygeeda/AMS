const express = require("express");
const Card = require("../models/ResetPassword");
const router = express.Router();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const Images = mongoose.model("ResetPassword");
const url =
  "mongodb+srv://admin:admin@cluster0.dr8fhmz.mongodb.net/AMS?retryWrites=true&w=majority";
const client = new MongoClient(url);
const db = client.db("AMS");
const images = db.collection("ResetPassword");
router.post("/resetpass", async (req, res) => {
  const { email, otp } = req.body;
  try {
    
    await Images.create({ email: email, otp: otp});

    res.send({ Status: "ok" });
  } catch (error) {
    res.send({ Status: "error", data: error });
  }
});
module.exports = router;