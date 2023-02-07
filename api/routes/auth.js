const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// HASHING PASSWORD
const CryptoJS = require("crypto-js");

//REGISTER
router.post("/register", async (req, res) => {
    console.log("auth", req);
    const newUser = new User({
      name:req.body.name,
      lastname:req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      name: req.body.name,
      lastname: req.body.lastname,
      confirm_password: req.body.confirm_password,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SECRET
      ).toString(),
      confirm_password:req.body.confirm_password,
    });
  
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });

//CHECK VALID USER
      !user && res.status(401).json("Wrong credentials!");
  
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SECRET
      );
      const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

//CHECK VALID PASSWORD
      OriginalPassword !== req.body.password &&
        res.status(401).json("Wrong credentials!");

//SIGNING JWT TOKEN
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET,
        {expiresIn:"3d"}
      );
  
      const { password, ...others } = user._doc;
  
      res.status(200).json({...others, accessToken});
    } catch (err) {
      res.status(500).json(err);
    }
  });


  module.exports = router;