const express = require("express");

const SubcategoryController = require("../controllers/subcategory.controller");

const router = express.Router();

router.post("/", SubcategoryController.create);
router.get("/", SubcategoryController.getAll);
router.delete("/:id", SubcategoryController.delete);
router.patch("/:id", SubcategoryController.update);

module.exports = router;
