const express = require('express');

const UserController = require('../controllers/user.controller');
const AuthMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');

router.get('/', UserController.getAll);
router.get('/:id', AuthMiddleware, UserController.getById);
router.put('/', AuthMiddleware, UserController.update);
router.post('/search', UserController.search);
router.get('/search/:id', UserController.searchById);

router.put(
  '/update-avatar',
  AuthMiddleware,
  upload.single('file'),
  UserController.updateAvatar
);

// router.get('/search/:id', UserController.searchById);

// router.put('/:id', UserController.editUser);

module.exports = router;
