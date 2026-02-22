import express from "express";

const indexRouters = express.Router();

indexRouters.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Roomify API!", success: true });
});

export default indexRouters;
