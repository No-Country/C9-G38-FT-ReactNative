const express = require('express');

const UserController = require('../controllers/user.controller');

const router = express.Router();

router.post('/', UserController.create);
router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);

router.put('/:id', UserController.editUser)

module.exports = router;
