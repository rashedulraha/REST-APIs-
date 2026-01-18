import type { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModels from "./userModels.js";
import bcrypt from "bcrypt";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  //! get user data
  console.log(req.body);

  const { name, email, password } = req.body;

  //! user data validation
  if (!name || !email || !password) {
    const error = createHttpError(400, "all field are required");
    return next(error);
  }

  //! call data base
  const user = await userModels.findOne({ email });

  if (user) {
    const error = createHttpError(400, "user already exists this email");
    return next(error);
  }

  // ! password hash
  const hashPassword = await bcrypt.hash(password, 10);

  res.json({ message: "user create successfully and more result" });
};

export { createUser };
