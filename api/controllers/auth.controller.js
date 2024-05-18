import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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

export const Signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not Found!!"));
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword)
      return next(errorHandler(401, "Invalid user credentials."));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password:hashedpassword, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
