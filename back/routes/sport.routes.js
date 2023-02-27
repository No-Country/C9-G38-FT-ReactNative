const express = require('express');

const SportController = require('../controllers/sport.controller');
const { sportValidators } = require('../middlewares/validator.middleware');
const AuthMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.get(
  '/first-users',
  AuthMiddleware,
  SportController.getUsersWithSameSports
);
router.post('/', sportValidators, SportController.create);
router.get('/', SportController.getAll);
router.delete('/:id', SportController.delete);
router.patch('/:id', sportValidators, SportController.update);
router.get('/:id', SportController.getByUserId);

module.exports = router;
