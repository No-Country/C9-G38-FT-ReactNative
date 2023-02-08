const express = require("express");

const SubcategoryController = require("../controllers/subcategory.controller");

const router = express.Router();

router.post("/", SubcategoryController.create);
router.get("/", SubcategoryController.getAll);


module.exports = router;
