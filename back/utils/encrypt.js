const bcrypt = require('bcrypt');
const SALT_ROUND = 10;

const encrypt = async (password) => {
  const pass = await bcrypt.hash(password, SALT_ROUND);
  return pass;
};

module.exports = { encrypt };
