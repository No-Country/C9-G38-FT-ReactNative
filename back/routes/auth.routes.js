const express = require("express");

const AuthController = require("../controllers/auth.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

//Validators...
const { userValidators } = require("../middlewares/validator.middleware");

router.post("/login", AuthController.login);
router.post("/register", userValidators, AuthController.register);
router.get("/me", AuthMiddleware, AuthController.getCurrent);

module.exports = router;
