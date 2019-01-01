// require node modules
const express = require("express");

// initialize express
const app = express();

// set routes
app.get("/", (req, res) => {
  res.send({ hi: " there" });
});

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

const PORT = process.env.PORT || 5000;
app.listen(PORT);
