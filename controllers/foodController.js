const Food = require("../models/foodModel");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const multer = require("multer");

// create food
exports.createFood = catchAsyncErrors(async (req, res, next) => {
  const { name, description, type, location, id } = req.body;

  const food = await Food.create({
    name,
    description,
    images: req.file.path,
    type,
    location,
    user: id,
  });

  res.status(201).json({
    sucess: true,
    food,
  });
});

// get all food
exports.getAllFoods = catchAsyncErrors(async (req, res, next) => {
  const foods = await Food.find();

  res.status(200).json({
    sucess: true,
    foods,
  });
});

// get food of user
exports.getUserFood = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;

  const user = await User.findById(id);

  const userFood = await Food.find({ user });

  console.log(userFood);
});
