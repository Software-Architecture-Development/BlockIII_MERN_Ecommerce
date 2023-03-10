const mongoose = require("mongoose");

//CREATING SCHEMA OF USER
const userSchema = new mongoose.Schema(
  {
    Username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img:{ type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);