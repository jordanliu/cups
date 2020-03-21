const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Customer = mongoose.model("Customers");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(
      new JwtStrategy(opts, (jwt_payload, done) => {
        Customer.findById(jwt_payload.id)
          .then(customer => {
            if (customer) {
              return done(null, customer);
            }
            return done(null, false);
          })
          .catch(err => console.log(err));
      })
    );
  };