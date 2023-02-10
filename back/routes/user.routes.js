const express = require("express");

const UserController = require("../controllers/user.controller");

const router = express.Router();

router.get("/", UserController.getAll);
router.get("/:id", UserController.getById);
router.post("/subcategoriesuser", UserController.assignSubcategoryInUser);

module.exports = router;
