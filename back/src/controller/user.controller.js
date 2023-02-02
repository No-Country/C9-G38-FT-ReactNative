const User = require('../schemas/user.schema');

const create = async (req, res) => {
  const data = {
    firstName: 'test',
    lastName: 'testtest',
  };

  User.create(data);
  return res.send({ data: 'controller' });
};

module.exports = { create };
