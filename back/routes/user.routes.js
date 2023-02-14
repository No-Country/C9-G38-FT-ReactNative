const express = require('express');

const UserController = require('../controllers/user.controller');
const AuthMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);
router.put('/', AuthMiddleware, UserController.update);
router.post('/search', UserController.search);
router.get('/search/:id', UserController.searchById);

module.exports = router;
