const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    userPassword: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    userToken: {
      type: String,
      required: true,
      trim: true,
      minlength: 32,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
