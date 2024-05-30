import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcryptjs";

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can update only your account!"));
  }
  try {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }
    console.log(req.body);
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
          homeX: req.body.homeX,
          homeY: req.body.homeY,
          favouriteX: req.body.favouriteX,
          favouriteY: req.body.favouriteY,
        },
      },
      { new: true }
    );
    const { password: hashedpassword, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can update only your account!"));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User Deleted Successfuly");
  } catch (error) {
    next(error);
  }
};
