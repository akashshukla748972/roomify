import userModel from "../models/user.model.js";
import { hashPassword, comparePassword } from "../utils/password.js";
import { generateToken } from "../utils/jwt.js";
import CustomError from "../utils/CustomError.js";

export const register = async (data) => {
  try {
    if (!data?.name || !data?.email || !data?.password) {
      throw new CustomError("Name, email and password are required", 400);
    }

    const exists = await userModel.findOne({ email: data.email });
    if (exists) {
      throw new CustomError("User already exists", 409);
    }

    const hashedPassword = await hashPassword(data.password);

    const user = await userModel.create({
      ...data,
      password: hashedPassword,
    });

    if (!user) {
      throw new CustomError("User registration failed", 500);
    }
    const payload = { id: user._id, role: user.role };
    const token = generateToken(payload);

    return { token };
  } catch (error) {
    console.log(error);
    if (error instanceof CustomError) throw error;
    throw new CustomError("Registration failed", 500);
  }
};

export const login = async (email, password) => {
  try {
    if (!email || !password) {
      throw new CustomError("Email and password are required", 400);
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      throw new CustomError("Invalid credentials", 401);
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      throw new CustomError("Invalid credentials", 401);
    }

    const token = generateToken({ id: user._id, role: user.role });

    return { token };
  } catch (error) {
    if (error instanceof CustomError) throw error;
    throw new CustomError("Login failed", 500);
  }
};
