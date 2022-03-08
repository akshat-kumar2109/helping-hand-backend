const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

const userRoute = require("./routes/userRoute");
const foodRoute = require("./routes/foodRoute");

app.use("/", userRoute);
app.use("/", foodRoute);

module.exports = app;
