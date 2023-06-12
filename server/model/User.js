import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true, // remove space from end & an begining if have
      required: true,
      maxlength: 35,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    favorites: {
      type: [String],
      default: null
    },
    cart_items: {
      type: [String],
      default: null,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
