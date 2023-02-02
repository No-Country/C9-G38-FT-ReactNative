const express = require('express');
const { create } = require('../controller/user.controller');

const router = express.Router();

router.get('/', create);

module.exports = router;
