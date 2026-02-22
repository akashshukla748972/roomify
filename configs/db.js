import mongoose from "mongoose";
import { gv } from "./global_variable.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(gv.MONGO_URI);
    console.log("database connected successfully!");
  } catch (error) {
    console.error("database connection error:", error);
    process.exit(1);
  }
};
