const mongoose = require("mongoose");

const custInfoSchema = new mongoose.Schema({
      fname:String,
      lname:String,
      pno:String,
      address:String,
      state:String,
      country:String,
      zipcode:String,
      city:String,
});

const CustInfo = mongoose.model("CustInfo", custInfoSchema);

module.exports = CustInfo;
