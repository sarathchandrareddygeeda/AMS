const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    fname:  String,
    bcompany: String,
    bmodel:  String,
    bnumber: String,
    problem: String, 
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;