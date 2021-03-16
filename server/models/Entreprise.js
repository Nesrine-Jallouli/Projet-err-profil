const mongoose = require("mongoose");

const EntrepriseSchema = mongoose.Schema({
  name: {type:String,require:true},
  email: {type:String,require:true},
  phoneNumber: Number,
  password: {type:String,require:true},
  mobileNumber: Number,
  adress:String,
  raisonSocial:String,
  logo:String,
  nbreEmploye:String,
  description:String,
});

module.exports = Entreprise = mongoose.model("entreprise", EntrepriseSchema);