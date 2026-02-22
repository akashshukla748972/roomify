import express from "express";
import cors from "cors";

import errorHandler from "./middlewares/errorHandler.js";
import CustomError from "./utils/CustomError.js";
import indexRouters from "./routes/indexRouters.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Roomify!", success: true });
});
app.use("/api/v1", indexRouters);
app.use((req, res, next) => {
  next(new CustomError("Page not found, Try again.", 404));
});
app.use(errorHandler);

export default app;
