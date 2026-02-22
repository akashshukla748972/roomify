import bcrypt from "bcryptjs";
import { gv } from "../../configs/global_variable.js";
import CustomError from "./CustomError.js";

const SALT_ROUNDS = Number(gv.SALT_ROUNDS) || 12;

export const hashPassword = async (password) => {
  try {
    if (!password) {
      throw new CustomError("Password is required", 400);
    }

    return await bcrypt.hash(password, SALT_ROUNDS);
  } catch (error) {
    throw error instanceof CustomError
      ? error
      : new CustomError("Password hashing failed", 500);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  try {
    if (!password || !hashedPassword) {
      throw new CustomError("Password and hash are required", 400);
    }

    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    throw error instanceof CustomError
      ? error
      : new CustomError("Password comparison failed", 500);
  }
};
