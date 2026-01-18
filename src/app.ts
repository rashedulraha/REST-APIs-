import express from "express";

const app = express();

// routes

// http method : get post put patch delete
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to more  and other api",
  });
});

export default app;
