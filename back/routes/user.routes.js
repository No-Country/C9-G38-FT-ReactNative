const express = require("express");
//Importing controllers...
const { createUser, getUserById } = require("../controllers/user.controller");

//Importing middlewares

const { userExist } = require("../middlewares/user.middlewares");

const userRouter = express.Router();

//Creating routes...
userRouter.post("/", createUser);
userRouter.get("/:id", userExist, getUserById);

module.exports = { userRouter };
