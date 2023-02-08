const express = require('express');

const CategoryController = require('../controllers/category.controller');
const AuthMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/', CategoryController.create);

module.exports = router;
