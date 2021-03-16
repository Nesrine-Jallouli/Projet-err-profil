const Entreprise = require("../models/Entreprise");
const bcrypt = require("bcryptjs");

require("dotenv").config({ path: "../config/.env" });

const secretOrKey = process.env.secretOrKey;

const jwt = require("jsonwebtoken");

exports.entrepriseRegister = async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;
  const searchResult = await Entreprise.findOne({ email });
  console.log(searchResult);
  if (searchResult) return res.status(404).json({ msg: `Entreprise already exist` });
  try {
    const newEntreprise = new Entreprise({
      name,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newEntreprise.password = hash;
    await newEntreprise.save();
    await res.status(201).json({ msg: `Entreprise added successfully` });
  } catch (error) {
    console.error("Entreprise register failed", error);
    res.status(401).json({ msg: `Entreprise register Failed` });
  }
};

exports.entrepriseLogin = async (req, res) => {
  const { email, password } = req.body;
  const entreprise = await Entreprise.findOne({ email });
  if (!entreprise) return res.status(401).json({ msg: "Wrong email" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ msg: "Wrong password" });
  try {
    const payload = {
      id: entreprise._id,
      name: entreprise.name,
      email: entreprise.email,
    };
    const token = await jwt.sign(payload, secretOrKey);
    return res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    console.error(error);
    res.status(404).json({ errors: error });
  }
};
