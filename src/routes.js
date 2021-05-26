const express = require("express");
const GithubController = require("./controllers/GithubController");
const routes = express.Router();

routes.get("/busca/:language", GithubController.show);

module.exports = routes;
