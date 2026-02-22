import dotenv from "dotenv";

dotenv.config();

export const gv = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/roomify",
  SALT_ROUNDS: process.env.SALT_ROUNDS || 12,
  JWT_SECRET: process.env.JWT_SECRET || "your_jwt_secret_key**",
};
