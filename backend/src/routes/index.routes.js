const express = require("express");
const indexController = require("../controllers/index.controller")
const indexRouter = express.Router();

indexRouter.get("/",indexController.indexController);
indexRouter.post("/register",indexController.createUserController);


module.exports = indexRouter;