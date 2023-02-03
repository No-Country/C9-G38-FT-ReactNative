const express = require("express");
//Importing controllers...
const { createUser } = require("../controllers/user.controller");

const userRouter = express.Router();

//Creating routes...
userRouter.post("/", createUser);

module.exports = { userRouter };
