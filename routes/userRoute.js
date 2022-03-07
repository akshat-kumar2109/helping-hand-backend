const express = require("express");
const { userSignin, logoutUser } = require("../controllers/userController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

// USER
router.route("/google-register").post(userSignin);
router.route("/logout").post(logoutUser);

module.exports = router;
