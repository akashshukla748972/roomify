import express from "express";
import authRouter from "./auth.routes.js";

const indexRouters = express.Router();

indexRouters.use("/auth", authRouter);

export default indexRouters;
