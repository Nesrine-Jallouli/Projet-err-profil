const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");

require("dotenv").config({ path: "../config/.env" });

const secretOrKey = process.env.secretOrKey;
const Entreprise = require("../models/Entreprise");
const optsE = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey,
};

passport.initialize();

passport.use(
  new JwtStrategy(optsE, async (jwt_payload, done) => {
    const { id } = jwt_payload;

    console.log(id);

    console.log(jwt_payload);

    try {
      const entreprise = await Entreprise.findById(id);

      console.log(entreprise);

      entreprise ? done(null, entreprise) : done(null, false);
    } catch (error) {
      console.error(error);
    }
  })
);

module.exports = isAuthEnt = () =>
  passport.authenticate("jwt", { session: false });
