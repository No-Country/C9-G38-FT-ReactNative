const { validateToken } = require('../config/tokens');
const jwt = require('jsonwebtoken');

function AuthMiddleware(req, res, next) {
  const token = req.header('Authorization');

  if (!token)
    return res.status(401).json({
      message: 'Token is required',
    });

  try {
    const { id } = jwt.verify(token, process.env.TOKEN_SECRET);

    req.userId = id;

    next();
  } catch (e) {
    return res.status(401).json({
      message: 'Token is invalid',
    });
  }
}

module.exports = AuthMiddleware;
