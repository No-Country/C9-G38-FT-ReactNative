const express = require('express');

const SportController = require('../controllers/sport.controller');

const router = express.Router();

router.post('/', SportController.create);
router.get('/', SportController.getAll);
router.delete('/:id', SportController.delete);
router.patch('/:id', SportController.update);
router.get('/:id', SportController.getByUserId);

module.exports = router;
