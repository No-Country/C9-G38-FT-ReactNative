const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
  console.log('@tokens', payload);
  const token = jwt.sign({ user: payload }, process.env.SECRET, {
    expiresIn: '2d',
  });
  return token;
};

const validateToken = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, validateToken };
