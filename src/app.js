const express = require("express");
const nameRoute = require("./nameRoute");
const app = express();

// Define global middlewares here:

app.get("/", (req, res) => {
  res.send("Hello world");
});

// Register all routers
app.use("/example", require("./routes/ExampleRoutes"));
app.use("/", nameRoute);
module.exports = app;
