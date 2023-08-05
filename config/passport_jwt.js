import passport from "passport";
import JWTStrategy from "passport-jwt";
import { ExtractJWT } from "passport";

import Doctor from "../models/doctorSchema";

// Here we are using passport authentication
let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secrethospitalkey",
};

passport.use(
  new JWTStrategy(opts, function (jwtPayLoad, done) {
    Doctor.findById(jwtPayLoad._id, function (err, user) {
      if (err) {
        console.log("Error in finding user from JWT");
        return done(err, false);
      }

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

export default passport;
