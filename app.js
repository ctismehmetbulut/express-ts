const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors({
  exposedHeaders: ["X-Error-Code"],
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to ignore /favicon.ico requests
app.use((req, res, next) => {
  if (req.originalUrl === "/favicon.ico") {
    res.status(204).end();
  } else {
    next();
  }
});

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
