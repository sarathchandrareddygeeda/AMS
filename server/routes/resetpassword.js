const express = require("express");
const Card = require("../models/ResetPassword");
const User=require("../models/User");
const router = express.Router();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const ResetPassword = require("../models/ResetPassword");
const Images = mongoose.model("ResetPassword");
const url =
  "mongodb+srv://admin:admin@cluster0.dr8fhmz.mongodb.net/AMS?retryWrites=true&w=majority";
const client = new MongoClient(url);
const db = client.db("AMS");
const images = db.collection("ResetPassword");

router.post("/otpvalid",async (req,res) =>{
  const otp=req.body;
  const validotp=await ResetPassword.findOne({otp})
  if(validotp){
    return res.status(200).json({ message: 'Verified' });
  }
  else{
    return res.status(400).json({ message: 'Invalid OTP' });
  }
})

router.post("/resetpass", async (req, res) => {
  const { email, otp } = req.body;
  try {
    const user=await User.findOne({email});
    if(user){
    const existingUser = await ResetPassword.findOne({ email });
    if (existingUser) {
      await ResetPassword.findOneAndUpdate({email : email},{otp : otp})
    }
    else{
    await Images.create({ email: email, otp: otp});

    res.send({ Status: "ok" });
  } }
}catch (error) {
    res.send({ Status: "error", data: error });
  }
});
module.exports = router;