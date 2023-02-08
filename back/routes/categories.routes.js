const express = require('express');

const CategoryController = require('../controllers/category.controller');

const router = express.Router();

router.post('/', CategoryController.create);
router.get('/', CategoryController.getAll);

module.exports = router;
