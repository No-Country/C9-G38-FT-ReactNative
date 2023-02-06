const express = require("express");
//Importing controllers...
const { createUser, getAllUsers } = require("../controllers/user.controller");

const userRouter = express.Router();

//Creating routes...
userRouter.post("/", createUser);
userRouter.get("/", getAllUsers);

module.exports = { userRouter };
