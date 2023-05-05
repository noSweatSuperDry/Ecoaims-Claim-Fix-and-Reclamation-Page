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
      maxlength: 10
    },
    userPassword: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    userEmail: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,

    },

  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
