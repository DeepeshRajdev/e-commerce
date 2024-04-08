const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong credentials");
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    !validPassword && res.status(400).json("Wrong credentials");


    const { password, ...others } = user._doc;
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRET_KEY, { expiresIn: "1d" });
    res.status(200).json({ ...others, token });
    } catch (err) {
    res.status(500).json(err);
    }
}
);
module.exports = router;