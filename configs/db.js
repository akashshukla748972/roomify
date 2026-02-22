import mongoose from "mongoose";
import { gv } from "./global_variable.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(gv.MONGO_URI);
    console.log(`database connected to ${conn.connection.host}`);
  } catch (error) {
    console.error("database connection error:", error);
    process.exit(1);
  }
};
