const express = require("express");
const { userSignin } = require("../controllers/userController");

const router = express.Router();

// USER
router.route("/google-register").post(userSignin);

module.exports = router;
