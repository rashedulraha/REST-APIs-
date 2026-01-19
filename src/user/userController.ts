import type { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModels from "./userModels.js";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import config from "../config/config.js";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    //! get user data
    console.log(req.body);

    const { name, email, password } = req.body;

    //! user data validation
    if (!name || !email || !password) {
        const error = createHttpError(400, "all field are required");
        return next(error);
    }

    try {
        //! call data base
        const user = await userModels.findOne({ email });

        if (user) {
            const error = createHttpError(
                400,
                "user already exists this email",
            );
            return next(error);
        }
    } catch (error) {
        return next(createHttpError(500, "Error while getting user"));
    }

    // ! password hash
    const hashPassword = await bcrypt.hash(password, 10);

    //! create user
    const newUser = await userModels.create({
        name,
        email,
        password: hashPassword,
    });

    //! token generation JWT
    const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
        expiresIn: "7d",
    });

    res.json({ accessToken: token });
};

export { createUser };
