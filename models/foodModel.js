const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter food name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter food description"],
  },
  images: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: [true, "Please enter food type"],
  },
  age: {
    type: Number,
    required: [true, "Please enter food age"],
  },
  location: {
    type: String,
    required: [true, "Please enter your location"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Food", foodSchema);
