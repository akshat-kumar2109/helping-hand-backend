const Food = require("../models/foodModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create food
exports.createFood = catchAsyncErrors(async (req, res, next) => {
  const { name, description, images, type, age, location } = req.body;

  const food = await Food.create({
    name,
    description,
    images,
    type,
    age,
    location,
    user: req.user._id,
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
