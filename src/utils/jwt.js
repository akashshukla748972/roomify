import jwt from "jsonwebtoken";
import { gv } from "../../configs/global_variable.js";

export const generateToken = (payload) => {
  console.log(payload);
  return jwt.sign(payload, gv.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
