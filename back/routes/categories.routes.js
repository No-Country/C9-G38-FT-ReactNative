const express = require("express");

//Importing controllers...
const { createCategory } = require("../controllers/category.controller");

//Importing middlewares
const categoryRouter = express.Router();

//Creating routes...
categoryRouter.post("/", createCategory);

module.exports = { categoryRouter };
