import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "gs://edcare-92d29.appspot.com/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    homeX: {
      type: Number,
      default: 0.0,
    },
    homeY: {
      type: Number,
      default: 0.0,
    },
    favouriteX: {
      type: Number,
      default: 0.0,
    },
    favouriteY: {
      type: Number,
      default: 0.0,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
