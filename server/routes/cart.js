const express = require("express");
const Cart = require("../models/Cart");
const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
// const Images = mongoose.model("ImageDetails");
const url="mongodb+srv://admin:admin@cluster0.dr8fhmz.mongodb.net/AMS?retryWrites=true&w=majority"
const client = new MongoClient(url);
const db = client.db("AMS");
const images = db.collection("ImageDetails");
const cart = db.collection("carts");
const router = express.Router();

router.post('/cart',async(req,res)=>
{
    const{
        productId,
        name,
        price,image
    }=req.body;

    const existingUser = await Cart.findOne({  productId });
  if (existingUser) {
    return res.status(400).json({ message: ' already added' });
  }
  else
  {
  const cart = new Cart({productId,name,price,image});
    await cart.save();
    res.json({ message: 'User created successfully' });
  }

});
  
router.get('/cart-get',async (req,res) => {
  const result = await cart.find({},{productId:1,_id:0}).toArray();
  // const result = await images.find({_id:products}).toArray();
  console.log(result);
  res.send(result);
})






module.exports = router;