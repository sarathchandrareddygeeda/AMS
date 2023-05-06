const express = require("express");
const bcrypt = require('bcryptjs');
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
  const {email,otp}=req.body;
  const validemail=await ResetPassword.findOne({email})
  if(validemail){
    const validotp=await ResetPassword.findOne({otp})
    if(validotp){
    return res.status(200).json({ message: 'Verified' });
  }
}
  else{
    return res.status(400).json({ message: 'Invalid OTP' });
  }
})
router.post("/modifypass", async(req,res) =>{
  const {email , password} =req.body;
  try{
    const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
    await User.findOneAndUpdate({email : email},{password : hashedPassword})
      return res.status(200).json({ message: 'Password Updated' });
  }catch (error) {
    return res.status(400).json({ message: 'Error Occured' });
    }
})
router.post("/resetpass", async (req, res) => {
  const { email, otp } = req.body;
  try {
    const user=await User.findOne({email});

    const existingUser = await ResetPassword.findOne({ email });
    if (existingUser && user) {
      await ResetPassword.findOneAndUpdate({email : email},{otp : otp})
      return res.status(200).json({ message: 'OTP Sent Successfully' });
    }
    else if(user){
    await Images.create({ email: email, otp: otp});
    return res.status(200).json({ message: 'OTP Sent Successfully' });
  } else{
    return res.status(400).json({ message: 'Invalid Email' });
  }
}catch (error) {
  return res.status(400).json({ message: 'Invalid Email' });
  }
});
module.exports = router;