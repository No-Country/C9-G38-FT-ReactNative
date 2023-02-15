const User = require('./user.model');
const Follow = require('./follow.model');
const Sport = require('./sport.model');

const relationshipModels = () => {
  User.belongsToMany(Sport, {
    through: 'userSports',
    foreignKey: 'userId',
  });

  Sport.belongsToMany(User, {
    through: 'userSports',
    foreignKey: 'sportId',
  });

  User.belongsToMany(User, { as: 'follows', through: 'followers' });
};

module.exports = relationshipModels;
