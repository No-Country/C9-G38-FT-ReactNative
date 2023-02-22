const express = require('express');

const FollowController = require('../controllers/follow.controller');
const AuthMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', AuthMiddleware, FollowController.add);
router.delete('/:id', AuthMiddleware, FollowController.remove);
router.get('/:id', AuthMiddleware, FollowController.getById);

module.exports = router;
