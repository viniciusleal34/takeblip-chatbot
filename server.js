const express = require("express");
const app = express();
const routes = require("./src/routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

app.use("/tmp", express.static(path.resolve(__dirname, "tmp", "uploads")));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(process.env.PORT || 3000);
