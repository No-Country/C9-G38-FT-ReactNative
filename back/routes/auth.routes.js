const express = require('express');

const AuthController = require('../controllers/auth.controller');
const AuthMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.get('/me', AuthMiddleware, AuthController.getCurrent);

module.exports = router;
