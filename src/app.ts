import express from "express";

import globalErrorHandler from "./middleware/GlobalErrorHandler.js";

const app = express();

// routes

// http method : get post put patch delete
app.get("/", (req, res) => {
  res.json({ message: "Welcome to more  and other api" });
});

//! global error handler
app.use(globalErrorHandler);

export default app;
