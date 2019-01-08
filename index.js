// require node modules
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

//require helpers
require("./models/User");
require("./services/passport");

//initialize mongoose
mongoose.Promise = global.Promise;
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

// initialize express
const app = express();

// add express configs
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// serve routes
require("./routes/authRoutes")(app);

// attach react client
if (process.env.NODE_ENV === "production") {
  // serve up production assets
  app.use(express.static("client/build"));

  // serve up the index.html for any other route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// listen on port 5000 or given by provider
const PORT = process.env.PORT || 5000;
app.listen(PORT);
