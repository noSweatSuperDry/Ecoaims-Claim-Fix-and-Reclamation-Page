const { link } = require("fs");
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
      maxlength: 10,
    },
    userPassword: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    firstName: {
      type: String,
      required: true,
      unique:false,
      trim: true,
      minlength: 3,
      
    },
    lastName: {
      type: String,
      trim: true,
      unique:false,
      minlength: 1,
      
    },

    userEmail: {
      type: String,
      unique: true,
      trim: true,
    },
    userPhoto: {
      type:String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
