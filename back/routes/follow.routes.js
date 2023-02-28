const express = require('express');

const FollowController = require('../controllers/follow.controller');
const AuthMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/requests', AuthMiddleware, FollowController.getRequests);
router.post('/', AuthMiddleware, FollowController.add);
router.delete('/:id', AuthMiddleware, FollowController.remove);
router.get('/', AuthMiddleware, FollowController.getById);
router.get('/request/:id', AuthMiddleware, FollowController.getRequestById);
router.put('/aprove/:id', AuthMiddleware, FollowController.aprove);
router.put('/decline/:id', AuthMiddleware, FollowController.decline);

module.exports = router;
