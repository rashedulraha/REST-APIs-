import mongoose from "mongoose";
import type { User } from "./userTypes.js";

const userSchema = new mongoose.Schema<User>(
  {
    //? name
    name: { type: String, require: true },

    //? email
    email: { type: String, unique: true, require: true },

    //? password
    password: { type: String, require: true },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<User>("user", userSchema);
