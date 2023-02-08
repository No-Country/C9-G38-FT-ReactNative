const express = require('express');

const AuthController = require('../controllers/auth.controller');
const validateAuth = require("../middlewares/auth");


const router = express.Router();

router.post('/login', AuthController.login, validateAuth);
router.post('/register', AuthController.register);

module.exports = router;
