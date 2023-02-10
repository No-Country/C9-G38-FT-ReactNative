const bcrypt = require('bcrypt');
const SALT_ROUND = 10;

const encrypt = async (password) => {
  const newPass = await bcrypt.hash(password, SALT_ROUND);
  return newPass;
};

module.exports = { encrypt };
