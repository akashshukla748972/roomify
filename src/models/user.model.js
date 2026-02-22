import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
      index: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "user", "manager"],
      default: "user",
    },
    refreshToken: {
      type: String,
      default: "",
    },
    rfTokenExpireIn: {
      type: Date,
      default: null,
    },
    password: String,
    role: { type: String, default: "USER" },
  },
  { timestamps: true },
);

const userModel = model("user", userSchema);
export default userModel;
