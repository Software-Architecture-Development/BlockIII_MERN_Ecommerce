const mongoose = require("mongoose");

//CREATING SCHEMA OF USER
<<<<<<< HEAD
const userSchema = new mongoose.Schema(
  {
    Username: { type: String, required: true, unique: true },
=======
const UserSchema = new mongoose.Schema(
  { 
    name: { type: String, required: true, unique: true },
    lastname: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
>>>>>>> 255e3b7b7f46d1294059e05e0b579833315aecd6
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirm_password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);