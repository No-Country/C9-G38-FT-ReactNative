const express = require('express');
const { userExist } = require('../middlewares/user.middlewares');

//Importing controllers...

const {
  createUser,
  getUserById,
  getAllUsers,
} = require('../controllers/user.controller');

//Importing middlewares

const userRouter = express.Router();

//Creating routes...
userRouter.post('/', createUser);
userRouter.get('/', getAllUsers);
userRouter.get('/:id', userExist, getUserById);

module.exports = { userRouter };
