const express = require("express");

const CategoryController = require("../controllers/category.controller");

const router = express.Router();

router.post("/", CategoryController.create);
router.get("/", CategoryController.getAll);
router.delete("/:id", CategoryController.delete);
router.patch("/:id", CategoryController.update);

module.exports = router;
