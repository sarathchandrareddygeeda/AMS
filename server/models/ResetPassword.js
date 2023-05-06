const mongoose = require("mongoose");

const resetSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  otp: { type: String, required: true },
});

const ResetPassword = mongoose.model("ResetPassword", resetSchema);

module.exports = ResetPassword;