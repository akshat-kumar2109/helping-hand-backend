const mongoose = require("mongoose");
// const validator = require("validator");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

// JWT TOKEN
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = mongoose.model("User", userSchema);
