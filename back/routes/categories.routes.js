const express = require("express");

const CategoryController = require("../controllers/category.controller");

const router = express.Router();

router.post("/", CategoryController.create);

module.exports = router;
