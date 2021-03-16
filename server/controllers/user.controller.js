const User = require("../models/User");
const bcrypt = require("bcryptjs");

require("dotenv").config({ path: "../config/.env" });

const secretOrKey = process.env.secretOrKey;

const jwt = require("jsonwebtoken");

exports.userRegister = async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;
  const searchResult = await User.findOne({ email });

  console.log(searchResult);
  if (searchResult) return res.status(404).json({ msg: `User already exist` });

  try {
    const newUser = new User({
      name,
      email,
      phoneNumber,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    newUser.password = hash;

    await newUser.save();
    await res.status(201).json({ msg: `User added successfully` });
  } catch (error) {
    console.error("User register failed", error);
    res.status(401).json({ msg: `User register Failed` });
  }
};

exports.userLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(401).json({ msg: "Wrong email" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(401).json({ msg: "Wrong password" });

  try {
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
    };

    const token = await jwt.sign(payload, secretOrKey);

    return res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    console.error(error);
    res.status(404).json({ errors: error });
  }
};
