const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const connectDB = async () => {
  try {
    mongoose.connect(process.env.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Data base connected successfully");
  } catch (error) {
    console.log("Data base error", error);
  }
};
module.exports = connectDB;
