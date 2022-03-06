const app = require("./app");
const connectDatabase = require("./config/database");

// Config
const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });

// Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () =>
  console.log(`Server is running on PORT ${process.env.PORT}`)
);
