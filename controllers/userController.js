const User = require("../models/userModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const { OAuth2Client } = require("google-auth-library");
const sendToken = require("../utils/sendToken");

// Get user details
// exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
//   const user = await User.findById(req.user.id);

//   res.status(200).json({
//     sucess: true,
//     user,
//   });
// });

// user signin
const client = new OAuth2Client("");
exports.userSignin = catchAsyncErrors(async (req, res, next) => {
  const { imageURL, token } = req.body;

  client
    .verifyIdToken({
      idToken: token,
      audience:
        "117892246895-b6feu5jo8h9a3fcfkdac19revffmo330.apps.googleusercontent.com",
    })
    .then(async (response) => {
      const { email_verified, name, email } = response.payload;

      if (!email_verified) {
        return next(new ErrorHandler("Something went wrong..."));
      }

      const user = await User.findOne({ email });

      if (!user) {
        const user = await User.create({
          name,
          email,
          imageURL,
        });
        sendToken(user, 201, res);
      } else {
        sendToken(user, 200, res);
      }
    });
});

// logout user
exports.logoutUser = catchAsyncErrors((req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    sucess: true,
    message: "Logged out",
  });
});
