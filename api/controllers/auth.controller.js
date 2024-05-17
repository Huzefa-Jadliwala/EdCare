import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const Signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashedpassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedpassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully." });
  } catch (error) {
    next(error);
  }
};
