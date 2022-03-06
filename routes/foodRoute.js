const express = require("express");
const { getAllFoods, createFood } = require("../controllers/foodController");

const router = express.Router();

router.route("/foods").get(getAllFoods);

router.route("/food/new").post(createFood);

module.exports = router;
