import dotenv from "dotenv";

dotenv.config();

export const gv = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/roomify",
};
