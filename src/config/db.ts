import mongoose from "mongoose";
import config from "./config.js";

const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("connected to database successfully");
    });

    mongoose.connection.on("error", (error) => {
      console.log("Error in connected", error);
    });

    await mongoose.connect(config.dataBaseUrl as string);
  } catch (error) {
    console.error("Failed to error", error);
    process.exit(1);
  }
};

export default connectDb;
