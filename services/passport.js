// require node modules
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

// require helpers
const keys = require("../config/keys");
const User = mongoose.model("users");

// set passport serialization methods
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// serve strategies to passport
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (
      accessToken,
      refreshToken,
      { id, name, emails, photos, gender },
      done
    ) => {
      const existingUser = await User.findOne({ googleId: id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({
        googleId: id,
        email: emails[0].value,
        profilePicUrl: photos[0].value,
        name,
        gender
      }).save();

      console.log(user);

      done(null, user);
    }
  )
);
