import type { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

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

  //! process
  //! response

  res.json({ message: "user create successfully and more result" });
};

export { createUser };
