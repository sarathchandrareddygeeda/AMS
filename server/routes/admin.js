const express = require("express");
// const User = require("../models/User");
const router = express.Router();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const User = mongoose.model("User");
const url =
  "mongodb+srv://admin:admin@cluster0.dr8fhmz.mongodb.net/AMS?retryWrites=true&w=majority";
  const client = new MongoClient(url);
const db = client.db("AMS");
const images = db.collection("users");
const cust=db.collection("custinfos");
const services=db.collection("services");
const producti=db.collection("ImageDetails")
router.get("/admin-user", async (req, res) => {
    const result = await images.find().toArray();
    const j = JSON.stringify(result)
    console.log(j);
    res.send(j);
  });
  router.get("/admin-custinfo", async (req, res) => {
    const result = await cust.find().toArray();
    const j = JSON.stringify(result)
    console.log(j);
    res.send(result);
  });
  router.get("/service-info", async (req, res) => {
    const result = await services.find().toArray();
    const j = JSON.stringify(result)
    console.log(j);
    res.send(result);
  });
  router.get("/products-info", async (req, res) => {
    const result = await producti.find().toArray();
    const j = JSON.stringify(result)
    console.log(j);
    res.send(result);
  });
  module.exports = router;
  