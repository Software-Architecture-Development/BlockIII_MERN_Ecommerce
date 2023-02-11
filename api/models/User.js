const mongoose = require("mongoose");

//CREATING SCHEMA OF USER
const UserSchema = new mongoose.Schema(
  { 
    name: { type: String, required: true, unique: true },
    lastname: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirm_password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img:{ type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);