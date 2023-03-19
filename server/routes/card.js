const express = require("express");
const Card = require("../models/Card");
const router = express.Router();
const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
const Images = mongoose.model("ImageDetails");
const url="mongodb+srv://admin:admin@cluster0.dr8fhmz.mongodb.net/AMS?retryWrites=true&w=majority"
const client = new MongoClient(url);
const db = client.db("AMS");
const images = db.collection("ImageDetails");
router.post("/upload", async (req, res) => {
  const { name,price,base64 } = req.body;

  try {
   await Images.create({ name:name,price:price,image: base64 });

    res.send({ Status: "ok" });
  } catch (error) {
    res.send({ Status: "error", data: error });
  }
});

router.get('/card',async (req,res) => {
  const result = await images.find().toArray();
  console.log(result);
  res.send(result);
})
router.get("/card-get", async (req, res) => {
  try {
   await Images.find({}).then(data =>{
    res.send({ Status: "success", data: data });
   })
  } catch (error) {
    res.send({ Status: "error", data: error });
  }
});



module.exports = router;

