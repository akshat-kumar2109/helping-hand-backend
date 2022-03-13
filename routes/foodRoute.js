const express = require("express");
const {
  getAllFoods,
  createFood,
  getUserFood,
  deleteFood,
} = require("../controllers/foodController");
const multer = require("multer");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, getRandomInt(99999999) + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 20,
  },
  fileFilter: fileFilter,
});

const router = express.Router();

router.route("/foods").get(getAllFoods);

router.route("/food/new").post(upload.single("images"), createFood);

router.route("/food/:id").get(getUserFood).delete(deleteFood);

module.exports = router;
