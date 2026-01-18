import express from "express";

import globalErrorHandler from "./middleware/GlobalErrorHandler.js";
import userRouter from "./user/userRouter.js";

const app = express();
app.use(express.json());

// http method : get post put patch delete
app.get("/", (req, res) => {
  res.json({ message: "Welcome to more  and other api" });
});

app.use("/api/users", userRouter);

//! global error handler
app.use(globalErrorHandler);

export default app;
